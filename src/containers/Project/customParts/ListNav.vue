<template>
  <el-tabs :active-name="activeTab" @tab-click="handleClick">
    <el-tab-pane label="待登记" name="ProjectListUnregistered"/>
    <el-tab-pane label="已登记" name="ProjectListRegistered"/>
    <el-tab-pane label="已上映" name="ProjectListRelease"/>
    <el-tab-pane label="已清算" name="ProjectListLiquidation"/>
  </el-tabs>

</template>
<script>

  //  import { mapGetters } from 'vuex';
  //  import * as types from '../../store/types';

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
