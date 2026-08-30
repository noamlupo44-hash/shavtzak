import { Link } from "react-router-dom";
import "../../styles/NvgBar.css";
import { use, useState, useMemo } from "react";
import { useTableStore } from "../../store/TableStore";
import CreateNewTable from "../../pages/CreateNewTable";
import { Button, Typography, Box } from "@mui/material";
import BlueButton from "../../styles/BlueButton";
import LogIn from "../../pages/LogIn";
import SignUp from "../../pages/SignUp";
import type { user } from "../../types/User";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useUserStore } from "../../store/userStore";
function NvgBar() {
  const setOpenCreateTable = useTableStore((state) => state.setOpenCreateTable);
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const activeUser = useUserStore((state) => state.activeUser);
  const signOut = useUserStore((state) => state.signOut);
  return (
    <div className="homeRowOutside">
      <div>
        <nav>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              border: "solid 5px #2b57d4",
              width: "90dvw",
              height: "8dvh",
              padding: "0 1dvw",
              borderRadius: "20px",
              backgroundColor: "#1c67e3",
              mt: "2dvh",
            }}
          >
            {!activeUser ? (
              <Box
                sx={{
                  position: "absolute",
                  left: "1dvw",
                }}
              >
                <BlueButton name="log in" onClick={() => setOpenLogIn(true)} />
                <BlueButton
                  name="sign up"
                  onClick={() => setOpenSignUp(true)}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  position: "absolute",
                  left: "1dvw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "clamp(0.6rem, 2dvw, 5rem)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color: "white",
                  }}
                >
                  hello {activeUser.userName}
                </Typography>
                <BlueButton name={"log out"} onClick={() => signOut()} />
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1dvw",
              }}
            >
              <BlueButton name="home" to="/" />

              <BlueButton
                name="new Table"
                onClick={() =>
                  activeUser?.role === "admin" ? setOpenCreateTable(true) : null
                }
              />

              <BlueButton name="onCall" to="onCall" />
            </Box>
          </Box>
        </nav>
      </div>
      <CreateNewTable />
      <LogIn openLogIn={openLogIn} setOpenLogIn={setOpenLogIn} />
      <SignUp openSignUp={openSignUp} setOpenSignUp={setOpenSignUp} />
    </div>
  );
}
export default NvgBar;
