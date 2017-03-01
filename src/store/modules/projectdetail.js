// import _ from 'lodash';
import * as types from '../types';
import server from './AjaxServer';
import { moneyMul } from '../../utils/math';

const initialState = {
  ProjectDetail: {
    loading: false,
  },
  ProjectOriginShare: {
    loading: false,
  },
  ProjectTransferShare: {
    loading: false,
  },
  ProjectTransferEarn: {
    loading: false,
  },
  ProjectProgress: {
    loading: false,
  },
};

const getters = {
  [types.PROJECTTRANSFERSHARE_GET](state) {
    return state.ProjectTransferShare;
  },
  [types.PROJECTTRANSFEREARN_GET]: state => state.ProjectTransferEarn,
};

const actions = {
  // 获取项目描述详情detail 数据
  [types.PROJECT_DETAIL_REQ]({ commit }, params) {
    commit(types.PROJECT_DETAIL_REQ);
    server.getProjectDetail({
      id: params.id,
    }).then((data) => {
      commit(types.PROJECT_DETAIL_SUC, {
        data: data.body.data,
      });
    }, (data) => {
      commit(types.PROJECT_DETAIL_ERR, data);
    });
  },
  // 表单组件销毁时，清理数据
  [types.PROJECT_DETAIL_DEL]({ commit }) {
    commit(types.PROJECT_DETAIL_DEL);
  },

  // 项目详情 “初始份额登记”
  [types.PROJECT_ORIGINSHARE_REQ]({ commit }, params) {
    commit(types.PROJECT_ORIGINSHARE_REQ);
    const { movie_id } = params;
    server.getOriginShareList({
      sendData: {
        movie_id,
      },
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.PROJECT_ORIGINSHARE_SUC, res.body.data);
      }
    }, () => {
    });
  },

  // 获取“可转让初始份额、可转让收益”list
  [types.PROJECT_TRANSFERSHARE_REQ]({ commit }, params) {
    commit(types.PROJECT_TRANSFERSHARE_REQ, params);
    server.getAssetsList({
      sendData: params.sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.PROJECT_TRANSFERSHARE_SUC, {
          ...res.body,
          ...params,
        });
      }
    }, () => {
    });
  },
  // 获取“项目进度”list
  [types.PROJECT_PROGRESS_REQ]({ commit }, params) {
    commit(types.PROJECT_PROGRESS_REQ, params);
    server.getProjectProgressList({
      sendData: params.sendData,
    }).then((res) => {
      if (res.body.code === 0) {
        commit(types.PROJECT_PROGRESS_SUC, {
          ...res.body,
          ...params,
        });
        params.callback(res.body.data.list);
      }
    }, () => {
    });
  },
};
const ENUM = {
  SHARE: 1,
  EARN: 2,
};
const mutations = {
  // 获取项目描述详情detail 数据
  [types.PROJECT_DETAIL_REQ](state) {
    state.ProjectDetail.loading = true;
  },
  [types.PROJECT_DETAIL_SUC](state, params) {
    const { data } = params;
    state.ProjectDetail.loading = false;
    data.transferable_ratio = moneyMul(data.transferable_ratio, 100);
    state.ProjectDetail = {
      ...state.ProjectDetail,
      ...data,
    };
  },
  [types.PROJECT_DETAIL_ERR](state, err) {
    state.ProjectDetail = {
      ...err,
      loading: false,
    };
  },
  // 表单组件销毁时，清理数据
  [types.PROJECT_DETAIL_DEL](state) {
    state.ProjectDetail = {
      loading: false,
    };
  },

  // 项目详情 初始份额登记 project origin share
  [types.PROJECT_ORIGINSHARE_REQ](state) {
    state.ProjectOriginShare.loading = true;
  },
  [types.PROJECT_ORIGINSHARE_SUC](state, data) {
    let totalShare = 0;
    data.list.forEach((el) => {
      el.share = moneyMul(el.share, 100);
      totalShare += el.share;
    });
    data.totalInfo = {
      totalPeople: data.list.length,
      totalShare,
    };
    state.ProjectOriginShare = {
      loading: false,
      ...data,
    };
  },
  [types.PROJECT_ORIGINSHARE_ERR](state, err) {
    state.ProjectOriginShare = {
      loading: false,
      ...err,
    };
  },
  [types.PROJECT_ORIGINSHARE_DEL](state) {
    state.ProjectOriginShare = {
      loading: false,
    };
  },

  // 获取可转让初始份额list
  [types.PROJECT_TRANSFERSHARE_REQ](state, params) {
    const { type } = params.sendData;
    if (type === ENUM.SHARE) {
      state.ProjectTransferShare.loading = true;
    } else if (type === ENUM.EARN) {
      state.ProjectTransferEarn.loading = true;
    }
  },
  [types.PROJECT_TRANSFERSHARE_SUC](state, data) {
    const { type } = data.sendData;
    const tempArr = [];
    data.data.forEach((el) => {
      const tempInfo = {};
      tempInfo.certificate_name = el.user.real_info.certificate_name;
      tempInfo.certificate_number = el.user.real_info.certificate_number;
      tempInfo.certificate_type = el.user.real_info.certificate_type;
      tempInfo.share = el.share;
      tempArr.push(tempInfo);
    });
    let totalShare = 0;
    data.data.forEach((el) => {
      el.share = moneyMul(el.share, 100);
      totalShare += el.share;
    });
    data.totalInfo = {
      totalPeople: data.data.length,
      totalShare,
    };
    if (type === ENUM.SHARE) {
      state.ProjectTransferShare.loading = false;
      state.ProjectTransferShare.list = tempArr;
      state.ProjectTransferShare.totalInfo = data.totalInfo;
    } else if (type === ENUM.EARN) {
      state.ProjectTransferEarn.loading = false;
      state.ProjectTransferEarn.list = tempArr;
      state.ProjectTransferEarn.totalInfo = data.totalInfo;
    }
  },
  [types.PROJECT_TRANSFERSHARE_ERR](state, data) {
    const { type } = data.sendData;
    if (type === ENUM.SHARE) {
      state.ProjectTransferShare.loading = false;
    } else if (type === ENUM.EARN) {
      state.ProjectTransferEarn.loading = false;
    }
  },

  // 获取项目进度
  [types.PROJECT_PROGRESS_REQ](state) {
    state.ProjectProgress.loading = true;
  },
  [types.PROJECT_PROGRESS_SUC](state, data) {
    state.ProjectProgress.loading = false;
    state.ProjectProgress.list = data.data.list;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
