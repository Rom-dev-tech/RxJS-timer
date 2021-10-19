import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import helpers from 'helpers/helperFunctionForTimer';
import { TimerWrapper, TimerStyle } from './Timer.styled';

const Timer = ({ timePast }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let hours = Math.floor(timePast / 3600);
    setHours(helpers.helperFunctionForTimer(hours));

    let minutes = Math.floor((timePast % 3600) / 60);
    setMinutes(helpers.helperFunctionForTimer(minutes));

    let seconds = timePast % 60;
    setSeconds(helpers.helperFunctionForTimer(seconds));
  }, [timePast]);

  return (
    <TimerWrapper>
      <TimerStyle>
        {hours}:{minutes}:{seconds}
      </TimerStyle>
    </TimerWrapper>
  );
};

Timer.propTypes = {
  timePast: PropTypes.number.isRequired,
};

export default Timer;
