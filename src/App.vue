<template>
<div class="container" :class="{'no-sidebar': !config.sidebarStatus}">
  <nprogress-container></nprogress-container>
  <nav-bar :data="config.userInfo"></nav-bar>
  <el-row>
    <side-bar :show="config.sidebarStatus" :data="config.sidebarData"></side-bar>
    <el-col :span="config.sidebarStatus ? 19 : 22" :offset="config.sidebarStatus ? 4 : 1">
      <level-bar></level-bar>
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated"></router-view>
      </transition>
    </el-col>
  </el-row>
</div>
</template>

<script>
/**
 * External dependencies
 */
import NprogressContainer from 'vue-nprogress/src/NprogressContainer';

/**
 * Internal dependencies
 */
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import LevelBar from './components/LevelBar';

export default {
  name: 'app',
  components: {
    NavBar,
    SideBar,
    LevelBar,
    NprogressContainer,
  },
  computed: {
    config() {
      return this.$store.state.config;
    },
  },
};
</script>

<style lang="less">
@import './variables.less';

body, html {
  font-size: 16px;
}

* {
  box-sizing: border-box;
}

.container {
  position: relative;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @dark-gray;
  overflow: hidden;
  padding-top: 60px;
}

.app-wrapper {
  min-height: 1000px;
  padding: 0 15px 200px;
  background-color: #fff;
  font-size: 0.875rem;
}

.animated {
  animation-duration: .4s;
}

.nprogress-container {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 81px;
  z-index: 1024;
  pointer-events: none;

  #nprogress {
    @color: #42b983;

    .bar {
      background: @color;
    }

    .peg {
      box-shadow: 0 0 10px @color, 0 0 5px @color;
    }

    .spinner-icon {
      border-top-color: @color;
      border-left-color: @color;
    }
  }
}
</style>
