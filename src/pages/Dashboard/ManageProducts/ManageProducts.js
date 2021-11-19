import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    fetch("https://quiet-crag-05143.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        console.log(data);
      });
  }, []);

  // manage all products delete method for admin
  const handleDelete = (id) => {
    fetch(`https://quiet-crag-05143.herokuapp.com/deletePd/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const proceed = window.confirm(
          "Stop! are you sure you want to delete?"
        );
        if (proceed) {
          if (data.deletedCount === 1) {
            const remainingOrders = allProducts.filter(
              (order) => order._id !== id
            );
            setAllProducts(remainingOrders);
          }
        }
      });
  };

  return (
    <div className="container">
      <h2>Manage All Products For Admin</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">ProductName</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product) => (
            <tr>
              <td>{product?._id}</td>
              <td>{product?.name}</td>
              <td>${product?.price}</td>
              <td>{date}</td>
              <td>
                <button onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
