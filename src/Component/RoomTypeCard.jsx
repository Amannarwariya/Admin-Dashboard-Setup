import React from 'react'




const RoomTypeCard = ({ typeData }) => {
    return (
        <div className="card col-sm-10 col-md-5 col-xl-3 mt-3 pt-3 rounded-lg Regular shadow">
            <img src="./party.jpg" className="card-img-top rounded-lg" alt="..." />
            <div className="card-header mt-4 mb-3" style={{ backgroundColor: "#e11d48", color: "#ffe4e6", borderRadius: "10px" }}>
                <div className="card-title text-xl">
                    {typeData.name}
                </div>
                <div className="card-text">
                    {typeData.description}
                </div>
            </div>
            <div className="card-body relative" style={{ color: "#be123c" }}>
                <p className="h3 fw-bold mb-3">
                    {typeData.price}
                    <span className="small fw-normal">
                        {" "}per night
                    </span>
                </p>
                <h3 className="fw-semibold mb-3 ">Room Amenities:</h3>
                <ul className="list-unstyled row" style={{ gap: "5px" }}>
                    {typeData.facilities.map((facility, facilityIndex) => (
                        <li key={facilityIndex} className="mb-2">
                            <span className="badge text-dark border border-warning py-1" style={{ backgroundColor: "#fecdd3" }}>
                                <facility.icon className="mr-2" style={{ width: "1rem", height: "1rem" }} />
                                {facility.name}
                            </span>
                        </li>
                    ))}
                </ul>
               
                    <a href="#" class="btn btn-outline-danger" style={{position : "absolute", bottom: "6px" , right: "6px"}}>Booking</a>
            </div>
        </div>
    )
}

export default RoomTypeCard
