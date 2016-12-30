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
export default {
  name: 'Investor',
  mounted() {
    this.$store.dispatch('hideSidebar');
  },
};
</script>

<style lang="less" scoped>

</style>
