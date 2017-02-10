<template>
  <div>
    <order-table :plist="list" :pageChange="pageChange"/>
  </div>
</template>

<script>
  /**
   * Internal dependencies
   */
  import _ from 'lodash';
  import * as types from '../../../store/types';
  import * as consts from '../../../config/const';
  import OrderTable from '../customParts/OrderTable';
  import ListNav from '../customParts/ListNav';

  export default {
    name: 'OrderUnpaidDeposit',
    components: {
      OrderTable,
      ListNav,
    },
    computed: {
      // 如果是表单，通过vuex 初始化本地data 下面这种做法在ajax回来后 是不能触发更新的
      list() {
        return _.cloneDeep(this.$store.state.order.unpaidDepositList);
      },
    },
    methods: {
      pageChange(cur) {
        this.$store.dispatch(types.ORDERLIST_REQ, {
          sendData: {
            status: 10,
            per_page: consts.PER_PAGE,
            page: cur,
          },
        });
      },
    },
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.pageChange(1);
    },
  };
</script>

<style lang="less" scoped>

</style>
