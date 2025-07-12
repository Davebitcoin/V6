// Mock data pour le site VTC
export const mockData = {
  company: {
    name: "Tesla VTC Nice",
    tagline: "Transport électrique premium sur la Côte d'Azur",
    description: "Votre chauffeur privé Tesla Model 3 sur Nice et la Côte d'Azur. Service de transport haut de gamme 100% électrique avec conducteur expérimenté. Découvrez le luxe silencieux et écologique de Tesla.",
    phone: "+33 4 93 45 67 89",
    email: "contact@teslavtcnice.fr",
    address: "25 Promenade des Anglais, 06000 Nice",
    coverage: "Nice, Cannes, Monaco et Côte d'Azur"
  },

  services: [
    {
      id: 1,
      title: "Transferts Aéroport",
      description: "Service de transfert vers l'aéroport Nice Côte d'Azur et tous les aéroports de la région en Tesla Model 3",
      icon: "✈️",
      features: ["Suivi de vol en temps réel", "Accueil personnalisé avec panneau", "Aide aux bagages", "Silence de roulage Tesla"]
    },
    {
      id: 2,
      title: "Transferts Gares",
      description: "Liaisons confortables vers toutes les gares de la Côte d'Azur avec ponctualité garantie",
      icon: "🚅",
      features: ["Gare de Nice-Ville", "Gare de Cannes", "Gare de Monaco", "Suivi temps réel des trains"]
    },
    {
      id: 3,
      title: "Mise à Disposition",
      description: "Tesla Model 3 et chauffeur à votre disposition pour vos déplacements sur la Côte d'Azur",
      icon: "🕐",
      features: ["Chauffeur dédié", "Flexibilité totale", "Attente incluse", "Trajets multiples"]
    },
    {
      id: 4,
      title: "Transferts Événements",
      description: "Transport premium pour vos événements, mariages et soirées sur la Riviera",
      icon: "🍾",
      features: ["Véhicule immaculé", "Tenue de soirée chauffeur", "Discrétion garantie", "Horaires flexibles"]
    }
  ],

  vehicles: [
    {
      id: 1,
      name: "Tesla Model 3",
      category: "Berline Électrique Premium",
      passengers: 4,
      luggage: 3,
      features: ["100% Électrique", "Autopilot Tesla", "Écran tactile 15''", "Audio Premium", "Climatisation tri-zone", "Cuir végan", "Toit panoramique", "Recharge silencieuse"],
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop"
    }
  ],

  pricing: [
    {
      id: 1,
      service: "Aéroport Nice ↔ Nice centre",
      price: "À partir de 45€",
      duration: "20-30 min",
      description: "Prix fixe selon la zone de destination"
    },
    {
      id: 2,
      service: "Aéroport Nice ↔ Cannes",
      price: "À partir de 85€",
      duration: "45-60 min", 
      description: "Trajet direct en Tesla Model 3"
    },
    {
      id: 3,
      service: "Aéroport Nice ↔ Monaco",
      price: "À partir de 95€",
      duration: "45-55 min",
      description: "Liaison premium vers la Principauté"
    },
    {
      id: 4,
      service: "Mise à disposition 3h",
      price: "180€",
      duration: "3 heures",
      description: "Tesla et chauffeur à disposition + 100km inclus"
    },
    {
      id: 5,
      service: "Mise à disposition journée",
      price: "450€",
      duration: "8 heures",
      description: "Service complet avec 300km inclus"
    },
    {
      id: 6,
      service: "Nice ↔ Saint-Tropez",
      price: "À partir de 220€",
      duration: "2h15",
      description: "Trajet aller simple vers Saint-Tropez"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Alexandra Dubois",
      role: "Entrepreneuse",
      content: "Service exceptionnel ! La Tesla Model 3 est d'un confort incomparable et le trajet Nice-Monaco s'est fait dans un silence total. Chauffeur très professionnel.",
      rating: 5
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      role: "Consultant International",
      content: "Ponctualité parfaite pour mes transferts aéroport. La Tesla est toujours impeccable et le service client irréprochable. Je recommande vivement.",
      rating: 5
    },
    {
      id: 3,
      name: "Sofia Rossi",
      role: "Organisatrice d'événements",
      content: "Nous utilisons Tesla VTC Nice pour tous nos événements VIP. Véhicule électrique en accord avec nos valeurs éco-responsables et service haut de gamme.",
      rating: 5
    }
  ],

  // Données pour le formulaire de réservation
  timeSlots: [
    "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
    "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
  ],

  serviceTypes: [
    "Transfert aéroport",
    "Transfert gare", 
    "Mise à disposition",
    "Transfert événement"
  ]
};