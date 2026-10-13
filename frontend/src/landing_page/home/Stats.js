import React from 'react'

function Stats() {
  return (
    <div className='container p-3  '>
      <div className='row   mt-5'>
        <div className='col-5 '>
          <h3 className='mb-5'>Trust with confidence</h3>
          <div className='mb-4'>
            <h4 className='text-muted'>Customer-first always</h4>
            <p className='text-muted '>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div className='mb-4'>
            <h4 className='text-muted'>No spam or gimmicks</h4>
            <p  className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like micks, spam, "gamification", or annoying push notifications. High  Our philosophies.</p>
          </div>
          <div className='mb-4'>
            <h4 className='text-muted'>The Zerodha universe</h4>
            <p  className='text-muted  lh-base'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs  just an app, but a whole ecosystem. Our investments in 30+ fint.</p>
          </div>
          <div className='mb-4'>
            <h4 className='text-muted'>Do better with money</h4>
            <p  className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>
        <div className='col-7 mt-3   '>
          <img  src='/media/images/ecosystem.png' style={{width : "100%",marginRight : "40px" }}/>
          <div className='mb-5'>
            <a href='' style={{textDecoration : "none", paddingLeft :"80px"}} className='mx-5'>Explore our Product <i class="fa-solid fa-arrow-right-long"></i></a> 
          <a href='' style={{textDecoration : "none"}}>Try Kite Demo <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Stats