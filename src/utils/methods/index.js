
import { mapActions } from 'vuex';

export default {
  ...mapActions([
    'setJobList',
    'filterRemove'
  ]),

  async loadData () {
    const { setJobList } = this;

    setJobList(await require('@js/data.json'));
  },

  removeFilter (filter) {
    this.filterRemove(filter);
  }
}
