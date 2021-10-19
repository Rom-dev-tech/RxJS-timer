import { useState } from 'react';
import Timer from 'components/Timer';
import Button from 'components/Button';
import Title from 'components/Title';
import PageContainer from 'components/PageContainer';
import { ButtonGroup } from './ButtonsGroup.styled';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

const TimerViews = () => {
  const [timer, setTimer] = useState(0);
  const [diff, setDiff] = useState(0);
  const [subscription, setSubscription] = useState('');
  const [prevent, setPrevent] = useState(true);

  const DELEY = 1000;

  const onStartHandlerClick = () => {
    if (!subscription) {
      const timerSubscription = interval(DELEY)
        .pipe(map(v => v + 1))
        .subscribe(v => {
          setTimer(v + diff);
        });
      setSubscription(timerSubscription);
    } else {
      subscription.unsubscribe();
      setTimer(0);
      setDiff(0);
      setSubscription('');
    }
  };

  const onWaitHandlerClick = () => {
    if (prevent) {
      setPrevent(false);
      const timerInstance = setTimeout(function () {
        setPrevent(true);
        clearTimeout(timerInstance);
      }, 300);
    } else {
      if (subscription) {
        subscription.unsubscribe();
      }

      setDiff(timer);
      setSubscription('');
    }
  };

  const onResetHandlerClick = () => {
    setDiff(0);

    if (subscription) {
      subscription.unsubscribe();
    }

    const timerSubscription = interval(DELEY).subscribe(v => {
      setTimer(v);
    });
    setSubscription(timerSubscription);
  };

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
