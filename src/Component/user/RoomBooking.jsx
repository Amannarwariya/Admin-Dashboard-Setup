import React from 'react';
import RoomTypeCard from '../RoomTypeCard';
import { Wifi, Tv, Coffee, Utensils, Bath, Wind } from "lucide-react"

const roomTypes = [
  {
    name: "Deluxe Room",
    description: "Spacious and luxurious accommodation for the discerning traveler.",
    price: "Rs.2500",
    image: "https://ik.imagekit.io/vercel-v0/hotel-room-1.jpg?tr=w-1200,h-630,fo-auto",
    facilities: [
      { name: "Free Wi-Fi", icon: Wifi },
      { name: "50\" Smart TV", icon: Tv },
      { name: "Mini Bar", icon: Coffee },
      { name: "Room Service", icon: Utensils },
      { name: "Jacuzzi", icon: Bath },
      { name: "Climate Control", icon: Wind },
    ],
  },
  {
    name: "Standard Room",
    description: "Comfortable and cozy room for a pleasant stay.",
    price: "Rs.1500",
    image: "https://ik.imagekit.io/vercel-v0/hotel-room-2.jpg?tr=w-1200,h-630,fo-auto",
    facilities: [
      { name: "Free Wi-Fi", icon: Wifi },
      { name: "32\" TV", icon: Tv },
      { name: "Coffee Maker", icon: Coffee },
      { name: "Climate Control", icon: Wind },
    ],
  },
  {
    name: "Luxury Suite",
    description: "Expansive suite with separate living area and premium amenities.",
    price: "Rs.3500",
    image: "https://ik.imagekit.io/vercel-v0/hotel-room-3.jpg?tr=w-1200,h-630,fo-auto",
    facilities: [
      { name: "Free Wi-Fi", icon: Wifi },
      { name: "65\" Smart TV", icon: Tv },
      { name: "Full Bar", icon: Coffee },
      { name: "24/7 Room Service", icon: Utensils },
      { name: "Jacuzzi & Sauna", icon: Bath },
      { name: "Climate Control", icon: Wind },
    ],
  },
]



const RoomBooking = () => {
  return (
    <div className='wrapper'>
      <div className='content-wrapper'>
        <div className='fluid d-flex align-items-center justify-content-center  flex-column '>
          <div
            style={{
              backgroundImage: `url('./roomBookingpic1.jpg')`,
              backgroundSize: 'cover',
              height: '60vh',
              width: '100%', // Ensures the div takes full width
              display: 'flex', // Allows centering of inner content
              alignItems: 'center', // Vertically centers inner content
              justifyContent: 'center' // Horizontally centers inner content
            }}
          >
            <h1 style={{ color: 'white', textShadow: '1px 1px 2px black', textAlign: "center" }}>Welcome to Room Booking</h1>
          </div>

          {/* //booking Card */}

          <div className='d-flex flex-column align-items-center justify-content-center mt-5' style={{ gap: "20px" }}>
            <h2 className='w-full text-align-center'>Exquisite Accommodations</h2>
            <div className='row mt-5 mb-5 w-100 align-item-center justify-content-start ' style={{ gap: "20px" }}>
              {
                roomTypes.map((item, index) => (
                  <RoomTypeCard typeData={item} />
                ))
              }
            </div>
          </div>
          {/* //advertigment  */}
          <div className='w-100 h-auto d-flex align-items-center justify-content-center pt-3 pb-3 mt-5 mb-4 ' style={{ backgroundColor: "#e7e5e4", minHeight: "40rem", borderRadius: "30px" }}>
            <div className='row align-items-center justify-content-around h-auto p-2 ' style={{ width: "95%", gap: "30px" }}>
              <div className='col-sm-8 col-md-5 col-xl-3 d-flex align-items-end justify-content-center ' style={{
                backgroundImage: `url('./bedrom.jpg')`,
                backgroundSize: 'cover', height: "40rem", borderRadius: "30px"
              }}>
                <h1 style={{ color: 'white', textShadow: '1px 1px 2px black', textAlign: "center" }}>Rooms</h1>
              </div>
              <div className='col-sm-10 col-md-5 col-xl-3 d-flex flex-column align-items-center justify-content-between ' style={{ height: "40rem" }}>
                <div className='d-flex align-items-end justify-content-center ' style={{
                  backgroundImage: `url('./party.jpg')`,
                  backgroundSize: 'cover', height: "18rem", width: "100%", borderRadius: "30px"
                }}>
                  <h1 style={{ color: 'white', textShadow: '1px 1px 2px black', textAlign: "center" }}>Party</h1>
                </div>
                <div className='d-flex align-items-end justify-content-center ' style={{
                  backgroundImage: `url('./pool.jpg')`,
                  backgroundSize: 'cover', height: "18rem", width: "100%", borderRadius: "30px"
                }}>
                  <h1 style={{ color: 'white', textShadow: '1px 1px 2px black', textAlign: "center" }}>Pool</h1>
                </div>
              </div>
              <div className='col-sm-10 col-md-11 col-xl-3 d-flex flex-column flex-md-row flex-xl-column align-items-center justify-content-between  h-100 min-w-100' style={{ gap: "60px" }}>
                <div className='d-flex align-items-end justify-content-center m-auto ' style={{
                  backgroundImage: `url('./dinner.jpg')`,
                  backgroundSize: 'cover',
                  height: "18rem",
                  width: "100%",
                  borderRadius: "30px"
                }}>
                  <h1 style={{ color: 'white', textShadow: '1px 1px 2px black', textAlign: "center" }}>Dining</h1>
                </div>
                <div className='d-flex align-items-end justify-content-center m-auto ' style={{
                  backgroundImage: `url('./gym.jpg')`,
                  backgroundSize: 'cover',
                  height: "18rem",
                  width: "100%",
                  borderRadius: "30px"
                }}>
                  <h1 style={{ color: 'white', textShadow: '1px 1px 2px black', textAlign: "center" }}>GYM</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBooking;
