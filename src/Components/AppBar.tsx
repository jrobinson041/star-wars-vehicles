import React from "react";
import { AppBar as MuiAppBar, Grid, Typography } from "@mui/material";

const AppBar = () => {
  return (
    <MuiAppBar style={styles.appBar} enableColorOnDark>
      <Grid container alignItems="center" spacing={3}>
        <Grid item>
          <img
            src="./death-star.svg"
            alt="Death Star Logo"
            style={styles.logo}
          />
        </Grid>
        <Grid item>
          <Typography display="inline" variant="h5">
            Non-Hyperdrive Vehicle Database
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
};

export default AppBar;
