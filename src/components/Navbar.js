
import PropTypes from 'prop-types'

import React from 'react'
 import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (

        
    <nav className={`navbar navbar-expand-lg navbar-${props .mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.fun}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
  

  <div className={`form-check form-switch text-${props.mode==='light'?"dark":"light"}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Light Mode</label>
</div>
</nav>

 

    )
}

Navbar.prototype={title:PropTypes.string.isRequired ,   fun:PropTypes.string}

// Navbar.defaultProps ={
//     title:"mera syam"
// }