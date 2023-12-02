import React from 'react'
import { useNavigate } from 'react-router-dom'

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

<section class="pt-10 h-screen md:pt-0 sm:pt-16 2xl:pt-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center max-sm:grid-cols-1 lg:grid-cols-2 max-md:grid-cols-2">

            <div>
            <div class="w-full">
            <h1 class="text-4xl lg:text-5xl font-bold">A Magical Journey in the Heart of Saudi: Exploring Riyadh!</h1>
            <div class="w-20 h-2 bg-blue-600 my-4"></div>

                <p class="text-lg mb-10 mt-10">Riyadh, the capital of Saudi Arabia, is a harmonious blend of modernity and tradition, taking you on a magical journey through time and space. With its vast landscapes, modern buildings seamlessly coexist with traditional markets, where the old meets the new in a unique fashion.</p>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-300"/>

                <p class="text-lg mb-10">Riyadh, by night, paints itself with lights, transforming the urban landscape into an artistic canvas. Enjoy a night tour, whether along the glittering glass facades of the Kingdom Tower or through the famous places. Riyadh embodies the beauty of diversity and offers a unique experience that blends heritage with modernity, making it an essential destination for every traveler seeking to explore a distinctive mix of allure and variety.</p>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-300"/>

                <div className='flex items-center justify-center'>
                <button
                  className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-transform transform-gpu hover:scale-105 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button" onClick={()=>{{navigate('/')}}}>
                  Home
                </button>
                </div>

            </div>
            </div>

            <div class="">

                <img class="w-full lg:h-screen lg:m-0  max-sm:mt-10 md:mt-10 xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://riyadhexpo2030.sa/wp-content/uploads/2023/11/2023-11-RIYADH-EXPO-NICOLAS-CHAVANCE-GROUPE-FR5B_6728-Avec-accentuation-BruitLQ.jpg" alt="" />
            </div>

        </div>
    </div>
</section>
    </>
  )
}

export default AboutRiyadh