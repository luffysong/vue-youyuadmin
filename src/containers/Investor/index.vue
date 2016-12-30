<template>
<el-tabs class="el-col-24" type="border-card">
  <el-tab-pane label="待审核">

  </el-tab-pane>
  <el-tab-pane label="已通过">

  </el-tab-pane>
  <el-tab-pane label="已驳回">

  </el-tab-pane>
  <el-tab-pane label="全部">

  </el-tab-pane>
</el-tabs>
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
};
</script>

<style lang="less" scoped>

</style>
