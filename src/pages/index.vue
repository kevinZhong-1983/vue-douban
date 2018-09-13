<template>
  <div>
   <m-header title="VUE-demo" fixed bg></m-header>
  <div class="page-content">
    <m-swipe swipeid="swipe01" :autoplay="5000">
      <div class="swiper-slide " slot="swiper-con"><img src="../assets/images/banner/01.jpg" alt=""></div>
      <div class="swiper-slide " slot="swiper-con"><img src="../assets/images/banner/02.jpg" alt=""></div>
      <div class="swiper-slide " slot="swiper-con"><img src="../assets/images/banner/03.jpg" alt=""></div>
    </m-swipe>

    <m-cell title="提醒" icon>
      <img src="../assets/images/ic_mine_notification.png" slot="icon">
      <a href="javascript:;" slot="cell-right"><img src="../assets/images/ic_arrow_gray_small.png" alt=""></a>
    </m-cell>
    <m-cell title="设置">
      <a href="javascript:;" slot="cell-right"><img src="../assets/images/ic_arrow_gray_small.png" alt=""></a>
    </m-cell>

    <div class="hot-wrap">
      <m-cell title="热门" label="hot">

      </m-cell>
      <m-cell-media :author="item.target.author.name" :column="item.source_cn" :img="item.target.cover_url" v-for="(item,index) in hotData"
                    :key="item.id">

        <span slot="title">{{item.title}}</span>
        <span slot="describe">{{item.target.desc}}</span>
      </m-cell-media>

    </div>

  </div>
  </div>

</template>
<script type="text/ecmascript-6">

  import mHeader from '../components/header.vue'
  import mSwipe from '../components/swipe.vue'
  import mCell from '../components/cell.vue'
  import mCellMedia from '../components/media-cell'

  export default {
    name: 'index',
    data() {
      return {

        hotData:[],
        recommendData: []

      }
    },
    components: {
      mHeader,
      mSwipe,
      mCell,
      mCellMedia
    },
    created(){

      this.getData()

    },
    methods:{

      getData() {

        this.axios.get('/api/homeData').then((response) => {

          let data = response.data.data.recommend_feeds;
          let recommend = [];
          let hot = [];

          for (var i in data) {

            if (data[i].card && data[i].card.name == '为你推荐') {
              recommend.push(data[i]);
            } else {

              hot.push(data[i]);
            }

          }

          this.recommendData=recommend
          this.hotData=hot


          console.log(response.data)
        })

      }

    }

  }

</script>

<style lang="less">
  header.m-header {
    padding: 0 0 0 10px;
  }

  .is-fixed~.page-content {

    padding-top: 44px;
    padding-bottom: 0px;
  }

  .top-search {
    .search-wrap {
      width: 100%;
      height: 30px;
      background: #fff;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #c0c0c0;
      padding: 0 12px;
      .placeholder {
        flex: 1;
        text-align: left;
        padding-left: 12px;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  .hot-wrap,
  .recommend-wrap {
    padding-top: 12px;
  }


</style>
