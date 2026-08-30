import { TableRow, TableCell, Button, Typography } from "@mui/material";
import type { onCaller } from "../../types/OnCaller";
import { useState } from "react";
interface onCallTableHeader {
  setOpenNewOnCaller: React.Dispatch<React.SetStateAction<boolean>>;
}
function OnCallTableHeader({ setOpenNewOnCaller }: onCallTableHeader) {
  function getNextWeek() {
    const today = new Date();
    const nextSunday = new Date(today);
    let newWeek = [];
    nextSunday.setDate(today.getDate() + (7 - today.getDay()));
    for (let i = 0; i < 7; i++) {
      const date = new Date(nextSunday);
      date.setDate(nextSunday.getDate() + i);
      newWeek.push(date.toISOString().split("T")[0]);
    }
    return newWeek;
  }

  const nextWeek = getNextWeek();
  const weekDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return (
    <TableRow>
      <TableCell>
        <Button
          onClick={() => setOpenNewOnCaller(true)}
          sx={{
            backgroundColor: "#2b57d4",
            padding: "1.5dvw 1dvw",
            borderRadius: "0.75dvh",
            width: "8dvw",
            mr: "2dvw",
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
            Create
          </Typography>
        </Button>
      </TableCell>
      {nextWeek.map((day) => (
        <TableCell sx={{ color: "white" }}>
          {weekDays[nextWeek.indexOf(day)] + " " + day}
        </TableCell>
      ))}
    </TableRow>
  );
}

export default OnCallTableHeader;
