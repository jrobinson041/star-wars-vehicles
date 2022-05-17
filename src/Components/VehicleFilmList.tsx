import React from "react";
import { Chip, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { FilmContextType } from "../Interfaces/film";
import { Vehicle } from "../Interfaces/vehicle";

const VehicleFilmList = ({ vehicle, filmContext }: Props) => {
  const { films, selectedFilmUrl, setSelectedFilmUrl } = filmContext;

  return (
    <Grid container spacing={2} alignItems="center" style={styles.container}>
      <Grid item>
        <Typography color="secondary">
          {vehicle.name}{" "}
          <Typography component="span" color="textSecondary">
            was featured in:
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        {!vehicle.films.length && (
          <Typography color="primary">No Films</Typography>
        )}
        <Stack direction="row" spacing={1}>
          {vehicle.films.map((filmUrl) => (
            <Chip
              label={
                films[filmUrl] ? (
                  films[filmUrl].title
                ) : (
                  <CircularProgress size={16} />
                )
              }
              disabled={!films[filmUrl]}
              onClick={() => setSelectedFilmUrl(filmUrl)}
              variant={selectedFilmUrl === filmUrl ? "filled" : "outlined"}
              color="secondary"
              style={styles.chip}
            />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

const styles = {
  container: {
    padding: 10,
  },
  chip: {
    minWidth: 50,
  },
};

interface Props {
  vehicle: Vehicle;
  filmContext: FilmContextType;
}

export default VehicleFilmList;
