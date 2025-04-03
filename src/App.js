import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import { DataContext } from './contexts/ContextProvider';

import './App.css';
const App = () => {
  let {activemenu} = React.useContext(DataContext);
  return (
    <BrowserRouter>
      <div className='absolute bottom-5 right-3 border-2 border-red-500 rounded-[50%]'>
        <TooltipComponent content="Settings">
          <button >
            <FiSettings size={40} />
          </button>
       </TooltipComponent>
      </div>
      {
        activemenu ? <div className='border-2 border-green-300 w-[30vw]'><SideBar/></div>
        : <div className=''><Navbar /></div>
        
      }
    </BrowserRouter>
    

  )
}

export default App