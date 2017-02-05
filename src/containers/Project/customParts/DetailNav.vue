<template>
  <el-tabs :active-name="activeTab" @tab-click="handleClick">
    <el-tab-pane label="项目描述" name="desc"/>
    <el-tab-pane label="初始份额登记" name="originShare"/>
    <el-tab-pane label="可转让初始份额" name="transferShare"/>
    <el-tab-pane label="可转让收益权" name="transferEarn"/>
    <el-tab-pane label="项目进度" name="projectProgress"/>
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
        if (cs[0].name === this.activeTab) return;
        this.$router.push({
          name: cs[0].name,
          params: {
            id: this.$route.params.id,
          },
        });
      },
    },
    computed: {},
    data() {
      return {
        activeTab: this.$route.name,
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
