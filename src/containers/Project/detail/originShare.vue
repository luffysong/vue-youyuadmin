
<template>
  <div>
    <DetailNav activeTab="originShare" :id="id"></DetailNav>
    <div  v-if="listData.list != undefined">
      <TotalInfo :poriginData="listData"></TotalInfo>
      <ShareForm :poriginData="listData"></ShareForm>
    </div>

  </div>
</template>
<script>
  /* eslint-disable */
  //  import { mapGetters } from 'vuex';
  import * as types from '../../../store/types';
  import TotalInfo from '../customParts/TotalInfo';
  import ShareForm from '../customParts/ShareForm';
  import DetailNav from '../customParts/DetailNav';

  export default {
    name: 'originShareRegister',
    props: {},
    methods: {},
    computed: {
      listData() {
        console.log(this.$store.state.projectdetail.ProjectOriginShare);
        return this.$store.state.projectdetail.ProjectOriginShare;
      },
    },
    data() {
      return {
        id: this.$route.params.id,
      };
    },
    mounted() {
      this.$store.dispatch(types.PROJECTORIGINSHARE_REQ, {
        movie_id: this.id,
      });
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
