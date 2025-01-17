import client from "@/services/api-client";
// import genres from '../data/genres'
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import genres from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// {data: genres, isLoading: false, error: null}
const useGenres = () => {
  const fetchGenres = () =>
    client.get<FetchResponse<Genre>>("/genres").then((res) => res.data);

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
