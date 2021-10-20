import { useState } from 'react';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

const OnHandlerClick = (t = 0, d = 0, s = '', p = true) => {
  const [timer, setTimer] = useState(t);
  const [diff, setDiff] = useState(d);
  const [subscription, setSubscription] = useState(s);
  const [prevent, setPrevent] = useState(p);

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

  return {
    timer,
    diff,
    onStartHandlerClick,
    onWaitHandlerClick,
    onResetHandlerClick,
  };
};

const handleClickHalpers = {
  OnHandlerClick,
};

export default handleClickHalpers;
