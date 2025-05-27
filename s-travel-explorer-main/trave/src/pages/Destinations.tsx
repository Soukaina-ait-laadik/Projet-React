
import { useState } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '@/data/destinations';
import { FilterState } from '@/types/travel';
import DestinationCard from '@/components/DestinationCard';
import FilterBar from '@/components/FilterBar';

const Destinations = () => {
  const [filters, setFilters] = useState<FilterState>({
    continent: 'Tous',
    season: 'Toutes',
    priceRange: [500, 3000],
  });

  const filteredDestinations = destinations.filter((destination) => {
    const continentMatch = filters.continent === 'Tous' || destination.continent === filters.continent;
    const seasonMatch = filters.season === 'Toutes' || destination.season === filters.season;
    const priceMatch = destination.price >= filters.priceRange[0] && destination.price <= filters.priceRange[1];
    
    return continentMatch && seasonMatch && priceMatch;
  });

  const resetFilters = () => {
    setFilters({
      continent: 'Tous',
      season: 'Toutes',
      priceRange: [500, 3000],
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <section className="bg-gradient-to-r bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Nos Destinations
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Explorez notre sélection soigneusement choisie de destinations extraordinaires à travers le monde.
          </motion.p>
        </div>
      </section>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FilterBar
          filters={filters}
          onFilterChange={setFilters}
          onReset={resetFilters}
        />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            {filteredDestinations.length} destination{filteredDestinations.length > 1 ? 's' : ''} trouvée{filteredDestinations.length > 1 ? 's' : ''}
          </p>
        </motion.div>

        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Aucune destination trouvée
            </h3>
            <p className="text-gray-600 mb-6">
              Essayez de modifier vos critères de recherche.
            </p>
            <button
              onClick={resetFilters}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Destinations;
