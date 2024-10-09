import React, { useState } from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import '../../App.css'

const ReviewCard = ({userReview}) => {
  let bgStyle = userReview.rating >= 3 ? "#dcfce7" : userReview.rating >= 2 ? "#ffedd5" : "#fee2e2";
   const [rating, setRating] = useState([1,2,3,4,5])
  return (
    <div className="card w-100 h-100 mt-2 " style={{backgroundColor : bgStyle}}>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title font-weight-bold text-monospace">{userReview.name}</h5>
    <div className="card-subtitle mb-2 text-muted d-flex mt-2" style={{gap : "4px", fontSize: "20px"}}>
      {
        rating.map((item, index) => (
          item <= userReview.rating ? (
            <FaStar key={index} style={{ fill: "#fb923c" }} />
          ) : (
            <FaRegStar key={index} style={{ fill: "gray" }} />
          )
        ))
      }
    </div>
    <p className="card-text font-weight-normal hide-scrollbar" style={{color: "#374151", height: "6rem"}}>{userReview.feedback}</p>
  </div>
</div>
  )
}

export default ReviewCard