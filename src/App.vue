<template>
  <div id="app">
    <template>
        <m-tabbar v-model="select" @chang="changClick">
          <m-tabbar-item id='tab1'>
            <img src="./assets/images/ic_tab_home_normal.png" slot="icon-normal"/>
            <img src="./assets/images/ic_tab_home_active.png" slot="icon-active"/>
            首页
          </m-tabbar-item>
          <m-tabbar-item id='tab2'>
            <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal"/>
            <img src="./assets/images/ic_tab_subject_active.png" slot="icon-active"/>
            书影音
          </m-tabbar-item>
          <m-tabbar-item id='tab3'>
            <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
            <img src="./assets/images/ic_tab_status_active.png" slot="icon-active"/>
            广播
          </m-tabbar-item>
          <m-tabbar-item id='tab4'>
            <img src="./assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
            <img src="./assets/images/ic_tab_group_active.png" slot="icon-active"/>
            小组
          </m-tabbar-item>
          <m-tabbar-item id='tab5'>
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

      select:'tab1'

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
