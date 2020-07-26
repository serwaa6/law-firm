import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../../routes";

const getRoutes = (routes) => {
  return routes.map((route, key) => {
    if (route.layout === "/admin") {
      return (
        <Route
          key={key}
          path={`/admin/${route.path}`}
          component={route.component}
        />
      );
    }
    return null;
  });
};

export default function AdminLayout() {
  return (
    <Switch>
      {getRoutes(routes)}
      <Redirect from={"/admin"} to={"/admin/dashboard"} />
    </Switch>
  );
}
