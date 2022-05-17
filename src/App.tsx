import React from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AppBar from "./Components/AppBar";
import VehicleTable from "./Components/VehicleTable";
import FilmDetails from "./Components/FilmDetails";
import useTheme from "./Hooks/useTheme";
import useFilms from "./Hooks/useFilms";

function App() {
  const theme = useTheme();
  const filmContext = useFilms();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Container maxWidth="xl" style={styles.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <VehicleTable filmContext={filmContext} />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <FilmDetails filmContext={filmContext} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

const styles = {
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
};

export default App;
