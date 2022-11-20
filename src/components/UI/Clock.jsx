import React, { useState, useEffect } from "react";

import "../../styles/clock.css";

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const deadline = "December,2,2022";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock_wrapper d-flex align-items-center gap-5">
      <div className="clock_data d-flex align-items-center gap-3 ">
        <div>
          <h1 className="text-white fs-3">{days}</h1>
          <h5 className="text-white fs-5">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3 ">
        <div>
          <h1 className="text-white fs-3">{hours}</h1>
          <h5 className="text-white fs-5">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3 ">
        <div>
          <h1 className="text-white fs-3">{minutes}</h1>
          <h5 className="text-white fs-5">Minutes</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
