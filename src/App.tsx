import React, { ReactElement } from "react";
// Import Css
import "./assets/css/materialdesignicons.min.css";
import "./Apps.scss";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import routes from "./routes/allRoutes";
import { IRouteProps } from "./interfaces/Route";

function withLayout<T extends IRouteProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: T): ReactElement => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
}

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {routes.map((route: IRouteProps, idx: number) => (
            <Route
              path={route.path}
              exact
              component={withLayout(route.component)}
              key={idx}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default withRouter(App);
