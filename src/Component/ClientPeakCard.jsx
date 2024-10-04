import React, { useState } from "react";
import Button from "./UI/Button";

const yearlyData = [
  { year: "2018", clients: 1500 },
  { year: "2019", clients: 1800 },
  { year: "2020", clients: 1200 },
  { year: "2021", clients: 2000 },
  { year: "2022", clients: 2500 },
];
const monthlyData = [
  { month: "Jan", clients: 800 },
  { month: "Feb", clients: 1000 },
  { month: "Mar", clients: 1200 },
  { month: "Apr", clients: 1500 },
  { month: "May", clients: 1800 },
  { month: "Jun", clients: 2000 },
  { month: "Jul", clients: 2500 },
  { month: "Aug", clients: 2300 },
  { month: "Sep", clients: 2000 },
  { month: "Oct", clients: 1700 },
  { month: "Nov", clients: 1400 },
  { month: "Dec", clients: 1600 },
];


const ClientPeakCard = () => {
  const [viewMode, setViewMode] = useState("yearly");
  const [selectedYear, setSelectedYear] = useState("2018");
  const data = viewMode === 'yearly' ? yearlyData : monthlyData
  const maxClients = Math.max(...data.map(item => item.clients))
  return (
    <div className="card w-100 h-100">
      <div className="card-header">
        <h3 className="card-title">
          Peak Client Number
        </h3>
      </div>
      <div className="card-body" >
        <ul className="nav nav-pills ml-auto ">
          {/* <Button onClick={() => setDataType("day")}>Day</Button>
                  <Button onClick={() => setDataType("week")}>Week</Button> */}
          <Button onClick={() => setViewMode("monthly")}>Monthly</Button>
          <Button onClick={() => setViewMode("yearly")}>Yearly</Button>
          {viewMode === "monthly" && (
            <div className="dropdown ml-2">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                {selectedYear}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          )}
        </ul>
        <div style={{ maxHeight: '300px', overflowY: 'auto' , marginTop: "10px"}}>
        <table className="table">
          <thead className="thead-light">
            <tr className="font-weight-light">
              <th scope="col">
                {viewMode === "yearly" ? "Yearly" : "Monthly"}
              </th>
              <th scope="col">Peak Clients</th>
              <th scope="col">Relative Peak</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item) => (
              <tr key={viewMode === 'yearly' ? item.year : item.month}>
                <th>{viewMode === 'yearly' ? item.year : item.month}</th>
                <th>{item.clients}</th>
                <th>
                <div className="progress rounded-pill" style={{ height: "20px" }}>
                                        <div
                                            className="bg-primary rounded-pill"
                                            style={{ width: `${(item.clients / maxClients) * 100}%`, height: "100%" }}
                                        />
                                    </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default ClientPeakCard;
