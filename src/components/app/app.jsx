import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import RentalOffer from "../rental-offer/rental-offer";
import Favorites from "../favorites/favorites";


const App = (props) => {
  const {rentalNumber} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main rentalNumber={rentalNumber}/>
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <Route exact path="/offer/:id?" component={RentalOffer}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentalNumber: PropTypes.number.isRequired,
};

export default App;
