<template>
  <div class="player" v-show="playerObj.login">
      <p v-text="playerObj.name"></p>
    <div class="inlineshow" v-show="playerObj.handelBalls.length>0">
      <p >刚刚拿了{{playerObj.lastCount}}个球， 手中现有 {{playerObj.handelBalls.length}} 个球：</p>
      <div v-for="item in playerObj.handelBalls" :key="item.number" class="inlineshow">
        <div class="ball" v-text="item.number"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "player",
 
  data() {
    return {
      handelBalls:[]
    };
  },
   
  methods: {    
  },props:{
      playerObj:{
          type:Object,
      }
  },
  computed: {

  }
};
</script>

<style scoped>
</style>
