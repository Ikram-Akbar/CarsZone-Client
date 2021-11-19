import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Rating from "react-rating";

const AddReview = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const { user } = useAuth();
  // console.log(user)

  const onSubmit = (data) => {
    // console.log(data);
    fetch("https://quiet-crag-05143.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Thanks! For Your Comments");
          reset();
        }
      });
  };
  return (
    <div>
      <h1 className="text-warning">Review</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input
          className="input-field"
          name="customerName"
          value={user?.displayName}
          {...register("customerName", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Type Your Comment"
          {...register("comments", { required: true })}
        />
        <br />
        <input
          className="input-field"
          type="number"
          placeholder="Give A Rating (0 to 5)"
          {...register("stars", { min: 0, max: 5, required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3 px-5"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default AddReview;
