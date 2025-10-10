interface ConfirmationEmailProps {
  name: string;
  locale: 'fr' | 'en';
}

const translations = {
  fr: {
    subject: "Message reçu - nkardas.fr",
    greeting: "Bonjour",
    thanks: "Merci de m'avoir contacté !",
    received: "J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.",
    responseTime: "Je m'efforce généralement de répondre sous 24-48 heures.",
    meanwhile: "En attendant, n'hésitez pas à consulter",
    portfolio: "mon portfolio",
    projects: "mes projets",
    or: "ou",
    cv: "mon CV",
    regards: "Cordialement",
    signature: "Némo Kardassevitch",
    title: "Ingénieur Logiciel & Électronique",
    automatic: "Ceci est un message automatique, merci de ne pas y répondre.",
  },
  en: {
    subject: "Message received - nkardas.fr",
    greeting: "Hello",
    thanks: "Thank you for contacting me!",
    received: "I've received your message and will get back to you as soon as possible.",
    responseTime: "I usually respond within 24-48 hours.",
    meanwhile: "In the meantime, feel free to check out",
    portfolio: "my portfolio",
    projects: "my projects",
    or: "or",
    cv: "my resume",
    regards: "Best regards",
    signature: "Némo Kardassevitch",
    title: "Software & Electronics Engineer",
    automatic: "This is an automated message, please do not reply.",
  },
};

export function getConfirmationEmailHTML({ name, locale }: ConfirmationEmailProps): string {
  const t = translations[locale];

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 40px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #8B5CF6;
    }
    .logo {
      font-size: 32px;
      font-weight: bold;
      color: #8B5CF6;
      margin-bottom: 10px;
    }
    .content {
      margin-bottom: 30px;
    }
    .content p {
      margin-bottom: 15px;
    }
    .highlight {
      background-color: #f3f0ff;
      border-left: 4px solid #8B5CF6;
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .links {
      margin: 20px 0;
      text-align: center;
    }
    .links a {
      display: inline-block;
      color: #8B5CF6;
      text-decoration: none;
      margin: 0 10px;
      font-weight: 500;
    }
    .links a:hover {
      text-decoration: underline;
    }
    .signature {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
    }
    .signature-name {
      font-weight: 600;
      color: #333;
      margin-bottom: 5px;
    }
    .signature-title {
      color: #666;
      font-size: 14px;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      font-size: 12px;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">NK</div>
      <div style="color: #666;">nkardas.fr</div>
    </div>

    <div class="content">
      <p><strong>${t.greeting} ${name},</strong></p>

      <p>${t.thanks}</p>

      <div class="highlight">
        <p style="margin: 0;"><strong>✓ ${t.received}</strong></p>
      </div>

      <p>${t.responseTime}</p>

      <p>${t.meanwhile} :</p>

      <div class="links">
        <a href="https://nkardas.fr/${locale}">${t.portfolio}</a>
        <span style="color: #ccc;">•</span>
        <a href="https://nkardas.fr/${locale}/projects">${t.projects}</a>
        <span style="color: #ccc;">•</span>
        <a href="https://nkardas.fr/${locale}/cv">${t.cv}</a>
      </div>
    </div>

    <div class="signature">
      <div class="signature-name">${t.regards},<br>${t.signature}</div>
      <div class="signature-title">${t.title}</div>
    </div>

    <div class="footer">
      <p>${t.automatic}</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function getConfirmationEmailSubject(locale: 'fr' | 'en'): string {
  return translations[locale].subject;
}

export function getConfirmationEmailText({ name, locale }: ConfirmationEmailProps): string {
  const t = translations[locale];

  return `
${t.greeting} ${name},

${t.thanks}

${t.received}

${t.responseTime}

${t.meanwhile}:
- ${t.portfolio}: https://nkardas.fr/${locale}
- ${t.projects}: https://nkardas.fr/${locale}/projects
- ${t.cv}: https://nkardas.fr/${locale}/cv

${t.regards},
${t.signature}
${t.title}

---
${t.automatic}
  `.trim();
}
