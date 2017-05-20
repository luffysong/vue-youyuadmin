<template>
  <div>
    <div v-if="!pDisabled">
      <el-upload
        class="avatar-uploader"
        :action="action"
        :file-list="fileList"
        :show-file-list=false
        :data="dataParams"
        :multiple="false"
        :on-progress="handleProgress"
        :on-success="handleSuccess"
        :on-error="handleError"
        :before-upload="handleBefore"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import _ from 'lodash';
  import { Message } from 'element-ui';
  import config from '../../../config/index';

  const uploadUrlParams = {
    token: `${config.uploadToken}/api/upload/upyun-token`,
    api: '//v0.api.upyun.com',
    name: 'krplus-pic',
    url: 'https://pic.36krcnd.com',
  };
  function getToken() {
    const time = 3600 * 1000 * 24 * 365;
    return axios.get(uploadUrlParams.token, {
      params: {
        param: JSON.stringify({
          bucket: 'krplus-pic',
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
        this.imageUrl = `${uploadUrlParams.url}${cs[0].url}`;
        this.tempCache = null;
        // 这里只需要上传一张
        this.fileList = [p];
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
        this.fileList.splice(cs[0], 1);
        this.pCallback({
          type: this.pType,
          value: this.fileList,
        });
      },
      imgReset(imgUrl) {
        this.imageUrl = imgUrl;
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
        fileList: [],
        tempCache: null,
        // 兼顾新增和修改：新增不显示 logo，修改需要显示 logo
        imageUrl: this.$store.state.route.name === 'LinksEdit' ? this.$store.state.editLinkData.link_logo : '',
      };
    },
    mounted() {
      this.initList();
    },
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
</style>
<style lang="css">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
</style>
