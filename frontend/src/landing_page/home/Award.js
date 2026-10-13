import React from 'react'

function Award() {
  return (
    <div className='container p-3'>
      <div className='row mt-5'>
        <div className='col-6 p-4'>
          <img src='/media/images/largestBroker.svg'style={{width : "80%"}}/>
        </div>
        <div className='col-6 p-5  mt-4'>
          <h2>Largest Stock Broker In India</h2>
          <p>2+ million Zerodha client contribute to over 15% of all retail order volume in india daily by trading and investing in: </p>
          <div className='row mt-4'>
            <div className='col-6'>
             <ul>
               <li>Future and option</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
             </ul>
            </div>
            <div className='col-6'>
              <ul className=''>
              <li>Stock & IPOs</li>
              <li>Bonds and go</li>
              <li>Direct mutual fund</li>
              </ul>
            </div>
          </div>
          <img src='/media/images/pressLogos.png 'style={{width : "80%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Award