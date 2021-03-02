export const leadingZerosToTime = (time: string): string =>
  `0${time}`.slice(-2);
export const threeDotsWithLimit = (value: string, limit: number) =>
  value.length > limit ? `${value.slice(0, limit)}...` : value;
