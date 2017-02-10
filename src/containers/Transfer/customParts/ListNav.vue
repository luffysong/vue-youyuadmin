<template>
  <el-tabs :active-name="activeTab" @tab-click="handleClick">
    <el-tab-pane label="待审核" name="TransferListPending"/>
    <el-tab-pane label="已挂牌" name="TransferListListed"/>
    <el-tab-pane label="已成交" name="TransferListComplete"/>
    <el-tab-pane label="已失效" name="TransferListInvalid"/>
    <el-tab-pane label="已驳回" name="TransferListReject"/>
  </el-tabs>
</template>
<script>

  export default {
    name: 'ListNav',
    props: {},
    methods: {
      handleClick(...cs) {
        if (cs[0].name !== this.$route.name) {
          this.$router.push({
            name: cs[0].name,
          });
        }
      },
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
