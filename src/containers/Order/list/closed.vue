<template>
  <div>
    <Search :searchParams="searchParams"/>
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
  import Search from '../../../components/Search';
  import mix from '../customParts/mixins';

  export default {
    name: 'ClosedDeposit',
    mixins: [mix],
    components: {
      OrderTable,
      ListNav,
      Search,
    },
    computed: {
      // 如果是表单，通过vuex 初始化本地data 下面这种做法在ajax回来后 是不能触发更新的
      list() {
        return _.cloneDeep(this.$store.state.order.closedList);
      },
    },
    data() {
      const s = this;
      return {
        sendData: {
          status: 50,
          per_page: consts.PER_PAGE,
        },
        searchParams: {
          options: [
            {
              value: 'movie_id',
              label: '项目ID',
            },
            {
              value: 'uid',
              label: '用户ID',
            },
            {
              value: 'id',
              label: '订单ID',
            },
          ],
          select: 'movie_id',
          input: '',
          commit: s.searchCommit,
        },
      };
    },
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.getData();
    },
  };
</script>

<style lang="less" scoped>

</style>
