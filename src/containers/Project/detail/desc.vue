<template>
  <div>
    <DetailNav :activeTab="activeTab"/>
    <DescriptionForm />
  </div>
</template>

<script>
/**
 * Internal dependencies
 */
import ShareForm from '../customParts/ShareForm';
import DescriptionForm from '../customParts/DescriptionForm';
import DetailNav from '../customParts/DetailNav';

export default {
  name: 'desc',
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

  },
};
</script>

<style lang="less" scoped>

</style>
