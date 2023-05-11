import PropTypes from "prop-types";
import Task from "./task";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
};

export default Tasks;
