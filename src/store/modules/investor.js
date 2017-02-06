// import _ from 'lodash';
import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  allListLoading: false,
  allList: {},
  pendingListLoading: false,
  pendingList: {},
  passListLoading: false,
  passList: {},
  rejectListLoading: false,
  rejectList: {},

  detailLoading: false,
  detail: {},
};

const actions = {
  // 获取list
  [types.INVESTORLIST_REQ]({ commit }, params) {
    commit(types.INVESTORLIST_REQ, params);
    const { sendData } = params;
    server.getUserRealInfoList({
      sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.INVESTORLIST_SUC, {
          sendData,
          data: res.body.data,
        });
      }
    });
  },
  // 获取detail
  [types.INVESTORDETAIL_REQ]({ commit }, params) {
    commit(types.INVESTORDETAIL_REQ);
    const { id } = params;
    const { sendData } = params;
    server.getUserRealInfoDetail({
      id,
      sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.INVESTORDETAIL_SUC, {
          data: res.body.data,
        });
      }
    });
  },
};
const ENUM_INVESTOR_STATUS = {
  0: 'allList',
  1: 'pendingList',
  2: 'passList',
  3: 'rejectList',
};
const mutations = {
  [types.INVESTORLIST_REQ](state, params) {
    const { sendData } = params;
    let { status } = sendData;
    if (!status) {
      status = 0;
    }
    const loading = `${ENUM_INVESTOR_STATUS[status]}Loading`;
    state[loading] = true;
  },
  [types.INVESTORLIST_SUC](state, params) {
    const { data } = params;
    const { sendData } = params;
    let { status } = sendData;
    if (!status) {
      status = 0;
    }
    const loading = `${ENUM_INVESTOR_STATUS[status]}Loading`;
    const list = ENUM_INVESTOR_STATUS[status];
    state[loading] = false;
    state[list] = data;
  },
  [types.INVESTORDETAIL_REQ](state) {
    state.detailLoading = true;
  },
  [types.INVESTORDETAIL_SUC](state, params) {
    state.detailLoading = false;
    const { data } = params;
    state.detail = data;
  },
};

const getters = {
  [types.INVESTORGET]: state => state.allList,
};
export default {
  state: initialState,
  actions,
  mutations,
  getters,
};
