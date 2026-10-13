import React from 'react'

function LeftSection({imageUrl,linkImage,productName,productDescription,LearnMore}) {
  return (
    <div className='container'>
        <div className='row align-items-center'>
          <div className='col-7'>
                <img src={imageUrl} style={{width: "80%"}}/>
            </div>
            <div className='col-5'>
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <a href=''>{LearnMore}</a>
                <div className="mt-3">
            <a href>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
            </div>
            
        </div>
    </div>
  )
}

export default LeftSection