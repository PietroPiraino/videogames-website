export interface Game {
  background_image: string;
  id: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screeshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}

export interface APIResponse<T> {
  results: Array<T>;
}

export interface Genre {
  name: string;
}

export interface ParentPlatform {
  platform: {
    name: string;
    slug: string;
  };
}

export interface Publishers {
  name: string;
}

export interface Rating {
  id: number;
  count: number;
  title: string;
}

export interface Screenshots {
  image: string;
}

export interface Trailer {
  data: {
    max: string;
  };
}
