import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/herosection.jpg')"
        }}
      >
      </div>
    </div>
  )
}

export default HeroSection