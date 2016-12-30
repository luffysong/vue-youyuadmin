<template>
<router-view></router-view>
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
        name: '项目登记',
        link: '/project/register',
        icon: 'document',
        type: 'item',
      },
    ];

    this.$store.dispatch(types.SET_SIDEBAR_DATA, data);
  },
};
</script>
