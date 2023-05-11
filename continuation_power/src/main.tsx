import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TimerSetPage from "./pages/TimerSetPage";
import ExercisePage from "./components/HIIT/ExercisePage";
import RestPage from "./components/HIIT/RestPage";
import PreparationPage from "./components/HIIT/PreparationPage";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Switch>
        <Route exact path="/">
          <Firast />
        </Route>
      </Switch> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
