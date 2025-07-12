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
            {/* Facebook */}
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
              <svg className="w-6 h-6 text-white group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
              <svg className="w-6 h-6 text-white group-hover:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 7.933.016 6.706.071 5.481.126 4.65.389 3.927.735 3.175 1.098 2.543 1.587 1.912 2.218.281 3.85.016 5.481.071 6.706.016 7.933 0 8.396 0 12.017c0 3.624.016 4.086.071 5.314.055 1.226.318 2.057.664 2.78.365.752.854 1.384 1.486 2.015.63.63 1.263 1.12 2.015 1.486.723.346 1.554.609 2.78.664 1.227.055 1.69.071 5.314.071 3.624 0 4.086-.016 5.314-.071 1.226-.055 2.057-.318 2.78-.664.752-.366 1.384-.855 2.015-1.486.63-.631 1.12-1.263 1.486-2.015.346-.723.609-1.554.664-2.78.055-1.228.071-1.69.071-5.314 0-3.621-.016-4.084-.071-5.31-.055-1.226-.318-2.057-.664-2.78-.365-.752-.854-1.384-1.486-2.015C16.896.281 16.264-.208 15.512-.574 14.789-.92 13.958-1.183 12.732-1.238 11.505-1.293 11.042-1.309 7.421-1.309l4.596 1.309zm0 1.621c3.563 0 3.993.016 5.4.071 1.3.059 2.006.273 2.476.456.622.242 1.066.532 1.533.999.466.466.756.91.999 1.533.183.47.397 1.176.456 2.476.055 1.408.071 1.837.071 5.4s-.016 3.993-.071 5.4c-.059 1.3-.273 2.006-.456 2.476-.242.622-.532 1.066-.999 1.533-.466.466-.91.756-1.533.999-.47.183-1.176.397-2.476.456-1.408.055-1.837.071-5.4.071s-3.993-.016-5.4-.071c-1.3-.059-2.006-.273-2.476-.456-.622-.242-1.066-.532-1.533-.999-.466-.466-.756-.91-.999-1.533-.183-.47-.397-1.176-.456-2.476-.055-1.408-.071-1.837-.071-5.4s.016-3.993.071-5.4c.059-1.3.273-2.006.456-2.476.242-.622.532-1.066.999-1.533.466-.466.91-.756 1.533-.999.47-.183 1.176-.397 2.476-.456 1.408-.055 1.837-.071 5.4-.071z"/>
                <path d="M12.017 15.33a3.314 3.314 0 1 1 0-6.628 3.314 3.314 0 0 1 0 6.628zM12.017 7.052a4.98 4.98 0 1 0 0 9.96 4.98 4.98 0 0 0 0-9.96zM18.685 6.756a1.164 1.164 0 1 1-2.328 0 1.164 1.164 0 0 1 2.328 0z"/>
              </svg>
            </a>
            
            {/* Twitter/X */}
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
              <svg className="w-5 h-5 text-white group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group">
              <svg className="w-6 h-6 text-white group-hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;