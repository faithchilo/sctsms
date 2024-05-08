import React from 'react'

function DashboardNumberCard({data,title,children})
{
  return (
    <div class="flex flex-col h-auto max-w-full items-center justify-center rounded-lg overflow-hidden bg-white p-4 shadow-md hover:shadow-lg">
        <div className='bg-primary rounded-full p-4'>
        {children}    
        </div>
        <div>
            <h1 className='font-body font-bold text-gray-500 text-2xl m-4'>{data}</h1>
        </div>
        <div>
            <span><h1 className='font-body text-gray-500 text-md'>{title}</h1></span>
        </div>
    </div>
  )
}

export default DashboardNumberCard