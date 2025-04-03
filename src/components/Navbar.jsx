import React,{useContext} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { DataContext} from '../contexts/ContextProvider';

const NavButton = ({title,icon,color,customFunc,dotColor})=>{
  return(
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type='button'
      onClick={()=>customFunc()}
      style={{color}}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
      />
        {icon}
    </button>
  </TooltipComponent>
  )
}

const Navbar = () => {
  const {activemenu,setActiveMenu} = useContext(DataContext);
  return (
    <div className='flex justify-between items-center p-2 border-2 border-red-500'>
      <NavButton 
          icon={<AiOutlineMenu />} 
          title={"Menu"}
          customFunc={()=>{
              if(!activemenu){
                setActiveMenu(true);
              }
            }
          }
          color={"gray-400"}
          dotColor={"gray"}
      >
      </NavButton>
      <div className='flex items-center'>
          <NavButton 
              icon={<FiShoppingCart />} 
              title={"Cart"}
              customFunc={()=>{}}
              color={"gray-400"}
              dotColor={"gray"}
          >
          </NavButton>
          <NavButton 
              icon={<BsChatLeft />} 
              title={"Chat"}
              customFunc={()=>{}}
              color={"gray-400"}
              dotColor={"gray"}
          >
          </NavButton>
          <NavButton 
              icon={<RiNotification3Line />} 
              title={"Notification"}
              customFunc={()=>{}}
              color={"gray-400"}
              dotColor={"gray"}
          >
          </NavButton>
          <TooltipComponent content={"Profile"} position='BottomCenter'>
          <div className='border-2 ml-[0.5rem] border-yellow-500 flex items-center gap-2'>
            <img className='rounded-full w-12 h-12'
              src={avatar}
            />
            <p className='flex items-center gap-2'>
              <span className="text-gray-400 text-[1.3rem]">Hi,</span>{' '}
              <span className="text-gray-400 font-bold text-[1.3rem] ml-1">
                Michael
              </span>
              <MdKeyboardArrowDown className="text-gray-400 text-[1.3rem]" />
            </p>
          </div>
          </TooltipComponent>
      </div>
    </div>
  )
}

export default Navbar