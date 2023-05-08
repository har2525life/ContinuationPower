import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Firast from "./pages/Firast";
import Secdond from "./pages/Secdond";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Firast />
        </Route>
        <Route exact path="/second">
          <Secdond />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
