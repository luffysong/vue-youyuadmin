
import { mapGetters } from 'vuex';
import * as types from '../../store/types';
import TransferFormPending from './forms/pending.vue';
import TransferFormListed from './forms/listed.vue';

function getData() {
  this.$store.dispatch(types.TRANSFERDETAIL_REQ, {
    type: this.$route.query.type,
  });
}
function init() {
  getData.call(this);
}

export default {
  name: 'TransferDetail',
  props: {
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      detailData: [types.TransferDetailData],
    }),
  },
  data() {
    return {

    };
  },
  mounted() {
    console.log('mounted');
    // this.$store.dispatch(types.HIDE_SIDEBAR);
  },
  created() {
    console.log('created');
    init.call(this);
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
    TransferFormPending,
    TransferFormListed,
  },
};
