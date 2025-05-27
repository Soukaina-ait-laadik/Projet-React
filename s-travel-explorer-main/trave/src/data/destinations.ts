
import { Destination } from '@/types/travel';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    price: 1200,
    duration: 7,
    season: 'Printemps',
    image: 'https://www.urlaubstracker.de/wp-content/uploads/2018/12/frankreich-paris-eiffelturm-lichter.jpg',
    description: 'Découvrez la Ville Lumière avec ses monuments emblématiques, ses musées prestigieux et sa gastronomie exceptionnelle.',
    highlights: ['Tour Eiffel', 'Musée du Louvre', 'Champs-Élysées', 'Montmartre'],
    includes: ['Vol aller-retour', 'Hôtel 4 étoiles', 'Petit-déjeuner', 'Guide touristique']
  },
  {
    id: '2',
    name: 'Tokyo',
    country: 'Japon',
    continent: 'Asie',
    price: 2200,
    duration: 10,
    season: 'Automne',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
    description: 'Immergez-vous dans la culture japonaise entre tradition et modernité dans cette métropole fascinante.',
    highlights: ['Temple Senso-ji', 'Quartier Shibuya', 'Mont Fuji', 'Jardins impériaux'],
    includes: ['Vol aller-retour', 'Hôtel traditionnel', 'JR Pass', 'Visites guidées']
  },
  {
    id: '3',
    name: 'New York',
    country: 'États-Unis',
    continent: 'Amérique',
    price: 1800,
    duration: 8,
    season: 'Été',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
    description: 'Explorez la Big Apple, ses gratte-ciels emblématiques, Broadway et Central Park.',
    highlights: ['Statue de la Liberté', 'Times Square', 'Central Park', 'Brooklyn Bridge'],
    includes: ['Vol aller-retour', 'Hôtel Manhattan', 'MetroCard', 'Spectacle Broadway']
  },
  {
    id: '4',
    name: 'Marrakech',
    country: 'Maroc',
    continent: 'Afrique',
    price: 800,
    duration: 6,
    season: 'Hiver',
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&h=600&fit=crop',
    description: 'Découvrez la magie de Marrakech, ses souks colorés, ses palais somptueux et l\'hospitalité marocaine.',
    highlights: ['Place Jemaa el-Fna', 'Palais de la Bahia', 'Jardins Majorelle', 'Souks'],
    includes: ['Vol aller-retour', 'Riad traditionnel', 'Excursion désert', 'Dîner spectacle']
  },
  {
    id: '5',
    name: 'Sydney',
    country: 'Australie',
    continent: 'Océanie',
    price: 2800,
    duration: 12,
    season: 'Printemps',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    description: 'Explorez Sydney, son opéra iconique, ses plages magnifiques et sa culture unique.',
    highlights: ['Opéra de Sydney', 'Harbour Bridge', 'Bondi Beach', 'Blue Mountains'],
    includes: ['Vol aller-retour', 'Hôtel vue océan', 'Excursions', 'Transport local']
  },
  {
    id: '6',
    name: 'Rome',
    country: 'Italie',
    continent: 'Europe',
    price: 950,
    duration: 5,
    season: 'Automne',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
    description: 'Plongez dans l\'histoire éternelle de Rome avec ses monuments antiques et sa cuisine délicieuse.',
    highlights: ['Colisée', 'Vatican', 'Fontaine de Trevi', 'Forum Romain'],
    includes: ['Vol aller-retour', 'Hôtel centre-ville', 'Visites guidées', 'Dégustations']
  }
];
