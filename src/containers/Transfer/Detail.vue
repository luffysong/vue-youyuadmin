<template>
  <div>
    <div v-if='detailData.type === "pending"'>
      <TransferFormPending :form="detailData" />
    </div>
    <div v-else-if='detailData.type === "listed"'>
      <TransferFormListed :form="detailData"/>
    </div>
  </div>

</template>

<script>

  import { mapGetters } from 'vuex';
  import * as types from '../../store/types';
  import TransferFormPending from './forms/pending';
  import TransferFormListed from './forms/listed';

  function getData() {
    this.$store.dispatch(types.TRANSFERDETAIL_REQ, {
      type: this.$route.query.type,
    });
  }
  function init() {
    getData.call(this);
  }

  export default {
    name: 'TransferDetail',
    props: {
    },
    methods: {
    },
    computed: {
      ...mapGetters({
        detailData: [types.TransferDetailData],
      }),
    },
    data() {
      return {

      };
    },
    mounted() {
      // this.$store.dispatch(types.HIDE_SIDEBAR);
    },
    created() {
      init.call(this);
    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
    },
    components: {
      TransferFormPending,
      TransferFormListed,
    },
  };

</script>

<style lang="less" scoped>

</style>
