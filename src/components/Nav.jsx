import { useState } from "react";
import "../styles/NavStyle.scss";
import MenuButton from "./MenuButton";

function NavBar(props) {
  //declares if menu is visible or not
  let [isHidden, setIsHidden] = useState(true);

  //set visibility of menu after clicking button
  const handleIsHiddenClick = () => {
    setIsHidden(!isHidden);
  };

  //handles displaying custom component after menu button click
  const handleActivePageClick = (component) => {
    props.setActiveComponent(component);
    setIsHidden(!isHidden);
  };

  return (
    <nav className="nav">
      <div className="nav-bar">
        <h1 className="nav-bar-header">HELLO SIR! WHAT WE GONNA DO TODAY?</h1>
        <div className="nav-bar-avatarwrapper"></div>
      </div>
      <div className={`nav-menu ${isHidden ? "" : "dropped"}`}>
        <MenuButton
          dest="TO DO LIST"
          onClick={() => handleActivePageClick("ToDoList")}
        />
        <MenuButton
          dest="NOTIFICATIONS AND MESSAGES"
          onClick={() => handleActivePageClick("NotificationsPage")}
        />
        <MenuButton
          dest="EMPLOYEES"
          onClick={() => handleActivePageClick("EmployeesPage")}
        />
        <MenuButton
          dest="PROJECTS"
          onClick={() => handleActivePageClick("ProjectsPage")}
        />
        <MenuButton
          dest="BUDGET"
          onClick={() => handleActivePageClick("BudgetPage")}
        />
        <MenuButton
          dest="SETTINGS"
          onClick={() => handleActivePageClick("SettingsPage")}
        />
        <div className="nav-menu-button">
          <button
            className="nav-menu-button-circle"
            onClick={handleIsHiddenClick}
          >
            {/* <img src="" alt="arrow" /> */}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
