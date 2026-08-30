import { Button, TableCell, Typography } from "@mui/material";
import type { Row } from "../../types/Row";

interface removeButton {
  setTable: React.Dispatch<React.SetStateAction<Row[]>>;
  table: Row[];
  rowId: number;
}

function RemoveButton({ setTable, table, rowId }: removeButton) {
  function deleteRow() {
    const update = table.filter((row) => row.id !== rowId);
    setTable(update);
  }
  return (
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
        onClick={() => deleteRow()}
        sx={{ width: "1dvw", height: "3dvh", minWidth: 0 }}
      >
        <Typography sx={{ color: "red", fontSize: "25px" }}>X</Typography>
      </Button>
    </TableCell>
  );
}

export default RemoveButton;
