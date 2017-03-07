import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  tradeLoading: false,
  tradeDetail: {},
  refundLoading: false,
  refundDetail: {},
};

const actions = {
  [types.TRADEDETAIL_REQ]({ commit }, params) {
    const { sendData, id, callback } = params;
    commit(types.TRADEDETAIL_REQ);
    server.getTradeDetail({
      id,
      sendData,
    }).then((res) => {
      if (res.data.code === 0) {
        commit(types.TRADEDETAIL_SUC, {
          sendData,
          resdata: res.data.data,
        });
        callback(res.data.data);
      }
    });
  },

  [types.REFUNDDETAIL_REQ]({ commit }, params) {
    const { sendData, id, callback } = params;
    commit(types.REFUNDDETAIL_REQ);
    server.getRefundDetail({
      id,
      sendData,
    }).then((res) => {
      if (res.data.code === 0) {
        commit(types.REFUNDDETAIL_SUC, {
          sendData,
          resdata: res.data.data,
        });
        callback(res.data.data);
      }
    });
  },
};

const mutations = {
  [types.TRADEDETAIL_REQ](state) {
    state.tradeLoading = true;
  },
  [types.TRADEDETAIL_SUC](state, data) {
    const { resdata } = data;
    state.tradeLoading = false;
    state.tradeDetail = resdata;
  },

  [types.REFUNDDETAIL_REQ](state) {
    state.refundLoading = true;
  },
  [types.REFUNDDETAIL_SUC](state, data) {
    const { resdata } = data;
    state.refundLoading = false;
    state.refundDetail = resdata;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
