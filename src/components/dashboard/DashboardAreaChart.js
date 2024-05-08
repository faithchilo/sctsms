import React from 'react'
import Chart from 'react-apexcharts'

function DashboardAreaChart()
{
  return (
    <div class="flex col-span-2 flex-row h-auto max-w-full items-center justify-start rounded-lg overflow-hidden bg-white p-4 shadow-md hover:shadow-lg">

        <div class="flex flex-col items-start justify-center ml-4">
            <div className='bg-primary rounded-full p-4 my-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cart w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>   
            </div>
            <div className='font-body text-4xl text-gray-500 font-bold my-2'>0m:45s</div>
            <div className='font-body  text-gray-500 my-2'>Avg.Order Time</div>
            <div className='font-body  text-gray-200 my-2'>Time taken for customer to receiver order</div>
        </div>

        <Chart
        type="area"
        width={350}
        height={150}
        series={[
            {
                name: "orders",
                data: [30, 40, 45, 50, 49, 60, 70, 91, 30, 40]
            },
        ]}
        options={{
            dataLabels:{
                enabled:false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
                labels:{
                    show:false
                }
            },
            yaxis:{
                labels:{
                    show: false
                }
            },
            stroke:{
                curve: 'smooth',
            },
            colors: ["#6FC07A"],
            chart:{
                toolbar:{
                    show:false
                }
            }
        }}
        />
    </div>
  )
}

export default DashboardAreaChart