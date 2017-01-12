<template>
  <div>
    <InvestorListPassTable/>

  </div>
</template>
<script>
//  import { mapGetters } from 'vuex';
//  import * as types from '../../store/types';
import InvestorListPassTable from './table/table';

export default {
  name: 'InvestorListPass',
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
    InvestorListPassTable,
  },
};

</script>
<style scoped lang="less">
</style>



