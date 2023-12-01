import React from 'react'
import { Routes, Route as R} from 'react-router-dom'
import Home from '../Pages/Home'
import NavBar from '../components/NavBar'
import Error from '../Errors/Error'
import MyFooter from '../components/MyFooter'


function Route() {
  return (
    <>
    <NavBar/>
      {/* <Home></Home> */}
    <MyFooter></MyFooter>
    <Routes>
        <R path='/' element={<Home/>}></R>
        <R path='/e' element={<Error/>}></R>
    </Routes>
    </>
  )
}

export default Route