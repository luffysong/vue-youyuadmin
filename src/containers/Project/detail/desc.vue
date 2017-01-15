<template>
  <div>

    <ProjectNav :activeTab="activeTab"/>
    <DescriptionForm />



  </div>
</template>

<script>
/**
 * Internal dependencies
 */
import ShareForm from '../customParts/ShareForm';
import DescriptionForm from '../customParts/DescriptionForm';
import ProjectNav from '../customParts/ProjectNav';

export default {
  name: 'Create',
  data() {
    return {
      activeTab: 'transferOriginShare',
    };
  },
  components: {
    ShareForm,
    DescriptionForm,
    ProjectNav,
  },
};
</script>

<style lang="less" scoped>

</style>
