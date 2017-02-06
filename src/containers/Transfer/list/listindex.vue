<template>
  <div>
    <ListNav/>
    <router-view/>
  </div>
</template>
<script>
  import ListNav from '../customParts/ListNav';
//  import * as types from '../../../store/types';

  export default {
    name: '',
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
      ListNav,
    },
  };

</script>
<style scoped lang="less">
</style>
