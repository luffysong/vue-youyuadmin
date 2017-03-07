<template>
  <div>
    <el-input type="textarea" placeholder="请输入内容"
              v-model="form.description" :row="3"/>
    <Buttons :buttonData="buttonData"/>
  </div>
</template>
<script>
  //  import { mapGetters } from 'vuex';
  //  import * as types from '../../store/
  import Buttons from '../../../components/Button';
  import server from '../../../store/modules/AjaxServer';

  export default {
    name: 'NewProgress',
    props: {
      closeDialog: Function,
      getlist: Function,
    },
    methods: {},
    computed: {},
    data() {
      return {
        form: {
          description: '',
        },
        buttonData: [
          {
            type: 'primary',
            desc: '添加',
            callback: () => {
              server.createProjectProgress({
                sendData: {
                  movie_id: this.$route.params.id,
                  description: this.form.description,
                },
              }).then((res) => {
                if (res.data.code === 0) {
                  this.closeDialog();
                  this.getlist();
                }
              });
            },
          },
          {
            type: 'primary',
            desc: '取消',
            callback: () => {
              this.closeDialog();
            },
          },
        ],
      };
    },
    mounted() {
      // console.log('mounted');
      // this.$store.dispatch(types.HIDE_SIDEBAR);
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
      Buttons,
    },
  };

</script>
<style scoped lang="less">
</style>
