<template>
  <div>
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
    props: {},
    methods: {},
    computed: {
      // ajax回来后不渲染
      //      ...mapGetters({
      //        listData: [types.PROJECTTRANSFEREARN_GET],
      //      }),
      listData() {
        const data = this.$store.state.projectdetail.ProjectTransferEarn;
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
      this.$store.dispatch(types.PROJECTTRANSFERSHARE_REQ, {
        sendData: {
          movie_id: this.$route.params.id,
          type: 2,
        },
      });
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
      TotalInfo,
      ShareForm,
    },
  };

</script>
<style scoped lang="less">
</style>
