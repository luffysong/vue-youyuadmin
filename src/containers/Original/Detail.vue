<template>
  <div>
    <div v-if="type === 'PENDING'">
      <OriginalDetailPending />
    </div>
    <div v-if="type === 'LISTED'">
      <OriginalDetailListed />
    </div>
  </div>
</template>
<script>
  // import { mapGetters } from 'vuex';
  // import * as types from '../../store/types';
  import OriginalDetailPending from './form/pending';
  import OriginalDetailListed from './form/listed';

  export default {
    name: 'OriginalDetail',
    props: {},
    methods: {},
    computed: {},
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
