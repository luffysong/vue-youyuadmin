<template>
  <el-tabs :active-name="activeTab" @tab-click="handleClick">
    <el-tab-pane label="待退款" name="TradeListUnrefund"/>
    <el-tab-pane label="已退款" name="TradeListRefund"/>
  </el-tabs>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  //  import * as types from '../../../store/types';

  export default {
    name: 'RefundListNav',
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
