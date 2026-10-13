import React from 'react'

function Footer() {
  return (
    <>  <hr style={{width : "100%", marginLeft  : "0%"}}></hr>
      <div className='container  my-5'>
         
        <div className='row'>
          <div className='col-3'>
         <img style={{width : "50%"}} className='mb-3' src='/media/images/logo.svg' />
         <p>© 2010 - 2026, Zerodha Broking Ltd.
           All rights reserved.</p>
         <div className='f-icons '>
         <a href=''><i class="fa-brands fa-instagram"></i></a>
         <a href=''><i class="fa-brands fa-square-facebook"></i></a>
         <a href=''><i class="fa-brands fa-x-twitter"></i></a>
         <a href=''><i class="fa-brands fa-linkedin-in"></i></a>
         </div>
         <hr/>
         <div className='f-icons'>
           <a href=''><i class="fa-brands fa-youtube"></i></a>
           <a href=''><i class="fa-brands fa-whatsapp"></i></a>
           <a href=''><i class="fa-brands fa-telegram"></i></a>
         </div>
        <div className='mt-4'>
           <img src='/media/images/googlePlayBadge.svg'/>
         <img src='/media/images/appStoreBadge.svg'/>
        </div>

            </div>

          <div className='col-9 ' style={{paddingLeft : "50px"}}>
            <div className='row'>
             <div className="col-3 footer-links">
  <p>Account</p>

  <a href="#">Open demat account</a>
  <a href="#">Minor demat account</a>
  <a href="#">NRI demat account</a>
  <a href="#">HUF demat account</a>
  <a href="#">Commodity</a>
  <a href="#">MTF</a>
  <a href="#">Dematerialisation</a>
  <a href="#">Fund transfer</a>
</div>

<div className="col-3 footer-links">
  <p>Support</p>

  <a href="#">Contact us</a>
  <a href="#">Support portal</a>
  <a href="#">How to file a complaint?</a>
  <a href="#">Status of your complaints</a>
  <a href="#">Bulletin</a>
  <a href="#">Circular</a>
  <a href="#">Z-Connect blog</a>
  <a href="#">Downloads</a>
</div>

<div className="col-3 footer-links">
  <p>Company</p>

  <a href="#">Philosophy</a>
  <a href="#">Press & media</a>
  <a href="#">Careers</a>
  <a href="#">Zerodha Cares (CSR)</a>
  <a href="#">Zerodha.tech</a>
  <a href="#">Open source</a>
  <a href="#">Referral program</a>
  <a href="#">Upcoming IPOs</a>
</div>

<div className="col-3 mb-3 footer-links">
  <p>Quick links</p>

  <a href="#">Upcoming IPOs</a>
  <a href="#">Brokerage charges</a>
  <a href="#">Economic calendar</a>
  <a href="#">Calculators</a>
  <a href="#">Markets</a>
  <a href="#">Market holidays</a>
  <a href="#">Sectors</a>
  <a href="#">Gift Nifty</a>
</div>
            </div>
          </div>
          <div className='mt-5 text-muted ' style={{fontSize : "0.75rem"}}>
            <p>
             Zerodha Broking Limited: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Limited – SEBI Registration no.: IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on SCORES portal & SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances
            </p>
            <p>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism | Project Jagrook by SEBI

Investments in securities market are subject to market risks; read all the related documents carefully before investing.

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              India's largest broker based on networth as per NSE. NSE broker factsheet

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
            </p>
            <p>
              *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.

Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
            </p>
          </div>
        </div>
        
      </div>
      </>
    
  )
}

export default Footer
