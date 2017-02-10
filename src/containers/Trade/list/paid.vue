<template>
  <div v-if="listData.data">
    <ListTable :pList="listData" :pageChange="pageChange"/>
  </div>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  import * as types from '../../../store/types';
  import * as consts from '../../../config/const';
  import ListTable from '../customParts/ListTable';

  export default {
    name: 'TradeListPaid',
    props: {},
    methods: {
      pageChange(cur) {
        this.$store.dispatch(types.TRADELIST_REQ, {
          sendData: {
            status: 2,
            per_page: consts.PER_PAGE,
            page: cur,
          },
        });
      },
    },
    computed: {
      listData() {
        return this.$store.state.tradelist.paidList;
      },
    },
    data() {
      return {};
    },
    mounted() {
      // console.log('mounted');
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.pageChange(1);
    },
    components: {
      ListTable,
    },
  };

</script>
<style scoped lang="less">
</style>
