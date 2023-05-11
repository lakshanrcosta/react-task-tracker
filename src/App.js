import React from "react";
import Header from "./components/header";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title="Task Tracker" />
      </div>
    );
  }
}

export default App;
