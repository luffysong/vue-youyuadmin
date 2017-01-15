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
<script>
  // import { mapGetters } from 'vuex';
  // import * as types from '../../store/types';
  import OriginalDetailPending from './form/pending.vue';
  import OriginalDetailListed from './form/listed.vue';

  export default {
    name: 'OriginalDetail',
    props: {
    },
    methods: {

    },
    computed: {
    },
    data() {
      return {
        type: 'PENDING',
      };
    },
    mounted() {
      // this.$store.dispatch(types.HIDE_SIDEBAR);
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
      OriginalDetailPending,
      OriginalDetailListed,
    },
  };

</script>
