import Timer from 'components/Timer';
import Button from 'components/Button';
import Title from 'components/Title';
import PageContainer from 'components/PageContainer';
import handleClickHalpers from 'helpers/onHandleClickHalpers';
import { ButtonGroup } from './ButtonsGroup.styled';

const TimerViews = () => {
  const { timer, diff, onStartHandlerClick, onWaitHandlerClick, onResetHandlerClick } =
    handleClickHalpers.OnHandlerClick(0, 0, '', true);

  return (
    <PageContainer>
      <Title title="Timer" />

      <Timer timePast={timer ? timer : diff} />

      <ButtonGroup>
        <Button onClick={onStartHandlerClick} variant="primary" buttonName="Start/Stop" />
        <Button onClick={onWaitHandlerClick} variant="primary" buttonName="Wait" />
        <Button onClick={onResetHandlerClick} variant="primary" buttonName="Reset" />
      </ButtonGroup>
    </PageContainer>
  );
};

export default TimerViews;
