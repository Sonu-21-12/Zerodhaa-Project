import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
   <>
   <nav  className="navbar navbar-expand-lg  border-bottom ">
  <div className="container p-1">
    <Link className="navbar-brand" to="/" onClick={closeMenu}>
      <img style={{width : "20%", marginLeft : "30px"}} className='' src='/media/images/logo.svg' />
    </Link>

    <button
      className="navbar-toggler responsive-navbar-toggler"
      type="button"
      aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isMenuOpen}
      aria-controls="navbarSupportedContent"
      onClick={() => setIsMenuOpen((open) => !open)}
    >
      <i className="fa-solid fa-bars" aria-hidden="true"></i>
    </button>
    
    <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarSupportedContent">
     <form>
       <ul className="navbar-nav ms-auto mb-2  mb-lg-0  "  >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup" onClick={closeMenu}>Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Product" onClick={closeMenu}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/pricing" onClick={closeMenu}>Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/support" onClick={closeMenu}>Support</Link>
        </li>
        <li className="nav-item desktop-menu-icon d-none d-lg-block">
          <a  className="nav-link fs-5" href="#"><i class="fa-solid fa-bars"></i></a>
        </li>
       
        </ul> 
     </form>
    
    </div>
  </div>
  
</nav>
   </>
  )
}

export default Navbar
