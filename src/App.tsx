import { ColorModeScript, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genres } from "./hooks/useGenres";
import { Platforms } from "./hooks/usePlatform";

export interface GameQuery{
  genre:Genres | null;
  platform: Platforms | null;
}

function App() {
  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main" `,
        lg: `"nav nav" "aside main"`,
      }}

      templateColumns={{
        base: '1fr',
        lg:'200px 1fr'
      }}
    >
      <GridItem area="nav">        
        <NavBar/>
      </GridItem> 
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
        {/* <GenreList selectedGenre={selectedGenre} onSelect={(genre)=>setSelectedGenre(genre)}/> */}
          <GenreList selectedGenre={gameQuery.genre} onSelect={(genre)=>setGameQuery({...gameQuery,genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector onSelect={(platform)=>setGameQuery({...gameQuery,platform})} />
        <GamesGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
