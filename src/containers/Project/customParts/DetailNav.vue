<template>
  <el-tabs :active-name="activeTab" @tab-click="handleClick">
    <el-tab-pane label="项目描述" name="ProjectDetailDesc"/>
    <el-tab-pane label="初始份额登记" name="ProjectDetailOriginShare"/>
    <el-tab-pane label="可转让初始份额" name="ProjectDetailTransferShare"/>
    <el-tab-pane label="可转让收益权" name="ProjectDetailTransferEarn"/>
    <el-tab-pane label="项目进度" name="ProjectDetailProgress"/>
  </el-tabs>

</template>
<script>

  //  import { mapGetters } from 'vuex';
  //  import * as types from '../../store/types';

  export default {
    name: 'DetailNav',
    props: {},
    methods: {
      handleClick(...cs) {
        console.log(cs[0].name, this.activeTab, this.$route.params.id);
        if (cs[0].name === this.activeTab) return;
        this.$router.push({
          name: cs[0].name,
          params: {
            id: this.$route.params.id,
          },
        });
      },
    },
    computed: {
      activeTab() {
        return this.$route.name;
      },
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
    components: {},
  };
</script>
<style scoped lang="less">
</style>
