<template>
    <div class="m-tabbar">
      <slot></slot>
    </div>
</template>
<script type="text/ecmascript-6">

  import mTabbarItem from './tabbar-item.vue'
    export default {
      props:['value'],
        data() {
            return {


            }
        },
      methods:{



      }
    }
</script>

<style lang="less">
  .m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 5px;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;
  }
</style>

