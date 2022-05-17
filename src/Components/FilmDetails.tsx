import React from "react";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { FilmContextType } from "../Interfaces/film";
import episodeToRoman from "../Helpers/episodeToRoman";

const FilmDetails = ({ filmContext }: Props) => {
  const { selectedFilm: film } = filmContext;

  if (!film) {
    return (
      <Card style={styles.container}>
        <CardHeader
          title="Click on a Vehicle to Start"
          titleTypographyProps={{
            color: "textSecondary",
          }}
        />
        <CardContent style={styles.placeholder}>
          <Typography variant="subtitle1" color="textSecondary">
            Click on a vehicle to view the Star Wars films it has been featured
            in. Click on a film to view more details here.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card style={styles.container}>
      <CardHeader
        title={`Episode ${episodeToRoman(film.episode_id)}: ${film.title}`}
        titleTypographyProps={{
          color: "textPrimary",
        }}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item>
            <Typography color="textSecondary">Producer</Typography>
            <Typography color="textSecondary">Director</Typography>
            <Typography color="textSecondary">Released</Typography>
          </Grid>
          <Grid item>
            <Typography>{film.producer}</Typography>
            <Typography>{film.director}</Typography>
            <Typography>
              {new Date(film.release_date + "T00:00:00").toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{film.opening_crawl}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const styles = {
  container: {
    width: "100%",
    minHeight: 200,
  },
  header: {
    textAlign: "center",
  },
  placeholder: {
    padding: 40,
  },
};

interface Props {
  filmContext: FilmContextType;
}

export default FilmDetails;
