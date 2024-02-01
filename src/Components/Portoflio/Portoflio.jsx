import React from 'react'
import img1 from '../../assets/imgs/poert1.png'
import img2 from '../../assets/imgs/port2.png'
import img3 from '../../assets/imgs/port3.png'

export default function Portoflio() {

 const handleImageClick = (e) => {
   let imgSrc = e.target.getAttribute("src");
   console.log(imgSrc);
 }

  


  return (
    <>
   <section id='porto'>
   <div className="container">
   <div className="innerinfo">
   <h2>PORTFOLIO COMPONENT</h2>
   <div className="traverse">
   <div className='line'></div>
   <i className='fa-solid fa-star'></i>
   <div className='line2'></div>
   </div>
   </div>
   <div className="row gx-5">
   <div className="col-md-4">
   <div className="box bg-danger"  >
   <img src={img1} className='w-100' alt=""   />
   <div className="layer" onClick={handleImageClick}>
   <i className='fa-solid fa-plus'></i>
     </div>
   </div>
   </div>
   <div className="col-md-4">
   <div className="box bg-danger">
   <img src={img2} className='w-100' alt="" />
   <div className="layer">
   <i className='fa-solid fa-plus'></i>
     </div>
   </div>
   </div>
   <div className="col-md-4">
   <div className="box bg-danger">
   <img src={img3} className='w-100' alt="" />
   <div className="layer">
   <i className='fa-solid fa-plus'></i>
     </div>
   </div>
   </div>
   <div className="col-md-4">
   <div className="box bg-danger">
   <img src={img1} className='w-100' alt="" />
   <div className="layer">
   <i className='fa-solid fa-plus'></i>
     </div>
   </div>
   </div>
   <div className="col-md-4">
   <div className="box bg-danger">
   <img src={img2} className='w-100' alt="" />
   <div className="layer">
   <i className='fa-solid fa-plus'></i>
     </div>
   </div>
   </div>
   <div className="col-md-4">
   <div className="box bg-danger">
   <img src={img3} className='w-100' alt="" />
   <div className="layer">
   <i className='fa-solid fa-plus'></i>
     </div>
   </div>
   </div>
   </div>
   </div>
   </section>
    </>
  )
}
