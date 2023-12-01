import React from 'react'
import { Routes, Route as R} from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Errors/Error'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'

function Route() {
  return (
    <>
        
    <Routes>
        <R path='/' element={<Home/>}></R>
        <R path='/*' element={<Error/>}></R>
        <R path='/SignUp' element={<SignUp/>}></R>
        <R path='/SignIn' element={<SignIn/>}></R>
    </Routes>

    </>
  )
}

export default Route