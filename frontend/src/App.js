import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import { DataContext } from './contexts/ContextProvider';
import Ecomerce from './pages/Ecomerce';
import Captins from './pages/Captins';
import './App.css';
import Rides from './pages/Rides';
import Users from './pages/Users';
const App = () => {
  let { activemenu } = React.useContext(DataContext);

  return (
    <BrowserRouter>
      <div className="app-container flex">
        {activemenu && <div className="sidebar w-[300px]"><SideBar /></div>}
        <div className="main-content flex-1">
          {/* Navbar should always be visible */}
          <Navbar />
          <div className="content-area">
            <Routes>
              <Route path="/ecommerce" element={<Ecomerce />} />
              <Route path="/Captins" element={<Captins />} />
              <Route path="/Rides" element={<Rides />} />
               <Route path="/Users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;