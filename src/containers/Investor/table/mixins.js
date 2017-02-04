import dict from '../../../store/modules/dict';

export default {
  filters: {
    memberTransfer(cs) {
      const type = dict.state.member_type;
      return type[cs];
    },
  },
};
