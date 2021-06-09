import PropTypes from "prop-types";

const Notification = ({ message }) => <p>{message}</p>;

export { Notification };

Notification.propsTypes = {
  message: PropTypes.string.isRequired,
};
