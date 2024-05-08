import React from 'react'
import Chart from 'react-apexcharts'

function DashboardLineChart()
{
  return (
    <div class="flex col-span-3 flex-col h-auto max-w-full items-center justify-center rounded-lg overflow-hidden bg-white p-4 shadow-md hover:shadow-lg">
        <Chart
        type="line"
        width={900}
        height={400}
        series={[
            {
                name: "orders",
                data: [30, 40, 45, 50, 49, 60, 70, 91, 30, 40]
            },
            {
                name: "users",
                data: [12, 23, 55, 60, 54, 77, 70, 87, 99, 14]
            }
        ]}
        options={{
            chart: {
                id: 'basic-line-chart'
            },
            title:{
                text: "Users vs Orders",
                style: {
                    fontSize: 30,
                    fontFamily: 'Open Sans',
                    color: '#6FC07A'
                }
            },
            subtitle:{
                text: 'This chart shows users vs orders',
            },
            xaxis: {
                tickPlacement: 'on',
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
                title: {
                    text: 'Years',
                    style: {
                        color: '#6FC07A'
                    }
                }
            },
            yaxis:{
                title: {
                    text: 'Value',
                    style: {
                        color: '#6FC07A'
                    }
                }
            },
            stroke:{
                curve: 'smooth',
            },
            colors: ["#6FC07A","#87CEEB"]
        }}
        />
    </div>
  )
}

export default DashboardLineChart