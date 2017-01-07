
import { mapGetters } from 'vuex';
import * as types from '../../store/types';
import TransferTable from './tables/TransferTable.vue';

export default {
  name: 'TransferList',
  props: {
  },
  methods: {
    handleTabClick(tab) {
      this.$router.push({
        name: 'TransferList',
        query: {
          status: tab.name,
        },
      });
    },
  },
  computed: {
  },
  data() {
    const query = this.$route.query;
    return {
      query: {
        status: query && query.status ? query.status : 'PENDING',
      },
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
    TransferTable,
  },
};

