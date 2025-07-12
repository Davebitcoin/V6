import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Contactez-Nous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Notre équipe est à votre disposition 24h/24 et 7j/7 pour répondre à toutes vos demandes 
            et vous accompagner dans vos déplacements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-8">Nos coordonnées</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Téléphone</h4>
                    <p className="text-gray-300">{mockData.company.phone}</p>
                    <p className="text-sm text-gray-400 mt-1">Disponible 24h/24, 7j/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.36a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-300">{mockData.company.email}</p>
                    <p className="text-sm text-gray-400 mt-1">Réponse sous 2h en moyenne</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Adresse</h4>
                    <p className="text-gray-300">{mockData.company.address}</p>
                    <p className="text-sm text-gray-400 mt-1">Zone de service: {mockData.company.coverage}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Hours */}
            <div className="bg-white/5 p-6 rounded-2xl">
              <h4 className="font-medium mb-4">Horaires de service</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Lundi - Dimanche</span>
                  <span>24h/24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Jours fériés</span>
                  <span>Service maintenu</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Réservations</span>
                  <span>En ligne ou par téléphone</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <Card className="bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Contact rapide</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Prénom"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nom"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Téléphone"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-600">
                    <option value="">Sujet de votre demande</option>
                    <option value="reservation">Réservation</option>
                    <option value="information">Demande d'information</option>
                    <option value="devis">Demande de devis</option>
                    <option value="reclamation">Réclamation</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <textarea 
                    rows="4"
                    placeholder="Votre message..."
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="text-center mt-16 pt-12 border-t border-white/20">
          <h4 className="text-lg font-medium mb-6">Suivez-nous</h4>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-xl">📘</span>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-xl">📷</span>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-xl">🐦</span>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="text-xl">💼</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;