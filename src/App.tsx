import React, { ReactElement } from "react";
// Import Css
import "./assets/css/materialdesignicons.min.css";
import "./Apps.scss";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import routes from "./routes/allRoutes";

interface RouteProps {
  path: string;
  component: React.ComponentType<any>;
}

function withLayout<T extends RouteProps>(
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
        {routes.map((route: RouteProps, idx: number) => (
          <Route
            path={route.path}
            exact
            component={withLayout(route.component)}
            key={idx}
          />
        ))}
      </Router>
    </React.Fragment>
  );
}

export default App;
