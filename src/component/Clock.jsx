import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(dayjs().format("YYYY년 MM월 DD일 HH:mm:ss"));

  useEffect(() => {
    setInterval(() => {
      setDate(dayjs().format("YYYY년 MM월 DD일 HH:mm:ss"));
    }, 1000);
    // cleanup 필요 없음: useEffect가 한번만 실행되므로
  }, []);

  return <div className="item">{date}</div>;
};

export default Clock;
