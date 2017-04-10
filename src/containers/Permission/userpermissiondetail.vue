<template>
  <div class="permission-detail" v-if="!permissionData.permissionDetailLoading">
    <el-row class="row">
      <el-col :span="4">
        <el-button type="primary" @click="allotRole()"
                   v-if="permissionCheck(['api.system.user.roles'])"
        >分配角色</el-button>
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
        <b v-for="item in permissionData.permissionDetail.my_roles">{{item.role.name}}
          &nbsp;</b>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="2">
        权限明细：
      </el-col>
      <el-col :span="22">
        <div>
          <dl v-for="item in localPermissionData.userPermissionExtend"
              v-if="item.status">
            <dt>{{item.name}}</dt>
            <dd v-for="citem in item.children" v-if="citem.status">
              {{citem.name}}
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="分配权限" v-model="dialogVisible">
      <div v-if="!permissionData.roleListLoading">
        <el-checkbox-group v-model="roleArr">
          <el-checkbox v-for="item in permissionData.roleList"
                       :label="item.id">{{item.name}}
          </el-checkbox>
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
  import permissionCheck from '../../utils/permissionCheck';

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
        }).then((res) => {
          if (res.data.code === 0) {
            this.$store.dispatch(types.USER_PERMISSION_EXTEND, { id: this.$route.params.id })
            .then(() => {
              this.roleArr = [];
              this.$store.state.permission.permissionDetail.my_roles.forEach((el) => {
                this.roleArr.push(el.role_id);
              });
            });
          }
        });
      },
    },
    computed: {
      permissionData() {
        this.localPermissionData = this.$store.state.permission;
        return this.$store.state.permission;
      },
    },
    data() {
      return {
        dialogVisible: false,
        roleArr: [],
        localPermissionData: null,
        permissionCheck,
      };
    },
    created() {
      this.$store.dispatch(types.USER_PERMISSION_EXTEND, { id: this.$route.params.id }).then(() => {
        this.$store.state.permission.permissionDetail.my_roles.forEach((el) => {
          this.roleArr.push(el.role_id);
        });
      });
      this.$store.dispatch(types.ROLE_LIST_REQ, {
        sendData: {
          type: 'all',
        },
      });
    },
    components: {},
  };
</script>
<style>
  .permission-detail .el-checkbox {
    margin-bottom: 10px;
  }

  .permission-detail .row {
    margin: 20px 0;
  }

  .permission-detail dl {
    margin: 0 0 20px;
  }

  .permission-detail dd {
    display: inline-block;
    margin: 10px 10px 0 0;
  }

  .permission-detail dt + dd {
    padding-left: 20px;
  }
</style>
