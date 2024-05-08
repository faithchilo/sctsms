import React from 'react'
import DashboardNumberCard from '../components/dashboard/DashboardNumberCard'
import HomeDataTable from '../components/home/HomeDataTable'
function Home()
{
  return (
    <>
    <div className="w-full">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">

      <DashboardNumberCard data={30} title={"Orders completed"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person w-14 h-14 text-white" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
        </DashboardNumberCard>
        <DashboardNumberCard data={100} title={"Orders Rejected"}>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-cash-stack w-14 h-14 text-white" viewBox="0 0 16 16">
        <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
        <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"/>
        </svg>
        </DashboardNumberCard>
        <DashboardNumberCard data={10} title={"Customers"}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bag-check w-14 h-14 text-white" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
        </DashboardNumberCard>
        <HomeDataTable/>

      </div>
    </div>
    </>
  )
}

export default Home