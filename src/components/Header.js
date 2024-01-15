import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tuxDevil from '../assets/tux-devil.webp';

const Header = () => {

    const [mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        padding: "4px",
        transition: "ease-in-out 1s",
    })
    const handlClick = () => {
        if (mystyle.color === "black") {
            setMystyle({
                color: "white",
                backgroundColor: "black",
                padding: "4px",
                transition: "ease-in-out 1s",
            })
        } else {
            setMystyle({
                color: 'black',
                backgroundColor: 'transparent',
                padding: "4px",
                transition: "ease-in-out 1s",
            })
        }
    }

    return (
        <header id="header">
            <section className="w60">
                <img srcSet={tuxDevil} alt="" onClick={handlClick} />
                <blockquote><b>parshuram kalunkhe</b> - <span style={mystyle}>Software Engineer.</span></blockquote>
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
