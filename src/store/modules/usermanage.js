import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  listLoading: false,
  userlist: null,
  permissionListLoading: false,
  permissionList: null,
};

const actions = {
  // 获取用户列表
  [types.USER_MANAGER_REQ]({ commit }, params) {
    const { sendData } = params;
    commit(types.USER_MANAGER_REQ);
    server.getUserManage({
      sendData,
    }).then((res) => {
      if (res.data.code === 0) {
        commit(types.USER_MANAGER_SUC, {
          resdata: res.data.data,
        });
      }
    });
  },
  [types.USER_MANAGER_CHANGE_REQ]({ commit }, params) {
    const { id, sendData } = params;
    commit(types.USER_MANAGER_CHANGE_REQ);
    server.getQuotedDetail({
      id,
      sendData,
    }).then((res) => {
      if (res.data.code === 0) {
        commit(types.USER_MANAGER_CHANGE_SUC, {
          resdata: res.data.data,
        });
      }
    });
  },
  // 获取权限list
  [types.PERMISSION_LIST_REQ]({ commit }) {
    commit(types.PERMISSION_LIST_REQ);
    server.getPermissionList().then((res) => {
      commit(types.PERMISSION_LIST_SUC, {
        resdata: res.data.data,
      });
    });
  },
};

const mutations = {
  [types.USER_MANAGER_REQ](state) {
    state.listLoading = true;
  },
  [types.USER_MANAGER_SUC](state, data) {
    state.listLoading = false;
    state.userlist = data.resdata;
  },
  [types.USER_MANAGER_ERR](state) {
    state.listLoading = false;
    state.userlist = null;
  },

  [types.USER_MANAGER_CHANGE_REQ](state) {
    state.loading = true;
  },
  [types.USER_MANAGER_CHANGE_SUC](state, data) {
    state.loading = false;
    state.detail = data.resdata;
  },
  [types.USER_MANAGER_CHANGE_ERR](state, data) {
    state.loading = false;
    state.data = data;
  },

  [types.PERMISSION_LIST_REQ](state) {
    state.permissionListLoading = true;
  },
  [types.PERMISSION_LIST_SUC](state, data) {
    state.permissionListLoading = false;
    console.log(data.resdata, 'data');
    state.permissionList = data.resdata;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
};
