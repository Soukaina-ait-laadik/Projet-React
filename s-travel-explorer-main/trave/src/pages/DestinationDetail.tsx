
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { destinations } from '@/data/destinations';

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Destination non trouvée</h1>
          <Link to="/destinations">
            <Button>Retour aux destinations</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Image hero */}
      <section className="relative h-96 md:h-[60vh]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <div className="absolute top-6 left-6">
          <Link to="/destinations">
            <Button variant="outline" className="bg-white/90 backdrop-blur-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">{destination.country}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {destination.name}
          </h1>
          <div className="flex gap-3">
            <Badge className="bg-blue-600 text-white">
              {destination.continent}
            </Badge>
            <Badge className="bg-green-600 text-white">
              {destination.season}
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Description
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {destination.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Points forts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Inclus dans le voyage
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="sticky top-24"
            >
              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 mb-1">À partir de</div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {destination.price}€
                    </div>
                    <div className="text-sm text-gray-500">par personne</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">Durée</span>
                      </div>
                      <span className="font-semibold">{destination.duration} jours</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">Destination</span>
                      </div>
                      <span className="font-semibold">{destination.country}</span>
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-700">Meilleure saison</span>
                      <span className="font-semibold">{destination.season}</span>
                    </div>
                  </div>

                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Link to={`/reservation?destination=${destination.id}`}>
                      Réserver maintenant
                    </Link>
                  </Button>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      Réservation sans engagement • Annulation gratuite
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationDetail;
