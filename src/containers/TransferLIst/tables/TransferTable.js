
export default {
  name: 'TransferTable',
  props: {
    dataTable: Object,
    dataChangePage: Function,
  },
  methods: {
  },
  computed: {
  },
  data() {
    console.log(this.dataTable)
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
