import React,{useContext} from 'react'
import { Link,NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'
import { DataContext } from '../contexts/ContextProvider'

const SideBar = () => {
  const {activemenu,setActiveMenu} = useContext(DataContext);
  return (
    <div className='h-screen bg-white overflow-auto'>
      {activemenu && (<>
        <div className='flex font-extrabold  border-red-500 items-center justify-between p-3'>
          <Link to='/' onClick={()=>{}} className=' flex items-center gap-3 p-3 border-blue-500'>
            <SiShopware /><span>Shoppy</span>
          </Link>
          <TooltipComponent content={"Menu"} position="BottomCenter">
            <button type='button' onClick={()=>{setActiveMenu(false)}} className='hover:bg-gray-100 p-3 rounded-full'>
              <MdOutlineCancel size={25} />
            </button>
          </TooltipComponent>
        </div>
        <div className=' border-sky-700 mt-[60px] pb-[30px]'>
          {links.map((items)=>{
            return (
              <div key={items.title}>
                  <p className='ml-2  border-red-500 uppercase mt-4 text-gray-400 font-bold'>{items.title}</p>
                {items.links.map((link)=>{
                  return(
                    <NavLink className='block flex items-center gap-2 mt-5 ml-7 pt-2 pb-2 hover:bg-gray-100'
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={()=>{}}
                    >
                      {link.icon}
                      <span className='capitalize text-gray-700 font-semibold w-[100%] '>{link.name}</span>
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