<template>
  <div>
    <Search :searchParams="searchParams"/>
    <ListTable :pListData="listData" :pageChange="pageChange"/>
  </div>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  import * as types from '../../../store/types';
  import * as consts from '../../../config/const';
  import Search from '../../../components/Search';
  import ListTable from '../customParts/ListTable';
  import mix from '../customParts/mixins';

  export default {
    name: 'TransferListInvalid',
    mixins: [mix],
    props: {},
    computed: {
      listData() {
        return this.$store.state.transferlist.invalid;
      },
    },
    data() {
      const s = this;
      return {
        sendData: {
          status: 5,
          asset_type: 2,
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
              label: '挂牌ID',
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
