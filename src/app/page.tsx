/**
 * @class Home
 * @description purpose of this component is to render the main page of the website
 * @author Nawod Madhuvantha
*/

import React from 'react';
import HeroSection from '@/shared/components/home/heroSection';


const Home = () => {

  return (
    <div className="w-screen relative">
      <HeroSection />
      <div className='h-screen'>
          portfolio
      </div>
    </div>
  );
};

export default Home;
