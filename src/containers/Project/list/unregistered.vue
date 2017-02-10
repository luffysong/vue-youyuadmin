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

  export default {
    name: 'Unregistered', // 未登记
    methods: {
      displayHandle() {
        //      this.$store.dispatch()
      },
      toDetail(...cs) {
        this.$router.push({
          path: `/project/detail/desc/${cs[0]}`,
        });
      },
      pageChange(cur) {
        this.sendData.page = cur;
        this.getData();
      },
      searchCommit() {
        this.searchParams.options.forEach((el) => {
          this.sendData[el.value] = '';
        });
        this.sendData[this.searchParams.select] = this.searchParams.input;
        this.getData();
      },
      getData() {
        this.$store.dispatch(types.ProjectListReq, {
          sendData: this.sendData,
        });
      },
    },
    computed: {
      ...mapGetters({
        listdata: [types.ProjectListData],
      }),
    },
    data() {
      //    setTimeout(() => {
      //      console.log(this.listdata, this.sdata, 'data'); // 怎么赋值给 this.sdata ???
      //    }, 3000);
      const s = this;
      return {
        sdata: this.listdata,
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
