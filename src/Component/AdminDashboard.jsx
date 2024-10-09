import React from "react";
import Button from "./UI/Button";
import ClientPeakCard from "./ClientPeakCard";
import HotSellingOrder from "./HotSellingOrder";
import RevenueCard from "./RevenueCard";
import ClientStatistics from "./ClientStatistics";
import ReviewCard from "./UI/ReviewCard";
import { Feedback } from "./Feedback";

const AdminDashboard = () => {
  return (
    <section className="mt-5 d-flex align-items-center justify-content-center flex-column">
      <article className="row w-100">
        {/* Left Column: Card with chart and buttons */}
        <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center connectedSortable mt-5">
          <ClientStatistics />
        </div>

        {/* Right Column: Client Average */}
        <div className=" col-sm-12 col-md-5 d-flex align-items-center justify-content-center mt-5">
          <ClientPeakCard />
        </div>
      </article>
      <article className="row w-100">
        <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center connectedSortable mt-5">
          <HotSellingOrder />
        </div>
        <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center connectedSortable mt-5 ">
          <RevenueCard />
        </div>
      </article>
     <Feedback />
    </section>
  );
};

export default AdminDashboard;
