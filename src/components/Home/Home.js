import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../../CustomHook/useReview";
import Laptop from "../../images/laptop.png";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import "./Home.css";

const Home = () => {
  const [reviews] = useReview();

  const navigate = useNavigate();

  const goToReview = () => {
    navigate("/reviews");
  };
  return (
    <div className="home-container">
      <div className="product-details">
        <div className="details">
          <h2>Laptop Doctor</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            ipsa illum earum et ex voluptatem suscipit laboriosam. Itaque
            reprehenderit, ratione maiores quas officiis recusandae, quia
            similique repellendus soluta vero facilis.
          </p>
        </div>
        <img src={Laptop} alt="" />
      </div>

      <div className="review-container">
        <h2>Customer Reviews(3)</h2>

        <div className="reviews">
          {reviews.slice(0, 3).map((review) => (
            <ReviewDetail key={review.id} review={review}></ReviewDetail>
          ))}
        </div>

        <button onClick={goToReview} className="go-to-review">
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
