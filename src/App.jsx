import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AppBar from "./components/AppBar/AppBar";

import Spinner from "./components/Loader/Loader";
import routes from "./routes";

import "./App.css";
const HomePage = lazy(() =>
  import("./views/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.moviesPage} component={MoviesPage} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
        <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  </>
);

export default App;
