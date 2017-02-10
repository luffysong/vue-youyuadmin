<template>
  <div v-if="list.data">
    <InvestorList :plist="list" :pageChange="pageChange"/>
  </div>
</template>
<script>
  import * as types from '../../store/types';
  import * as consts from '../../config/const';
  import InvestorList from './table/table';

  export default {
    name: 'InvestorListPending',
    props: {},
    methods: {
      pageChange(cur) {
        this.$store.dispatch(types.INVESTORLIST_REQ, {
          sendData: {
            status: 1,
            per_page: consts.PER_PAGE,
            page: cur,
          },
        });
      },
    },
    computed: {
//      ...mapGetters({
//        listdata: [types.INVESTORGET],
//      }),
      list() {
        return this.$store.state.investor.pendingList;
        //        return _.cloneDeep(this.$store.state.investor.allList);
      },
    },
    data() {
      return {};
    },
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.pageChange(1);
    },
    components: {
      InvestorList,
    },
  };

</script>
<style scoped lang="less">

</style>



