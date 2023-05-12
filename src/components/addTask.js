import { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ onAdd }) => {
  const [taskData, setTaskData] = useState({
    text: "",
    date: "",
    reminder: false,
  });

  const setTaskTextEventHandler = (event) => {
    const { value } = event.target;
    setTaskData((prevState) => ({ ...prevState, text: value }));
  };

  const setTaskDateEventHandler = (event) => {
    const { value } = event.target;
    setTaskData((prevState) => ({ ...prevState, date: value }));
  };

  const setTaskReminderEventHandler = (event) => {
    const { value } = event.target;

    setTaskData((prevState) => ({
      ...prevState,
      reminder: value,
    }));
  };

  const createTask = (event) => {
    event.preventDefault();
    if (!taskData.text || !taskData.date) {
      alert("Please add Task details!");
      return;
    }

    onAdd(taskData);
    //setTaskData({ text: "", date: "", reminder: false });
  };

  return (
    <form className={"add-form"} onSubmit={createTask}>
      <div className={"form-control"}>
        <label>Task</label>
        <input
          type={"text"}
          placeholder={"Add task"}
          value={taskData.text}
          onChange={setTaskTextEventHandler}
        />
      </div>
      <div className={"form-control"}>
        <label>Date & Time</label>
        <input
          type={"datetime-local"}
          placeholder={"Add date and time"}
          value={taskData.date}
          onChange={setTaskDateEventHandler}
        />
      </div>
      <div className={"form-control form-control-check"}>
        <label>Set Reminder</label>
        <input
          type={"checkbox"}
          checked={taskData.reminder}
          value={taskData.reminder}
          onChange={setTaskReminderEventHandler}
        />
      </div>
      <input
        className={"btn btn-block"}
        type={"submit"}
        value={"Create Task"}
      />
    </form>
  );
};

AddTask.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddTask;
