import React from "react";
import { AppBar as MuiAppBar, Grid, Typography } from "@mui/material";
import useIsMobile from "../Hooks/useIsMobile";

const AppBar = () => {
  const isMobile = useIsMobile();

  return (
    <MuiAppBar style={styles.appBar} enableColorOnDark position="sticky">
      <Grid container alignItems="center" spacing={3}>
        <Grid item>
          <img
            src="https://jrobinson041.github.io/star-wars-vehicles/death-star.svg"
            alt="Death Star Logo"
            style={styles.logo}
          />
        </Grid>
        <Grid item style={{ display: "relative" }}>
          <Typography variant="h5" style={styles.title}>
            Non-Hyperdrive Vehicle Database
          </Typography>
        </Grid>
        {!isMobile && (
          <Grid item>
            <Typography
              variant="caption"
              color="textSecondary"
              component="a"
              href="https://swapi.dev/"
              target="_blank"
              style={styles.link}
            >
              A Star Wars API Saga
            </Typography>
          </Grid>
        )}
      </Grid>
    </MuiAppBar>
  );
};

const styles = {
  appBar: {
    padding: 5,
    paddingLeft: 20,
  },
  logo: {
    width: 50,
    cursor: "default",
    marginTop: 5,
  },
  title: {
    cursor: "default",
  },
  link: {
    textDecoration: "none",
  },
};

export default AppBar;
