// import React from 'react';
import NavBar from '../components/NavBar';
import MyFooter from '../components/MyFooter';
import main from '../assets/riyadh.jpg';
import ex from '../assets/exppoo.mp4';
import React, { useState, useEffect } from 'react';


const Home = () => {

  return (
    <>
      {/* <NavBar />       */}
      <div 
      className="relative h-full w-full max-sm:h-screen">
      <NavBar />

      <video
          autoPlay
          loop
          muted
          // controls
          playsInline  // Add playsInline for iOS support
          className="h-full w-full object-cover"
          style={{ zIndex: -1, pointerEvents: 'none' }}
        >
          <source
            src={ex}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
      </div>

      <div className='text-center font-semibold p-20'>

      <div className='text-5xl font-bold mb-20'>Overview</div>

      <div className='flex gap-52 max-sm:gap-32 flex-wrap items-center justify-center'>

        <div 
        className='flex flex-col items-center 
        justify-center gap-2'>

          <img 
          className='w-16' 
          src="https://riyadhexpo2030.sa/wp-content/uploads/2022/11/Visitors-2-4.png" alt="" />
          <div 
          className='text-2xl font-bold'>40 Million</div>

          <div 
          className='text-slate-500 text-xs'>Site Visits</div>
        </div>

        <div 
        className='flex flex-col items-center
        justify-center gap-2'>

          <img 
          className='w-16' 
          src="https://riyadhexpo2030.sa/wp-content/uploads/2022/11/Location-1.png" alt="" />

          <div 
          className='text-2xl font-bold'>1 Billion</div>
          
          <div 
          className='text-slate-500 text-xs'>Metaverse Visits</div>
        </div>

        <div 
        className='flex flex-col items-center 
        justify-center gap-2'>

          <img 
          className='w-16'
          src="https://riyadhexpo2030.sa/wp-content/uploads/2022/11/Size-3.png" alt="" />

          <div 
          className='text-2xl font-bold'>246</div>

          <div 
          className='text-slate-500 text-xs'>Official participiants</div>
        </div>

        <div 
        className='flex flex-col items-center 
        justify-center gap-2'>

          <img 
          className='w-16'
          src="https://riyadhexpo2030.sa/wp-content/uploads/2022/11/Participants-2.png" alt="" />

          <div 
          className='text-2xl font-bold'>6 Million m²</div>

          <div 
          className='text-slate-500 text-xs'>Area of the Expo site</div>
        </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default Home;
