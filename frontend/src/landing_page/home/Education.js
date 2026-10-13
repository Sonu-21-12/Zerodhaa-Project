import React from 'react'

function Education() {
  return (
     <div className='container  '>
      <div className='row   mt-5'>
        <div className='col-6 '>
        <img style={{width : "70%"}} src='/media/images/education.svg' alt='Education Image'/>
        </div>
        <div className='col-6 mt-4   '>
          <h3 className=''>Free and open market education</h3>
          <p>Versity, the largest online stock market education book in the world covering everything from the basics to advance trading.</p>
         <a href='' style={{textDecoration : "none"}}>Versity<i class="fa-solid fa-arrow-right-long"></i></a>
         <p  className='mt-4 '> the largest online stock market education book in the world covering everything from the basics</p>
                <a className='mb-5' href='' style={{textDecoration : "none"}}>Trading Q&A<i class="fa-solid fa-arrow-right-long"></i></a>

        </div>
      </div>
      
    </div>
  )
}

export default Education