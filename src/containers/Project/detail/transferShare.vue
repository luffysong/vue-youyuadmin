<template>
  <div>
    <div v-if="!listData.loading">
      <TotalInfo :data="listData"></TotalInfo>
      <ShareForm :poriginData="listData" :buttonsIsHide="buttonsIsHide"
                 :editable="editable"></ShareForm>
    </div>
  </div>

</template>
<script>
//  import { mapGetters } from 'vuex';
  import * as types from '../../../store/types';
  import TotalInfo from '../customParts/TotalInfo';
  import ShareForm from '../customParts/ShareForm';

  export default {
    name: 'transferShare',
    methods: {},
    computed: {
      listData() {
        return this.$store.state.projectdetail.ProjectTransferShare;
      },
    },
    data() {
      return {
        id: this.$route.params.id,
        buttonsIsHide: true,
        editable: false,
      };
    },
    watch: {
      listData() {
        if (this.listData.movie && this.listData.movie.status === 10) {
          this.editable = true;
        } else {
          this.editable = false;
        }
      },
    },
    beforeCreate() {
      this.$store.dispatch(types.PROJECT_TRANSFERSHARE_REQ, {
        sendData: {
          movie_id: this.$route.params.id,
          type: 1,
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
