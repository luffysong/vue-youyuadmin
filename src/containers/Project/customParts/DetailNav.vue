<template>
  <el-tabs :active-name="activeTab" @tab-click="handleClick">
    <el-tab-pane label="项目描述" name="desc" />
    <el-tab-pane label="初始份额登记" name="originShare" />
    <el-tab-pane label="可转让初始份额" name="transferShare"/>
    <el-tab-pane label="可转让收益权" name="transferEarn" />
  </el-tabs>

</template>
<script>

//  import { mapGetters } from 'vuex';
//  import * as types from '../../store/types';

  export default {
    name: 'DetailNav',
    props: {
      // 穿参数，当前激活tab，'desc  originshare  transferOriginShare  transferEarn'
      activeTab: String,
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
