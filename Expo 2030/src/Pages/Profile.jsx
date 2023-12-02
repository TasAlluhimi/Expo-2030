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
  
        <div className="h-screen" style={{backgroundImage: `url(${ex})`}}>
    <div className="container mx-auto h-full py-8">
        <div className="flex flex-col items-center justify-center h-full">

                <div className="bg-[rgba(232,237,238,0.85)] shadow rounded-lg p-6 w-[100%]">
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"/>

                        <h1 className="text-xl font-bold">{userData.Name}</h1>
                        <p className="text-gray-600">{userData.Email}</p>
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                        </div>
                    </div>
                    <hr className="my-6 border-t border-black"/>
                    <div className="max-sm:flex-col max-sm:gap-10 md:gap-40 max-md:gap-40 flex lg:gap-[30rem]">
                        <div>
                        <div className="flex flex-col">
                        <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">Personal</span>
                        <ul>
                            <li className="mb-2">Sex: {userData.gender}</li>
                            <li className="mb-2">marital Status: {userData.maritalStatus}</li>
                            <li className="mb-2">Age Range: {userData.ageRange}</li>
                        </ul>
                    </div>
                        </div>
                        <div>
                        <div className="flex flex-col">
                        <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">Location</span>
                        <ul>
                            <li className="mb-2">Country: {userData.country}</li>
                            <li className="mb-2">City: {userData.city}</li>
                        </ul>
                        </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center p-5'>
                    <button
                  className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button" onClick={()=>{{navigate('/')}}}
                >
                  Home
                </button>
                </div>
                </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Profile