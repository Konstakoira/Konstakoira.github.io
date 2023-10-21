import '../css/Projects.css';
import React from 'react';
import ProjectData from '../data/ProjectData';



function ProjectsView() {
        const ProjectsViewComponents = ProjectData.map((ProjectData) => (
                    <div className='EachProject' key={ProjectData.id}>
                        <div className='DataTexts'>
                            <h2>{ProjectData.label}</h2>
                            <a className="GithubLink" href={ProjectData.github}>github</a>
                            <h3 className='ProjectsText'>{ProjectData.text}</h3>
                        </div>
                        <img className="ProjectImage" src={ProjectData.image}/>
                    </div>
        ))
        return (
            <div className='AllProjects'>
                {ProjectsViewComponents}
            </div>
            );
        
};
export default ProjectsView;