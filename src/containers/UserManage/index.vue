<template>
  <div>
    <Search :searchParams="searchParams"/>
    <el-table v-if="!listData.listLoading" :data="listData.userlist.data">
      <el-table-column
        align="center"
        label="ID"
        width="150"
        prop="id"
      >
      </el-table-column>
      <el-table-column align="center"
        label="用户"
        prop="first_name"
      >
      </el-table-column>
      <el-table-column align="center"
        label="邮箱"
        prop="email"
      >
      </el-table-column>
      <el-table-column align="center"
        label="状态"
        width="150"
        inline-template
      >
        <div>
          <span v-if='row.activated === false'>未激活</span>
          <span v-if='row.activated === true'>已激活</span>
        </div>
      </el-table-column>
      <el-table-column
        fixed="right"
        inline-template
        align="center"
        label="激活操作"
        width="120">
        <el-switch
          v-model="row.activated"
          on-text=""
          off-text=""
        @change="displayHandle(row.activated, row.id)">
        </el-switch>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
/**
 * Internal dependencies
 */
import _ from 'lodash';
import * as types from '../../store/types';
import * as consts from '../../config/const';
import server from '../../store/modules/AjaxServer';
import mix from './mixins';
import Search from '../../components/Search';

export default {
  name: 'UserManageList',
  mixins: [mix],
  components: {
    Search,
  },
  methods: {
    displayHandle(...cs) {
      server.putUserActiveStatus({
        id: cs[1],
        sendData: {
          id: cs[1],
          activated: !cs[0] ? 0 : 1,
        },
      });
    },
  },
  computed: {
    listData() {
      const data = this.$store.state.usermanage;
      let copy;
      if (data.userlist) {
        console.log(data.userlist, 'ddd');
        copy = _.cloneDeep(data);
        const arr = copy.userlist.data;
        arr.forEach((el) => {
          el.activated = !!el.activated;
        });
        return copy;
      }
      return data;
    },
  },
  data() {
    const s = this;
    return {
      sendData: {
        per_page: consts.PER_PAGE,
      },
      searchParams: {
        options: [
          {
            value: 'id',
            label: 'ID',
          },
          {
            value: 'first_name',
            label: '名称',
          },
          {
            value: 'email',
            label: '邮箱',
          },
        ],
        select: 'id',
        input: '',
        commit: s.searchCommit,
      },
    };
  },
  beforeCreate() {
    this.$store.dispatch(types.USER_MANAGER_REQ, {
      sendData: this.sendData,
    });
  },
};
</script>
