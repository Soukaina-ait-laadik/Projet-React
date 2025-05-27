
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FilterState } from '@/types/travel';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
}

const FilterBar = ({ filters, onFilterChange, onReset }: FilterBarProps) => {
  const continents = ['Tous', 'Europe', 'Asie', 'Amérique', 'Afrique', 'Océanie'];
  const seasons = ['Toutes', 'Printemps', 'Été', 'Automne', 'Hiver'];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            {/* Continent */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Continent
              </label>
              <Select
                value={filters.continent}
                onValueChange={(value) =>
                  onFilterChange({ ...filters, continent: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un continent" />
                </SelectTrigger>
                <SelectContent>
                  {continents.map((continent) => (
                    <SelectItem key={continent} value={continent}>
                      {continent}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Saison */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Saison
              </label>
              <Select
                value={filters.season}
                onValueChange={(value) =>
                  onFilterChange({ ...filters, season: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une saison" />
                </SelectTrigger>
                <SelectContent>
                  {seasons.map((season) => (
                    <SelectItem key={season} value={season}>
                      {season}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Prix */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget: {filters.priceRange[0]}€ - {filters.priceRange[1]}€
              </label>
              <Slider
                value={filters.priceRange}
                onValueChange={(value) =>
                  onFilterChange({ ...filters, priceRange: value as [number, number] })
                }
                max={3000}
                min={500}
                step={100}
                className="w-full"
              />
            </div>

            {/* Reset */}
            <div>
              <Button onClick={onReset} variant="outline" className="w-full">
                Réinitialiser
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FilterBar;
