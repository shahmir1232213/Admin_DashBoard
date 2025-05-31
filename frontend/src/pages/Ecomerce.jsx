import React,{useContext} from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import {DataContext} from '../contexts/ContextProvider';
import Button from '../components/Button';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import welcomeImg from '../data/welcome-bg.svg';
import SparkLine from '../components/Charts/SparkLine';
import Stacked from '../components/Charts/Stacked';

const Ecomerce = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className=' w-lvw ml-5'>
          <p className="font-bold">Earnings</p>
          <p className="text-2xl">$63,448.78</p>
          <div className='mt-2'>
            <Button
              color={'white'}
              bgColor={'#FC6C85'}
              text={'Download'}
              borderRadius={'10px'}
              height={'2.7rem'}
              width={'100%'}
              marginTop={'1rem'}
              fontSize={'1.3rem'}
            />
          </div>          
        </div>
        <img src={welcomeImg}/>
      </div>
      
      <div className='flex justify-between h-[60vh] w-[100%]  border-blue-700'>
      <div className="relative border-red-500 w-[40rem] h-[100%] p-4 flex flex-col justify-between">
      {/* Top section with Budget and Expense */}
      <div className="flex justify-between">
        <div>
          <p>
            <span className="text-3xl font-semibold">$93,438</span>
            <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
              23%
            </span>
          </p>
          <p className="text-gray-500 mt-1">Budget</p>
        </div>
        <div>
          <p className="text-3xl font-semibold">$48,487</p>
          <p className="text-gray-500 mt-1">Expense</p>
        </div>
      </div>

      {/* SparkLine Chart Section */}
      <div className="flex justify-center">
        <SparkLine
          id="line-sparkline"
          type="Line"
          height="150px"
          width="500px"  // Use full width of container
          data={SparklineAreaData}
          currentColor="gray"
          color="gray"
          LineWidth={2}
        />
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <Button
          color="white"
          bgColor="#FC6C85"
          text="Download"
          borderRadius="10px"
          height="2.7rem"
          width="10rem"
          fontSize="1.2rem"
        />
      </div>
    </div>
          <div className='flex items-center border-green-800  w-[40rem] h-[100%]'>
              <Stacked></Stacked>
          </div>
      </div>
      <div className='flex justify-center items-center gap-[4rem] border-gray-200 h-[25vh]'>
        {earningData.map((item)=>{
          return(
            <div className='flex flex-col items-center'>
              <div style={{backgroundColor:`${item.iconBg}`}} key={item.title} className='mb-4 flex items-center justify-center rounded-full w-20 h-20'>
                <button>
                  <span>{item.icon}</span>
                </button>
              </div>
              <p>
                <span className='font-semibold text-xl'>{item.amount}</span>
                <span className={`inline-block text-[${item.pcColor}]`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-gray-500'>{item.title}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Ecomerce