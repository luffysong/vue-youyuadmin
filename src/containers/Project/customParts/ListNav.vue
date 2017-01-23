<template>
  <el-tabs :active-name="activeTab" @tab-click="handleClick">
    <el-tab-pane label="待登记" name="unregistered" />
    <el-tab-pane label="已登记" name="registered" />
    <el-tab-pane label="已上映" name="release"/>
    <el-tab-pane label="已清算" name="liquidation" />
  </el-tabs>

</template>
<script>

  //  import { mapGetters } from 'vuex';
  //  import * as types from '../../store/types';

  export default {
    name: 'ListNav',
    props: {
      // 穿参数，当前激活tab，'未登记 unregistered 已登记 registered 已上映 release 已清算 liquidation'
      activeTab: String,
    },
    methods: {
      handleClick() {
//        console.log(tab, event);
      },
    },
    computed: {
    },
    data() {
      return {
      };
    },
    mounted() {
      // this.$store.dispatch(types.HIDE_SIDEBAR);
    },
    created() {
    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
    },
    components: {

    },
  };
</script>

<style scoped lang="less">
</style>
