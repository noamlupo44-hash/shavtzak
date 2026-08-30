import { Input, TableCell, TextField, Typography } from "@mui/material";
import "../../styles/jobCell.css";
import type { Row } from "../../types/Row";
import { useMemo } from "react";
import stc from "string-to-color";
import type { user } from "../../types/User";
import { useUserStore } from "../../store/userStore";

type jobCell = {
  setTable: React.Dispatch<React.SetStateAction<Row[]>>;
  table: Row[];
  cellId: string;
};

function JobCell({ setTable, table, cellId }: jobCell) {
  const activeUser = useUserStore((state) => state.activeUser);
  const currentCell = useMemo(() => {
    return table
      .find((row) => row.id === Number(cellId.slice(0, cellId.indexOf("/"))))
      ?.cells.find(
        (cell) =>
          cellId.slice(cellId.indexOf("/") + 1) ===
          cell.date + "/" + cell.morning,
      );
  }, [table]);

  function saveChange(input: string) {
    if (activeUser?.role === "admin") {
      const upadte = table.map((row) => ({
        ...row,
        cells: row.cells.map((cell) =>
          cellId === row.id + "/" + cell.date + "/" + cell.morning
            ? { ...cell, name: input }
            : cell,
        ),
      }));

      setTable(upadte);
    }
  }

  return (
    <TableCell
      sx={{
        margin: 0,
        padding: 0,
        borderRight: currentCell?.morning
          ? "solid 2px #2b57d4"
          : "solid 4px #2b57d4",
      }}
    >
      <Input
        onChange={(e) => saveChange(e.target.value)}
        value={currentCell?.name}
        sx={{
          backgroundColor: currentCell?.highlight
            ? stc(currentCell.name)
            : "white",
          width: "6.5dvw",
          height: "3dvh",
          fontSize: "",
        }}
      ></Input>
    </TableCell>
  );
}

export default JobCell;
