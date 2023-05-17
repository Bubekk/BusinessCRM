import "./App.css";
import { DataProvider } from "./components/DataFetch";
import NavBar from "./components/Nav";
import MainPage from "./components/MainPage";
import ToDoList from "./components/TodoPage/ToDoList";
import NotificationsPage from "./components/NotificationsPage";
import EmployeesPage from "./components/EmployeePage/EmployeesPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import BudgetPage from "./components/BudgetPage/BudgetPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
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
      case "BudgetPage":
        return <BudgetPage />;
      case "SettingsPage":
        return <SettingsPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <DataProvider>
      <div className="container">
        <NavBar setActiveComponent={setActiveComponent} />
        <div className="page">{displayComponent()}</div>
      </div>
    </DataProvider>
  );
}

export default App;
