import { useEffect } from "react";

const Timer = ({ secondRemaining, dispatch }) => {
  const min = Math.floor(secondRemaining / 60);
  const sec = Math.floor(secondRemaining % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, [secondRemaining, dispatch]);

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}: {sec < 10 && "0"}
      {sec}
    </div>
  );
};

export default Timer;
