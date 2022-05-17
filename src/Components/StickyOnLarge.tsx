import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const StickyOnLarge = ({ children }: Props) => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={large ? { position: "sticky", top: 92, left: 0 } : {}}>
      {children}
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default StickyOnLarge;
