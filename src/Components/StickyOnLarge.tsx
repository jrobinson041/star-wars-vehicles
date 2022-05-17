import React from "react";
import useIsMobile from "../Hooks/useIsMobile";

const StickyOnLarge = ({ children }: Props) => {
  const isMobile = useIsMobile();

  return (
    <div style={!isMobile ? { position: "sticky", top: 92, left: 0 } : {}}>
      {children}
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default StickyOnLarge;
