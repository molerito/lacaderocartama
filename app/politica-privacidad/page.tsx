import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-2">
              Política de Privacidad
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Protección de tus datos personales
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-8">
              En {siteConfig.name} valoramos la privacidad de nuestros clientes y visitantes. Esta página dE cómo usamos los datos que nos envías únicamente para solicitar una cita o responder a tus consultas.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Qué datos recogemos</h2>
            <p className="text-muted-foreground leading-7">
              No recopilamos datos personales de forma automática mediante este sitio web. Los únicos datos que recibimos son los que tú decides enviarnos a través de correo electrónico o WhatsApp: nombre, teléfono, motivo de contacto y datos de tu vehículo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Para qué usamos tus datos</h2>
            <p className="text-muted-foreground leading-7">
              Utilizamos la información que nos facilitas exclusivamente para atender tu solicitud, coordinar una cita en el establecimiento y responder tus preguntas. No compartimos tus datos con terceros para fines comerciales.
            </p>
          </section>

         

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Sobre esta web</h2>
            <p className="text-muted-foreground leading-7">
              Esta web es una página estática creada para presentar nuestros servicios y permitirte contactarnos. No se almacena información personal en bases de datos propias del sitio, salvo los mensajes que nos envías voluntariamente.
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
