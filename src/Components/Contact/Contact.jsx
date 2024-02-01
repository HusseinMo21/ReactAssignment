import React from 'react'

export default function Contact() {
  return (
    <>
   <section id='contact'>
   <div className="container">
   <div className="innerinfo">
   <h2>CONATCT SECTION</h2>
   <div className="traverse">
   <div className='line'></div>
   <i className='fa-solid fa-star'></i>
   <div className='line2'></div>
   </div>
   </div>
  <div className="inputs">
<div>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingInput" placeholder="" />
    <label htmlFor="floatingInput" className='text-muted'>userName</label>
  </div>
  <div className="form-floating mb-3">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
    <label htmlFor="floatingPassword" className='text-muted'>userPassword</label>
  </div>
  <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
  <label htmlFor="floatingInput" className='text-muted'>userEmail</label>
</div>
<div className="form-floating mb-3">
<input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
<label htmlFor="floatingInput" className='text-muted'>userAge</label>
</div>
</div>


  
  
  </div>
  <button className="btn btn-success">send Massege</button>
   </div>
   </section>
    </>
  )
}
