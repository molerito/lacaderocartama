import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function TerminosDeUsoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-2">
              Términos de Uso
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Uso del sitio web y servicios
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-8">
              Estas condiciones regulan el uso del sitio web de {siteConfig.name}. Al navegar por estas páginas aceptas los términos descritos aquí y entiendes que el sitio sirve como carta de presentación y forma de contacto.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Qué ofrecemos</h2>
            <p className="text-muted-foreground leading-7">
              Este sitio presenta información sobre nuestros servicios de lavado y mantenimiento. No constituye una oferta contractual hasta que confirmemos una cita o servicio de forma directa.
            </p>
          </section>



          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Responsabilidad</h2>
            <p className="text-muted-foreground leading-7">
              El contenido de este sitio se ofrece con fines informativos. No garantizamos que esté libre de errores, y no asumimos responsabilidad por decisiones tomadas en base a él sin confirmación previa por parte de nuestro equipo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Condiciones generales</h2>
            <p className="text-muted-foreground leading-7">
              El uso de este sitio es libre, pero queda prohibido emplearlo con fines ilegales o para enviar mensajes no solicitados. Nos reservamos el derecho a modificar estos términos en cualquier momento.
            </p>
          </section>

          <div className="pt-8 border-t border-border">
            <Link href="/" className="text-primary hover:underline">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
