import PropTypes from "prop-types";

const Button = ({ text, color, onClickAction }) => {
  return (
    <div>
      <button
        onClick={onClickAction}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "steelBlue",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClickAction: PropTypes.func.isRequired,
};

export default Button;
