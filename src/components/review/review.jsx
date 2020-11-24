import React from "react";
import {ratingBlock} from "../../utils.js";
import {reviewType} from '../../types';

const Review = (props) => {
  const {review} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.picture || ``} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingBlock(review.grade) + `%`}}></span>
            <span className="visually-hidden">{review.grade}</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: reviewType,
};

export default Review;
