<template>
        <div class="row" style="width:500px;margin:100px auto">
            <form >
                <p class="tip" style="color:red"></p>
                <div class="form-group">
                    <label for="exampleInputEmail1">用户 (user1,user2,user3,user4)</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="name" name="admin">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">密码(123456)</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="pass">
                </div>
                <button type="button" class="btn btn-default" v-on:click="login()">登录</button>
            </form>
        </div>
   
</template>

<script>
export default {
    data(){
        return{}
    },
    mounted:function(){

    },
    methods:{
        login(){
            var _this=this;
            var admin=$("input[name=admin]").val();
            var pass=$("input[name=pass]").val();
            var params={
                admin:admin,
                pass:pass
            }
            this.$http.post('/api/user/login',params).then((response)=>{
                if(response&&response.status==200){
                    console.log(response.body.length)
                    if(response.body.length==1){
                        _this.$router.push('/hello/movies')
                    }else{
                        $(".tip").html('登陆名或者密码错误')
                    }
                }else{
                    alert(response.status)
                }
            })
        },
        
    }
}
</script>

<style>

</style>
