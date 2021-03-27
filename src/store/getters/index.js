
const filtersCount = state => state.filters.length;

const filterExist = state => state.filters.length > 0;

const filterHeight = state => {
  const curHeight = state.filterHeight - 20;

  const pxHeight = curHeight >= 0
    ? curHeight / 16
    : 0;

  return `${pxHeight}rem`;
};

export default {
  filterExist,
  filtersCount,
  filterHeight
};
