import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/", //主页
      component: () => import("../components/discover/discover.vue"),
      redirect:"/tuijian",
      children:[
        {
          path: "/tuijian", //推荐
          component: () => import("../components/home/tuijian.vue")
        },
        {
          path: "/tuijian/gedan", //歌单
          component: () => import("../components/home/gedan.vue")
        },
        {
          path: "/tuijian/paihb", //排行榜
          component: () => import("../components/home/paihb.vue")
        },
        {
          path: "/tuijian/zhubo", //主播电台
          component: () => import("../components/home/zhubo.vue")
        },
        {
          path: "/tuijian/singer", //歌手
          component: () => import("../components/home/geshou.vue")
        },
        {
          path: "/tuijian/xindie", //新碟上架
          component: () => import("../components/home/xindie.vue")
        }
    
      ]
    },
    {
      // 商城
      path:"/shopping",
      component:()=>import("../components/shopping.vue")
    },
    {
      // 我的
      path:"/my",
      component:()=>import("../components/my.vue")
    },
    {
      // 朋友
      path:"/friend",
      component:()=>import("../components/friend.vue")
    },
    {
      // 下载
      path:"/download",
      component:()=>import("../components/download.vue")
    }
    
    
    
    
    

  ]
})
