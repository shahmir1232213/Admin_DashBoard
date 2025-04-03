import React,{useContext} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { DataContext } from '../contexts/ContextProvider';

const NavButton = ({title,icon,color,customFunc,dotColor})=>{
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type='button'
      onClick={()=>customFunc()}
      style={{color}}
    >
      <span
        style={{ background: dotColor }}
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
}

const Navbar = () => {
  const {activemenu,setActiveMenu} = useContext(DataContext);
  return (
    <div>Navbar</div>
  )
}

export default Navbar