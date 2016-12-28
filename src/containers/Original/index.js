/**
 * External dependencies
 */
import Vue from 'vue';
import { mapMutations } from 'vuex';
import OriginForm from './tables/OriginForm.vue';

export default {
  name: 'Original',
  methods: {
    ...mapMutations([
      'hideSidebar',
    ]),
    getData() {
      console.log(123);
    },
  },
  data() {
    return {
      dataTable: [],
      options: [{
        label: '测试',
        value: 'a',
      },
      {
        label: this.$route.query.status,
        value: 112212,
      }],
      value: '',
      input: '',
    };
  },
  mounted() {
    this.hideSidebar();
  },
  created() {
    console.log('tab1', this.$route.query);
    const s = this;
    Vue.http.get('http://localhost:10001/static/origin.json', {
      emulateJSON: true,
    }).then((data) => {
      console.log(data);
      s.dataTable = data.body;
    });
  },
  components: {
    OriginForm,
  },
};
