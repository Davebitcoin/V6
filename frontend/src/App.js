import React, { useState } from "react";
import "./App.css";
import { Toaster } from "./components/ui/toaster";

// Import des composants
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Vehicles from "./components/Vehicles";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import BookingForm from "./components/BookingForm";

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingFormOpen(true);
  };

  const handleBookingClose = () => {
    setIsBookingFormOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <Navigation onBookingClick={handleBookingClick} />

      {/* Hero Section */}
      <section id="home">
        <Hero onBookingClick={handleBookingClick} />
      </section>

      {/* Services Section */}
      <Services />

      {/* Vehicles Section */}
      <section id="vehicles">
        <Vehicles />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing onBookingClick={handleBookingClick} />
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Booking Form Modal */}
      <BookingForm 
        isOpen={isBookingFormOpen} 
        onClose={handleBookingClose} 
      />

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-light mb-4">Elite VTC</h3>
              <p className="text-gray-400 leading-relaxed">
                Votre partenaire de confiance pour tous vos déplacements professionnels et personnels.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <div>Transfert Aéroport</div>
                <div>Transport Business</div>
                <div>Événements & Mariages</div>
                <div>Tours & Excursions</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div>+33 1 23 45 67 89</div>
                <div>contact@elitevtc.fr</div>
                <div>Paris et Île-de-France</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Elite VTC. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default App;