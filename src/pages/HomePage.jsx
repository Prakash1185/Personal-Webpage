import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutAndEducation from '../components/AboutAndEducation'
import Skills from '../components/Skills'
import Learning from '../components/Learning'
import InfiniteRoleSlider from '../components/InfinteRoleSlider'
import Goals from '../components/Goals'
import Quote from '../components/Quote'
import Resolutions from '../components/Resolutions'
import InfiniteWishSlider from '../components/InfiniteWishSlider'
import PlayGamesCTA from '../components/PlayGamesCTA'
import Socials from '../components/Socials'
import HappyNewYearFrame from '../components/HappyNewYearFrame'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection />
      <AboutAndEducation />
      <Skills />
      <Learning />
      <InfiniteRoleSlider />
      <Goals />
      <Quote />
      <Resolutions />
      <InfiniteWishSlider />
      <PlayGamesCTA />
      <HappyNewYearFrame />
      <InfiniteWishSlider />
      <Socials />
    </div>
  )
}

export default HomePage