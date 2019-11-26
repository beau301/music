<template>
  <div id="shopping">
    <!-- 顶部 -->
    <div id="g_top" class="m-header f-pr">
      <div class="m-nav f-cb f-pr">
        <div class="m-logo f-fl">
          <a></a>
        </div>
        <div class="m-search f-fl" id="m-search">
          <div>
            <div class="inputwrap">
              <form class="f-pr">
                <input type="text" class="searchbox" placeholder="真无线耳机" />
              </form>
            </div>
            <div class="wrap"></div>
          </div>
        </div>
        <div class="m-shopcar f-fl f-pr">
          <a>
            <span class="num f-pa">0</span>
          </a>
        </div>
        <div class="m-user f-fl" id="m-user">
          <div class="m-select f-pr">
            <div class="login">登录</div>
            <ul>
              <li>
                <a class="f-pr s-fc0">
                  <em class="phone"></em>
                  手机号登录
                  <span class="f-pa"></span>
                </a>
              </li>
              <li>
                <a class="f-pr s-fc0">
                  <em class="wechat"></em>
                  微信登录
                  <span class="f-pa"></span>
                </a>
              </li>
              <li>
                <a class="f-pr s-fc0">
                  <em class="qq"></em>
                  QQ登录
                  <span class="f-pa"></span>
                </a>
              </li>
              <li>
                <a class="f-pr s-fc0">
                  <em class="sina"></em>
                  新浪微博登录
                  <span class="f-pa"></span>
                </a>
              </li>
              <li>
                <a class="f-pr s-fc0">
                  <em class="netease"></em>
                  网易邮箱账号登录
                  <span class="f-pa"></span>
                </a>
              </li>
            </ul>
            <i class="arr"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-color:black;">
          <a class="f-pa">
            <img src="http://p4.music.126.net/IZ0gZy_AOdNI48rAJB6iIg==/109951164498439011.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide" style="background-color:pink;">
          <a class="f-pa">
            <img src="http://p3.music.126.net/_F8Uo4gtCqfyNyD1D1TDwA==/109951164503861716.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide" style="background-color:rgb(64, 126, 240);">
          <a class="f-pa">
            <img src="http://p4.music.126.net/ueT7_1G5gkvRRWG5PE4nXQ==/109951164504242283.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide" style="background-color:black;">
          <a class="f-pa">
            <img src="http://p3.music.126.net/3A7OPsfFSp33NgmPSeEmFw==/109951164501909871.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide" style="background-color:black;">
          <a class="f-pa">
            <img src="http://p4.music.126.net/uMUajMZekpl1A__ZKRiuaw==/109951164500263502.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide" style="background-color:black;">
          <a class="f-pa">
            <img src="http://p4.music.126.net/E-Fk7RsaaTvs_o5ljdiHIQ==/109951164507351737.jpg" alt />
          </a>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination swiper-pagination-white"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
    <!-- tab栏 -->
    <div class="g-tab">
      <div class="hometab">
        <ul class="f-tc f-cb">
          <li class="tab">
            <a class="f-blk">
              <img src="http://p3.music.126.net/UKhDHWnEMmoOo27PQmDPbA==/19117208672446378.jpg" alt />
              <span class="f-thide">热销爆品</span>
            </a>
            <em class="line"></em>
          </li>
          <li class="tab">
            <a class="f-blk">
              <img src="http://p4.music.126.net/tKMAm5OvR-2lAj7dnEOhsg==/18623527952924939.jpg" alt />
              <span class="f-thide">IP周边</span>
            </a>
            <em class="line"></em>
          </li>
          <li class="tab">
            <a class="f-blk">
              <img src="http://p3.music.126.net/PzH4QQKE5R97J9f2V-SvqQ==/18585045045959929.jpg" alt />
              <span class="f-thide">数码影音</span>
            </a>
            <em class="line"></em>
          </li>
          <li>
            <a class="f-blk jifen">
              <div class="left"></div>
              <div class="right">
                <div class="txt s-fc1">积分商城</div>
                <div class="count">0</div>
                <div class="jifen">积分</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 内容 -->
    <div class="g-bd g-bd-home">
      <div id="g-main" class="ma">
        <div id="module-root" class="n-index">
          <div class="subjs f-cb">
            <div class="subj pad-right">
              <a>
                <img
                  src="http://p4.music.126.net/kQqf40w-NFhLXIksQPgSwg==/109951164207184328.jpg"
                  alt
                />
              </a>
            </div>
            <div class="subj">
              <a>
                <img
                  src="http://p4.music.126.net/QtFPuBnRPFatpnGsyNJYhw==/109951163973446450.jpg"
                  alt
                />
              </a>
            </div>
          </div>
          <div class="m-block" id="m-block-hot" style="min-height:816px;">
            <span class="mid-txt mid-bold">编辑推荐</span>
            <div class="recmd-list">
              <div class="m-product">
                <ul class="list f-cb">
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="digalb f-mgt10" id="digalb">
            <div class="cnt">
              <div class="inner">
                <span>
                  <i></i>
                  数字专辑
                </span>
                <p class="f-thide">Taylor Swift 新专辑火热售卖中
                  <em class="p-cover"></em>
                </p>
                <a >立 即 购 买 ></a>
              </div>
            </div>
            <div class="covers f-pa">
              <img class="sml" src="https://p1.music.126.net/D1gL45hPNWNxoq1Foanh6Q==/109951164370176967.jpg?param=120y120" alt="">
              <img class="big" src="https://p2.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=120y120" alt="">
              <i class="circle"></i>
            </div>
            
          </div>
          <div class="m-block" id="m-block-hot" style="min-height:816px;">
            <span class="mid-txt mid-bold">编辑推荐</span>
            <div class="recmd-list">
              <div class="m-product">
                <ul class="list f-cb">
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a class="cover f-pr f-blk j-statistics">
                        <img
                          src="http://p3.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244"
                          alt
                        />
                        <span class="spec f-pa">
                          <span class="origin f-pa">￥129</span>
                          <span class="cut f-pa">￥199</span>
                        </span>
                      </a>
                      <div class="cnt f-tc">
                        <h3 class="f-thide2">
                          <span class="tag tag-red">
                            <em>特价</em>
                          </span>
                          <a>伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用</a>
                        </h3>
                        <p class="txt f-thide">￥129</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="g-ft g-ft-noplaybar">
      <div class="m-ft">
        <div class="wrap f-cb">
          <div class="copy">
            <p>
              <a class="s-fc4">关于网易</a>
              <span class="line">|</span>
              <a class="s-fc4">客户服务</a>
              <span class="line">|</span>
              <a class="s-fc4">服务条款</a>
              <span class="line">|</span>
              <a class="s-fc4">网站导航</a>
              <span class="line">|</span>
              <a class="s-fc4">意见反馈</a>
            </p>
            <p class="s-fc3">
              <span class="sep">网易公司版权所有©1997-2019</span>
              杭州乐读科技有限公司运营：
              <a class="s-fc3">浙网文[2015] 0415-135号</a>
            </p>
          </div>
          <ul class="enter f-fr">
            <li><a class="logo logo-musician f-tid"></a></li>
            <li><a class="logo logo-topic f-tid"></a></li>
            <li><a class="logo logo-midea f-tid"></a></li>
            <li><a class="logo logo-reward f-tid"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Swiper from "swiper";
import shopping from "../../static/sass/shopping.css";
export default {
  mounted() {
    // $(".m-shopcar").click(function(){
    //   console.log(1)
    // })
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      spaceBetween: 30,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style>
</style>