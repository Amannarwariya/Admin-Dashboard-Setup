import React from "react";
import Button from "./UI/Button";

const foodItems = [
  {
    id: 1,
    name: "Grilled Salmon",
    price: 24.99,
    orders: 150,
    highDemand: true,
    offer: false,
  },
  {
    id: 2,
    name: "Vegetarian Pizza",
    price: 18.99,
    orders: 120,
    highDemand: false,
    offer: true,
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 12.99,
    orders: 80,
    highDemand: false,
    offer: false,
  },
  {
    id: 4,
    name: "Burger",
    price: 16.99,
    orders: 200,
    highDemand: true,
    offer: false,
  },
  {
    id: 5,
    name: "Chocolate Cake",
    price: 8.99,
    orders: 100,
    highDemand: false,
    offer: true,
  },
  {
    id: 6,
    name: "Seafood Pasta",
    price: 22.99,
    orders: 90,
    highDemand: false,
    offer: false,
  },
  {
    id: 7,
    name: "Chicken Curry",
    price: 19.99,
    orders: 110,
    highDemand: false,
    offer: false,
  },
  {
    id: 8,
    name: "Fruit Smoothie",
    price: 6.99,
    orders: 75,
    highDemand: false,
    offer: true,
  },
];

const HotSellingOrder = () => {
  return (
    <div className="card w-100 h-100">
      <div className="card-header">
        <h3 className="card-title">Resort Food Menu</h3>
      </div>
      <div className="card-body" style={{ maxHeight: "420px", overflowY: "auto", marginTop: "10px" }}>
        <table className="table">
          <thead className="thead-light">
            <tr className="font-weight-light">
              <th scope="col">Food Item</th>
              <th scope="col">Price</th>
              <th scope="col">Orders</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item, index) => (
              <tr key={index}>
                <th className="d-flex flex-column align-items-start justify-content-center ">
                  {item.name}
                  {item.highDemand && (
                    <span className="badge badge-warning w-10px ml-4">High Demand</span>
                  )}
                  {item.highDemand === false && item.offer === true && (
                    <span className="badge bg-success ml-4">Special offer</span>
                  )}
                </th>
                <th>{item.price}</th>
                <th>{item.orders}</th>
                <th>
                  {item.highDemand
                    ? "Popular"
                    : item.offer
                    ? "On Sale"
                    : "Regular"}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotSellingOrder;
