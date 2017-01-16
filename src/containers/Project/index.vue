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
  name: 'ProjectWrapper',
  mounted() {
    const data = [
      {
        name: '新建项目',
        link: '/project/create',
        icon: 'plus',
        type: 'item',
      },
      {
        name: '项目列表',
        link: '/project/list',
        icon: 'document',
        type: 'item',
      },
    ];

    this.$store.dispatch(types.SET_SIDEBAR_DATA, data);
  },
};
</script>
