import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Vehicles = ({ onBookingClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Notre Véhicule Premium
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tesla Model 3 dernière génération, entretenue avec le plus grand soin, 
            pour vous garantir confort, sécurité et respect de l'environnement.
          </p>
        </div>

        {/* Vehicle Card */}
        <div className="max-w-2xl mx-auto">
          {mockData.vehicles.map((vehicle, index) => (
            <Card 
              key={vehicle.id}
              className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Vehicle Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-white/90 text-black border-0 font-medium">
                  {vehicle.category}
                </Badge>
              </div>

              <CardContent className="p-8">
                {/* Vehicle Name */}
                <h3 className="text-3xl font-light text-gray-900 mb-4 group-hover:text-gray-700 transition-colors text-center">
                  {vehicle.name}
                </h3>

                {/* Capacity Info */}
                <div className="flex items-center justify-center gap-8 mb-6 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <span className="text-sm">{vehicle.passengers} passagers</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{vehicle.luggage} bagages</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-900 mb-4 text-center">Équipements Tesla inclus :</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Button 
                    onClick={onBookingClick}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3"
                  >
                    Réserver cette Tesla
                  </Button>
                  <button 
                    onClick={onBookingClick}
                    className="w-full text-black font-medium hover:text-gray-700 transition-colors text-sm border-b border-black hover:border-gray-700 pb-1"
                  >
                    Demander un devis personnalisé →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-light text-gray-900 mb-4">
            Tesla Model 3 disponible 24/7 sur la Côte d'Azur
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Véhicule 100% électrique avec la dernière technologie Tesla. 
            Entretien Tesla officiel, assurance tous risques, et chauffeur expérimenté pour chaque trajet.
          </p>
          <Button 
            onClick={onBookingClick}
            variant="outline"
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3"
          >
            Réserver maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;