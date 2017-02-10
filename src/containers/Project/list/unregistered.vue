<template>
  <div>
    <Search :searchParams="searchParams"/>

    <ProjectTable :data="listdata"
                  :displayHandle="displayHandle"
                  :toDetail="toDetail"
                  :pageChange="pageChange"/>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import * as types from '../../../store/types';
  import * as consts from '../../../config/const';
  import * as Search from '../../../components/Search';
  import ProjectTable from '../customParts/ProjectTable';
  import mix from '../customParts/mixins';

  export default {
    name: 'Unregistered', // 未登记
    mixins: [mix],
    methods: {
      displayHandle() {
        //      this.$store.dispatch()
      },
      toDetail(...cs) {
        this.$router.push({
          path: `/project/detail/desc/${cs[0]}`,
        });
      },
    },
    computed: {
      ...mapGetters({
        listdata: [types.ProjectListData],
      }),
    },
    data() {
      return {
        sdata: this.listdata,
        sendData: {
          status: 10,
          per_page: consts.PER_PAGE,
        },
      };
    },
    mounted() {
      // this.$store.dispatch(types.HIDE_SIDEBAR);
      this.getData();
    },
    components: {
      ProjectTable,
      Search,
    },
  };
</script>
<style scoped lang="less">
</style>
