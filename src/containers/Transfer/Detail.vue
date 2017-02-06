<template>
  <div v-if="detailData.info">
    <DetailForm :pDetailData="detailData"/>
  </div>

</template>

<script>
  import * as types from '../../store/types';
  import DetailForm from './customParts/DetailForm';

  export default {
    name: 'TransferDetail',
    props: {},
    methods: {},
    computed: {
      detailData() {
        return this.$store.state.transferdetail.detail;
      },
    },
    data() {
      return {};
    },
    mounted() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      const id = this.$route.params.id;
      this.$store.dispatch(types.HIDE_SIDEBAR);
      this.$store.dispatch(types.TRANSFERDETAIL_REQ, {
        id,
        sendData: {
          id,
        },
      });
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
      DetailForm,
    },
  };

</script>

<style lang="less" scoped>

</style>
