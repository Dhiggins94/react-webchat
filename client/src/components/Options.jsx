import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";
import { useContext, useState } from "react";
const PREFIX = "Options";

const classes = {
  root: `${PREFIX}-root`,
  gridContainer: `${PREFIX}-gridContainer`,
  container: `${PREFIX}-container`,
  margin: `${PREFIX}-margin`,
  padding: `${PREFIX}-padding`,
  paper: `${PREFIX}-paper`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
  },

  [`& .${classes.gridContainer}`]: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  [`&.${classes.container}`]: {
    width: "600px",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },

  [`& .${classes.margin}`]: {
    marginTop: 20,
  },

  [`& .${classes.padding}`]: {
    padding: 20,
  },

  [`& .${classes.paper}`]: {
    padding: "10px 20px",
    border: "2px solid black",
  },
}));

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <StyledContainer className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                {" "}
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me} className={classes.margin}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assignment fontSize="large" />}
                >
                  Copy YOUR ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                {" "}
                MAKE A CALL{" "}
              </Typography>
              <TextField
                label="ID to Call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PhoneDisabled fontSize="large" />}
                  fullWidth
                  onClick={leaveCall}
                  className={classes.margin}
                >
                
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Phone fontSize="large" />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                  className={classes.margin}
                >
               
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
      Options {children}
    </StyledContainer>
  );
};

export default Options;
