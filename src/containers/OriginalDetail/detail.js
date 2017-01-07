// import { mapGetters } from 'vuex';
// import * as types from '../../store/types';
import OriginalDetailPending from './form/pending.vue';
import OriginalDetailListed from './form/listed.vue';

export default {
  name: 'OriginalDetail',
  props: {
  },
  methods: {

  },
  computed: {
  },
  data() {
    return {
      type: 'PENDING',
    };
  },
  mounted() {
    console.log('mounted');
    // this.$store.dispatch(types.HIDE_SIDEBAR);
  },
  created() {
    console.log('created');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  updated() {
    console.log('updated');
  },
  components: {
    OriginalDetailPending,
    OriginalDetailListed,
  },
};
