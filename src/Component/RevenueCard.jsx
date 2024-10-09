import React, { useState } from "react";
import Button from "./UI/Button";
import ChartCard from "./UI/ChartCard";

const revenueData = {
  day: [
    { name: "12AM", data: 500 },
    { name: "6AM", data: 1000 },
    { name: "12PM", data: 2000 },
    { name: "6PM", data: 3000 },
    { name: "11PM", data: 2500 },
  ],
  week: [
    { name: "Mon", data: 5000 },
    { name: "Tue", data: 6000 },
    { name: "Wed", data: 7000 },
    { name: "Thu", data: 8000 },
    { name: "Fri", data: 10000 },
    { name: "Sat", data: 12000 },
    { name: "Sun", data: 11000 },
  ],
  month: [
    { name: "Week 1", data: 40000 },
    { name: "Week 2", data: 45000 },
    { name: "Week 3", data: 50000 },
    { name: "Week 4", data: 55000 },
  ],
  year: [
    { name: "Jan", data: 150000 },
    { name: "Feb", data: 160000 },
    { name: "Mar", data: 170000 },
    { name: "Apr", data: 180000 },
    { name: "May", data: 190000 },
    { name: "Jun", data: 200000 },
    { name: "Jul", data: 210000 },
    { name: "Aug", data: 220000 },
    { name: "Sep", data: 230000 },
    { name: "Oct", data: 240000 },
    { name: "Nov", data: 250000 },
    { name: "Dec", data: 260000 },
  ],
};

const RevenueCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("day");
  const data = revenueData[selectedPeriod];
  const totalRevenue = data.reduce((sum, item) => sum + item.data, 0);
  return (
    <div className="card w-100 h-100">
      <div className="card-header">
        <h3 className="card-title">Revenue</h3>
        <div className="card-tools">
          <ul className="nav nav-pills ml-auto">
            <Button
              onClick={() => {
                setSelectedPeriod("day");
              }}
            >
              Day
            </Button>
            <Button
              onClick={() => {
                setSelectedPeriod("week");
              }}
            >
              Week
            </Button>
            <Button
              onClick={() => {
                setSelectedPeriod("month");
              }}
            >
              Month
            </Button>
            <Button
              onClick={() => {
                setSelectedPeriod("year");
              }}
            >
              Year
            </Button>
          </ul>
        </div>
      </div>
      <div className="card-body mt-3">
        <ChartCard data={data} />
        <div className=" text-center w-100 fw-bold fs-1 mb-3 mt-4" style={{fontWeight : "bolder", fontSize: "20px"}}>
          Total Revenue: ${totalRevenue.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
