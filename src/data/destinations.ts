export interface Destination {
  city: string;
  country: string;
  continent: 'Europe' | 'Afrique' | 'Moyen-Orient' | 'Amérique du Nord';
  airlines: string[];
}

// Liaisons régulières au départ de Marrakech Ménara (RAK).
// RAK est la deuxième plateforme du Maroc et la première base low cost du pays.
export const destinations: Destination[] = [
  // France
  { city: 'Paris (ORY)', country: 'France', continent: 'Europe', airlines: ['Transavia', 'Royal Air Maroc', 'Air Arabia Maroc'] },
  { city: 'Paris (CDG)', country: 'France', continent: 'Europe', airlines: ['Air France', 'Royal Air Maroc', 'easyJet'] },
  { city: 'Paris (BVA)', country: 'France', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Marseille', country: 'France', continent: 'Europe', airlines: ['Ryanair', 'Air Arabia Maroc'] },
  { city: 'Lyon', country: 'France', continent: 'Europe', airlines: ['easyJet', 'Transavia', 'Ryanair'] },
  { city: 'Toulouse', country: 'France', continent: 'Europe', airlines: ['Ryanair', 'Air Arabia Maroc'] },
  { city: 'Bordeaux', country: 'France', continent: 'Europe', airlines: ['Ryanair', 'Transavia'] },
  { city: 'Nantes', country: 'France', continent: 'Europe', airlines: ['Ryanair', 'Transavia'] },
  { city: 'Nice', country: 'France', continent: 'Europe', airlines: ['easyJet'] },
  { city: 'Montpellier', country: 'France', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Lille', country: 'France', continent: 'Europe', airlines: ['Ryanair', 'Transavia'] },
  { city: 'Strasbourg', country: 'France', continent: 'Europe', airlines: ['Ryanair'] },

  // Royaume-Uni & Irlande
  { city: 'Londres (STN)', country: 'Royaume-Uni', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Londres (LGW)', country: 'Royaume-Uni', continent: 'Europe', airlines: ['easyJet', 'British Airways', 'TUI Airways'] },
  { city: 'Londres (LTN)', country: 'Royaume-Uni', continent: 'Europe', airlines: ['easyJet', 'Wizz Air'] },
  { city: 'Londres (LHR)', country: 'Royaume-Uni', continent: 'Europe', airlines: ['Royal Air Maroc'] },
  { city: 'Manchester', country: 'Royaume-Uni', continent: 'Europe', airlines: ['Ryanair', 'easyJet', 'Jet2', 'TUI Airways'] },
  { city: 'Birmingham', country: 'Royaume-Uni', continent: 'Europe', airlines: ['Ryanair', 'Jet2'] },
  { city: 'Bristol', country: 'Royaume-Uni', continent: 'Europe', airlines: ['easyJet', 'Jet2'] },
  { city: 'Leeds', country: 'Royaume-Uni', continent: 'Europe', airlines: ['Jet2'] },
  { city: 'Édimbourg', country: 'Royaume-Uni', continent: 'Europe', airlines: ['Ryanair', 'Jet2'] },
  { city: 'Dublin', country: 'Irlande', continent: 'Europe', airlines: ['Ryanair'] },

  // Espagne & Portugal
  { city: 'Madrid', country: 'Espagne', continent: 'Europe', airlines: ['Ryanair', 'Royal Air Maroc', 'Air Arabia Maroc'] },
  { city: 'Barcelone', country: 'Espagne', continent: 'Europe', airlines: ['Ryanair', 'Vueling'] },
  { city: 'Malaga', country: 'Espagne', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Séville', country: 'Espagne', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Valence', country: 'Espagne', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Lisbonne', country: 'Portugal', continent: 'Europe', airlines: ['Ryanair', 'TAP Air Portugal'] },
  { city: 'Porto', country: 'Portugal', continent: 'Europe', airlines: ['Ryanair'] },

  // Benelux
  { city: 'Bruxelles (BRU)', country: 'Belgique', continent: 'Europe', airlines: ['Brussels Airlines', 'Royal Air Maroc', 'Air Arabia Maroc'] },
  { city: 'Bruxelles (CRL)', country: 'Belgique', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Amsterdam', country: 'Pays-Bas', continent: 'Europe', airlines: ['Transavia', 'easyJet', 'Royal Air Maroc'] },
  { city: 'Rotterdam', country: 'Pays-Bas', continent: 'Europe', airlines: ['Transavia'] },
  { city: 'Eindhoven', country: 'Pays-Bas', continent: 'Europe', airlines: ['Transavia', 'Ryanair'] },
  { city: 'Luxembourg', country: 'Luxembourg', continent: 'Europe', airlines: ['Luxair'] },

  // Allemagne, Suisse & Autriche
  { city: 'Francfort (FRA)', country: 'Allemagne', continent: 'Europe', airlines: ['Lufthansa', 'Royal Air Maroc'] },
  { city: 'Francfort (HHN)', country: 'Allemagne', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Munich', country: 'Allemagne', continent: 'Europe', airlines: ['Ryanair', 'Eurowings'] },
  { city: 'Berlin', country: 'Allemagne', continent: 'Europe', airlines: ['Ryanair', 'easyJet'] },
  { city: 'Düsseldorf', country: 'Allemagne', continent: 'Europe', airlines: ['Eurowings', 'Ryanair'] },
  { city: 'Genève', country: 'Suisse', continent: 'Europe', airlines: ['easyJet'] },
  { city: 'Zurich', country: 'Suisse', continent: 'Europe', airlines: ['Swiss', 'easyJet'] },
  { city: 'Bâle', country: 'Suisse', continent: 'Europe', airlines: ['easyJet'] },
  { city: 'Vienne', country: 'Autriche', continent: 'Europe', airlines: ['Ryanair', 'Wizz Air'] },

  // Italie & reste de l'Europe
  { city: 'Milan (BGY)', country: 'Italie', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Milan (MXP)', country: 'Italie', continent: 'Europe', airlines: ['easyJet', 'Royal Air Maroc'] },
  { city: 'Rome (FCO)', country: 'Italie', continent: 'Europe', airlines: ['Ryanair', 'Wizz Air'] },
  { city: 'Naples', country: 'Italie', continent: 'Europe', airlines: ['easyJet', 'Ryanair'] },
  { city: 'Copenhague', country: 'Danemark', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Stockholm', country: 'Suède', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Cracovie', country: 'Pologne', continent: 'Europe', airlines: ['Ryanair'] },
  { city: 'Varsovie', country: 'Pologne', continent: 'Europe', airlines: ['Ryanair', 'Wizz Air'] },
  { city: 'Budapest', country: 'Hongrie', continent: 'Europe', airlines: ['Ryanair', 'Wizz Air'] },
  { city: 'Istanbul', country: 'Turquie', continent: 'Europe', airlines: ['Turkish Airlines', 'Pegasus'] },

  // Maroc & Afrique
  { city: 'Casablanca', country: 'Maroc', continent: 'Afrique', airlines: ['Royal Air Maroc'] },
  { city: 'Dakhla', country: 'Maroc', continent: 'Afrique', airlines: ['Royal Air Maroc', 'Air Arabia Maroc'] },
  { city: 'Laâyoune', country: 'Maroc', continent: 'Afrique', airlines: ['Royal Air Maroc'] },
  { city: 'Tanger', country: 'Maroc', continent: 'Afrique', airlines: ['Air Arabia Maroc'] },
  { city: 'Le Caire', country: 'Égypte', continent: 'Afrique', airlines: ['Egyptair'] },
  { city: 'Tunis', country: 'Tunisie', continent: 'Afrique', airlines: ['Tunisair'] },
  { city: 'Dakar', country: 'Sénégal', continent: 'Afrique', airlines: ['Royal Air Maroc'] },

  // Moyen-Orient & Amérique du Nord
  { city: 'Doha', country: 'Qatar', continent: 'Moyen-Orient', airlines: ['Qatar Airways'] },
  { city: 'Dubaï', country: 'Émirats arabes unis', continent: 'Moyen-Orient', airlines: ['Emirates'] },
  { city: 'Montréal', country: 'Canada', continent: 'Amérique du Nord', airlines: ['Royal Air Maroc', 'Air Canada'] },
  { city: 'New York (JFK)', country: 'États-Unis', continent: 'Amérique du Nord', airlines: ['Royal Air Maroc'] }
];
