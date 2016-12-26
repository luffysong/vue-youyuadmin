<template>
  <el-col :span="3" class="admin-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }" v-if="data.length > 0">
    <el-menu :router="true" :default-active="$route.path">
      <div v-for="item in data">
        <el-submenu :index="item.name" v-if="item.type === 'menu'">
          <template slot="title">
            <i :class="'el-icon-' + item.icon"></i>
            {{ item.name }}
          </template>
          <el-menu-item v-for="sub in item.sub" :index="sub.link">
            <i :class="'el-icon-' + sub.icon"></i>
            {{ sub.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.link" v-if="item.type === 'item'">
          <i :class="'el-icon-' + item.icon"></i>
          {{ item.name }}
        </el-menu-item>
      </div>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    show: Boolean,
    data: Array,
  },
};
</script>

<style lang="less" scoped>
  @import '../variables.less';

  .admin-sidebar {
    position: fixed;
    top: 60px;
    padding-top: 61px;
    bottom: 0;
    left: 0;
    background-color: @bg;
    box-shadow: 0 1px 0 rgba(0,0,0,0.25);
    z-index: 999;
  }
</style>
