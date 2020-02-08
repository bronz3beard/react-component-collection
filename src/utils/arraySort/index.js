export const arraySort = (array, sortOrder, key) => {
  const arraySorted = array.sort((a, b) =>
    sortOrder[key] === 'asc' ? a[key] > b[key] : b[key] > a[key]
  );
  return arraySorted;
};
