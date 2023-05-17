import "../styles/EmployeeTileStyle.scss";

function EmployeeTile(props) {
  return (
    <div className="employeecontainer">
      <div className="employeecard">
        <div className="employeecard-header">
          <img src={`./images/${props.avatar}.jpg`} alt="employee photo" />
          <div className="employeecard-header-text">
            <h1> {props.name} </h1>
            <p className=""> {props.position} </p>
          </div>
        </div>
        <div className="employeecard-content">
          <p> {props.actualProject} </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTile;
