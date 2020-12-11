import React from "react";
import Review from "../review/review";
import PropTypes from "prop-types";

import {reviewType} from '../../types';
import {MAX_REVIEWS_IN_BLOCK} from "../../const.js";


const ReviewsList = ({reviewsList}) => {
  let reviews = reviewsList.slice(0, Math.min(reviewsList.length, MAX_REVIEWS_IN_BLOCK));

  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => (
        <Review key={`${i}`}
          review={review}
        />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviewsList: PropTypes.arrayOf(reviewType),
};

export default ReviewsList;
