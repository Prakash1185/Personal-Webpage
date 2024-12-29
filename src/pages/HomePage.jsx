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

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutAndEducation />
      <Skills />
      <Learning />
      <InfiniteRoleSlider />
      {/* <Goals /> */}
      <Quote />
      <Resolutions />
      <InfiniteWishSlider />
      <PlayGamesCTA />
      <Socials/>
    </div>
  )
}

export default HomePage