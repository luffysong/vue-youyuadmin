<template>
  <div>
    <ListNav />
    <router-view/>
  </div>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  //  import * as types from '../../store/types';
  import ListNav from '../customParts/ListNav';

  export default {
    name: 'listindex',
    props: {},
    methods: {},
    computed: {},
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
      ListNav,
    },
  };

</script>
<style scoped lang="less">
</style>
