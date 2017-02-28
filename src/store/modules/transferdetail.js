import * as types from '../types';
import { moneyMul } from '../../utils/math';
import server from './AjaxServer';

const initialState = {
  loading: false,
  detail: {},
};

// const getters = {
//   [types.TransferDetailData]: state => state.data,
// };

const actions = {
  [types.TRANSFER_DETAIL_REQ]({ commit }, params) {
    const { id, sendData } = params;
    commit(types.TRANSFER_DETAIL_REQ);
    server.getQuotedDetail({
      id,
      sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.TRANSFER_DETAIL_SUC, {
          resdata: res.body.data,
        });
      }
    });
  },
};

const mutations = {
  [types.TRANSFER_DETAIL_REQ](state) {
    state.loading = true;
  },
  [types.TRANSFER_DETAIL_SUC](state, data) {
    state.loading = false;
    data.resdata.info.share = moneyMul(data.resdata.info.share, 100);
    state.detail = data.resdata;
  },
  [types.TRANSFER_DETAIL_ERR](state, data) {
    state.loading = false;
    state.data = data;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
