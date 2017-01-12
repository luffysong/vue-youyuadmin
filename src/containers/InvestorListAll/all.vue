<template>
  <div>
    <InvestorListAllTable/>
  </div>
</template>
<script>
//  import { mapGetters } from 'vuex';
//  import * as types from '../../store/types';
import InvestorListAllTable from './table/table';

export default {
  name: 'InvestorListAll',
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
    InvestorListAllTable,
  },
};

</script>
<style scoped lang="less">
  .active {
    a {
      background: #fff;
    }

    b {
      flex: 1;
    }
  }
</style>



