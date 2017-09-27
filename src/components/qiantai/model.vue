<template>
<div class="row">
    <div class="col-sm-12" style="padding:20px 0px;font-size:15px;position:relative">
        <div style="width:100px;float:left;text-align:right;padding-right:8px;">
            <img :src="this.imgSrc" style="width:30px;position:absolute;top:20px;left:20px;">电影</div>
        <div style="float:left;">
            <div class="tab">
                <span v-for="(item,index) in tab" :key="index" v-on:click="clickTab(item.mark)">{{item.content}}</span>
            </div>
        </div>
    </div>
    <div class="col-sm-10">
        <div v-for="(item,index) in this.data" :key="index" style="width:160px;float:left;margin:0px 11px 0px 0px">
            <div><img :src="item.file" style="width:100%;height:130px;"></div>
            <div style="heihgt:30px;line-heihgt:30px;"><p>{{item.name}}</p></div>
            <div style="height:30px;text-align:left">
                <span><img src="static/image/qt_sort/watch.png" style="width:16px;margin:0px 10px">{{item.watch}}</span>
                <span><img src="static/image/qt_sort/collect.png" style="width:16px;margin:0px 10px">{{item.collect}}</span>
            </div>
        </div>
    </div>
   
</div> 
</template>

<script>
export default {
    data(){
        return{
            tab:[
                {mark:'id',content:'按综合排序'},
                {mark:'watch',content:'按查看排序'},
                {mark:'collect',content:'按收藏排序'}
            ],
            data:[],
            imgSrc:'',
        }
    },
    props:['message'],
    mounted:function(){
        this.getData()
    },
    methods:{
        getData:function(sort){
            var _this=this;
            var params={
                limit:8,
                offset:0,
                name:'',
                model:this.message,
                sort:sort
            }
            this.$http.post('/api/model/query',params).then((response)=>{
                if(response){
                    var result=response.body.body.rows
                    for(var i=0;i<result.length;i++){
                        _this.data.push(result[i])
                    }   
                }
            })
            this.imgSrc='static/image/qt_sort/'+this.message+'.png'
        },
        //点击排序
        clickTab:function(mark){
            this.data=[];
            this.getData(mark)
        }
    }

}
</script>

<style>
.tab span{float:left;border-left:1px solid #ccc;padding:0px 10px 0px 10px;cursor:pointer;}
.tab span:hover{color:#1296db}
</style>
