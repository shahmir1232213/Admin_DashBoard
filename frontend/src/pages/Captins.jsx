import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Button from '../components/Button'

const Employees = () => {
  const [captins, setCaptins] = React.useState([])
  const [flag, setFlag] = useState(true)
  const [availableFlag, setAvailableFlag] = useState(false)
  const [captinRides, setCaptinRides] = useState([])
  const [availableCaptins, setAvailableCaptins] = useState([])
  const [deleteState, setDeleteState] = useState(false) 

  const deleteCaptin = async () => {
    try {
      const response = await axios.post('http://localhost:3004/captins/delete',{deleteId: deleteState});
      console.log('Delete Captin Response:', response.data);
      const fetchCaptins = await axios.get('http://localhost:3004/captins/get');
      setCaptins(fetchCaptins.data);
    } catch (error) {
      console.error('Error deleting captin:', error);
    }
  }
  let rightJoinHandler = async () => {
    try {
      setFlag(false)
      const response = await axios.get('http://localhost:3004/captins/rightJoin')
      setCaptinRides(response.data.captins)
      console.log('User Rides rightJoinHandler:', response.data.captins)
    } catch (error) {
      console.error('Error fetching captins:', error)
    }
  }
  
  async function availableCaptin(){
    try{
      let response = await axios.get('http://localhost:3004/captins/available')
      console.log("availableCaptins: ",response.data)
      // let availableCaptins = await sql.query`SELECT * FROM View_AvailableCaptains`
      // console.log("availableCaptins: ",availableCaptins)
      setAvailableCaptins(response.data)
      setAvailableFlag(true)
      setFlag(false)
    } catch(err){
      console.log('error fetching available captins: ',err)
    }
  }
  React.useEffect(()=>{
    console.log("availableCaptins: ",availableCaptins)
  },[availableCaptins])

  React.useEffect(() => {
    const fetchCaptins = async () => {
      try {
        const response = await axios.get('http://localhost:3004/captins/get');
        setCaptins(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error('Error fetching captins:', error);
      }
    };

    fetchCaptins();
  }, []);
  React.useEffect(()=>{
    console.log("captins: ",captins)
  },[captins])
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
          <Button
            onClick={deleteCaptin}
            color="white"
            bgColor="#FC6C85"
            text="Delete Captin"  
            borderRadius="9px"
            height="3rem"
            width="24%"
            marginTop="1rem"
            fontSize="1.3rem"
            marginLeft="1rem"
          />
           <Button
            onClick={availableCaptin}
            color="white"
            bgColor="#FC6C85"
            text="Available Captins"
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
                <p className="text-center">CAPTIN ID</p>
                 <p className="text-center">CAPTIN</p>
                <p className="text-center">FIRST NAME</p>
                <p className="text-center">LAST NAME</p>
                <p className="text-center">EMAIL</p>
                <p className="text-center">SATTUS</p> 
              </div>
              {/* Captin Rows */}
              {captins && captins.map((captin, index) => (
                <div
                  onClick={() => {
                    setDeleteState(captin.CAPTIN_ID)
                    console.log("deleteState: ", deleteState)

                  }}
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
                  <p className="text-center truncate">{captin.STATUS}</p>
                  <div className="flex justify-center">
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : ( 
          availableFlag ?
          <>
            <Button
            onClick={
              () => {
                setFlag(true) 
                setAvailableFlag(false)
              }
            }
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
            <div className="min-w-[1200px] w-full h-full">
              {/* Sticky Header Row */}
              <div className="font-bold sticky top-0 w-full grid grid-cols-7 items-center border-b-2 border-gray-400 py-2 bg-white z-10">
                <p className="text-center">CAPTIN ID</p>
                <p className="text-center">FIRST NAME</p>
                <p className="text-center">LAST NAME</p>
                <p className="text-center">EMAIL</p>
                <p className="text-center">Location</p>
                <p className="text-center">SATTUS</p>
              </div>
              {/* Captin Rows */}
              {availableCaptins && availableCaptins.map((captin, index) => (
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
                  <p className="text-center truncate">{captin.STATUS}</p>
                </div>
              ))}
            </div>
          </div>
          </>
          :
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