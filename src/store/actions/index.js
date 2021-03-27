
const setJobList = ({ commit }, payload) => {
  commit('SET_JOB_LIST', payload);
};

const filterRemove = ({ commit, state }, payload) => {
  commit('FILTER_REMOVE', state.filters.filter(filter => filter !== payload));
};

const filterRemoveAll = ({ commit }) => {
  commit('FILTER_REMOVE', []);
};

const setFilterHeight = ({ commit }, payload) => commit('SET_FILTER_HEIGHT', payload);

const addFilter = ({ commit, state }, payload) => {
  commit('ADD_FILTER', state.filters.concat(payload));
};

export default {
  addFilter,
  setJobList,
  filterRemove,
  setFilterHeight,
  filterRemoveAll
};