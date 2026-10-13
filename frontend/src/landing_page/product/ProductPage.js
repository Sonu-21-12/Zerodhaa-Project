import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductPage() {
  return (
    <div>
        <Hero/>
        <LeftSection linkIMage={'/media/images/googlePlayBadge.svg'} imageUrl={'/media/images/console.png'} productName={"Console"} productDescription={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} LearnMore={"LearnMore"}/><br/>
        <RightSection  imageUrl={'/media/images/kiteConnect.png'} productName={"Console"} productDescription={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} LearnMore={"LearnMore"}/><br/>
        <br/>
         <br/>
          <br/>
         <LeftSection linkIMage={'/media/images/googlePlayBadge.svg'} imageUrl={'/media/images/coin.png'} productName={"Console"} productDescription={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} LearnMore={"LearnMore"}/><br/>
         <br/>
          <br/>
           <br/>
        <RightSection imageUrl={'/media/images/kite.png'} productName={"Kite Connect"} productDescription={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} LearnMore={"LearnMore"}/><br/>
          <br/>
           <br/>
           <LeftSection linkIMage={'/media/images/googlePlayBadge.svg'}  imageUrl={'/media/images/varsity.png'} productName={"Console"} productDescription={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} LearnMore={"LearnMore"}/><br/>
      <br/>
       <br/>
        <Universe/>
    </div>
  )
}

export default ProductPage