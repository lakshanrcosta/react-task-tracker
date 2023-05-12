import Task from "./task";
import React, { useState } from "react";
import tasksData from "../tasks.json";
import AddTask from "./addTask";
import { v4 as uuidv4 } from "uuid";

const Tasks = () => {
  const [tasks, setTasks] = useState(tasksData.tasks);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task._id !== id;
    });
    setTasks(updatedTasks);
  };

  const toggleReminder = (id) => {
    const updatedTasks = tasks.map((task) =>
      task._id === id ? { ...task, reminder: !task.reminder } : task
    );
    setTasks(updatedTasks);
  };

  const addTask = (task) => {
    const _id = uuidv4();
    const newTask = { _id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <AddTask onAdd={addTask} />
      {tasks.length !== 0 ? (
        tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ))
      ) : (
        <h4>No tasks to display</h4>
      )}
    </div>
  );
};

export default Tasks;
