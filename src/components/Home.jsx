import React from 'react';
import background from '../assets/burning_guitar.jpg';
import small_background from '../assets/guitar_small.jpg';

const Home = () => {
  return (
    <div className='home'>
       <div style={{ backgroundImage: `url(${background})`}} className='background'>
        <div className='landingpage'>
            <h1 className='titleLandingpage'>come as you are</h1>
        </div>
        </div>
        
    </div>
  )
}

export default Home