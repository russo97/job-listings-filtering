
const SET_JOB_LIST = (state, payload) => {
  state.jobList = payload;
};

const ADD_FILTER = (state, payload) => {
  state.filters = payload;
};

const FILTER_REMOVE = (state, payload) => state.filters = payload;

const SET_FILTER_HEIGHT = (state, payload) => state.filterHeight = payload;

export default {
  ADD_FILTER,
  SET_JOB_LIST,
  FILTER_REMOVE,
  SET_FILTER_HEIGHT
};
