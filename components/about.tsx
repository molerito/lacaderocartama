import { CheckCircle2 } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { ImageCarousel } from "./image-carousel"

export function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Sobre Nosotros
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              {siteConfig.about.title}
            </h2>
            {siteConfig.about.description.map((paragraph, index) => (
              <p key={index} className="mt-6 text-muted-foreground text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            <ul className="mt-8 space-y-4">
              {siteConfig.about.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-square bg-card rounded-lg border border-border overflow-hidden">
              {siteConfig.images.aboutCarousel && siteConfig.images.aboutCarousel.length > 0 ? (
                <ImageCarousel 
                  images={siteConfig.images.aboutCarousel} 
                  alt={`Taller ${siteConfig.name}`}
                  autoPlay={true}
                  interval={5000}
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-5xl font-bold text-primary">{siteConfig.shortName}</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{siteConfig.name}</p>
                      <p className="text-muted-foreground mt-2">{siteConfig.tagline}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
