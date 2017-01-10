export default {
  name: 'TransferFormListed',
  props: ['form'],
  data() {
    return {
      id: this.form.data.id,
      projectName: '',
      maker: '',
      transferor: '',
      listedShare: '',
      listedPrice: '',
      applyTime: '',
      listedDays: '',
      assignee: '',
      assigneeCard: '',
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
