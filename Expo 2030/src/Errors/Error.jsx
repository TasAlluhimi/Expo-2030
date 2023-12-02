import React from 'react'
import error from '../assets/error.svg'


function Error() {
  return (
    <>
      <div>
        <img className='h-screen w-screen' src={error} alt="" />
      </div>
    </>
  )
}

export default Error