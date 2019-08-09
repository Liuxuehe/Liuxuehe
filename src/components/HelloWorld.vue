<template>
  <div class="lastball">
      <div v-text="gameRule"></div>
        <div v-show="!player1.login||!player2.login">
          玩家 1：<input type=text v-model="player1.name"> 
          玩家 2：<input type=text v-model="player2.name"> 
          <button v-on:click="playerlogin">确认</button>
        </div>
        <div v-show="player1.login &&player2.login &&winner==null&&this.error==null">
          <p v-show="this.balls.filter(item=>item.owner == null).length>0">
            {{this.player1.getTurn?this.player1.name:this.player2.getTurn?this.player2.name:this.player1.name}}请选择:
          </p>
          <div v-for="item in this.balls.filter(item=>item.owner == null)" :key="item.number"  class="inlineshow">
            <div class="ball" :class="{ballselected:item.selected}"  v-text="item.number" v-on:click="item.selected = !item.selected" ></div>
          </div>           
          <div class="button" v-on:click="getBalls" v-show="this.balls.filter(item=>item.owner == null).length>0">决定了</div>
          <user1 v-bind:playerObj="player1" ref='user1'></user1>   
          <user2 v-bind:playerObj="player2" ref='user2'></user2>
        </div>
        <div v-show="this.error!=null">
            {{this.error}}  <div class="button" @click="cleanError">重新选择</div>
        </div>
        <div v-show="this.winner !=null">恭喜 {{winner}}获得胜利！！！</div>
  </div>  
</template>

<script>
import player from './player'

export default {
  name: 'lastball',
  data(){
    return{
        player1:{
          name:'玩家1',
          handelBalls:[],
          getTurn:true,
          lastCount:0,
          login:false
        },
        player2:{
          name:'玩家2',
          handelBalls:[],
          getTurn:false,
          lastCount:0,
          login:false
        },
        error: null,        
        gameRule: '请输入玩家姓名：',
        balls: [
            {
                number: 1,
                selected: false,
                owner:null
            },
            {
                number: 2,
                selected: false,
                owner:null
            },
            {
                number: 3,
                selected: false,
                owner:null
            },
            {
                number: 4,
                selected: false,
                owner:null
            },
            {
                number: 5,
                selected: false,
                owner:null
            },
            {
                number: 6,
                selected: false,
                owner:null
            },
            {
                number: 7,
                selected: false,
                owner:null
            },
            {
                number: 8,
                selected: false,
                owner:null
            },
            {
                number: 9,
                selected: false,
                owner:null
            },
            {
                number: 10,
                selected: false,
                owner:null
            },
            {
                number: 11,
                selected: false,
                owner:null
            },
            {
                number: 12,
                selected: false,
                owner:null
            },
            {
                number: 13,
                selected: false,
                owner:null
            }
        ],
        winner:null
    }
  },  
  methods:{    
    playerlogin:function(){
       this.player1.login=true;
       this.player2.login=true;
       this.gameRule ='每个玩家每次最多只能拿3个球，至少拿1个球，得到最后一个球的玩家胜利！';
    },
    getBalls:function(){        
        var getter = this.player1.getTurn?this.player1:this.player2.getTurn?this.player2:this.player1;
        //getter.getBall(this.balls.filter(item=>item.selected && item.owner == null));
        getter.lastCount = this.balls.filter(item=>item.selected && item.owner == null).length;
        if(getter.lastCount<1)
        {
            this.error ="请选择你要的球";
            return;
        }
        else if(getter.lastCount>3)
        {
            this.error ="不能贪心哦";
            return;
        }
        this.balls.forEach(element => {
           if(element.selected && element.owner == null)
            {
              element.owner = this.player1;              
              getter.handelBalls.push(element);                         
            }            
        });
        if(this.balls.filter(item=>item.owner == null).length==0)
        {
          this.winner=getter.name;     
        }
        this.player1.getTurn = !this.player1.getTurn ;
        this.player2.getTurn = !this.player2.getTurn ;
    },
    cleanError:function(){
      this.error = null;
    }
  },
  props:{
    
  },
  computed:{},
  components:{
    user1:player,
    user2:player
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ball{
   background-color: red;
   width:20px;
   height: 20px;
   border-radius: 20px;
   text-align: center;
   line-height: 20px;
   color: white;
   margin: 5px;
   cursor:pointer;
}
.ballselected{
  background-color:darkred;
}
.inlineshow
{
   display: inline-block;
}
.button{
  width: 50px;
  height: 20px;
  border:silver 1px solid;
  text-align: center;
  font-size: 12px;
}
.button:hover{
  background-color: blanchedalmond;
  cursor:pointer;
}
</style>
