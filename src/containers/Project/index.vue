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
        name: '新建项目',
        link: '/project/create',
        icon: 'plus',
        type: 'item',
      },
      {
        name: '展示项目',
        link: '/project/show',
        icon: 'document',
        type: 'item',
      },
    ];

    this.setSidebarData(data);
  },
};
</script>