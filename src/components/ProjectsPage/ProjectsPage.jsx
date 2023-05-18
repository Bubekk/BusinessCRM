import "./styles/ProjectsPageStyle.scss";
import { useState } from "react";
import ProjectTile from "./UI/ProjectTile";
import ProjectCard from "./UI/ProjectCard";

// function ProjectsPage(props) {
//   //Transmits which component schould be active and displayed on page
//   const isActive = props.activeComponent === "ProjectsPage";

//   const [showProject, setShowProject] = useState(false);
//   const [tempPro, setTempPro] = useState([]);

//   const [id, setId] = useState(0);

//   const handleAddClick = () => {
//     const newTempPro = {
//       id: id,
//       projectTitle: "Your Project",
//       projectDescription: "Set your description",
//       projectClient: "Who's your client?",
//       projectDate: "Date",
//     };
//     setTempPro([...tempPro, newTempPro]);
//     setId(id + 1);
//   };

//   const handleShowClick = () => {
//     setShowProject(!showProject);
//   };

//   const handleTileClick = (projectId) => {
//     setShowProject(true);
//     const project = tempPro.find((pro) => pro.id === projectId);
//     if (project) {
//       setTempPro((prevTempPro) =>
//         prevTempPro.map((pro) =>
//           pro.id === projectId ? { ...pro, isActive: true } : { ...pro, isActive: false }
//         )
//       );
//     }
//   };

//   const handleUpdateProject = (projectId, updatedProject) => {
//     setTempPro((prevTempPro) =>
//       prevTempPro.map((pro) =>
//         pro.id === projectId ? { ...pro, ...updatedProject } : pro
//       )
//     );
//   };

//   const renderedPro = tempPro.map((pro) => (
//     <ProjectTile
//       key={pro.id}
//       id={pro.id}
//       title={pro.projectTitle}
//       description={pro.projectDescription}
//       client={pro.projectClient}
//       projectClick={() => handleTileClick(pro.id)}
//       isActive={pro.isActive}
//     />
//   ));

//   return (
//     <div className="projectspage" style={{ display: isActive ? "none" : "flex" }}>
//       <ProjectCard
//         style={{
//           transform: showProject ? "translateX(0px)" : "translateX(-400px)",
//         }}
//         close={handleShowClick}
//         project={tempPro.find((pro) => pro.isActive)}
//         updateProject={handleUpdateProject}
//       />
//       {renderedPro}
//       <button className="projectpage-addbtn" onClick={handleAddClick}>
//         Add Project
//       </button>
//     </div>
//   );
// }

function ProjectsPage(props) {
  const isActive = props.activeComponent === "ProjectsPage";

  const [showProject, setShowProject] = useState(false);
  const [tempPro, setTempPro] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const [projectTitle, setProjectTitle] = useState("Your Project");
  const [projectDescription, setProjectDescription] = useState("Set your description");
  const [projectClient, setProjectClient] = useState("Who's your client?");
  const [projectDate, setProjectDate] = useState("Date");

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

  const handleShowClick = () => {
    setShowProject(!showProject);
  };

  const handleTileClick = (projectId) => {
    setSelectedProjectId(projectId);
    setShowProject(true);
  };

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
