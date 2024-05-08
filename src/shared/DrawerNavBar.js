import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const DrawerNavBar = ({isDrawerOpen, toggleDrawer}) => {
  const [isItemOpen, setItemOpen] = useState(false);

  const toggleItemOpen = () => {
    setItemOpen(!isItemOpen);
  };

  return (
    <>
      {/* Drawer component */}
      <div
        id="drawer-body-scrolling"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform shadow-md ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }  w-64 bg-white`}
        tabIndex="-1"
        aria-labelledby="drawer-body-scrolling-label"
      >
        

        {/* Drawer content */}
        <div className="py-4 overflow-y-auto">
        <div className="flex items-center justify-between"> {/* Container */}
            <h1 id="drawer-body-scrolling-label" className="text-4xl mb-4 font-bold font-body text-gray-500 uppercase">SCTSMA</h1>
            {/* Close button for the drawer */}
            <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-600 bg-transparent hover:bg-secondary-100 hover:text-gray-900 rounded-sm text-sm w-8 h-8 mb-4 inline-flex items-center justify-center"
            aria-controls="drawer-body-scrolling"
            >
            <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
            </svg>
            <span className="sr-only">Close menu</span>
            </button>
        </div>


          <ul className="space-y-2 font-body">
          <NavLink to="/dashboard">
            <li>
              <a href="/" className="flex items-center p-2 text-gray-500 rounded-sm hover:text-white group hover:bg-gradient-to-r hover:bg-secondary-100">
              <svg class="w-5 h-5 text-gray-500 transition duration-75   group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">Dashboard</span>
              </a>
            </li>
            </NavLink>
            
            <NavLink to="/">
            <li>
              <a href="/" className="flex items-center p-2 text-gray-500 rounded-sm hover:text-white group hover:bg-gradient-to-r hover:bg-secondary-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house-door-fill w-5 h-5 text-gray-500 transition duration-75   group-hover:text-white" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                </svg>
               <span class="ms-3">Home</span>
              </a>
            </li>
            </NavLink>

            <NavLink to="/orders">
            <li>
              <a href="/" className="flex items-center p-2 text-gray-500 rounded-sm hover:text-white group hover:bg-gradient-to-r hover:bg-secondary-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-card-checklist w-5 h-5 text-gray-500 transition duration-75   group-hover:text-white" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                </svg>
               <span class="ms-3">Orders</span>
              </a>
            </li>
            </NavLink>

            
            <li>
            <button type="button" class="flex items-center w-full p-2 text-base transition duration-75 rounded-sm group hover:bg-secondary-100 text-gray-500 hover:text-white " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleItemOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-graph-up-arrow w-5 h-5 text-gray-500 transition duration-75   group-hover:text-white" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
            </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Reports</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example" className={`py-2 space-y-2 ${isItemOpen ? '' : 'hidden'}`}>
                  <NavLink to="/reports">
                  <li>
                     <a href="/" class="flex items-center w-full p-2 transition duration-75 rounded-sm pl-11 group hover:bg-secondary-100 text-gray-500 hover:text-white">General reports</a>
                  </li>
                  </NavLink>
                  <NavLink to="/reports">
                  <li>
                     <a href="/" class="flex items-center w-full p-2  transition duration-75 rounded-sm pl-11 group hover:bg-secondary-100 text-gray-500 hover:text-white ">Statistical reports</a>
                  </li>
                  </NavLink>
            </ul>
         </li>


          </ul>
        </div>
      </div>
    </>
  );
};

export default DrawerNavBar;
