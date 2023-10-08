import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/old/Contact";
import Research from "./components/old/Research";
import projectPages from "./components/projects";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/research" component={Research} />
      {Object.entries(projectPages).map(([name, project]) => (
        <Route
          exact
          path={`/projects/${name}`}
          key={name}
          component={project.Component}
        />
      ))}
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
