<template>
  <div id="app">
    <!-- 头部 -->
    <div class="top">
      <div id="g-topbar" class="g-topbar">
        <div class="m-top">
          <div class="wrap f-cb">
            <!-- logo 链接首页 -->
            <h1 class="logo">
              <a href="javascript:;"></a>
            </h1>
            <!-- 发现音乐-我的音乐-朋友-商城-音乐人-下载客户端 -->
            <ul class="m-nav j-tflag" style="margin-top:0;">
              <li class="fst">
                <span>
                  <router-link to="/tuijian" class="z-slt">
                    <em>发现音乐</em>
                    <sub class="cor">&nbsp;</sub>
                  </router-link>
                </span>
              </li>
              <li>
                <span>
                  <router-link to="/my" class="z-slt">
                    <em>我的音乐</em>
                    <sub class="cor">&nbsp;</sub>
                  </router-link>
                </span>
              </li>
              <li>
                <span>
                  <router-link to="/friend" class="z-slt">
                    <em>朋友</em>
                    <sub class="cor">&nbsp;</sub>
                  </router-link>
                </span>
              </li>
              <li>
                <span @click="seeShare() ">
                  <router-link to="/shopping" class="z-slt">
                    <em>商城</em>
                    <sub class="cor">&nbsp;</sub>
                  </router-link>
                </span>
              </li>
              <li>
                <span>
                  <a href="" class="z-slt">
                    <em>音乐人</em>
                    <sub class="cor">&nbsp;</sub>
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <router-link to="/download" class="z-slt">
                    <em>下载客户端</em>
                    <sub class="cor">&nbsp;</sub>
                  </router-link>
                </span>
                <sub class="hot">&nbsp;</sub>
              </li>
            </ul>
            <!-- 登陆 -->
            <div class="m-tophead f-pr j-tflag">
              <a href="javascript:;" class="link s-fc3" @click="denglu">登录</a>
            </div>
            <!-- 创作者中心 -->
            <a href="javascript:;" class="m-topvd f-pr m-creator-center">创作者中心</a>
            <!-- 搜索框 -->
            <div class="m-srch f-pr j-suggest">
              <div class="srchbg">
                <span class="parent">
                  <input type="text" name="srch" id="srch" class="txt j-flag" />
                  <label for class="ph j-flag">音乐/视频/电台/用户</label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 登陆框和注册框 -->
      <div class="auto-1574403193041 m-layer z-show" style="top:115px;left:700px;" v-show="show">
        <div class="zbar">
          <div class="zttl f-thide">登陆</div>
        </div>
        <div class="zcnt">
          <div class="lyct lyct-1">
            <div class="n-log2 n-log2-1 f-cb">
              <div class="u-main">
                <div class="u-plt"></div>
                <!-- 手机号登陆 -->
                <div class="f-mgt10" @click="denglu1">
                  <a href="javascript:;" class="u-btn2 u-btn2-2">
                    <i>手机号登陆</i>
                  </a>
                </div>
                <!-- 注册 -->
                <div class="f-mgt10" @click="denglu2">
                  <a href="javascript:;" class="u-btn2 u-btn2-1">
                    <i>注 &nbsp;&nbsp;&nbsp; 册</i>
                  </a>
                </div>
              </div>
              <div class="u-alt">
                <ul>
                  <!-- 微信登陆 -->
                  <li>
                    <a href="javascript:;">
                      <i class="u-mlg2 u-mlg2-wx"></i>微信登录
                    </a>
                  </li>
                  <!-- QQ登录 -->
                  <li>
                    <a href="javascript:;">
                      <i class="u-mlg2 u-mlg2-qq"></i>QQ登录
                    </a>
                  </li>
                  <!-- 微博登陆 -->
                  <li>
                    <a href="javascript:;">
                      <i class="u-mlg2 u-mlg2-sn"></i>微博登陆
                    </a>
                  </li>
                  <!-- 网易邮箱账号登陆 -->
                  <li>
                    <a href="javascript:;">
                      <i class="u-mlg2 u-mlg2-wy"></i>网易邮箱账号登陆
                    </a>
                  </li>
                </ul>
              </div>
              <div class="u-official-terms">
                <input type="checkbox" id="j-official-terms" />
                <label style="margin-left: 2px;">同意</label>
                <a href="javascript:;" style="color:#507DAF;">《服务条款》</a>
                <a href="javascript:;" style="color:#507DAF;">《隐私政策》</a>
                <a href="javascript:;" style="color:#507DAF;">《儿童隐私政策》</a>
              </div>
            </div>
          </div>
        </div>
        <span class="zcls" title="关闭窗体" id="auto-id-aVRVJoE7oB2uP4tm" @click="denglu">×</span>
      </div>
      <!-- 手机号登陆框 -->
      <div v-show="show1" class="auto-1574403193041 m-layer z-show" style="top:115px;left:700px;">
        <div class="zbar">
          <div class="zttl f-thide">手机号登陆</div>
        </div>
        <div class="zcnt">
          <div class="lyct lyct-1">
            <div class="n-log2 n-log2-2">
              <div class="j-mob">
                <div class="u-phonewrap">
                  <a href="javascript:;" class="current">
                    <span class="j-code" style="font-size:12px;" @click="display">+86</span>
                    <span class="icn u-icn2 u-icn2-17" @click="display"></span>
                  </a>
                  <div class="txtwrap">
                    <input type="text" name="p" class="j-phone txt u-txt" placeholder="请输入手机号" />
                  </div>
                  <ul class="j-list options" v-show="show3">
                    <li class="itm f-cb" v-for="(item,index) in phone" :key="index">
                      <span class="lt">{{item.phoneAdress}}</span>
                      <span class="rt">{{item.phoneNumber}}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="f-mgt10">
                <input
                  type="password"
                  name="pw"
                  id="pw"
                  class="j-pwd u-txt"
                  placeholder="请输入密码"
                  autocomplete="new-password"
                />
              </div>
              <div class="f-mgt10">
                <label for class="s-fc3">
                  <input type="checkbox" name id checked="checked" class="j-auto u-auto" />自动登录
                  <a href="javascript:;" class="f-fr s-fc3 underline">忘记密码？</a>
                </label>
              </div>
              <div class="f-mgt20">
                <a href="javascript:;" class="j-primary u-btn2 u-btn2-2">
                  <i>登陆</i>
                </a>
              </div>
            </div>
            <div class="js-btmbar n-loglink2 f-cb">
              <a href="javascript:;" class="f-fl s-primary" @click="denglu1">《&nbsp;&nbsp;其他登录方式</a>
              <a href="javascript:;" class="f-fr">没有帐号？免费注册&nbsp;&nbsp;></a>
            </div>
          </div>
        </div>
        <span class="zcls" title="关闭窗体" id="auto-id-aVRVJoE7oB2uP4tm" @click="denglu1">×</span>
      </div>
      <!-- 手机号注册 -->
      <div v-show="show2" class="auto-1574403193041 m-layer z-show" style="top:115px;left:700px;">
        <div class="zbar">
          <div class="zttl f-thide">手机号注册</div>
        </div>
        <div class="zcnt">
          <div class="lyct lyct-1 f-cb">
            <div class="n-log2 n-log2-2">
              <div class="s-fc3">
                <label for>手机号：</label>
              </div>
              <div class="j-mob f-mgt10">
                <div class="u-phonewrap">
                  <a href="javascript:;" class="current">
                    <span class="j-code" style="font-size:12px;" @click="display">+86</span>
                    <span class="icn u-icn2 u-icn2-17" @click="display"></span>
                  </a>
                  <div class="txtwrap">
                    <input type="text" name="p" class="j-phone txt u-txt" placeholder="请输入手机号" />
                  </div>
                  <ul class="j-list options" v-show="show3">
                    <li class="itm f-cb" v-for="(item,index) in phone" :key="index">
                      <span class="lt">{{item.phoneAdress}}</span>
                      <span class="rt">{{item.phoneNumber}}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="f-mgt10 s-fc3">
                <label for>密码:</label>
              </div>
              <div class="f-mgt10">
                <input type="password" class="j-pwd u-txt" name id placeholder="设置登录密码，不少于6位" />
              </div>
              <div class="f-mgt20">
                <a href="javascript:;" class="j-btn j-nextstep u-btn2 u-btn2-2">
                  <i>下一步</i>
                </a>
              </div>
            </div>
            <div class="n-loglink2">
              <a href="javascript:;" class="s-primary" @click="denglu2">《&nbsp;&nbsp;返回登录</a>
            </div>
          </div>
        </div>
        <span class="zcls" title="关闭窗体" id="auto-id-aVRVJoE7oB2uP4tm" @click="denglu2">×</span>
      </div>
    </div>
    <router-view></router-view>
    <!-- 底部 -->
    <div>
      <div class="g-ft">
        <div class="m-ft">
          <div class="wrap f-cb">
            <div class="copy">
              <p class="link">
                <a href="javascript:;" class="item s-fc4">服务条款</a>
                <span class="line">|</span>
                <a href="javascript:;" class="item s-fc4">隐私政策</a>
                <span class="line">|</span>
                <a href="javascript:;" class="item s-fc4">儿童隐私政策</a>
                <span class="line">|</span>
                <a href="javascript:;" class="item s-fc4">版权投诉指引</a>
                <span class="line">|</span>
                <a href="javascript:;" class="item s-fc4">意见反馈</a>
                <span class="line">|</span>
              </p>
              <p class="right s-fc3">
                <span class="sep span">网易公司版权所有©1997-2019</span>
                <span class="span">杭州乐读科技有限公司运营：</span>
                <a href="javascript:;" class="alink s-fc3">浙网文[2018]3506-263号</a>
              </p>
              <p class="contact s-fc3">
                <span class="sep span">违法和不良信息举报电话：0571-89853516</span>
                <span class="span">举报邮箱：</span>
                <a href="javascript:;" class="alink s-fc3">ncm5990@163.com</a>
              </p>
            </div>
            <ul class="enter f-fr">
              <li class="unit1">
                <a href="javascript:;" class="logo logonew logo-auth f-tid"></a>
                <span class="tt tt-auth"></span>
              </li>
              <li class="unit1">
                <a href="javascript:;" class="logo logonew logo-musician f-tid"></a>
                <span class="tt tt-musician"></span>
              </li>
              <li class="unit1">
                <a href="javascript:;" class="logo logonew logo-reward f-tid"></a>
                <span class="tt tt-reward"></span>
              </li>
              <li class="unit1">
                <a href="#" class="logo logonew logo-cash f-tid"></a>
                <span class="tt tt-cash"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a href="#" class="m-back" title="回到顶部" id="g_backtop"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      phone: [
        {
          phoneAdress: [
            "中国",
            "中国香港",
            "中国澳门",
            "中国台湾",
            "日本",
            "韩国",
            "英国",
            "美国",
            "加拿大",
            "法国"
          ]
        },
        {
          phoneNumber: [
            "+86",
            "+852",
            "+853",
            "+886",
            "+81",
            "+82",
            "+44",
            "+1",
            "+1",
            "+33"
          ]
        }
      ]
    };
  },
  methods: {
    denglu() {
      this.show = !this.show;
    },
    denglu1() {
      this.show1 = !this.show1;
      this.show = !this.show;
    },
    denglu2() {
      this.show2 = !this.show2;
      this.show = !this.show;
    },
    display() {
      this.show3 = !this.show3;
    },
    seeShare() {
      let routeUrl = this.$router.resolve({
        path: "/shopping",
        query: { id: 96 }
      });
      window.open(routeUrl.href, "_blank");
    }
  },
  
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
.txt:focus ~ .ph {
  display: none;
}
.m-srch .parent label {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  color: #9b9b9b;
  cursor: text;
  font-size: 12px;
  z-index: 1;
}
img,
.txt {
  border: 0;
}
.m-srch .parent input {
  width: 95%;
  margin: 0;
  padding: 0;
  background: transparent;
  color: #fff;
  outline: none;
}
.m-srch .parent input {
  color: #333;
  line-height: 16px;
  position: absolute;
  top: -7px;
  height: 30px;
  z-index: 2;
}
.m-srch .parent {
  display: block;
  position: relative;
  margin: 8px 0 0 30px;
}
.m-srch .srchbg {
  margin-top: 19px;
  background-position: 0 -99px !important;
  background-color: #fff !important;
  border-radius: 32px;
}
.m-srch,
.m-srch .srchbg {
  float: right;
  width: 158px;
  height: 32px;
}
.m-topvd:hover {
  border-color: white;
  color: white;
}
.m-creator-center {
  background: none !important;
}
.f-pr {
  position: relative;
  zoom: 1;
}
.m-topvd {
  float: right;
  width: 90px;
  height: 32px;
  margin: 19px 0 0 12px;
  box-sizing: border-box;
  padding-left: 16px;
  border: 1px solid #4f4f4f;
  background-position: 0 -140px;
  line-height: 33px;
  color: #ccc;
  border-radius: 20px;
  text-decoration: none;
  font-size: 12px;
}
.n-loglink2 a {
  font-size: 12px;
  color: #999;
  text-decoration: none;
}
.n-loglink2 a.s-primary {
  color: #0c72c3;
}
.n-loglink2 {
  padding: 0 19px;
  height: 48px;
  border-top: 1px solid #c6c6c6;
  border-radius: 0 0 4px 4px;
  line-height: 48px;
  background-color: #f7f7f7;
}
.u-btn2 i {
  padding: 0 15px 0 20px;
  pointer-events: none;
}
.u-btn2-2 i {
  color: #fff;
  background-position: 0 -387px;
}
.n-log2-2 .u-btn2-2 i,
.n-log2-3 .u-btn2-2 i {
  width: 180px;
}
.u-btn2 {
  padding: 0 5px 0 0;
  white-space: nowrap;
}
.u-btn2,
.u-btn2:hover {
  text-decoration: none;
}
.u-btn2-2 {
  color: #fff;
  background-position: right -428px;
}
.underline {
  text-decoration: none;
}
.underline:hover {
  text-decoration-line: underline;
}
.f-fr {
  float: right;
}
.n-log2 .u-auto {
  margin: 0 12px 0 0;
  vertical-align: middle;
  color: #333;
}
.s-fc3,
a.s-fc3:hover {
  color: #666;
  font-size: 12px;
}
.u-txt {
  height: 19px;
  margin: 0;
  padding: 5px 6px 6px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  line-height: 19px;
}
.n-log2 .u-txt {
  width: 206px;
}
.u-phonewrap .options .itm .rt {
  float: right;
  margin-right: 10px;
}
.u-phonewrap .options .itm .lt {
  padding-left: 7px;
}
.u-phonewrap .options .itm {
  height: 32px;
  line-height: 32px;
  color: #333;
  cursor: pointer;
  overflow: hidden;
}
.u-phonewrap .options {
  position: absolute;
  top: 31px;
  left: -1px;
  width: 100%;
  height: 128px;
  border: 1px solid #cdcdcd;
  border-top: none;
  clear: both;
  background-color: #fff;
  overflow: auto;
}
.u-phonewrap .txt {
  display: block;
  padding: 5px 8px 5px;
  height: 20px;
  line-height: 20px;
  border: none;
  border-radius: 2px;
  font-size: 12px;
  color: #333;
}
.n-log2 .u-txt {
  width: 206px;
}
.u-phonewrap .txtwrap {
  overflow: hidden;
}
.u-icn2 {
  background: url(assets/icon2.png) no-repeat;
}
.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.u-icn2-17 {
  width: 7px;
  height: 4px;
  background-position: -260px -450px !important;
}
.u-phonewrap .current .icn {
  position: absolute;
  top: 14px;
  right: 7px;
}
.u-phonewrap .current {
  position: relative;
  float: left;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 0 18px 0 5px;
  border-right: 1px solid #cdcdcd;
  text-decoration: none;
  color: #000;
}
.u-phonewrap {
  position: relative;
  height: 30px;
  margin: 0;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  z-index: 10;
}
.f-mgt20 {
  margin-top: 20px;
}
.f-mgt10 {
  margin-top: 10px;
}
.n-log2-2 {
  padding: 30px 0 43px;
  width: 220px;
  margin: 0 auto;
}
div.m-layer .lyct-1 {
  padding: 0;
}
div.m-layer .zcls {
  position: absolute;
  z-index: 20;
  top: 0px;
  right: 20px;
  width: 10px;
  height: 10px;
  /* overflow: hidden; */
  cursor: pointer;
  /* background-position: 0 -95px; */
  font-size: 25px;
  color: #878787;
}
.u-official-terms a {
  text-decoration: none;
}
.u-official-terms a:hover {
  text-decoration-line: underline;
}
body,
textarea,
select,
input,
button {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
}
.n-log2 .u-official-terms {
  white-space: nowrap;
  float: left;
  margin-left: 40px;
  margin-top: 30px;
  font-family: NotoSansHans-Regular;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 15px;
}
.u-mlg2-wy {
  background-position: -271px -670px !important;
}
.u-mlg2-sn {
  background-position: -231px -670px !important;
}
.u-mlg2-qq {
  background-position: -190px -670px !important;
}
.u-slg,
.u-slg2,
.u-slg3,
.u-blg,
.u-mlg,
.u-mlg2,
.u-errlg {
  background: url(assets/logo.png) no-repeat;
}
.u-slg,
.u-slg2,
.u-slg3,
.u-blg,
.u-mlg,
.u-mlg2,
.u-importlg,
.u-errlg {
  display: inline-block;
  vertical-align: middle;
}
.u-mlg2 {
  width: 38px;
  height: 38px;
}
.u-mlg2-wx {
  background-position: -150px -670px;
}
.n-log2 .u-alt li .u-mlg2 {
  margin-right: 14px;
}
.n-log2 .u-alt li a {
  font-size: 12px;
  color: #333;
  line-height: 38px;
  text-decoration: none;
}
.n-log2 .u-alt li {
  margin-top: 15px;
}
.n-log2 .u-alt li:hover a {
  text-decoration-line: underline;
}
.n-log2 .u-alt {
  float: left;
  padding: 3px 0 3px 39px;
  margin-top: -15px;
}
.u-btn2-1 i {
  color: #333;
  background-position: 0 -59px !important;
}
.u-btn2-1 {
  color: #333;
}
.u-btn2,
.u-btn2 i,
.u-btn2 .icn,
.u-btni,
.u-btni i,
.u-tag,
.u-tag i,
.u-btni-addply .ply {
  background: url(assets/button2.png) no-repeat 0 9999px;
}
.u-btn2,
.u-btn2 i {
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
}
.u-btn2 i {
  padding: 0 15px 0 20px;
  pointer-events: none;
}
.u-btn2-2 i {
  color: #fff;
  background-position: 0 -387px;
}
.n-log2 .u-main .u-btn2 i {
  width: 184px;
}
.u-btn2 {
  padding: 0 5px 0 0;
  white-space: nowrap;
}
.u-btn2-2 {
  color: #fff;
  background-position: right -428px;
}
.u-btn2-2 {
  color: #fff;
  background-position: right -428px;
}
.n-log2 .u-main .u-btn2 {
  width: 219px;
}
.f-mgt10 {
  margin-top: 10px;
}
.n-log2 .u-main .u-plt {
  height: 120px;
  background: url(assets/platform.png) no-repeat 13px 0;
}
.n-log2 .u-main {
  float: left;
  width: 224px;
  padding: 0 35px 3px 40px;
  border-right: 1px dotted #ccc;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.n-log2-1 {
  padding: 40px 0 39px;
}
div.m-layer .lyct-1 {
  padding: 0;
}
div.m-layer div.zcnt {
  padding: 0;
  border: 1px solid #878787;
  border-width: 0 1px 1px;
  border-radius: 0 0 4px 4px;
  background: #fff;
}
div.m-layer .zttl {
  padding-right: 45px;
  margin: 0;
  height: 38px;
  line-height: 38px;
  padding-left: 18px;
  border-radius: 3px 3px 0 0;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background-position: 50% 0;
}
div.m-layer .zbar {
  position: relative;
  z-index: 10;
  border-bottom: 1px solid #191919;
  border-radius: 4px 4px 0 0;
  background: #2d2d2d;
}
div.m-layer {
  position: absolute;
  z-index: 9998;
  width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  /* border: none; */
  /* height: 500px; */
}
.m-tlist {
  position: absolute;
  top: 38px;
  right: -43px;
  width: 158px;
  background: #2b2b2b;
  border: 1px solid #202020;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: none;
}
.m-tophead .link {
  display: block;
  width: 28px;
  margin-top: 7px;
  color: #787878;
  font-size: 12px;
  text-decoration: none;
}
.m-tophead .link:hover {
  color: #999;
  text-decoration-line: underline;
}
.m-tophead {
  float: right;
  height: 45px;
  margin: 19px 0 0 20px;
  padding: 0 22px 0 0;
  background-position: right -47px !important;
  background-image: none !important;
}
.m-nav .hot {
  display: block;
  position: absolute;
  top: 21px;
  left: 100px;
  width: 28px;
  height: 19px;
  background-position: -190px 0 !important;
}
em {
  color: #fff;
}
em,
i {
  font-style: normal;
  text-align: left;
  font-size: inherit;
}
.m-nav a.z-slt .cor {
  display: none;
  position: absolute;
  left: 50%;
  top: 64px;
  width: 12px;
  height: 7px;
  margin-left: -6px;
  overflow: hidden;
  background-position: -226px 0;
  /* background: url(../image/topbar.png) no-repeat; */
}
.m-nav a {
  padding: 0 19px;
  text-align: center;
  line-height: 70px;
  color: #ccc;
}
.m-nav a.z-slt {
  /* background: #000; */
  text-decoration: none;
}
.m-nav .fst {
  background: #000;
}
.m-nav li:hover {
  background: #000;
}
.m-nav .fst a {
  color: #fff !important;
}
.m-nav .fst sub {
  display: block !important;
}
.m-nav li sapn {
  float: left;
  height: 70px;
  font-size: 14px;
}
.m-nav li.fst span {
  background: none;
}
.m-nav li {
  position: relative;
  /* *zoom: 1; */
  background-position: right -300px;
  float: left;
  height: 70px;
  font-size: 14px;
}
.g-topbar {
  /* position: absolute;
  left: 0;
  top: 0;
  width: 1903px; */
  z-index: 99;
  zoom: 1;
  height: 70px;
}
.m-top {
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  overflow: hidden;
}

.m-top .wrap {
  width: 1100px;
  margin: 0 auto;
}
.m-top .logo {
  float: left;
  width: 176px;
  height: 69px;
  background-position: 0 0;
  /* background: url(../image/topbar.png) no-repeat; */
  margin-top: 0px;
}
.m-top .logo a {
  float: left;
  width: 157px;
  height: 100%;
  padding-right: 20px;
  text-indent: -9999px;
}
.m-nav {
  float: left;
}
.m-top .logo,
.m-nav .cor,
.m-nav .hot,
.m-srch .srchbg,
.m-mail,
.m-tophead,
.m-topvd {
  background: url(assets/topbar.png) no-repeat;
}
/* dibu */
.m-back {
  display: block;
  position: fixed;
  text-indent: -9999px;
  left: 50%;
  margin-left: 500px;
  bottom: 160px;
  width: 49px;
  height: 44px;
  background: url(assets/sprite.png);
  background-position: -265px -47px;
}
.m-ft .enter .tt-cash {
  background-position: -1px -72px;
}
.m-ft .logonew.logo-cash {
  background-position: 0 -101px;
}
.m-ft .enter .tt-reward {
  background-position: 0 -54px;
}
.m-ft .logonew.logo-reward {
  background-position: -60px -50px;
}
.m-ft .enter .tt-musician {
  background-position: 0 0;
}
.m-ft .logonew.logo-musician {
  background-position: 0 0;
}
.m-ft .logonew + .tt {
  background: url(assets/foot_enter_tt.png) no-repeat;
  background-size: 180px 100px;
}
.m-ft .enter .tt {
  display: inline-block;
  margin: 5px 5px 0;
  width: 52px;
  height: 14px;
}
.m-ft .enter .tt-auth {
  background-position: -1px -91px;
}
.m-ft .logonew {
  display: block;
  float: none;
  width: 50px;
  height: 45px;
  margin: 0 auto;
}
.m-ft .logo.logonew {
  background: url(assets/foot_enter_new.png) no-repeat;
  background-size: 110px 450px;
}
.m-ft .logonew.logo-auth {
  background-position: -63px -101px;
}
li,
s {
  list-style: none;
}
.m-ft .enter .unit1 {
  float: left;
  width: 60px;
  height: 70px;
  margin-left: 30px;
  text-align: center;
  color: #666;
}
.m-ft .enter .unit1:first-child {
  margin-left: 0;
}
.m-ft .copy .sep {
  margin-right: 14px;
}
.s-fc3,
a.s-fc3:hover {
  color: #666;
  font-size: 12px;
}
.s-fc3 {
  text-decoration: none;
}
a.s-fc3:hover {
  text-decoration-line: underline;
}
.m-ft .copy .line {
  margin: 0 8px 0 10px;
  color: #c2c2c2;
  font-size: 12px;
}
.s-fc4,
a.s-fc4:hover {
  color: #999;
}
.s-fc4 {
  text-decoration: none;
  font-size: 12px;
}
a.s-fc4:hover {
  text-decoration-line: underline;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.f-fr {
  float: right;
}
.m-ft .enter {
  width: 330px;
  margin-top: 21px;
}
.m-ft .copy {
  float: left;
  width: 520px;
  padding-top: 15px;
  line-height: 24px;
}
.m-ft {
  width: 980px;
  margin: 0 auto;
}
.g-ft {
  position: relative;
  height: 148px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  bottom: 0px;
}
</style>
