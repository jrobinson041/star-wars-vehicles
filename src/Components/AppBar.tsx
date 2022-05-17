import React from "react";
import { AppBar as MuiAppBar, Grid, Typography } from "@mui/material";

const AppBar = () => {
  return (
    <MuiAppBar style={styles.appBar} enableColorOnDark position="sticky">
      <Grid container alignItems="center" spacing={3}>
        <Grid item>
          <a href="#" style={styles.link}>
            <img
              src="./death-star.svg"
              alt="Death Star Logo"
              style={styles.logo}
            />
          </a>
        </Grid>
        <Grid item>
          <Typography display="inline" variant="h5" style={styles.title}>
            Non-Hyperdrive Vehicle Database
          </Typography>
        </Grid>
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
