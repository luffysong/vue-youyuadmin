<template>
  <div>
    <div v-if="type === 'PENDING'">
      <OriginalDetailPending></OriginalDetailPending>
    </div>
    <div v-if="type === 'LISTED'">
      <OriginalDetailListed></OriginalDetailListed>
    </div>
  </div>
</template>
<script src='./detail.js'></script>
