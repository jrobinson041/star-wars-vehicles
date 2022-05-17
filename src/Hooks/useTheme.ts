import { useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red, blue } from "@mui/material/colors";

const useTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const prefersDarkMode = false;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: prefersDarkMode ? red : blue,
          secondary: prefersDarkMode ? blue : red,
        },
      }),
    [prefersDarkMode]
  );

  return responsiveFontSizes(theme);
};

export default useTheme;
