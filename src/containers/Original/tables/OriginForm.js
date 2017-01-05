export default {
  name: 'ProjectTable',
  props: {
    dataTable: Object,
    dataChangePage: Function,
  },
  methods: {

  },
  computed: {
  },
  data() {
    return {
    };
  },
  mounted() {
    console.log('mounted', this);
    // this.$store.dispatch(types.HIDE_SIDEBAR);
  },
  created() {
    console.log('create');
  },
  beforeUpdate() {
    console.log('before');
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
