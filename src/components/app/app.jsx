import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {offerType, loadingStatusType} from '../../types';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import OfferPage from "../offer-page/offer-page";
import Favorites from "../favorites/favorites";
import withActiveOffer from "../../hocs/with-active-offer/with-active-offer";
import browserHistory from "../../browser-history";
import {getAllOffers, getAuthorizationStatus} from "../../store/selectors/selectors";
import {AppRoute, AuthorizationStatus, LoadingStatusForRequests} from "../../const";
import {withPrivateRoute} from "../../hocs/with-private-route/with-private-route";
import {Preloader} from "../preloader/preloader";

const App = ({allOffers, allOffersLoadingStatus, authorizationStatus}) => {

  const MainWrapped = withActiveOffer(Main);
  const FavoritesPrivateWrapped = withPrivateRoute(Favorites, authorizationStatus, true, AppRoute.LOGIN);
  const SignInPrivateWrapped = withPrivateRoute(SignIn, authorizationStatus, false);

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
        <Route exact path={AppRoute.OFFER} component={(currentProps) => <OfferPage allOffers={allOffers} {...currentProps}/>}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  allOffers: PropTypes.arrayOf(offerType).isRequired,
  allOffersLoadingStatus: loadingStatusType.isRequired,
  authorizationStatus: PropTypes.oneOf(Object.keys(AuthorizationStatus)).isRequired,
};

const mapStateToProps = (state) => ({
  allOffers: getAllOffers(state),
  allOffersLoadingStatus: state.DATA.allOffers.status,
  authorizationStatus: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
