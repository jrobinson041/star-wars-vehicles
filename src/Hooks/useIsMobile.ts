import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const useIsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile;
};

export default useIsMobile;
