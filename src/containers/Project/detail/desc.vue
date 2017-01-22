<template>
  <div>
    <DetailNav :activeTab="activeTab"/>
    <div v-if="detaildata.id">
      <DescriptionForm :origindata="detaildata" :submitCallback="submitCallback"/>
    </div>
  </div>
</template>

<script>
/**
 * Internal dependencies
 */
import _ from 'lodash';
import * as types from '../../../store/types';
import ShareForm from '../customParts/ShareForm';
import DescriptionForm from '../customParts/DescriptionForm';
import DetailNav from '../customParts/DetailNav';
import server from '../../../store/modules/AjaxServer';

export default {
  name: 'desc',
  computed: {
    detaildata() {
      return _.cloneDeep(this.$store.state.projectdetail.ProjectDetail);
    },
  },
  data() {
    return {
      activeTab: 'desc',
    };
  },
  methods: {
    submitCallback(data) {
      console.log(this.$route);
      server.fixProject({
        id: this.$route.params.id,
        sendData: data,
      });
    },
  },
  components: {
    ShareForm,
    DescriptionForm,
    DetailNav,
  },
  mounted() {
    this.$store.dispatch(types.ProjectDetailReq, {
      id: this.$route.params.id,
    });
  },
};
</script>

<style lang="less" scoped>

</style>
