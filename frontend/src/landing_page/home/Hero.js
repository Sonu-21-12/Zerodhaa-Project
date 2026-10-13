import React from 'react'

function Hero() {
  return (
    <div className='container '>
      <div className='row text-center '>
          <div style={{display : "flex", justifyContent:"center"}}>
              <img src="/media/images/homeHero.png" className='py-5' style={{marginBottom:" 60px",  maxHeight: "65vh"}}/>

          </div>
          <h3>Invest in everything</h3>
          <p className='pt-2 pb-4'>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <div> <button className='btn btn-primary px-5 fs-5'>Signup</button></div>
      </div>
    </div>
  )
}

export default Hero