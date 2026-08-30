import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ShowTable from "../components/jobTable/ShowTable";

function TablesPage() {
  const { tableName } = useParams();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ color: "white", textAlign: "center" }} variant="h3">
        {tableName?.slice(6)}
      </Typography>
      <ShowTable />
    </Box>
  );
}

export default TablesPage;
