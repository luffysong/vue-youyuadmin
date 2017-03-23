<template>
  <div>
    <div v-if="!pDisabled">
      <el-upload
        :action="action"
        drag
        :file-list="fileList"
        :show-file-list=false
        :data="dataParams"
        :multiple="false"
        :on-progress="handleProgress"
        :on-success="handleSuccess"
        :on-error="handleError"
        :before-upload="handleBefore"
      >
        <i class="el-icon-upload"></i>
        <div class="el-dragger__text">
          将文件拖到此处，或<em>点击上传</em>
          <p class="tip">{{ pTip || '只能上传jpg/png文件，且不超过500kb' }}</p>
        </div>
      </el-upload>
      <div class="progress" :span="8">
        <div class="bar" :style="progressWidth"></div>
      </div>
    </div>
    <ul>
      <li v-for="(it, i) in shadowFileList">
        <div class="img" :style="backgroundFn(it.url)">
        </div>
        <p class="del" @click="del(i)" v-if="!pDisabled">删除</p>
      </li>
    </ul>
  </div>
</template>

<script>
  // import Vue from 'vue';
  import axios from 'axios';
  import _ from 'lodash';
  import { Message } from 'element-ui';
  import config from '../config';

  const uploadUrlParams = {
    token: `${config.uploadToken}/api/upload/upyun-token`,
    api: '//v0.api.upyun.com',
    name: 'krplus-pic',
    // name: 'krplus-priv',
    url: 'https://pic.36krcnd.com',
    // url: 'https://krplus-priv.b0.upaiyun.com',
  };
  function getToken() {
    const time = 3600 * 1000 * 24 * 365;
    return axios.get(uploadUrlParams.token, {
      params: {
        param: JSON.stringify({
          bucket: 'krplus-pic',
          // bucket: 'krplus-priv',
          expiration: parseInt((new Date().getTime() + time) / 1000, 10),
          'save-key': '/{year}{mon}{day}/{filemd5}{.suffix}',
          'x-gmkerl-thumb': '/rotate/auto',
          'x-gmkerl-type': 'fix_width',
          'x-gmkerl-unsharp': true,
          'allow-file-type': 'jpg,jpeg,png,gif',
          'content-length-range': '5120, 5120000',
          'image-width-range': '20, 1024',
        }),
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      emulateJSON: true,
    });
  }

  export default {
    name: 'Upload',
    props: {
      pFileList: Array,
      pCallback: Function,
      pType: String,
      pDisabled: Boolean,
      pTip: String,
    },
    methods: {
      initList() {
        const arrNew = [];
        if (_.isPlainObject(this.pFileList[0])) {
          this.pFileList.forEach((el) => {
            arrNew.push(el);
          });
          this.fileList = arrNew;
          return;
        }
        this.pFileList.forEach((el) => {
          const item = {
            name: '',
            url: el,
          };
          arrNew.push(item);
        });
        this.shadowFileList = _.cloneDeep(arrNew);
        this.fileList = arrNew;
      },
      handleBefore(...cs) {
        const vm = this;
        return getToken().then((res) => {
          if (res.data.code === 0) {
            vm.dataParams.policy = res.data.data.policy;
            vm.dataParams.signature = res.data.data.signature;
            const url = window.URL.createObjectURL(cs[0]); // eslint-disable-line
            this.tempCache = {
              url,
            };
            return cs[0];
          }
          return false;
        }, () => {
        });
      },
      handleSuccess(...cs) {
        const p = {
          url: `${uploadUrlParams.url}${cs[0].url}`,
        };
        this.shadowFileList.push(this.tempCache);
        this.tempCache = null;
        this.fileList.push(p);
        this.percent = 0;
        this.pCallback({
          type: this.pType,
          value: this.fileList,
        });
      },
      handleError(...cs) {
        Message({ // eslint-disable-line
          showClose: true,
          message: cs[0].message.match(/"message":"([^"]+)"/)[1],
          type: 'error',
          duration: 4000,
          customClass: 'ajaxErrorMsg',
        });
        this.tempCache = null;
      },
      handleProgress(e) {
        this.percent = e.percent;
      },
      backgroundFn(...cs) {
        return `background-image:url(${cs[0]});`;
      },
      del(...cs) {
        this.shadowFileList.splice(cs[0], 1);
        this.fileList.splice(cs[0], 1);
        this.pCallback({
          type: this.pType,
          value: this.fileList,
        });
      },
    },
    computed: {
      progressWidth() {
        return `width: ${this.percent}%`;
      },
    },
    data() {
      return {
        action: `${uploadUrlParams.api}/${uploadUrlParams.name}`,
        percent: 0,
        dataParams: {
          policy: '',
          signature: '',
        },
        shadowFileList: [],
        fileList: [],
        tempCache: null,
      };
    },
    mounted() {
      this.initList();
    },
    components: {},
  };

</script>
<style scoped lang="css">
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    float: left;
    margin: 0 10px 0 0;
  }

  .tip {
    margin: -10px 0 0;
  }

  .del {
    margin: 0;
    text-align: center;
    cursor: pointer;
    color: #00d6ff;
  }

  .img {
    width: 120px;
    height: 120px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    border: 1px solid #d3d7db;
  }

  .progress {
    width: 360px;
    height: 3px;
    border-radius: 3px;
    margin-bottom: 15px;
  }

  .bar {
    background: #19dc1c;
    height: 3px;
    width: 0;
  }
</style>
<style lang="css">
  /* 覆盖样式 */
  .el-dragger {
    height: 140px;
    width: 280px;
  }

  .el-dragger .el-icon-upload {
    margin: 10px 0;
    font-size: 66px;
  }
</style>
