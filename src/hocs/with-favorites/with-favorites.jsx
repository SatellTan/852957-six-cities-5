import React from 'react';
import {useDispatch} from 'react-redux';
import Favorites from '../../components/favorites/favorites';
import {fetchFavoritesList} from "../../store/api-actions";

const WithFavorites = () => {
  const dispatch = useDispatch();

  dispatch(fetchFavoritesList());

  return <Favorites />;
};

export default WithFavorites;
