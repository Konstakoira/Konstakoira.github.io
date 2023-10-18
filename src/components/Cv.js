import React from "react";
import CV from '../media/CV_Konsta_Perttilä.png'
import "../css/Cv.css"

const CvView = () => {
    return(
        <div className='CvView'>
            <img className="CV" src={CV}/>
        </div>
    );
};

export default CvView;