import {
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "../../styles/HeadRow.css";
import weekAhead from "../../utils/weekAhead";
import React from "react";
import BlueButton from "../../styles/BlueButton";

interface headRow {
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

function HeadRow({ setOpenFilter }: headRow) {
  const days = weekAhead();
  const weekDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const newDays: Date[] | null = days.map((day) => new Date(day));
  return (
    <TableHead>
      <TableRow>
        <TableCell
          colSpan={2}
          sx={{
            margin: 0,
            padding: 0,
          }}
        >
          <BlueButton
            name={"filter"}
            onClick={() => setOpenFilter(true)}
            width={"stretch"}
          />
        </TableCell>
        {days.map((day, index) => (
          <TableCell
            colSpan={2}
            key={day}
            sx={{
              color: "white",
              textAlign: "center",
              borderLeft: "solid 4px #2b57d4",
              borderRight: "solid 4px #2b57d4",
            }}
          >
            {weekDays[newDays[index].getDay()]}
            {" " + day.slice(8, 10) + "/" + day.slice(5, 7)}
          </TableCell>
        ))}
      </TableRow>
      <TableRow className="daysRow">
        <th></th>
        <th>role</th>

        {days.map((day) => (
          <React.Fragment key={day + "shifts"}>
            <TableCell
              sx={{
                color: "white",
                textAlign: "center",
                padding: 0,
                fontSize: "15px",
                margin: 0,
              }}
            >
              morning
            </TableCell>
            <TableCell
              sx={{
                color: "white",
                borderRight: "solid 4px #2b57d4",
                textAlign: "center",
                padding: 0,
                fontSize: "15px",
              }}
            >
              night
            </TableCell>
          </React.Fragment>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default HeadRow;
