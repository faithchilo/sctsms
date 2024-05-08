import React from 'react'
import { Link } from 'react-router-dom'

function TopNavBar({toggleDrawer,isDrawerOpen})
 {
  return (
    <nav class="bg-white shadow-sm">
    <div class="max-w-screen-xl mx-auto p-4 flex flex-nowrap justify-between items-center ">
    
    <a class="flex items-center space-x-3 rtl:space-x-reverse">
    <button
        type="button"
        onClick={toggleDrawer}
        className="text-gray-600 bg-transparent hover:bg-secondary-100 hover:text-gray-900 rounded-sm text-sm w-8 h-8 inline-flex items-center justify-center"
        aria-controls="drawer-body-scrolling"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list w-5 h-5" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
        <span className="sr-only">Close menu</span>
        </button>
        { isDrawerOpen ?  
        <></>
        :
        <span class="self-center text-2xl font-semibold whitespace-nowrap font-body text-gray-500  ">
            SCTSMA
        </span>
        }
    </a>
        
        <div class="flex items-center space-x-3">
            <div className='rounded-full bg-primary w-4 h-4 p-1 '></div>
            <div className='text-gray-500 font-body text-md p-1'>Admin</div>
            <Link to="/login">
                <button class="p-2 group hover:bg-secondary-100 rounded-sm border border-gray-400 hover:border-primary flex items-center ">
                    <span className='font-body mr-2 group-hover:text-white'>Logout</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-left w-5 h-5 group-hover:text-white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                    </svg>
                </button> 
        </Link>
        </div>
    </div>
    </nav>
  )
}

export default TopNavBar