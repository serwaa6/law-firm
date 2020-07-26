import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../../routes";

export default function AuthLayout() {
  const getRoutes = (routes) => {
    return routes.map((route, key) => {
      if (route.layout === "/auth") {
        return (
          <Route
            key={key}
            path={`/auth/${route.path}`}
            component={route.component}
          />
        );
      }
      return null;
    });
  };

  return (
    <Switch>
      {getRoutes(routes)}
      <Redirect from={"/auth"} to={"/auth/login"} />
    </Switch>
  );
}
