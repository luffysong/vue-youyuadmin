// import { mapGetters } from 'vuex';
// import * as types from '../../store/types';

export default {
  name: 'OriginalDetailListed',
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
        // 申请人
        proposer: '',
        idNumber: '',
        memberType: '',
        applyTime: '',
        accountType: '',
        businessCard: '',
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
