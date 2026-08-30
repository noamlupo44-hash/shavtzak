import { Button, Dialog, TextField, Box, Typography } from "@mui/material";
import { useTableStore } from "../store/TableStore";
import { Input, Label } from "@mui/icons-material";
import { useState } from "react";
import BlueButton from "../styles/BlueButton";

function CreateNewTable() {
  const openCreateTable = useTableStore((state) => state.openCreateTable);
  const setOpenCreateTable = useTableStore((state) => state.setOpenCreateTable);
  const addTable = useTableStore((state) => state.addTable);
  const [newName, setNewName] = useState("");

  function saveNewTable() {
    if (newName !== "") {
      addTable("table=" + newName);
      setOpenCreateTable(false);
      setNewName("");
    }
  }

  return (
    <Dialog open={openCreateTable} onClose={() => setOpenCreateTable(false)}>
      <Box
        sx={{
          padding: "3dvh",
          display: "grid",
          backgroundColor: "#1c67e3",
          border: "solid 5px #2b57d4",
        }}
      >
        <TextField
          onChange={(event) => setNewName(event.target.value)}
          label="enter new Table name"
          value={newName}
          error={newName.length === 0}
          helperText={newName.length === 0 ? "must write something" : ""}
          fullWidth
          sx={{
            mb: "10dvh",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            padding: 0,
            margin: 0,
          }}
        >
          <BlueButton name={"create"} onClick={() => saveNewTable()} />
        </Box>
      </Box>
    </Dialog>
  );
}

export default CreateNewTable;
