import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../data/mock';

const Hero = ({ onBookingClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/3 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            {mockData.company.name}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-light mb-6 opacity-90 tracking-wide">
          {mockData.company.tagline}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {mockData.company.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={onBookingClick}
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
          >
            <span className="mr-2">Réserver maintenant</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>

          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
          >
            Nos services
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
          <div className="text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-light mb-2">2019</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Depuis</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-light mb-2">24/7</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Service</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform">
            <div className="text-3xl font-light mb-2">100%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;