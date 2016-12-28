import Vue from 'vue';
import Cookie from 'js-cookie';
import { Message } from 'element-ui';
import config from '../config';

const message = Vue.component(Message.name, Message);

function sucCallback(response) {
  if (response.body.code !== 0) {
    message({
      showClose: true,
      message: `请求出错啦(>_<)，${response.body.msg}，请重试~~~`,
      type: 'error',
    });
    throw response;
  }

  return response;
}

function errCallback(error) {
  message({
    showClose: true,
    message: `请求出错啦(>_<), ${error.statusText}，请重试~~~`,
    type: 'error',
  });

  throw error;
}

function send(type, url, body, options) {
  const authCookie = Cookie.get('Z-BBS-XSRF-TOKEN');
  if ((type === 'put' || type === 'post' || type === 'delete') && !authCookie) {
    return message({
      showClose: true,
      message: '权限问题(>_<), 请重新登录或咨询管理员~~~',
      type: 'error',
    });
  }

  if (type === 'get' ) {
    return Vue.http[type](`${config.apiBase}/api/p/admin/${url}`, {
      params: body,
      credentials: true,
    })
    .then(sucCallback, errCallback);
  }

  const defaultOptions = {
    headers: {
      'Z-BBS-X-XSRF-TOKEN': Cookie.get('Z-BBS-XSRF-TOKEN'),
    },
    credentials: true,
    emulateJSON: true,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  if (type === 'delete') {
    return Vue.http[type](`${config.apiBase}/api/p/admin/${url}`, {
      ...finalOptions,
    })
    .then(sucCallback, errCallback);
  }

  return Vue.http[type](`${config.apiBase}/api/p/admin/${url}`, {
    ...body,
  }, {
    ...finalOptions,
  })
  .then(sucCallback, errCallback);
}

const request = {
  get: (url, params) => send('get', url, params),
  put: (url, body, options) => send('put', url, body, options),
  post: (url, body, options) => send('post', url, body, options),
  delete: (url, body, options) => send('delete', url, body, options),
};

export default request;
