import React from 'react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../data/mock';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Témoignages Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre plus belle récompense. 
            Découvrez ce qu'ils pensent de nos services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="group bg-gray-50 border-0 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-4xl text-gray-200 group-hover:text-gray-300 transition-colors">
                  "
                </div>

                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-light text-gray-900 mb-2">98%</div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">Satisfaction</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-light text-gray-900 mb-2">2500+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">Clients</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-light text-gray-900 mb-2">15000+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">Trajets</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-light text-gray-900 mb-2">5★</div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">Moyenne</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Rejoignez nos clients satisfaits et découvrez l'expérience Elite VTC.
          </p>
          <button className="text-black font-medium hover:text-gray-700 transition-colors border-b border-black hover:border-gray-700 pb-1">
            Voir plus de témoignages →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;