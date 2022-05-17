import React, { useState } from "react";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { FilmContextType } from "../Interfaces/film";
import useVehicles from "../Hooks/useVehicles";
import VehicleRow from "./VehicleRow";

const VehicleTable = ({ filmContext }: Props) => {
  const [page, setPage] = useState<number>(0);
  const data = useVehicles(page || 0);

  return (
    <TableContainer component={Paper} style={styles.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Manufacturer</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        {data ? (
          <TableBody>
            {data?.results.map((vehicle) => (
              <VehicleRow vehicle={vehicle} filmContext={filmContext} />
            ))}
          </TableBody>
        ) : (
          <CircularProgress size={48} style={styles.loader} />
        )}
      </Table>
      <TablePagination
        component="div"
        count={data?.count || 0}
        rowsPerPage={10}
        page={page}
        onPageChange={(e, page) => setPage(page)}
      />
    </TableContainer>
  );
};

const styles = {
  container: {
    width: "100%",
  },
  loader: {
    alignText: "center",
    margin: 30,
  },
};

interface Props {
  filmContext: FilmContextType;
}

export default VehicleTable;
