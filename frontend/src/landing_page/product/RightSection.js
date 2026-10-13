import React from 'react'

function RightSection({imageUrl,productName,productDescription,LearnMore}) {
  return (
    <div className='container'>
        <div className='row align-items-center '>
            <div className='col-5'>
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <a href=''>LearnMore</a>
            </div>
            <div className='col-7'>
                <img src={imageUrl} style={{width: "90%"}}/>
            </div>
        </div>
    </div>
    
  )
}

export default RightSection