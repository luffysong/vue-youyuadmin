<template>
  <div>
    <Search :searchParams="searchParams"/>

    <ProjectTable :data="listdata"
                  :displayHandle="displayHandle"
                  :upIndexHandle="upIndexHandle"
                  :toDetail="toDetail"
                  :pageChange="pageChange"/>
  </div>
</template>
<script>
  import _ from 'lodash';
  import * as consts from '../../../config/const';
  import Search from '../../../components/Search';
  import ProjectTable from '../customParts/ProjectTable';
  import mix from '../customParts/mixins';
  import server from '../../../store/modules/AjaxServer';

  export default {
    name: 'Release', // 已上映
    mixins: [mix],
    methods: {
      displayHandle(...cs) {
        const id = cs[1];
        const is_hide = cs[0] ? 1 : 0; //eslint-disable-line
        server.displayProject({
          id,
          sendData: {
            id,
            is_hide,
          },
        });
      },
      upIndexHandle(...cs) {
        const id = cs[1];
        const is_hot = cs[0] ? 1 : 0; //eslint-disable-line
        server.hotProject({
          id,
          sendData: {
            id,
            is_hot,
          },
        });
      },
      toDetail(...cs) {
        this.$router.push({
          path: `/project/detail/desc/${cs[0]}`,
        });
      },
    },
    computed: {
      listdata() {
        return _.cloneDeep(this.$store.state.projectlist.releaseData);
      },
    },
    data() {
      const s = this;
      return {
        sendData: {
          status: 30,
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
