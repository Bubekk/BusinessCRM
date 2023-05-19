import "./styles/ProjectsPageStyle.scss";
import { useState } from "react";
import ProjectTile from "./UI/ProjectTile";
import ProjectCard from "./UI/ProjectCard";

function ProjectsPage(props) {
  const isActive = props.activeComponent === "ProjectsPage";

  const [showProject, setShowProject] = useState(false);
  const [tempPro, setTempPro] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const [projectTitle, setProjectTitle] = useState("Your Project");
  const [projectDescription, setProjectDescription] = useState("Set your description");
  const [projectClient, setProjectClient] = useState("Who's your client?");
  const [projectDate, setProjectDate] = useState("Date");

  //Adding Project Tile to page
  const handleAddClick = () => {
    const newTempPro = {
      id: tempPro.length + 1,
      title: projectTitle,
      description: projectDescription,
      client: projectClient,
      date: projectDate,
    };
    setTempPro([...tempPro, newTempPro]);
  };

  //Showing project card after clicking project tile
  const handleShowClick = () => {
    setShowProject(!showProject);
  };

  //set choosed project id
  const handleTileClick = (projectId) => {
    setSelectedProjectId(projectId);
    setShowProject(true);
  };

  //updating project detail from project card level
  const handleUpdateProject = () => {
    const updatedTempPro = tempPro.map((pro) => {
      if (pro.id === selectedProjectId) {
        return {
          ...pro,
          title: projectTitle,
          description: projectDescription,
          client: projectClient,
          date: projectDate,
        };
      }
      return pro;
    });
    setTempPro(updatedTempPro);
  };

  //rendering project tiles on page
  const renderedPro = tempPro.map((pro) => (
    <ProjectTile
      key={pro.id}
      id={pro.id}
      title={pro.title}
      projectClick={() => handleTileClick(pro.id)}
    />
  ));

  return (
    <div className="projectspage" style={{ display: isActive ? "none" : "flex" }}>
      <ProjectCard
        style={{
          transform: showProject ? "translateX(0px)" : "translateX(-400px)",
        }}
        close={handleShowClick}
        title={projectTitle}
        description={projectDescription}
        client={projectClient}
        date={projectDate}
        updateProject={handleUpdateProject}
        setProjectTitle={setProjectTitle}
        setProjectDescription={setProjectDescription}
        setProjectClient={setProjectClient}
        setProjectDate={setProjectDate}
      />
      {renderedPro}
      <button className="projectpage-addbtn" onClick={handleAddClick}>
        Add Project
      </button>
    </div>
  );
}

export default ProjectsPage;
