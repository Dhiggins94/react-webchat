import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, Typography, Paper } from "@mui/material";
import { SocketContext } from "../SocketContext";
import { useContext } from "react";
const PREFIX = 'VideoPlayer';

const classes = {
  video: `${PREFIX}-video`,
  gridContainer: `${PREFIX}-gridContainer`,
  paper: `${PREFIX}-paper`
};

const StyledGrid = styled(Grid)((
  {
    theme
  }
) => ({
  [`& .${classes.video}`]: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },

  [`&.${classes.gridContainer}`]: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  [`& .${classes.paper}`]: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  }
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);


  return (
    <StyledGrid container className={classes.gridContainer}>
      {/* {our own stream} */}
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
      {/* the users screen */}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </StyledGrid>
  );
};

export default VideoPlayer;
