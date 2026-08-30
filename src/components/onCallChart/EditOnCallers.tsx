import { List, ListItem, Typography, Box, Input } from "@mui/material";
import type { onCaller } from "../../types/OnCaller";
import { useState } from "react";

interface editOnCallers {
  setOnCallers: React.Dispatch<React.SetStateAction<onCaller[]>>;
  onCallers: onCaller[];
}

function EditOnCallers({ setOnCallers, onCallers }: editOnCallers) {
  function saveChange(input: string, name: string) {
    const update = onCallers.map((onCaller) =>
      onCaller.name === name
        ? { ...onCaller, points: Number(input) }
        : { ...onCaller },
    );
    setOnCallers(update);
  }

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <List>
        {onCallers.map((onCaller) => (
          <ListItem>
            <Typography sx={{ color: "white", mr: "1dvw" }}>
              {onCaller.name}:{" "}
            </Typography>
            <Input
              value={onCaller.points}
              onChange={(e) => saveChange(e.target.value, onCaller.name)}
              sx={{ color: "white", width: "2dvw" }}
            ></Input>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default EditOnCallers;
