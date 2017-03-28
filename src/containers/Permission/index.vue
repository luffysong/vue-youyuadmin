<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  import * as types from '../../store/types';

  export default {
    name: 'Permission',
    data() {
      return {
        sidebarData: [
          {
            name: '用户管理',
            link: '/permission/usermanage',
            icon: 'menu',
            type: 'item',
          },
          {
            name: '角色管理',
            link: '/permission/rolemanage',
            icon: 'star-on',
            type: 'item',
          },
        ],
      };
    },
    beforeCreate() {
      this.$store.dispatch(types.PERMISSION_LIST_REQ);
    },
    mounted() {
      this.$store.dispatch(types.SET_SIDEBAR_DATA, this.sidebarData);
    },
  };
</script>
<style scoped lang="less">
</style>
