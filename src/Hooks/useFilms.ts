import { useCallback, useEffect, useState } from "react";
import API from "../API";
import { Films } from "../Interfaces/film";

// `films` will be our memoized object holding all film info indexed by URL
/*
 *  {
 *    'https://.../films/1': { title: "A New Hope", ...}
 *  }
 */

const useFilms = () => {
  const [films, setFilms] = useState<Films>({});

  const [selectedFilmUrl, setSelectedFilmUrl] = useState<string>("");

  // Not memoized, just fetch a film and save it
  // wrapped with useCallback so we can safely use inside useEffect
  const fetchFilm = useCallback(async (url: string) => {
    let res = await API.get(url);
    setFilms((films) => ({
      ...films,
      [url]: res.data,
    }));
  }, []);

  // Fetch if necessary when new selectedFilmUrl is selected
  useEffect(() => {
    if (selectedFilmUrl && !films[selectedFilmUrl]) {
      fetchFilm(selectedFilmUrl);
    }
  }, [selectedFilmUrl, fetchFilm, films]);

  // Memoized
  // Fetch any necessary for an array of API URLs
  const fetchFilms = (urlList: Array<string>) => {
    for (let url of urlList) {
      if (!films[url]) {
        fetchFilm(url);
      }
    }
  };

  const selectedFilm = selectedFilmUrl ? films[selectedFilmUrl] : null;

  return {
    films,
    fetchFilms,
    selectedFilm,
    selectedFilmUrl,
    setSelectedFilmUrl,
  };
};

export default useFilms;
