<template>
  <el-menu :default-active="$route.path" class="admin-nav-bar" mode="horizontal"
    :router="true">
    <el-menu-item index="/project">项目管理</el-menu-item>
    <el-menu-item index="/original">初始份额转让管理</el-menu-item>
    <el-menu-item index="/transfer">影视收益权转让管理</el-menu-item>
    <el-menu-item index="/investor">投资人审核</el-menu-item>
    <el-menu-item index="/order">订单管理</el-menu-item>
    <el-menu-item index="/trade">收款管理</el-menu-item>
    <el-menu-item index="/refund">退款管理</el-menu-item>
  </el-menu>
</template>

<style lang="less" scoped>
.admin-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
