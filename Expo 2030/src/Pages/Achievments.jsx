import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import riy from '../assets/mm.jpg';
import MyFooter from '../components/MyFooter';
import information from '../components/Ahivments';
import { Link } from 'react-router-dom';

function Achievments() {

    const [search, setSearch] = useState('')

    const filteredInformation = information.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
);

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
        navigate('/');
        return null; 
      }

  return (
    <>
        <div className='h-[95vh] w-full bg-cover bg-center' style={{backgroundImage: `url(${riy})`, overflowX: 'hidden'}}>
            <NavBar></NavBar>
        </div>
            
            {/* cards here  */}

        <div className='w-full text-center mt-10'>
            <div className='text-4xl font-bold'>Saudi Arabia Achievments</div>
            
            <input
                className='border rounded-lg mt-10'
                type='search'
                name='Search'
                placeholder='Search'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                />

            </div>

    <div className='flex flex-wrap gap-20 justify-center items-center w-full bg-center mt-10  mb-10'>
        {filteredInformation.length === 0 ? (
          <p className='text-2xl'>No results found</p>
        ) : (
          filteredInformation.map((item) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id}>
              <Link to={`/Achievments/${item.id}`}>
                <div className="rounded-t-lg h-[40vh] bg-cover bg-center" style={{backgroundImage: `url(${item.image})`}} alt=""></div>
              </Link>
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <Link to={`/Achievments/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ext-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg transition-transform transform-gpu hover:scale-105 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

        <MyFooter></MyFooter>
    </>
  )
}

export default Achievments