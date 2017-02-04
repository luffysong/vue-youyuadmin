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
    name: 'InvestorListPass',
    props: {},
    methods: {},
    computed: {
      //      ...mapGetters({
      //        listdata: [types.INVESTORGET],
      //      }),
      list() {
        return this.$store.state.investor.passList;
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
          status: 2,
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



