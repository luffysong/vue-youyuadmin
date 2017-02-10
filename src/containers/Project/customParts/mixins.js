import * as types from '../../../store/types';

export default {
  methods: {
    pageChange(cur) {
      this.sendData.page = cur;
      this.getData();
    },
    searchCommit() {
      this.searchParams.options.forEach((el) => {
        this.sendData[el.value] = '';
      });
      this.sendData[this.searchParams.select] = this.searchParams.input;
      this.getData();
    },
    getData() {
      this.$store.dispatch(types.ProjectListReq, {
        sendData: this.sendData,
      });
    },
  },
  data() {
    const s = this;
    return {
      searchParams: {
        options: [
          {
            value: 'id',
            label: '项目ID',
          },
          {
            value: 'name',
            label: '项目名称',
          },
        ],
        select: 'name',
        input: '',
        commit: s.searchCommit,
      },
    };
  },
};
