import '../css/Navbar.css';
import React from 'react';

const Navbar = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <h1 className='name'>Konsta Perttilä</h1>
            <div className='NavButtons'>
                <button
                    className='ProfileButton'
                    onClick={'Go to profile'}>
                        Profile
                </button>
                <button
                    className='ProjectButton'
                    onClick={'Go to Projects'}>
                        Projects
                </button>
                <button
                    className='CvButton'
                    onClick={'Go to CV'}>
                        CV
                </button>
            </div>
        </div>
    );
};

export default Navbar;