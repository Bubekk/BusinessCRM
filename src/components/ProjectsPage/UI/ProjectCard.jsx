import "../styles/ProjectCardStyle.scss";

function ProjectCard(props) {
  const { project, close, updateProject } = props;

  const handleExitClick = () => {
    close();
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
  
    switch (field) {
      case "title":
        props.setProjectTitle(value);
        break;
      case "projectDescription":
        props.setProjectDescription(value);
        break;
      case "projectClient":
        props.setProjectClient(value);
        break;
      case "projectDate":
        props.setProjectDate(value);
        break;
      default:
        break;
    }
  };

  const handleSaveClick = () => {
    props.updateProject(props.id, {
      title: props.projectTitle,
      description: props.projectDescription,
      client: props.projectClient,
      date: props.projectDate,
    });
  };

  return (
    <div className="projectcard" style={props.style}>
      <div className="projectcard-header">
        <textarea className="projectcard-header-title"
          value={props.title}
          onChange={handleChange}
          name="title"
          rows={1}
          cols={30}
        />
        <button className="projectcard-header-exitbtn" onClick={handleExitClick}>
          X
        </button>
      </div>
      <div className="projectcard-content">
        <div className="projectcard-content-details">
          <div className="projectcard-content-details-description">
            <textarea className="projectcard-content-details-description-textarea"
              value={props.projectDescription}
              onChange={handleChange}
              name="projectDescription"
              rows={1}
              cols={30}
            />
            <input className="projectcard-content-details-description-date"
              type="date"
              value={props.projectDate}
              onChange={handleChange}
              name="projectDate"
            />
            <input type="text" className="projectcard-content-details-description-client"
              value={props.projectClient}
              onChange={handleChange}
              name="projectClient"
            />
          </div>
          <div className="projectcard-content-details-employee">
            <p>employee 1</p>
            <p>employee 2</p>
            <p>employee 3</p>
            <p>employee 4</p>
          </div>
        </div>
        <div className="projectcard-content-bucketlist">
          <h2>To Do</h2>
          <ul>
            <li>
              <input type="checkbox" name="test bucket 1" id="test1" />
              <label htmlFor="test1">test bucket 1</label>
            </li>
            <li>
              <input type="checkbox" name="test bucket 2" id="test2" />
              <label htmlFor="test2">test bucket 2</label>
            </li>
            <li>
              <input type="checkbox" name="test bucket 3" id="test3" />
              <label htmlFor="test3">test bucket 3</label>
            </li>
          </ul>
        </div>
        <div className="projectcard-content-files">
          <div className="tempphoto">
            <div></div>
            <sub>test photo 1</sub>
          </div>
          <div className="tempphoto">
            <div></div>
            <sub>test photo 2</sub>
          </div>
          <div className="tempphoto">
            <div></div>
            <sub>test photo 3</sub>
          </div>
        </div>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}

export default ProjectCard;