import React from 'react'
import { Home } from '../components/Home/Home'
import { Offer } from '../components/Offer/Offer'
import { Guarantee } from '../components/Guarantee/Guarantee'
import { Results } from '../components/Results/Results'
import { RealResults } from '../components/RealResults/RealResults'
import { FreeMonth } from '../components/FreeMonth/FreeMonth'
import { Forma } from '../components/Forma/Forma'
import { Footer } from '../components/Footer/Footer'

export const Homepage = () => {
  return (
    <div>
        <Home/>
        <Offer/>
        <Guarantee/>
        <Results/>
        <RealResults/>
        <FreeMonth/>
        <Forma/>
        <Footer/>
    </div>
  )
}
