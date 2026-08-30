import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import DeleteTableButton from "../components/homepage/DeleteTableButton";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTableStore } from "../store/TableStore";

function HomePage() {
  const tables = useTableStore((state) => state.tables);

  return (
    <div className="pickTable">
      <div className="TableLinksWrapper">
        {tables
          .filter((table) => table.slice(0, 5) === "table")
          .map((t) => (
            <Box
              sx={{
                width: "17dvw",
                height: "17dvw",
                border: "solid 5px #2b57d4",
                backgroundColor: "#1c67e3",
                borderRadius: "3dvw",
                margin: "2dvw",
                overflowWrap: "break-word",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",

                "& .deleteTableButton": {
                  display: "none",
                  position: "absolute",
                  bottom: "-1.5dvw",
                },
                "&:hover .deleteTableButton": {
                  display: "block",
                },
              }}
              key={t}
            >
              <Button
                component={Link}
                to={"/table/" + t}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "clamp(1rem, 3vw, 3rem)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color: "white",
                  }}
                >
                  {t.slice(6)}
                </Typography>
              </Button>
              <DeleteTableButton tableName={t} />
            </Box>
          ))}
      </div>
    </div>
  );
}
export default HomePage;
