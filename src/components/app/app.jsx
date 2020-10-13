import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import OfferPage from "../offer-page/offer-page";
import Favorites from "../favorites/favorites";
import {offerType} from '../../types';

const App = (props) => {
  const {offersCount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            offersCount={offersCount}
            offers={offers}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <Route exact path="/offer/:id?">
          <OfferPage
            offer={offers[1]}
          />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerType).isRequired,
};

export default App;
