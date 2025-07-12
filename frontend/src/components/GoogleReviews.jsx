import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

// Simulation d'avis Google réels (en attendant l'API)
const googleReviews = [
  {
    id: 1,
    author_name: "Marie Dubois",
    author_url: "https://www.google.com/maps/contrib/12345",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/default-user=s40-c",
    rating: 5,
    relative_time_description: "il y a 2 semaines",
    text: "Service exceptionnel avec la Tesla Model 3 ! Trajet Nice-Monaco dans un confort total et en silence. Chauffeur très professionnel et ponctuel. Je recommande vivement pour tous vos déplacements sur la Côte d'Azur.",
    time: 1703123456
  },
  {
    id: 2,
    author_name: "Jean-Pierre Martin",
    author_url: "https://www.google.com/maps/contrib/67890",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/default-user=s40-c",
    rating: 5,
    relative_time_description: "il y a 1 mois",
    text: "Tesla VTC Nice est maintenant mon choix exclusif pour les transferts aéroport. Véhicule toujours impeccable, technologie Tesla impressionnante. Service premium à prix correct.",
    time: 1702123456
  },
  {
    id: 3,
    author_name: "Sofia Rossi",
    author_url: "https://www.google.com/maps/contrib/54321",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/default-user=s40-c",
    rating: 5,
    relative_time_description: "il y a 3 semaines",
    text: "Nous avons utilisé Tesla VTC pour notre mariage à Cannes. Service irréprochable, véhicule somptueux et éco-responsable. Parfait pour une arrivée remarquée et respectueuse de l'environnement.",
    time: 1702923456
  },
  {
    id: 4,
    author_name: "Alexandre Dubois",
    author_url: "https://www.google.com/maps/contrib/98765",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/default-user=s40-c",
    rating: 5,
    relative_time_description: "il y a 1 semaine",
    text: "Mise à disposition pour une journée de réunions entre Nice et Monaco. Tesla Model 3 très confortable, silence de roulage appréciable pour téléphoner. Chauffeur discret et professionnel.",
    time: 1703523456
  }
];

const GoogleReviews = () => {
  // Calcul de la note moyenne
  const averageRating = googleReviews.reduce((sum, review) => sum + review.rating, 0) / googleReviews.length;
  const totalReviews = googleReviews.length;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const handleGoogleReviewsClick = () => {
    // Lien vers la page Google Reviews (à remplacer par votre vraie page)
    window.open('https://www.google.com/search?q=Tesla+VTC+Nice+avis', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Avis Google
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          
          {/* Google Rating Summary */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-light text-gray-900">{averageRating.toFixed(1)}</span>
              <div className="flex">{renderStars(Math.round(averageRating))}</div>
            </div>
            <div className="text-gray-600">
              {totalReviews} avis Google
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que nos clients pensent de nos services Tesla VTC sur la Côte d'Azur.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {googleReviews.map((review) => (
            <Card 
              key={review.id}
              className="bg-gray-50 border-0 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={review.profile_photo_url} 
                      alt={review.author_name}
                      className="w-10 h-10 rounded-full bg-gray-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-10 h-10 rounded-full bg-gray-300 items-center justify-center text-gray-600 font-medium hidden"
                    >
                      {review.author_name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{review.author_name}</h4>
                      <p className="text-sm text-gray-500">{review.relative_time_description}</p>
                    </div>
                  </div>
                  
                  {/* Google Logo */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Content */}
                <p className="text-gray-700 leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-50 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-light text-gray-900 mb-4">
              Votre avis compte pour nous
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vous avez utilisé nos services ? Partagez votre expérience avec la communauté 
              et aidez d'autres voyageurs à découvrir Tesla VTC Nice.
            </p>
            <Button 
              onClick={handleGoogleReviewsClick}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3"
            >
              Voir tous les avis Google →
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">{averageRating.toFixed(1)}/5</div>
              <div className="text-sm text-gray-600">Note Google</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">Recommandé</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">24h</div>
              <div className="text-sm text-gray-600">Réponse avis</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">2019</div>
              <div className="text-sm text-gray-600">Depuis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;