import React,{ useState } from 'react'
import DrawerNavBar from './DrawerNavBar'
import TopNavBar from './TopNavBar'
import Footer from './Footer';

function MainLayout({children})
{
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
    
    <TopNavBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    
      <DrawerNavBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className={`transition-all flex-1 ${isDrawerOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Wrap the content in a container */}
        <div className="p-6 bg-[#f3f6f3]">
            {children}
            
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default MainLayout