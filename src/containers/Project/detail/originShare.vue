<template>
  <div>
    <div v-if="listData.list">
      <TotalInfo :poriginData="listData"></TotalInfo>
      <ShareForm :poriginData="listData" :buttonsIsHide="buttonsIsHide"
                 :editable="editable"></ShareForm>
    </div>
  </div>
</template>
<script>
  import * as types from '../../../store/types';
  import TotalInfo from '../customParts/TotalInfo';
  import ShareForm from '../customParts/ShareForm';

  export default {
    name: 'originShareRegister',
    props: {},
    methods: {},
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
