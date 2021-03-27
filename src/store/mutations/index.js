
const SET_JOB_LIST = (state, payload) => {
  state.jobList = payload;
};

const FILTER_REMOVE = (state, payload) => state.filters = payload;

const SET_FILTER_HEIGHT = (state, payload) => state.filterHeight = payload;

export default {
  SET_JOB_LIST,
  FILTER_REMOVE,
  SET_FILTER_HEIGHT
};
