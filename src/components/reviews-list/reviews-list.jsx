import React from "react";
import Review from "../review/review";
import {offerType} from '../../types';
import {MAX_REVIEWS_IN_BLOCK} from "../../const.js";

const ReviewsList = (props) => {
  const {offer} = props;

  let {
    id,
    reviews,
  } = offer;
  reviews = reviews.slice(0, MAX_REVIEWS_IN_BLOCK);

  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => (
        <Review key={`${id}-${i}`}
          review={review}
        />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  offer: offerType.isRequired
};

export default ReviewsList;
