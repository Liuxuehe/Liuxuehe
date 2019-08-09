    var mod = new Vue({
        // this => vue model
        //dom choice
        el:'#mod',
        // data 
        data:{
            name:'abc',
            age:3
        },
        // function 
        methods:{
            getThis:function(){
                console.log(this);
            }
        },
        //依赖条件不变：只执行一次， 后续只会直接调用计算结果。
        computed:{
            getName:function(){
                console.log(this.name);
            }
        },
        
        // 
        watch:{
            //属性
            name:{
                immediate:true, // 
                //当属性改变时出发，约等于 WCF    On property change
                //只针对直接属性 值类型
                handler:function(){
                },
                // 深层监听 属性值是否发生改变
                deep:true
            }
        }
    });
    //$mount vue 声明挂载模板。  展示vue对象中的template
    //$nextTick 下次更新dom时触发
    //$forceUpdate 强制更新
    //$destroy() 销毁vue 对象
    
        
    /* 钩子
    beforeCreate
    created
    beforeMount
    mounted   
    beforeUpdate
    updated   实例本身更新完毕
    beforeDestroy
    destroyed
    */
