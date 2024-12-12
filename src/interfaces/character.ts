export interface Character {
  id: number;
  created: string;
  episode: string[];
  gender: string;
  image: string;
  location: string[];
  name: string;
  origin: string;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface IApiOptions {
  name?: string;
  page?: number;
}
