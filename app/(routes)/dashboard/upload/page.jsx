import React from 'react'
import ImageUpload from './_components/ImageUpload'

function Upload() {
  return (
    <div className='p-10'>
        <div className='font-bold text-3xl'>
      Upload Your bill here
      </div> 
      <ImageUpload/>
    </div>
  )
}

export default Upload
