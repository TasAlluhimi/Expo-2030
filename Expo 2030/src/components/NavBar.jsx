import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

  const user = localStorage.getItem('user')
  const userData = JSON.parse(user);
  const loggedIn = localStorage.getItem('isLoggedIn');

    const navigate = useNavigate()

    const [showUserMenu, setShowUserMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const userMenuClick = () => {
        setShowUserMenu(!showUserMenu);
    };

    const sign_out = () => {
        localStorage.clear()
        setShowUserMenu(false);
    };


  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const scroll = () => {
    const scrolled = window.scrollY > 500;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <nav className={`border-b ${isScrolled ? 'bg-white' : ''} border-gray-200 dark:bg-gray-900 fixed w-full border-none`}>
      <div className="flex items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={`${isScrolled ? "https://riyadhexpo2030.sa/wp-content/uploads/2022/11/Riyadh_Expo_2030-Logo-Colored.png" : "https://riyadhexpo2030.sa/wp-content/uploads/2022/11/Riyadh_Expo_2030-Logo-white.png"}`} className="h-20" alt="Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
        {loggedIn ? (
              <div className="relative">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded={showUserMenu}
                  onClick={userMenuClick}
                >
                  {/* <span className="sr-only">Open user menu</span> */}
                  <img className="w-12 h-12 rounded-full" src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="user icon" />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
                    <div className="py-2">
                      <div className="px-4 py-3"> 
                        <span className="block text-sm text-gray-900 dark:text-white">{userData.Name}</span>
                        
                      </div>
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                          <Link to="/Profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={sign_out}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Sign out
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
                <button
                  className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button" onClick={()=>{{navigate('/SignUp')}}}
                >
                  Sign Up
                </button>
            )}


          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={showMobileMenu}
            onClick={mobileMenuClick}
          >
            {/* <span className="sr-only">Open main menu</span> */}
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${showMobileMenu ? 'block' : 'hidden'}`}
          id="navbar-cta"
        >
          <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mr-10`}>
            <li>
              <Link to="/" className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${isScrolled ? '' : 'text-white'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/AboutRiyadh"
                className={`${isScrolled ? '' : 'text-white'} block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                About Riyadh
              </Link>
            </li>

            {loggedIn? 
            <li>
              <Link
                to="/Achievments"
                className={`${isScrolled ? '' : 'text-white'} block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Explore Achievments
              </Link>
            </li>
            :''}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

