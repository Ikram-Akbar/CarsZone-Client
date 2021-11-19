import React from "react";
import Rating from "react-rating";
import { useState, useEffect } from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import { Bloodtype } from "@mui/icons-material";

const DisplayReview = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("https://quiet-crag-05143.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div className="mt-5">
      <h2>What Our Client Say !</h2>
      <hr />
      <h4 className="fw-bold text-dark">REVIEWS</h4>
      {!reviews?.length ? (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row pb-5">
          {reviews?.map((review, index) => (
            <ReviewDetails review={review} key={index}></ReviewDetails>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayReview;
