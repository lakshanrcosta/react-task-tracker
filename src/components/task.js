import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import moment from "moment";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3
        onDoubleClick={() => {
          onToggle(task._id);
        }}
      >
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task._id)}
        />
      </h3>
      <p>{moment(new Date(task.date)).format("YYYY-MM-DD hh:mm A")}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Task;
