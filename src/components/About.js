import '../css/About.css';
import React from 'react';
import { FaComputer } from 'react-icons/fa6';
import { FaMobileAlt, FaTruck, FaHeart } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import logo from '../media/DSC02332.jpg';


const AboutView = () => {
    return(
        <div className='AboutView'>
            <div className='AboutViewTexts'>
                <h1 className='AboutViewAbout'>About</h1>
                <div className='AboutInfo'>
                <FaComputer/>
                <h3>3rd year ICT engineering student</h3>
                </div>
                <div className='AboutInfo'>
                <FaMobileAlt/>
                <h3>Major in Mobile Solutions</h3>
                </div>
                <div className='AboutInfo'>
                <HiHome/>
                <h3>Born in Ostrobothnia</h3>
                </div>
                <div className='AboutInfo'>
                <FaTruck/>
                <h3>Moved to Helsinki in 2019</h3>
                </div>
                <div className='AboutInfo'>
                <FaHeart/>
                <h3>Bouldering, Climbing and Crypto</h3>
                </div>
            </div>
            <div className='AboutPictureOfMe'>
                <img className='PictureOfMe' src={logo} alt='logo' />
            </div>
        </div>
    );
};

export default AboutView;