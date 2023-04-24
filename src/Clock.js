import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function () {
      clearInterval(intervalid);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
