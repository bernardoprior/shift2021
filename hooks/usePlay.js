import useTimer from "./useTimer";

const usePlay = (
  init,
  musicTimeLength // ms
) => {
  const timeConv = musicTimeLength / 100;
  const { startStop, elapsedTime, resetTimer, isRunning } = useTimer(
    0,
    timeConv
  );

  const onPlayPause = () => {
    if (elapsedTime >= timeConv) resetTimer();
    else startStop();
  };

  const percentageTimeElapsed = elapsedTime / timeConv;

  return {
    onPlayPause,
    percentageTimeElapsed,
    elapsedTime,
    resetTimer,
    isRunning,
  };
};

export default usePlay;
