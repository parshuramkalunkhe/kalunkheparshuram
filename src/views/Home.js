import React, { useState } from 'react';
import resume from '../assets/resume.pdf';
import Guts from '../assets/guts.jpg';
import Throfinn from '../assets/thorfinn.png';
import SkullKnight from '../assets/skullknight.jpg';
import yayyHappy from '../assets/yayy-happy.gif';

const Home = () => {

    const date = new Date();
    const today = date.toDateString();
    const [showPopup, setShowPopup] = useState(false);
    const [emailPopup, setEmailPopup] = useState(false);

    const handleDownload = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    }

    const handleEmail = () => {
        const link = "kalunkheparshuram@gmail.com";
        navigator.clipboard.writeText(link)
            .then(() => {
                setEmailPopup(true);
            })
            .catch((error) => {
                console.error('Failed to copy link:', error);
            });
        setTimeout(() => {
            setEmailPopup(false);
        }, 2000);
    };

    return (
        <section id="home">
            <blockquote><i>Welcome to my place.</i></blockquote>
            <div className="flex-box">
                <div id="info">
                    <div>
                        <p>Hi There! I'm Parshuram Kalunkhe.</p>
                        <p>Graduated in Bachelor of Science in Information Technology.</p>
                        <a href={resume} download="resume.pdf" onClick={handleDownload}>Download Resume</a>
                        <a href="#kalunkheparshuram@gmail.com" onClick={handleEmail} id='email' > Get in touch </a>
                        {showPopup && (
                            <div className="popup">
                                <p>Download started.</p>
                            </div>
                        )}
                        {emailPopup && (
                            <div className="popup">
                                <p>Copied email sucessfully.</p>
                            </div>
                        )}
                    </div>
                    <blockquote>
                        A bug is never just a mistake. <br />
                        It represents something bigger.  <br />
                        An error of thinking <br />
                        that makes you who you are.
                    </blockquote>
                    <div>
                        <p><b>About this site</b></p>
                        <ul style={{ margin: "0", paddingLeft: "1.5rem" }}>
                            <li>This site is still under construction.</li>
                            <li>Built with reactjs</li>
                            <li>uhmhmm</li>
                        </ul>
                    </div>
                    <img src={yayyHappy} alt="yayy" className='w-50 p-3'/>
                </div>

                <div id="chatbox">
                    <b>chatbox</b> / <i><u>{today}</u></i>
                    <iframe
                        title='chatbox'
                        className="cbox"
                        name="cbox"
                        src="https://my.cbox.ws/parshuram-chatbox"
                        allowtransparency="yes"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="auto"
                        loading="lazy"
                        frameBorder="0">
                    </iframe>
                </div>
            </div>
            <div className='grid'>
                <div className='g'>
                    <img srcSet={Guts} alt='.'  />
                    <p>" Could you settle for a smile, and a fond farewell? "</p>
                </div>
                <div className='t'>
                    <img srcSet={Throfinn} alt='.'/>
                    <p>" I want that which surpasses even the merciful release of death. "</p>
                </div>
                <div className='s'>
                    <img srcSet={SkullKnight} alt='.' />
                    <p>" You bear witness to the end of your journey "</p>
                </div>
            </div>
        </section>
    )
}

export default Home;