<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in list" :to="{ path: item.path }">{{ showName(item) }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    showName(item) {
      if (item.meta) {
        return item.meta.label || item.name;
      }
      return null;
    },
  },
};
</script>
