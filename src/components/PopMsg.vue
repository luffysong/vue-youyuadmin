<template>
  <div>
    <el-dialog :title="popMsgConfig.title" v-model="popMsgConfig.dialogVisible" size="tiny">
      <span>{{popMsgConfig.desc}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button v-if="popMsgConfig.type === 'confirm'" @click="popMsgConfig.cancelCallback">取 消</el-button>
    <el-button type="primary" @click="popMsgConfig.sureCallback">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>

  export default {
    name: 'PopMsg',
    props: {
      popMsgConfig: {
        type: Object,
        default: {
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
      },
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
      // console.log('mounted');
    },
    created() {
      // console.log('created');
    },
    beforeUpdate() {
      // console.log('beforeUpdate');
    },
    beforeMount() {
      // console.log('beforeMount');
    },
    updated() {
      // console.log('updated');
    },
    components: {

    },
  };
</script>
<style scoped lang="less">
</style>
