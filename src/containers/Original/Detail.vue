<template>
  <div>
    <div v-if="!detailData.loading">
      <DetailForm :pDetailData="detailData.detail" :getDetail="getDetail"/>
    </div>
  </div>

</template>
<script>
  import * as types from '../../store/types';
  import DetailForm from './customParts/DetailForm';

  export default {
    name: 'OriginalDetail',
    props: {},
    methods: {
      getDetail() {
        const id = this.$route.params.id;
        this.$store.dispatch(types.ORIGINDETAIL_REQ, {
          id,
          sendData: {
            id,
          },
        });
      },
    },
    computed: {
      detailData() {
        return this.$store.state.origindetail;
      },
    },
    beforeCreate() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
      const id = this.$route.params.id;
      this.$store.dispatch(types.ORIGINDETAIL_REQ, {
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
