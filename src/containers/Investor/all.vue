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
    name: 'InvestorListAll',
    props: {},
    methods: {},
    computed: {
      //      ...mapGetters({
      //        listdata: [types.INVESTORGET],
      //      }),
      list() {
        return this.$store.state.investor.allList;
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
    },
    components: {
      InvestorList,
    },
  };

</script>
<style scoped lang="less">

</style>



