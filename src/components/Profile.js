import '../css/Profile.css';
import React from 'react';

const ProfileView = () => {
    return(
        <div className='ProfileView'>
            <h3 className='ProfileFirstText'>Hello, my name is</h3>
            <h1 className='ProfileSecondText'>Konsta Perttilä</h1>
            <h2 className='ProfileThirdText'>I am currently studying ICT Engineering in Metropolia University of Applied Sciences.</h2>
        </div>
    );
};

export default ProfileView;