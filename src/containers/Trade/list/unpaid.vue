<template>
  <div v-if="listData.data">
    <Search :searchParams="searchParams"/>
    <ListTable :pList="listData" :pageChange="pageChange"/>
  </div>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  import * as types from '../../../store/types';
  import * as consts from '../../../config/const';
  import ListTable from '../customParts/ListTable';
  import Search from '../../../components/Search';
  import mix from '../customParts/mixins';

  export default {
    name: 'TradeListUnpaid',
    mixins: [mix],
    props: {},
    computed: {
      listData() {
        return this.$store.state.tradelist.unpaidList;
      },
    },
    data() {
      const s = this;
      return {
        sdata: this.listdata,
        sendData: {
          status: 1,
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
      // console.log('mounted');
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.getData();
    },
    components: {
      ListTable,
      Search,
    },
  };

</script>
<style scoped lang="less">
</style>
