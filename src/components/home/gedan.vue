<template>
  <div class="sec">
    <div class="sec_cont">
      <div class="sec_top">
        <h3>
          <span>全部</span>
          <a @click="toggle" class="sec_top_menu" href="javascript:;">
            <i>
              选择分类
              <em class="u-ico"></em>
            </i>
          </a>
        </h3>
        <div class="sec_top_re remen">
          <a href>热门</a>
        </div>
      </div>
      <div v-show="show" class="sec_toggle">
        <div class="togg_top">
          <i class="icn"></i>
        </div>
        <div class="togg_cent">
          <h3>
            <a class="fengGe" href="javascript:;">
              <em>全部风格</em>
            </a>
          </h3>
          <dl v-for="(item,index) in text" :key="index" class="f-cb">
            <dt>
              <i :class="item.class"></i>
              {{item.left}}
            </dt>
            <dd class="list">
              <span v-for="(toup,index) in item.wrap" :key="index">
                <a class="f-cb1" href>{{toup.span}}</a>
                <span class="line">|</span>
              </span>
            </dd>
          </dl>
        </div>
        <div class="togg_btm"></div>
      </div>
      <ul class="sec_ul">
        <li v-for="(item,index) in arr[0]" :key="index">
          <div class="seli_im">
            <img :src="item.img" />
            <a class="mak" href></a>
            <div class="seli_btm">
              <a href></a>
              <span class="icon-headset"></span>
              <span class="num">{{item.span}}</span>
            </div>
          </div>
          <p class="dev">
            <a href>{{item.span2}}</a>
          </p>
          <p class="li_im_dev">
            <span class="im_dev_dd">by</span>
            <a href>{{item.span3}}</a>
            <span :class="item.class"></span>
          </p>
        </li>
      </ul>
      <div class="sec_btm"></div>
    </div>
  </div>
</template>

<script>
import "../../../static/sass/gedan.css";
export default {
  data() {
    return {
      show: false,
      arr: [
        [
          {
            img: "http://p1.music.126.net/UX78eEDic19VjIwf2e_MGw==/109951164491173755.jpg?param=140y140",
            span: "45774",
            span2: "时光之旅 | 致你我年少时的回忆",
            span3: "少年的半岛铁盒",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p2.music.126.net/L3qNTIaoblaqY7BFSWl2nA==/109951164489203513.jpg?param=140y140",
            span: "16652",
            span2: "舒缓心情 VLOG｜月遇从云 花遇和风",
            span3: "ZeFroLva",
            class: "DP-N"
          },
          {
            img:
              "http://p2.music.126.net/ipDaITvu_vVvHJqxaujLUQ==/109951164441184008.jpg?param=140y140",
            span: "27189",
            span2: "100种民谣女声 带你去感受星辰万物",
            span3: "宁遇夏",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p2.music.126.net/-OkMwiAvdlYf2roqe2kB-Q==/109951164501403551.jpg?param=140y140",
            span: "203万",
            span2: "[一周影视热歌] 吴青峰在原地等你",
            span3: "网易云音乐",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p2.music.126.net/-OkMwiAvdlYf2roqe2kB-Q==/109951164501403551.jpg?param=140y140",
            span: "203万",
            span2: "[一周影视热歌] 吴青峰在原地等你",
            span3: "网易云音乐",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p2.music.126.net/XqtTSfQXZODfLjy4Ln8U1Q==/109951164492273866.jpg?param=140y140",
            span: "17290",
            span2: "《冰雪奇缘》-爱与勇气的冒险之旅??",
            span3: "楼船夜雪天",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/yayTURls4_-UfmNVGQKGXQ==/109951164501007214.jpg?param=140y140",
            span: "64852",
            span2: "温暖日系旋律：陪你走过漫长の冬日",
            span3: "香水不甜",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/FujCmLlcsGldAVHBWsFEnQ==/109951164406260040.jpg?param=140y140",
            span: "21万",
            span2: "韩剧《偶然发现的一天》OST",
            span3: "吴爱星双子",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/j0obPDeAi1y3OzoJsJheRg==/109951164340297880.jpg?param=140y140",
            span: "137万",
            span2: "不怕老歌有多嗨 / 就怕老歌带Dj",
            span3: "上白仙",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/vzu8OZO7TeTZusJ6E3ICHw==/109951164063262746.jpg?param=140y140",
            span: "259万",
            span2: "刷题 看书 学习 工作 冥想",
            span3: "不加糖的柠檬百香果",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/OLzN1fwuSdJpzpNaOcDFvg==/109951164299139836.jpg?param=140y140",
            span: "148万",
            span2: "Tenderness For Nights 深夜入睡指南",
            span3: "Joceah",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/Xj7T2lNUPByYKJN6E-Naxg==/109951164384711649.jpg?param=140y140",
            span: "177万",
            span2: "『卧室推荐』关上门/舒适度百分之百",
            span3: "_Cynthiaaaa",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/UWDtJcgE1rO62p7HX4PM7A==/109951164202464302.jpg?param=140y140",
            span: "77万",
            span2: "左脚清华右脚北大/学习写作业复习专用",
            span3: "十三小神仙_",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/m9UY3btZpiHqSJJNadyWlg==/109951164137862180.jpg?param=140y140",
            span: "696万",
            span2: "乐队的夏天【1~12期】",
            span3: "彩虹色海豚",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/15qh1IgiqUtCfK2N3fr0Yg==/109951164210723991.jpg?param=140y140",
            span: "112万",
            span2: "有事上车再说",
            span3: "消逝的鹿先生",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/FT7h6zQv8F_P-IFBfRfayg==/109951164223437502.jpg?param=140y140",
            span: "72万",
            span2: "纯音乐图书馆?简单干净钢琴旋律.",
            span3: "zsm呗",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/dhsPY1ZVdnPxtZ1zsXJafQ==/109951164201872230.jpg?param=140y140",
            span: "140万",
            span2: "流汗吧健身少女",
            span3: "YEEMANLIAO",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/0a56FLdyySKVC6g15DL-RQ==/109951164266089265.jpg?param=140y140",
            span: "249万",
            span2: "学习歌单‖极静轻音乐",
            span3: "满地星星碎",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/hD9AlEA36BUzFMSOqf4lUQ==/109951164236954260.jpg?param=140y140",
            span: "105万",
            span2: "【迷幻/慢摇】Psychedelic melody",
            span3: "Leonardo_Steven",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/cDKMNvA0EUXU5lldeIZrFw==/109951164320556154.jpg?param=140y140",
            span: "216万",
            span2: "精神小伙专用BGM(甩头)",
            span3: "全海南省最靓的仔",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/SyOISKKFQVQKcpTfn7TDeQ==/109951164203396142.jpg?param=140y140",
            span: "672万",
            span2: "Cover集(那些开口就惊艳的翻唱）",
            span3: "江野北秋",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/C75An6rGEd2jlMuDb8b8zw==/109951164341829310.jpg?param=140y140",
            span: "170万",
            span2: "[乡村音乐]田纳西州的音乐之路",
            span3: "小铁Joe",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/KFdRlyMLlPQKu6qgU-CPzQ==/109951164247070522.jpg?param=140y140",
            span: "154万",
            span2: "「纯音乐」解压 看书 刷题 游戏 睡觉",
            span3: "侨谕",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/5ehR1uS4QiriFJSll_wObQ==/109951164081897519.jpg?param=140y140",
            span: "1451万",
            span2: "『200首好听的翻唱』 持续更新......",
            span3: "爱吃肉的柚子君",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/HcQbYoxU_G59ZdZ1AMoNxQ==/109951164480571674.jpg?param=140y140",
            span: "246万",
            span2: "夜店/车载抖腿必备曲",
            span3: "洐川",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/5DXYbsdsXuhY56XpchlzSg==/109951164090341614.jpg?param=140y140",
            span: "179万",
            span2: "适合学习时听的歌",
            span3: "麻橙子",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/AjgdyqWx2a4LCvk9CnFyhQ==/109951164379253834.jpg?param=140y140",
            span: "247万",
            span2: "没BOSE不配炸耳机的Subwoofer",
            span3: "半步也成诗",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/zel4pIUebw09fhwdirOUJw==/109951164310145356.jpg?param=140y140",
            span: "51万",
            span2: "了解【中国乐队】，可以从他们开始。",
            span3: "完美的灵魂",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/rQ8yXV3YZZPijaroho1C1Q==/109951164252526217.jpg?param=140y140",
            span: "188万",
            span2: "浪漫黄昏|夕阳总会温柔的落在你肩上",
            span3: "桑菲尔德L",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/Q0wndJL4e7n9LfcpLbQYcQ==/109951164327342637.jpg?param=140y140",
            span: "159万",
            span2: "仙女蹦迪专用曲",
            span3: "你是威廉吗",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/x_XYWtsUucR5Mo6MmcXscQ==/109951164341015983.jpg?param=140y140",
            span: "109万",
            span2: "浪漫轶事 ? 驶向甜蜜虚无の星海",
            span3: "NickyRomero",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/gsLYUhZsZbRLXQt_TOaDIw==/109951164287662942.jpg?param=140y140",
            span: "815万",
            span2: "『武侠影视金曲100首』每个人心中的武侠梦",
            span3: "枫jackie",
            class: "im_dev_tu"
          },
          {
            img:
              "http://p1.music.126.net/VTEwIjyS0ain1NB0dRJXww==/109951164110448970.jpg?param=140y140",
            span: "242万",
            span2: "你绝对熟悉的蹦迪合集 摇摆至上",
            span3: "枫jackie",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/rm3V_vvMAYPQrDRo6-lyOA==/109951164389416808.jpg?param=140y140",
            span: "175万",
            span2: "温柔系‖等星星都睡着了 再说想你",
            span3: "ClairoNews",
            class: "DP-N"
          },
          {
            img:
              "http://p1.music.126.net/17L2u_qZU-Rc1WkeHLu3IQ==/109951164469700322.jpg?param=140y140",
            span: "188万",
            span2: "「精选/耳熟/开口跪」那些曾火遍全球的神曲",
            span3: "一只傻高天",
            class: "DP-N"
          }
        ],
        
      ],
      text: [
        {
          class: "f_cb_one",
          left: "语种",
          wrap: [
            {
              span: "华语",
              right: "|"
            },
            {
              span: "欧美",
              right: "|"
            },
            {
              span: "日语",
              right: "|"
            },
            {
              span: "韩语",
              right: "|"
            },
            {
              span: "粤语",
              right: "|"
            }
          ]
        },
        {
          class: "f_cb_two",
          left: "风格",
          wrap: [
            {
              span: "流行",
              right: "|"
            },
            {
              span: "摇滚",
              right: "|"
            },
            {
              span: "民谣",
              right: "|"
            },
            {
              span: "电子",
              right: "|"
            },
            {
              span: "舞曲",
              right: "|"
            },
            {
              span: "说唱",
              right: "|"
            },
            {
              span: "轻音乐",
              right: "|"
            },
            {
              span: "爵士",
              right: "|"
            },
            {
              span: "乡村",
              right: "|"
            },
            {
              span: "R&B/Soul",
              right: "|"
            },
            {
              span: "古典",
              right: "|"
            },
            {
              span: "民族",
              right: "|"
            },
            {
              span: "英伦",
              right: "|"
            },
            {
              span: "金属",
              right: "|"
            },
            {
              span: "朋克",
              right: "|"
            },
            {
              span: "蓝调",
              right: "|"
            },
            {
              span: "雷鬼",
              right: "|"
            },
            {
              span: "世界音乐",
              right: "|"
            },
            {
              span: "拉丁",
              right: "|"
            },
            {
              span: "New Age",
              right: "|"
            },
            {
              span: "古风",
              right: "|"
            },
            {
              span: "后摇",
              right: "|"
            },
            {
              span: "Bossa Nova",
              right: "|"
            }
          ]
        },
        {
          class: "f_cb_three",
          left: "情感",
          wrap: [
            {
              span: "怀旧",
              right: "|"
            },
            {
              span: "清新",
              right: "|"
            },
            {
              span: "浪漫",
              right: "|"
            },
            {
              span: "伤感",
              right: "|"
            },
            {
              span: "治愈",
              right: "|"
            },
            {
              span: "放松",
              right: "|"
            },
            {
              span: "孤独",
              right: "|"
            },
            {
              span: "感动",
              right: "|"
            },
            {
              span: "兴奋",
              right: "|"
            },
            {
              span: "快乐",
              right: "|"
            },
            {
              span: "安静",
              right: "|"
            },
            {
              span: "思念",
              right: "|"
            }
          ]
        },
        {
          class: "f_cb_for",
          left: "场景",
          wrap: [
            {
              span: "清晨",
              right: "|"
            },
            {
              span: "夜晚",
              right: "|"
            },
            {
              span: "学习",
              right: "|"
            },
            {
              span: "工作",
              right: "|"
            },
            {
              span: "午休",
              right: "|"
            },
            {
              span: "下午茶",
              right: "|"
            },
            {
              span: "地铁",
              right: "|"
            },
            {
              span: "驾车",
              right: "|"
            },
            {
              span: "运动",
              right: "|"
            },
            {
              span: "旅行",
              right: "|"
            },
            {
              span: "散步",
              right: "|"
            },
            {
              span: "酒吧",
              right: "|"
            }
          ]
        },
        {
          class: "f_cb_five",
          left: "主题",
          wrap: [
            {
              span: "影视原声",
              right: "|"
            },
            {
              span: "ACG",
              right: "|"
            },
            {
              span: "儿童",
              right: "|"
            },
            {
              span: "校园",
              right: "|"
            },
            {
              span: "游戏",
              right: "|"
            },
            {
              span: "70后",
              right: "|"
            },
            {
              span: "80后",
              right: "|"
            },
            {
              span: "90后",
              right: "|"
            },
            {
              span: "网络歌曲",
              right: "|"
            },
            {
              span: "KTV",
              right: "|"
            },
            {
              span: "经典",
              right: "|"
            },
            {
              span: "翻唱",
              right: "|"
            },
            {
              span: "吉他",
              right: "|"
            },
            {
              span: "钢琴",
              right: "|"
            },
            {
              span: "器乐",
              right: "|"
            },
            {
              span: "榜单",
              right: "|"
            },
            {
              span: "00后",
              right: "|"
            }
          ]
        }
      ]
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>

<style>

</style>