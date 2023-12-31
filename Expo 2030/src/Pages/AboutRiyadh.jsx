import React from 'react'
import { useNavigate } from 'react-router-dom'
// import a from '../assets/expo.mp4';

function AboutRiyadh() {
    const navigate = useNavigate()
  return (
    <>
<div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

<section class="h-[100vh] max-sm:h-full">
    
    <div class=" h-full px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        
        <div class="flex h-full flex-col items-center justify-center">

            
            <div className="w-[80%]">
            <h1 class="text-4xl lg:text-5xl font-bold">A Magical Journey in the Heart of Saudi: Exploring Riyadh!</h1>
            <div class="w-20 h-2 bg-blue-600 my-4"></div>

                <p class="text-lg mb-10 mt-10 font-sans">Riyadh, the capital of Saudi Arabia, is a harmonious blend of modernity and tradition, taking you on a magical journey through time and space. With its vast landscapes, modern buildings seamlessly coexist with traditional markets, where the old meets the new in a unique fashion.</p>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-300"/>

                <p class="text-lg mb-10 font-sans">Riyadh, by night, paints itself with lights, transforming the urban landscape into an artistic canvas. Enjoy a night tour, whether along the glittering glass facades of the Kingdom Tower or through the famous places. Riyadh embodies the beauty of diversity and offers a unique experience that blends heritage with modernity, making it an essential destination for every traveler seeking to explore a distinctive mix of allure and variety.</p>
                {/* <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-300"/> */}

                <div className='flex items-center justify-center'>
                <button
                  className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button" onClick={()=>{{navigate('/')}}}>
                  Home
                </button>
                </div>

            
            </div>

            <div class=" flex items-center justify-center w-screen">

                {/* <img class="w-full lg:h-screen lg:m-0 max-sm:mt-10 md:mt-10 xl:max-w-lg xl:mx-auto 2xl:origin-bottom 
                2xl:scale-110" src={a} alt="" /> */}

          {/* <video
          // autoPlay
          loop
          // muted
          controls
          className="self-center h-full w-[90%] max-sm:w-full p-16"
          // style={{ zIndex: -1, pointerEvents: 'none' }}
          >
          <source
            src={a}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}

            </div>

        </div>
    </div>
</section>
    </>
  )
}

export default AboutRiyadh