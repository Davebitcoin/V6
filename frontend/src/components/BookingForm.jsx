import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mock';

const BookingForm = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    service: '',
    pickupDate: '',
    pickupTime: '',
    pickupAddress: '',
    destination: '',
    passengers: '1',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.service || !formData.pickupDate || !formData.pickupTime || !formData.name || !formData.phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simulation de l'envoi
    console.log('Données de réservation:', formData);
    
    toast({
      title: "Réservation envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais pour confirmer votre réservation.",
    });

    // Reset form et fermeture
    setFormData({
      service: '',
      pickupDate: '',
      pickupTime: '',
      pickupAddress: '',
      destination: '',
      passengers: '1',
      name: '',
      phone: '',
      email: '',
      notes: ''
    });
    
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-light text-gray-900">
              Réservation VTC
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Type */}
            <div className="space-y-2">
              <Label htmlFor="service">Type de service *</Label>
              <Select onValueChange={(value) => handleInputChange('service', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  {mockData.serviceTypes.map((service, idx) => (
                    <SelectItem key={idx} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date et Heure */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickupDate">Date de prise en charge *</Label>
                <Input 
                  id="pickupDate"
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupTime">Heure *</Label>
                <Select onValueChange={(value) => handleInputChange('pickupTime', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Heure" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockData.timeSlots.map((time, idx) => (
                      <SelectItem key={idx} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Adresses */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pickupAddress">Adresse de prise en charge *</Label>
                <Input 
                  id="pickupAddress"
                  placeholder="Adresse complète de départ"
                  value={formData.pickupAddress}
                  onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input 
                  id="destination"
                  placeholder="Adresse de destination"
                  value={formData.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                />
              </div>
            </div>

            {/* Nombre de passagers */}
            <div className="space-y-2">
              <Label htmlFor="passengers">Nombre de passagers</Label>
              <Select onValueChange={(value) => handleInputChange('passengers', value)} defaultValue="1">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6,7,8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} passager{num > 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Informations personnelles */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Vos informations</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input 
                    id="name"
                    placeholder="Votre nom et prénom"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+33 1 23 45 67 89"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes particulières</Label>
                  <Textarea 
                    id="notes"
                    placeholder="Informations complémentaires (siège bébé, assistance PMR, etc.)"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-100">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="flex-1"
              >
                Annuler
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-gray-900 hover:bg-gray-800"
              >
                Envoyer la demande
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;