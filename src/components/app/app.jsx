import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {offerType} from '../../types';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import OfferPage from "../offer-page/offer-page";
import Favorites from "../favorites/favorites";
import withActiveOffer from "../../hocs/with-active-offer/with-active-offer";

const MainWrapped = withActiveOffer(Main);

const App = (props) => {
  const {allOffers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainWrapped
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            offers={allOffers}
          />
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path={`/offer/:id?`} component={(currentProps) => <OfferPage allOffers={allOffers} {...currentProps}/>}/>
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
