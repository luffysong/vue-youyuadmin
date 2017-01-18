<template>
  <div>
    <DetailNav :activeTab="activeTab"/>
    <div v-if="detaildata.id">
      <DescriptionForm :origindata="detaildata"/>
    </div>
  </div>
</template>

<script>
/**
 * Internal dependencies
 */
import * as types from '../../../store/types';
import ShareForm from '../customParts/ShareForm';
import DescriptionForm from '../customParts/DescriptionForm';
import DetailNav from '../customParts/DetailNav';

export default {
  name: 'desc',
  computed: {
    detaildata() {
      return this.$store.state.projectdetail.ProjectDetail;
    },
  },
  data() {
    return {
      activeTab: 'desc',
    };
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
