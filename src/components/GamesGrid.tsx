import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

interface Game {
  id: number;
  name: string;
  rating?: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }); // To hit the api
  return (
    <>
      {error && <Text>{ error }</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
