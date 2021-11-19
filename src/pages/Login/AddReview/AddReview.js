import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";


const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
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
          alert("Thank You Sir !");
          reset();
        }
      });
  };
  return (
    <div>
      <h1 className="text-success text-bolder">Add A Review</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor="Name">Name</label>
        <br />
        <br />
        <input
          className="input-field"
          name="customerName"
          value={user?.displayName}
          {...register("customerName", { required: true })}
        />
        <br />
        <br />
        <label htmlFor="email">Email Address</label>
        <br /><br />
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <br />
        <label> Add a Comment</label>
        <br />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Type Your Comment"
          {...register("comments", { required: true })}
        />
        <br />
        <br />
        <label> Add a Ratting</label>
        <br />
        <br />
        <input
          className="input-field"
          type="number"
          placeholder="Give A Rating (0 to 5)"
          {...register("stars", { min: 0, max: 5, required: true })}
        />
        <br />
        <br />

        <input
          className="submit-btn btn btn-outline-dark mt-3 px-5"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default AddReview;
