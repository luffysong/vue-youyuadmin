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
    name: 'transferShare',
    methods: {},
    computed: {
      //      ...mapGetters({
      //        listData: [types.PROJECTTRANSFERSHARE_GET],
      //      }),
      listData() {
        const data = this.$store.state.projectdetail.ProjectTransferShare;
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
      // console.log('mounted');
      this.$store.dispatch(types.PROJECTTRANSFERSHARE_REQ, {
        sendData: {
          movie_id: this.$route.params.id,
          type: 1,
        },
      });
    },
    created() {
      // console.log('created');
    },
    beforeUpdate() {
      // console.log('beforeUpdate');
    },
    beforeMount() {
      // console.log('beforeMount');
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
