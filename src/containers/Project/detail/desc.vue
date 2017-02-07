<template>
  <div>
    <div v-if="detaildata.id">
      <DescriptionForm :porigindata="detaildata"/>
    </div>
  </div>
</template>

<script>
/**
 * Internal dependencies
 */
import _ from 'lodash';
import * as types from '../../../store/types';
import DescriptionForm from '../customParts/DescriptionForm';

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
  },
  components: {
    DescriptionForm,
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
