import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { toaster } from "evergreen-ui";
import { useHistory } from "react-router-dom";
import clients from "../Storage/clients";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
    backgroundColor: "#000",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: "#fff",
    hover: {
      color: "#000",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [name, setName] = React.useState("");

  const { push } = useHistory();

  const handleChecks = () => {
    !name ? toaster.warning("Enter a valid email") : console.log(name);

    const Clients = clients;
    let pass;

    for (let i = 0; i < Clients.length; i++) {
      if (name === Clients[i].name) {
        pass = true;
        pass
          ? toaster.danger("Can't take this case")
          : console.log("loading .....");
      }
      if (pass) {
        break;
      }
    }
    if (!pass) {
      toaster.success("It's a go");
      push("/admin/casedetails");
    }

    console.log(pass);
  };

  return (
    <React.Fragment>
      <Header />
      <div>
        <main>
          <form className={classes.root}>
            <div className={classes.margin}>
              <Grid
                container
                spacing={1}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  height: "80vh",
                  justifyContent: "center",
                }}
              >
                <Grid item>
                  <SearchIcon />
                </Grid>
                <Grid item style={{ width: "80%" }}>
                  <TextField
                    id="input-with-icon-grid"
                    onChange={(e) => setName(e.target.value)}
                    label="Prosecutor's Name"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    // color="primary"
                    onClick={handleChecks}
                    className={classes.button}
                    startIcon={<SearchIcon />}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </div>
          </form>
          <Footer />
        </main>
      </div>
    </React.Fragment>
  );
}
