import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  unpaidLoading: false,
  unpaidList: {
    data: [],
  },

  paidLoading: false,
  paidList: {
    data: [],
  },
};

const actions = {
  [types.TRADELIST_REQ]({ commit }, params) {
    const { sendData } = params;
    commit(types.TRADELIST_REQ, sendData);
    server.getTradeList({
      sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.TRADELIST_SUC, {
          sendData,
          resdata: res.body.data,
        });
      }
    });
  },
};
const ENUM_LIST_TRADE_STATUS = {
  1: 'unpaid',
  2: 'paid',
};
const mutations = {
  [types.TRADELIST_REQ](state, data) {
    const { status } = data;
    const loading = `${ENUM_LIST_TRADE_STATUS[status]}Loading`;
    state[loading] = true;
  },
  [types.TRADELIST_SUC](state, data) {
    const { sendData } = data;
    const { resdata } = data;
    const { status } = sendData;
    const loading = `${ENUM_LIST_TRADE_STATUS[status]}Loading`;
    const list = `${ENUM_LIST_TRADE_STATUS[status]}List`;
    state[loading] = false;
    state[list] = resdata;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
