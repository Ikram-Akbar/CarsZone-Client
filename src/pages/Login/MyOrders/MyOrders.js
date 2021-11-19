import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    fetch(
      `https://quiet-crag-05143.herokuapp.com/myOrders/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [user?.email]);

  // ORDERED PRODUCT DELETE METHOD
  const handleDelete = (id) => {
    fetch(`https://quiet-crag-05143.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const proceed = window.confirm(
          "Stop! are you sure you want to delete?"
        );
        if (proceed) {
          if (data.deletedCount === 1) {
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          }
        }
      });
  };

  return (
    <div className="container">
      <h2>MY ORDER LIST</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">User Address</th>
            <th scope="col">Email</th>
            <th scope="col">Item Name</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order) => (
            <tr>
              <td>{order?.address}</td>
              <td>{order?.email}</td>
              <td>{order?.productName}</td>
              <td>${order.price}</td>
              <td>{date}</td>
              <td>
                <button onClick={() => handleDelete(order._id)}>Delete</button>
                <button>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
