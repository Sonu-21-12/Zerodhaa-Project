import React from 'react'

function Hero() {
  return (
  <>
    <div className="bg-light py-4">
        <div className="container-fluid px-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className=" fw-semibold text-muted mb-0">
              Support Portal
            </h2>

            <button className="btn btn-primary px-4 py-2">
              My tickets
            </button>
          </div>

          {/* Search */}
          <div className="input-group bg-white border rounded">
            <span style={{fontSize:"10px"}} className="input-group-text bg-white border-0 fs-5">
              <i style={{fontSize:"20px"}} className="fa-solid fa-magnifying-glass "></i>
            </span>

            <input
              type="text"
              className="form-control border-0 fs-5 py-3"
              placeholder="Eg: How do I open my account, How do i activate F&O..."
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid px-4 py-5 mt-4">
        <div className="row g-5">

          {/* Left Side */}
          <div className="col-lg-8">

            <SupportBox
              icon="fa-plus"
              title="Account Opening"
            />

            <SupportBox
              icon="fa-user"
              title="Your Zerodha Account"
            />

            <SupportBox
              icon="fa-ticket"
              title="Kite"
            />

            <SupportBox
              icon="fa-indian-rupee-sign"
              title="Funds"
            />

            <SupportBox
              icon="fa-circle-dot"
              title="Console"
            />

            <SupportBox
              icon="fa-circle-notch"
              title="Coin"
            />

          </div>

          {/* Right Side */}
          <div className="col-lg-4">

            {/* Announcement */}
            <div className="bg-warning-subtle border-start border-warning border-5 p-4 mb-4">
              <ul className="mb-0 ps-3">
                <li className="mb-3">
                  <a href="#" className="text-primary fs-5">
                    Revision in Market Lot of Derivative Contracts on Indices
                    from October 30, 2026
                  </a>
                </li>

                <li>
                  <a href="#" className="text-primary fs-5">
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="border">

              <div className="bg-light p-4 border-bottom">
                <h4 className="mb-0">Quick links</h4>
              </div>

              <a href="#" className="d-block p-4 border-bottom text-primary fs-5">
                1. Track account opening
              </a>

              <a href="#" className="d-block p-4 border-bottom text-primary fs-5">
                2. Track segment activation
              </a>

              <a href="#" className="d-block p-4 border-bottom text-primary fs-5">
                3. Intraday margins
              </a>

              <a href="#" className="d-block p-4 border-bottom text-primary fs-5">
                4. Kite user manual
              </a>

              <a href="#" className="d-block p-4 text-primary fs-5">
                5. Learn how to create a ticket
              </a>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}


// Reusable Support Box
function SupportBox({ icon, title }) {
  return (
    <div className="d-flex border mb-4">

      {/* Icon */}
      <div
        className="bg-light d-flex justify-content-center align-items-center"
        style={{ width: "100px", minHeight: "70px" }}
      >
        <i className={`fa-solid ${icon} text-primary fs-6`}></i>
      </div>

      {/* Title */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-between px-4">
        <h3 className=" fs-5">{title}</h3>

        <i className="fa-solid fa-chevron-down text-primary"></i>
      </div>

    </div>
  
  )
}

export default Hero