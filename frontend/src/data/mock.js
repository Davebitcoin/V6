// Mock data pour le site VTC
export const mockData = {
  company: {
    name: "Elite VTC",
    tagline: "Transport de prestige, service d'excellence",
    description: "Votre partenaire de confiance pour tous vos déplacements professionnels et personnels. Elite VTC vous offre un service de transport haut de gamme avec chauffeurs expérimentés et véhicules premium.",
    phone: "+33 1 23 45 67 89",
    email: "contact@elitevtc.fr",
    address: "15 Avenue des Champs-Élysées, 75008 Paris",
    coverage: "Paris et Île-de-France"
  },

  services: [
    {
      id: 1,
      title: "Transfert Aéroport",
      description: "Service de navette vers tous les aéroports parisiens avec suivi de vol inclus",
      icon: "✈️",
      features: ["Suivi de vol", "Accueil personnalisé", "Aide aux bagages"]
    },
    {
      id: 2,
      title: "Transport Business",
      description: "Déplacements professionnels avec ponctualité garantie et confort optimal",
      icon: "💼",
      features: ["Wi-Fi gratuit", "Bouteilles d'eau", "Journaux du jour"]
    },
    {
      id: 3,
      title: "Événements & Mariages",
      description: "Prestations sur-mesure pour vos événements spéciaux et moments uniques",
      icon: "🎩",
      features: ["Décoration personnalisée", "Véhicules d'exception", "Service conciergerie"]
    },
    {
      id: 4,
      title: "Tours & Excursions",
      description: "Découvrez Paris et ses environs avec nos chauffeurs guides expérimentés",
      icon: "🏛️",
      features: ["Chauffeur guide", "Itinéraires personnalisés", "Arrêts photo"]
    }
  ],

  vehicles: [
    {
      id: 1,
      name: "Mercedes Classe S",
      category: "Berline Premium",
      passengers: 3,
      luggage: 2,
      features: ["Climatisation", "Cuir", "Wi-Fi", "Bouteilles d'eau"],
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      name: "BMW Série 7",
      category: "Berline Luxe",
      passengers: 3,
      luggage: 2,
      features: ["Massage", "Écrans individuels", "Champagne", "Journaux"],
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Mercedes Van V-Class",
      category: "Minivan Premium",
      passengers: 7,
      luggage: 8,
      features: ["Sièges cuir", "Tables pliantes", "Prises USB", "Éclairage LED"],
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop"
    }
  ],

  pricing: [
    {
      id: 1,
      service: "Transfert CDG/Orly",
      price: "À partir de 65€",
      duration: "45-90 min",
      description: "Prix fixe selon la zone de destination"
    },
    {
      id: 2,
      service: "Course Paris intra-muros",
      price: "2,20€/km",
      duration: "Variable",
      description: "Tarif kilométrique + forfait prise en charge 8€"
    },
    {
      id: 3,
      service: "Mise à disposition 4h",
      price: "280€",
      duration: "4 heures",
      description: "Chauffeur et véhicule à votre disposition"
    },
    {
      id: 4,
      service: "Journée complète",
      price: "550€",
      duration: "8 heures",
      description: "Service complet avec 200km inclus"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Directrice Marketing",
      content: "Service impeccable, chauffeurs professionnels et véhicules toujours impeccables. Je recommande vivement Elite VTC pour tous vos déplacements business.",
      rating: 5
    },
    {
      id: 2,
      name: "Pierre Dubois",
      role: "Entrepreneur",
      content: "Ponctualité parfaite et service client exceptionnel. Elite VTC est devenu notre partenaire transport exclusif.",
      rating: 5
    },
    {
      id: 3,
      name: "Marie Leclerc",
      role: "Particulier",
      content: "Un mariage parfait grâce à Elite VTC. Véhicule somptueux et attention aux détails remarquable.",
      rating: 5
    }
  ],

  // Données pour le formulaire de réservation
  timeSlots: [
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
  ],

  serviceTypes: [
    "Transfert aéroport",
    "Course simple",
    "Mise à disposition",
    "Événement spécial"
  ]
};