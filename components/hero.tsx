import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.images.hero}
          alt={siteConfig.hero.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            {siteConfig.tagline}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            {siteConfig.hero.title} {" "}
            <span className="text-primary">{siteConfig.hero.highlight}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            {siteConfig.hero.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="#contacto">
                Reservar Cita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link href="#servicios">Ver Servicios</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">{siteConfig.stats.yearsExperience}</p>
              <p className="text-sm text-muted-foreground mt-1">Años de experiencia</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">{siteConfig.stats.bikesRepaired}</p>
              <p className="text-sm text-muted-foreground mt-1">{siteConfig.stats.numberText}</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">{siteConfig.stats.satisfaction}</p>
              <p className="text-sm text-muted-foreground mt-1">Satisfacción</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
