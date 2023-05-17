import "../styles/DepartmentTileStyle.scss";
import { DataContext } from "../../DataFetch";
import { useContext } from "react";
import EmployeeTile from "./EmployeeTile";

function DepartmentTile(props) {
  //Importing data from DataFetch file
  const { employees } = useContext(DataContext);

  //Sorting employees by their departments and returning it on page in desired department card
  const sortEmployees = () => {
    const filteredEmployees = employees.filter(
      (employee) => employee.departament === props.name
    );
    return filteredEmployees.map((employee) => (
      <EmployeeTile
        key={employee.id}
        name={employee.name}
        position={employee.Position}
        avatar={employee.avatar}
        actualProject={employee.actualProject}
        departament={employee.departament}
      />
    ));
  };

  return (
    <div className="departmentcontainer">
      <div className="departmenttile">
        <div className="departmenttile-header">
          <h1> {props.name} </h1>
        </div>
        <div className="departmenttile-content">{sortEmployees()}</div>
      </div>
    </div>
  );
}

export default DepartmentTile;
