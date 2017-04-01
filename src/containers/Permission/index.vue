<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  import * as types from '../../store/types';
  import permissionCheck from '../../utils/permissionCheck';

  export default {
    name: 'Permission',
    data() {
      return {
        sidebarData: [],
        permissionCheckBind: permissionCheck.bind(this),
      };
    },
    mounted() {
      if (this.permissionCheckBind(['api.system.user.index'])) {
        this.sidebarData = [
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
        ];
      } else {
        this.sidebarData = [];
      }
      this.$store.dispatch(types.SET_SIDEBAR_DATA, this.sidebarData);
    },
  };
</script>
<style scoped lang="less">
</style>
