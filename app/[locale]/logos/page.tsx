"use client";

import { Logo } from "@/components/ui/logo";
import { LogoLargeAnimated } from "@/components/ui/logo-large-animated";
import { LogoCompactAnimated } from "@/components/ui/logo-compact-animated";

/**
 * Page de démonstration des logos
 * Route: /logos
 */
export default function LogosPage() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold mb-2">Logos nKardas</h1>
          <p className="text-muted-foreground">
            Démonstration des deux logos avec toutes leurs variantes
          </p>
        </div>

        {/* Logo Compact Animé */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Logo Compact Animé (nK) ✨</h2>
            <p className="text-muted-foreground">
              Animation color transition sur le K
            </p>
          </div>

          {/* Light Theme */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Light Theme</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Default */}
              <div className="p-8 border rounded-lg bg-card space-y-4">
                <div className="flex justify-center">
                  <LogoCompactAnimated size={64} variant="default" theme="light" autoPlay />
                </div>
                <div className="text-center">
                  <p className="font-medium">Default</p>
                  <p className="text-sm text-muted-foreground">
                    K : noir → violet
                  </p>
                </div>
              </div>

              {/* Mono */}
              <div className="p-8 border rounded-lg bg-card space-y-4">
                <div className="flex justify-center">
                  <LogoCompactAnimated size={64} variant="mono" theme="light" autoPlay />
                </div>
                <div className="text-center">
                  <p className="font-medium">Monochrome</p>
                  <p className="text-sm text-muted-foreground">Tout noir (pas d'animation)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Theme */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Dark Theme</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Default */}
              <div className="p-8 border rounded-lg bg-foreground space-y-4">
                <div className="flex justify-center">
                  <LogoCompactAnimated size={64} variant="default" theme="dark" autoPlay />
                </div>
                <div className="text-center text-background">
                  <p className="font-medium">Default</p>
                  <p className="text-sm opacity-70">K : blanc → violet clair</p>
                </div>
              </div>

              {/* Mono */}
              <div className="p-8 border rounded-lg bg-foreground space-y-4">
                <div className="flex justify-center">
                  <LogoCompactAnimated size={64} variant="mono" theme="dark" autoPlay />
                </div>
                <div className="text-center text-background">
                  <p className="font-medium">Monochrome</p>
                  <p className="text-sm opacity-70">Tout blanc (pas d'animation)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-2">Props disponibles :</p>
            <ul className="text-sm text-muted-foreground space-y-1 font-mono">
              <li>• autoPlay: boolean (défaut: true)</li>
              <li>• delay: number (ms avant animation, défaut: 0)</li>
              <li>• size: number (défaut: 48)</li>
              <li>• theme: "light" | "dark"</li>
              <li>• variant: "default" | "mono"</li>
            </ul>
          </div>
        </section>

        {/* Logo Compact Statique */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Logo Compact Statique (nK)</h2>
            <p className="text-muted-foreground">
              Usage : Favicon, avatar, navigation mobile
            </p>
          </div>

          {/* Light Theme */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Light Theme</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Default */}
              <div className="p-8 border rounded-lg bg-card space-y-4">
                <div className="flex justify-center">
                  <Logo.Compact size={64} variant="default" theme="light" />
                </div>
                <div className="text-center">
                  <p className="font-medium">Default</p>
                  <p className="text-sm text-muted-foreground">
                    K en violet #8B7AB8
                  </p>
                </div>
              </div>

              {/* Mono */}
              <div className="p-8 border rounded-lg bg-card space-y-4">
                <div className="flex justify-center">
                  <Logo.Compact size={64} variant="mono" theme="light" />
                </div>
                <div className="text-center">
                  <p className="font-medium">Monochrome</p>
                  <p className="text-sm text-muted-foreground">Tout noir</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Theme */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Dark Theme</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Default */}
              <div className="p-8 border rounded-lg bg-foreground space-y-4">
                <div className="flex justify-center">
                  <Logo.Compact size={64} variant="default" theme="dark" />
                </div>
                <div className="text-center text-background">
                  <p className="font-medium">Default</p>
                  <p className="text-sm opacity-70">K en violet clair #9F8DCB</p>
                </div>
              </div>

              {/* Mono */}
              <div className="p-8 border rounded-lg bg-foreground space-y-4">
                <div className="flex justify-center">
                  <Logo.Compact size={64} variant="mono" theme="dark" />
                </div>
                <div className="text-center text-background">
                  <p className="font-medium">Monochrome</p>
                  <p className="text-sm opacity-70">Tout blanc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tailles */}
          <div className="p-8 border rounded-lg bg-card">
            <h3 className="text-xl font-medium mb-6">Différentes tailles</h3>
            <div className="flex items-end gap-8 justify-center">
              <div className="text-center space-y-2">
                <Logo.Compact size={16} variant="default" theme="light" />
                <p className="text-xs text-muted-foreground">16px</p>
              </div>
              <div className="text-center space-y-2">
                <Logo.Compact size={24} variant="default" theme="light" />
                <p className="text-xs text-muted-foreground">24px</p>
              </div>
              <div className="text-center space-y-2">
                <Logo.Compact size={32} variant="default" theme="light" />
                <p className="text-xs text-muted-foreground">32px</p>
              </div>
              <div className="text-center space-y-2">
                <Logo.Compact size={48} variant="default" theme="light" />
                <p className="text-xs text-muted-foreground">48px</p>
              </div>
              <div className="text-center space-y-2">
                <Logo.Compact size={64} variant="default" theme="light" />
                <p className="text-xs text-muted-foreground">64px</p>
              </div>
              <div className="text-center space-y-2">
                <Logo.Compact size={96} variant="default" theme="light" />
                <p className="text-xs text-muted-foreground">96px</p>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Large Animated */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Logo Large Animé (./nkardas) ✨
            </h2>
            <p className="text-muted-foreground">
              Animation de typing + surlignage incliné (skew -2deg)
            </p>
          </div>

          {/* Light Theme */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Light Theme</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 border rounded-lg bg-card space-y-4">
                <div className="flex justify-center min-h-[80px] items-center">
                  <LogoLargeAnimated variant="default" theme="light" autoPlay />
                </div>
                <div className="text-center">
                  <p className="font-medium">Default</p>
                  <p className="text-sm text-muted-foreground">
                    Surlignage violet
                  </p>
                </div>
              </div>

              <div className="p-8 border rounded-lg bg-card space-y-4">
                <div className="flex justify-center min-h-[80px] items-center">
                  <LogoLargeAnimated variant="mono" theme="light" autoPlay />
                </div>
                <div className="text-center">
                  <p className="font-medium">Monochrome</p>
                  <p className="text-sm text-muted-foreground">
                    Surlignage noir
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Theme */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Dark Theme</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 border rounded-lg bg-foreground space-y-4">
                <div className="flex justify-center min-h-[80px] items-center">
                  <LogoLargeAnimated variant="default" theme="dark" autoPlay />
                </div>
                <div className="text-center text-background">
                  <p className="font-medium">Default</p>
                  <p className="text-sm opacity-70">Surlignage violet clair</p>
                </div>
              </div>

              <div className="p-8 border rounded-lg bg-foreground space-y-4">
                <div className="flex justify-center min-h-[80px] items-center">
                  <LogoLargeAnimated variant="mono" theme="dark" autoPlay />
                </div>
                <div className="text-center text-background">
                  <p className="font-medium">Monochrome</p>
                  <p className="text-sm opacity-70">Surlignage blanc</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-2">Props disponibles :</p>
            <ul className="text-sm text-muted-foreground space-y-1 font-mono">
              <li>• autoPlay: boolean (défaut: true)</li>
              <li>• typingSpeed: number (ms/caractère, défaut: 100)</li>
              <li>• highlightDelay: number (ms avant surlignage, défaut: 300)</li>
              <li>• theme: "light" | "dark"</li>
              <li>• variant: "default" | "mono"</li>
            </ul>
          </div>
        </section>

        {/* Logo Large Statique */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">
              Logo Large Statique (./nkardas)
            </h2>
            <p className="text-muted-foreground">
              Version sans animation, surlignage incliné (skew -2deg)
            </p>
          </div>

          {/* Light Theme */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Light Theme</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 border rounded-lg bg-card">
                <div className="flex items-center justify-between">
                  <Logo.Large variant="default" theme="light" />
                  <div className="text-right">
                    <p className="font-medium">Default</p>
                    <p className="text-sm text-muted-foreground">
                      Surlignage violet
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 border rounded-lg bg-card">
                <div className="flex items-center justify-between">
                  <Logo.Large variant="mono" theme="light" />
                  <div className="text-right">
                    <p className="font-medium">Monochrome</p>
                    <p className="text-sm text-muted-foreground">
                      Surlignage noir
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Theme */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Dark Theme</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 border rounded-lg bg-foreground">
                <div className="flex items-center justify-between">
                  <Logo.Large variant="default" theme="dark" />
                  <div className="text-right text-background">
                    <p className="font-medium">Default</p>
                    <p className="text-sm opacity-70">Surlignage violet clair</p>
                  </div>
                </div>
              </div>

              <div className="p-8 border rounded-lg bg-foreground">
                <div className="flex items-center justify-between">
                  <Logo.Large variant="mono" theme="dark" />
                  <div className="text-right text-background">
                    <p className="font-medium">Monochrome</p>
                    <p className="text-sm opacity-70">Surlignage blanc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Exemples d'usage</h2>
            <p className="text-muted-foreground">
              Comment utiliser les logos dans votre code
            </p>
          </div>

          <div className="space-y-4">
            {/* Code examples */}
            <div className="p-6 bg-muted rounded-lg font-mono text-sm">
              <p className="text-muted-foreground mb-2">
                // Logo Compact statique (favicon, avatar)
              </p>
              <code>{`import { Logo } from "@/components/ui/logo"`}</code>
              <br />
              <br />
              <code>{`<Logo.Compact size={48} variant="default" theme="light" />`}</code>
            </div>

            <div className="p-6 bg-muted rounded-lg font-mono text-sm">
              <p className="text-muted-foreground mb-2">
                // Logo Compact animé (splash screen)
              </p>
              <code>{`import { LogoCompactAnimated } from "@/components/ui/logo-compact-animated"`}</code>
              <br />
              <br />
              <code>{`<LogoCompactAnimated size={48} variant="default" theme="light" autoPlay />`}</code>
            </div>

            <div className="p-6 bg-muted rounded-lg font-mono text-sm">
              <p className="text-muted-foreground mb-2">
                // Logo Large statique (header, footer)
              </p>
              <code>{`import { Logo } from "@/components/ui/logo"`}</code>
              <br />
              <br />
              <code>{`<Logo.Large variant="default" theme="light" />`}</code>
            </div>

            <div className="p-6 bg-muted rounded-lg font-mono text-sm">
              <p className="text-muted-foreground mb-2">
                // Logo Large animé (hero, landing)
              </p>
              <code>{`import { LogoLargeAnimated } from "@/components/ui/logo-large-animated"`}</code>
              <br />
              <br />
              <code>{`<LogoLargeAnimated variant="default" theme="light" autoPlay />`}</code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
