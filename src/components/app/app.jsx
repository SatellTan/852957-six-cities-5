import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import OfferPage from "../../hocs/with-offer-page/with-offer-page";
import Favorites from "../../hocs/with-favorites/with-favorites";
import NotFoundPage from '../not-found-page/not-found-page';

import browserHistory from "../../browser-history";
import {loadingStatusType} from '../../types';
import withActiveOffer from "../../hocs/with-active-offer/with-active-offer";
import {getIsAuth, getAllOffersLoadingStatus} from "../../store/selectors/selectors";
import {AppRoute, LoadingStatusForRequests} from "../../const";
import {withPrivateRoute} from "../../hocs/with-private-route/with-private-route";
import {Preloader} from "../preloader/preloader";

const App = ({allOffersLoadingStatus, isAuth}) => {

  const MainWrapped = withActiveOffer(Main);
  const FavoritesPrivateWrapped = withPrivateRoute(Favorites, isAuth, true, AppRoute.LOGIN);
  const SignInPrivateWrapped = withPrivateRoute(SignIn, isAuth, false);

  if (allOffersLoadingStatus === LoadingStatusForRequests.LOADING) {
    return (
      <Preloader/>
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.MAIN}
          component={MainWrapped}>
        </Route>

        <Route
          exact
          path={AppRoute.FAVORITES}
          component={FavoritesPrivateWrapped}>
        </Route>

        <Route
          exact
          path={AppRoute.LOGIN}
          component={SignInPrivateWrapped}>
        </Route>

        <Route
          exact
          path={AppRoute.OFFER}
          component={(currentProps) => <OfferPage {...currentProps}/>}>
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  allOffersLoadingStatus: loadingStatusType.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  allOffersLoadingStatus: getAllOffersLoadingStatus(state),
  isAuth: getIsAuth(state),
});

export {App};
export default connect(mapStateToProps)(App);
