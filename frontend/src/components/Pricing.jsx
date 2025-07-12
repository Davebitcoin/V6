import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Pricing = ({ onBookingClick }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Tarifs Transparents
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des prix justes et transparents, sans surprise. 
            Tous nos tarifs incluent les frais de service et les pourboires.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockData.pricing.map((price, index) => (
            <Card 
              key={price.id}
              className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full opacity-50"></div>
                
                {/* Service Name */}
                <h3 className="text-lg font-medium text-gray-900 mb-4 relative z-10">
                  {price.service}
                </h3>

                {/* Price */}
                <div className="mb-4 relative z-10">
                  <div className="text-3xl font-light text-black mb-1">
                    {price.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    {price.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed relative z-10">
                  {price.description}
                </p>

                {/* CTA Button */}
                <Button 
                  onClick={onBookingClick}
                  variant="outline"
                  className="w-full border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group-hover:border-gray-900"
                >
                  Réserver
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Prix fixes</h3>
            <p className="text-gray-600 text-sm">Tarifs établis à l'avance, pas de surprise sur la facture finale.</p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tout inclus</h3>
            <p className="text-gray-600 text-sm">Frais de service, pourboires et assurance inclus dans nos tarifs.</p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Paiement flexible</h3>
            <p className="text-gray-600 text-sm">Espèces, carte bancaire ou virement, choisissez votre mode de paiement.</p>
          </div>
        </div>

        {/* Contact for custom quote */}
        <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Besoin d'un tarif personnalisé ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Pour les trajets longue distance, événements spéciaux ou prestations sur-mesure, 
            contactez-nous pour un devis adapté à vos besoins.
          </p>
          <Button 
            onClick={onBookingClick}
            variant="outline"
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3"
          >
            Demander un devis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;