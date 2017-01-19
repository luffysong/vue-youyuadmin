<template>
  <div>
    aaabbbccc
  </div>
</template>
<script>
  /* eslint-disable */
  import server from '../../store/modules/AjaxServer';
  export default {
    name: 'Demo',
    props: {},
    methods: {},
    computed: {},
    data() {
      return {};
    },
    mounted() {
    },
    created() {
      server.getProjectList({
        sendData: {
          status: 10,
        },
      });
      server.getProjectDetail({
        id: 1,
      });
      /*server.createProject({
       sendData: {

       name: '电影名称是电影名称',
       producer: '36氪',
       scriptwriter: '编剧编剧',
       director: '导演',
       transferable_ratio: 0.8,
       type: '科幻片',
       release_date: '2017-03-01',
       story_description: '剧情描述',
       budget: '456789',
       record_number: '22324324',
       shoot_licence_number: 'SG3423432',
       list_img: 'adjhfkljsdhfkads',
       header_img: '详情页头图',
       desc_img: [
       {
       url: 'http://img31.mtime.cn/pi/2016/07/01/090210.74394346_1000X1000.jpg',
       },
       {
       url: 'http://img31.mtime.cn/pi/2016/07/12/090612.12971511_1000X1000.jpg',
       },
       ],
       stage: '10',
       protagonist: '主演1，主演2',
       },
       });*/

      /*server.fixProject({
       id: 7,
       sendData: {
       id: 7,
       name: 'fix电影名称是电影名称',
       producer: '36氪',
       scriptwriter: '编剧编剧',
       director: '导演',
       transferable_ratio: 0.8,
       type: '科幻片',
       release_date: '2017-03-01',
       story_description: '剧情描述',
       budget: '456789',
       record_number: '22324324',
       shoot_licence_number: 'SG3423432',
       list_img: 'adjhfkljsdhfkads',
       header_img: '详情页头图',
       desc_img: [
       {
       url: 'http://img31.mtime.cn/pi/2016/07/01/090210.74394346_1000X1000.jpg',
       },
       {
       url: 'http://img31.mtime.cn/pi/2016/07/12/090612.12971511_1000X1000.jpg',
       },
       ],
       stage: '10',
       protagonist: '主演1，主演2',
       },
       });*/

      /*server.changeProject({
       id: 7,
       sendData: {
       status: 40,
       },
       });*/

      server.displayProject({
        id: 7,
        sendData: {
          id: 7,
          is_hide: 1,
        },
      });

//    =================

      server.getOriginShareList({
        sendData: {
          movie_id: 1,
        },
      });

//      server.createOriginShare({
//        sendData: {
//          movie_id: 3,
//          items: [{
//            certificate_type: 1,
//            certificate_name: '名称',
//            certificate_number: '0.1234',
//            share: '60',
//            price: '234324',
//          },
//            {
//              certificate_type: 2,
//              certificate_name: '名称',
//              certificate_number: '0.1234',
//              share: '40',
//              price: '234324',
//            }],
//        },
//      });

      server.fixOriginShare({
        movie_id: 4,
        sendData: {
          movie_id: 4,
          items: [{
            certificate_type: 1,
            certificate_name: '名称',
            certificate_number: '0.1234',
            share: '50',
            price: '234324',
          },
            {
              certificate_type: 2,
              certificate_name: '名称',
              certificate_number: '0.1234',
              share: '50',
              price: '234324',
            }],
        },
      });

      // =========
      server.getProjectProgressList({
        sendData: {
          movie_id: 1,
        },
      });
      /*server.createProjectProgress({
       sendData: {
       movie_id: 1,
       description: '5678',
       },
       });*/
      /*server.fixProjectProgress({
        id: 1,
        sendData: {
          id: 1,
          description: 'fix6789',
        },
      });*/

      /*server.delProjectProgress({
        id: 1,
        sendData: {

        },
      });*/

//      =======
      server.getQuotedList({
        sendData: {},
      });

      server.getQuotedDetail({
        id: 1,
        sendData: {
          id: 1,
        },
      });

      server.changeQuoted({
        id: 1,
        sendData: {
          status: 3,
        }
      });

      // =============
      server.getOrderList({
        sendData: {}
      });
      server.getOrderDetail({
        id: 1,
        sendData: {}
      });
      // =============

      server.getAssetsList({
        sendData: {
          movie_id: 1,
          type: 2,
        },
      });
      // ===============

      server.getUserRealInfoList({
        sendData: {
        }
      });

      server.getUserRealInfoDetail({
        id: 446,
        sendData: {},
      });

      server.changeUser({
        id: 446,
        sendData: {
          status: 2,
        },
      });

    },
    beforeUpdate() {
    },
    beforeMount() {
    },
    updated() {
    },
    components: {},
  };

</script>
<style scoped lang="less">
</style>
