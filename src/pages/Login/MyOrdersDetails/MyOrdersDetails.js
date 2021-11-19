// import React from 'react';

// const MyOrdersDetails = ({myOrders}) => {
//   const { email, productName, phone, price, address, _id } = myOrders;
//   const data = new Date().toLocaleDateString();

//   // ORDERED PRODUCT DELETE METHOD
//   const handleDelete = (id) => {
//     console.log(id);
//     fetch(`https://protected-stream-32771.herokuapp.com/deleteProduct/${id}`, {
//       method: "DELETE",
//       headers: {
//         "content-type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         const proceed = window.confirm("Stop! are you sure you want ot delete?");
//         if (proceed) {
//           if (data.deletedCount > 0) {
//             alert("data deleted successfully");
//             console.log(data);
//             window.location.reload();
//           } else {
//           }
//         }
//       });
//   };

//   return (
//     <tr>
//       <td>
//         {address}
//       </td>
//       <td>{email}</td>
//       <td>{productName}</td>
//       <td>${price}</td>
//       <td>{data}</td>
//       <td>
//         <button onClick={() => handleDelete(_id)}>Delete</button>
//         <button>Approve</button>
//       </td>
//     </tr>
//   );
// };

// export default MyOrdersDetails;
