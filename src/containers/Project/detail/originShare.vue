
<template>
  <div>
    <div  v-if="listData.list != undefined">
      <TotalInfo :poriginData="listData"></TotalInfo>
      <ShareForm :poriginData="listData" :buttonsIsHide="false"></ShareForm>
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
