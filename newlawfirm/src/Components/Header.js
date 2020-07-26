import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <ImportContactsOutlinedIcon />
            LAWFIRM
          </Typography>
        </Toolbar>
        <div
          style={{
            width: "100%",
            display: "flex",
            paddingRight: 20,
            flexDirection: "row-reverse",
          }}
        >
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
      </AppBar>
    </React.Fragment>
  );
}
