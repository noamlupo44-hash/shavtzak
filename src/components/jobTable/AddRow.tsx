import type { Cell } from "../../types/Cell";
import type { Row } from "../../types/Row";
import { TableRow, TableCell, Button, Typography } from "@mui/material";
interface addRow {
  table: Row[];
  setTable: React.Dispatch<React.SetStateAction<Row[]>>;
}

function AddRow({ table, setTable }: addRow) {
  function newRow() {
    const newDays: Cell[] = [];
    const date = new Date(table[0].cells[table[0].cells.length - 1].date);
    date.setDate(date.getDate() - 6);
    for (let j = 0; j < 7; j++) {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + j);
      newDays.push({
        date: newDate.toISOString().split("T")[0],
        morning: true,
        name: "",
        highlight: false,
      });
      newDays.push({
        date: newDate.toISOString().split("T")[0],
        morning: false,
        name: "",
        highlight: false,
      });
    }
    const update = [
      ...table,
      { cells: newDays, id: table[table.length - 1].id + 1, title: "" },
    ];
    setTable(update);
  }
  return (
    <TableRow>
      <TableCell
        sx={{
          width: "1dvw",
          padding: 0,
          ml: "1dvw",
          justifySelf: "center",
          display: "flex",
        }}
      >
        <Button
          onClick={() => newRow()}
          sx={{ width: "1dvw", height: "3dvh", minWidth: 0 }}
        >
          <Typography sx={{ color: "green", fontSize: "30px" }}>+</Typography>
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default AddRow;
