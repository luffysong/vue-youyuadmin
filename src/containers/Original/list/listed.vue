<template>
  <div>
    <ListTable :pListData="listData" :pageChange="pageChange"/>
  </div>
</template>
<script>
  import * as types from '../../../store/types';
  import * as consts from '../../../config/const';
  import ListTable from '../customParts/ListTable';

  export default {
    name: 'listed',
    props: {},
    methods: {
      pageChange(cur) {
        this.$store.dispatch(types.ORIGINLIST_REQ, {
          sendData: {
            status: 3,
            asset_type: 1,
            per_page: consts.PER_PAGE,
            page: cur,
          },
        });
      },
    },
    computed: {
      listData() {
        return this.$store.state.originlist.listed;
      },
    },
    data() {
      return {
      };
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
