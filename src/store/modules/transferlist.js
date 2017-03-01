import { toPercent } from '../../utils/math';
import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  pendingLoading: false,
  pending: {},

  rejectLoading: false,
  reject: {},

  listedLoading: false,
  listed: {},

  completeLoading: false,
  complete: {},

  invalidLoading: false,
  invalid: {},
};

// const getters = {
//   [types.TransferListPENDING]: state => state.data.PENDING,
// };

const actions = {
  [types.TRANSFERLIST_REQ]({ commit }, params) {
    const { sendData } = params;
    commit(types.TRANSFERLIST_REQ, sendData);
    server.getQuotedList({
      sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.TRANSFERLIST_SUC, {
          sendData,
          resdata: res.body.data,
        });
      }
    });
  },
};
const ENUM_LIST_STATUS = {
  1: 'pending',
  2: 'reject',
  3: 'listed',
  4: 'complete',
  5: 'invalid',
};
const mutations = {
  [types.TRANSFERLIST_REQ](state, data) {
    const { status } = data;
    const loading = `${ENUM_LIST_STATUS[status]}Loading`;
    state[loading] = true;
  },
  [types.TRANSFERLIST_SUC](state, data) {
    const { sendData } = data;
    const { resdata } = data;
    const { status } = sendData;
    const loading = `${ENUM_LIST_STATUS[status]}Loading`;
    const list = ENUM_LIST_STATUS[status];
    resdata.data.forEach((el) => {
      // el.asset.share = toPercent(el.asset.share);
      el.share = toPercent(el.share);
    });
    state[loading] = false;
    state[list] = resdata;
  },
  [types.TRANSFERLIST_ERR](state) {
    state.loading = false;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
