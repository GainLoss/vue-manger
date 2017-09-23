<template>
    
        <div class="row" style="width:500px;margin:100px auto">
            <form >
                <div class="form-group">
                    <label for="exampleInputEmail1">用户 (user1,user2,user3,user4)</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="name" name="admin">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">密码(123456)</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="pass">
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox"> Check me out
                    </label>
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
    methods:{
        login(){
            var admin=$("input[name=admin]").val();
            var pass=$("input[name=pass]").val();
            var params={
                admin:admin,
                pass:pass
            }
            this.$http.post('/api/user/login',params).then((response)=>{
                console.log(response)
            })
        }
    }
}
</script>

<style>

</style>
