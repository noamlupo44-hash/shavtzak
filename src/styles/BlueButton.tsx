import { Link } from "react-router-dom";
import { Button, Typography, type CSSProperties } from "@mui/material";
interface blueButton {
  name: React.ReactNode;
  onClick?: () => void;
  to?: string;
  width?: CSSProperties["width"];
}
function BlueButton({ name, onClick, to, width = "6dvw" }: blueButton) {
  if (to) {
    return (
      <Button
        component={Link}
        to={to}
        sx={{
          backgroundColor: "#2b57d4",
          padding: "1.5dvw 1dvw",
          borderRadius: "0.75dvh",
          width,
          margin: "0 1dvw",
          height: "6dvh",
        }}
      >
        <Typography
          sx={{
            fontSize: "clamp(0.6rem, 0.6dvw, 5rem)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "white",
          }}
        >
          {name}
        </Typography>
      </Button>
    );
  } else {
    return (
      <Button
        onClick={onClick}
        sx={{
          backgroundColor: "#2b57d4",
          padding: "1.5dvw 1dvw",
          borderRadius: "0.75dvh",
          width,
          margin: "0 1dvw",
          height: "6dvh",
        }}
      >
        <Typography
          sx={{
            fontSize: "clamp(0.6rem, 0.6dvw, 5rem)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "white",
          }}
        >
          {name}
        </Typography>
      </Button>
    );
  }
}

export default BlueButton;
