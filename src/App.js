import React from "react";
import Header from "./components/header";
import Tasks from "./components/tasks";

const App = () => {
  return (
    <div className={"container"}>
      <Header title="Task Tracker" />
      <Tasks />
    </div>
  );
};

export default App;
