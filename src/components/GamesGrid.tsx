import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import { Platforms } from "../hooks/usePlatform";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props{
  gameQuery: GameQuery
  // selectedGenre: Genres | null;
  // selectedPlatform:Platforms | null;
}

const GamesGrid = ({gameQuery}:Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding="10px"
        spacing={3}
      >
        {isLoading && skeletons.map((sk) => 
        <GameCardContainer key={sk}> 
          <GameCardSkeleton />
        </GameCardContainer> 
        )}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
          //   <li key={game.id}>{game.name}</li>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
