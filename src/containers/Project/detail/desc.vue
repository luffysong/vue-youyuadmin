<template>
  <div>
    <div v-if="detaildata.id">
      <DescriptionForm :porigindata="detaildata" :pbuttons="buttons"/>
    </div>
  </div>
</template>

<script>
  /**
   * Internal dependencies
   */
  import _ from 'lodash';
  import * as types from '../../../store/types';
  import server from '../../../store/modules/AjaxServer';
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
        buttons: [
          {
            desc: '保存',
            callback: (...cs) => {
              this.handleSubmit.apply(this, [...cs]);
            },
          },
          {
            type: 'success',
            desc: '发布',
            callback: (...cs) => {
              this.handlePublish(cs);
            },
          },
        ],
      };
    },
    methods: {
      handleSubmit(...cs) {
        cs[1].form.validate();
//        cs[1].form.resetFields();
        server.fixProject({
          id: this.$route.params.id,
          sendData: cs[0],
        });
      },
      handlePublish() {
        const id = this.$route.params.id;
        server.changeProject({
          id,
          sendData: {
            id,
            status: 10,
          },
        });
      },
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
