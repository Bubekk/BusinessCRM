import { createContext, useEffect, useState } from "react";
import axios from "axios";

//Data Context creator
export const DataContext = createContext();

//Data Context provider
export const DataProvider = ({ children }) => {
  //*********************************************************** TASKS FETCHING *********************************************************************/
  const [tasks, setTasks] = useState([]);

  //fetching Tasks for ToDoListPage from DB
  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://bussines-crm-default-rtdb.firebaseio.com/ToDo.json"
      );
      const fetchedTasks = [];
      for (let key in response.data) {
        fetchedTasks.push({
          ...response.data[key],
          id: key,
        });
      }
      setTasks(fetchedTasks);
    } catch (error) {
      console.log("Tasks can't be downloaded", error);
    }
  };

  //Function for adding Tasks to DB
  const postTasks = async (task) => {
    await axios
      .post(`https://bussines-crm-default-rtdb.firebaseio.com/ToDo.json`, task)
      .then(() => {});
    fetchTasks();
  };

  //Function for deleting Tasks which are done or unwanted from DB
  const deletingTasks = async (taskid) => {
    await axios.delete(
      `https://bussines-crm-default-rtdb.firebaseio.com/ToDo/${taskid}.json`
    );
    fetchTasks();
  };

  //*********************************************************** DEPARTMENTS FETCHING *********************************************************************/
  const [departments, setDepartments] = useState([]);

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

  //*********************************************************** EMPLOYEES FETCHING *********************************************************************/
  const [employees, setEmployees] = useState([]);

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

  //Rendering all data
  useEffect(() => {
    fetchTasks();
    fetchDepartments();
    fetchEmployees();
  }, []);

  //Sharing data by context
  return (
    <DataContext.Provider
      value={{
        tasks,
        postTasks,
        deletingTasks,
        departments,
        fetchDepartments,
        employees,
        fetchEmployees,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
