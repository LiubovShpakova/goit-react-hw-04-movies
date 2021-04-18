import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import routes from "./routes";

import "./App.css";
const HomePage = lazy(() =>
  import("./views/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.moviesPage} component={MoviesPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
