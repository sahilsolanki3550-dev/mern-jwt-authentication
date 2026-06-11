import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import FeaturesSection from '../components/Home/FeaturesSection'
import CtaSection from '../components/Home/CtaSection'

const HomeContainer = () => {
  return (
    <div className='font-inter'>
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  )
}

export default HomeContainer
