import React from 'react';
import NavBar from '../components/NavBar';
import MyFooter from '../components/MyFooter';
import main from '../assets/m.png';

const Home = () => {

  return (
    <>
      
      <div style={{ backgroundImage: `url(${main})` }} className="h-screen w-full bg-cover bg-center bg-no-repeat">
      <NavBar />
        <div className="flex flex-col items-start justify-center h-full text-white text-4xl p-5 font-bold italic">
          Riyadh.. <br></br>is the world's choice!
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default Home;
