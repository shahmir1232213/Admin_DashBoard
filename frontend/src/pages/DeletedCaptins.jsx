import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Button from '../components/Button'

const Employees = () => {
  const [captins, setCaptins] = React.useState([])

  React.useEffect(() => {
    const fetchCaptins = async () => {
      try {
        const response = await axios.get('http://localhost:3004/captins/getDeletedCaptins');
        
        setCaptins(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error('Error fetching captins:', error);
      }
    };

    fetchCaptins();
  }, []);

  return (
    <>
      <Header text="Deleted Captins log" />
      <div className="mt-6 border-gray-400 w-full h-[72.6vh] overflow-x-auto">
        <div className="min-w-[1200px] w-full h-full">
          {/* Sticky Header Row */}
          <div className="font-bold sticky top-0 w-full grid grid-cols-7 items-center border-b-2 border-gray-400 py-2 bg-white z-10">
            <p className="text-center">CAPTIN ID</p>
            <p className="text-center">CAPTIN</p>
            <p className="text-center">FIRST NAME</p>
            <p className="text-center">LAST NAME</p>
            <p className="text-center">EMAIL</p>
            <p className="text-center">VEHICLE TYPE</p>
          </div>
          {/* Captin Rows */}
          {captins && captins.map((captin, index) => (
            <div
              key={index}
              className="hover:bg-gray-100 rounded-[0.5rem] grid grid-cols-7 items-center border-b border-gray-400 py-2"
            >
              <p className="text-center truncate">{captin.CAPTIN_ID}</p>
              <img
                className="mx-auto h-10 w-10 object-cover rounded-full"
                src="/images/dp.jpeg"
                alt="captain"
              />
              <p className="text-center truncate">{captin.FIRST_NAME}</p>
              <p className="text-center truncate">{captin.LAST_NAME}</p>
              <p className="text-center truncate">{captin.EMAIL}</p>
              <p className="text-center truncate">{captin.VEHICLE_TYPE}</p>
              <div className="flex justify-center"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Employees