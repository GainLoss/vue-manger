<template>
  <div class="common-content" style="margin-top:20px;">
    <div class="row">
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
      menu:this.$route.params.id
    }
  },
  components:{
    'menuView':menu,
    movies,
    tev,
    comic,
    life,
    news,
    sum
  },

  methods:{
    menuView:function(){
      var name=this.$route.params.id;
      console.log(name)
      return name
    },
    menuConMessage:function(menuMark){
        this.menu=menuMark
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
.row{margin:0px;}
.common-content{min-width:900px;}
</style>
