/**
 * @class Home
 * @description purpose of this component is to render the main page of the website
 * @author Nawod Madhuvantha
*/

import React from 'react';
import Hero from '@/shared/components/home/hero/Hero';
import dynamic from 'next/dynamic';

const RobotScene = dynamic(()=>import('@/shared/components/scene/robotScene/RobotScene'), {ssr:false});

const Home = () => {

  return (
    <div className="w-screen relative">
      <div className="w-full relative">
        <RobotScene />
        <Hero />
        <div className={`about-section w-full h-screen mx-auto container`} id="about">
          <div className="mt-[10%]">
            About
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
