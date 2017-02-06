<template>
  <div>
    <ListTable :pListData="listData"/>
  </div>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  import * as types from '../../../store/types';
  import ListTable from '../customParts/ListTable';

  export default {
    name: 'invalid',
    props: {},
    methods: {},
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
      this.$store.dispatch(types.ORIGINLIST_REQ, {
        sendData: {
          status: 5,
        },
      });
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
