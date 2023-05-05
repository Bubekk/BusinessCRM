import "./App.css";
import NavBar from "./components/Nav";
import MainPage from "./components/MainPage";
import ToDoList from "./components/ToDoList";
import NotificationsPage from "./components/NotificationsPage";
import EmployeesPage from "./components/EmployeesPage";
import ProjectsPage from "./components/ProjectsPage";
import SettingsPage from "./components/SettingsPage";
import { useState } from "react";

function App() {
  //checking which component should be active on page
  const [activeComponent, setActiveComponent] = useState("MainPage");
  const displayComponent = () => {
    switch (activeComponent) {
      case "MainPage":
        return <MainPage />;
      case "ToDoList":
        return <ToDoList />;
      case "NotificationsPage":
        return <NotificationsPage />;
        case "EmployeesPage":
          return <EmployeesPage />;
      case "ProjectsPage":
        return <ProjectsPage />;
      case "SettingsPage":
        return <SettingsPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="container">
      <NavBar setActiveComponent={setActiveComponent} />
      <div className="page">{displayComponent()}</div>
    </div>
  );
}

export default App;
