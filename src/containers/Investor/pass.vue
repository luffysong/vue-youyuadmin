<template>
  <div v-if="list.data">
    <Search :searchParams="searchParams"/>
    <InvestorList :plist="list" :pPageChange="pageChange"/>
  </div>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  //  import _ from 'lodash';
  import * as types from '../../store/types';
  import * as consts from '../../config/const';
  import InvestorList from './table/table';
  import Search from '../../components/Search';
  import mix from './table/mixins';

  export default {
    name: 'InvestorListPass',
    mixins: [mix],
    props: {},
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
      const s = this;
      return {
        sendData: {
          status: 2,
          per_page: consts.PER_PAGE,
        },
        searchParams: {
          options: [
            {
              value: 'uid',
              label: '用户ID',
            },
            {
              value: 'certificate_number',
              label: '证件号',
            },
            {
              value: 'certificate_name',
              label: '证件名称',
            },
            {
              value: 'certificate_type',
              label: '证件类型',
            },
          ],
          select: 'uid',
          input: '',
          commit: s.searchCommit,
        },
      };
    },
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.getData();
    },
    components: {
      InvestorList,
      Search,
    },
  };

</script>
<style scoped lang="less">

</style>



