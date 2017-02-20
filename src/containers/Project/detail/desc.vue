<template>
  <div>
    <div v-if="detaildata.id">
      <DescriptionForm :porigindata="detaildata" :pbuttons="buttons"/>
    </div>
    <PopMsg :popMsgConfig="popMsgConfig"/>
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
  import PopMsg from '../../../components/PopMsg';

  export default {
    name: 'desc',
    computed: {
      detaildata() {
        const cObject = _.cloneDeep(this.$store.state.projectdetail.ProjectDetail);
        if (cObject.status === 10) {
          this.buttons = [
            {
              desc: '保存',
              callback: (...child) => {
                this.handleSubmit.apply(this, [...child]);
              },
            },
            {
              type: 'success',
              desc: '发布上线',
              callback: (...child) => {
                this.handlePublish.apply(this, [...child]);
              },
            },
          ];
          this.handlePublish = () => {
            const id = this.$route.params.id;
            server.changeProject({
              id,
              sendData: {
                id,
                status: 'publish',
              },
            }).then((res) => {
              if (res.body.code === 0) {
                this.$router.push({
                  name: 'ProjectListRegistered',
                });
              }
            });
          };
        } else if (cObject.status === 20) {
          this.buttons = [
            {
              type: 'success',
              desc: '已上映',
              callback: (...child) => {
                this.handlePublish.apply(this, [...child]);
              },
            },
          ];
          this.handlePublish = () => {
            const id = this.$route.params.id;
            server.changeProject({
              id,
              sendData: {
                id,
                status: 'screening',
              },
            }).then((res) => {
              if (res.body.code === 0) {
                this.$router.push({
                  name: 'ProjectListRelease',
                });
              }
            });
          };
        } else if (cObject.status === 30) {
          this.buttons = [
            {
              type: 'success',
              desc: '已清算',
              callback: (...child) => {
                this.handlePublish.apply(this, [...child]);
              },
            },
          ];
          this.handlePublish = () => {
            const id = this.$route.params.id;
            server.changeProject({
              id,
              sendData: {
                id,
                status: 'clearing',
              },
            }).then((res) => {
              if (res.body.code === 0) {
                this.$router.push({
                  name: 'ProjectListLiquidation',
                });
              }
            });
          };
        } else if (cObject.status === 40) {
          this.buttons = [];
        }
        return cObject;
      },
    },
    data() {
      return {
        // 因为是值类型，所以会报出警告;
        // dialogVisible: false,
        popMsgConfig: {
          dialogVisible: false,
          type: 'alert', // alert | confirm
          title: '提示',
          desc: '描述',
          sureCallback: () => {
            this.popMsgConfig.dialogVisible = false;
          },
          cancelCallback: () => {
            this.popMsgConfig.dialogVisible = false;
          },
        },
        activeTab: 'desc',
        buttons: [],
      };
    },
    methods: {
      handleSubmit(...cs) {
        cs[1].form.validate();
        //        cs[1].form.resetFields();
        server.fixProject({
          id: this.$route.params.id,
          sendData: cs[0],
        }).then((res) => {
          if (res.body.code === 0) {
            this.popMsgConfig.desc = '操作成功';
            this.popMsgConfig.dialogVisible = true;
          }
        });
      },
      handlePublish() {
      },
    },
    components: {
      DescriptionForm,
      PopMsg,
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
