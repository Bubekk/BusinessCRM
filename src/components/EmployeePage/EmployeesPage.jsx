import "./styles/EmployeesPageStyle.scss";
import { DataContext } from "../DataFetch";
import { useContext } from "react";
import DepartmentTile from "./UI/DepartmentTile";

function EmployeesPage(props) {
  //Transmits which component schould be active and displayed on page
  const isActive = props.activeComponent === "EmployeesPage";

  //Importing data from DataFetch file
  const { departments } = useContext(DataContext);

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
