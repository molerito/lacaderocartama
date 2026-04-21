// =============================================================================
// CONFIGURACIÓN DEL SITIO - EDITA ESTOS VALORES PARA PERSONALIZAR TU WEB
// =============================================================================

export const siteConfig = {
  // -------------------------------------------------------------------------
  // INFORMACIÓN BÁSICA DEL LAVADERO
  // -------------------------------------------------------------------------
  name: "Bright-CAR-ADRI",
  shortName: "LT", // Se muestra en el logo (máximo 2-3 caracteres)
  tagline: "Lavadero de coches especializado",
  description: "Lavadero de coches a mano en Ronda. Tu coche limpio y protegido en las mejores manos.",
  hero: {
    title: "Expertos en lavado de",
    highlight: "vehículos",
    description: "Servicio técnico profesional para el lavado a mano de vehículos con la más alta calidad.",
    alt: "Lavadero de coches profesional en acción",
  },

  // -------------------------------------------------------------------------
  // DATOS DE CONTACTO
  // -------------------------------------------------------------------------
  contact: {
    text: "Ubicación del lavadero", // Texto que se muestra en la sección de contacto
    phone: "+34 722 50 86 65",
    email: "info@lavadero.es",
    address: "C. Montes, 29400 Ronda, Málaga, España",
    // Coordenadas para Google Maps (opcional)
    // Para obtenerlas: busca tu dirección en Google Maps, haz clic derecho y copia las coordenadas
    mapCoordinates: {
      lat: 36.74465694973382,
      lng: -5.159095988229407
  , 
  },
    // URL de Google Maps (si prefieres usar un enlace directo)
    mapUrl: "https://maps.app.goo.gl/r6arRRkW2qGVSRY76",
  },

  // -------------------------------------------------------------------------
  // HORARIO DE ATENCIÓN
  // -------------------------------------------------------------------------
  schedule: {
    weekdays: "Lun - Vie: 9:00 - 14:00, 14:00 - 20:00",
    saturday: "Sáb: 9:00 - 14:00",
    sunday: "Dom: Cerrado",
  },

  // -------------------------------------------------------------------------
  // REDES SOCIALES (deja vacío "" si no tienes alguna)
  // -------------------------------------------------------------------------
  social: {
 //   instagram: "https://instagram.com/lavadero",
    facebook: "https://facebook.com/lavadero",
 //   youtube: "https://youtube.com/@lavadero",
 //   tiktok: "", // Ejemplo: "https://tiktok.com/@albertomotos"
    whatsapp: "34722508665", // Solo números, sin + ni espacios
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
      "En nuestro lavadero contamos con lavado a mano integral, tratamientos ecológicos y acabados profesionales para que tu coche luzca como nuevo.",
    ],
    features: [
      "Especialistas en lavado a mano exterior e interior",
      "Tratamientos cerámicos y encerados profesionales a mano",
      "Limpieza a mano de tapicerías y desodorización profunda",
      "Atención cercana y servicios personalizados",
    ],
  },

  // -------------------------------------------------------------------------
  // SERVICIOS (iconos disponibles: Wrench, Cog, Shield, Zap, Settings, RefreshCw)
  // -------------------------------------------------------------------------
  service: {
    description: "Ofrecemos una amplia gama de servicios de lavado a mano para mantener tu vehículo impecable, desde lavados básicos hasta tratamientos especializados.",
    object: "vehículo",
  },
  services: [
    {
      icon: "Wrench",
      title: "Lavado Exterior Premium",
      description: "Lavado a mano con productos profesionales y secado sin marcas para un acabado perfecto.",
    },
    {
      icon: "Cog",
      title: "Lavado Interior",
      description: "Aspirado a mano, limpieza de tapicerías y detalles interiores para dejar tu coche listo y confortable.",
    },
    {
      icon: "Shield",
      title: "Pulido y Encerado",
      description: "Pulido a mano profesional y encerado para proteger la pintura y devolver el brillo a tu vehículo.",
    },
    {
      icon: "Zap",
      title: "Tratamiento de Tapicerías",
      description: "Limpieza profunda a mano de tejidos y piel, eliminación de manchas y protección contra suciedad futura.",
    },
    {
      icon: "Settings",
      title: "Descontaminación y Cristalizado",
      description: "Eliminación a mano de residuos, alquitrán y película ambiental para mantener la carrocería impecable.",
    },
    {
      icon: "RefreshCw",
      title: "Aspirado y Desodorización",
      description: "Limpieza total a mano del habitáculo y fragancia fresca para una experiencia agradable al volante.",
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
    logo: // Ejemplo: "/images/logo.png"
    // Galería de trabajos (opcional)
    "/images/Logo.png",
    gallery: [
      "/images/trabajo1.jpg",
      // "/images/trabajo-2.jpg",
      // "/images/trabajo-3.jpg",
    ],
    aboutCarousel: [
      "/images/trabajo1.png",
      "/images/trabajo2.jpg",
      "/images/trabajo3.jpg",
      "/images/trabajo4.jpg",
      "/images/trabajo5.jpg",
      "/images/trabajo6.jpg",
      "/images/trabajo7.jpg",
      "/images/trabajo8.jpg",
    ]
  },

  // -------------------------------------------------------------------------
  // SEO (metadatos para buscadores)
  // -------------------------------------------------------------------------
  seo: {
    title: "Lavados Bright-CAR-ADRI - Lavado a mano de coches en Ronda",
    description: "Lavadero de coches profesional con lavado a mano exterior e interior, pulido, encerado y tratamientos especializados.",
    keywords: "lavadero coches, lavado coche a mano Ronda, limpieza interior coche, pulido coche, encerado coche",
  },
}

// Tipo exportado para autocompletado en TypeScript
export type SiteConfig = typeof siteConfig
