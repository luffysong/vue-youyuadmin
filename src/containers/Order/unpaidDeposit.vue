<template>
  <div>
    <ListNav activeTab="orderUnpaidDeposit"/>
    <order-table :plist="list"/>
  </div>

</template>

<script>
  /**
   * Internal dependencies
   */
  import _ from 'lodash';
  import * as types from '../../store/types';
  import OrderTable from './tables/OrderTable';
  import ListNav from './customParts/ListNav';

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
    methods: {},
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.$store.dispatch(types.ORDERLIST_REQ, {
        sendData: {
          status: 10,
        },
      });
    },
  };
</script>

<style lang="less" scoped>

</style>
