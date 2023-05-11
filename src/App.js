import React from "react";
import Header from "./components/header";
import Tasks from "./components/tasks";
import tasksData from "./tasks.json";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([tasksData.tasks]);
  return (
    <div className={"container"}>
      <Header title="Task Tracker" />
      <Tasks tasks={tasks[0]} />
    </div>
  );
};

export default App;
