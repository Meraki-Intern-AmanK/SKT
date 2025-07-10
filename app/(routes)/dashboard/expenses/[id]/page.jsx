"use client"
import React, { useEffect } from 'react'

function Expenses(params) {
    useEffect(()=>{
        console.log(params)
    },[params]);
  return (
    <div className='p-10'>
    Expenses
    </div>
  )
}

export default Expenses