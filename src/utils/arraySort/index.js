export const arraySort = (array, sortOrder = { key: 'asc' }) => {
    const orderSort = sortOrder.key === 'asc' ? 'desc' : 'asc';
    const arraySorted = array.sort((a, b) => (
      orderSort === 'asc' ? a[sortOrder.key] > b[sortOrder.key] : b[sortOrder.key] > a[sortOrder.key]));
    return arraySorted;
  };
  