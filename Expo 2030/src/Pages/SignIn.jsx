import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {

    const navigate = useNavigate()

    const user = localStorage.getItem('user');
    const userData = JSON.parse(user);

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [validationError, setValidationError] = useState('')

    const sign_In = () => {

        const user = localStorage.getItem('user');
    
        if (user) {
          const currentUser = JSON.parse(user);
    

          if (name === currentUser.Name && password === currentUser.password) {
            localStorage.setItem('isLoggedIn', true);
            navigate('/Home');

        } else {
            setValidationError('Invalid name or password. Please try again.');
          }
        } else {
            setValidationError('No user found. Please sign up first!');
        }
      };

  return (
    <>
        <div className='max-sm:grid-cols-1 max-md:grid-cols-1 md:grid-cols-1 h-screen w-full grid lg:grid-cols-2'>
            <div className='bg-no-repeat bg-cover max-sm:h-[50vh] md:h-[50vh] lg:h-full' style={{backgroundImage: `url('https://e0.pxfuel.com/wallpapers/1011/158/desktop-wallpaper-kingdom-tower-saudi-arabia-towers-riyadh.jpg')`}}>

            </div>

            <div>

            {/* sign in  */}
            <div className='flex flex-col lg:justify-center items-center h-full'>
            <div className='bg-white flex flex-col p-10 w-96'>
            <p className='text-lg text-center'>Sign In Now</p>

            <input
            className='border rounded-lg mt-5'
            type='text'
            name='Name'
            placeholder='Name'
            value={name}
            onChange={(event)=>{setName(event.target.value)}}
            />

            <input
            className='border rounded-lg mt-5'
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}}
            />

            <p className='mt-5'>You don't have an account? <Link className='font-bold' to='/SignUp'> make one</Link></p>

          </div>

          {validationError && (
            <p className='text-red-500'>{validationError}</p>
          )}

            <button
            className="text-white mt-5 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
            type="button" onClick={sign_In}
            >
            Sign In
            </button>

            </div>
        </div>
            </div>

    </>
  )
}

export default SignIn