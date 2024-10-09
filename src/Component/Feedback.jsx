import React, { useState } from 'react'
import ReviewCard from './UI/ReviewCard'
import '../App.css'

const feedbacks = [
    { id: 1, name: "John Doe", feedback: "Great service! The food was delicious.", rating: 5 },
    { id: 2, name: "Jane Smith", feedback: "Good experience overall, but the wait was a bit long.", rating: 4 },
    { id: 3, name: "Mike Johnson", feedback: "Average food quality. Could be better.", rating: 3 },
    { id: 4, name: "Emily Brown", feedback: "Disappointed with the service. The staff was not very friendly.", rating: 2 },
    { id: 5, name: "Alex Wilson", feedback: "Terrible experience. Will not come back.", rating: 1 },
    { id: 6, name: "Sarah Davis", feedback: "Absolutely loved the ambiance and the food!", rating: 5 },
    { id: 7, name: "Sarah Davis", feedback: "Absolutely loved the ambiance and the food!", rating: 2 },
    { id: 8, name: "Sarah Davis", feedback: "Absolutely loved the ambiance and the food!", rating: 1 },
    { id: 9, name: "Sarah Davis", feedback: "Absolutely loved the ambiance and the food!", rating: 3 },
    { id: 10, name: "Sarah Davis", feedback: "Absolutely loved the ambiance and the food!", rating: 2 },
    { id: 11, name: "Sarah Davis", feedback: "Absolutely loved the ambiance and the food!", rating: 4 },
    { id: 12, name: "Sarah Davis", feedback: "Absolutely loved the ambiance and the food!", rating: 0 },
    { id: 13, name: "Sarah Davis", feedback: "Absolutely loved the ambiance and the food!", rating: 1 },
  ]


export const Feedback = () => {

  return (
    <article className="col-sm-12 col-md-10  mt-3 rounded container mb-4">
    <div className="h2 font-weight-bolder mb-3 text-center w-100 mt-2 text-dark">Customer Feedback</div>
    <div className="row hide-scrollbar" style={{height : "30rem"}}>
       {
         feedbacks.map((item, index) => (
            <div className='col-md-6 col-xl-4 mt-3'>
              <ReviewCard key={index} userReview={item} />
            </div>
         ))
       }
    </div>
  </article>
  )
}
