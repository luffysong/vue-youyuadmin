<template>
  <el-tabs :active-name="activeTab" @tab-click="handleClick">
    <el-tab-pane label="待付保证金" name="orderUnpaidDeposit"/>
    <el-tab-pane label="已付保证金" name="orderPaidDeposit"/>
    <el-tab-pane label="待付剩余款" name="orderUnpaidBalance"/>
    <el-tab-pane label="付款完成" name="orderPaid"/>
    <el-tab-pane label="交易关闭" name="orderClosed"/>
  </el-tabs>
</template>
<script>
//  import { mapGetters } from 'vuex';
//  import * as types from '../../../store/types';

  export default {
    name: 'OrderListNav',
    props: {},
    methods: {
      handleClick(...cs) {
        if (cs[0].name === this.activeTab) return;
        this.$router.push({
          name: cs[0].name,
          params: {
            id: this.id,
          },
        });
      },
    },
    data() {
      return {
      };
    },
    computed: {
      activeTab() {
        return this.$route.name;
      },
    },
  };

</script>
<style scoped lang="less">
</style>
