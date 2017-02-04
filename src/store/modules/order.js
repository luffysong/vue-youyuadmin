import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  // 列表数据
  unpaidDepositListLoading: false,
  paidDepositListLoading: false,
  unpaidBalanceListLoading: false,
  paidListLoading: false,
  closedListLoading: false,
  unpaidDepositList: {},
  paidDepositList: {},
  unpaidBalanceList: {},
  paidList: {},
  closedList: {},
  // 详情数据
  detailLoading: {},
  detail: {},
};

const actions = {
  // 获取订单list
  [types.ORDERLIST_REQ]({ commit }, params) {
    commit(types.ORDERLIST_REQ, params);
    const { sendData } = params;
    server.getOrderList({
      sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.ORDERLIST_SUC, {
          sendData,
          data: res.body.data,
        });
      }
    });
  },
};
const ENUM_ORDER_STATUS = {
  10: 'unpaidDepositList',
  20: 'paidDepositList',
  30: 'unpaidBalanceList',
  40: 'paidList',
  50: 'closedList',
};
const mutations = {
  // 获取订单list
  [types.ORDERLIST_REQ](state, params) {
    const { status } = params.sendData;
    const loading = `${ENUM_ORDER_STATUS[status]}Loading`;
    state[loading] = true;
  },
  [types.ORDERLIST_SUC](state, params) {
    const { sendData } = params;
    const { data } = params;
    const { status } = sendData;
    const loading = `${ENUM_ORDER_STATUS[status]}Loading`;
    const list = ENUM_ORDER_STATUS[status];
    state[loading] = false;
    if (data.data.length > 0) {
      data.data.forEach((el) => {
        el.bill = {
          trade_balance: el.trade_balance,
          trade_deposit: el.trade_deposit,
        };
      });
    }
    state[list] = data;
  },
  // [types.ORDERLIST_ERR](state, params) {
  //
  // },
};

export default {
  state: initialState,
  actions,
  mutations,
};
