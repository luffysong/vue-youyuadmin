<template>
  <div>
    <el-tabs @tab-click="tabChange" :active-name="active">
      <el-tab-pane label="待审核" name="pending"></el-tab-pane>
      <el-tab-pane label="已通过" name="pass"></el-tab-pane>
      <el-tab-pane label="已驳回" name="reject"></el-tab-pane>
      <el-tab-pane label="全部" name="all"></el-tab-pane>
    </el-tabs>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
  // import * as types from '../../store/types';

  const pathEmu = {
    InvestorPending: 'pending',
    InvestorPass: 'pass',
    InvestorReject: 'reject',
    InvestorAll: 'all',
  };

  export default {
    name: 'InvestorList',
    props: {
    },
    methods: {
      tabChange(ev) {
        this.$router.push({
          path: `/investor/list/${ev.name}`,
        });
      },
    },
    computed: {

    },
    data() {
      return {
        active: pathEmu[this.$route.name],
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
