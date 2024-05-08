import React from 'react'
import Chart from 'react-apexcharts'

function DashboardDonutChart()
{
  return (
    <div class="flex row-span-2 flex-col h-auto max-w-full items-center justify-start rounded-lg overflow-hidden bg-white p-4 shadow-md hover:shadow-lg">
        <div className='text-primary text-2xl font-bold items-start w-full p-2'>Sales Chart</div>
        <Chart
        type="donut"
        width={320}
        height={320}
        series={[30, 40, 45, 50, 49, ]}
        options={{
            dataLabels:{
                enabled: false,
            },
            labels: ["John","Joseph","Mary","Shabani","Aisha"],
            plotOptions:{
                pie:{
                    donut:{
                        labels:{
                            show:true,
                        }
                    }
                }
            }
        }}
        />
        <div className='text-primary text-2xl font-bold items-start w-full p-2'>Revenue Chart</div>
        <Chart
        type="donut"
        width={320}
        height={320}
        series={[30, 40, 45, 50, 49, ]}
        options={{
            dataLabels:{
                enabled: false,
            },
            labels: ["John","Joseph","Mary","Shabani","Aisha"],
            plotOptions:{
                pie:{
                    donut:{
                        labels:{
                            show:true,
                        }
                    }
                }
            }
        }}
        />
    </div>
  )
}

export default DashboardDonutChart