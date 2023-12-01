import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Info() {

    const location = useLocation();
  const specificDivRef = useRef(null);

  const [showText, setShowText] = useState(false);
  const [circleSize, setCircleSize] = useState(30);
  const [circleColor, setCircleColor] = useState('pink');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const divPosition = specificDivRef.current.offsetTop;
      const threshold = divPosition - 600; // Adjust the threshold as needed

      setShowText(scrollY < threshold);
      setCircleSize(30 + Math.min(scrollY, 500) / 5);
    };

    const getBackgroundColor = () => {
      if (specificDivRef.current) {
        const backgroundColor = getComputedStyle(specificDivRef.current).backgroundColor;
        setCircleColor(backgroundColor);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', getBackgroundColor);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', getBackgroundColor);
    };
  }, []);

  return (
    <>
        <div className='flex justify-center flex-col items-center h-screen'>
        <div
          className='circle'
          style={{
            width: circleSize + 'px',
            height: circleSize + 'px',
            background: 'white',
            borderRadius: '50%',
            position: 'fixed',
            top: '20px',
            right: '20px',
            display: showText ? 'none' : 'block',
          }}
        ></div>

        <div
          className='text'
          style={{
            color: circleColor,
            fontSize: '24px',
            fontWeight: 'bold',
            position: 'fixed',
            top: '40px',
            right: '80px',
            opacity: showText ? '1' : '0',
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quam mollitia, necessitatibus ad consectetur nihil enim hic dicta dignissimos accusamus asperiores fugit odio magni tenetur. Cum culpa molestiae quia, repudiandae minus tempore veritatis adipisci, repellat et provident, itaque voluptatum ab voluptates minima consectetur ipsa? Ab inventore quibusdam accusa
        </div>
      </div>

      <div className='bg-white flex flex-col p-10 w-96' ref={specificDivRef}>
        <p>  </p>
      </div>
    </>
  )
}

export default Info