import useLocalStorage from "../../hooks/useLocalStorage";
import type { Row } from "../../types/Row";
import { useParams } from "react-router-dom";
import HeadRow from "./HeadRow";
import "../../styles/ShowTable.css";
import { useEffect, useMemo, useState } from "react";
import JobRow from "./JobRow";
import CheckTable from "./CheckTable";
import { Typography, Box, Table, TableBody } from "@mui/material";
import { CenterFocusStrong } from "@mui/icons-material";
import FilterForm from "./FilterForm";
import AddRow from "./AddRow";

function ShowTable() {
  const { tableName } = useParams();
  const [table, setTable] = useLocalStorage<Row[]>(
    tableName ? tableName : "",
    [],
  );
  const [openFilter, setOpenFilter] = useState(false);
  const [filteredTable, setFilteredTable] = useState<number[]>([
    ...table.map((row) => row.id),
  ]);

  useEffect(() => {
    CheckTable({ table, setTable });
    console.log(table);
  }, [tableName]);

  const nofilter = useMemo(() => {
    return !table.some((row) => row.cells.some((cell) => cell.highlight));
  }, [table]);

  return (
    <div className="wholeTable">
      <Table
        sx={{
          "& .MuiTableCell-root": {
            borderBottom: "none",
          },
        }}
      >
        <HeadRow setOpenFilter={setOpenFilter} />
        <TableBody>
          {table
            .filter((row) =>
              row.cells.some((cell) => cell.highlight || nofilter),
            )
            .map((row) => (
              <JobRow
                key={row.id}
                setTable={setTable}
                table={table}
                rowId={row.id}
              />
            ))}
          <AddRow table={table} setTable={setTable} />
        </TableBody>
      </Table>
      <FilterForm
        table={table}
        setFilteredTable={setFilteredTable}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        setTable={setTable}
      />
    </div>
  );
}

export default ShowTable;
