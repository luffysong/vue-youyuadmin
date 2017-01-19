<template>
<div>
  <DescriptionForm :origindata="{}" />
</div>
</template>
<script>
//  import { mapGetters } from 'vuex';
//  import * as types from '../../../store/types';
import DescriptionForm from '../customParts/DescriptionForm';

export default {
  name: 'create',
  props: {
  },
  methods: {
  },
  computed: {
  },
  data() {
    return {

    };
  },
  mounted() {
    // this.$store.dispatch(types.HIDE_SIDEBAR);
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
    DescriptionForm,
  },
};

</script>
<style scoped lang="less">
</style>
