import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

export interface Game {
  id: number;
  name: string;
  background_image: string;
//   image: string;
//   image_background:string;
  rating?: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClients
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []); // To hit the api
  //empty array to send the request to the api only once

  return { error, games };
};

export default useGames;
