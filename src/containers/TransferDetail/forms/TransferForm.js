export default {
  name: 'TransferForm',
  data() {
    return {
      form: {
        id: '',
        projectName: '',
        movieMaker: '',
        transferor: '',
        percent: '',
        price: '',
        applyTime: '',
        duration: '',
        name: '',
        license: '',
      },
      rules: {
        id: [
          { required: true, message: '请输入份额ID', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleReset() {
      this.$refs.form.resetFields();
    },
    handleSubmit() {
      this.$refs.form.validate();
    },
  },
};
