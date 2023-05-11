export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const second = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${second
    .toString()
    .padStart(2, "0")}`;
};
