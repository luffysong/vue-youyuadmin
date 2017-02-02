<template>
  <div>
    <DetailNav activeTab="transferShare" :id="id"></DetailNav>
    <div v-if="listData.list != undefined">
      <TotalInfo :poriginData="listData"></TotalInfo>
      <ShareForm :poriginData="listData"></ShareForm>
    </div>
  </div>
</template>
<script>
//  import { mapGetters } from 'vuex';
  import _ from 'lodash';
  import * as types from '../../../store/types';
  import TotalInfo from '../customParts/TotalInfo';
  import ShareForm from '../customParts/ShareForm';
  import DetailNav from '../customParts/DetailNav';

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
      console.log('updated');
    },
    components: {
      DetailNav,
      TotalInfo,
      ShareForm,
    },
  };

</script>
<style scoped lang="less">
</style>
