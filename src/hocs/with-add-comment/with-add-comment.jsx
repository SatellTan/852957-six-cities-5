import React from 'react';
import {useDispatch} from 'react-redux';

import CommentForm from '../../components/comment-form/comment-form';
import {sendComment} from "../../store/api-actions";

const WithAddComment = (props) => {

  const dispatch = useDispatch();

  const handleFormSubmit = (evt, id, comment, grade, clearForm) => {
    evt.preventDefault();
    dispatch(sendComment({offerId: id, comment, rating: grade, clearForm}));
  };

  return <CommentForm
    {...props}
    handleFormSubmit={handleFormSubmit} />;
};

export default WithAddComment;
