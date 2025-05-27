
export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: 'Europe' | 'Asie' | 'Amérique' | 'Afrique' | 'Océanie';
  price: number;
  duration: number;
  season: 'Printemps' | 'Été' | 'Automne' | 'Hiver';
  image: string;
  description: string;
  highlights: string[];
  includes: string[];
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  destination: string;
  date: string;
  createdAt: string;
}

export interface FilterState {
  continent: string;
  season: string;
  priceRange: [number, number];
}
