<template>
<div>
  <DescriptionForm :origindata="originData" :submitCallback="submitCallback"/>
</div>
</template>
<script>
//  import { mapGetters } from 'vuex';
//  import * as types from '../../../store/types';
import DescriptionForm from '../customParts/DescriptionForm';
import server from '../../../store/modules/AjaxServer';

export default {
  name: 'create',
  props: {
  },
  methods: {
    submitCallback(data) {
      server.createProject({
        sendData: data,
      });
    },
  },
  computed: {
  },
  data() {
    return {
      originData: {
        name: '',
        producer: '',
        director: '',
        scriptwriter: '',
        protagonist: '',
        transferable_ratio: '',
        type: '',
        release_date: '',
        story_description: '',
        budget: '',
        record_number: '',
        shoot_licence_number: '',
        list_img: '',
        header_img: '',
        stage: '',
        desc_img: [],
      },

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
