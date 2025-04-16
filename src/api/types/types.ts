export interface GhibliAPIFilms {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}

export interface APIStore {
  isLoading: boolean;
  success: boolean;
  error: unknown | null;
  filmList: GhibliAPIFilms[] | null;

  getFilms: () => Promise<{ success: boolean; error?: unknown }>;
}

export interface FilterStore {
  searchTitle: string;

  setSearchTitle: (title: string) => void;
}
