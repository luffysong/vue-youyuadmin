<template>
  <el-menu theme="dark" :default-active="activeIndex" class="admin-nav-bar" mode="horizontal"
    :router="true">
    <a class="logo" href="/">
      <img :src="require('./imgs/logo.svg')" alt="LOGO" />
    </a>
    <el-menu-item index="/project">项目管理</el-menu-item>
    <el-menu-item index="/original">初始份额转让管理</el-menu-item>
    <el-menu-item index="/transfer">影视收益权转让管理</el-menu-item>
    <el-menu-item index="/investor">投资人审核</el-menu-item>
    <el-menu-item index="/order">订单管理</el-menu-item>
    <el-menu-item index="/trade">收款管理</el-menu-item>
    <el-menu-item index="/refund">退款管理</el-menu-item>
    <el-menu-item index="/usermanage">用户管理</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        activeIndex: this.$route.path,
      };
    },
    watch: {
      $route(to) {
        this.activeIndex = `/${to.path.split('/')[1]}`;
      },
    },
  };
</script>

<style lang="less" scoped>
.admin-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 180px;
  z-index: 999;

  .logo {
    position: absolute;
    top: 10px;
    left: 20px;
    display: block;
    width: 120px;

    img {
      width: 100%;
    }
  }
}
</style>
