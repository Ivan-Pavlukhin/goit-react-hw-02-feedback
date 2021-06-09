import PropTypes from "prop-types";
import styles from "./button.module.css";

export const Button = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((option) => (
        <button
          className={styles.btn}
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
};

Button.propsTypes = {
  options: PropTypes.objectOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
};
