import axios, { AxiosRequestConfig } from "axios";
import { Movie } from "../types/movie";

interface movieServiceType {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const TMDB_BEARER_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number
): Promise<movieServiceType> => {
  const TMDB_URL = "https://api.themoviedb.org/3/search/movie";
  const configurations: AxiosRequestConfig = {
    params: {
      query: query,
      page: page,
    },
    headers: {
      Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
    },
  };
  const response = await axios.get<movieServiceType>(TMDB_URL, configurations);
  return response.data;
};
