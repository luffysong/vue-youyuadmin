<template>
<h1>Home</h1>
</template>

<script>
/**
 * Internal dependencies
 */
import * as types from '../../store/types';

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch(types.SET_SIDEBAR_DATA, this.sidebarData);
  },
  data() {
    return {
      sidebarData: [
        {
          name: '项目管理',
          icon: 'picture',
          type: 'menu',
          sub: [
            {
              name: '新建项目',
              link: '/project/create',
              icon: 'plus',
            },
            {
              name: '项目登记',
              link: '/project/register',
              icon: 'document',
            },
          ],
        },
        {
          name: '初始份额转让',
          link: '/original',
          icon: 'menu',
          type: 'item',
        },
        {
          name: '影视收益权',
          link: '/transfer',
          icon: 'star-on',
          type: 'item',
        },
        {
          name: '投资人审核',
          link: '/investor',
          icon: 'setting',
          type: 'item',
        },
        {
          name: '订单管理',
          link: '/order',
          icon: 'more',
          type: 'item',
        },
        {
          name: '收款管理',
          link: '/trade',
          icon: 'more',
          type: 'item',
        },
        {
          name: '退款管理',
          link: '/refund',
          icon: 'more',
          type: 'item',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>

</style>
