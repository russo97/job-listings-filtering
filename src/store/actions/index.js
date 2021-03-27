
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

export default {
  setJobList,
  filterRemove,
  setFilterHeight,
  filterRemoveAll
};