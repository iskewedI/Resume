export const getNextItemInfiniteArray = (currentIndex, direction, arr) => {
  if (direction === 'left') {
    if (currentIndex - 1 > -1) {
      return currentIndex - 1;
    } else {
      return arr.length - 1;
    }
  } else {
    if (currentIndex + 1 < arr.length) {
      return currentIndex + 1;
    } else {
      return 0;
    }
  }
};
