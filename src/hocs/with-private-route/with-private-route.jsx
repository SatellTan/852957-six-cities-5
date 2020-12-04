import React from "react";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../const";

export const withPrivateRoute = (Component, authorizationStatus, isAuthForRender = true, URL = AppRoute.MAIN) => (props) => {

  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  if ((isAuthForRender && isAuth) || (!isAuthForRender && !isAuth)) {

    return <Component {...props}/>;
  }

  return <Redirect to={URL}/>;
};
