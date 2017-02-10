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
  import Search from '../../../components/Search';
  import ProjectTable from '../customParts/ProjectTable';
  import mix from '../customParts/mixins';

  export default {
    name: 'Registered', // 已登记
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
      const s = this;
      return {
        sdata: this.listdata,
        sendData: {
          status: 20,
          per_page: consts.PER_PAGE,
        },
        searchParams: {
          options: [
            {
              value: 'id',
              label: '项目ID',
            },
            {
              value: 'name',
              label: '项目名称',
            },
          ],
          select: 'name',
          input: '',
          commit: s.searchCommit,
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
