<template>
  <div>
    <CreateForm :pOriginData="originData" :submitCallback="submitCallback"/>
  </div>
</template>
<script>
  import * as types from '../../../store/types';
  import CreateForm from '../customParts/CreateForm';

  export default {
    name: 'create',
    props: {},
    methods: {
      submitCallback(data) {
        this.$store.dispatch(types.PROJECTCREATE_REQ, {
          sendData: data,
          callback: (id) => {
            this.$router.push({
              name: 'ProjectOriginShare',
              params: {
                id,
              },
            });
          },
        });
      },
    },
    computed: {},
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
      this.$store.dispatch(types.HIDE_SIDEBAR);
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
      CreateForm,
    },
  };

</script>
<style scoped lang="less">
</style>
