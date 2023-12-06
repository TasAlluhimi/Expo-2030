import React from 'react'
import { useNavigate } from 'react-router-dom';
import ex from '../assets/exx.jpg'


function Profile() {

    const navigate = useNavigate()

    const user = localStorage.getItem('user')
    const userData = JSON.parse(user);
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
        navigate('/');
        return null; 
      }


  return (
    <>

<div
    class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
    <div class="rounded-t-lg h-32 overflow-hidden">
        <img class="object-cover object-top w-full" src={ex} alt='Mountain'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src='https://cdn-icons-png.flaticon.com/128/149/149071.png' alt='user icon'/>
    </div>
    
    <div class="text-center mt-2">
        <h2 class="font-semibold">{userData.Name}</h2>
        <p class="text-gray-500">{userData.Email}</p>
    </div>

    <div class="p-4 border-t mx-8 mt-2"></div>
    <div className='text-center font-bold'>Personal</div>
    <div class="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
            <div className='font-bold'>Sex:</div>
            <div>{userData.gender}</div>
        </li>
        <li class="flex flex-col items-center justify-between">
            <div className='font-bold'>marital Status:</div>
            <div>{userData.maritalStatus}</div>
        </li>
        <li class="flex flex-col items-center justify-around">
            <div className='font-bold'>Age Range:</div>
            <div>{userData.ageRange}</div>
        </li>
    </div>

    <div class="p-4 border-t mx-8 mt-2"></div>
    <div className='text-center font-bold'>Location</div>
    <div class="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
            <div className='font-bold'>Country:</div>
            <div>{userData.country}</div>
        </li>
        <li class="flex flex-col items-center justify-between">
            <div className='font-bold'>City:</div>
            <div>{userData.city}</div>
        </li>
    </div>

    <div class="p-4 border-t mx-8 mt-2">

            <div className='flex items-center justify-center'>
                <button
                  className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button" onClick={()=>{{navigate('/')}}}>
                  Home
                </button>
            </div>
    </div>

</div>
    </>
  )
}

export default Profile