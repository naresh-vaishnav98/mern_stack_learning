'use client'
import React, { useState } from 'react'
import Banner from './Banner'
import ConsBages from './ConsBages'
import HomeCategorySection from './HomeCategorySection'
import HomeProductSection from './HomeProductSection'
import SpecialOfferSection from './SpecialOfferSection'





export default function Home() {

    const [newArrival,setNewArrival] = useState([1,1,1,1]);
    const [recommended,setRecommended] = useState([1,1,1,1,1,1,1,1]);

  return (
    <>
      <Banner/>
      <ConsBages/>
      <HomeCategorySection/>
      <HomeProductSection title='TOP NEW ARRIVAL' productData={newArrival}/>
      <SpecialOfferSection/>
      <HomeProductSection title='RECOMMENDED FOR YOU' productData={recommended}/>
    </>
  )
}
