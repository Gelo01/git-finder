import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
           
                
            <nav className="navbar sticky-top navbar-expand-lg bg-dark">
            <div className="container">
            <a className="navbar-brand text-light" href="/"><i className="fab fa-github"></i> REACT GITFINDER</a>
            
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="text-light fas fa-bars"></i>
          </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About<span className="sr-only"></span></a>
                    </li>
                     
                </ul>
              </div>
            </div>
            

          </nav>
         
        )
    }
}

export default Navbar;