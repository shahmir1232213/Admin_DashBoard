import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'

const SideBar = () => {
  const activemenu = true;
  return (
    <div className='h-screen bg-white overflow-auto'>
      {activemenu && (<>
        <div className='flex border-2 border-red-500 items-center'>
          <Link to='/' onClick={()=>{}} className=' flex items-center w-[19rem] gap-3 p-3 border-2 border-blue-500'>
            <SiShopware /><span>Shoppy</span>
          </Link>
          <TooltipComponent content={"Menu"} position="BottomCenter">
            <button type='button' onClick={()=>{}}>
              <MdOutlineCancel size={25} />
            </button>
          </TooltipComponent>
        </div>
        <div className='border-2 border-sky-700 mt-[60px]'>
          {links.map((items)=>{
            return (
              <div key={items.title}>
                  <p className='ml-2 border-2 border-red-500 uppercase mt-4 text-gray-400 font-bold'>{items.title}</p>
                {items.links.map((link)=>{
                  return(
                    <NavLink className='block flex items-center gap-2 mt-5 ml-7'
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={()=>{}}
                    >
                      {link.icon}
                      <span className='capitalize text-gray-700 font-semibold'>{link.name}</span>
                    </NavLink>
                  )
                })}
              </div>
            )
          })}
        </div>
      </>)
      
      }
    </div>
  )
}

export default SideBar