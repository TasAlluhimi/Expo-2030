import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import r from '../assets/r.jpg'



function SignUp() {

    const navigate = useNavigate()

    const countries = [
        { name: 'Saudi Arabia', cities: ['Riyadh', 'Qassim', 'Jeddah', 'Hail', 'Medina', 'Dammam', 'Taif', 'Tabuk', 'Abha'] },
        { name: 'Kuwait', cities: ['Kuwait', 'Farwaniya', 'Salmiya', 'Hawalli', 'Jahra', 'Jabriya'] },
        { name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'San Antonio', 'San Diego'] },
        { name: 'London', cities: ['Bromley', 'Borough of Kingston upon Thames', 'Borough of Richmond upon Thames', 'Borough of Sutton'] },
        { name: 'Egypt', cities: ['Cairo', 'Luxor', 'Aswan', 'Alexandria', 'Hurghada', 'Marsa Alam', 'Sharm El-Sheikh'] },
      ];

    const [inputs, setInputs] = useState({
        Name: '',
        Email: '',
        password: '',
        country: '',
        city: '',
        gender: '', 
        maritalStatus: '',
        ageRange: '', 
      });
    
      const [validationError, setValidationError] = useState('');
    
        const change = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

    
  const submit = () => {
    if (inputs.Name.length < 4) {
      setValidationError('Name should be at least 4 characters long');
      return;
    }
  
    if (inputs.Email.length < 1 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.Email)) {
      setValidationError('Please enter a valid email');
      return;
    }
  
    if (!inputs.password || inputs.password.length < 6 || !/[a-zA-Z]/.test(inputs.password) || !/\d/.test(inputs.password)) {
      setValidationError('Password should be longer than 6 characters and include both letters and numbers');
      return;
    }
  
    if (!inputs.country || !inputs.city) {
      setValidationError('Please select both country and city');
      return;
    }
  
    if (!inputs.gender || !inputs.maritalStatus) {
      setValidationError('Please select both gender and marital status');
      return;
    }
  
    if (!inputs.ageRange) {
      setValidationError('Please select your age range');
      return;
    }
  
    setValidationError('');
    localStorage.setItem('user', JSON.stringify(inputs));
    navigate('/SignIn');
  };
  

  return (
    <>
            <div className='bg-no-repeat h-[100vh] max-sm:h-full bg-cover bg-center flex 
            flex-col justify-center items-center p-12' 
            style={{backgroundImage: `url(${r})`}}>

            <div className='flex flex-col justify-center items-center'>
            <div className='bg-[rgba(255,255,255,0.46)] rounded-lg flex flex-col p-10 w-96 max-sm:w-80'>
            <p className='text-lg font-bold text-center'>Sign Up Now</p>

            <input
            className='border rounded-lg mt-5'
            type='text'
            name='Name'
            placeholder='Name'
            value={inputs.Name}
            onChange={change}
            />

            <input
            className='border rounded-lg mt-5'
            type='Email'
            name='Email'
            placeholder='Email'
            value={inputs.Email}
            onChange={change}
            />

            <input
            className='border rounded-lg mt-5'
            type='password'
            name='password'
            placeholder='password'
            value={inputs.password}
            onChange={change}
            />

            <select
            className='border rounded-lg mt-5'
            name='country'
            value={inputs.country}
            onChange={change}
        >
        <option value=''>Select Country</option>
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <select
        className='border rounded-lg mt-5'
        name='city'
        value={inputs.city}
        onChange={change}
        disabled={!inputs.country}
      >
        <option value=''>Select City</option>
        {inputs.country &&
          countries
            .find((country) => country.name === inputs.country)
            ?.cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>

      <select
        className='border rounded-lg mt-5'
        name='gender'
        value={inputs.gender}
        onChange={change}
      >
        <option value=''>Select Gender</option>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
        
      </select>

      <select
        className='border rounded-lg mt-5'
        name='maritalStatus'
        value={inputs.maritalStatus}
        onChange={change}
      >
        <option value=''>Select Marital Status</option>
        <option value='single'>Single</option>
        <option value='married'>Married</option>
      </select>

      <select
        className='border rounded-lg mt-5'
        name='ageRange'
        value={inputs.ageRange}
        onChange={change}
      >

        <option value=''>Select Age Range</option>
        <option value='18-30'>18-30</option>
        <option value='31-50'>31-50</option>
        <option value='50+'>50+</option>
      </select>

      <p className='mt-5 font-sans text-center'>You Already have an account? <Link className='font-bold' to='/SignIn'>Sign In</Link></p>


      {validationError && (
            <p className='text-red-500 font-bold text-center'>{validationError}</p>
          )}

            <button
            className="text-white mt-5 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
            type="button" onClick={submit}
            >
            Sign Up
            </button>

          </div> 
            </div>
            </div>
            <div>
        </div>
            
    </>
  )
}

export default SignUp