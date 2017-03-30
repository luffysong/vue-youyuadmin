<template>
  <div class="permission-detail" v-if="!permissionData.permissionDetailLoading">
    <el-row class="row">
      <el-col :span="4">
        <el-button type="primary" @click="allotRole()">分配角色</el-button>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="2">
        用户名称：
      </el-col>
      <el-col :span="22">
        {{permissionData.permissionDetail.base.name}}
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="2">
        用户角色：
      </el-col>
      <el-col :span="22">
        <b v-for="item in permissionData.permissionDetail.my_roles">{{item.role.name}} &nbsp;</b>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="2">
        权限明细：
      </el-col>
      <el-col :span="22">
        <div>
          {{ permissionList() }}
        </div>
      </el-col>
    </el-row>
    <el-dialog title="分配权限" v-model="dialogVisible">
      <div v-if="!permissionData.roleListLoading">
        <el-checkbox-group v-model="roleArr">
          <el-checkbox v-for="item in permissionData.roleList"
                       :label="item.id">{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelRole">取 消</el-button>
        <el-button type="primary" @click="confirmRole">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import * as types from '../../store/types';
  import ajax from '../../store/modules/AjaxServer';
  // import PopMsg from '../../components/PopMsg';

  export default {
    name: 'UserPermissionDetail',
    methods: {
      permissionList() {

      },
      allotRole() {
        this.dialogVisible = true;
      },
      cancelRole() {
        this.dialogVisible = false;
      },
      confirmRole() {
        this.dialogVisible = false;
        ajax.putUserRole({
          id: this.$route.params.id,
          sendData: {
            roles: this.roleArr,
          },
        });
      },
    },
    computed: {
      permissionData() {
        this.localPermissionData = this.$store.state.permission;
        return this.$store.state.permission;
      },
    },
    watch: {
      localPermissionData: {
        handler: function ex() {

        },
        deep: true,
      },
    },
    data() {
      return {
        dialogVisible: false,
        roleArr: [],
        localPermissionData: null,
      };
    },
    created() {
//      this.$store.dispatch(types.PERMISSION_DETAIL_REQ, { id: this.$route.params.id });
//      this.$store.dispatch(types.PERMISSION_SELF_REQ);
      this.$store.dispatch(types.USER_PERMISSION_EXTEND, { id: this.$route.params.id });
      this.$store.dispatch(types.ROLE_LIST_REQ);
    },
    components: {
      // PopMsg
    },
  };
</script>
<style>
  .permission-detail .el-checkbox {
    margin-bottom: 10px;
  }

  .permission-detail .row {
    margin: 20px 0;
  }
</style>
