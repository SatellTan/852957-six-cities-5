import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {offerType} from '../../types';
import Main from "../main/main";
import AuthScreen from "../auth-screen/auth-screen";
import OfferPage from "../offer-page/offer-page";
import Favorites from "../favorites/favorites";
import {SortingTypes} from "../../const.js";
import withActiveOffer from "../../hocs/with-active-offer/with-active-offer";

const MainWrapped = withActiveOffer(Main);

const App = (props) => {
  const {city, offers, allOffers, onChangeCity, activeSortingType, onChangeSortingType} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainWrapped
            city={city}
            offers={offers}
            onChangeCity={onChangeCity}
            activeSortingType={activeSortingType}
            onChangeSortingType={onChangeSortingType}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            offers={allOffers}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <Route exact path={`/offer/:id?`} component={(currentProps) => <OfferPage allOffers={allOffers} {...currentProps}/>}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerType),
  allOffers: PropTypes.arrayOf(offerType).isRequired,
  onChangeCity: PropTypes.func.isRequired,
  activeSortingType: PropTypes.oneOf(Object.values(SortingTypes)).isRequired,
  onChangeSortingType: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offersInCity,
  allOffers: state.allOffers,
  activeSortingType: state.activeSortingType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
  onChangeSortingType: (sortingType) => {
    dispatch(ActionCreator.changeSortingType(sortingType));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
