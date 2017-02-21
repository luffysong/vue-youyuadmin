<template>
  <div v-if="isDisplay">
    <span v-for="it in buttonData" class="button-wrap">
      <el-button :type="it.type" @click="it.callback(sendData, form)">{{it.desc}}</el-button>
    </span>
  </div>
</template>
<script>

  export default {
    name: 'ProjectButton',
    props: {
      buttonData: {
        type: Array,
        default: [
          {
            type: 'primary',
            desc: '按钮',
            callback: () => {},
          },
        ],
      },
      isDisplay: {
        type: Boolean,
        default: true,
      },
      sendData: Object,
      form: Object,
    },
  };

</script>
<style scoped lang="less">
  .button-wrap {
    margin: 0 10px 0 0;
  }
</style>
