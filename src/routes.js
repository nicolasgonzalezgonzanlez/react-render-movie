import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './containers/home/Home';
import Id from './containers/id/Id';
import Movie from './containers/movie/Movie';
//controlador de route del proyecto
const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/post/:key">
        <Id />
      </Route>
      <Route exact path="/genero/:key">
        <Movie />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  )
};

export default Router;
