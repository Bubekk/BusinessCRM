import "../styles/DepartmentTileStyle.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import EmployeeTile from "./EmployeeTile";

function DepartmentTile(props) {
  const [employees, setEmployees] = useState([]);

  //Fetching all Employees from DB
  const fetchEmployees = async () => {
    await axios
      .get("https://bussines-crm-default-rtdb.firebaseio.com/Employees.json")
      .then((response) => {
        const fetchedEmployees = [];
        for (let key in response.data) {
          fetchedEmployees.push({
            ...response.data[key],
            id: key,
          });
        }
        setEmployees(fetchedEmployees);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

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
