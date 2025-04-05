import React from 'react'
import Header from '../components/Header'
import { employeesData } from '../data/dummy'

const Employees = () => {
  return (
    <>
      <Header text="Employees" />
      <div className='mt-[1.5rem] border-gray-400 w-[100vw] h-[72.6vh]'>
        <div className='overflow-auto border-gray-400 w-[70vw] h-[72.6vh] ml-[17vw]'>
          {/* Sticky Header Row */}
          <div className='font-bold sticky top-0 w-[100%] pl-[2rem] pr-[2rem] grid grid-cols-6 items-center border-b-2 border-gray-400 py-2 bg-white z-10'>
            <p className='text-center'>Image</p>
            <p className='text-center'>Name</p>
            <p className='text-center'>Title</p>
            <p className='text-center'>Hire Date</p>
            <p className='text-center'>Country</p>
            <p className='text-center'>Reports To</p>
          </div>

          {/* Employee Rows */}
          {employeesData.map((employee, index) => (
            <div
              key={index}
              className='hover:bg-gray-100 rounded-[0.5rem] pl-[2rem] pr-[2rem] grid grid-cols-6 items-center border-b border-gray-400 py-2'
            >
              <div className='flex justify-center'>
                <img
                  src={employee.EmployeeImage}
                  alt="employee"
                  className='w-[5rem] h-[5rem] rounded-full'
                />
              </div>
              <p className='text-center truncate'>{employee.Name}</p>
              <p className='text-center truncate'>{employee.Title}</p>
              <p className='text-center truncate'>{employee.HireDate}</p>
              <p className='text-center truncate'>{employee.Country}</p>
              <p className='text-center truncate'>{employee.ReportsTo}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Employees
