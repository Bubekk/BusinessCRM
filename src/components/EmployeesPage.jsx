import "../styles/EmployeesPageStyle.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import DepartmentTile from "./DepartmentTile";

function EmployeesPage(props) {
  //Transmits which component schould be active and displayed on page
  const isActive = props.activeComponent === "EmployeesPage";

  const [departments, setDepartments] = useState([]);

  //Fetching all departments from DB
  const fetchDepartments = async () => {
    await axios
      .get("https://bussines-crm-default-rtdb.firebaseio.com/Departments.json")
      .then((response) => {
        const fetchedDepartments = [];
        for (let key in response.data) {
          fetchedDepartments.push({
            ...response.data[key],
            id: key,
          });
        }
        setDepartments(fetchedDepartments);
      });
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  //Rendering departments on page
  const renderedDepartments = departments.map((department) => (
    <DepartmentTile
      key={department.id}
      name={department.departmentName}
      employees={department.employees}
    />
  ));

  return (
    <div
      className="employeespage"
      style={{ display: isActive ? "none" : "flex" }}
    >
      {renderedDepartments}
    </div>
  );
}

export default EmployeesPage;
