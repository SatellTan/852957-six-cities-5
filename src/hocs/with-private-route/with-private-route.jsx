import React from "react";
import {Redirect} from "react-router-dom";
import {AppRoute} from "../../const";

export const withPrivateRoute = (Component, isAuth, isAuthForRender = true, URL = AppRoute.MAIN) => (props) => {

  if ((isAuthForRender && isAuth) || (!isAuthForRender && !isAuth)) {

    return <Component {...props}/>;
  }

  return <Redirect to={URL}/>;
};
