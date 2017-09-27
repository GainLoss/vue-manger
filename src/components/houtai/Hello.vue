<template>
  <div class="common-content">
    <div class="row">
      <div class="col-sm-12" style="margin:0px;padding:0px;margin-bottom:20px;">
        <div style="background:#33CCCC;padding:10px;color:#fff;posiiton:relative">
          <h1>后台管理界面</h1>
          <div class="login" title="退出登录" style="position:absolute;right:20px;top:5px;cursor:pointer;" v-on:click="login()">
            <p style="width:50px;height:50px;">
              <img src="/static/image/logo.png" style="width:100%;border-radius:50%;">
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-2" style="padding:0px;">
        <menuView v-on:menuMessage='menuConMessage'></menuView>
      </div>
      <div class="col-sm-10">
        <keep-alive>
          <component :is="this.menu"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import menu from './menu.vue'

import movies from './movies/view.vue'
import tev from './tev/view.vue'
import comic from './comic/view.vue'
import life from './life/view.vue'
import news from './news/view.vue'
import sum from './sum/view.vue'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      menu: this.$route.params.id
    }
  },
  components: {
    'menuView': menu,
    movies,
    tev,
    comic,
    life,
    news,
    sum
  },

  methods: {
    menuView: function() {
      var name = this.$route.params.id;
      console.log(name)
      return name
    },
    menuConMessage: function(menuMark) {
      this.menu = menuMark
    },
    login:function(){
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


/*公共样式*/

.row {
  margin: 0px;
}

.common-content {
  min-width: 900px;
}
</style>
