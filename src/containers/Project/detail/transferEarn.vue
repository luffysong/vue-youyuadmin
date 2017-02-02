<template>
  <div>
    <DetailNav activeTab="transferEarn" :id="id"></DetailNav>
    <!--可以通过这种形式触发渲染 {{listData}}-->
    <div v-if="listData.list != undefined">
      <TotalInfo :poriginData="listData"></TotalInfo>
      <ShareForm :poriginData="listData"></ShareForm>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import { mapGetters } from 'vuex';
  import _ from 'lodash';
  import * as types from '../../../store/types';
  import TotalInfo from '../customParts/TotalInfo';
  import ShareForm from '../customParts/ShareForm';
  import DetailNav from '../customParts/DetailNav';

  export default {
    name: 'transferEarn',
    props: {
    },
    methods: {
    },
    computed: {
      // ajax回来后不渲染
//      ...mapGetters({
//        listData: [types.PROJECTTRANSFEREARN_GET],
//      }),
      listData() {
        return _.cloneDeep(this.$store.state.projectdetail.ProjectTransferEarn);
        // ajax 回来后不渲染
//        return this.$store.state.projectdetail.ProjectTransferEarn;
      },
    },
    data() {
//      console.log(this.listData);
//      setTimeout(() => {
//        console.log(this.listData);
//      }, 2000);
      return {
        id: this.$route.params.id,
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
       console.log('created');
    },
    beforeUpdate() {
       console.log('beforeUpdate');
    },
    beforeMount() {
       console.log('beforeMount');
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
