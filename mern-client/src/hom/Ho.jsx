import React from 'react'
import Banner from '../components/Banner'
import FavouriteBook from './FavouriteBook'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Ho = () => {
  return (
    <div>
      <Banner/>
      <FavouriteBook/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Ho
