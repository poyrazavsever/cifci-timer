import React from 'react'
import CountdownTimer from './CountdownTimer'

const HeroSection = () => {
  return (
    <div className="relative h-full w-full">
        <img />
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/herosection.jpg')"
        }}
      >
    
        <div className="absolute inset-0 bg-green-950/60" />
        <div className="relative z-20 w-full h-fit flex flex-col items-center justify-start">
          <CountdownTimer />
        </div>
      </div>
    </div>
  )
}

export default HeroSection