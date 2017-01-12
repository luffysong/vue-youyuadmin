<template>
  <div>
    6789
    <InvestorListPendingTable/>
  </div>
</template>
<script>
  // import { mapGetters } from 'vuex';
  // import * as types from '../../store/types';
  import InvestorListPendingTable from './table/table';

  export default {
    name: 'InvestorListPending',
    props: {
    },
    methods: {
    },
    computed: {
    },
    data() {
      return {

      };
    },
    mounted() {
      console.log('mounted');
      // this.$store.dispatch(types.HIDE_SIDEBAR);
    },
    created() {
      console.log('created');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    updated() {
      console.log('updated');
    },
    components: {
      InvestorListPendingTable,
    },
  };

</script>
<style scoped lang="less">

</style>



