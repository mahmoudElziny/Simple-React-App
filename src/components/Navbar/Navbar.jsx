import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    
    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        if(window.scrollY > 0) {
            navbar.classList.add("py-3");
            navbar.classList.remove("py-4");
        }else{
            navbar.classList.remove("py-3");
            navbar.classList.add("py-4");
        }
    })

    return <>
        <nav className="navbar navbar-expand-lg py-4 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-1 text-white active" to={"/simple-react-app"}>Start Framework</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold text-white me-3" to={'/simple-react-app/about'}>ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold text-white me-3" to={'/simple-react-app/portfolio'}>PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold text-white me-3" to={'/simple-react-app/contact'}>CONTACT</NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </>
}
