import React, { useState } from 'react';
import Button from './UI/Button';
import ChartCard from './UI/ChartCard';

const revenueData = {
  day: [
    { name: "12AM", data: 5 },
    { name: "6AM", data: 10 },
    { name: "12PM", data: 20 },
    { name: "6PM", data: 30 },
    { name: "11PM", data: 25 },
  ],
  week: [
    { name: "Mon", data: 50 },
    { name: "Tue", data: 60 },
    { name: "Wed", data: 70 },
    { name: "Thu", data: 82 },
    { name: "Fri", data: 101 },
    { name: "Sat", data: 91 },
    { name: "Sun", data: 110 },
  ],
  month: [
    { name: "Week 1", data: 400 },
    { name: "Week 2", data: 450 },
    { name: "Week 3", data: 500 },
    { name: "Week 4", data: 550 },
  ],
  year: [
    { name: "Jan", data: 1500 },
    { name: "Feb", data: 1600},
    { name: "Mar", data: 1700 },
    { name: "Apr", data: 1800 },
    { name: "May", data: 1900 },
    { name: "Jun", data: 2000 },
    { name: "Jul", data: 2100 },
    { name: "Aug", data: 2200 },
    { name: "Sep", data: 2300 },
    { name: "Oct", data: 2400 },
    { name: "Nov", data: 2500 },
    { name: "Dec", data: 2600 },
  ],
};

const ClientStatistics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('day')
  const data = revenueData[selectedPeriod]
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
    <div className="card-body mt-3 pb-4">
      <ChartCard data={data} />
    </div>
  </div>
  );
};

export default ClientStatistics;
