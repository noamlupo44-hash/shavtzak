import { Margin } from "@mui/icons-material";
import "../../styles/Role.css";
import type { Row } from "../../types/Row";
import { TableCell, Input } from "@mui/material";
import { useMemo } from "react";
interface role {
  setTable: React.Dispatch<React.SetStateAction<Row[]>>;
  table: Row[];
  rowId: number;
}
function Role({ setTable, table, rowId }: role) {
  const currentTitle = useMemo(() => {
    return table.find((row) => row.id === rowId)?.title ?? "";
  }, [table, rowId]);
  function saveTitle(input: string) {
    const update = table.map((row) =>
      row.id === rowId ? { ...row, title: input } : { ...row },
    );
    setTable(update);
  }

  return (
    <TableCell
      sx={{
        padding: 0,
      }}
    >
      <Input
        onChange={(e) => saveTitle(e.target.value)}
        value={currentTitle}
        sx={{
          backgroundColor: "lightblue",
          width: "5dvw",
          height: "3dvh",
          fontSize: "",
          margin: "0 1dvw",
        }}
      ></Input>
    </TableCell>
  );
}

export default Role;
