export const minBy = <T>(array: T[], cb: (item: T) => number) => {
  if (array.length === 0) return undefined;
  return array.reduce((acc, curr) => {
    if (cb(curr) < cb(acc)) {
      return curr;
    } else {
      return acc;
    }
  });
};

export function maxBy<T>(array: T[], cb: (item: T) => number) {
  if (array.length === 0) return undefined;
  return array.reduce((acc, curr) => {
    if (cb(curr) > cb(acc)) {
      return curr;
    } else {
      return acc;
    }
  });
}
