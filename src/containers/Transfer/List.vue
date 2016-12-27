<template>
<el-tabs class="el-col-24" type="border-card">
  <el-tab-pane label="待审核">
    <transfer-table />
  </el-tab-pane>
  <el-tab-pane label="已挂牌">
    <transfer-table />
  </el-tab-pane>
  <el-tab-pane label="已成交">
    <transfer-table />
  </el-tab-pane>
  <el-tab-pane label="已失效">
    <transfer-table />
  </el-tab-pane>
  <el-tab-pane label="已驳回">
    <transfer-table />
  </el-tab-pane>
</el-tabs>
</template>

<script>
/**
 * Internal dependencies
 */
import TransferTable from './tables/TransferTable';

export default {
  name: 'TransferList',
  components: {
    TransferTable,
  },
};
</script>

<style lang="less" scoped>

</style>
