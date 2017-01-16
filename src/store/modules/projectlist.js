import Vue from 'vue';
import * as types from '../types';

const initialState = {
  loading: false,
  ProjectList: {
    data: [
      {
        movie: {

        },
      },
    ],
  },
};

const getters = {
  [types.ProjectListData]: state => state.ProjectList,
  [types.ProjectDisplayData]: state => state.ProjectDisplay,
};

const actions = {
  // 获取list数据
  [types.ProjectListReq]({ commit }, params) {
    const url = `/api/movie-listing?type=${params.type}`;
    commit(types.ProjectListReq);
    Vue.http.get(url, {
      emulateJSON: true,
    }).then((data) => {
      if (data.body.code === 0) {
        commit(types.ProjectListSuc, {
          data: data.body.data,
        });
      }
    }, () => {
      commit(types.ProjectListErr, {});
    });
  },
  [types.ProjectListSuc]({ commit }, data) {
    commit(types.ProjectListSuc, data);
  },
  [types.ProjectListErr]({ commit }, data) {
    commit(types.ProjectListErr, data);
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
  [types.ProjectDisplaySuc]({ commit }, data) {
    commit(types.ProjectDisplaySuc, data);
  },
  [types.ProjectDisplayErr]({ commit }, data) {
    commit(types.ProjectDisplayErr, data);
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
