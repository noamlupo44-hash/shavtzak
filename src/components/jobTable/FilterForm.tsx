import {
  Dialog,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import type { Row } from "../../types/Row";
import { useState } from "react";
import { Check } from "@mui/icons-material";
//פילטור יביא לי את כל השורות עם הערך המפולטר ויסמן איפה הוא בשורה
interface filterForm {
  table: Row[];
  setFilteredTable: (rows: number[]) => void;
  openFilter: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setTable: React.Dispatch<React.SetStateAction<Row[]>>;
}

function FilterForm({
  table,
  setFilteredTable,
  openFilter,
  setOpenFilter,
  setTable,
}: filterForm) {
  const [newNameFilter, setNewNameFilter] = useState("");
  const [newShiftFilter, setNewShiftFilter] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  function filterRows() {
    const shiftsToFilter = newShiftFilter
      .map((shift, index) => (shift ? index : null))
      .filter((s) => s !== null);
    if (shiftsToFilter.length !== 0) {
      const countNames = new Map<string, number>();
      for (let i = 0; i < table.length; i++) {
        for (
          let j = table[i].cells.length - 14;
          j < table[i].cells.length;
          j++
        ) {
          if (table[i].cells[j].name.includes(newNameFilter)) {
            countNames.set(
              table[i].cells[j].name,
              (countNames.get(table[i].cells[j].name) ?? 0) + 1,
            );
          }
        }
      }
      const update = table.map((row) => ({
        ...row,
        cells: row.cells.map((cell) =>
          shiftsToFilter.includes((countNames.get(cell.name) ?? 0) - 1)
            ? { ...cell, highlight: true }
            : { ...cell, highlight: false },
        ),
      }));
      setTable(update);
      setOpenFilter(false);
    } else if (newNameFilter !== "") {
      const update = table.map((row) => ({
        ...row,
        cells: row.cells.map((cell) =>
          cell.name.includes(newNameFilter)
            ? { ...cell, highlight: true }
            : { ...cell, highlight: false },
        ),
      }));
      setTable(update);
      setOpenFilter(false);
    } else {
      const update = table.map((row) => ({
        ...row,
        cells: row.cells.map((cell) => ({ ...cell, highlight: false })),
      }));
      setTable(update);
      setOpenFilter(false);
    }
  }
  return (
    <Dialog open={openFilter}>
      <Box
        sx={{
          padding: "3dvh",
          display: "grid",
          backgroundColor: "#1c67e3",
          border: "solid 5px #2b57d4",
        }}
      >
        <TextField
          onChange={(event) => setNewNameFilter(event.target.value)}
          label="filter by name"
          value={newNameFilter}
          fullWidth
          sx={{
            mb: "1dvh",
            borderRadius: 2,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2b57d4",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2b57d4",
            },

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2b57d4",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
          }}
          slotProps={{
            formHelperText: {
              sx: { "&.Mui-error": { color: "red" }, color: "white" },
            },
          }}
        ></TextField>
        <Typography sx={{ color: "white" }}>filter by shift</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          {newShiftFilter.map((shift, index) => (
            <Box>
              <Typography>{index + 1}</Typography>
              <Checkbox
                checked={newShiftFilter[index]}
                onChange={(event) =>
                  setNewShiftFilter(
                    newShiftFilter.map((s, i) => (i === index ? !s : s)),
                  )
                }
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              ></Checkbox>
            </Box>
          ))}
        </Box>
        <Button
          onClick={() => filterRows()}
          sx={{
            backgroundColor: "#2b57d4",
            padding: "1.5dvw 1dvw",
            borderRadius: "0.75dvh",
            width: "8dvw",
            mr: "2dvw",
            left: "10dvw",
          }}
        >
          <Typography
            sx={{
              fontSize: "clamp(0.6rem, 1dvw, 5rem)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "white",
            }}
          >
            Filter
          </Typography>
        </Button>
      </Box>
    </Dialog>
  );
}

export default FilterForm;
