import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import OfferPage from '../../components/offer-page/offer-page';
import {fetchOfferById, fetchReviews, fetchNearOffers} from "../../store/api-actions";

const WithOfferPage = (props) => {
  const {match} = props;

  const id = match.params.id;
  const dispatch = useDispatch();

  dispatch(fetchOfferById(id));
  dispatch(fetchReviews(id));
  dispatch(fetchNearOffers(id));

  return <OfferPage {...props} />;
};

WithOfferPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default WithOfferPage;
