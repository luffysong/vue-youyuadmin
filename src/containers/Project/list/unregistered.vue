<template>
  <div>
    <Search :searchParams="searchParams"/>
    <ProjectTable :data="listdata"
                  :displayHandle="displayHandle"
                  listType="unregistered"
                  :toDetail="toDetail"
                  :pageChange="pageChange"/>
  </div>
</template>
<script>
  import _ from 'lodash';
//  import * as types from '../../../store/types';
  import * as consts from '../../../config/const';
  import Search from '../../../components/Search';
  import ProjectTable from '../customParts/ProjectTable';
  import mix from '../customParts/mixins';

  export default {
    name: 'Unregistered', // 未登记
    mixins: [mix],
    methods: {
      displayHandle() {
      },
      toDetail(...cs) {
        this.$router.push({
          path: `/project/detail/desc/${cs[0]}`,
        });
      },
    },
    computed: {
      listdata() {
        return _.cloneDeep(this.$store.state.projectlist.unregisteredData);
      },
    },
    data() {
      const s = this;
      return {
        sendData: {
          status: 10,
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
