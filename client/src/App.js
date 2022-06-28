import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, AppBar } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
const PREFIX = "App";

const classes = {
  appBar: `${PREFIX}-appBar`,
  wrapper: `${PREFIX}-wrapper`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.appBar}`]: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },

  [`&.${classes.wrapper}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  return (
    <Root className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </Root>
  );
};

export default App;
