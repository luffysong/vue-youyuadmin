import Vue from 'vue';
import moment from 'moment';

const server = {
  // 项目管理 - 获取 list 数据， 参数 status -> list 类型
  getProjectList(params) {
    const { sendData } = params;
    return Vue.http.get('/api/movie', {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目管理 - 获取项目详情
  getProjectDetail(params) {
    const { id } = params;
    return Vue.http.get(`/api/movie/${id}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 项目管理 - 创建项目
  createProject(params) {
    const { sendData } = params;
    sendData.release_date = moment(sendData.release_date).format('YYYY-MM-DD');
    return Vue.http.post('/api/movie', sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 项目管理 - 修改项目
  fixProject(params) {
    const { id, sendData } = params;
    sendData.release_date = moment(sendData.release_date).format('YYYY-MM-DD');
    return Vue.http.put(`/api/movie/${id}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 项目管理 - 项目转换 - 项目详情最下面的操作按钮
  // status 目标状态
  changeProject(params) {
    const { id, sendData } = params;
    sendData.release_date = moment(sendData.release_date).format('YYYY-MM-DD');
    return Vue.http.put(`/api/movie/${id}/status`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 项目管理 - 项目显隐
  displayProject(params) {
    const { id, sendData } = params;
    return Vue.http.put(`/api/movie/${id}/hide`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },

  // 原始份额管理 获取 list
  getOriginShareList(params) {
    const { sendData } = params;
    return Vue.http.get('/api/movie-initial-share', {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },
  // 原始份额管理 创建份额 - 一次传递所有数据，因为有总量相关的校验
  createOriginShare(params) {
    const { sendData } = params;
    return Vue.http.post('/api/movie-initial-share', sendData, {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // emulateJSON: false,
    });
  },
  // 原始份额管理 修改份额信息
  fixOriginShare(params) {
    const { movie_id, sendData } = params;
    return Vue.http.put(`/api/movie-initial-share/${movie_id}`, sendData, { // eslint-disable-line
      headers: {
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // emulateJSON: true,
    });
  },
  // 项目进展 获取 list
  getProjectProgressList(params) {
    const { sendData } = params;
    return Vue.http.get('/api/movie-progress', {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 项目进展 创建
  createProjectProgress(params) {
    const { sendData } = params;
    return Vue.http.post('/api/movie-progress', sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 项目进展 修改 todo: method err
  fixProjectProgress(params) {
    const { id, sendData } = params;
    return Vue.http.put(`/api/movie-progress/${id}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 项目进展 删除
  delProjectProgress(params) {
    const { id, sendData } = params;
    return Vue.http.delete(`/api/movie-progress/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },


  // 挂牌 获取 list
  getQuotedList(params) {
    const { sendData } = params;
    return Vue.http.get('/api/movie-listing', {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 挂牌 详情
  getQuotedDetail(params) {
    const { id, sendData } = params;
    return Vue.http.get(`/api/movie-listing/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 挂牌 状态转换 驳回 挂牌中
  changeQuoted(params) {
    const { id, sendData } = params;
    return Vue.http.put(`/api/movie-listing/${id}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 订单 获取 list
  getOrderList(params) {
    const { sendData } = params;
    return Vue.http.get('/api/movie-order', {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 订单 详情
  getOrderDetail(params) {
    const { id, sendData } = params;
    return Vue.http.get(`/api/movie-order/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 可转让资产（初始份额、收益权）
  getAssetsList(params) {
    const { sendData } = params;
    // return Vue.http.get('/static/transferShare.json', {
    return Vue.http.get('/api/movie-assets', {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },

  // 订单管理 获取订单 list
  // getTradeList(params) {
  //   const { sendData } = params;
  //   return Vue.http.get('/api/financial/trade', {
  //     params: sendData,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     emulateJSON: true,
  //   });
  // },
  // 订单管理 获取订单详情
  // getTradeDetail(params) {
  //   const { id, sendData } = params;
  //   return Vue.http.get(`/api/financial/trade/${id}`, {
  //     params: sendData,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     emulateJSON: true,
  //   });
  // },
  // 订单管理 切换订单状态
  // changeTrade(params) {
  //   const { id, sendData } = params;
  //   return Vue.http.put(`/api/financial/trade/${id}`, sendData, {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     emulateJSON: true,
  //   });
  // },

  // 投资人审核 获取list
  getUserRealInfoList(params) {
    const { sendData } = params;
    return Vue.http.get('/api/audit/user-real-info', {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 投资人审核 获取详情
  getUserRealInfoDetail(params) {
    const { id, sendData } = params;
    return Vue.http.get(`/api/audit/user-real-info/${id}`, {
      params: sendData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
  // 投资人审核 修改 通过/驳回
  changeUser(params) {
    const { id, sendData } = params;
    return Vue.http.put(`/api/audit/user-real-info/${id}`, sendData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  },
};
export default server;
