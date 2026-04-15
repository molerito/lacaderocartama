import { Wrench, Cog, Shield, Zap, Settings, RefreshCw, type LucideIcon } from "lucide-react"
import { siteConfig } from "@/lib/config"

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Cog,
  Shield,
  Zap,
  Settings,
  RefreshCw,
}

export function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Todo lo que tu <span className="text-primary">vehículo</span> necesita
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Servicios especializados cualquier clase de vehículo con los mejores profesionales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
