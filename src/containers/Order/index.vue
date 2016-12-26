<template>
<el-tabs class="el-col-24" type="border-card">
  <el-tab-pane label="待付保证金">

  </el-tab-pane>
  <el-tab-pane label="已付保证金">

  </el-tab-pane>
  <el-tab-pane label="待付剩余款">

  </el-tab-pane>
  <el-tab-pane label="付款完成">

  </el-tab-pane>
  <el-tab-pane label="交易关闭">

  </el-tab-pane>
</el-tabs>
</template>

<script>
/**
 * External dependencies
 */
import { mapMutations } from 'vuex';

export default {
  name: 'Order',
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
