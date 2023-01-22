
import PropTypes from 'prop-types';


const Notification = ({ message }) => (
  <>
    {message}
  </>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};