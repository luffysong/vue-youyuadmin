<template>
  <div>
    <div v-if="!listData.loading">
      <TotalInfo :data="listDataCopy"/>
      <ShareForm :poriginData="listDataCopy"
                 :buttonsIsHide="buttonsIsHide"
                 :editable="editable"
                 :getData="getData"></ShareForm>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash';
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
        return _.cloneDeep(this.$store.state.projectdetail.ProjectOriginShare);
      },
    },
    watch: {
      listData() {
        this.listDataCopy = this.listData;
      },
      'listDataCopy.list': {
        handler() {
          let totalShare = 0;
          this.listDataCopy.list.forEach((el) => {
            totalShare += el.share - 0;
          });
          this.listDataCopy.totalInfo.totalPeople = this.listDataCopy.list.length;
          this.listDataCopy.totalInfo.totalShare = totalShare;
          if (this.listDataCopy.movie && this.listDataCopy.movie.status === 10) {
            this.buttonsIsHide = false;
            this.editable = true;
          } else {
            this.buttonsIsHide = true;
            this.editable = false;
          }
        },
        deep: true,
      },
    },
    data() {
      return {
        listDataCopy: {},
        id: this.$route.params.id,
        buttonsIsHide: false,
        editable: false,
      };
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
