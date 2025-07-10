"use client"
import React from 'react'
import CardInfo from './_components/CardInfo'
import BarChartDashboard from './_components/BarChartDashboard'

function Dashboard() {
  return (
    <div className='p-5'>
      <h2 className='font-bold text-3xl'>Hi, user</h2>
      <p className='text-gray-500'>Here's what happening with your moeny, Lets manage it</p>

      <CardInfo/>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='md:col-span-2'>
          <BarChartDashboard/>
        </div>
        <div>
          other content
        </div>
      </div>
    </div>
  )
}

export default Dashboard
