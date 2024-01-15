import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer>
            <div>
                <p> © {props.year} by Parshuram kalunkhe. </p>
                {/* <p> Content available under a Creative Commons license. </p> */}
            </div>
            <div className='links'>
                <Link to='/cookies'>
                    Cookies
                </Link>
                <Link to='/aboutthissite'>
                    About this site
                </Link>
            </div>
        </footer>
    )
}

export default Footer;