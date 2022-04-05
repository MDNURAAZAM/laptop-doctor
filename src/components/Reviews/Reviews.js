import React from "react";
import useReview from "../../CustomHook/useReview";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import "./Reviews.css";

const Reviews = () => {
  const [reviews] = useReview();
  return (
    <div className="reviews-container">
      {reviews.map((review) => (
        <ReviewDetail key={review.id} review={review}></ReviewDetail>
      ))}
    </div>
  );
};

export default Reviews;
