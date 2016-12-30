<template>
<el-tabs class="el-col-24" type="border-card">
  <el-tab-pane label="待付保证金">
    <order-table />
  </el-tab-pane>
  <el-tab-pane label="已付保证金">
    <order-table />
  </el-tab-pane>
  <el-tab-pane label="待付剩余款">
    <order-table />
  </el-tab-pane>
  <el-tab-pane label="付款完成">
    <order-table />
  </el-tab-pane>
  <el-tab-pane label="交易关闭">
    <order-table />
  </el-tab-pane>
</el-tabs>
</template>

<script>
/**
 * Internal dependencies
 */
import OrderTable from './tables/OrderTable';

export default {
  name: 'Order',
  components: {
    OrderTable,
  },
  mounted() {
    this.$store.dispatch('hideSidebar');
  },
};
</script>

<style lang="less" scoped>

</style>
