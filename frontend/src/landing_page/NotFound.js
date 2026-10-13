import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
       <div className='container mt-5 '>
      <div className='row text-center '>
          
          
          <p >404 Page not Found</p>
           <Link to="/"> <button className='btn btn-primary px-5 fs-5 mb-5'>Home</button> </Link>
           
      </div>
         
    </div>
    <hr style={{width : "100%", marginLeft  : "0%"}}></hr>
    </>
       
  )
}

export default NotFound