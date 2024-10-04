import React from 'react'

const ReviewCard = ({userReview}) => {
  return (
    <div className="card w-100 mt-2 ">
  <div className="card-body d-flex flex-column">
    <h5 className="card-title">{userReview.name}</h5>
    <div className="card-subtitle mb-2 text-muted">Card subtitle</div>
    <p className="card-text">{userReview.feedback}</p>
  </div>
</div>
  )
}

export default ReviewCard