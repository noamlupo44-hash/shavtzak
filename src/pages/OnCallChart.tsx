import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  colors,
  Table,
  TableHead,
  TableBody,
} from "@mui/material";
import { useState } from "react";
import OnCallTableHeader from "../components/onCallChart/OnCallTableHeader";
import OnCallersList from "../components/onCallChart/OnCallersList";
import type { onCaller } from "../types/OnCaller";
import useLocalStorage from "../hooks/useLocalStorage";
import CreateNewOnCaller from "./CreateNewOnCaller";
import EditOnCallers from "../components/onCallChart/EditOnCallers";
function OnCallChart() {
  const [onCallers, setOnCallers] = useLocalStorage<onCaller[]>(
    "onCallers",
    [],
  );
  const [openNewOnCaller, setOpenNewOnCaller] = useState(false);
  return (
    <Box>
      <Table>
        <TableHead>
          <OnCallTableHeader setOpenNewOnCaller={setOpenNewOnCaller} />
        </TableHead>
        <TableBody>
          <OnCallersList oncallers={onCallers} />
        </TableBody>
      </Table>
      <CreateNewOnCaller
        onCallers={onCallers}
        setOnCallers={setOnCallers}
        openNewOnCaller={openNewOnCaller}
        setOpenNewOnCaller={setOpenNewOnCaller}
      />
      <EditOnCallers setOnCallers={setOnCallers} onCallers={onCallers} />
    </Box>
  );
}

export default OnCallChart;
