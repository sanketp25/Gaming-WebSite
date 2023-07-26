import { ColorModeScript, Grid, GridItem, Show } from "@chakra-ui/react";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import theme from "./theme";
function App() {
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
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
