<template>
  <el-form :model="linkData" ref="form" label-width="100px">
    <el-form-item label="名称：">
      <el-input type="text" v-model="linkData.link_name" auto-complete="off" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="链接地址：">
      <el-input type="url" v-model="linkData.link_url" auto-complete="off" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="显示顺序：">
      <el-input type="age" v-model="linkData.sort" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="图标：">
      <img :src="linkData.link_logo"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="back()">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        linkData: this.$store.state.detailLinkData,
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
    },
  };
</script>

<style lang="less" scoped>
  img {
    width: 80px;
    height: 80px;
  }
</style>
