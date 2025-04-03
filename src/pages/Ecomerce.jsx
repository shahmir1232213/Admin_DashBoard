import React,{useContext} from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import {DataContext} from '../contexts/ContextProvider';
import Button from '../components/Button';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import welcomeImg from '../data/welcome-bg.svg';
const Ecomerce = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className=' w-lvw ml-5'>
        <p className="font-bold">Earnings</p>
        <p className="text-2xl">$63,448.78</p>
        <Button
          color={'white'}
          bgColor={'#00FFFF'}
          text={'Download'}
          borderRadius={'10px'}
          height={'2.7rem'}
          width={'100%'}
          marginTop={'1rem'}
          fontSize={'1.3rem'}
        />          
      </div>
      <img src={welcomeImg}/>
    </div>
  )
}

export default Ecomerce