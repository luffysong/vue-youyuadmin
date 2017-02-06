<template>
  <div>
    <el-button class="create" @click="add">新建进度</el-button>

    <div>
      <div v-for="it in listData.list" class="mod">
        <el-input type="textarea" :rows="4" class="textarea"
                  placeholder="请输入进度"
                  v-model="it.description"
        />
        <span>{{it.updated_at}}</span>
        <el-button class="del-btn" type="danger" @click="del(it.id)">删除
        </el-button>
      </div>
    </div>
    <!--删除进度确认-->
    <el-dialog title="" v-model="confirm.visible" size="tiny">
      <span>{{confirm.desc}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="confirm.visible=false">取 消</el-button>
        <el-button type="primary" @click="confirmDel">确 定</el-button>
      </span>
    </el-dialog>
    <!--添加新进度-->
    <el-dialog ref="dia" :title="dialog.name" v-model="dialog.visible">
      <NewProgress :closeDialog="closeDialog" :getlist="getlist"></NewProgress>
    </el-dialog>
  </div>
</template>
<script>
  import _ from 'lodash';
  import * as types from '../../../store/types';
  import server from '../../../store/modules/AjaxServer';
  import NewProgress from '../customParts/NewProgress';

  export default {
    name: 'projectProgress',
    props: {},
    methods: {
      del(...cs) {
        this.confirm.delId = cs[0];
        this.confirm.visible = true;
      },
      confirmDel() {
        const id = this.confirm.delId;
        server.delProjectProgress({
          id,
          sendData: {},
        }).then(() => {
          this.confirm.visible = false;
          this.getlist();
        });
      },
      add() {
        this.dialog.visible = true;
      },
      updateData(data) {
        // todo：开始认为需要 $set 才能生效，但目前这种写法也能生效
        this.listData.list = _.cloneDeep(data);
      },
      closeDialog() {
        this.$refs.dia.close();
      },
      // 获取list 数据
      getlist() {
        this.$store.dispatch(types.PROJECTPROGRESS_REQ, {
          sendData: {
            movie_id: this.$route.params.id,
          },
          callback: this.updateData,
        });
      },
    },
    computed: {
      plistData() {
        return _.cloneDeep(this.$store.state.projectdetail.ProjectProgress);
      },
    },
    data() {
      return {
        // 这个变量clone plistData，页面内实际上不会用到 plistData
        // 如果页面里使用这个变量，那么根本不会触发 update
        //        listData: _.cloneDeep(this.$store.state.projectdetail.ProjectProgress),
        listData: {
          list: [],
        },
        dialog: {
          name: '新建进度',
          visible: false,
        },
        confirm: {
          desc: '确认删除该条进度？',
          visible: false,
          delId: '',
        },
      };
    },
    mounted() {
      this.getlist();
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
      NewProgress,
    },
  };

</script>
<style scoped lang="less">
  .create {
    margin-bottom: 20px;
  }

  .mod {
    margin-bottom: 30px;
  }

  .textarea {
    margin-bottom: 10px;
  }

  .del-btn {
    float: right;
  }
</style>
