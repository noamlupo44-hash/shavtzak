import "../../styles/deleteTableButton.css";
import { Box, Button } from "@mui/material";
import { useTableStore } from "../../store/TableStore";
interface deleteTableButton {
  tableName: string;
}
function DeleteTableButton({ tableName }: deleteTableButton) {
  const deleteTable = useTableStore((state) => state.removeTable);
  return (
    <Box className="deleteTableButton">
      <Button
        onClick={() => deleteTable(tableName)}
        sx={{
          backgroundColor: "red",
          width: "17dvw",
          height: "3dvw",
          color: "white",
        }}
        fullWidth
      >
        delete
      </Button>
    </Box>
  );
}

export default DeleteTableButton;
