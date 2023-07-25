import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

interface Genres {
  id: number;
  name: string;
  slug: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genres[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    apiClients
    
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        setLoading(false);
      });
    return () => controller.abort();
  });
  return { genres, error, isLoading };
};

export default useGenres;
