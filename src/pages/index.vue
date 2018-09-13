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
      <!--<m-cell-media :author="item.target.author.name" :column="item.source_cn" :img="item.target.cover_url" v-for="(item,index) in hotData"-->
                    <!--:key="item.id">-->

        <!--<span slot="title">{{item.title}}</span>-->
        <!--<span slot="describe">{{item.target.desc}}</span>-->
      <!--</m-cell-media>-->
      <m-cell-media author="作者：大象公会" column="来自栏目：广播精选" img="https://img3.doubanio.com/view/photo/albumcover/public/p2518238732.webp">
        <span slot="title">个人意见：为什么中国没有鲍勃·迪伦这样的民谣歌手</span>
        <span slot="describe">我们这一代人的成长年代，真正的诗歌课从来都是缺席的。</span>
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

      }
    },
    components: {
      mHeader,
      mSwipe,
      mCell,
      mCellMedia
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
