import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
   <nav  className="navbar navbar-expand-lg  border-bottom ">
  <div className="container p-1">
    <Link className="navbar-brand" to="/">
      <img style={{width : "20%", marginLeft : "30px"}} className='' src='/media/images/logo.svg' />
    </Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <form>
       <ul className="navbar-nav ms-auto mb-2  mb-lg-0  "  >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Product">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/support">Support</Link>
        </li>
        <li className="nav-item">
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