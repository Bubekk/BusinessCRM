import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../styles/ToDoTileStyle.scss";

function ToDoTile(props) {

  //use React-toast to show alert that some tasks are for today
  const taskMemo = () => toast("You got something to do today!", {
    position: "top-center",
    duration: 2000,
  });

  //use React-toast to show alert after marking task as done
  const doneMemo = () => toast.success("You did it!")

  //Transmiting data to deleting task, specifically id of task
  const handleDoneClick = () => {
    props.done(props.number);
    doneMemo();
  };

  //Tracking how many days left for completing the task
  const [days, setDays] = useState(3);
  const checkDate = () => {
    const nowDay = new Date().getDate();
    const nowMonth = new Date().getMonth();
    const taskDay = new Date(props.dueDate).getDate();
    const taskMonth = new Date(props.dueDate).getMonth();

    //PLEASE ADD MONTH RECOGNIZER!!!
    if (nowMonth === taskMonth) {
      if (nowDay === taskDay) {
        setDays(0);
        taskMemo();
      } else if (nowDay === taskDay - 1) {
        setDays(1);
      } else if (nowDay === taskDay - 2) {
        setDays(2);
      }
    }
  };

  //watcher for checking how many days left for completing the task
  useEffect(() => {
    checkDate();
  }, []);

  return (
    <div
      className={`todotile ${
        days === 2 ? "yellow" : days === 1 ? "orange" : days === 0 ? "red" : ""
      }`}
    >
      <Toaster />
      <h1 className="todotile-header"> {props.title} </h1>
      <button className="todotile-btn-done" onClick={handleDoneClick}>
        ✅
      </button>
      <div className="todotile-description">
        <p> {props.description} </p>
      </div>
      <div className="todotile-date">
        <p className="todotile-date-detail"> {props.dueDate} </p>
        <p className="todotile-date-time"> {props.dueTime} </p>
      </div>
    </div>
  );
}

export default ToDoTile;
