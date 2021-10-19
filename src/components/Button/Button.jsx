import PropTypes from 'prop-types';
import ActiveButton from 'react-bootstrap/Button';

const Button = ({ onClick, variant, buttonName }) => {
  return (
    <ActiveButton onClick={onClick} variant={variant} className="mx-2">
      {buttonName}
    </ActiveButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Button;
