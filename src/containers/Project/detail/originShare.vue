<template>
  <div>
    <div v-if="!listData.loading">
      <TotalInfo :data="listDataCopy"/>
      <ShareForm
        v-if="permissionCheck(['api.movie-initial-share.show'])"
        :poriginData="listDataCopy"
        :buttonsIsHide="buttonsIsHide"
        :editable="editable"
        :priceIsHide="priceIsHide"
        :getData="getData"></ShareForm>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash';
  import * as types from '../../../store/types';
  import { moneyAdd } from '../../../utils/math';
  import TotalInfo from '../customParts/TotalInfo';
  import ShareForm from '../customParts/ShareForm';
  import permissionCheck from '../../../utils/permissionCheck';

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
            totalShare = moneyAdd(el.share, totalShare);
          });
          this.listDataCopy.totalInfo.totalPeople = this.listDataCopy.list.length;
          this.listDataCopy.totalInfo.totalShare = totalShare;

          if (_.get(this.listDataCopy.movie, 'status') === 10 && permissionCheck(['api.movie-initial-share.update'])) {
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
        priceIsHide: false,
        permissionCheck,
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
