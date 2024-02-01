import React from 'react'
import btee5 from '../../assets/imgs/avataaars.svg'
export default function Home() {
  return (
    <>
  <section id='Home'>
  <div className="container">
  <div className="hole-container">
  <div className="img-size">
  <img src={btee5} alt="" />
  </div>
  <div className="info">
  <h2 className='text-white'>START FRAMEWORK</h2>
  <div className="traverse">
  <div className='line'></div>
  <i className='fa-solid fa-star text-white'></i>
  <div className='line2'></div>
  </div>
  </div>
 
  <p className='text-white ms-5'>Graphic Artist - Web Designer - Illustrator  </p>
  </div>
  
  </div>
  </section>
    </>
  )
}
