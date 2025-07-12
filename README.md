# 🚗 Elite VTC - Site Web Premium

Site web professionnel pour activité VTC (Voiture de Transport avec Chauffeur) avec design minimaliste et moderne.

## 📋 Table des matières
- [Installation](#installation)
- [Personnalisation facile](#personnalisation-facile)
- [Informations de l'entreprise](#informations-de-lentreprise)
- [Services](#services)
- [Véhicules](#véhicules)
- [Tarifs](#tarifs)
- [Témoignages](#témoignages)
- [Images](#images)
- [Couleurs et design](#couleurs-et-design)

## 🚀 Installation

### Prérequis
- Node.js (version 14+)
- Python 3.8+
- MongoDB (optionnel pour le backend)

### Lancement rapide (Frontend uniquement)
```bash
cd frontend
yarn install
yarn start
```
Le site sera accessible sur http://localhost:3000

## 🎯 Personnalisation facile

**Tous les textes, prix et informations se trouvent dans un seul fichier :**
📁 `frontend/src/data/mock.js`

### 🏢 Informations de l'entreprise

Dans `mock.js`, section `company` :

```javascript
company: {
  name: "Elite VTC",                    // ← Changez le nom de votre entreprise
  tagline: "Transport de prestige...",   // ← Votre slogan
  description: "Votre partenaire...",    // ← Description de votre activité
  phone: "+33 1 23 45 67 89",          // ← Votre numéro de téléphone
  email: "contact@elitevtc.fr",         // ← Votre email
  address: "15 Avenue des Champs...",   // ← Votre adresse
  coverage: "Paris et Île-de-France"    // ← Votre zone de service
}
```

### 🚘 Services

Dans `mock.js`, section `services` - vous pouvez :
- ✏️ Modifier les services existants
- ➕ Ajouter de nouveaux services
- 🗑️ Supprimer des services

```javascript
services: [
  {
    id: 1,
    title: "Transfert Aéroport",          // ← Nom du service
    description: "Service de navette...", // ← Description
    icon: "✈️",                           // ← Icône (emoji ou texte)
    features: [                           // ← Liste des avantages
      "Suivi de vol",
      "Accueil personnalisé",
      "Aide aux bagages"
    ]
  },
  // Ajoutez d'autres services ici...
]
```

### 🚗 Véhicules

Dans `mock.js`, section `vehicles` :

```javascript
vehicles: [
  {
    id: 1,
    name: "Mercedes Classe S",            // ← Modèle du véhicule
    category: "Berline Premium",          // ← Catégorie
    passengers: 3,                        // ← Nombre de passagers
    luggage: 2,                          // ← Nombre de bagages
    features: [                          // ← Équipements
      "Climatisation",
      "Cuir",
      "Wi-Fi",
      "Bouteilles d'eau"
    ],
    image: "https://images.unsplash.com..." // ← URL de l'image
  },
  // Ajoutez d'autres véhicules ici...
]
```

### 💰 Tarifs

Dans `mock.js`, section `pricing` :

```javascript
pricing: [
  {
    id: 1,
    service: "Transfert CDG/Orly",        // ← Nom du service
    price: "À partir de 65€",            // ← Prix affiché
    duration: "45-90 min",               // ← Durée estimée
    description: "Prix fixe selon..."     // ← Description du tarif
  },
  // Ajoutez d'autres tarifs ici...
]
```

### 💬 Témoignages

Dans `mock.js`, section `testimonials` :

```javascript
testimonials: [
  {
    id: 1,
    name: "Sophie Martin",               // ← Nom du client
    role: "Directrice Marketing",        // ← Profession/rôle
    content: "Service impeccable...",    // ← Témoignage
    rating: 5                           // ← Note sur 5
  },
  // Ajoutez d'autres témoignages ici...
]
```

## 🖼️ Images

### Changer les images des véhicules
Dans chaque véhicule du fichier `mock.js`, modifiez l'URL :

```javascript
image: "https://votre-nouvelle-image.jpg"
```

**Recommandations :**
- Utilisez des images de haute qualité (minimum 800x600px)
- Format JPG ou PNG
- Services recommandés : Unsplash, Pexels (gratuits)

## 🎨 Couleurs et design

### Changer les couleurs principales
Dans `frontend/src/index.css`, modifiez les variables CSS :

```css
:root {
  --background: 0 0% 100%;        /* Couleur de fond */
  --foreground: 0 0% 3.9%;        /* Couleur du texte */
  --primary: 0 0% 9%;             /* Couleur principale (noir) */
  --secondary: 0 0% 96.1%;        /* Couleur secondaire (gris clair) */
}
```

## 📝 Personnalisations avancées

### Ajouter un nouveau service

1. Dans `mock.js`, ajoutez à la liste `services` :
```javascript
{
  id: 5,  // Nouveau numéro
  title: "Mon nouveau service",
  description: "Description de mon service",
  icon: "🚙",
  features: ["Avantage 1", "Avantage 2"]
}
```

### Ajouter un nouveau véhicule

1. Dans `mock.js`, ajoutez à la liste `vehicles` :
```javascript
{
  id: 4,  // Nouveau numéro
  name: "Audi A8",
  category: "Berline Luxe",
  passengers: 4,
  luggage: 3,
  features: ["GPS", "Sièges chauffants"],
  image: "URL_de_votre_image"
}
```

### Modifier les créneaux horaires

Dans `mock.js`, section `timeSlots` :
```javascript
timeSlots: [
  "06:00", "07:00", "08:00", // ← Ajoutez/supprimez des créneaux
  // ... autres heures
]
```

## 📞 Informations de contact

### Modifier le formulaire de contact
Dans `frontend/src/components/Contact.jsx`, vous pouvez :
- Changer les coordonnées affichées
- Modifier les options du formulaire
- Ajouter des réseaux sociaux

### Modifier les horaires de service
Dans le composant Contact, section "Horaires de service" :
```javascript
<div className="flex justify-between">
  <span className="text-gray-300">Lundi - Dimanche</span>
  <span>24h/24</span>  {/* ← Modifiez ici */}
</div>
```

## 🔧 Conseils pour débutants

### 1. Faire une sauvegarde
Avant toute modification, copiez le fichier `mock.js` :
```bash
cp frontend/src/data/mock.js frontend/src/data/mock.js.backup
```

### 2. Tester vos modifications
Après chaque changement, rechargez la page (F5) pour voir le résultat.

### 3. Erreurs courantes à éviter
- ❌ Ne pas oublier les virgules entre les éléments
- ❌ Ne pas supprimer les guillemets autour du texte
- ❌ Respecter l'indentation du code

### 4. Exemple de modification complète

Pour transformer "Elite VTC" en "Mon Taxi Luxe" :

```javascript
// Dans mock.js
company: {
  name: "Mon Taxi Luxe",                    // ← Changé
  tagline: "Votre transport de confiance",  // ← Changé  
  phone: "+33 6 12 34 56 78",              // ← Votre numéro
  email: "contact@montaxiluxe.fr",         // ← Votre email
  address: "123 Rue de la Paix, 75001 Paris", // ← Votre adresse
  coverage: "Paris et banlieue"            // ← Votre zone
}
```

## 🆘 Besoin d'aide ?

Si vous rencontrez des problèmes :

1. **Vérifiez la syntaxe** - Assurez-vous que toutes les virgules et guillemets sont présents
2. **Rechargez la page** - Après chaque modification
3. **Consultez la console** - Appuyez sur F12 pour voir les erreurs éventuelles

## 📱 Responsive

Le site s'adapte automatiquement à tous les écrans :
- 📱 Mobile
- 📱 Tablette  
- 💻 Desktop

## 🌐 Déploiement

Une fois personnalisé, vous pouvez déployer votre site sur :
- Netlify (gratuit)
- Vercel (gratuit)
- GitHub Pages (gratuit)

---

**✨ Votre site VTC est maintenant prêt à être personnalisé !**