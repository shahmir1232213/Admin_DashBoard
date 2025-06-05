import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Button from '../components/Button'

const Users = () => {
  const [users, setUsers] = useState([])
  const [flag, setFlag] = useState(true)
  const [flag2, setFlag2] = useState(false)
  const [userRides, setUserRides] = useState([])
  const [userWithRides, setUserWithRides] = useState([])
  const leftJoinHandler = async () => {
    try {
      setFlag(false)
      const response = await axios.get('http://localhost:3000/users/leftJoin')
      setUserRides(response.data.users)
      console.log('User Rides leftJoinHandler:', response.data.users)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }
  const innerJoinHandler = async () => {
    try {
      setFlag(false)
      setFlag2(true)
      const response = await axios.get('http://localhost:3000/users/innerJoin')
      setUserWithRides(response.data.users)
      console.log('Users innerJoinHandler:', response.data.users)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/get')
        setUsers(Array.isArray(response.data.users) ? response.data.users : [response.data.users])
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <>
      <Header text="Users" />
      {flag ? (
        <>
          <Button
            onClick={leftJoinHandler}
            color="white"
            bgColor="#FC6C85"
            text="User and their Rides"
            borderRadius="9px"
            height="3rem"
            width="20%"
            marginTop="1rem"
            fontSize="1.3rem"
            marginLeft="1rem"
          />
          <Button
            onClick={innerJoinHandler}
            color="white"
            bgColor="#FC6C85"
            text="User having rides"
            borderRadius="9px"
            height="3rem"
            width="20%"
            marginTop="-3rem"
            fontSize="1.3rem"
            marginLeft="20rem"
          />
          <div className="mt-6 border-gray-400 w-full h-[72.6vh] overflow-x-auto">
            <div className="min-w-[750px] w-full h-full">
              <div className="font-bold sticky top-0 w-full grid grid-cols-5 items-center border-b-2 border-gray-400 py-2 bg-white z-10">
                <p className="text-center">USER ID</p>
                <p className="text-center">FIRST NAME</p>
                <p className="text-center">LAST NAME</p>
                <p className="text-center">EMAIL</p>
                <p className="text-center">PASSWORD</p>
              </div>
              {users.map((user, index) => (
                <div
                  key={index}
                  className="hover:bg-gray-100 rounded-[0.5rem] grid grid-cols-5 items-center border-b border-gray-400 py-2"
                >
                  <p className="text-center truncate">{user.USER_ID}</p>
                  <p className="text-center truncate">{user.FIRST_NAME}</p>
                  <p className="text-center truncate">{user.LAST_NAME}</p>
                  <p className="text-center truncate">{user.EMAIL}</p>
                  <p className="text-center truncate">{user.PASSWORD}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        flag2 ? 
        <>
          <Button
            onClick={() => {
              setFlag(true)
              setFlag2(false)
            }}
            color="white"
            bgColor="#FC6C85"
            text="Users"
            borderRadius="10px"
            height="2.7rem"
            width="10%"
            marginTop="1rem"
            fontSize="1.3rem"
             marginLeft="1rem"
          />
            <div className="mt-6 border-gray-400 w-full h-[72.6vh] overflow-x-auto">
                <div className="min-w-[600px] w-full h-full">
                  <div className="font-bold sticky top-0 w-full grid grid-cols-3 items-center border-b-2 border-gray-400 py-2 bg-white z-10">
                    <p className="text-center">USER ID</p>
                    <p className="text-center">FIRST NAME</p>
                    <p className="text-center">TOTAL RIDES</p>
                  </div>
                  {userWithRides.map((user, index) => (
                    <div
                      key={index}
                      className="hover:bg-gray-100 rounded-[0.5rem] grid grid-cols-3 items-center border-b border-gray-400 py-2"
                    >
                      <p className="text-center truncate">{user.USER_ID}</p>
                      <p className="text-center truncate">{user.FIRST_NAME}</p>
                      <p className="text-center truncate">{user.TOTAL_RIDES}</p>
                    </div>
                  ))}
                </div>
            </div>
        </> 
        :(
        <>
          <Button
            onClick={() => setFlag(true)}
            color="white"
            bgColor="#FC6C85"
            text="Users"
            borderRadius="10px"
            height="2.7rem"
            width="10%"
            marginTop="1rem"
            fontSize="1.3rem"
             marginLeft="1rem"
          />
          <div className="mt-6 border-gray-400 w-full h-[72.6vh] overflow-x-auto">
            <div className="min-w-[900px] w-full h-full">
              <div className="font-bold sticky top-0 w-full grid grid-cols-5 items-center border-b-2 border-gray-400 py-2 bg-white z-10">
                <p className="text-center">USER ID</p>
                <p className="text-center">FIRST NAME</p>
                <p className="text-center">RIDE ID</p>
                <p className="text-center">PICKUP</p>
                <p className="text-center">DESTINATION</p>
              </div>
              {userRides.map((ride, index) => (
                <div
                  key={index}
                  className="hover:bg-gray-100 rounded-[0.5rem] grid grid-cols-5 items-center border-b border-gray-400 py-2"
                >
                  <p className="text-center truncate">{ride.USER_ID}</p>
                  <p className="text-center truncate">{ride.FIRST_NAME}</p>
                  <p className="text-center truncate">{ride.RIDE_ID || 'Null'}</p>
                  <p className="text-center truncate">{ride.PICKUP || 'Null'}</p>
                  <p className="text-center truncate">{ride.DESTINATION || 'Null'}</p>
                </div>
              ))}
            </div>
          </div>
        </>
        )
      )}
    </>
  )
}

export default Users
