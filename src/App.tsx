import { Grid, GridItem, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Stack hideBelow="lg">
          <GridItem area="aside">
            Aside
          </GridItem>
        </Stack>
        <GridItem area="main">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
