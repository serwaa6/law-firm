import React from "react";
import AuthLayout from "./layout/Auth/AuthLayout";
import AdminLayout from "./layout/Admin/AuthLayout";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LawyerDashboard from './Lawyer/LawyerDashboard'

function App() {
  return (
    <Switch>
      <Route path={"/auth"} component={AuthLayout} />
      <Route path={"/admin"} component={AdminLayout} />
      <Route path={"/lawyers/lawyersdashboard"} component={LawyerDashboard} />
      <Redirect from={"/"} to={"auth"} />
    </Switch>
  );
}
export default App;
