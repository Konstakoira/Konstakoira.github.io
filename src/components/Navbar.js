import '../css/Navbar.css';
import React from 'react';

const Navbar = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Konsta Perttilä</h1>
            <button
                className='ProfileButton'
                onClick={'Go to profile'}>
                    Profile
            </button>
            <button
                className='ProfileButton'
                onClick={'Go to Projects'}>
                    Projects
            </button>
            <button
                className='ProfileButton'
                onClick={'Go to CV'}>
                    CV
            </button>
        </div>
    );
};

export default Navbar;