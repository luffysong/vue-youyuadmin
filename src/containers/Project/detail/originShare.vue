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
        const data = this.$store.state.projectdetail.ProjectOriginShare;
        if (data.movie && data.movie.status === 10) {
          this.buttonsIsHide = false;
          this.editable = true;
        } else {
          this.buttonsIsHide = true;
          this.editable = false;
        }
        return data;
      },
    },
    data() {
      return {
        id: this.$route.params.id,
        buttonsIsHide: false,
        editable: false,
      };
    },
    mounted() {
      this.$store.dispatch(types.PROJECTORIGINSHARE_REQ, {
        movie_id: this.id,
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
