"use client"
/**
 * @class HeroSection
 * @description purpose of this component is to wrap hero and about section with robot model
 * @author Nawod Madhuvantha
*/

import { View } from '@react-three/drei'
import React from 'react'
import HeroRobotModel from '../../models/heroRobotModel/HeroRobotModel'
import Hero from '../hero'
import About from '../about'

const HeroSection = () => {
  return (
    <div className='relative'>
      <View className="hero-scene pointer-events-none sticky top-0 z-20 -mt-[100vh] -mr-[100vw] h-screen w-screen block left-[25%]">
        <HeroRobotModel />
        <pointLight intensity={30} color="#5bac3e" decay={0.6} />
        <directionalLight position={[-5, -5, 5]} intensity={4} />
      </View>
      <div className="hero w-full relative">
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default HeroSection
