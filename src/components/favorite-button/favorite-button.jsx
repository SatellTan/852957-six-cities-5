import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {FavoriteButtonType} from "../../const.js";
import {postFavorite} from "../../store/api-actions";

const FavoriteButton = ({offerId, classPrefix, isFavorite, buttonType, setFavoriteStatusToOffer}) => {
  let favoriteMark = isFavorite;

  return (
    <button
      onClick={() => {
        setFavoriteStatusToOffer(offerId, favoriteMark ? 0 : 1);
      }}
      className={`${classPrefix}__bookmark-button button ${favoriteMark ? classPrefix + `__bookmark-button--active` : ``}`}
      type="button"
    >
      <svg
        className={`place-card__bookmark-icon property__bookmark-icon`}
        width={`${buttonType === FavoriteButtonType.BASE ? `18` : `31`}`}
        height={`${buttonType === FavoriteButtonType.BASE ? `19` : `33`}`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteMark ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  offerId: PropTypes.number.isRequired,
  classPrefix: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  buttonType: PropTypes.oneOf(Object.values(FavoriteButtonType)),
  setFavoriteStatusToOffer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setFavoriteStatusToOffer(id, status) {
    dispatch(postFavorite(id, status));
  }
});

export {FavoriteButton};
export default connect(null, mapDispatchToProps)(FavoriteButton);
