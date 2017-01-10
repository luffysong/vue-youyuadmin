<template>
  <div>
    <div v-if='detailData.type === "pending"'>
      <TransferFormPending :form="detailData" />
    </div>
    <div v-else-if='detailData.type === "listed"'>
      <TransferFormListed :form="detailData"/>
    </div>
  </div>

</template>

<script src="./detail.js"> </script>

<style lang="less" scoped>

</style>
