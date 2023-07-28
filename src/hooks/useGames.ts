import { GameQuery } from "../App";
import useData from "./useData";
import { Genres } from "./useGenres";
import { Platforms } from "./usePlatform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating?: number;
  metacritic: number;
}
const useGames = (
    gameQuery:GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
