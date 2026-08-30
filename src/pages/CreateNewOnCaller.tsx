import {
  Button,
  Dialog,
  TextField,
  Box,
  Typography,
  Checkbox,
} from "@mui/material";
import { useTableStore } from "../store/TableStore";
import { Input, Label } from "@mui/icons-material";
import { useState } from "react";
import type { onCaller } from "../types/OnCaller";
import BlueButton from "../styles/BlueButton";

interface createNewOnCaller {
  onCallers: onCaller[];
  setOnCallers: React.Dispatch<React.SetStateAction<onCaller[]>>;
  openNewOnCaller: boolean;
  setOpenNewOnCaller: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateNewOnCaller({
  onCallers,
  setOnCallers,
  openNewOnCaller,
  setOpenNewOnCaller,
}: createNewOnCaller) {
  const [newOnCaller, setNewOnCaller] = useState("");
  const [points, setPoints] = useState(0);
  const [far, setFar] = useState(false);
  console.log(onCallers);
  function saveNewOnCaller() {
    if (newOnCaller !== "") {
      const newOnCallerObj: onCaller = {
        name: newOnCaller,
        points: points ? points : 0,
        far: far,
      };
      setOnCallers([...onCallers, newOnCallerObj]);
      setOpenNewOnCaller(false);
      setNewOnCaller("");
      setPoints(0);
      setFar(false);
    }
  }

  return (
    <Dialog open={openNewOnCaller} onClose={() => setOpenNewOnCaller(false)}>
      <Box
        sx={{
          padding: "3dvh",
          display: "grid",
          backgroundColor: "#1c67e3",
          border: "solid 5px #2b57d4",
        }}
      >
        <TextField
          onChange={(event) => setNewOnCaller(event.target.value)}
          label="enter oncaller name"
          value={newOnCaller}
          error={newOnCaller.length === 0}
          helperText={newOnCaller.length === 0 ? "must write something" : ""}
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
        <TextField
          onChange={(event) => setPoints(Number(event.target.value))}
          label="enter oncaller points"
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <Typography sx={{ color: "white" }}>far?</Typography>
          <Checkbox
            checked={far}
            onChange={(e) => setFar(e.target.checked)}
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            padding: 0,
            margin: 0,
          }}
        >
          <BlueButton name={"create"} onClick={() => saveNewOnCaller()} />
        </Box>
      </Box>
    </Dialog>
  );
}

export default CreateNewOnCaller;
