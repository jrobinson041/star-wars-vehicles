import React, { useEffect, useState } from "react";
import { Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FilmContextType } from "../Interfaces/film";
import { Vehicle } from "../Interfaces/vehicle";
import VehicleFilmList from "./VehicleFilmList";

const VehicleRow = ({ vehicle, filmContext }: Props) => {
  const [showFilms, setShowFilms] = useState<boolean>(false);
  const { fetchFilms } = filmContext;

  useEffect(() => {
    if (showFilms) {
      fetchFilms(vehicle.films);
    }
  }, [showFilms, vehicle, fetchFilms]);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setShowFilms(!showFilms)}
          >
            {showFilms ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{vehicle.name}</TableCell>
        <TableCell>{vehicle.model}</TableCell>
        <TableCell>{vehicle.manufacturer}</TableCell>
        <TableCell>{new Date(vehicle.created).toLocaleString()}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={showFilms}>
            <VehicleFilmList vehicle={vehicle} filmContext={filmContext} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

interface Props {
  vehicle: Vehicle;
  filmContext: FilmContextType;
}

export default VehicleRow;
