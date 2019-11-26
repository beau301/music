<template>
<div>
   <div id="g_nav2" class="m-subnav j-tflag">
      <div class="wrap f-pr">
         <ul class="nav">
            <li>
               <router-link to="/tuijian">
                  <em >推荐</em>
               </router-link>
            </li>
            
            <li>
               <router-link to="/tuijian/paihb" >
                  <em>排行榜</em>
               </router-link>
            </li>
            <li>
               <router-link to="/tuijian/gedan" >
                  <em>歌单</em>
               </router-link>
            </li>
            <li>
               <router-link to="/tuijian/zhubo" >
                  <em>主播电台</em>
               </router-link>
            </li>
            <li>
               <router-link to="/tuijian/singer" >
                  <em>歌手</em>
               </router-link>
            </li>
            <li>
               <router-link to="/tuijian/xindie" >
                  <em>新碟上架</em>
               </router-link>
            </li>
         </ul>
      </div>
   </div>
   <router-view></router-view>
   </div>
</template>

<script>

export default {
   mounted(){
      // .m-subnav .nav a.z-slt em
    $(".m-subnav .nav li").click(function(){
       $(this).addClass("z-slt1").siblings().removeClass('z-slt1');
      // console.log($(this).addClass("z-slt").siblings().removeClass(""))
    })
  }
}
</script>

<style>
.m-subnav {
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
}
.m-subnav .wrap {
    width: 1100px;
    height: 34px;
    margin: 0 auto;
}
.f-pr {
    position: relative;
    zoom: 1;
}
.m-subnav .nav {
    float: left;
    padding-left: 180px;
}
.m-subnav .nav li{
   float: left;
   height: 20px;
   border-radius: 20px;
   margin: 7px 17px 0;
   line-height: 21px;
}
 .m-subnav .nav a.z-slt {
    color: #fff;
    text-decoration: none;
}
.z-slt1  {
   background: #9B0909;
}
.m-subnav .nav a:hover em{
    background: #9B0909;
}
.m-subnav .nav a em {
   font-size: 12px;
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    /* margin: 7px 17px 0;  */
    border-radius: 20px;
    /* line-height: 21px; */
    color: #fff
}
</style>