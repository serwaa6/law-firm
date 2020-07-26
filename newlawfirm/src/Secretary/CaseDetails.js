import React, { useState } from "react";
import Header from "../Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CaseDetailsForms from "../Components/CaseDetailsForms";
import Footer from "../Components/Footer";
import { toaster } from "evergreen-ui";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: "#000",
    color: "#fff",
  },
}));

export default function CaseDetails() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [category, setCategory] = useState("");
  const [opponent, setOpponent] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  function handleSubmit() {}
  {
    if (
      !firstName ||
      !lastName ||
      !category ||
      !opponent ||
      !city ||
      !country ||
      !region
    ) {
      toaster.warning("Fill all fields");
    } else {
      toaster.success("loading");
    }
  }

  return (
    <React.Fragment>
      <Header />
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            style={{ fontWeight: "bold" }}
            variant="h4"
            align="center"
          >
            CASE DETAILS
          </Typography>
          <React.Fragment>
            <CaseDetailsForms
              setFirstName={setFirstName}
              setLastName={setLastName}
              setCategory={setCategory}
              setOpponent={setOpponent}
              setCity={setCity}
              setCountry={setCountry}
              setRegion={setRegion}
            />
            <React.Fragment>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
        <Footer />
      </main>
    </React.Fragment>
  );
}
