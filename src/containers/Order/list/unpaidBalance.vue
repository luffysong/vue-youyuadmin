<template>
  <div>
    <order-table :plist="list"/>
  </div>

</template>

<script>
  /**
   * Internal dependencies
   */
  import _ from 'lodash';
  import * as types from '../../../store/types';
  import OrderTable from '../customParts/OrderTable';
  import ListNav from '../customParts/ListNav';

  export default {
    name: 'OrderUnpaidBalance',
    components: {
      OrderTable,
      ListNav,
    },
    computed: {
      // 如果是表单，通过vuex 初始化本地data 下面这种做法在ajax回来后 是不能触发更新的
      list() {
        return _.cloneDeep(this.$store.state.order.unpaidBalanceList);
      },
    },
    methods: {},
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.$store.dispatch(types.ORDERLIST_REQ, {
        sendData: {
          status: 30,
        },
      });
    },
  };
</script>

<style lang="less" scoped>

</style>
