<template>
  <div>
    <div v-if="!hideNav">
      <DetailNav />
    </div>
    <router-view/>
  </div>
</template>
<script>
  import DetailNav from '../customParts/DetailNav';

  export default {
    name: 'detailindex',
    props: {},
    methods: {},
    computed: {
      hideNav() {
        return this.$route.name === 'ProjectCreate';
      },
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
      DetailNav,
    },
  };

</script>
<style scoped lang="less">
</style>
