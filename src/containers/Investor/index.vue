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
  name: 'Investor',
  mounted() {
    this.$store.dispatch(types.HIDE_SIDEBAR);
  },
  components: {
  },
};
</script>

<style lang="less" scoped>

</style>
