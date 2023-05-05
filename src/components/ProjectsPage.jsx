import "../styles/ProjectsPageStyle.scss";

function ProjectsPage(props) {
  
  //Transmits which component schould be active and displayed on page
    const isActive = props.activeComponent === 'ProjectsPage';
  
    return (
    <div className="projectspage" style={{ display: isActive ? 'none' : 'flex' }}>
      
      </div>
    );
  }
  
  export default ProjectsPage;