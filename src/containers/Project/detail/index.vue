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
    computed: {
      hideNav() {
        return this.$route.name === 'ProjectCreate';
      },
    },
    components: {
      DetailNav,
    },
  };

</script>
<style scoped lang="less">
</style>
