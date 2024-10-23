/**
 * @class Home
 * @description purpose of this component is to render the main page of the website
 * @author Nawod Madhuvantha
*/

import React from 'react';
import Hero from '@/shared/components/home/hero/Hero';
import dynamic from 'next/dynamic';
import About from '@/shared/components/home/about/About';

const RobotScene = dynamic(()=>import('@/shared/components/scene/robotScene/RobotScene'), {ssr:false});

const Home = () => {

  return (
    <div className="w-screen relative">
      <div className="w-full relative">
        <RobotScene />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Home;
