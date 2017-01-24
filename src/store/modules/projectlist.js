import Vue from 'vue';
import * as types from '../types';
import server from './AjaxServer';

const initialState = {
  loading: false,
  ProjectList: {
    data: [
      {
        is_hide: false,
        movie: {},
      },
    ],
  },
};

const getters = {
  [types.ProjectListData]: state => state.ProjectList,
  // 条目显隐
  [types.ProjectDisplayData]: state => state.ProjectDisplay,
};

const actions = {
  // 获取list数据
  [types.ProjectListReq]({ commit }, params) {
    server.getProjectList({
      sendData: {
        status: params.status,
      },
    }).then((data) => {
      if (data.body.code === 0) {
        commit(types.ProjectListSuc, {
          data: data.body.data,
        });
      }
    }, () => {
      commit(types.ProjectListErr, {});
    });
    commit(types.ProjectListReq);
  },
  // 设置 显示、隐藏
  [types.ProjectDisplayReq]({ commit }, params) {
    const url = `http://localhost:10001/static/projectlist.json?type=${params.type}&tt=1`;
    commit(types.ProjectDisplayReq);
    Vue.http.get(url, {
      emulateJSON: true,
    }).then((data) => {
      if (data.body.code === 0) {
        commit(types.ProjectDisplaySuc, {
          data: data.body.data,
        });
      }
    }, () => {
      commit(types.ProjectDisplayErr, {});
    });
  },
};

const mutations = {
  // 获取list 数据
  [types.ProjectListReq](state) {
    state.loading = true;
  },
  [types.ProjectListSuc](state, data) {
    state.loading = false;
    state.ProjectList = data.data;
  },
  [types.ProjectListErr](state, data) {
    state.loading = false;
    state.ProjectList = data.data;
  },
  // 设置 显示、隐藏
  [types.ProjectDisplayReq](state) {
    state.loading = true;
  },
  [types.ProjectDisplaySuc](state, data) {
    state.loading = false;
    state.ProjectDisplay = data.data;
  },
  [types.ProjectDisplayErr](state, data) {
    state.loading = false;
    state.ProjectDisplay = data.data;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
