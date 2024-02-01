import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-dark p-3" data-bs-theme="dark">
  <div className="container">
    <Link to={""} className="navbar-brand fs-2">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item fs-5 p-2">
          <Link to={"about"} className="nav-link active" aria-current="page" href="#">About</Link>
        </li>
        <li className="nav-item fs-5 p-2">
          <Link to={"portoflio"} className="nav-link">Portoflio</Link>
        </li>
        <li className="nav-item fs-5 p-2">
          <Link to={"contact"} className="nav-link">Contact</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>

    </>
  )
}
