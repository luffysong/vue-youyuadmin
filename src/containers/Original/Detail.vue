<template>
  <div>
    <div v-if="detailData.info">
      <DetailForm :pDetailData="detailData" :getDetail="getDetail"/>
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
        return this.$store.state.origindetail.detail;
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
