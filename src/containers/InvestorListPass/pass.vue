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
    // this.$store.dispatch(types.HIDE_SIDEBAR);
  },
  created() {
  },
  beforeUpdate() {
  },
  beforeMount() {
  },
  updated() {
  },
  components: {
    InvestorListPassTable,
  },
};

</script>
<style scoped lang="less">
</style>



