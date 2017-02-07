<template>
  <div>
    <div v-if="listData.list != undefined">
      <TotalInfo :poriginData="listData"></TotalInfo>
      <ShareForm :poriginData="listData" :buttonsIsHide="true"></ShareForm>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash';
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
        return _.cloneDeep(this.$store.state.projectdetail.ProjectTransferShare);
        // ajax 回来后不渲染
//        return this.$store.state.projectdetail.ProjectTransferShare;
      },
    },
    data() {
      return {
        id: this.$route.params.id,
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
