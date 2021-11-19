import React from "react";
import { useState, useEffect } from "react";
import Car from "../Car/Car";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://quiet-crag-05143.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.slice(0, 6));
      });
  }, []);

  return (
    <div className="mt-5">
      <h2 className=" text-dark">
        CARS
      </h2>
      <hr />
      <h4 className="fw-bold"> COLLECTION OF CARS</h4>
      {!cars?.length ? (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Please Wait...</span>
        </div>
      ) : (
        <div className="row pb-5">
          {cars?.map((car, index) => (
            <Car car={car} key={index}></Car>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cars;
