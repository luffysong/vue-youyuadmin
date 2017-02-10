<template>
  <div>
    <ProjectTable :data="listdata"
                  :displayHandle="displayHandle"
                  :toDetail="toDetail"
                  :pageChange="pageChange"/>

  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import * as types from '../../../store/types';
  import ProjectTable from '../customParts/ProjectTable';

  export default {
    name: 'Release', // 已上映
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
        this.$store.dispatch(types.ProjectListReq, {
          sendData: {
            status: 30,
            per_page: 1,
            page: cur,
          },
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
      return {
        sdata: this.listdata,
      };
    },
    mounted() {
      // this.$store.dispatch(types.HIDE_SIDEBAR);
      this.pageChange(1);
    },
    created() {
    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
    },
    components: {
      ProjectTable,
    },
  };
</script>
<style scoped lang="less">
</style>
