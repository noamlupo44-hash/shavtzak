import { Button, Dialog, TextField, Box, Typography } from "@mui/material";
import { useTableStore } from "../store/TableStore";
import { Input, Label } from "@mui/icons-material";
import { useState } from "react";
import BlueButton from "../styles/BlueButton";
import type { user } from "../types/User";
import { useUserStore } from "../store/userStore";

interface signUp {
  openSignUp: boolean;
  setOpenSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}
function SignUp({ openSignUp, setOpenSignUp }: signUp) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const setActiveUser = useUserStore((state) => state.setActiveUser);

  function saveActiveUser() {
    const users: user[] = JSON.parse(localStorage.getItem("users") || "[]");
    const activeUser = users.find(
      (user) => user.userName === userName && user.password === password,
    );
    if (activeUser) {
      console.log(activeUser);
      setActiveUser(activeUser);
      setPassword("");
      setUserName("");
      setErrorMsg("");
      setOpenSignUp(false);
    } else {
      setErrorMsg("havent found user matching name and password");
    }
  }

  return (
    <Dialog open={openSignUp} onClose={() => setOpenSignUp(false)}>
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
          error={errorMsg !== ""}
          helperText={errorMsg}
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
          error={errorMsg !== ""}
          helperText={errorMsg}
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
          <BlueButton name={"sign up"} onClick={() => saveActiveUser()} />
        </Box>
      </Box>
    </Dialog>
  );
}

export default SignUp;
