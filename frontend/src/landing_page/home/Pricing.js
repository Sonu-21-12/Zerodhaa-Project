import React from 'react'

function Pricing() {
  return (
    <div className='container p-3 '>
      <div className='row mt-5 '>
        <div className='col-4 mt-3'>
          <h3>Unbeatable Pricing</h3>
          <p> initiatives like Nudge and Kill 
            Switch, we don't just facilitate transactions, but actively help you do better with</p>
            <a href='' style={{textDecoration : "none"}}>See pricing<i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className='col-2'></div>
        <div className='col-6 '>
          <div className='row p-3'>
          <div className='col-6 py-3 border' style={{textAlign :"center"}}>
            <h2>₹0</h2>
            <p>Free equity delivery and direct mutual funds</p>
          </div>
          <div className='col-6 py-3 border' style={{ textAlign :"center"}}>
             <h2>₹20</h2>
            <p>Intraday & F&O</p>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing