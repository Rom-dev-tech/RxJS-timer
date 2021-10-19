import PropTypes from 'prop-types';
import { memo } from 'react';
import { TitleStyle } from './Title.styled';

const Title = ({ title }) => {
  return <TitleStyle>{title}</TitleStyle>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(Title);
