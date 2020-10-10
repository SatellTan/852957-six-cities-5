import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import OfferCard from "../offer-card/offer-card";
import Favorites from "../favorites/favorites";
import {OfferType} from "../../const.js";


const App = (props) => {
  const {offersCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offersCount={offersCount}/>
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <Route exact path="/offer/:id?" component={OfferCard}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
    })).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(Object.keys(OfferType)).isRequired,
    bedroomsNumber: PropTypes.number.isRequired,
    adultsMaxNumber: PropTypes.number.isRequired,
    rentPrice: PropTypes.number.isRequired,
    services: PropTypes.array.isRequired,
    owner: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    }).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      grade: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  })),
};

export default App;
