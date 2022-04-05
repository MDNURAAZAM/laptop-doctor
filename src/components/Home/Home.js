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
          <h2>LAPTOP DOCTOR</h2>
          <p>
            Laptop failed? Do not worry! Our skilled, friendly laptop repair
            technicians will bring it back to life. We diagnose and repair all
            laptop problems, from simple fixes at an excellent fixed price, to
            complex restores performed at competitive hourly rates. We are fast,
            professional and practical. You can come to us or we can come to
            you. In addition, we work evenings and weekends, so you never have
            to wait for an urgent repair. If you're near one of our laptop
            repair shops, stop by and we'll diagnose the most common problems
            on-site. Almost all laptop repairs are performed on site or in our
            workshop. For all other repairs, we offer next-day service.
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
