import { PiggyBank } from 'lucide-react'
import React from 'react'

function CardInfo() {
  return (
    <div className='mt-7  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
                <h2 className='text-sm'>Total Budgegt</h2>
                <h2 className='font-bold text-2xl'>4000 INR</h2>
            </div>
            <PiggyBank className='bg-purple-600 p-3 h-12 w-12 rounded-full  text-black'/>
        </div>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
                <h2 className='text-sm'>Total Spend</h2>
                <h2 className='font-bold text-2xl'>400 INR</h2>
            </div>
            <PiggyBank className='bg-purple-600 p-3 h-12 w-12 rounded-full  text-black'/>
        </div>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
                <h2 className='text-sm'>No. of  Budgegt</h2>
                <h2 className='font-bold text-2xl'>4</h2>
            </div>
            <PiggyBank className='bg-purple-600 p-3 h-12 w-12 rounded-full  text-black'/>
        </div>
    </div>
  )
}

export default CardInfo
