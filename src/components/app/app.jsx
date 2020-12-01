import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {offerType} from '../../types';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import OfferPage from "../offer-page/offer-page";
import Favorites from "../favorites/favorites";
import withActiveOffer from "../../hocs/with-active-offer/with-active-offer";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";

const MainWrapped = withActiveOffer(Main);

const App = (props) => {
  const {allOffers} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainWrapped
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <Favorites
                offers={allOffers}
              />
            );
          }}
        />
        <Route exact path={AppRoute.LOGIN}>
          <SignIn/>
        </Route>
        <Route exact path={AppRoute.OFFER} component={(currentProps) => <OfferPage allOffers={allOffers} {...currentProps}/>}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  allOffers: PropTypes.arrayOf(offerType).isRequired,
};

const mapStateToProps = ({DATA}) => ({
  allOffers: DATA.allOffers,
});

export {App};
export default connect(mapStateToProps)(App);
