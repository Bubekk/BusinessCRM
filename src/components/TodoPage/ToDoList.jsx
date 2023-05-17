import "./styles/ToDoListStyle.scss";
import { DataContext } from "../DataFetch";
import { useState, useContext } from "react";
import ToDoTile from "./UI/ToDoTile";

function ToDoListPage(props) {
  //Transmits which component schould be active and displayed on page
  const isActive = props.activeComponent === "ToDoListPage";

  //Showing and hiding form after clicking the button
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  //Form variables
  //Importing data from DataFetch file
  const { tasks, postTasks, deletingTasks } = useContext(DataContext);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

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
  const handleMarkAsDone = (taskid) => {
    deletingTasks(taskid);
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
