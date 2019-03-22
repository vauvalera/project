export default {
  addElemToFilter(state, code) {
    state.filter.push(code);
  },

  deleteElemFromFilter(state, code) {
    state.filter = state.filter.filter(item => item !== code);
  },

  clearFilter(state) {
    state.filter = [];
  },
};
