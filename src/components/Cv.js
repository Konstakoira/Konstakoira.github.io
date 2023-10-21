import React from "react";
import CV from '../media/Cv_perttilä.png'
import "../css/Cv.css"

const CvView = () => {
    return(
        <div className='CvView'>
            <img className="CV" src={CV}/>
        </div>
    );
};

export default CvView;