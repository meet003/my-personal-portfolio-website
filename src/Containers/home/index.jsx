import React from 'react';
import { Animate } from 'react-simple-animate'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import pdf from '../../images/MeetSavaliya_Resume.pdf'

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };
    return (
        <selection className="home" id="home">

            <div className='home__text-wrapper'>
                <h1>
                    Hello, I'm Meet Savaliya
                    <br />
                    Full Stack Developer.
                </h1>

            </div>

            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(600px)',
                }}
                end={{
                    transform: "translateX(0px)",
                }}

            >

                <div className="contact-me">
                    <div className='contact-me__buttons-wrapper'>

                        <button onClick={handleClick}>Hire me</button>

                        <a href={pdf} download>Download resume</a>

                    </div>
                    <div className='contact-me__socials-wrapper'>
                        <a href='https://www.linkedin.com/in/meet-savaliya-936085230/' target="_blank" rel="noreferrer"><FaLinkedin size={32} /> </a>
                        <a href='' target="_blank" rel="noreferrer"><FaFacebook size={32} /></a>
                        <a href='https://twitter.com/meet18__' target="_blank" rel="noreferrer"><FaTwitter size={32} /></a>
                        <a href='https://www.instagram.com/_meett18/?hl=en' target="_blank" rel="noreferrer" ><FaInstagram size={32} /></a>


                    </div>
                </div>

            </Animate>


        </selection>

    )
}

export default Home