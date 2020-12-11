import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {CommentSettings, RatingStars, SendingStatusForRequests} from '../../const';
import {sendingStatusType} from '../../types';
import {getCommentSendingStatus} from "../../store/selectors/selectors";

const CommentForm = (props) => {
  const {
    id,
    grade,
    comment,
    commentSendingStatus,
    handleInputChange,
    handleTextAreaChange,
    handleFormSubmit,
    clearState: clearForm,
  } = props;

  const isSending = commentSendingStatus === SendingStatusForRequests.SENDING;

  const submitButtonDisabled = () => {
    if (grade &&
      (comment.length > CommentSettings.COMMENTS_LENGTH_MIN) &&
      (comment.length < CommentSettings.COMMENTS_LENGTH_MAX) &&
      (!isSending)) {
      return ``;
    }

    return true;
  };

  const onFormSubmit = (evt) => {
    handleFormSubmit(evt, id, comment, grade, clearForm);
  };

  return (
    <form onSubmit={onFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.keys(RatingStars).reverse().map((star) => (
          <React.Fragment key={parseInt(star, 10)}>
            <input onChange={handleInputChange}
              checked={parseInt(grade, 10) >= parseInt(star, 10)}
              data-value={star}
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${star}-stars`}
              type="checkbox"
              disabled={isSending}/>
            <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title={RatingStars[star]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea onChange={handleTextAreaChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isSending}
        maxLength={CommentSettings.COMMENT_LENGTH_MAX}>
      </textarea>
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
  id: PropTypes.number.isRequired,
  grade: PropTypes.number,
  comment: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleTextAreaChange: PropTypes.func.isRequired,
  commentSendingStatus: sendingStatusType.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  commentSendingStatus: getCommentSendingStatus(state),
});

export {CommentForm};
export default connect(mapStateToProps)(CommentForm);
