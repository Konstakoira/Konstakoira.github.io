import '../css/Navbar.css';
import React from 'react';
import ProfileView from './Profile';

const NavbarView = () => {
    return(
        <div className='NavBar' style={{display: 'flex', flexDirection: 'row'}}>
            <h1 className='name'>KP</h1>
            <div className='NavButtons'>
                <a
                    className='ProfileButton'
                    onClick={ProfileView}>
                        Profile
                </a>
                <a
                    className='ProjectButton'
                    onClick={'Go to Projects'}>
                        Projects
                </a>
                <a
                    className='CvButton'
                    onClick={'Go to CV'}>
                        CV
                </a>
            </div>
        </div>
    );
};

export default NavbarView;