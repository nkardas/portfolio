import Image from "next/image";

/**
 * Page de prévisualisation des SVG générés
 * Route: /logos/svg
 */
export default function LogosSVGPage() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold mb-2">Logos SVG</h1>
          <p className="text-muted-foreground">
            Tous les logos exportés en SVG prêts pour Figma
          </p>
        </div>

        {/* Logo Compact */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Logo Compact (nK)</h2>
            <p className="text-muted-foreground mb-4">
              Format : 48×48px • Fichiers dans /public/logos/
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Default */}
            <div className="p-8 border rounded-lg bg-card space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/logos/nk-logo-default.svg"
                  alt="nK Logo Default"
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-center">
                <p className="font-medium">Default</p>
                <p className="text-xs text-muted-foreground font-mono">
                  nk-logo-default.svg
                </p>
              </div>
            </div>

            {/* Mono */}
            <div className="p-8 border rounded-lg bg-card space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/logos/nk-logo-mono.svg"
                  alt="nK Logo Mono"
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-center">
                <p className="font-medium">Monochrome</p>
                <p className="text-xs text-muted-foreground font-mono">
                  nk-logo-mono.svg
                </p>
              </div>
            </div>

            {/* White */}
            <div className="p-8 border rounded-lg bg-foreground space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/logos/nk-logo-white.svg"
                  alt="nK Logo White"
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-center text-background">
                <p className="font-medium">White</p>
                <p className="text-xs opacity-70 font-mono">
                  nk-logo-white.svg
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Large - Light */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Logo Large (./nkardas) - Light
            </h2>
            <p className="text-muted-foreground mb-4">
              Format : 320×64px • Variations de surlignage
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Highlight */}
            <div className="p-8 border rounded-lg bg-card">
              <div className="flex items-center justify-between gap-8">
                <Image
                  src="/logos/nkardas-highlight-light.svg"
                  alt="Logo Highlight"
                  width={320}
                  height={64}
                />
                <div className="text-right shrink-0">
                  <p className="font-medium">Highlight Classique</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    nkardas-highlight-light.svg
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Thick */}
            <div className="p-8 border rounded-lg bg-card">
              <div className="flex items-center justify-between gap-8">
                <Image
                  src="/logos/nkardas-highlight-thick-light.svg"
                  alt="Logo Highlight Thick"
                  width={320}
                  height={64}
                />
                <div className="text-right shrink-0">
                  <p className="font-medium">Highlight Épais</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    nkardas-highlight-thick-light.svg
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Slanted */}
            <div className="p-8 border rounded-lg bg-card">
              <div className="flex items-center justify-between gap-8">
                <Image
                  src="/logos/nkardas-highlight-slanted-light.svg"
                  alt="Logo Highlight Slanted"
                  width={320}
                  height={64}
                />
                <div className="text-right shrink-0">
                  <p className="font-medium">Highlight Incliné</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    nkardas-highlight-slanted-light.svg
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Bottom */}
            <div className="p-8 border rounded-lg bg-card">
              <div className="flex items-center justify-between gap-8">
                <Image
                  src="/logos/nkardas-highlight-bottom-light.svg"
                  alt="Logo Highlight Bottom"
                  width={320}
                  height={64}
                />
                <div className="text-right shrink-0">
                  <p className="font-medium">Highlight Bottom</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    nkardas-highlight-bottom-light.svg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Large - Dark */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Logo Large (./nkardas) - Dark
            </h2>
            <p className="text-muted-foreground mb-4">
              Format : 320×64px • Version dark mode
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Highlight Dark */}
            <div className="p-8 border rounded-lg bg-foreground">
              <div className="flex items-center justify-between gap-8">
                <Image
                  src="/logos/nkardas-highlight-dark.svg"
                  alt="Logo Highlight Dark"
                  width={320}
                  height={64}
                />
                <div className="text-right shrink-0 text-background">
                  <p className="font-medium">Highlight Dark</p>
                  <p className="text-xs opacity-70 font-mono">
                    nkardas-highlight-dark.svg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="space-y-4 p-8 border rounded-lg bg-muted">
          <h3 className="text-xl font-semibold">Comment utiliser ces SVG</h3>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium mb-2">📁 Dans Figma :</p>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  Télécharger les SVG depuis{" "}
                  <code className="bg-background px-1 py-0.5 rounded">
                    /portfolio/public/logos/
                  </code>
                </li>
                <li>
                  Glisser-déposer dans Figma (ou File → Place Image)
                </li>
                <li>Les logos restent éditables (texte vectoriel)</li>
                <li>Vous pouvez changer les couleurs dans Figma</li>
              </ol>
            </div>

            <div>
              <p className="font-medium mb-2">🎨 Sur le site :</p>
              <p className="text-muted-foreground ml-4">
                Les logos sont déjà intégrés via les composants React dans{" "}
                <code className="bg-background px-1 py-0.5 rounded">
                  components/ui/logo.tsx
                </code>
              </p>
            </div>

            <div>
              <p className="font-medium mb-2">💾 Chemin des fichiers :</p>
              <p className="text-muted-foreground ml-4 font-mono text-xs">
                portfolio/public/logos/*.svg
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
