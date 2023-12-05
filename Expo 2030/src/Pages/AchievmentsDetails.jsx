import React from 'react'
import { useParams, Link } from 'react-router-dom'
import information from '../components/Ahivments';
import NavBar from '../components/NavBar';
import MyFooter from '../components/MyFooter';


function AchievmentsDetails() {

    const { id } = useParams()
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
        navigate('/');
        return null; 
      }

    const result = information.find((item)=>(item.id == id))
  return (
    <>

        <NavBar/>
        
        <div className='flex flex-col items-center justify-center w-full'>
            
            <div className='w-full'>
            <div className="rounded-lg h-screen bg-cover bg-center" 
            style={{backgroundImage: `url(${result.image})`}} alt="">
            
            <div className='h-full w-full flex items-center justify-center'>
                    <div className='bg-[rgba(255,255,255,0.53)] text-7xl p-2 
                    text-center rounded-xl w-[80%] font-bold'>{result.title}</div>
                </div>
            
            </div>

                <div className=''>

                <div className='justify-center items-center flex flex-col'>
                <div className='text-center mt-10 w-[70%]'>{result.info1}</div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 
                rounded md:my-10 dark:bg-gray-700"/>

                <div className='text-center mt-10 w-[70%]'>{result.info2}</div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 
                rounded md:my-10 dark:bg-gray-700"/>

                <div className='text-center mt-10 w-[70%]'>{result.info3}</div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 
                rounded md:my-10 dark:bg-gray-700"/>
                
                <div className='text-center mt-10 w-[70%]'>{result.info4}</div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 
                rounded md:my-10 dark:bg-gray-700"/>

                <div className='text-center mt-10 mb-10 w-[70%]'>{result.info5}</div>
            </div>
            </div>
        </div>
    </div> 

    <MyFooter></MyFooter>  
    </>
  )
}

export default AchievmentsDetails