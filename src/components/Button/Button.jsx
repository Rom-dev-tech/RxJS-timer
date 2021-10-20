import PropTypes from 'prop-types';
import ActiveButton from 'react-bootstrap/Button';

const Button = ({ onClick, buttonName }) => {
  return (
    <ActiveButton style={{ minWidth: 150 }} onClick={onClick}>
      {buttonName}
    </ActiveButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Button;
