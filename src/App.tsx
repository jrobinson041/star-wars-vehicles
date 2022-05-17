import React from "react";
import { Container, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import useTheme from "./Hooks/useTheme";
import AppBar from "./Components/AppBar";
import VehicleTable from "./Components/VehicleTable";
import useFilms from "./Hooks/useFilms";

function App() {
  const theme = useTheme();
  const filmContext = useFilms();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Container maxWidth="xl" style={styles.container}>
        <Grid container spacing={3} style={{ height: "100%" }}>
          <Grid item xs={12} md={6} style={{ height: "100%" }}>
            <VehicleTable filmContext={filmContext} />
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

const styles = {
  container: {
    paddingTop: 100,
    paddingBottom: 20,
  },
};

export default App;
