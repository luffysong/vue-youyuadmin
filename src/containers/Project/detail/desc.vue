<template>
  <div>
    <div v-if="!detaildata.loading">
      <DescriptionForm :porigindata="detaildata" :pbuttons="buttons"/>
    </div>
    <PopMsg :popMsgConfig="popMsgConfig"/>
  </div>
</template>

<script>
  /**
   * Internal dependencies
   */
  import * as types from '../../../store/types';
  import server from '../../../store/modules/AjaxServer';
  import DescriptionForm from '../customParts/DescriptionForm';
  import PopMsg from '../../../components/PopMsg';
  import permissionCheck from '../../../utils/permissionCheck';

  export default {
    name: 'desc',
    computed: {
      detaildata() {
        return this.$store.state.projectdetail.ProjectDetail;
      },
    },
    watch: {
      detaildata() {
        const cObject = this.detaildata;
        // 修改
        const permissionChange = permissionCheck(['api.movie.update']);
        // 上映
        const permissionScreen = permissionCheck(['api.movie.screening']);
        // 发布
        const permissionPublish = permissionCheck(['api.movie.publish']);
        // 结算
        const permissionClearing = permissionCheck(['api.movie.clearing']);
        if (cObject.status === 10) {
          this.buttons = [];
          if (permissionChange) {
            this.buttons.push({
              desc: '保存',
              callback: (...child) => {
                this.handleSubmit.apply(this, [...child]);
              },
            });
          }
          if (permissionPublish) {
            this.buttons.push({
              type: 'success',
              desc: '发布上线',
              callback: (...child) => {
                this.handlePublish.apply(this, [...child]);
              },
            });
          }
          this.handlePublish = () => {
            const id = this.$route.params.id;
            server.changeProject({
              id,
              sendData: {
                id,
                status: 'publish',
              },
            }).then((res) => {
              if (res.data.code === 0) {
                this.$router.push({
                  name: 'ProjectListRegistered',
                });
              }
            });
          };
        } else if (cObject.status === 20) {
          this.buttons = [];
          if (permissionChange) {
            this.buttons.push({
              desc: '保存',
              callback: (...child) => {
                this.handleSubmit.apply(this, [...child]);
              },
            });
          }
          if (permissionScreen) {
            this.buttons.push({
              type: 'success',
              desc: '已上映',
              callback: (...child) => {
                this.handlePublish.apply(this, [...child]);
              },
            });
          }

          this.handlePublish = () => {
            const id = this.$route.params.id;
            server.changeProject({
              id,
              sendData: {
                id,
                status: 'screening',
              },
            }).then((res) => {
              if (res.data.code === 0) {
                this.$router.push({
                  name: 'ProjectListRelease',
                });
              }
            });
          };
        } else if (cObject.status === 30) {
          this.buttons = [];
          if (permissionChange) {
            this.buttons.push({
              desc: '保存',
              callback: (...child) => {
                this.handleSubmit.apply(this, [...child]);
              },
            });
          }
          if (permissionClearing) {
            this.buttons.push({
              type: 'success',
              desc: '已清算',
              callback: (...child) => {
                this.handlePublish.apply(this, [...child]);
              },
            });
          }
          this.handlePublish = () => {
            const id = this.$route.params.id;
            server.changeProject({
              id,
              sendData: {
                id,
                status: 'clearing',
              },
            }).then((res) => {
              if (res.data.code === 0) {
                this.$router.push({
                  name: 'ProjectListLiquidation',
                });
              }
            });
          };
        } else if (cObject.status === 40) {
          this.buttons = [];
          if (permissionChange) {
            this.buttons.push({
              desc: '保存',
              callback: (...child) => {
                this.handleSubmit.apply(this, [...child]);
              },
            });
          }
        }
      },
    },
    data() {
      return {
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
        permissionCheck,
      };
    },
    methods: {
      handleSubmit(...cs) {
        cs[1].form.validate((val) => {
          if (val) {
            server.fixProject({
              id: this.$route.params.id,
              sendData: cs[0],
            }).then((res) => {
              if (res.data.code === 0) {
                this.popMsgConfig.desc = '操作成功';
                this.popMsgConfig.dialogVisible = true;
              }
            });
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
    beforeCreate() {
      this.$store.dispatch(types.PROJECT_DETAIL_REQ, {
        id: this.$route.params.id,
      });
    },
  };
</script>

<style lang="less" scoped>

</style>
