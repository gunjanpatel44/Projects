import React, { useState, useEffect } from 'react'

function BharatClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=' text-center'>
      <p className=' font-bold text-4xl'>The Bharat Clock</p>
      <p>This is the clock that shows the time in Bharat at all times</p>
      <p>This is the current time: <span className=' text-xl font-bold'>{time} {date}</span></p>
    </div>
  )
}

export default BharatClock;
