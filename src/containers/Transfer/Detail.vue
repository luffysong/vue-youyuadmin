<template>
  <div v-if="!detailData.loading">
    <DetailForm :pDetailData="detailData.detail" :getDetail="getDetail"/>
  </div>

</template>

<script>
  import * as types from '../../store/types';
  import DetailForm from './customParts/DetailForm';

  export default {
    name: 'TransferDetail',
    methods: {
      getDetail() {
        const id = this.$route.params.id;
        this.$store.dispatch(types.TRANSFER_DETAIL_REQ, {
          id,
          sendData: {
            id,
          },
        });
      },
    },
    computed: {
      detailData() {
        return this.$store.state.transferdetail;
      },
    },
    beforeCreate() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      const id = this.$route.params.id;
      this.$store.dispatch(types.TRANSFER_DETAIL_REQ, {
        id,
        sendData: {
          id,
        },
      });
    },
    components: {
      DetailForm,
    },
  };

</script>

<style lang="less" scoped>

</style>
