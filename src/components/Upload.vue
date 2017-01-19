
<template>
  <div>
    <el-upload
      :action="action"
      type="drag"
      :default-file-list="fileList"
      :show-upload-list=false
      :data="dataParams"
      :multiple="false"
      :on-progress="handleProgress"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-error="handleError"
      :before-upload="handleBefore"
    >
      <i class="el-icon-upload"></i>
      <div class="el-dragger__text">
        将文件拖到此处，或<em>点击上传</em>
        <p class="tip">只能上传jpg/png文件，且不超过500kb</p>
      </div>
    </el-upload>
    <div class="progress" :span="8">
      <div class="bar" :style="progressWidth"></div>
    </div>
    <ul>
      <li v-for="(it, i) in fileList">
        <div class="img" :style="backgroundFn(it.url)">
        </div>
        <p class="del" @click="del(i)">删除</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue';
  // import { mapGetters } from 'vuex';
  // import * as types from '../store/types';
  const uploadUrlParams = {
    token: '//rongtest07.36kr.com/api/upload/form-api',
    api: '//v0.api.upyun.com',
    name: 'krplus-pic',
    url: 'https://pic.36krcnd.com',
  };
  function getToken() {
    const time = 3600 * 1000 * 24 * 365;
    return Vue.http.post(uploadUrlParams.token, {
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
      type: 'pic',
      useOwnOrder: 1,
    }, {
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
    },
    methods: {
      handleBefore(...cs) {
        const vm = this;
        return getToken().then((res) => {
          if (res.body.code === 0) {
            vm.dataParams.policy = res.body.data.policy;
            vm.dataParams.signature = res.body.data.signature;
            return cs[0];
          }
          return false;
        }, () => {
          console.log('上传错误');
        });
      },
      handleSuccess(...cs) {
        this.fileList.push({
          url: `${uploadUrlParams.url}${cs[0].url}`,
        });
        this.percent = 0;
      },
      handleRemove(...cs) {
        this.fileList = cs[1];
      },
      handlePreview() {
      },
      handleError(...cs) {
        console.log(cs, 'err');
      },
      handleProgress(e) {
        this.percent = e.percent;
      },
      backgroundFn(...cs) {
        return `background-image:url(${cs[0]});`;
      },
      del(...cs) {
        this.fileList.splice(cs, 1);
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
        fileList: this.pFileList,
      };
    },
    mounted() {
//      getToken();
      // console.log('mounted');
      // this.$store.dispatch(types.HIDE_SIDEBAR);

    },
    created() {
      // console.log('created');
    },
    beforeUpdate() {
      // console.log('beforeUpdate');
    },
    beforeMount() {
      // console.log('beforeMount');
    },
    updated() {
      // console.log('updated');
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
