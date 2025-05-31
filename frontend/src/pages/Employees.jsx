import React from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Employees = () => {
  const [captins, setCaptins] = React.useState([])

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
      <div className='mt-[1.5rem] border-gray-400 w-full h-[72.6vh]'>
        <div className='overflow-auto border-gray-400 w-[70vw] h-[72.6vh] ml-[17vw]'>
          {/* Sticky Header Row */}
          <div className='font-bold sticky top-0 w-full pl-[2rem] pr-[2rem] grid grid-cols-7 items-center border-b-2 border-gray-400 py-2 bg-white z-10'>
             <p className='text-center'>CAPTIN</p>
            <p className='text-center'>CAPTIN_ID</p>
            <p className='text-center'>FIRST_NAME</p>
            <p className='text-center'>LAST_NAME</p>
            <p className='text-center'>EMAIL</p>
            <p className='text-center'>Location</p>
            <p className='text-center'>SATTUS</p>
          </div>
          
          {/* Captin Rows */}
          {captins && captins.map((captin, index) => (
            <div
              key={index}
              className='hover:bg-gray-100 rounded-[0.5rem] pl-[2rem] pr-[2rem] grid grid-cols-7 items-center border-b border-gray-400 py-2'
            >
              <p className='text-center truncate'></p>
              <p className='text-center truncate'>{captin.CAPTIN_ID}</p>
              <p className='text-center truncate'>{captin.FIRST_NAME}</p>
              <p className='text-center truncate'>{captin.LAST_NAME}</p>
              <p className='text-center truncate'>{captin.EMAIL}</p>
              <p className='text-center truncate'>{captin.Location}</p>
              <p className='text-center truncate'>{captin.SATTUS}</p>
              <div className='flex justify-center'>
                {captin.CAPTIN && (
                  <img
                    src={captin.CAPTIN}
                    alt="captin"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Employees
