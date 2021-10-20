import PropTypes from 'prop-types';
import ActiveButton from 'react-bootstrap/Button';

const Button = ({ onClick, buttonName, variant }) => {
  return (
    <ActiveButton style={{ minWidth: 150 }} onClick={onClick} variant={variant}>
      {buttonName}
    </ActiveButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Button;
