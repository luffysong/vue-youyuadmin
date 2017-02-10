<template>
  <div>
    <ListTable :pListData="listData" :pageChange="pageChange"/>
  </div>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  import * as types from '../../../store/types';
  import * as consts from '../../../config/const';
  import ListTable from '../customParts/ListTable';

  export default {
    name: 'invalid',
    props: {},
    methods: {
      pageChange(cur) {
        this.$store.dispatch(types.ORIGINLIST_REQ, {
          sendData: {
            status: 5,
            asset_type: 1,
            per_page: consts.PER_PAGE,
            page: cur,
          },
        });
      },
    },
    computed: {
      listData() {
        return this.$store.state.originlist.invalid;
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
    created() {
      // console.log('created');
    },
    beforeUpdate() {
      // console.log('beforeUpdate');
    },
    beforeMount() {
      // console.log('beforeMount');
    },
    updated() {
      // console.log('updated');
    },
    components: {
      ListTable,
    },
  };

</script>
<style scoped lang="less">
</style>
