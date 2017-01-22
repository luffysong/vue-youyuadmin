<template>
  <div>
    originshareregister
  </div>
</template>
<script>
//  import { mapGetters } from 'vuex';
//  import * as types from '../../store/types';
  import server from '../../../store/modules/AjaxServer';

  export default {
    name: 'originShareRegister',
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
      // console.log('mounted');
      // this.$store.dispatch(types.HIDE_SIDEBAR);
      server.getProjectDetail({
        id: 9,
      });
    },
    components: {

    },
  };

</script>
<style scoped lang="less">
</style>
