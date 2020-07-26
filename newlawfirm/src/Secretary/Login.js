import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { toaster } from "evergreen-ui";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import data from "../Storage/data";
import lawyers from "../Storage/lawyers";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        lawfirm
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/what.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[800],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#000",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const { push } = useHistory();

  const handleSubmit = () => {
    !email ? toaster.warning("Enter a valid email") : console.log(email);
    !password
      ? toaster.warning("Enter a your password")
      : console.log(password);
    const secs = data;
    let pass;
    for (let i = 0; i < secs.length; i++) {
      if (email === secs[i].email && password === secs[i].password) {
        push("/admin");
        pass = true;
        pass
          ? toaster.success("Welcome to Lawfirm")
          : console.log("loadong .....");
      }else if(email === lawyers[i].email && password === lawyers[i].password) {
        push("/lawyers/lawyersdashboard");
        pass = true;
        
        pass
          ? toaster.success("Welcome to Lawfirm")
          : console.log("loading .....");
      }
      if (pass) {
        break;
      }
    }
    if (!pass) {
      toaster.danger("Enter the right credentials");
    }

    console.log(pass);
  };

  const handleForgot = (e) => {
    e.preventDefault();
    toaster.warning("Contact your Administrator for a password reset");
  };

  const classes = useStyles();

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <div
        item
        xs={false}
        sm={4}
        md={7}
        style={{
          width: "58.5vw",
          height: "100%",
          display: windowDimensions.width < 960 ? "none" : "flex",
          position: "absolute",
          backgroundColor: "#0008",
        }}
      >
        {" "}
      </div>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submit}
              style={{ backgroundColor: "#000" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <button
                  onClick={(e) => handleForgot(e)}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "#000",
                  }}
                >
                  Forgot password?
                </button>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
