import React from "react";
import PropTypes from "prop-types";
import {CommentSettings, RatingStars} from '../../const';

const CommentForm = (props) => {
  const {grade, comment, handleInputChange, handleTextAreaChange} = props;

  const submitButtonDisabled = () => {
    if (grade && (comment.length > CommentSettings.COMMENTS_LENGTH_MIN) && (comment.length < CommentSettings.COMMENTS_LENGTH_MAX)) {
      return ``;
    }

    return true;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div onChange={handleInputChange} className="reviews__rating-form form__rating">
        {Object.keys(RatingStars).reverse().map((star) => (
          <React.Fragment key={parseInt(star, 10)}>
            <input checked={parseInt(grade, 10) >= parseInt(star, 10)} data-value={star} className="form__rating-input visually-hidden" name="rating" id={`${star}-stars`} type="checkbox"/>
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title={RatingStars[star]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea onChange={handleTextAreaChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" maxLength={CommentSettings.COMMENT_LENGTH_MAX}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={submitButtonDisabled()}>Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  grade: PropTypes.number,
  comment: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleTextAreaChange: PropTypes.func.isRequired
};

export default CommentForm;
