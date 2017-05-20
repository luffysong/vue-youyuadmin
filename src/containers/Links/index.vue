<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  /**
   * Internal dependencies
   */
  import * as types from '../../store/types';

  export default {
    name: 'LinksWrapper',
    mounted() {
      const data = [
        {
          name: '添加链接',
          link: '/links/create',
          icon: 'plus',
          type: 'item',
        },
        {
          name: '链接列表',
          link: '/links/list',
          icon: 'document',
          type: 'item',
        },
      ];

      this.$store.dispatch(types.SET_SIDEBAR_DATA, data);
    },
  };
</script>
