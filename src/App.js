import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import { DataContext } from './contexts/ContextProvider';
import Ecomerce from './pages/Ecomerce';
import Employees from './pages/Employees';
import './App.css';

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
              <Route path="/employees" element={<Employees />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;