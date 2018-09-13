<template>
  <div id="app">
    <template>
        <m-tabbar v-model="select" @chang="changClick">
          <m-tabbar-item id='Index' isRouter>
            <img src="./assets/images/ic_tab_home_normal.png" slot="icon-normal"/>
            <img src="./assets/images/ic_tab_home_active.png" slot="icon-active"/>
            首页
          </m-tabbar-item>
          <m-tabbar-item id='AudioBook' isRouter>
            <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal"/>
            <img src="./assets/images/ic_tab_subject_active.png" slot="icon-active"/>
            书影音
          </m-tabbar-item>
          <m-tabbar-item id='Broadcast' isRouter>
            <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
            <img src="./assets/images/ic_tab_status_active.png" slot="icon-active"/>
            广播
          </m-tabbar-item>
          <m-tabbar-item id='Group' isRouter>
            <img src="./assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
            <img src="./assets/images/ic_tab_group_active.png" slot="icon-active"/>
            小组
          </m-tabbar-item>
          <m-tabbar-item id='Mine' isRouter>
            <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
            <img src="./assets/images/ic_tab_profile_active.png" slot="icon-active"/>
            我的
          </m-tabbar-item>
        </m-tabbar>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>

  import mTabbarItem from './components/tabbar-item.vue'
  import mTabbar from './components/tabbar.vue'



export default {
  name: 'App',
  data(){

    return{

      select:'Index'

    }

  },
  components:{

    mTabbarItem,
    mTabbar

  },
  methods:{

    changClick(res){

      this.select=res

    }

  }
}
</script>

<style>

</style>
