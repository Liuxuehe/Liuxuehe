<template>
<div id="app">
<homeIndex></homeIndex>
<div>
  <router-view></router-view>
</div>
</div>
</template>

<script> 
import Header from './components/Header' 

export default {
  name: 'App',
  components:{
    "homeIndex":Header
  }
}
</script>

<style scoped>

</style>
