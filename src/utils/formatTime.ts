export default (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};