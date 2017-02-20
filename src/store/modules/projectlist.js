import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  // 未登记
  unregisteredLoading: false,
  unregisteredData: {},
  // 已登记
  registeredLoading: false,
  registeredData: {},
  // 已上映
  releaseLoading: false,
  releaseData: {},
  // 已清算
  liquidationLoading: false,
  liquidationData: {},
};

const actions = {
  // 获取list数据
  [types.PROJECTLIST_REQ]({ commit }, params) {
    const { sendData } = params;
    server.getProjectList({
      sendData,
    }).then((data) => {
      if (data.body.code === 0) {
        commit(types.PROJECTLIST_SUC, {
          sendData,
          data: data.body.data,
        });
      }
    }, () => {
      commit(types.PROJECTLIST_ERR, {
        sendData,
      });
    });
    commit(types.PROJECTLIST_REQ, sendData);
  },
  // 设置 显示、隐藏
};

const ENUM_LIST_STATUS = {
  10: 'unregistered',
  20: 'registered',
  30: 'release',
  40: 'liquidation',
};

const mutations = {
  // 获取list 数据
  [types.PROJECTLIST_REQ](state, sendData) {
    const { status } = sendData;
    const loading = `${ENUM_LIST_STATUS[status]}Loading`;
    state[loading] = true;
  },
  [types.PROJECTLIST_SUC](state, params) {
    const { status } = params.sendData;
    const { data } = params;
    const loading = `${ENUM_LIST_STATUS[status]}Loading`;
    state[loading] = false;
    const list = `${ENUM_LIST_STATUS[status]}Data`;
    state[list] = data;
  },
  [types.PROJECTLIST_ERR](state, params) {
    const { status } = params.sendData;
    const loading = `${ENUM_LIST_STATUS[status]}Loading`;
    state[loading] = false;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
