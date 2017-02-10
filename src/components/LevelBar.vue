<template>
  <div class="level-bar">
    <bread-crumb :list="list"/>
  </div>
</template>

<script>
  import BreadCrumb from './BreadCrumb';

  export default {
    components: {
      BreadCrumb,
    },
    data() {
      return {
        list: null,
      };
    },
    created() {
      this.getList();
    },
    computed: {
      name() {
        return this.$route.name;
      },
    },
    methods: {
      getList() {
        let matched = this.$route.matched;
        const first = matched[0];
        if (first && (first.name !== 'Home' || first.path !== '')) {
          matched = [{ name: 'Home', path: '/' }].concat(matched);
        }
        this.list = matched;
      },
    },
    watch: {
      $route() {
        this.getList();
      },
    },
  };
</script>

<style lang="less" scoped>
  .level-bar {
    padding: 24px 0;
  }
</style>
