<template>
  <div v-if="list.data">
    <InvestorList :plist="list"/>
  </div>
</template>
<script>
//  import { mapGetters } from 'vuex';
  //  import _ from 'lodash';
  import * as types from '../../store/types';
  import InvestorList from './table/table';

  export default {
    name: 'InvestorListPending',
    props: {},
    methods: {},
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
      this.$store.dispatch(types.INVESTORLIST_REQ, {
        sendData: {
          status: 1,
        },
      });
    },
    created() {
    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
      console.log('update');
    },
    components: {
      InvestorList,
    },
  };

</script>
<style scoped lang="less">

</style>



