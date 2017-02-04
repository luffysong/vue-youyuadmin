<template>
  <div>
    <DetailNav />
    <router-view/>
  </div>
</template>
<script>
  import DetailNav from '../customParts/DetailNav';

  export default {
    name: 'detailindex',
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
      DetailNav,
    },
  };

</script>
<style scoped lang="less">
</style>
