<template>
  <el-tabs :active-name="activeTab" @tab-click="handleClick">
    <el-tab-pane label="待登记" name="unregistered"/>
    <el-tab-pane label="已登记" name="registered"/>
    <el-tab-pane label="已上映" name="release"/>
    <el-tab-pane label="已清算" name="liquidation"/>
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
