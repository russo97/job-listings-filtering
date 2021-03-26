
import { mapActions } from 'vuex';

export default {
  ...mapActions([
    'setJobList'
  ]),

  async loadData () {
    const { setJobList } = this;

    setJobList(await require('@js/data.json'));
  }
}
