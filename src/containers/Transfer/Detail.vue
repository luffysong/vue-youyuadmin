<template>
<h1 @click="hello">Detail</h1>
</template>

<script>
export default {
  name: 'TransferDetail',
  methods: {
    hello() {
      console.log(this.$router);
    },
  },
};
</script>

<style lang="less" scoped>

</style>
