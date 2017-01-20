<template>
  <div>
    <ListNav :activeTab="activeTab" />
    <ProjectTable :data="listdata" :displayHandle="displayHandle" :toDetail="toDetail"/>

  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import * as types from '../../../store/types';
import ListNav from '../customParts/ListNav';
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
  },
  computed: {
    ...mapGetters({
      listdata: [types.ProjectListData],
    }),
  },
  data() {
    setTimeout(() => {
      console.log(this.listdata, this.sdata, 'data'); // 怎么赋值给 this.sdata ???
    }, 3000);
    return {
      activeTab: 'unregistered',
      sdata: this.listdata,
    };
  },
  mounted() {
    // this.$store.dispatch(types.HIDE_SIDEBAR);
    this.$store.dispatch(types.ProjectListReq, { type: 'a' });
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
    ListNav,
    ProjectTable,
  },
};

</script>
<style scoped lang="less">
</style>
