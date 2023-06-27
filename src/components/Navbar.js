import React, { Component } from 'react'
// import { Link} from 'react-router-dom'

// export class Navbar extends Component {
  const Navbar = ()=>{
  // render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">World</a>
            <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-hrefggler-icon"></span>
            </buthrefn>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a></li>
            <li className="nav-item dropdown"><a className='nav-link' href ="/About">About</a></li>
            <li className="nav-item dropdown"><a className='nav-link' href="/Business">Business</a></li>
            <li className="nav-item dropdown"><a className='nav-link' href="/entertainment">entertainment</a></li>
            <li className="nav-item dropdown"><a className='nav-link' href="/general">general</a></li>
            <li className="nav-item dropdown"><a className='nav-link' href="/health">health</a></li>
            <li className="nav-item dropdown"><a className='nav-link' href="/science">science</a></li>
            <li className="nav-item dropdown"><a className='nav-link' href="/sport">sport</a></li>
            <li className="nav-item dropdown"><a className='nav-link' href="/technology">technology</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
  }


export default Navbar
