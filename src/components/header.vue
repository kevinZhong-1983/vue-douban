<template>
    <div class="m-header is-bg is-fixed">
       <div class="m-header-button is-left">
         <slot name="left"></slot>
       </div>
      <h1 class="m-header-title">VUE-DEMO</h1>
      <div class="m-header-button is-right">
        <!--<a href="javascript:;">分享</a>-->
        <slot name="right"></slot>
      </div>

    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="less">
  /*导入颜色变量*/
  @import "../assets/less/var.less";
  .m-header{
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px;
    background: #fff;
    color: @headerDefaultColor;
    border-bottom:1px solid #eee;
    a{
      color: @headerDefaultColor;
    }
    .m-header-button{
      width: 70px;
      align-items:stretch;
      &.is-left{
        text-align: left;
      }
      &.is-right{
        text-align: right;
      }
      .m-icon-img{
        width: 20px;
        height: 20px;
      }
      .margin-right-10{
        margin-right: 10px;
      }
    }
    .m-header-title{
      flex: 1;
      text-align: center;
      font-size: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &.is-bg{
      background:@headerBg;
      color: #fff;
      a{
        color: #fff;
        text-decoration : none

      }
      .m-header-title{
        color: #fff;
      }
    }
    &.is-fixed{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9;
    }
  }
</style>

