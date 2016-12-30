<template>
<router-view></router-view>
</template>

<script>
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

    this.$store.dispatch('setSidebarData', data);
  },
};
</script>
