
const filtersCount = state => state.filters.length;

const filterExist = state => state.filters.length > 0;

export default {
  filterExist,
  filtersCount
};
