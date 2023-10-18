import React, {useRef, useState} from 'react';
import "./css/FrontPage.css";
import NavbarView from './components/Navbar';
import ProfileView from "./components/Profile";
import AboutView from "./components/About";
import ProjectsView from "./components/Projects";
import FooterView from "./components/Footer";
import CvView from "./components/Cv";

const FrontPage = () => {
    const profileRef = useRef(null);
    const projectRef = useRef(null);
    const cvRef = useRef(null);

    const handleProfile = () => {
        profileRef.current.scrollIntoView({ behavior: 'smooth'});
    };
    const handleProjects = () => {
        projectRef.current.scrollIntoView({ behavior: 'smooth'});
    };
    const handleCV = () => {
        cvRef.current.scrollIntoView({ behavior: 'smooth'});
    };

    const [isDragging, setIsDragging] = useState(false);
    const [isDragging2, setIsDragging2] = useState(false);
    const [isDragging3, setIsDragging3] = useState(false);


    return (
            <div className="FrontAsWhole">
                <div className='NavBar' style={{display: 'flex', flexDirection: 'row'}}>
                <h1 className='name'>KP</h1>
                <div className='NavButtons'>
                    <a
                        style={{background: isDragging ? '#2B2B33' : '#14141D', transition: 'background 0.3s'}}
                        onMouseEnter={() => setIsDragging(true)}
                        onMouseLeave={() => setIsDragging(false)}
                        className='ProfileButton'
                        onClick={handleProfile}>
                            About
                    </a>
                    <a
                        style={{background: isDragging2 ? '#2B2B33' : '#14141D', transition: 'background 0.3s'}}
                        onMouseEnter={() => setIsDragging2(true)}
                        onMouseLeave={() => setIsDragging2(false)}
                        className='ProjectButton'
                        onClick={handleProjects}>
                            Projects
                    </a>
                    <a
                        style={{background: isDragging3 ? '#2B2B33' : '#14141D', transition: 'background 0.3s'}}
                        onMouseEnter={() => setIsDragging3(true)}
                        onMouseLeave={() => setIsDragging3(false)}
                        className='CvButton'
                        onClick={handleCV}>
                            CV
                    </a>
                </div>
            </div>
            <div className="FrontProfile">
                <ProfileView/>
            </div>
            <div ref={profileRef} className="FrontAbout">
                <AboutView/>
            </div>
            <div ref={projectRef} className="FrontProjects">
                <ProjectsView/>
            </div>
            <div ref={cvRef} className="FrontCv">
                <CvView/>
            </div>
            <div className="FrontFooter">
                <FooterView/>
            </div>
            
        </div>
    );
};

export default FrontPage;