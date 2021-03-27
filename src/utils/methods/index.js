
import { mapActions } from 'vuex';

export default {
  ...mapActions([
    'addFilter',
    'setJobList',
    'filterRemove',
    'filterRemoveAll',
    'setFilterHeight'
  ]),

  async loadData () {
    const { setJobList } = this;

    setJobList(await require('@js/data.json'));
  },

  removeFilter (filter) {
    this.filterRemove(filter);
  },

  removeAllFilters () {
    this.filterRemoveAll();
  },

  changeFilterHeight (height) {
    this.setFilterHeight(height);
  }
}
