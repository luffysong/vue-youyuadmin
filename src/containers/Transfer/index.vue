<template>
<el-tabs class="el-col-24" type="border-card">
  <el-tab-pane label="待审核">

  </el-tab-pane>
  <el-tab-pane label="已挂牌">

  </el-tab-pane>
  <el-tab-pane label="已成交">

  </el-tab-pane>
  <el-tab-pane label="已失效">

  </el-tab-pane>
  <el-tab-pane label="已驳回">

  </el-tab-pane>
</el-tabs>
</template>

<script>
/**
 * External dependencies
 */
import { mapMutations } from 'vuex';

export default {
  name: 'Transfer',
  methods: {
    ...mapMutations([
      'hideSidebar',
    ]),
  },
  mounted() {
    this.hideSidebar();
  },
};
</script>

<style lang="less" scoped>

</style>