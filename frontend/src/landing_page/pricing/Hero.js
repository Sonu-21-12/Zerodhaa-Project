import React from 'react'

function Hero() {
  return (
    <div className='container'>
        <div  style={{marginTop:"80px"}} className='row '>
            <div className='col text-center '>
                <h2>Charges</h2>
                <h3 className=' text-muted'>List of all charges and taxes</h3>
            </div>
           
            <div style={{marginTop: "100px" }} className='row text-center '>
                <div className='col-4'>
                    <img style={{width:"80%"}} src='/media/images/pricing0.svg'/>
                    <h2 >Free equity delivery</h2>
                    <p  style={{lineHeight:"1.7"}} className='mt-4'>All equity delivery investments (NSE, BSE), 
                        are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                     <img style={{width:"80%"}} src='/media/images/intradayTrades.svg'/>
                      <h2 >Intraday and F&O trades</h2>
                    <p  style={{lineHeight:"1.7"}} className='mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                     <img style={{width:"80%"}} src='/media/images/pricing0.svg'/>
                      <h2 >Free direct MF</h2>
                    <p  style={{lineHeight:"1.7"}} className='mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
<div className="container">
  <div className="row my-5">

    {/* Tabs */}
    <nav className="tabs">
      <a href="#">Equity</a>
      <a href="#">Currency</a>
      <a href="#">Commodity</a>
    </nav>

    {/* Table */}
    <div className="table-wrapper">
      <table className="pricing-table">

        <thead>
          <tr>
            <th></th>
            <th>Equity delivery</th>
            <th>Equity intraday</th>
            <th>F&amp;O - Futures</th>
            <th>F&amp;O - Options</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Brokerage</td>
            <td>Zero Brokerage</td>
            <td>
              0.03% or Rs. 20/executed
              <br />
              order whichever is lower
            </td>
            <td>
              0.03% or Rs. 20/executed
              <br />
              order whichever is lower
            </td>
            <td>
              Flat Rs. 20 per executed order
            </td>
          </tr>

          <tr>
            <td>STT/CTT</td>

            <td>
              0.1% on buy &amp; sell
            </td>

            <td>
              0.025% on the sell side
            </td>

            <td>
              0.05% on the sell side
            </td>

            <td>
              <ul>
                <li>
                  0.15% of the intrinsic value on options
                  that are bought and exercised
                </li>

                <li>
                  0.15% on sell side (on premium)
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>Transaction charges</td>

            <td>
              NSE: 0.00307%
              <br />
              BSE: 0.00375%
            </td>

            <td>
              NSE: 0.00307%
              <br />
              BSE: 0.00375%
            </td>

            <td>
              NSE: 0.00183%
              <br />
              BSE: 0
            </td>

            <td>
              NSE: 0.03553% (on premium)
              <br />
              BSE: 0.0325% (on premium)
            </td>
          </tr>

          <tr>
            <td>GST</td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>
          </tr>
          <tr>
            <td>GST</td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>
          </tr>
          <tr>
            <td>GST</td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>

            <td>
              18% on (brokerage + SEBI charges
              + transaction charges)
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    <div className="container charges-section">
  <h2>Charges for account opening</h2>

  <table className="charges-table">
    <thead>
      <tr>
        <th>Type of account</th>
        <th>Charges</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Individual account</td>
        <td>
          <span className="free-badge">FREE</span>
        </td>
      </tr>

      <tr>
        <td>Minor account</td>
        <td>
          <span className="free-badge">FREE</span>
        </td>
      </tr>

      <tr>
        <td>NRI account</td>
        <td>₹ 500</td>
      </tr>

      <tr>
        <td>HUF account</td>
        <td>
          <span className="free-badge">FREE</span>
          <span className="charge-text"> (online) / ₹ 500 (offline)</span>
        </td>
      </tr>

      <tr>
        <td>Partnership, LLP, and Corporate accounts (offline only)</td>
        <td>₹ 500</td>
      </tr>
    </tbody>
  </table>
</div>

  </div>
</div>

        </div>
    </div>
  )
}

export default Hero