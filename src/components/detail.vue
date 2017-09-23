<template>
<div>
    <div>
        <label>收藏</label>
        <div style="width:30px;height:30px;margin:0 auto;cursor:pointer;">
            <img :src="this.collectImage" v-on:click="clickCollect()" v-bind:name="collectMark" style="width:100%;height:100%"/>
        </div>
    </div>
    <form style="width:700px;height:700px;margin:20px auto" v-for="(item,index) in items" :key="index">
            <div class="form-group">
                <label for="exampleInputName">电影的名字</label>
                <input type="text" class="form-control" name="name" placeholder="名字" :value="item.name">
            </div>
            <div class="form-group">
                <label for="exampleInputauthor">主演</label>
                <input type="text" class="form-control" name="author" placeholder="主演" :value="item.author"/>
            </div>
            <div class="form-group">
                <label for="exampleInputauthor">上传人</label>
                <input type="text" class="form-control" name="upauthor" placeholder="上传人" :value="item.upauthor">
            </div>
            <div class="form-group">
                <label for="exampleInputauthor">描述</label>
                <textarea type="text" class="form-control" name="des" placeholder="描述" :value="item.des"></textarea>
            </div>
            <div>
                <label for="exampleInputauthor">图片</label>
                <div class="file" v-html="html">
                </div>
            </div>
        </form>
</div>  
</template>

<script>
export default {
    data(){
        return{
            mark:'',
            items:'',
            html:'',
            collectMark:-1,
            collectImage:'/static/image/collect1.png'
        }
    },
    mounted:function(){
        this.getData();
    },
    methods:{
        //获取详情页面
        getData:function(){
            var params={
                id:this.$route.query.id, 
                cate:this.$route.query.cate
            };
            console.log(this.$route.query)
            this.$http.post("/api/data/detail",params).then((response)=>{
                if(response&&response.status==200){
                    var result=response.body;
                    this.items=result;
                    
                    var str=result[0].file;
                    if(str.indexOf('png')!=-1||str.indexOf('jpg')!=-1||str.indexOf('gif')!=-1){//图片
                        var html='<img src='+str+'>'
                        this.html=html
                        console.log(html)
                    }else if(str.indexOf('mp4')!=-1){//视频mp4
                       var html='<video src='+str+' controls="controls" autoplay="autoplay" style="width:400px;height:400px;"></video>'
                        this.html=html
                    }
                }
            })
        },
        //点击收藏
        clickCollect:function(){
            if(this.collectMark==-1){
                this.collectMark=1,
                this.collectImage='/static/image/collect2.png'
            }else{
                this.collectMark=-1,
                this.collectImage='/static/image/collect1.png'
            }
            var params={
                id:this.$route.query.id, 
                cate:this.$route.query.cate,
                collectMark:this.collectMark,
            };
            this.$http.post('/api/data/collect',params).then((response)=>{
                console.log(response)
            })
        }

    }
}
</script>

<style>

</style>
