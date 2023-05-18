import { useState } from 'react';
import '../styles/ProjectTileStyle.scss';

function ProjectTile(props) {

    const [projectTitle, setProjectTitle] = useState("Project Title");
    const [checked, setChecked] = useState(false);

    return (
        <div className='project'>
            <div className="project-header">
                <h1> {props.title} </h1>
            </div>
            <div className="project-content">
                <p> {props.description} </p>
                <ul>
                    {props.bucket.map((buc) => (
                        <li key={buc.task}><input type='checkbox' checked={buc.checked}/> {buc.task}</li>
                    ))}
                </ul>
                <div> {props.files} </div>
            </div>
        </div>
    )
}

export default ProjectTile;