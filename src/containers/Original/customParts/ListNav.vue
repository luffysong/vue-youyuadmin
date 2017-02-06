<template>
  <el-tabs :active-name="activeTab" @tab-click="handleClick">
    <el-tab-pane label="待审核" name="OriginListPending"/>
    <el-tab-pane label="已挂牌" name="OriginListListed"/>
    <el-tab-pane label="已成交" name="OriginListComplete"/>
    <el-tab-pane label="已失效" name="OriginListInvalid"/>
    <el-tab-pane label="已驳回" name="OriginListReject"/>
  </el-tabs>
</template>
<script>
  import * as types from '../../../store/types';

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
    computed: {},
    data() {
      return {
        activeTab: this.$route.name,
      };
    },
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
    },
    created() {
    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
    },
    components: {},
  };
</script>
<style scoped lang="less">
</style>
