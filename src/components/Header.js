import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tuxDevil from '../assets/tux-devil.webp';

const Header = () => {

    return (
        <header id="header">
            <section className="w60">
                <img srcSet={tuxDevil} alt="" />
                <blockquote><b>parshuram kalunkhe</b> - <span>Software Engineer.</span></blockquote>
            </section>
            <section id="navbar">
                <nav>
                    <Link to='/'>
                        <span>home</span>
                    </Link>
                    /
                    <Link to='/about'>
                        <span>about</span>
                    </Link>
                    /
                    <Link to='/project'>
                        <span>project</span>
                    </Link>
                    /
                    <Link to='/contact'>
                        <span>contact</span>
                    </Link>
                    {/* <a href="mailto: parshuramkalunkhe@gmail.com" target="_blank" rel="noopener noreferrer">contact</a> */}
                </nav>
            </section>
        </header>
    );
}

export default Header;
