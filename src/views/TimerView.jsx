import { useState } from 'react';
import Timer from 'components/Timer';
import Btn from 'components/Btn';
import Title from 'components/Title';
import PageContainer from 'components/PageContainer';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

import { Row } from 'react-bootstrap';

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

      <Row className="mx-0">
        <Btn onClick={onStartHandlerClick} variant="success" btnName="Start/Stop" />
        <Btn onClick={onWaitHandlerClick} variant="warning" btnName="Wait" />
        <Btn onClick={onResetHandlerClick} variant="danger" btnName="Reset" />
      </Row>
    </PageContainer>
  );
};

export default TimerViews;
