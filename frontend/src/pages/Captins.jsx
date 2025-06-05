import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Button from '../components/Button'

const Employees = () => {
  const [captins, setCaptins] = React.useState([])
  const [flag, setFlag] = useState(true)
  const [captinRides, setCaptinRides] = useState([])

  let rightJoinHandler = async () => {
    try {
      setFlag(false)
      const response = await axios.get('http://localhost:3000/captins/rightJoin')
      setCaptinRides(response.data.captins)
      console.log('User Rides rightJoinHandler:', response.data.captins)
    } catch (error) {
      console.error('Error fetching captins:', error)
    }
  }

  React.useEffect(() => {
    const fetchCaptins = async () => {
      try {
        const response = await axios.get('http://localhost:3000/captins/get');
        setCaptins(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error('Error fetching captins:', error);
      }
    };

    fetchCaptins();
  }, []);

  return (
    <>
      <Header text="Captins" />
      {flag ? (
        <>
          <Button
            onClick={rightJoinHandler}
            color="white"
            bgColor="#FC6C85"
            text="Captins Total Rides"
            borderRadius="9px"
            height="3rem"
            width="24%"
            marginTop="1rem"
            fontSize="1.3rem"
            marginLeft="1rem"
          />
          <div className="mt-6 border-gray-400 w-full h-[72.6vh] overflow-x-auto">
            <div className="min-w-[1200px] w-full h-full">
              {/* Sticky Header Row */}
              <div className="font-bold sticky top-0 w-full grid grid-cols-7 items-center border-b-2 border-gray-400 py-2 bg-white z-10">
                <p className="text-center">CAPTIN_ID</p>
                <p className="text-center">FIRST_NAME</p>
                <p className="text-center">LAST_NAME</p>
                <p className="text-center">EMAIL</p>
                <p className="text-center">Location</p>
                <p className="text-center">SATTUS</p>
                <p className="text-center">CAPTIN</p>
              </div>
              {/* Captin Rows */}
              {captins && captins.map((captin, index) => (
                <div
                  key={index}
                  className="hover:bg-gray-100 rounded-[0.5rem] grid grid-cols-7 items-center border-b border-gray-400 py-2"
                >
                  <p className="text-center truncate">{captin.CAPTIN_ID}</p>
                  <p className="text-center truncate">{captin.FIRST_NAME}</p>
                  <p className="text-center truncate">{captin.LAST_NAME}</p>
                  <p className="text-center truncate">{captin.EMAIL}</p>
                  <p className="text-center truncate">{captin.Location}</p>
                  <p className="text-center truncate">{captin.SATTUS}</p>
                  <div className="flex justify-center">
                    {captin.CAPTIN ? (
                      <img
                        src={captin.CAPTIN}
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
      ) : (
        <>
          <Button
            onClick={() => setFlag(true)}
            color="white"
            bgColor="#FC6C85"
            text="Captins"
            borderRadius="10px"
            height="2.7rem"
            width="10%"
            marginTop="1rem"
            fontSize="1.3rem"
            marginLeft="1rem"
          />
          <div className="mt-6 border-gray-400 w-full h-[72.6vh] overflow-x-auto">
            <div className="min-w-[700px] w-full h-full">
              {/* Sticky Header Row for Captin Rides */}
              <div className="font-bold sticky top-0 w-full grid grid-cols-4 items-center border-b-2 border-gray-400 py-2 bg-white z-10">
                <p className="text-center">FIRST NAME</p>
                <p className="text-center">CAPTIN ID</p>
                <p className="text-center">VEHICLE TYPE</p>
                <p className="text-center">TOTAL RIDES</p>
              </div>
              {/* Captin Rides Rows */}
              {captinRides && captinRides.map((item, index) => (
                <div
                  key={index}
                  className="hover:bg-gray-100 rounded-[0.5rem] grid grid-cols-4 items-center border-b border-gray-400 py-2"
                >
                  <p className="text-center truncate">{item.FIRST_NAME ?? 'Captin Deleted'}</p>
                  <p className="text-center truncate">{item.CAPTIN_ID ?? 'Captin Deleted'}</p>
                  <p className="text-center truncate">{item.VEHICLE_TYPE ?? 'Captin Deleted'}</p>
                  <p className="text-center truncate">{item.TOTAL_RIDES ?? 'Captin Deleted'}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Employees