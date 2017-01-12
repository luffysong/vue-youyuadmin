<template>
  <div>
    <InvestorListRejectTable />
  </div>
</template>
<script>
//  import { mapGetters } from 'vuex';
//  import * as types from '../../store/types';
import InvestorListRejectTable from './table/table';

export default {
  name: 'InvestorListReject',
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
    InvestorListRejectTable,
  },
};

</script>
<style scoped lang="less">
</style>



