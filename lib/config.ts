// =============================================================================
// CONFIGURACIÓN DEL SITIO - EDITA ESTOS VALORES PARA PERSONALIZAR TU WEB
// =============================================================================

export const siteConfig = {
  // -------------------------------------------------------------------------
  // INFORMACIÓN BÁSICA DEL LAVADERO
  // -------------------------------------------------------------------------
  name: "Lavadero Car-tama",
  shortName: "Lav", // Se muestra en el logo (máximo 2-3 caracteres)
  tagline: "Lavadero de coches especializado",
  description: "Lavadero de coches en Cártama Estación. Tu coche limpio y protegido en las mejores manos.",
  hero: {
    title: "Expertos en lavado de",
    highlight: "vehículos",
    description: "Servicio técnico profesional para el lavado de vehículos con la más alta calidad.",
    alt: "Lavadero de coches profesional en acción",
  },

  // -------------------------------------------------------------------------
  // DATOS DE CONTACTO
  // -------------------------------------------------------------------------
  contact: {
    text: "Ubicación del lavadero", // Texto que se muestra en la sección de contacto
    phone: "+34 678 25 42 88",
    email: "info@lavadero.es",
    address: "Avenida de Andalucia 55, junto a Gasolinera , 29580 Estación de Cártama, Málaga",
    // Coordenadas para Google Maps (opcional)
    // Para obtenerlas: busca tu dirección en Google Maps, haz clic derecho y copia las coordenadas
    mapCoordinates: {
      lat: 36.73661194404217,
      lng: -4.606403702773283
  , 
    },
    // URL de Google Maps (si prefieres usar un enlace directo)
    mapUrl: "https://maps.app.goo.gl/Ui11HibZbocoNmFT6",
  },

  // -------------------------------------------------------------------------
  // HORARIO DE ATENCIÓN
  // -------------------------------------------------------------------------
  schedule: {
    weekdays: "Lun - Vie: 8:00 - 15:00",
    saturday: "Sáb: Cerrado",
    sunday: "Dom: Cerrado",
  },

  // -------------------------------------------------------------------------
  // REDES SOCIALES (deja vacío "" si no tienes alguna)
  // -------------------------------------------------------------------------
  social: {
    instagram: "https://instagram.com/lavadero",
    facebook: "https://facebook.com/lavadero",
    youtube: "https://youtube.com/@lavadero",
    tiktok: "", // Ejemplo: "https://tiktok.com/@albertomotos"
    whatsapp: "34678254288", // Solo números, sin + ni espacios
  },

  // -------------------------------------------------------------------------
  // BOTÓN FLOTANTE DE WHATSAPP
  // -------------------------------------------------------------------------
  whatsappButton: {
    enabled: true, // Activa o desactiva el botón flotante
    message: "Hola, me gustaría obtener información sobre vuestros servicios.", // Mensaje predefinido
  },

  // -------------------------------------------------------------------------
  // ESTADÍSTICAS (se muestran en el Hero)
  // -------------------------------------------------------------------------
  stats: {
    yearsExperience: "15+",
    bikesRepaired: "5K+",
    satisfaction: "100%",
    numberText: "Coches limpiados"
  },

  // -------------------------------------------------------------------------
  // SECCIÓN "SOBRE NOSOTROS"
  // -------------------------------------------------------------------------
  about: {
    foundedYear: "2010",
    title: "El mejor servicio de lavado de coches desde 2010",
    description: [
      "En nuestro lavadero contamos con limpieza integral, tratamientos ecológicos y acabados profesionales para que tu coche luzca como nuevo.",
    ],
    features: [
      "Especialistas en lavado exterior e interior",
      "Tratamientos cerámicos y encerados profesionales",
      "Limpieza de tapicerías y desodorización profunda",
      "Atención cercana y servicios personalizados",
    ],
  },

  // -------------------------------------------------------------------------
  // SERVICIOS (iconos disponibles: Wrench, Cog, Shield, Zap, Settings, RefreshCw)
  // -------------------------------------------------------------------------
  services: [
    {
      icon: "Wrench",
      title: "Lavado Exterior Premium",
      description: "Limpieza a mano con productos profesionales y secado sin marcas para un acabado perfecto.",
    },
    {
      icon: "Cog",
      title: "Lavado Interior",
      description: "Aspirado, limpieza de tapicerías y detalles interiores para dejar tu coche listo y confortable.",
    },
    {
      icon: "Shield",
      title: "Pulido y Encerado",
      description: "Pulido profesional y encerado para proteger la pintura y devolver el brillo a tu vehículo.",
    },
    {
      icon: "Zap",
      title: "Tratamiento de Tapicerías",
      description: "Limpieza profunda de tejidos y piel, eliminación de manchas y protección contra suciedad futura.",
    },
    {
      icon: "Settings",
      title: "Descontaminación y Cristalizado",
      description: "Eliminación de residuos, alquitrán y película ambiental para mantener la carrocería impecable.",
    },
    {
      icon: "RefreshCw",
      title: "Aspirado y Desodorización",
      description: "Limpieza total del habitáculo y fragancia fresca para una experiencia agradable al volante.",
    },
  ],

  // -------------------------------------------------------------------------
  // IMÁGENES (coloca tus imágenes en la carpeta /public/images/)
  // -------------------------------------------------------------------------
  images: {
    // Imagen de fondo del Hero (recomendado: 1920x1080 o similar)
    hero: "/images/hero-car.jpg",
    // Imagen para la sección "Sobre Nosotros" (recomendado: 800x800)
    // Deja vacío para mostrar el logo como placeholder
    about: "",
    // Logo personalizado (opcional - si no tienes, se usará el shortName)
    logo: "", // Ejemplo: "/images/logo.png"
    // Galería de trabajos (opcional)
    gallery: [
      "/images/trabajo1.jpg",
      // "/images/trabajo-2.jpg",
      // "/images/trabajo-3.jpg",
    ],
    aboutCarousel: [
      "/images/trabajo1.jpg",
      "/images/trabajo2.jpg",
      "/images/trabajo3.jpg",
      "/images/trabajo4.jpg",
      "/images/trabajo5.jpg",
      "/images/trabajo6.jpg",
      "/images/trabajo7.jpg",
    ]
  },

  // -------------------------------------------------------------------------
  // SEO (metadatos para buscadores)
  // -------------------------------------------------------------------------
  seo: {
    title: "Lavadero Car-tama - Lavado de coches en Cártama Estación",
    description: "Lavadero de coches profesional con lavado exterior e interior, pulido, encerado y tratamientos especializados.",
    keywords: "lavadero coches, lavado coche Cártama, limpieza interior coche, pulido coche, encerado coche",
  },
}

// Tipo exportado para autocompletado en TypeScript
export type SiteConfig = typeof siteConfig
