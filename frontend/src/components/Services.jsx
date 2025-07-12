import React from 'react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../data/mock';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Nos Services Premium
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de services de transport haut de gamme, 
            adaptés à tous vos besoins personnels et professionnels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.services.map((service, index) => (
            <Card 
              key={service.id}
              className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Besoin d'un service personnalisé ? Contactez-nous pour une solution sur-mesure.
          </p>
          <button className="text-black font-medium hover:text-gray-700 transition-colors border-b border-black hover:border-gray-700 pb-1">
            Demander un devis personnalisé →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;