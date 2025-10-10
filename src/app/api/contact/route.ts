import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  getConfirmationEmailHTML,
  getConfirmationEmailSubject,
  getConfirmationEmailText
} from "@/emails/contact-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

// Schéma de validation avec Zod
const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  locale: z.enum(["fr", "en"]).optional().default("fr"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation avec Zod
    const validatedData = contactSchema.parse(body);

    // Email 1: Notification à toi (propriétaire)
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: "Portfolio <noreply@nkardas.fr>",
      to: process.env.CONTACT_EMAIL || "services.nkardas@icloud.com",
      replyTo: validatedData.email,
      subject: `Nouveau message de ${validatedData.name}`,
      html: `
        <h2>Nouveau message depuis votre portfolio</h2>
        <p><strong>Nom :</strong> ${validatedData.name}</p>
        <p><strong>Email :</strong> ${validatedData.email}</p>
        <p><strong>Message :</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (ownerError) {
      console.error("Erreur envoi notification:", ownerError);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    // Email 2: Confirmation au visiteur
    const confirmationHTML = getConfirmationEmailHTML({
      name: validatedData.name,
      locale: validatedData.locale as 'fr' | 'en',
    });

    const confirmationText = getConfirmationEmailText({
      name: validatedData.name,
      locale: validatedData.locale as 'fr' | 'en',
    });

    const confirmationSubject = getConfirmationEmailSubject(validatedData.locale as 'fr' | 'en');

    const { data: confirmData, error: confirmError } = await resend.emails.send({
      from: "Némo Kardassevitch <noreply@nkardas.fr>",
      to: validatedData.email,
      subject: confirmationSubject,
      text: confirmationText,
      html: confirmationHTML,
    });

    if (confirmError) {
      // On ne bloque pas si la confirmation échoue, mais on log l'erreur
      console.error("Erreur envoi confirmation:", confirmError);
    }

    return NextResponse.json(
      {
        message: "Message envoyé avec succès",
        id: ownerData?.id,
        confirmationSent: !confirmError
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", issues: error.issues },
        { status: 400 }
      );
    }

    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
