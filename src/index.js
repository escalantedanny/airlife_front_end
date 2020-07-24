import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/stilo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";

import DireccionesContext from './contexts/DireccionesContext';

function App() {
  return (
    <div id="App">
      <DireccionesContext>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={props => <Index {...props} />} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </DireccionesContext>
    </div>
  );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);