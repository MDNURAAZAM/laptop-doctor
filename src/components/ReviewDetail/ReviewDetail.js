import React from "react";
import "./ReviewDetail.css";

const ReviewDetail = ({ review }) => {
  return (
    <div className="review-detail">
      <h2>Name: {review.name.toUpperCase()}</h2>
      <p>Comments: {review.comments}</p>
      <p> Ratings: {review.ratings} out of 5</p>
    </div>
  );
};

export default ReviewDetail;
