
import { mapState, mapGetters } from 'vuex';

export default {
  ...mapState([
    'filters'
  ]),

  ...mapGetters([
    'filterExist',
    'filtersCount',
    'filterHeight'
  ])
};
