// src/components/CountdownTimer.js
import PropTypes from "prop-types"
import { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../../utils/countDownTimer';

function CountdownTimer({ targetTime }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [targetTime]);

  return (
    <div className='text-white mt-8 text-[32px] lg:text-[64px] font-unica flex space-x-3 items-center'>
      <div>{timeLeft.hours > 9 ? timeLeft.hours : '0' + timeLeft.hours}<span className="text-lg">H</span></div>
      <div>{timeLeft.minutes > 9 ? timeLeft.minutes : '0' + timeLeft.minutes}<span className="text-lg">M</span></div>
      <div>{timeLeft.seconds > 9 ? timeLeft.seconds : '0' + timeLeft.seconds}<span className="text-lg">S</span></div>
    </div>
  );
}

CountdownTimer.propTypes = {
  targetTime: PropTypes.number
}

export default CountdownTimer;
