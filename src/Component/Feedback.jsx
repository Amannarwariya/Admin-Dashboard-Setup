import React from 'react'
import ReviewCard from './UI/ReviewCard'

const feedbacks = [
    { id: 1, name: "John Doe", feedback: "Great service! The food was delicious.", rating: 5 },
    { id: 2, name: "Jane Smith", feedback: "Good experience overall, but the wait was a bit long.", rating: 4 },
    { id: 3, name: "Mike Johnson", feedback: "Average food quality. Could be better.", rating: 3 },
    { id: 4, name: "Emily Brown", feedback: "Disappointed with the service. The staff was not very friendly.", rating: 2 },
    { id: 5, name: "Alex Wilson", feedback: "Terrible experience. Will not come back.", rating: 1 },
    { id: 6, name: "Sarah Davis", feedback: "Absolutely loved the ambiance and the food!", rating: 5 },
  ]

export const Feedback = () => {
  return (
    <article className="col-sm-12 col-md-10  mt-3 rounded container">
    <div className="h2 font-weight-bolder mb-3 text-center w-100 mt-2 text-dark">Customer Feedback</div>
    <div className="row">
       {
         feedbacks.map((item, index) => (
            <div className='col-md-6 col-xl-4'>
              <ReviewCard key={index} userReview={item} />
            </div>
         ))
       }
    </div>
  </article>
  )
}
