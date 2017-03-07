import * as types from '../types';
import { toPercent } from '../../utils/math';
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

  unrefundLoading: false,
  unrefundList: {
    data: [],
  },
  refundLoading: false,
  refundList: {
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
      if (res.data.code === 0) {
        commit(types.TRADELIST_SUC, {
          sendData,
          resdata: res.data.data,
        });
      }
    });
  },
  [types.REFUNDLIST_REQ]({ commit }, params) {
    const { sendData } = params;
    commit(types.REFUNDLIST_REQ, sendData);
    server.getRefundList({
      sendData,
    }).then((res) => {
      if (res.data.code === 0) {
        commit(types.REFUNDLIST_SUC, {
          sendData,
          resdata: res.data.data,
        });
      }
    });
  },
};
const ENUM_LIST_TRADE_STATUS = {
  1: 'unpaid',
  2: 'paid',
};
const ENUM_LIST_REFUND_STATUS = {
  1: 'unrefund',
  2: 'refund',
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
    resdata.data.forEach((el) => {
      el.order_movie.share = toPercent(el.order_movie.share);
    });
    state[list] = resdata;
  },

  [types.REFUNDLIST_REQ](state, data) {
    const { status } = data;
    const loading = `${ENUM_LIST_REFUND_STATUS[status]}Loading`;
    state[loading] = true;
  },
  [types.REFUNDLIST_SUC](state, data) {
    const { sendData } = data;
    const { resdata } = data;
    const { status } = sendData;
    const loading = `${ENUM_LIST_REFUND_STATUS[status]}Loading`;
    const list = `${ENUM_LIST_REFUND_STATUS[status]}List`;
    state[loading] = false;
    state[list] = resdata;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
