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

### 🚀 Déployer sur Netlify (GRATUIT)

Netlify est la solution la plus simple pour mettre votre site VTC en ligne gratuitement.

#### Étape 1 : Préparer votre projet

1. **Récupérez votre code** via GitHub (voir section précédente)
2. **Testez localement** que tout fonctionne :
```bash
cd frontend
yarn install
yarn start
```

#### Étape 2 : Créer un compte Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez sur **"Sign up"**
3. Connectez-vous avec votre compte GitHub (recommandé)

#### Étape 3 : Déployer votre site

**Méthode A : Depuis GitHub (Recommandée)**

1. Sur Netlify, cliquez **"New site from Git"**
2. Choisissez **"GitHub"**
3. Sélectionnez votre repository VTC
4. **Configuration importante** :
   - **Base directory** : `frontend`
   - **Build command** : `yarn build`
   - **Publish directory** : `frontend/build`
5. Cliquez **"Deploy site"**

**Méthode B : Glisser-Déposer**

1. Sur votre ordinateur, buildez le projet :
```bash
cd frontend
yarn build
```
2. Glissez le dossier `build` sur netlify.com
3. Votre site est en ligne !

#### Étape 4 : Votre site est en ligne ! 🎉

Netlify vous donne une URL comme : `https://eloquent-curie-123456.netlify.app`

### 🌍 Configurer votre nom de domaine

#### Option 1 : Nom de domaine gratuit Netlify

1. Dans votre dashboard Netlify, allez dans **"Site settings"**
2. Cliquez **"Change site name"**
3. Choisissez un nom : `mon-vtc-premium.netlify.app`
4. **C'est gratuit et immédiat !**

#### Option 2 : Acheter votre propre domaine

**Où acheter un domaine :**
- **OVH** (français) : 8-15€/an
- **Namecheap** : 10-12€/an  
- **GoDaddy** : 12-15€/an
- **Gandi** (français) : 15-20€/an

**Exemples de noms pour VTC :**
- `votrenom-vtc.fr`
- `elite-transport-paris.com`
- `vtc-premium-75.fr`
- `chauffeur-prive-paris.fr`

#### Étape 5 : Connecter votre domaine à Netlify

**Une fois votre domaine acheté :**

1. **Dans Netlify** :
   - Allez dans **"Domain settings"**
   - Cliquez **"Add custom domain"**
   - Entrez votre domaine : `votre-domaine.fr`

2. **Chez votre registrar** (OVH, Namecheap, etc.) :
   - Allez dans la gestion DNS
   - Ajoutez ces enregistrements :

```
Type: A
Nom: @
Valeur: 75.2.60.5

Type: CNAME  
Nom: www
Valeur: votre-site.netlify.app
```

3. **Attendez 24-48h** pour la propagation DNS

#### Étape 6 : HTTPS automatique 🔒

Netlify active automatiquement le HTTPS (cadenas vert) :
- Gratuit
- Certificat SSL automatique
- Renouvellement automatique

### 📧 Configuration email professionnel

**Pour avoir contact@votre-domaine.fr :**

**Option 1 : Gmail professionnel**
- Google Workspace : 6€/mois
- Interface Gmail familière
- Synchronisation avec téléphone

**Option 2 : OVH Email**
- 1€/mois par adresse
- Interface web simple
- Support français

**Option 3 : Redirection email**
- Gratuit chez la plupart des registrars
- Redirige vers votre email personnel
- Plus simple mais moins professionnel

### 🔧 Maintenance et mises à jour

#### Modifier votre site en ligne

1. **Modifiez le code** sur votre ordinateur
2. **Committez sur GitHub** :
```bash
git add .
git commit -m "Mise à jour tarifs"
git push
```
3. **Netlify redéploie automatiquement** ! ✨

#### Sauvegardes automatiques
- Netlify garde l'historique de tous vos déploiements
- Vous pouvez revenir en arrière en 1 clic
- Vos données sont sécurisées

### 📊 Analytics et suivi

**Google Analytics (gratuit) :**

1. Créez un compte sur [analytics.google.com](https://analytics.google.com)
2. Ajoutez ce code dans `frontend/public/index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'VOTRE_ID_TRACKING');
</script>
```

**Vous pourrez voir :**
- Nombre de visiteurs
- Pages les plus visitées  
- Provenance du trafic
- Conversions (formulaires remplis)

### 🎯 SEO - Être trouvé sur Google

#### Meta tags essentiels

Dans `frontend/public/index.html`, modifiez :

```html
<title>Elite VTC - Transport de Prestige Paris</title>
<meta name="description" content="Service VTC premium à Paris. Réservez votre chauffeur privé 24h/24. Transferts aéroport, événements, transport business.">
<meta name="keywords" content="VTC Paris, chauffeur privé, transport aéroport, taxi luxe">
```

#### Google My Business (gratuit)

1. Créez votre fiche sur [business.google.com](https://business.google.com)
2. Ajoutez photos, horaires, zone de service
3. Récoltez des avis clients
4. Apparaissez dans Google Maps

### 💰 Coûts récapitulatifs

**Gratuit :**
- ✅ Hébergement Netlify
- ✅ Certificat SSL
- ✅ Sous-domaine netlify.app

**Payant (optionnel) :**
- 🌐 Nom de domaine : 10-15€/an
- 📧 Email professionnel : 12-72€/an
- 📊 Analytics : Gratuit (Google)

**Total minimum : 10€/an pour être complètement professionnel !**

### 🚨 Checklist avant mise en ligne

- [ ] Toutes les informations personnalisées (nom, téléphone, email)
- [ ] Photos de qualité pour les véhicules
- [ ] Tarifs mis à jour
- [ ] Témoignages réels ou supprimés
- [ ] Coordonnées de contact correctes
- [ ] Test sur mobile et desktop
- [ ] Meta tags SEO configurés

### 🆘 Résolution de problèmes

**Site qui ne se charge pas :**
- Vérifiez la configuration build dans Netlify
- Assurez-vous que `frontend/build` existe

**Domaine qui ne fonctionne pas :**
- Attendez 24-48h pour la propagation DNS
- Vérifiez les enregistrements DNS chez votre registrar

**Emails non reçus depuis le formulaire :**
- Le formulaire est actuellement en mode démo
- Pour le rendre fonctionnel, contactez un développeur

---

**🎉 Votre site VTC professionnel sera en ligne en moins d'1 heure !**

---

**✨ Votre site VTC est maintenant prêt à être personnalisé !**