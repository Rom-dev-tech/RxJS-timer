import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { helperFunctionForTimer } from 'helpers/helperFunctionForTimer';
import handleClickHalpers from 'helpers/onHandleClickHalpers';
import { ButtonGroup } from './ButtonsGroup.styled';
import { TimerWrapper, TimerStyle } from './Timer.styled';

const Timer = ({ ButtonsGroup }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const { timer, diff, onStartHandlerClick, onWaitHandlerClick, onResetHandlerClick } =
    handleClickHalpers.OnHandlerClick();

  const timePast = timer ? timer : diff;

  useEffect(() => {
    let hours = Math.floor(timePast / 3600);
    setHours(helperFunctionForTimer(hours));

    let minutes = Math.floor((timePast % 3600) / 60);
    setMinutes(helperFunctionForTimer(minutes));

    let seconds = timePast % 60;
    setSeconds(helperFunctionForTimer(seconds));
  }, [timePast]);

  return (
    <>
      <TimerWrapper>
        <TimerStyle>
          {hours}:{minutes}:{seconds}
        </TimerStyle>
      </TimerWrapper>

      <ButtonGroup>
        {ButtonsGroup === 1 ? (
          <Button onClick={onStartHandlerClick} buttonName="Start/Stop" />
        ) : ButtonsGroup === 2 ? (
          <>
            <Button onClick={onStartHandlerClick} buttonName="Start/Stop" />
            <Button onClick={onWaitHandlerClick} buttonName="Wait" />
          </>
        ) : (
          <>
            <Button onClick={onStartHandlerClick} buttonName="Start/Stop" />
            <Button onClick={onWaitHandlerClick} buttonName="Wait" />
            <Button onClick={onResetHandlerClick} buttonName="Reset" />
          </>
        )}
      </ButtonGroup>
    </>
  );
};

Timer.propTypes = {
  ButtonsGroup: PropTypes.number,
};

export default Timer;
