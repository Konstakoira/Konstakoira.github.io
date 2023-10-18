import '../css/Footer.css';
import React from 'react';
import { FaDog, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const FooterView = () => {
    return (
        <div className='FooterViewWhole'>
            <a href="https://www.instagram.com/the.golden.nemo/"><FaDog/></a>
            <a href="https://www.instagram.com/konstaperttila/"><FiInstagram/></a>
            <a href="https://www.linkedin.com/in/konsta-perttil%C3%A4-a1878b153/"><FaLinkedin/></a>
            <a href='https://github.com/Konstakoira'><FaGithub/></a>
        </div>
    );
};

export default FooterView;