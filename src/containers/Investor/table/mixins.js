import dict from '../../../store/modules/dict';
import * as types from '../../../store/types';

export default {
  filters: {
    memberTransfer(cs) {
      const type = dict.state.member_type;
      return type[cs];
    },
    identityTransfer(cs) {
      const type = dict.state.identity_type;
      return type[cs];
    },
    statusTransfer(cs) {
      const type = dict.state.member_status;
      return type[cs];
    },
  },
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
      this.sendData.page = 1;
      this.getData();
    },
    getData() {
      this.$store.dispatch(types.INVESTORLIST_REQ, {
        sendData: this.sendData,
      });
    },
  },
};
