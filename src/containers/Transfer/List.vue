<template>
<el-tabs class="el-col-24" type="border-card" :active-name="query.status" @tab-click="handleTabClick">
  <el-tab-pane name="one" label="待审核">
    <transfer-table />
  </el-tab-pane>
  <el-tab-pane name="two" label="已挂牌">
    <transfer-table />
  </el-tab-pane>
  <el-tab-pane name="three" label="已成交">
    <transfer-table />
  </el-tab-pane>
  <el-tab-pane name="four" label="已失效">
    <transfer-table />
  </el-tab-pane>
  <el-tab-pane name="five" label="已驳回">
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
  data() {
    const query = this.$route.query;

    return {
      query: {
        status: query && query.status ? query.status : 'one',
      },
    };
  },
  methods: {
    handleTabClick(tab) {
      this.$router.push({
        name: 'TransferList',
        query: {
          status: tab.name,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>

</style>
