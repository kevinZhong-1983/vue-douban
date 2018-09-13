<template>
  <m-header title="小组" fixed>
    <a href="javascript:;" slot="right"><img class="m-icon-img margin-right-10" src="../assets/images/ic_actionbar_search_icon.png"/></a>
    <a href="javascript:;" slot="right"><img class="m-icon-img" src="../assets/images/ic_chat_green.png"/></a>
  </m-header>
</template>
<script type="text/ecmascript-6">

  import mHeader from '../components/header.vue'

  export default {
    name:'group',

    data() {
      return {}
    },
    components:{

      mHeader

    }
  }
</script>
