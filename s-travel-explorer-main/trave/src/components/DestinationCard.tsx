
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Destination } from '@/types/travel';

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

const DestinationCard = ({ destination, index }: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-64">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-white text-gray-900 hover:bg-gray-100">
              {destination.continent}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-blue-600 text-white">
              {destination.season}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{destination.country}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {destination.name}
          </h3>
          
          <p className="text-gray-700 mb-4 flex-1">
            {destination.description}
          </p>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">{destination.duration} jours</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-auto">
            <div>
              <span className="text-sm text-gray-500">À partir de</span>
              <div className="text-2xl font-bold text-blue-600">
                {destination.price}€
              </div>
            </div>
            <Button asChild>
              <Link to={`/destination/${destination.id}`}>
                Découvrir
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DestinationCard;
