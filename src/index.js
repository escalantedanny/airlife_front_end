import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/stilo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";

import ListAddressContext from './contexts/ListAddressContext';
import DireccionesContext from './contexts/DireccionesContext';
import ContactoContext from './contexts/ContactoContext';

import EditarCliente from './components/maintainer/EditarCliente';
import ListAddressComponent from './components/maintainer/List';

function App() {
  return (
    <div id="App">
      <ListAddressContext>
        <DireccionesContext>
          <ContactoContext>
              <BrowserRouter>
                <Switch>
                  <Route path="/" exact render={props => <Index {...props} />} />
                  <Route exact path="/listAddress" component={ListAddressComponent} />
                  <Route exact path="/clientes/editar/:id" component={EditarCliente}/>
                  <Redirect to="/" />
                </Switch>
              </BrowserRouter>
          </ContactoContext>
        </DireccionesContext>
      </ListAddressContext>
    </div>
  );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);