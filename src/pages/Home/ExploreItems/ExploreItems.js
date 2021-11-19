import React from "react";
import { useState, useEffect } from "react";
import ExploreItem from "../ExploreItem/ExploreItem";

const ExploreItems = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://quiet-crag-05143.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  return (
    <div className="mt-5">
      <h1 className="fw-bolder text-primary">MORE CARS COLLECTION</h1>
      {!cars?.length ? (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row pb-5">
          {cars?.map((car, index) => (
            <ExploreItem car={car} key={index}></ExploreItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreItems;
