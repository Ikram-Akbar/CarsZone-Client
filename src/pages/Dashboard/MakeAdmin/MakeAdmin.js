import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://quiet-crag-05143.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result?.[0].role === "admin") {
          alert('Admin created Successfully')
          reset();
        }
      });
    
  };

  return (
    <>
      <form className="text-center my-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ minWidth: "200px"}}
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="btn btn-primary mt-2"
          type="submit"
          value="make Admin"
        />
      </form>
    </>
  );
};

export default MakeAdmin;
