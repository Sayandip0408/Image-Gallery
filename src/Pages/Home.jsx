import React from 'react';
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const visitGallery = () => {
        navigate("/gallery");
    }
    return (
        <>
            <div className='homepage'>
                <p className='my-3'>- GALLERY -</p>
                <h1 className='my-5'>Adding Moments of Life</h1>
                <button className='my-3 visit' onClick={visitGallery}>Visit <span></span><span></span><span></span><span></span></button>
            </div>
            <footer className='footer'>
                <h5><AiOutlineCopyrightCircle /> 2023 SayanDip IND, Inc. All Rights Reserved.</h5>
            </footer>
        </>
    )
}

export default Home