
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { destinations } from '@/data/destinations';
import { Reservation as ReservationType } from '@/types/travel';

const Reservation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: searchParams.get('destination') || '',
    date: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedDestination = destinations.find(dest => dest.id === formData.destination);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.destination || !formData.date) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi
    setTimeout(() => {
      const reservation: ReservationType = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        destination: selectedDestination?.name || '',
        date: formData.date,
        createdAt: new Date().toISOString(),
      };

      // Stockage local
      const existingReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
      existingReservations.push(reservation);
      localStorage.setItem('reservations', JSON.stringify(existingReservations));

      toast({
        title: "Réservation confirmée !",
        description: `Votre voyage à ${selectedDestination?.name} est réservé pour le ${new Date(formData.date).toLocaleDateString('fr-FR')}.`,
      });

      setIsSubmitting(false);
      
      // Redirection après 2 secondes
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Réservation
          </h1>
          <p className="text-xl text-gray-600">
            Réservez votre voyage de rêve en quelques clics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informations personnelles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Votre nom complet"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="destination">Destination *</Label>
                    <Select
                      value={formData.destination}
                      onValueChange={(value) => setFormData({ ...formData, destination: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choisissez votre destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((destination) => (
                          <SelectItem key={destination.id} value={destination.id}>
                            {destination.name} - {destination.country} ({destination.price}€)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="date">Date de départ *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="mt-1"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Réservation en cours...
                      </>
                    ) : (
                      'Confirmer la réservation'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Récapitulatif */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Récapitulatif
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDestination ? (
                  <div className="space-y-6">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <img
                        src={selectedDestination.image}
                        alt={selectedDestination.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedDestination.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{selectedDestination.country}</p>
                      <p className="text-gray-700">{selectedDestination.description}</p>
                    </div>

                    <div className="space-y-3 py-4 border-t border-gray-200">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Durée</span>
                        <span className="font-semibold">{selectedDestination.duration} jours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Saison recommandée</span>
                        <span className="font-semibold">{selectedDestination.season}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-blue-600 border-t border-gray-200 pt-3">
                        <span>Prix total</span>
                        <span>{selectedDestination.price}€</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Inclus dans votre voyage :</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        {selectedDestination.includes.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Sélectionnez une destination pour voir le récapitulatif
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reservation;
