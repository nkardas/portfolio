import { setRequestLocale } from "next-intl/server";

interface LegalPageProps {
  params: Promise<{ locale: string }>;
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {locale === "fr" ? (
          // VERSION FRANÇAISE
          <div className="space-y-12">
            {/* Mentions Légales */}
            <section>
              <h1 className="text-4xl font-bold mb-8 text-foreground">
                Mentions Légales
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Éditeur :</strong> Némo Kardassevitch<br />
                  Auto-entrepreneur<br />
                  <strong className="text-foreground">SIRET :</strong> 991 353 145 00014<br />
                  <strong className="text-foreground">Contact :</strong>{" "}
                  <a href="mailto:contact@nkardas.fr" className="text-primary hover:underline">
                    contact@nkardas.fr
                  </a>
                </p>

                <p>
                  <strong className="text-foreground">Hébergement :</strong> Vercel Inc.<br />
                  440 N Barranca Ave #4133, Covina, CA 91723, USA
                </p>
              </div>
            </section>

            <div className="border-t border-border"></div>

            {/* Données Personnelles */}
            <section>
              <h1 className="text-4xl font-bold mb-8 text-foreground">
                Données Personnelles
              </h1>

              <div className="space-y-8">
                {/* Formulaire de contact */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Formulaire de contact
                  </h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    <li>
                      <strong className="text-foreground">Données collectées :</strong> nom, email, message
                    </li>
                    <li>
                      <strong className="text-foreground">Utilisation :</strong> répondre à votre demande uniquement
                    </li>
                    <li>
                      <strong className="text-foreground">Conservation :</strong> 3 ans maximum, puis suppression automatique
                    </li>
                    <li>
                      <strong className="text-foreground">Vos droits :</strong> accès, rectification, suppression via{" "}
                      <a href="mailto:contact@nkardas.fr" className="text-primary hover:underline">
                        contact@nkardas.fr
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Analytics */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Analytics
                  </h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    <li>Vercel Analytics collecte des statistiques de visite anonymes</li>
                    <li>Aucune donnée personnelle identifiable</li>
                    <li>Aucun cookie déposé</li>
                  </ul>
                </div>

                {/* Droits */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Vos droits
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Conformément au RGPD, vous pouvez exercer vos droits ou déposer une réclamation auprès de la{" "}
                    <a
                      href="https://www.cnil.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      CNIL
                    </a>.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-border"></div>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le contenu de ce site (textes, projets, code) est la propriété de Némo Kardassevitch.
                <br />
                Reproduction interdite sans autorisation.
              </p>
            </section>
          </div>
        ) : (
          // ENGLISH VERSION
          <div className="space-y-12">
            {/* Legal Notice */}
            <section>
              <h1 className="text-4xl font-bold mb-8 text-foreground">
                Legal Notice
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Publisher:</strong> Némo Kardassevitch<br />
                  Self-employed<br />
                  <strong className="text-foreground">SIRET:</strong> 991 353 145 00014<br />
                  <strong className="text-foreground">Contact:</strong>{" "}
                  <a href="mailto:contact@nkardas.fr" className="text-primary hover:underline">
                    contact@nkardas.fr
                  </a>
                </p>

                <p>
                  <strong className="text-foreground">Hosting:</strong> Vercel Inc.<br />
                  440 N Barranca Ave #4133, Covina, CA 91723, USA
                </p>
              </div>
            </section>

            <div className="border-t border-border"></div>

            {/* Personal Data */}
            <section>
              <h1 className="text-4xl font-bold mb-8 text-foreground">
                Personal Data
              </h1>

              <div className="space-y-8">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Contact form
                  </h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    <li>
                      <strong className="text-foreground">Data collected:</strong> name, email, message
                    </li>
                    <li>
                      <strong className="text-foreground">Purpose:</strong> respond to your request only
                    </li>
                    <li>
                      <strong className="text-foreground">Retention:</strong> 3 years maximum, then automatic deletion
                    </li>
                    <li>
                      <strong className="text-foreground">Your rights:</strong> access, rectification, deletion via{" "}
                      <a href="mailto:contact@nkardas.fr" className="text-primary hover:underline">
                        contact@nkardas.fr
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Analytics */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Analytics
                  </h2>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    <li>Vercel Analytics collects anonymous visit statistics</li>
                    <li>No personally identifiable data</li>
                    <li>No cookies set</li>
                  </ul>
                </div>

                {/* Rights */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Your rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In accordance with GDPR, you can exercise your rights or file a complaint with the{" "}
                    <a
                      href="https://www.cnil.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      CNIL
                    </a>.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-border"></div>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The content of this website (texts, projects, code) is the property of Némo Kardassevitch.
                <br />
                Reproduction prohibited without authorization.
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
