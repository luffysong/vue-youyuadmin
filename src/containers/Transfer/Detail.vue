<template>
  <div>
    <DetailForm :pDetailData="detailData" :getDetail="getDetail"/>
  </div>

</template>

<script>
  import * as types from '../../store/types';
  import DetailForm from './customParts/DetailForm';

  export default {
    name: 'TransferDetail',
    props: {},
    methods: {
      getDetail() {
        const id = this.$route.params.id;
        this.$store.dispatch(types.TRANSFERDETAIL_REQ, {
          id,
          sendData: {
            id,
          },
        });
      },
    },
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
      this.getDetail();
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
