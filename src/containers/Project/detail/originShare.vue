<template>
  <div>
    <div v-if="!listData.loading">
      <TotalInfo :poriginData="listData"></TotalInfo>
      <ShareForm :poriginData="listData"
                 :buttonsIsHide="buttonsIsHide"
                 :editable="editable"
                 :getData="getData"></ShareForm>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import * as types from '../../../store/types';
  import TotalInfo from '../customParts/TotalInfo';
  import ShareForm from '../customParts/ShareForm';

  export default {
    name: 'originShareRegister',
    props: {},
    methods: {
      getData() {
        this.$store.dispatch(types.PROJECT_ORIGINSHARE_REQ, {
          movie_id: this.$route.params.id,
        });
      },
    },
    computed: {
      listData() {
        return this.$store.state.projectdetail.ProjectOriginShare;
      },
    },
    data() {
      return {
        id: this.$route.params.id,
        buttonsIsHide: false,
        editable: false,
      };
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
    beforeCreate() {
      this.$store.dispatch(types.PROJECT_ORIGINSHARE_REQ, {
        movie_id: this.$route.params.id,
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
