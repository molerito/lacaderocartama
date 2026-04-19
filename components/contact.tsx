"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, EuroIcon } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Dirección",
      value: siteConfig.contact.address,
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: siteConfig.contact.phone,
      link: `tel:${siteConfig.contact.phone}`,
    },
    {
      icon: EuroIcon,
      label: "Precio",
      value: "Precios desde 35€, consulta sin compromiso", // Puedes personalizar esto o agregarlo a la configuración
    },
    {
      icon: Clock,
      label: "Horario",
      value: siteConfig.schedule.weekdays,
    },
  ]

  const mapPreviewUrl = siteConfig.contact.mapCoordinates
    ? `https://maps.google.com/maps?q=${siteConfig.contact.mapCoordinates.lat},${siteConfig.contact.mapCoordinates.lng}&z=16&output=embed`
    : undefined

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Reserva tu cita hoy
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Contáctanos que lo haremos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const content = (
                  <>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </>
                )
                
                return info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="p-6 bg-background rounded-lg border border-border"
                  >
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="p-6 bg-background rounded-lg border border-border h-fit">
            <h3 className="text-lg font-semibold text-foreground mb-3">
               {siteConfig.contact.text}
            </h3>
            {siteConfig.contact.mapUrl ? (
              <a 
                href={siteConfig.contact.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-video bg-muted rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
              >
                {mapPreviewUrl ? (
                  <iframe
                    src={mapPreviewUrl}
                    title="Ubicación en Google Maps"
                    className="w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-foreground font-medium">Ver en Google Maps</p>
                      <p className="text-muted-foreground text-sm mt-1">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                )}
              </a>
            ) : (
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Mapa interactivo</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
