export const leadingZerosToTime = (time: string): string =>
  `0${time}`.slice(-2);
export const threeDotsWithLimit = (text: string, limit: number) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;
