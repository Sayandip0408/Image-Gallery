import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assests/SA_Logo.png";
import { SlMenu } from "react-icons/sl";
import { Button } from '@mui/material';

const NavBar = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }
    const goToGallery = () => {
        navigate("/gallery");
    }
    const goToPortfolio = () => {
        window.location.href = "https://sayandip2.netlify.app/"
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top my-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand text-warning navBrand" to="/"><img src={logo} alt="logo" /> SayanDip's Gallery</Link>
                <button className="navbar-toggler border-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <SlMenu className='text-warning' />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        </li>
                    </ul>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Button className='navlink' onClick={goToHome}>Home</Button>
                            <Button className='navlink' onClick={goToGallery}>Gallery</Button>
                            <Button className='navlink' onClick={goToPortfolio}>Portfolio</Button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;