import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Btn = ({ onClick, variant, btnName }) => {
  return (
    <Button type="button" onClick={onClick} as={Col} variant={variant} className="mx-2">
      {btnName}
    </Button>
  );
};

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
};

export default Btn;
