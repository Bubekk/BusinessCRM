import "../styles/ToDoListStyle.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import ToDoTile from "./ToDoTile";

function ToDoListPage(props) {
  //Transmits which component schould be active and displayed on page
  const isActive = props.activeComponent === "ToDoListPage";

  //Showing and hiding form after clickinf button
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  //Form variables
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  //Getting tasks from DB
  const fetchTasks = async () => {
    await axios
      .get("https://bussines-crm-default-rtdb.firebaseio.com/ToDo.json")
      .then((response) => {
        const fetchedTasks = [];
        for (let key in response.data) {
          fetchedTasks.push({
            ...response.data[key],
            id: key,
          });
        }
        setTasks(fetchedTasks);
      });
  };

  //axios request to post task
  const postTasks = async (task) => {
    await axios
      .post(`https://bussines-crm-default-rtdb.firebaseio.com/ToDo.json`, task)
      .then(() => {});
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  //Adding task to the tasks list
  const handleSubmitTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: id,
      title: title,
      description: description,
      dueDate: date,
      dueTime: time,
    };
    postTasks(newTask);
    setId(id + 1);
    setShowForm(!showForm);
  };

  //Deleting tasks which are done
  const handleMarkAsDone = async (taskid) => {
    await axios.delete(
      `https://bussines-crm-default-rtdb.firebaseio.com/ToDo/${taskid}.json`
    );
    fetchTasks();
  };

  //Rendering task tile on page
  const renderedTasks = tasks.map((task) => (
    <ToDoTile
      key={task.id}
      number={task.id}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      dueTime={task.dueTime}
      done={handleMarkAsDone}
    />
  ));

  return (
    <div className="todopage" style={{ display: isActive ? "none" : "flex" }}>
      <div className="todopage-form">
        <button
          className="todopage-form-button"
          onClick={handleShowForm}
          style={{ display: showForm ? "none" : "block" }}
        >
          +
        </button>
        <form
          action="submit"
          onSubmit={handleSubmitTask}
          style={{ display: showForm ? "flex" : "none" }}
        >
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="textarea"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            placeholder="Time"
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Add task</button>
        </form>
        {renderedTasks}
      </div>
    </div>
  );
}

export default ToDoListPage;
