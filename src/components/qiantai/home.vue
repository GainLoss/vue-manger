<template>
<div class="home">
<div class="row" >
    <div class="col-sm-12" style="height:auto;border:2px dotted #ccc">
        <myMenu></myMenu>
    </div>
    <div class="col-sm-12">
        <!--电影--> 
        <myModel v-bind:message="movies"></myModel> 
        <!--电视剧-->
        <myModel v-bind:message="tev"></myModel> 
        <!--动漫-->
        <myModel v-bind:message="comic"></myModel> 
        <!--新闻-->
        <myModel v-bind:message="news"></myModel> 
        <!--生活-->   
         <myModel v-bind:message="life"></myModel> 
    </div>    
</div> 
</div>
</template>

<script>
import menu from './menu.vue'
//电影
import model from './model.vue'
export default {
    data(){
        return{
            movies:'movies',
            tev:'tev',
            comic:'comic',
            news:'news',
            life:'life'
        }
    },
    components:{
        'myMenu':menu,
        'myModel':model
    }

}
</script>

<style>
.home{width:1200px;margin:0px auto;}
</style>
