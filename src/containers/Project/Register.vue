<template>
<el-tabs class="el-col-24" type="border-card">
  <el-tab-pane label="待登记">
    <project-table />
  </el-tab-pane>
  <el-tab-pane label="已登记">
    <project-table />
  </el-tab-pane>
  <el-tab-pane label="已清算">
    <project-table />
  </el-tab-pane>
</el-tabs>
</template>

<script>
/**
 * Internal dependencies
 */
import ProjectTable from './tables/ProjectTable';

export default {
  name: 'Register',
  components: {
    ProjectTable,
  },
};
</script>

<style lang="less" scoped>

</style>
