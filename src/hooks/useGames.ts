import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{ platform:Platform }[];
  rating?: number;
  metacritic:number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    apiClients
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });

    return () => controller.abort();
  }, []); // To hit the api
  //empty array to send the request to the api only once

  return { error, games, isLoading };
};

export default useGames;
