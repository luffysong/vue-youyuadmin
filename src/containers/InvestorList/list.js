// import * as types from '../../store/types';

export default {
  name: 'InvestorList',
  props: {
  },
  methods: {
    tabChange(ev) {
      this.$router.push({
        path: `/investor/list/${ev.name}`,
      });
    },
  },
  computed: {
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
  },
};
