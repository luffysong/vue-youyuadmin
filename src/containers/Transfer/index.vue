<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
/**
 * External dependencies
 */
import { mapMutations } from 'vuex';

export default {
  name: 'ProjectWrapper',
  methods: {
    ...mapMutations([
      'setSidebarData',
    ]),
  },
  mounted() {
    const data = [
      {
        name: '转让列表',
        link: '/transfer/list',
        icon: 'data',
        type: 'item',
      },
    ];

    this.setSidebarData(data);
  },
};
</script>
