import type { Row } from "../../types/Row";
import type { Cell } from "../../types/Cell";
import JobCell from "./JobCell";
import Role from "./Role";
import RemoveButton from "./RemoveButton";
import weekAhead from "../../utils/weekAhead";
import { TableRow } from "@mui/material";

interface JobRow {
  setTable: React.Dispatch<React.SetStateAction<Row[]>>;
  table: Row[];
  rowId: number;
}

function JobRow({ setTable, table, rowId }: JobRow) {
  const currentRow = table.find((row) => row.id === rowId);
  const weekDays = weekAhead();

  return (
    <TableRow>
      <RemoveButton setTable={setTable} table={table} rowId={rowId} />
      <Role setTable={setTable} table={table} rowId={rowId} />
      {currentRow?.cells
        .filter((cell) => weekDays.includes(cell.date))
        .map((cell) => (
          <JobCell
            key={rowId + cell.date + cell.morning}
            setTable={setTable}
            table={table}
            cellId={rowId + "/" + cell.date + "/" + cell.morning}
          />
        ))}
    </TableRow>
  );
}

export default JobRow;
