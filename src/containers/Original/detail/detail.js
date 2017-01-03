import Vue from 'vue';

import * as types from '../../../store/types';

export default {
  name: 'OriginalDetail',
  methods: {

  },
  data() {
    return {

    };
  },
  mounted() {
    // this.$store.dispatch(types.HIDE_SIDEBAR);
  },
  created() {
    console.log('create');
  },
  beforeUpdate() {
    console.log('before');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  updated() {
    console.log('updated');
  },
  components: {

  },
};

