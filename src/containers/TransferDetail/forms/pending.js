export default {
  name: 'TransferFormPending',
  props: ['form'],
  data() {
    return {
      id: this.form.data.id,
      projectName: this.form.data.projectName,
      maker: this.form.data.maker,
      transferor: this.form.data.transferor,
      listedShare: this.form.data.listedShare,
      listedPrice: this.form.data.listedPrice,
      applyTime: this.form.data.applyTime,
      listedDays: this.form.data.listedDays,
      assignee: this.form.data.assignee,
      assigneeCard: this.form.data.assigneeCard,
      rules: {
        id: [
          { required: true, message: '请输入份额ID', trigger: 'blur' },
        ],
        projectName: [
          { required: true, message: '请输入项目名称', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleReset() {
      this.$refs.form.resetFields();
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
      });
    },
  },
};
