import "./styles/ProjectsPageStyle.scss";
import { useState, useContext } from "react";
import ProjectTile from "./UI/ProjectTile";

function ProjectsPage(props) {
  //Transmits which component schould be active and displayed on page
  const isActive = props.activeComponent === "ProjectsPage";

  //Showing and hiding form after clicking button
  const [showForm, setShowForm] = useState(false);

  const [tempProjects, setTempProjects] = useState([]);

  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bucketList, setBucketList] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleBucketListChange = (index) => {
    const updatedBucketList = [...bucketList];
    updatedBucketList[index].checked = !updatedBucketList[index].checked;
    setBucketList(updatedBucketList);
  };

  const handleAddBucketItem = () => {
    setBucketList([...bucketList, { task: "", checked: false }]);
  };

  const handleBucketItemChange = (index, value) => {
    const updatedBucketList = [...bucketList];
    updatedBucketList[index].task = value;
    setBucketList(updatedBucketList);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wyślij dane do serwera lub wykonaj inne operacje
    console.log({
      id,
      title,
      description,
      bucketList,
      selectedFiles,
    });
    const newProject = {
      id: id,
      title: title,
      description: description,
      bucket: bucketList,
      files: selectedFiles,
    };
    setTempProjects([...tempProjects, newProject]);
    // Zresetuj formularz
    setId(id + 1);
    setTitle("");
    setDescription("");
    setBucketList([]);
    setSelectedFiles([]);
  };

  const renderedProjects = tempProjects.map((project) => (
    <ProjectTile
      key={project.id}
      title={project.title}
      description={project.description}
      bucket={project.bucket}
      files={project.files}
    />
  ));

  return (
    <div
      className="projectspage"
      style={{ display: isActive ? "none" : "flex" }}
    >
      <div className="projectspage-formcontainer">
        <h1>Dodaj nowy projekt</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Tytuł:
            <input type="text" value={title} onChange={handleTitleChange} />
          </label>
          <label>
            Opis:
            <textarea value={description} onChange={handleDescriptionChange} />
          </label>
          <label>
            Bucket List:
            {bucketList.map((item, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleBucketListChange(index)}
                />
                <input
                  type="text"
                  value={item.task}
                  onChange={(e) =>
                    handleBucketItemChange(index, e.target.value)
                  }
                />
              </div>
            ))}
            <button type="button" onClick={handleAddBucketItem}>
              Dodaj element do listy
            </button>
          </label>
          <label>
            Zdjęcia i pliki:
            <input type="file" multiple onChange={handleFileChange} />
          </label>
          <button type="submit">Dodaj projekt</button>
        </form>
      </div>
      {renderedProjects}
    </div>
  );
}

export default ProjectsPage;
