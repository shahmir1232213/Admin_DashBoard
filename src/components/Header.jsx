import React from 'react'

const Header = ({text}) => {
  return (
    <div className='font-bold ml-[17vw] text-2xl mt-[4vh] border-blue-700 w-[70vw] h-[10vh] flex items-center'>
     {text} 
    </div>
  )
}

export default Header