<template>
  <div v-if="!listData.loading">
    <TotalInfo :poriginData="listData"></TotalInfo>
    <ShareForm :poriginData="listData" :buttonsIsHide="buttonsIsHide"
               :editable="editable"></ShareForm>
  </div>
</template>
<script>
  import * as types from '../../../store/types';
  import TotalInfo from '../customParts/TotalInfo';
  import ShareForm from '../customParts/ShareForm';

  export default {
    name: 'transferEarn',
    computed: {
      listData() {
        return this.$store.state.projectdetail.ProjectTransferEarn;
      },
    },
    watch: {
      listData() {
        if (this.listData.movie && this.listData.movie.status === 10) {
          this.buttonsIsHide = false;
          this.editable = true;
        } else {
          this.buttonsIsHide = true;
          this.editable = false;
        }
      },
    },
    data() {
      return {
        id: this.$route.params.id,
        buttonsIsHide: false,
        editable: false,
      };
    },
    beforeCreate() {
      this.$store.dispatch(types.PROJECT_TRANSFERSHARE_REQ, {
        sendData: {
          movie_id: this.$route.params.id,
          type: 2,
        },
      });
    },
    components: {
      TotalInfo,
      ShareForm,
    },
  };
</script>
<style scoped lang="less">
</style>
