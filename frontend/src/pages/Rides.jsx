import React from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Rides = () => {
  const [rides, setRides] = React.useState([])

  React.useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get('http://localhost:3000/rides/get');
        setRides(Array.isArray(response.data) ? response.data : [response.data]);
        console.log("rides: ",rides);
    } catch (error) {
        console.error('Error fetching rides:', error);
      }
    };

    fetchRides();
  }, []);

  return (
    <>
      <Header text="Rides" />
      <div className="mt-6 border-gray-400 w-full h-[72.6vh] overflow-x-auto">
        <div className="min-w-[1400px] w-full h-full">
          {/* Sticky Header Row */}
          <div className="font-bold sticky top-0 w-full grid grid-cols-11 items-center border-b-2 border-gray-400 py-2 bg-white z-10">
            <p className="text-center">RIDE_ID</p>
            <p className="text-center">USER_ID</p>
            <p className="text-center">CAPTIN_ID</p>
            <p className="text-center">VEHICLE_TYPE</p>
            <p className="text-center px-4">PICKUP</p>
            <p className="text-center px-4">DESTINATION</p>
            <p className="text-center">FARE</p>
            <p className="text-center">STATUS</p>
            <p className="text-center">DURATION</p>
            <p className="text-center">DISTANCE</p>
            <p className="text-center">CAPTIN</p>
          </div>

          {/* Ride Rows */}
          {rides && rides.map((ride, index) => (
            <div
              key={index}
              className="hover:bg-gray-100 rounded-[0.5rem] grid grid-cols-11 items-center border-b border-gray-400 py-2"
            >
              <p className="text-center truncate">{ride.RIDE_ID}</p>
              <p className="text-center truncate">{ride.USER_ID}</p>
              <p className="text-center truncate">{ride.CAPTIN_ID}</p>
              <p className="text-center truncate">{ride.VEHICLE_TYPE}</p>
              <p className="text-center px-4 truncate max-w-[200px]">{ride.PICKUP}</p>
              <p className="text-center px-4 truncate max-w-[200px]">{ride.DESTINATION}</p>
              <p className="text-center truncate">{ride.FARE}</p>
              <p className="text-center truncate">{ride.STATUS}</p>
              <p className="text-center truncate">{ride.DURATION}</p>
              <p className="text-center truncate">{ride.DISTANCE}</p>
              <div className="flex justify-center">
                {ride.CAPTIN ? (
                  <img
                    src={ride.CAPTIN}
                    alt="captin"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">No Image</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Rides
