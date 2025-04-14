import React, { useEffect, useRef, useState } from "react";
import formatTime from "@/utils/formatTime";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const timerRef = useRef(null); // 타이머를 저장할 ref

  useEffect(() => {
    
    if (isOn) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      timerRef.current = timerId; // 타이머를 ref에 저장
    } else {
        clearInterval(timerRef.current); // 타이머를 정지
    }
    // return () => clearInterval(timerId);
  }, [isOn]);

  return (
    <div className="item">
      <div></div>
      <div>{formatTime(time)}</div>
      <div>
        <button
          className="btn-stopwatch"
          onClick={() => setIsOn((prev) => !prev)}
        >
          {isOn ? "정지" : "시작"}
        </button>
        <button className="btn-reset-stopwatch" onClick={() => setTime(0)}>
          리셋
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
