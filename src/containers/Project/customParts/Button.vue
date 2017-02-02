<template>
  <div v-if="isDisplay">
    <span v-for="it in buttonData" class="button-wrap">
      <el-button :type="it.type" @click="it.callback">{{it.desc}}</el-button>
    </span>
  </div>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  //  import * as types from '../../store/types';

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
    },
    methods: {},
    computed: {},
    data() {
      return {};
    },
    mounted() {
    },
    created() {
    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
    },
    components: {},
  };

</script>
<style scoped lang="less">
  .button-wrap {
    margin: 0 10px 0 0;
  }
</style>
