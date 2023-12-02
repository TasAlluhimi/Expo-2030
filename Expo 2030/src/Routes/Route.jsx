import React from 'react'
import { Routes, Route as R} from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Errors/Error'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import Achievments from '../Pages/Achievments'
import AchievmentsDetails from '../Pages/AchievmentsDetails'
import Profile from '../Pages/Profile'
import AboutRiyadh from '../Pages/AboutRiyadh'

function Route() {
  return (
    <>
        
    <Routes>
        <R path='/' element={<Home/>}></R>
        <R path='/*' element={<Error/>}></R>
        <R path='/SignUp' element={<SignUp/>}></R>
        <R path='/SignIn' element={<SignIn/>}></R>
        <R path='/Achievments' element={<Achievments/>}></R>
        <R path='/Achievments/:id' element={<AchievmentsDetails/>}></R>
        <R path='/Profile' element={<Profile/>}></R>
        <R path='/AboutRiyadh' element={<AboutRiyadh/>}></R>

    </Routes>

    </>
  )
}

export default Route