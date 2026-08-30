import { TableRow, TableCell, Typography } from "@mui/material";
import type { onCaller } from "../../types/OnCaller";
import CalculateOnCallers from "./CalculateOnCallers";
import { useEffect, useMemo } from "react";

interface onCallersList {
  oncallers: onCaller[];
}

function OnCallersList({ oncallers }: onCallersList) {
  const nextWeekOnCallers = useMemo(() => {
    return CalculateOnCallers({ onCallers: oncallers });
  }, []);
  return (
    <TableRow>
      <TableCell>""</TableCell>
      {nextWeekOnCallers?.map((oncaller) => (
        <TableCell>
          <Typography sx={{ color: "white" }}>{oncaller?.name}</Typography>
        </TableCell>
      ))}
    </TableRow>
  );
}

export default OnCallersList;
