// import { mapGetters } from 'vuex';
// import * as types from '../../store/types';

export default {
  name: 'OriginalDetailPending',
  props: {
  },
  methods: {
    handleReset() {
      this.$refs.form.resetFields();
    },
    handleSubmit() {
      this.$refs.form.validate();
    },
  },
  computed: {
  },
  data() {
    return {
      form: {
        id: '',
        projectName: '',
        movieMaker: '',
        transferor: '',
        originalShare: '',
        ownOriginalShare: '',
        listedShare: '',
        listedPrice: '',
        applyTime: '',
        listedDays: '',
        assignee: '',
        assigneeIdCard: '',
        lockupPeriod: '',
      },
      rules: {
        id: [
          { required: true, message: '请输入份额ID', trigger: 'blur' },
        ],
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

  },
};
