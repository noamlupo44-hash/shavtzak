import { Button, Dialog, TextField, Box, Typography } from "@mui/material";
import { useTableStore } from "../store/TableStore";
import { Input, Label } from "@mui/icons-material";
import { useState } from "react";
import BlueButton from "../styles/BlueButton";
import type { user } from "../types/User";

interface logIn {
  openLogIn: boolean;
  setOpenLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}
function LogIn({ openLogIn, setOpenLogIn }: logIn) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function saveUser() {
    const update = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser: user = {
      userName: userName,
      password: password,
      role: password === "admin" ? "admin" : "member",
    };
    update.push(newUser);
    localStorage.setItem("users", JSON.stringify(update));
    setPassword("");
    setUserName("");
    setOpenLogIn(false);
  }

  return (
    <Dialog open={openLogIn} onClose={() => setOpenLogIn(false)}>
      <Box
        sx={{
          padding: "3dvh",
          display: "grid",
          backgroundColor: "#1c67e3",
          border: "solid 5px #2b57d4",
        }}
      >
        <TextField
          onChange={(event) => setUserName(event.target.value)}
          label="enter user name"
          value={userName}
          error={userName.length === 0}
          helperText={userName.length === 0 ? "must write something" : ""}
          fullWidth
          sx={{
            mb: "2dvh",
            borderRadius: 2,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2b57d4",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2b57d4",
            },

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2b57d4",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
          }}
          slotProps={{
            formHelperText: {
              sx: { "&.Mui-error": { color: "red" }, color: "white" },
            },
          }}
        ></TextField>
        <TextField
          onChange={(event) => setPassword(event.target.value)}
          label="enter password"
          value={password}
          error={password.length === 0}
          helperText={password.length === 0 ? "must write something" : ""}
          fullWidth
          sx={{
            mb: "10dvh",
            borderRadius: 2,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2b57d4",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2b57d4",
            },

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2b57d4",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
          }}
          slotProps={{
            formHelperText: {
              sx: { "&.Mui-error": { color: "red" }, color: "white" },
            },
          }}
        ></TextField>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            padding: 0,
            margin: 0,
          }}
        >
          <BlueButton name={"log in"} onClick={() => saveUser()} />
        </Box>
      </Box>
    </Dialog>
  );
}

export default LogIn;
