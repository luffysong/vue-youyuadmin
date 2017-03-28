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
              name: 'ProjectDetailOriginShare',
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
          release_date: '0000-00-00',
          story_description: '',
          budget: '',
          record_number: '',
          shoot_licence_number: '',
          list_img: '',
          header_img: '',
          stage: '',
          desc_img: [],
          notice: '',
        },
      };
    },
    beforeCreate() {
      this.$store.dispatch(types.HIDE_SIDEBAR);
    },
    components: {
      CreateForm,
    },
    mounted() {
      const data = [
        {
          name: '新建项目',
          link: '/project/detail/create',
          icon: 'plus',
          type: 'item',
        },
        {
          name: '项目列表',
          link: '/project/list',
          icon: 'document',
          type: 'item',
        },
      ];

      this.$store.dispatch(types.SET_SIDEBAR_DATA, data);
    },
  };

</script>
<style scoped lang="less">
</style>
