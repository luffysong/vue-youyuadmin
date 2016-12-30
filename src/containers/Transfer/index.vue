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
        name: '转让列表',
        link: '/transfer/list',
        icon: 'data',
        type: 'item',
      },
    ];

    this.$store.dispatch(types.SET_SIDEBAR_DATA, data);
  },
};
</script>
