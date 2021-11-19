import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const AddProduct = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("https://quiet-crag-05143.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Product Added Successfully");
        }
      });
  };

  return (
    <div className="my-5">
      <h1 className="my-2 text-center text-danger">Add A New Product</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="border border-2 p-4 ">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Product Name"
                className="p-2 m-2 w-100"
                required
              />
              <br />
              <input
                {...register("description")}
                placeholder="description"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
                required
              />
              <br />
              <input
                type="number"
                {...register("price")}
                placeholder="Price$"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
                required
              />
              <br />

              <input
                {...register("img", { required: true })}
                placeholder="Image url"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
                required
              />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Add"
                className="btn btn-success ms-2 w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
