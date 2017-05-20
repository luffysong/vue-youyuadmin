<template>
  <el-form :model="linkData" :rules="rules" ref="form" label-width="100px">
    <el-form-item label="名称：" prop="link_name">
      <el-input type="text" v-model="linkData.link_name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="链接地址：" prop="link_url">
      <el-input type="url" v-model="linkData.link_url" auto-complete="off">
        <template slot="prepend">{{urlPrepend}}</template>
      </el-input>
    </el-form-item>
    <el-form-item
      label="显示顺序："
      prop="sort"
      :rules="[
        { required: true, message: '请输入显示顺序' },
        { type: 'number', min: 1, max: 255, message: '显示顺序必须为 0 至 255 之间的数值'}
      ]"
    >
      <el-input type="age" v-model.number="linkData.sort"></el-input>
    </el-form-item>
    <el-form-item label="图标：" prop="link_logo">
      <Upload :pFileList="fileListFn(linkData.link_logo)"
              :pCallback="uploadCallback" pType="link_logo"
              pTip="上传格式 jpg, png; 尺寸：210x294px"
              :pDisabled="false"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import _ from 'lodash';
  import * as types from '../../../store/types';
  import Upload from './uploadLogo';

  export default {
    props: {
    },
    data() {
      return {
        urlPrepend: 'http://',
        linkData: {
          link_name: '',
          link_url: '',
          sort: '',
          link_logo: '',
        },
        rules: {
          link_name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          link_url: [
            { required: true, message: '请输入链接', trigger: 'blur' },
          ],
          link_logo: [
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.submitCallback(_.cloneDeep(this.linkData));
          }
        });
      },
      resetForm() {
        this.$refs.form.resetFields();
        this.$children[0].$children[3].$children[0].imgReset('');
      },
      submitCallback(linkData) {
        linkData.link_url = this.urlPrepend + linkData.link_url;
        this.$store.dispatch(types.LINKSCREATE_REQ, {
          sendData: linkData,
          callback: () => {
            this.$message({
              message: '添加成功！',
              type: 'success',
            });
            this.$router.push({
              path: '/links/list',
            });
          },
        });
      },
      fileListFn(...cs) {
        // 此处数据处理说明，组件需要数组，但实际需求中，有可能是一个字符串
        if (typeof cs[0] === 'string') {
          const arr = [];
          if (cs[0].length > 0) {
            arr.push(cs[0]);
          }
          return arr;
        }
        return cs[0];
      },
      uploadCallback(params) {
        let tempVal;
        if (params.type === 'link_logo') {
          if (params.value.length === 0) {
            tempVal = [];
          } else {
            tempVal = params.value[0].url;
          }
        }
        this.linkData[params.type] = tempVal;
      },
    },
    components: {
      Upload,
    },
  };
</script>

<style lang="less" scoped>

</style>
