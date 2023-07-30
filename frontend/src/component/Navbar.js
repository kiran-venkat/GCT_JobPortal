import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  navButton: {
    marginLeft: theme.spacing(2),
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#ffffff", // Change the button background color on hover
      color: "#2196f3", // Change the button text color on hover
    },
  },
  appBar: {
    backgroundColor: "grey",
    height: "100px",
    padding: theme.spacing(2),
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    history.push(location);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Start Up Community Job Portal
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button
                color="white"
                variant="outlined"
                className={classes.navButton}
                onClick={() => handleClick("/home")}
              >
                Home
              </Button>
              <Button
                color="white"
                variant="outlined"
                className={classes.navButton}
                onClick={() => handleClick("/addjob")}
              >
                Add Jobs
              </Button>
              <Button
                color="white"
                variant="outlined"
                className={classes.navButton}
                onClick={() => handleClick("/myjobs")}
              >
                My Jobs
              </Button>
              <Button
                color="white"
                variant="outlined"
                className={classes.navButton}
                onClick={() => handleClick("/employees")}
              >
                Employees
              </Button>
              <Button
                color="white"
                variant="outlined"
                className={classes.navButton}
                onClick={() => handleClick("/profile")}
              >
                Profile
              </Button>
              <Button
                color="white"
                variant="outlined"
                className={classes.navButton}
                onClick={() => handleClick("/logout")}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                color="white"
                variant="outlined"
                className={classes.navButton}
                onClick={() => handleClick("/home")}
              >
                Home
              </Button>
              <Button
                color="white"
                variant="outlined"
                className={classes.navButton}
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button
                color="white"
                variant="outlined"
                className={classes.navButton}
                onClick={() => handleClick("/profile")}
              >
                Profile
              </Button>
              <Button
                color="white"
                variant="outlined"
                className={classes.navButton}
                onClick={() => handleClick("/logout")}
              >
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button
              color="white"
              variant="outlined"
              className={classes.navButton}
              onClick={() => handleClick("/login")}
            >
              Login
            </Button>
            <Button
              color="white"
              variant="outlined"
              className={classes.navButton}
              onClick={() => handleClick("/signup")}
            >
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
