import axios from 'axios';
import * as types from '../types';
import server from './AjaxServer';
/* eslint-disable */
const initialState = {
  // 所有用户
  userListLoading: false,
  userlist: null,
  // 完整权限列表
  permissionListLoading: false,
  permissionList: null,
  // 个人权限详情
  permissionDetailLoading: false,
  permissionDetail: null,
  // 获取当前用户详情
  permissionSelfLoading: false,
  permissionSelf: null,
  // 获取所有角色
  roleListLoading: false,
  roleList: null,
  // 用户详情页，用户权限明细，拥有权限与
  userPermissionExtend: null,

  // 角色对应权限
  rolePermissionLoading: false,
  rolePermission: null,
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
    return server.getPermissionList().then((res) => {
      commit(types.PERMISSION_LIST_SUC, {
        resdata: res.data.data,
      });
    });
  },

  // 获取权限详情
  [types.PERMISSION_DETAIL_REQ]({ commit }, params) {
    const { id } = params;
    commit(types.PERMISSION_DETAIL_REQ);
    server.getPermissionDetail({ id }).then((res) => {
      commit(types.PERMISSION_DETAIL_SUC, {
        resdata: res.data.data,
      });
    });
  },
  // 获取当前用户权限详情
  [types.PERMISSION_SELF_REQ]({ commit }) {
    commit(types.PERMISSION_SELF_REQ);
    server.getPermissionSelf().then((res) => {
      commit(types.PERMISSION_SELF_SUC, {
        resdata: res.data.data,
      });
    });
  },
  // 获取所有角色
  [types.ROLE_LIST_REQ]({ commit }) {
    commit(types.ROLE_LIST_REQ);
    return server.getRoleList().then((res) => {
      commit(types.ROLE_LIST_SUC, {
        resdata: res.data.data,
      });
    });
  },
  // 获取角色对应权限
  [types.ROLE_PERMISSION_REQ]({ commit }, params) {
    commit(types.ROLE_PERMISSION_REQ);
    return server.getRolePermission(params).then((res) => {
      commit(types.ROLE_PERMISSION_SUC, {
        resdata: res.data.data,
      });
    });
  },

  // 权限管理 用户详情 用户权限明细
  [types.USER_PERMISSION_EXTEND]({ commit }, params) {
    const { id } = params;
    commit(types.PERMISSION_LIST_REQ);
    commit(types.PERMISSION_DETAIL_REQ);
    return axios.all([server.getPermissionDetail({ id }), server.getPermissionList()])
    .then(axios.spread((detail, list) => {
      commit(types.PERMISSION_DETAIL_SUC, {
        resdata: detail.data.data,
      });
      commit(types.PERMISSION_LIST_SUC, {
        resdata: list.data.data,
      });
      commit(types.USER_PERMISSION_EXTEND, {
        detail: detail.data.data,
        list: list.data.data,
      });
    }));
  },
};

const mutations = {
  [types.USER_MANAGER_REQ](state) {
    state.userListLoading = true;
  },
  [types.USER_MANAGER_SUC](state, data) {
    state.userListLoading = false;
    state.userlist = data.resdata;
  },
  [types.USER_MANAGER_ERR](state) {
    state.userListLoading = false;
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

  // 所有权限
  [types.PERMISSION_LIST_REQ](state) {
    state.permissionListLoading = true;
  },
  [types.PERMISSION_LIST_SUC](state, data) {
    state.permissionListLoading = false;
    state.permissionList = data.resdata;
  },

  [types.PERMISSION_DETAIL_REQ](state) {
    state.permissionDetailLoading = true;
  },
  [types.PERMISSION_DETAIL_SUC](state, data) {
    state.permissionDetailLoading = false;
    state.permissionDetail = data.resdata;
  },

  [types.PERMISSION_SELF_REQ](state) {
    state.permissionSelfLoading = true;
  },
  [types.PERMISSION_SELF_SUC](state, data) {
    state.permissionSelfLoading = false;
    state.permissionSelf = data.resdata;
  },

  [types.ROLE_LIST_REQ](state) {
    state.roleListLoading = true;
  },
  [types.ROLE_LIST_SUC](state, data) {
    state.roleListLoading = false;
    state.roleList = data.resdata;
  },

  [types.ROLE_PERMISSION_REQ](state) {
    state.rolePermissionLoading = true;
  },
  [types.ROLE_PERMISSION_SUC](state, data) {
    state.rolePermission = data.resdata;
  },

  // 权限管理，人对应的权限
  [types.USER_PERMISSION_EXTEND](state, data) {
    state.userPermissionExtend = '';
    if (data.detail.my_permissions.super) {
      Object.keys(data.list).forEach((cel) => {
        Object.keys(data.list[cel].children).forEach((ccel) => {
          // 叶子节点 增加属性
          data.list[cel].children[ccel].status = 1;
          // 叶子节点的父节点增加拥有权限数量的统计字段
          if (data.list[cel].status) {
            data.list[cel].status += 1;
          } else {
            data.list[cel].status = 1;
          }
        });
      });
    } else {
      Object.keys(data.detail.my_permissions).forEach((el) => {
        Object.keys(data.list).forEach((cel) => {
          Object.keys(data.list[cel].children).forEach((ccel) => {
            if (el === ccel) {
              data.list[cel].children[ccel].status = 1;
              if (data.list[cel].status) {
                data.list[cel].status += 1;
              } else {
                data.list[cel].status = 1;
              }
            }
          });
        });
      });
    }
    state.userPermissionExtend = data.list;
  },
  // 权限管理，角色对应的权限

};

export default {
  state: initialState,
  actions,
  mutations,
};
