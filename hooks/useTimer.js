import { useEffect, useReducer } from "react";

const initial_state = {
  isRunning: false,
  elapsedTime: 0,
};

const reducer = (state, action) => {
  const { isRunning, elapsedTime, type } = action;
  switch (type) {
    case "set time":
      return { ...state, elapsedTime };

    case "set running":
      return { ...state, isRunning };

    case "set state":
      return { isRunning, elapsedTime };

    case "reset":
      return { ...initial_state };

    default:
      return { ...state };
  }
};

const INC = 1;

const useTimer = (init, max) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const { elapsedTime, isRunning } = state;

  useEffect(() => {
    dispatch({ type: "set time", elapsedTime: init });
  }, []);

  useEffect(() => {}, [init]);

  useEffect(() => {
    let interval;
    let time = elapsedTime;
    if (isRunning) {
      interval = setInterval(() => {
        if (time > max) setIsRunning(false);

        time += INC;
        setElapsedTime(time);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const setIsRunning = (isRunning) => {
    dispatch({ type: "set running", isRunning });
  };

  const setElapsedTime = (elapsedTime) => {
    dispatch({ type: "set time", elapsedTime });
  };

  const setTime = (t) => {
    setElapsedTime(t);
  };

  const addTime = () => {
    setTime(elapsedTime + 1);
  };

  const subtractTime = () => {
    setTime(elapsedTime - 1);
  };

  const resetTimer = () => {
    dispatch({ type: "reset" });
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  return {
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
    startStop,
    elapsedTime,
    setTime,
    addTime,
    subtractTime,
  };
};

export default useTimer;
