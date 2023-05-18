import '../styles/ProjectTileStyle.scss';

function ProjectTile(props) {

    const handleClick = () => {
        props.projectClick();
    }

    return (
        <div className='projecttile' onClick={handleClick}>
            <p> {props.title} </p>
        </div>
    )
}

export default ProjectTile;