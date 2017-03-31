<template>
  <div class="role-manage">
    <el-row>
      <el-col :span="4">
        <h3>角色管理</h3>
      </el-col>
      <el-col :span="2" :offset="18">
        <el-button type="success" @click="createRole()">新建角色</el-button>
      </el-col>
    </el-row>
    <el-table v-if="!tableData.roleListLoading"
              :data="tableData.roleList" :stripe="true" :border="true">
      <el-table-column label="角色" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button-group v-if="scope.row.name !== '超级管理员'">
            <el-button type="primary" @click="edit(scope.row.id, scope.row.name)">
              查看
            </el-button>
            <el-button type="danger" @click="del(scope.row.id, scope.row.name)">
              删除
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="分配权限" v-model="dialogVisible"
               @close="diaClose()">
      <div>
        <el-row>
          <el-col :span="2" class="dia-role-name">
            角色名称
          </el-col>
          <el-col :span="4">
            <el-input v-model="dialogRoleName"></el-input>
          </el-col>
        </el-row>
        <br>
        <el-checkbox-group v-model="changePermission">
          <div v-for="item in allPermission">
            <h5>
              {{item.name}}
            </h5>
            <el-checkbox v-for="(citem, k) in item.children"
                         :label="k">{{citem.name}}
            </el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
      <!--<div v-if="!permissionData.roleListLoading">-->
      <!--<el-checkbox-group v-model="roleArr">-->
      <!--<el-checkbox v-for="item in permissionData.roleList"-->
      <!--:label="item.id">{{item.name}}</el-checkbox>-->
      <!--</el-checkbox-group>-->
      <!--</div>-->
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

  export default {
    name: 'RoleManage',
    methods: {
      diaClose() {
        this.changePermission = [];
      },
      edit(id, name) {
        this.dialogType = 'edit';
        this.dialogRoleId = id;
        this.dialogRoleName = name;
        this.getRolePermission(id, () => {
          this.dialogVisible = true;
        });
      },
      del(id, name) {
        console.log(id, name);
      },
      createRole() {
        this.dialogType = 'create';
        this.dialogVisible = true;
      },
      cancelRole() {

      },
      confirmRole() {
        let permissions = {};
        this.changePermission.forEach((k) => {
          permissions[k] = '1';
        });
        permissions = JSON.stringify(permissions);
        if (this.dialogType === 'edit') {
          ajax.putRolePermission({
            id: this.dialogRoleId,
            sendData: {
              name: this.dialogRoleName,
              permissions,
            },
          });
        } else if (this.dialogType === 'create') {
          ajax.postRole({
            sendData: {
              name: this.dialogRoleName,
              permissions,
            },
          }).then((res) => {
            if (res.data.code === 0) {
              this.dialogVisible = false;
              this.$store.dispatch(types.ROLE_LIST_REQ);
            }
          });
        }
      },
      getRolePermission(id, callback) {
        this.$store.dispatch(types.ROLE_PERMISSION_REQ, { id }).then(() => {
          this.curPermission = this.$store.state.permission.rolePermission;
          Object.keys(this.curPermission.permissions).forEach((key) => {
            this.changePermission.push(key);
          });
          if (callback) {
            callback();
          }
        });
      },
      getAllPermission() {
        this.$store.dispatch(types.PERMISSION_LIST_REQ).then(() => {
          this.allPermission = this.$store.state.permission.permissionList;
        });
      },
    },
    computed: {
      tableData() {
        return this.$store.state.permission;
      },
    },
    data() {
      return {
        dialogType: 'edit', // create
        dialogVisible: false,
        dialogRoleId: '',
        dialogRoleName: '',
        changePermission: [],
        allPermission: null,
        curPermission: null,
      };
    },
    created() {
      this.$store.dispatch(types.ROLE_LIST_REQ);
      this.getAllPermission();
    },
  };
</script>
<style>
  .role-manage .dia-role-name {
    padding: 10px 0 0;
  }
</style>
