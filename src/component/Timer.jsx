import formatTime from "@/utils/formatTime";
import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [startTime, setStartTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn && time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      timerRef.current = timerId;
    } else if (!isOn || time == 0) {
      clearInterval(timerRef.current);
      setIsOn(false);
    }
    return () => clearInterval(timerRef.current);
  }, [isOn, time]);

  const toggleTimer = () => {
    if (time === 0) {
      setTime(startTime);
      setStartTime(0);
    }
    setIsOn((prev) => !prev);
  }

  return (
    <div className="item">
      <div>{time ? formatTime(time) : formatTime(startTime)}</div>
      <input
        type="range"
        value={startTime}
        min="0"
        max="3600"
        step="30"
        onChange={(e) => setStartTime(e.target.value)}
      />
      <div>
        <button onClick={toggleTimer}>{isOn ? "정지" : "시작"}</button>
        <button
          onClick={() => {
            setIsOn(false);
            setTime(0);
            setStartTime(0);
          }}
        >
          리셋
        </button>
      </div>
    </div>
  );
};

export default Timer;
