/**
 * Created by Mbb on 2018/6/27.
 */
// 来源网站 http://202.108.98.30/map 中华人民共和国民政部，不包括港澳台

let regions = [{
"cName": "北京市",
    "code": "110000",
    "py": "Beijing Shi",
    "jp": "bjs",
    "qp": "BeijingShi"
}, {
    "cName": "东城区",
        "code": "110101",
        "py": "Dongcheng Qu",
        "jp": "dcq",
        "qp": "DongchengQu"
}, {
    "cName": "西城区",
        "code": "110102",
        "py": "Xicheng Qu",
        "jp": "xcq",
        "qp": "XichengQu"
}, {
    "cName": "朝阳区",
        "code": "110105",
        "py": "Chaoyang Qu",
        "jp": "cyq",
        "qp": "ChaoyangQu"
}, {
    "cName": "丰台区",
        "code": "110106",
        "py": "Fengtai Qu",
        "jp": "ftq",
        "qp": "FengtaiQu"
}, {
    "cName": "石景山区",
        "code": "110107",
        "py": "Shijingshan Qu",
        "jp": "sjsq",
        "qp": "ShijingshanQu"
}, {
    "cName": "海淀区",
        "code": "110108",
        "py": "Haidian Qu",
        "jp": "hdq",
        "qp": "HaidianQu"
}, {
    "cName": "门头沟区",
        "code": "110109",
        "py": "Mentougou Qu",
        "jp": "mtgq",
        "qp": "MentougouQu"
}, {
    "cName": "房山区",
        "code": "110111",
        "py": "Fangshan Qu",
        "jp": "fsq",
        "qp": "FangshanQu"
}, {
    "cName": "通州区",
        "code": "110112",
        "py": "Tongzhou Qu",
        "jp": "tzq",
        "qp": "TongzhouQu"
}, {
    "cName": "顺义区",
        "code": "110113",
        "py": "Shunyi Qu",
        "jp": "syq",
        "qp": "ShunyiQu"
}, {
    "cName": "昌平区",
        "code": "110114",
        "py": "Changping Qu",
        "jp": "cpq",
        "qp": "ChangpingQu"
}, {
    "cName": "大兴区",
        "code": "110115",
        "py": "Daxing Qu",
        "jp": "dxq",
        "qp": "DaxingQu"
}, {
    "cName": "怀柔区",
        "code": "110116",
        "py": "Huairou Qu",
        "jp": "hrq",
        "qp": "HuairouQu"
}, {
    "cName": "平谷区",
        "code": "110117",
        "py": "Pinggu Qu",
        "jp": "pgq",
        "qp": "PingguQu"
}, {
    "cName": "密云区",
        "code": "110118",
        "py": "Miyun Qu",
        "jp": "myq",
        "qp": "MiyunQu"
}, {
    "cName": "延庆区",
        "code": "110119",
        "py": "Yanqing Qu",
        "jp": "yqq",
        "qp": "YanqingQu"
}, {
    "cName": "天津市",
        "code": "120000",
        "py": "Tianjin Shi",
        "jp": "tjs",
        "qp": "TianjinShi"
}, {
    "cName": "河西区",
        "code": "120103",
        "py": "Hexi Qu",
        "jp": "hxq",
        "qp": "HexiQu"
}, {
    "cName": "和平区",
        "code": "120101",
        "py": "Heping Qu",
        "jp": "hpq",
        "qp": "HepingQu"
}, {
    "cName": "河东区",
        "code": "120102",
        "py": "Hedong Qu",
        "jp": "hdq",
        "qp": "HedongQu"
}, {
    "cName": "南开区",
        "code": "120104",
        "py": "Nankai Qu",
        "jp": "nkq",
        "qp": "NankaiQu"
}, {
    "cName": "河北区",
        "code": "120105",
        "py": "Hebei Qu",
        "jp": "hbq",
        "qp": "HebeiQu"
}, {
    "cName": "红桥区",
        "code": "120106",
        "py": "Hongqiao Qu",
        "jp": "hqq",
        "qp": "HongqiaoQu"
}, {
    "cName": "东丽区",
        "code": "120110",
        "py": "Dongli Qu",
        "jp": "dlq",
        "qp": "DongliQu"
}, {
    "cName": "西青区",
        "code": "120111",
        "py": "Xiqing Qu",
        "jp": "xqq",
        "qp": "XiqingQu"
}, {
    "cName": "津南区",
        "code": "120112",
        "py": "Jinnan Qu",
        "jp": "jnq",
        "qp": "JinnanQu"
}, {
    "cName": "北辰区",
        "code": "120113",
        "py": "Beichen Qu",
        "jp": "bcq",
        "qp": "BeichenQu"
}, {
    "cName": "武清区",
        "code": "120114",
        "py": "Wuqing Qu",
        "jp": "wqq",
        "qp": "WuqingQu"
}, {
    "cName": "宝坻区",
        "code": "120115",
        "py": "Baodi Qu",
        "jp": "bdq",
        "qp": "BaodiQu"
}, {
    "cName": "滨海新区",
        "code": "120116",
        "py": "Binhai Xinqu",
        "jp": "bhxq",
        "qp": "BinhaiXinqu"
}, {
    "cName": "宁河区",
        "code": "120117",
        "py": "Ninghe Qu",
        "jp": "nhq",
        "qp": "NingheQu"
}, {
    "cName": "静海区",
        "code": "120118",
        "py": "Jinghai Qu",
        "jp": "jhq",
        "qp": "JinghaiQu"
}, {
    "cName": "蓟州区",
        "code": "120119",
        "py": "Jizhou Qu",
        "jp": "jzq",
        "qp": "JizhouQu"
}, {
    "cName": "河北省",
        "code": "130000",
        "py": "Hebei Sheng",
        "jp": "hbs",
        "qp": "HebeiSheng"
}, {
    "cName": "石家庄市",
        "code": "130100",
        "py": "Shijiazhuang Shi",
        "jp": "sjzs",
        "qp": "ShijiazhuangShi"
}, {
    "cName": "长安区",
        "code": "130102",
        "py": "Chang&#39;an Qu",
        "jp": "caq",
        "qp": "ChanganQu"
}, {
    "cName": "桥西区",
        "code": "130104",
        "py": "Qiaoxi Qu",
        "jp": "qxq",
        "qp": "QiaoxiQu"
}, {
    "cName": "新华区",
        "code": "130105",
        "py": "Xinhua Qu",
        "jp": "xhq",
        "qp": "XinhuaQu"
}, {
    "cName": "井陉矿区",
        "code": "130107",
        "py": "Jingxing Kuangqu",
        "jp": "jxkq",
        "qp": "JingxingKuangqu"
}, {
    "cName": "裕华区",
        "code": "130108",
        "py": "Yuhua Qu",
        "jp": "yhq",
        "qp": "YuhuaQu"
}, {
    "cName": "藁城区",
        "code": "130109",
        "py": "Gaocheng Qu",
        "jp": "gcq",
        "qp": "GaochengQu"
}, {
    "cName": "鹿泉区",
        "code": "130110",
        "py": "Luquan Qu",
        "jp": "lqq",
        "qp": "LuquanQu"
}, {
    "cName": "栾城区",
        "code": "130111",
        "py": "Luancheng Qu",
        "jp": "lcq",
        "qp": "LuanchengQu"
}, {
    "cName": "辛集市",
        "code": "130181",
        "py": "Xinji Shi",
        "jp": "xjs",
        "qp": "XinjiShi"
}, {
    "cName": "晋州市",
        "code": "130183",
        "py": "Jinzhou Shi",
        "jp": "jzs",
        "qp": "JinzhouShi"
}, {
    "cName": "新乐市",
        "code": "130184",
        "py": "Xinle Shi",
        "jp": "xls",
        "qp": "XinleShi"
}, {
    "cName": "井陉县",
        "code": "130121",
        "py": "Jingxing Xian",
        "jp": "jxx",
        "qp": "JingxingXian"
}, {
    "cName": "正定县",
        "code": "130123",
        "py": "Zhengding Xian",
        "jp": "zdx",
        "qp": "ZhengdingXian"
}, {
    "cName": "行唐县",
        "code": "130125",
        "py": "Xingtang Xian",
        "jp": "xtx",
        "qp": "XingtangXian"
}, {
    "cName": "灵寿县",
        "code": "130126",
        "py": "Lingshou Xian",
        "jp": "lsx",
        "qp": "LingshouXian"
}, {
    "cName": "高邑县",
        "code": "130127",
        "py": "Gaoyi Xian",
        "jp": "gyx",
        "qp": "GaoyiXian"
}, {
    "cName": "深泽县",
        "code": "130128",
        "py": "Shenze Xian",
        "jp": "szx",
        "qp": "ShenzeXian"
}, {
    "cName": "赞皇县",
        "code": "130129",
        "py": "Zanhuang Xian",
        "jp": "zhx",
        "qp": "ZanhuangXian"
}, {
    "cName": "无极县",
        "code": "130130",
        "py": "Wuji Xian",
        "jp": "wjx",
        "qp": "WujiXian"
}, {
    "cName": "平山县",
        "code": "130131",
        "py": "Pingshan Xian",
        "jp": "psx",
        "qp": "PingshanXian"
}, {
    "cName": "元氏县",
        "code": "130132",
        "py": "Yuanshi Xian",
        "jp": "ysx",
        "qp": "YuanshiXian"
}, {
    "cName": "赵县",
        "code": "130133",
        "py": "Zhao Xian",
        "jp": "zx",
        "qp": "ZhaoXian"
}, {
    "cName": "唐山市",
        "code": "130200",
        "py": "Tangshan Shi",
        "jp": "tss",
        "qp": "TangshanShi"
}, {
    "cName": "路北区",
        "code": "130203",
        "py": "Lubei Qu",
        "jp": "lbq",
        "qp": "LubeiQu"
}, {
    "cName": "路南区",
        "code": "130202",
        "py": "Lunan Qu",
        "jp": "lnq",
        "qp": "LunanQu"
}, {
    "cName": "古冶区",
        "code": "130204",
        "py": "Guye Qu",
        "jp": "gyq",
        "qp": "GuyeQu"
}, {
    "cName": "开平区",
        "code": "130205",
        "py": "Kaiping Qu",
        "jp": "kpq",
        "qp": "KaipingQu"
}, {
    "cName": "丰南区",
        "code": "130207",
        "py": "Fengnan Qu",
        "jp": "fnq",
        "qp": "FengnanQu"
}, {
    "cName": "丰润区",
        "code": "130208",
        "py": "Fengrun Qu",
        "jp": "frq",
        "qp": "FengrunQu"
}, {
    "cName": "曹妃甸区",
        "code": "130209",
        "py": "Caofeidian Qu",
        "jp": "cfdq",
        "qp": "CaofeidianQu"
}, {
    "cName": "遵化市",
        "code": "130281",
        "py": "Zunhua Shi",
        "jp": "zhs",
        "qp": "ZunhuaShi"
}, {
    "cName": "迁安市",
        "code": "130283",
        "py": "Qian&#39;an Shi",
        "jp": "qas",
        "qp": "QiananShi"
}, {
    "cName": "滦县",
        "code": "130223",
        "py": "Luan Xian",
        "jp": "lx",
        "qp": "LuanXian"
}, {
    "cName": "滦南县",
        "code": "130224",
        "py": "Luannan Xian",
        "jp": "lnx",
        "qp": "LuannanXian"
}, {
    "cName": "乐亭县",
        "code": "130225",
        "py": "Laoting Xian",
        "jp": "ltx",
        "qp": "LaotingXian"
}, {
    "cName": "迁西县",
        "code": "130227",
        "py": "Qianxi Xian",
        "jp": "qxx",
        "qp": "QianxiXian"
}, {
    "cName": "玉田县",
        "code": "130229",
        "py": "Yutian Xian",
        "jp": "ytx",
        "qp": "YutianXian"
}, {
    "cName": "秦皇岛市",
        "code": "130300",
        "py": "Qinhuangdao Shi",
        "jp": "qhds",
        "qp": "QinhuangdaoShi"
}, {
    "cName": "海港区",
        "code": "130302",
        "py": "Haigang Qu",
        "jp": "hgq",
        "qp": "HaigangQu"
}, {
    "cName": "山海关区",
        "code": "130303",
        "py": "Shanhaiguan Qu",
        "jp": "shgq",
        "qp": "ShanhaiguanQu"
}, {
    "cName": "北戴河区",
        "code": "130304",
        "py": "Beidaihe Qu",
        "jp": "bdhq",
        "qp": "BeidaiheQu"
}, {
    "cName": "抚宁区",
        "code": "130306",
        "py": "Funing Qu",
        "jp": "fnq",
        "qp": "FuningQu"
}, {
    "cName": "昌黎县",
        "code": "130322",
        "py": "Changli Xian",
        "jp": "clx",
        "qp": "ChangliXian"
}, {
    "cName": "卢龙县",
        "code": "130324",
        "py": "Lulong Xian",
        "jp": "llx",
        "qp": "LulongXian"
}, {
    "cName": "青龙满族自治县",
        "code": "130321",
        "py": "Qinglong Manzu Zizhixian",
        "jp": "qlmzzzx",
        "qp": "QinglongManzuZizhixian"
}, {
    "cName": "邯郸市",
        "code": "130400",
        "py": "Handan Shi",
        "jp": "hds",
        "qp": "HandanShi"
}, {
    "cName": "丛台区",
        "code": "130403",
        "py": "Congtai Qu",
        "jp": "ctq",
        "qp": "CongtaiQu"
}, {
    "cName": "邯山区",
        "code": "130402",
        "py": "Hanshan Qu",
        "jp": "hsq",
        "qp": "HanshanQu"
}, {
    "cName": "复兴区",
        "code": "130404",
        "py": "Fuxing Qu",
        "jp": "fxq",
        "qp": "FuxingQu"
}, {
    "cName": "峰峰矿区",
        "code": "130406",
        "py": "Fengfeng Kuangqu",
        "jp": "ffkq",
        "qp": "FengfengKuangqu"
}, {
    "cName": "肥乡区",
        "code": "130407",
        "py": "Feixiang Qu",
        "jp": "fxq",
        "qp": "FeixiangQu"
}, {
    "cName": "永年区",
        "code": "130408",
        "py": "Yongnian Qu",
        "jp": "ynq",
        "qp": "YongnianQu"
}, {
    "cName": "武安市",
        "code": "130481",
        "py": "Wu&#39;an Shi",
        "jp": "was",
        "qp": "WuanShi"
}, {
    "cName": "临漳县",
        "code": "130423",
        "py": "Linzhang Xian",
        "jp": "lzx",
        "qp": "LinzhangXian"
}, {
    "cName": "成安县",
        "code": "130424",
        "py": "Cheng&#39;an Xian",
        "jp": "cax",
        "qp": "ChenganXian"
}, {
    "cName": "大名县",
        "code": "130425",
        "py": "Daming Xian",
        "jp": "dmx",
        "qp": "DamingXian"
}, {
    "cName": "涉县",
        "code": "130426",
        "py": "She Xian",
        "jp": "sx",
        "qp": "SheXian"
}, {
    "cName": "磁县",
        "code": "130427",
        "py": "Ci Xian",
        "jp": "cx",
        "qp": "CiXian"
}, {
    "cName": "邱县",
        "code": "130430",
        "py": "Qiu Xian",
        "jp": "qx",
        "qp": "QiuXian"
}, {
    "cName": "鸡泽县",
        "code": "130431",
        "py": "Jize Xian",
        "jp": "jzx",
        "qp": "JizeXian"
}, {
    "cName": "广平县",
        "code": "130432",
        "py": "Guangping Xian",
        "jp": "gpx",
        "qp": "GuangpingXian"
}, {
    "cName": "馆陶县",
        "code": "130433",
        "py": "Guantao Xian",
        "jp": "gtx",
        "qp": "GuantaoXian"
}, {
    "cName": "魏县",
        "code": "130434",
        "py": "Wei Xian",
        "jp": "wx",
        "qp": "WeiXian"
}, {
    "cName": "曲周县",
        "code": "130435",
        "py": "Quzhou Xian",
        "jp": "qzx",
        "qp": "QuzhouXian"
}, {
    "cName": "邢台市",
        "code": "130500",
        "py": "Xingtai Shi",
        "jp": "xts",
        "qp": "XingtaiShi"
}, {
    "cName": "桥东区",
        "code": "130502",
        "py": "Qiaodong Qu",
        "jp": "qdq",
        "qp": "QiaodongQu"
}, {
    "cName": "桥西区",
        "code": "130503",
        "py": "Qiaoxi Qu",
        "jp": "qxq",
        "qp": "QiaoxiQu"
}, {
    "cName": "南宫市",
        "code": "130581",
        "py": "Nangong Shi",
        "jp": "ngs",
        "qp": "NangongShi"
}, {
    "cName": "沙河市",
        "code": "130582",
        "py": "Shahe Shi",
        "jp": "shs",
        "qp": "ShaheShi"
}, {
    "cName": "邢台县",
        "code": "130521",
        "py": "Xingtai Xian",
        "jp": "xtx",
        "qp": "XingtaiXian"
}, {
    "cName": "临城县",
        "code": "130522",
        "py": "Lincheng Xian",
        "jp": "lcx",
        "qp": "LinchengXian"
}, {
    "cName": "内丘县",
        "code": "130523",
        "py": "Neiqiu Xian",
        "jp": "nqx",
        "qp": "NeiqiuXian"
}, {
    "cName": "柏乡县",
        "code": "130524",
        "py": "Baixiang Xian",
        "jp": "bxx",
        "qp": "BaixiangXian"
}, {
    "cName": "隆尧县",
        "code": "130525",
        "py": "Longyao Xian",
        "jp": "lyx",
        "qp": "LongyaoXian"
}, {
    "cName": "任县",
        "code": "130526",
        "py": "Ren Xian",
        "jp": "rx",
        "qp": "RenXian"
}, {
    "cName": "南和县",
        "code": "130527",
        "py": "Nanhe Xian",
        "jp": "nhx",
        "qp": "NanheXian"
}, {
    "cName": "宁晋县",
        "code": "130528",
        "py": "Ningjin Xian",
        "jp": "njx",
        "qp": "NingjinXian"
}, {
    "cName": "巨鹿县",
        "code": "130529",
        "py": "Julu Xian",
        "jp": "jlx",
        "qp": "JuluXian"
}, {
    "cName": "新河县",
        "code": "130530",
        "py": "Xinhe Xian",
        "jp": "xhx",
        "qp": "XinheXian"
}, {
    "cName": "广宗县",
        "code": "130531",
        "py": "Guangzong Xian",
        "jp": "gzx",
        "qp": "GuangzongXian"
}, {
    "cName": "平乡县",
        "code": "130532",
        "py": "Pingxiang Xian",
        "jp": "pxx",
        "qp": "PingxiangXian"
}, {
    "cName": "威县",
        "code": "130533",
        "py": "Wei Xian",
        "jp": "wx",
        "qp": "WeiXian"
}, {
    "cName": "清河县",
        "code": "130534",
        "py": "Qinghe Xian",
        "jp": "qhx",
        "qp": "QingheXian"
}, {
    "cName": "临西县",
        "code": "130535",
        "py": "Linxi Xian",
        "jp": "lxx",
        "qp": "LinxiXian"
}, {
    "cName": "保定市",
        "code": "130600",
        "py": "Baoding Shi",
        "jp": "bds",
        "qp": "BaodingShi"
}, {
    "cName": "竞秀区",
        "code": "130602",
        "py": "Jingxiu Qu",
        "jp": "jxq",
        "qp": "JingxiuQu"
}, {
    "cName": "莲池区",
        "code": "130606",
        "py": "Lianchi Qu",
        "jp": "lcq",
        "qp": "LianchiQu"
}, {
    "cName": "满城区",
        "code": "130607",
        "py": "Mancheng Qu",
        "jp": "mcq",
        "qp": "ManchengQu"
}, {
    "cName": "清苑区",
        "code": "130608",
        "py": "Qingyuan Qu",
        "jp": "qyq",
        "qp": "QingyuanQu"
}, {
    "cName": "徐水区",
        "code": "130609",
        "py": "Xushui Qu",
        "jp": "xsq",
        "qp": "XushuiQu"
}, {
    "cName": "涿州市",
        "code": "130681",
        "py": "Zhuozhou Shi",
        "jp": "zzs",
        "qp": "ZhuozhouShi"
}, {
    "cName": "定州市",
        "code": "130682",
        "py": "Dingzhou Shi",
        "jp": "dzs",
        "qp": "DingzhouShi"
}, {
    "cName": "安国市",
        "code": "130683",
        "py": "Anguo Shi",
        "jp": "ags",
        "qp": "AnguoShi"
}, {
    "cName": "高碑店市",
        "code": "130684",
        "py": "Gaobeidian Shi",
        "jp": "gbds",
        "qp": "GaobeidianShi"
}, {
    "cName": "涞水县",
        "code": "130623",
        "py": "Laishui Xian",
        "jp": "lsx",
        "qp": "LaishuiXian"
}, {
    "cName": "阜平县",
        "code": "130624",
        "py": "Fuping Xian",
        "jp": "fpx",
        "qp": "FupingXian"
}, {
    "cName": "定兴县",
        "code": "130626",
        "py": "Dingxing Xian",
        "jp": "dxx",
        "qp": "DingxingXian"
}, {
    "cName": "唐县",
        "code": "130627",
        "py": "Tang Xian",
        "jp": "tx",
        "qp": "TangXian"
}, {
    "cName": "高阳县",
        "code": "130628",
        "py": "Gaoyang Xian",
        "jp": "gyx",
        "qp": "GaoyangXian"
}, {
    "cName": "容城县",
        "code": "130629",
        "py": "Rongcheng Xian",
        "jp": "rcx",
        "qp": "RongchengXian"
}, {
    "cName": "涞源县",
        "code": "130630",
        "py": "Laiyuan Xian",
        "jp": "lyx",
        "qp": "LaiyuanXian"
}, {
    "cName": "望都县",
        "code": "130631",
        "py": "Wangdu Xian",
        "jp": "wdx",
        "qp": "WangduXian"
}, {
    "cName": "安新县",
        "code": "130632",
        "py": "Anxin Xian",
        "jp": "axx",
        "qp": "AnxinXian"
}, {
    "cName": "易县",
        "code": "130633",
        "py": "Yi Xian",
        "jp": "yx",
        "qp": "YiXian"
}, {
    "cName": "曲阳县",
        "code": "130634",
        "py": "Quyang Xian",
        "jp": "qyx",
        "qp": "QuyangXian"
}, {
    "cName": "蠡县",
        "code": "130635",
        "py": "Li Xian",
        "jp": "lx",
        "qp": "LiXian"
}, {
    "cName": "顺平县",
        "code": "130636",
        "py": "Shunping Xian",
        "jp": "spx",
        "qp": "ShunpingXian"
}, {
    "cName": "博野县",
        "code": "130637",
        "py": "Boye Xian",
        "jp": "byx",
        "qp": "BoyeXian"
}, {
    "cName": "雄县",
        "code": "130638",
        "py": "Xiong Xian",
        "jp": "xx",
        "qp": "XiongXian"
}, {
    "cName": "张家口市",
        "code": "130700",
        "py": "Zhangjiakou Shi",
        "jp": "zjks",
        "qp": "ZhangjiakouShi"
}, {
    "cName": "桥西区",
        "code": "130703",
        "py": "Qiaoxi Qu",
        "jp": "qxq",
        "qp": "QiaoxiQu"
}, {
    "cName": "桥东区",
        "code": "130702",
        "py": "Qiaodong Qu",
        "jp": "qdq",
        "qp": "QiaodongQu"
}, {
    "cName": "宣化区",
        "code": "130705",
        "py": "Xuanhua Qu",
        "jp": "xhq",
        "qp": "XuanhuaQu"
}, {
    "cName": "下花园区",
        "code": "130706",
        "py": "Xiahuayuan Qu",
        "jp": "xhyq",
        "qp": "XiahuayuanQu"
}, {
    "cName": "万全区",
        "code": "130708",
        "py": "Wanquan Qu",
        "jp": "wqq",
        "qp": "WanquanQu"
}, {
    "cName": "崇礼区",
        "code": "130709",
        "py": "Chongli Qu",
        "jp": "clq",
        "qp": "ChongliQu"
}, {
    "cName": "张北县",
        "code": "130722",
        "py": "Zhangbei Xian",
        "jp": "zbx",
        "qp": "ZhangbeiXian"
}, {
    "cName": "康保县",
        "code": "130723",
        "py": "Kangbao Xian",
        "jp": "kbx",
        "qp": "KangbaoXian"
}, {
    "cName": "沽源县",
        "code": "130724",
        "py": "Guyuan Xian",
        "jp": "gyx",
        "qp": "GuyuanXian"
}, {
    "cName": "尚义县",
        "code": "130725",
        "py": "Shangyi Xian",
        "jp": "syx",
        "qp": "ShangyiXian"
}, {
    "cName": "蔚县",
        "code": "130726",
        "py": "Yu Xian",
        "jp": "yx",
        "qp": "YuXian"
}, {
    "cName": "阳原县",
        "code": "130727",
        "py": "Yangyuan Xian",
        "jp": "yyx",
        "qp": "YangyuanXian"
}, {
    "cName": "怀安县",
        "code": "130728",
        "py": "Huai&#39;an Xian",
        "jp": "hax",
        "qp": "HuaianXian"
}, {
    "cName": "怀来县",
        "code": "130730",
        "py": "Huailai Xian",
        "jp": "hlx",
        "qp": "HuailaiXian"
}, {
    "cName": "涿鹿县",
        "code": "130731",
        "py": "Zhuolu Xian",
        "jp": "zlx",
        "qp": "ZhuoluXian"
}, {
    "cName": "赤城县",
        "code": "130732",
        "py": "Chicheng Xian",
        "jp": "ccx",
        "qp": "ChichengXian"
}, {
    "cName": "承德市",
        "code": "130800",
        "py": "Chengde Shi",
        "jp": "cds",
        "qp": "ChengdeShi"
}, {
    "cName": "双桥区",
        "code": "130802",
        "py": "Shuangqiao Qu",
        "jp": "sqq",
        "qp": "ShuangqiaoQu"
}, {
    "cName": "双滦区",
        "code": "130803",
        "py": "Shuangluan Qu",
        "jp": "slq",
        "qp": "ShuangluanQu"
}, {
    "cName": "鹰手营子矿区",
        "code": "130804",
        "py": "Yingshouyingzi Kuangqu",
        "jp": "ysyzkq",
        "qp": "YingshouyingziKuangqu"
}, {
    "cName": "平泉市",
        "code": "130881",
        "py": "Pingquan Shi",
        "jp": "pqs",
        "qp": "PingquanShi"
}, {
    "cName": "承德县",
        "code": "130821",
        "py": "Chengde Xian",
        "jp": "cdx",
        "qp": "ChengdeXian"
}, {
    "cName": "兴隆县",
        "code": "130822",
        "py": "Xinglong Xian",
        "jp": "xlx",
        "qp": "XinglongXian"
}, {
    "cName": "滦平县",
        "code": "130824",
        "py": "Luanping Xian",
        "jp": "lpx",
        "qp": "LuanpingXian"
}, {
    "cName": "隆化县",
        "code": "130825",
        "py": "Longhua Xian",
        "jp": "lhx",
        "qp": "LonghuaXian"
}, {
    "cName": "丰宁满族自治县",
        "code": "130826",
        "py": "Fengning Manzu Zizhixian",
        "jp": "fnmzzzx",
        "qp": "FengningManzuZizhixian"
}, {
    "cName": "宽城满族自治县",
        "code": "130827",
        "py": "Kuancheng Manzu Zizhixian",
        "jp": "kcmzzzx",
        "qp": "KuanchengManzuZizhixian"
}, {
    "cName": "围场满族蒙古族自治县",
        "code": "130828",
        "py": "Weichang Manzu Mengguzu Zizhixian",
        "jp": "wcmzmgzzzx",
        "qp": "WeichangManzuMengguzuZizhixian"
}, {
    "cName": "沧州市",
        "code": "130900",
        "py": "Cangzhou Shi",
        "jp": "czs",
        "qp": "CangzhouShi"
}, {
    "cName": "运河区",
        "code": "130903",
        "py": "Yunhe Qu",
        "jp": "yhq",
        "qp": "YunheQu"
}, {
    "cName": "新华区",
        "code": "130902",
        "py": "Xinhua Qu",
        "jp": "xhq",
        "qp": "XinhuaQu"
}, {
    "cName": "泊头市",
        "code": "130981",
        "py": "Botou Shi",
        "jp": "bts",
        "qp": "BotouShi"
}, {
    "cName": "任丘市",
        "code": "130982",
        "py": "Renqiu Shi",
        "jp": "rqs",
        "qp": "RenqiuShi"
}, {
    "cName": "黄骅市",
        "code": "130983",
        "py": "Huanghua Shi",
        "jp": "hhs",
        "qp": "HuanghuaShi"
}, {
    "cName": "河间市",
        "code": "130984",
        "py": "Hejian Shi",
        "jp": "hjs",
        "qp": "HejianShi"
}, {
    "cName": "沧县",
        "code": "130921",
        "py": "Cang Xian",
        "jp": "cx",
        "qp": "CangXian"
}, {
    "cName": "青县",
        "code": "130922",
        "py": "Qing Xian",
        "jp": "qx",
        "qp": "QingXian"
}, {
    "cName": "东光县",
        "code": "130923",
        "py": "Dongguang Xian",
        "jp": "dgx",
        "qp": "DongguangXian"
}, {
    "cName": "海兴县",
        "code": "130924",
        "py": "Haixing Xian",
        "jp": "hxx",
        "qp": "HaixingXian"
}, {
    "cName": "盐山县",
        "code": "130925",
        "py": "Yanshan Xian",
        "jp": "ysx",
        "qp": "YanshanXian"
}, {
    "cName": "肃宁县",
        "code": "130926",
        "py": "Suning Xian",
        "jp": "snx",
        "qp": "SuningXian"
}, {
    "cName": "南皮县",
        "code": "130927",
        "py": "Nanpi Xian",
        "jp": "npx",
        "qp": "NanpiXian"
}, {
    "cName": "吴桥县",
        "code": "130928",
        "py": "Wuqiao Xian",
        "jp": "wqx",
        "qp": "WuqiaoXian"
}, {
    "cName": "献县",
        "code": "130929",
        "py": "Xian Xian",
        "jp": "xx",
        "qp": "XianXian"
}, {
    "cName": "孟村回族自治县",
        "code": "130930",
        "py": "Mengcun Huizu Zizhixian",
        "jp": "mchzzzx",
        "qp": "MengcunHuizuZizhixian"
}, {
    "cName": "廊坊市",
        "code": "131000",
        "py": "Langfang Shi",
        "jp": "lfs",
        "qp": "LangfangShi"
}, {
    "cName": "广阳区",
        "code": "131003",
        "py": "Guangyang Qu",
        "jp": "gyq",
        "qp": "GuangyangQu"
}, {
    "cName": "安次区",
        "code": "131002",
        "py": "Anci Qu",
        "jp": "acq",
        "qp": "AnciQu"
}, {
    "cName": "霸州市",
        "code": "131081",
        "py": "Bazhou Shi",
        "jp": "bzs",
        "qp": "BazhouShi"
}, {
    "cName": "三河市",
        "code": "131082",
        "py": "Sanhe Shi",
        "jp": "shs",
        "qp": "SanheShi"
}, {
    "cName": "固安县",
        "code": "131022",
        "py": "Gu&#39;an Xian",
        "jp": "gax",
        "qp": "GuanXian"
}, {
    "cName": "永清县",
        "code": "131023",
        "py": "Yongqing Xian",
        "jp": "yqx",
        "qp": "YongqingXian"
}, {
    "cName": "香河县",
        "code": "131024",
        "py": "Xianghe Xian",
        "jp": "xhx",
        "qp": "XiangheXian"
}, {
    "cName": "大城县",
        "code": "131025",
        "py": "Daicheng Xian",
        "jp": "dcx",
        "qp": "DaichengXian"
}, {
    "cName": "文安县",
        "code": "131026",
        "py": "Wen&#39;an Xian",
        "jp": "wax",
        "qp": "WenanXian"
}, {
    "cName": "大厂回族自治县",
        "code": "131028",
        "py": "Dachang Huizu Zizhixian",
        "jp": "dchzzzx",
        "qp": "DachangHuizuZizhixian"
}, {
    "cName": "衡水市",
        "code": "131100",
        "py": "Hengshui Shi",
        "jp": "hss",
        "qp": "HengshuiShi"
}, {
    "cName": "桃城区",
        "code": "131102",
        "py": "Taocheng Qu",
        "jp": "tcq",
        "qp": "TaochengQu"
}, {
    "cName": "冀州区",
        "code": "131103",
        "py": "Jizhou Qu",
        "jp": "jzq",
        "qp": "JizhouQu"
}, {
    "cName": "深州市",
        "code": "131182",
        "py": "Shenzhou Shi",
        "jp": "szs",
        "qp": "ShenzhouShi"
}, {
    "cName": "枣强县",
        "code": "131121",
        "py": "Zaoqiang Xian",
        "jp": "zqx",
        "qp": "ZaoqiangXian"
}, {
    "cName": "武邑县",
        "code": "131122",
        "py": "Wuyi Xian",
        "jp": "wyx",
        "qp": "WuyiXian"
}, {
    "cName": "武强县",
        "code": "131123",
        "py": "Wuqiang Xian",
        "jp": "wqx",
        "qp": "WuqiangXian"
}, {
    "cName": "饶阳县",
        "code": "131124",
        "py": "Raoyang Xian",
        "jp": "ryx",
        "qp": "RaoyangXian"
}, {
    "cName": "安平县",
        "code": "131125",
        "py": "Anping Xian",
        "jp": "apx",
        "qp": "AnpingXian"
}, {
    "cName": "故城县",
        "code": "131126",
        "py": "Gucheng Xian",
        "jp": "gcx",
        "qp": "GuchengXian"
}, {
    "cName": "景县",
        "code": "131127",
        "py": "Jing Xian",
        "jp": "jx",
        "qp": "JingXian"
}, {
    "cName": "阜城县",
        "code": "131128",
        "py": "Fucheng Xian",
        "jp": "fcx",
        "qp": "FuchengXian"
}, {
    "cName": "山西省",
        "code": "140000",
        "py": "Shanxi Sheng",
        "jp": "sxs",
        "qp": "ShanxiSheng"
}, {
    "cName": "太原市",
        "code": "140100",
        "py": "Taiyuan Shi",
        "jp": "tys",
        "qp": "TaiyuanShi"
}, {
    "cName": "杏花岭区",
        "code": "140107",
        "py": "Xinghualing Qu",
        "jp": "xhlq",
        "qp": "XinghualingQu"
}, {
    "cName": "小店区",
        "code": "140105",
        "py": "Xiaodian Qu",
        "jp": "xdq",
        "qp": "XiaodianQu"
}, {
    "cName": "迎泽区",
        "code": "140106",
        "py": "Yingze Qu",
        "jp": "yzq",
        "qp": "YingzeQu"
}, {
    "cName": "尖草坪区",
        "code": "140108",
        "py": "Jiancaoping Qu",
        "jp": "jcpq",
        "qp": "JiancaopingQu"
}, {
    "cName": "万柏林区",
        "code": "140109",
        "py": "Wanbailin Qu",
        "jp": "wblq",
        "qp": "WanbailinQu"
}, {
    "cName": "晋源区",
        "code": "140110",
        "py": "Jinyuan Qu",
        "jp": "jyq",
        "qp": "JinyuanQu"
}, {
    "cName": "古交市",
        "code": "140181",
        "py": "Gujiao Shi",
        "jp": "gjs",
        "qp": "GujiaoShi"
}, {
    "cName": "清徐县",
        "code": "140121",
        "py": "Qingxu Xian",
        "jp": "qxx",
        "qp": "QingxuXian"
}, {
    "cName": "阳曲县",
        "code": "140122",
        "py": "Yangqu Xian",
        "jp": "yqx",
        "qp": "YangquXian"
}, {
    "cName": "娄烦县",
        "code": "140123",
        "py": "Loufan Xian",
        "jp": "lfx",
        "qp": "LoufanXian"
}, {
    "cName": "大同市",
        "code": "140200",
        "py": "Datong Shi",
        "jp": "dts",
        "qp": "DatongShi"
}, {
    "cName": "城区",
        "code": "140202",
        "py": "Cheng Qu",
        "jp": "cq",
        "qp": "ChengQu"
}, {
    "cName": "矿区",
        "code": "140203",
        "py": "Kuang Qu",
        "jp": "kq",
        "qp": "KuangQu"
}, {
    "cName": "南郊区",
        "code": "140211",
        "py": "Nanjiao Qu",
        "jp": "njq",
        "qp": "NanjiaoQu"
}, {
    "cName": "新荣区",
        "code": "140212",
        "py": "Xinrong Qu",
        "jp": "xrq",
        "qp": "XinrongQu"
}, {
    "cName": "阳高县",
        "code": "140221",
        "py": "Yanggao Xian",
        "jp": "ygx",
        "qp": "YanggaoXian"
}, {
    "cName": "天镇县",
        "code": "140222",
        "py": "Tianzhen Xian",
        "jp": "tzx",
        "qp": "TianzhenXian"
}, {
    "cName": "广灵县",
        "code": "140223",
        "py": "Guangling Xian",
        "jp": "glx",
        "qp": "GuanglingXian"
}, {
    "cName": "灵丘县",
        "code": "140224",
        "py": "Lingqiu Xian",
        "jp": "lqx",
        "qp": "LingqiuXian"
}, {
    "cName": "浑源县",
        "code": "140225",
        "py": "Hunyuan Xian",
        "jp": "hyx",
        "qp": "HunyuanXian"
}, {
    "cName": "左云县",
        "code": "140226",
        "py": "Zuoyun Xian",
        "jp": "zyx",
        "qp": "ZuoyunXian"
}, {
    "cName": "大同县",
        "code": "140227",
        "py": "Datong Xian",
        "jp": "dtx",
        "qp": "DatongXian"
}, {
    "cName": "阳泉市",
        "code": "140300",
        "py": "Yangquan Shi",
        "jp": "yqs",
        "qp": "YangquanShi"
}, {
    "cName": "城区",
        "code": "140302",
        "py": "Cheng Qu",
        "jp": "cq",
        "qp": "ChengQu"
}, {
    "cName": "矿区",
        "code": "140303",
        "py": "Kuang Qu",
        "jp": "kq",
        "qp": "KuangQu"
}, {
    "cName": "郊区",
        "code": "140311",
        "py": "Jiao Qu",
        "jp": "jq",
        "qp": "JiaoQu"
}, {
    "cName": "平定县",
        "code": "140321",
        "py": "Pingding Xian",
        "jp": "pdx",
        "qp": "PingdingXian"
}, {
    "cName": "盂县",
        "code": "140322",
        "py": "Yu Xian",
        "jp": "yx",
        "qp": "YuXian"
}, {
    "cName": "长治市",
        "code": "140400",
        "py": "Changzhi Shi",
        "jp": "czs",
        "qp": "ChangzhiShi"
}, {
    "cName": "城区",
        "code": "140402",
        "py": "Cheng Qu",
        "jp": "cq",
        "qp": "ChengQu"
}, {
    "cName": "郊区",
        "code": "140411",
        "py": "Jiao Qu",
        "jp": "jq",
        "qp": "JiaoQu"
}, {
    "cName": "潞城市",
        "code": "140481",
        "py": "Lucheng Shi",
        "jp": "lcs",
        "qp": "LuchengShi"
}, {
    "cName": "长治县",
        "code": "140421",
        "py": "Changzhi Xian",
        "jp": "czx",
        "qp": "ChangzhiXian"
}, {
    "cName": "襄垣县",
        "code": "140423",
        "py": "Xiangyuan Xian",
        "jp": "xyx",
        "qp": "XiangyuanXian"
}, {
    "cName": "屯留县",
        "code": "140424",
        "py": "Tunliu Xian",
        "jp": "tlx",
        "qp": "TunliuXian"
}, {
    "cName": "平顺县",
        "code": "140425",
        "py": "Pingshun Xian",
        "jp": "psx",
        "qp": "PingshunXian"
}, {
    "cName": "黎城县",
        "code": "140426",
        "py": "Licheng Xian",
        "jp": "lcx",
        "qp": "LichengXian"
}, {
    "cName": "壶关县",
        "code": "140427",
        "py": "Huguan Xian",
        "jp": "hgx",
        "qp": "HuguanXian"
}, {
    "cName": "长子县",
        "code": "140428",
        "py": "Zhangzi Xian",
        "jp": "zzx",
        "qp": "ZhangziXian"
}, {
    "cName": "武乡县",
        "code": "140429",
        "py": "Wuxiang Xian",
        "jp": "wxx",
        "qp": "WuxiangXian"
}, {
    "cName": "沁县",
        "code": "140430",
        "py": "Qin Xian",
        "jp": "qx",
        "qp": "QinXian"
}, {
    "cName": "沁源县",
        "code": "140431",
        "py": "Qinyuan Xian",
        "jp": "qyx",
        "qp": "QinyuanXian"
}, {
    "cName": "晋城市",
        "code": "140500",
        "py": "Jincheng Shi",
        "jp": "jcs",
        "qp": "JinchengShi"
}, {
    "cName": "城区",
        "code": "140502",
        "py": "Cheng Qu",
        "jp": "cq",
        "qp": "ChengQu"
}, {
    "cName": "高平市",
        "code": "140581",
        "py": "Gaoping Shi",
        "jp": "gps",
        "qp": "GaopingShi"
}, {
    "cName": "沁水县",
        "code": "140521",
        "py": "Qinshui Xian",
        "jp": "qsx",
        "qp": "QinshuiXian"
}, {
    "cName": "阳城县",
        "code": "140522",
        "py": "Yangcheng Xian",
        "jp": "ycx",
        "qp": "YangchengXian"
}, {
    "cName": "陵川县",
        "code": "140524",
        "py": "Lingchuan Xian",
        "jp": "lcx",
        "qp": "LingchuanXian"
}, {
    "cName": "泽州县",
        "code": "140525",
        "py": "Zezhou Xian",
        "jp": "zzx",
        "qp": "ZezhouXian"
}, {
    "cName": "朔州市",
        "code": "140600",
        "py": "Shuozhou Shi",
        "jp": "szs",
        "qp": "ShuozhouShi"
}, {
    "cName": "朔城区",
        "code": "140602",
        "py": "Shuocheng Qu",
        "jp": "scq",
        "qp": "ShuochengQu"
}, {
    "cName": "平鲁区",
        "code": "140603",
        "py": "Pinglu Qu",
        "jp": "plq",
        "qp": "PingluQu"
}, {
    "cName": "山阴县",
        "code": "140621",
        "py": "Shanyin Xian",
        "jp": "syx",
        "qp": "ShanyinXian"
}, {
    "cName": "应县",
        "code": "140622",
        "py": "Ying Xian",
        "jp": "yx",
        "qp": "YingXian"
}, {
    "cName": "右玉县",
        "code": "140623",
        "py": "Youyu Xian",
        "jp": "yyx",
        "qp": "YouyuXian"
}, {
    "cName": "怀仁县",
        "code": "140624",
        "py": "Huairen Xian",
        "jp": "hrx",
        "qp": "HuairenXian"
}, {
    "cName": "晋中市",
        "code": "140700",
        "py": "Jinzhong Shi",
        "jp": "jzs",
        "qp": "JinzhongShi"
}, {
    "cName": "榆次区",
        "code": "140702",
        "py": "Yuci Qu",
        "jp": "ycq",
        "qp": "YuciQu"
}, {
    "cName": "介休市",
        "code": "140781",
        "py": "Jiexiu Shi",
        "jp": "jxs",
        "qp": "JiexiuShi"
}, {
    "cName": "榆社县",
        "code": "140721",
        "py": "Yushe Xian",
        "jp": "ysx",
        "qp": "YusheXian"
}, {
    "cName": "左权县",
        "code": "140722",
        "py": "Zuoquan Xian",
        "jp": "zqx",
        "qp": "ZuoquanXian"
}, {
    "cName": "和顺县",
        "code": "140723",
        "py": "Heshun Xian",
        "jp": "hsx",
        "qp": "HeshunXian"
}, {
    "cName": "昔阳县",
        "code": "140724",
        "py": "Xiyang Xian",
        "jp": "xyx",
        "qp": "XiyangXian"
}, {
    "cName": "寿阳县",
        "code": "140725",
        "py": "Shouyang Xian",
        "jp": "syx",
        "qp": "ShouyangXian"
}, {
    "cName": "太谷县",
        "code": "140726",
        "py": "Taigu Xian",
        "jp": "tgx",
        "qp": "TaiguXian"
}, {
    "cName": "祁县",
        "code": "140727",
        "py": "Qi Xian",
        "jp": "qx",
        "qp": "QiXian"
}, {
    "cName": "平遥县",
        "code": "140728",
        "py": "Pingyao Xian",
        "jp": "pyx",
        "qp": "PingyaoXian"
}, {
    "cName": "灵石县",
        "code": "140729",
        "py": "Lingshi Xian",
        "jp": "lsx",
        "qp": "LingshiXian"
}, {
    "cName": "运城市",
        "code": "140800",
        "py": "Yuncheng Shi",
        "jp": "ycs",
        "qp": "YunchengShi"
}, {
    "cName": "盐湖区",
        "code": "140802",
        "py": "Yanhu Qu",
        "jp": "yhq",
        "qp": "YanhuQu"
}, {
    "cName": "永济市",
        "code": "140881",
        "py": "Yongji Shi",
        "jp": "yjs",
        "qp": "YongjiShi"
}, {
    "cName": "河津市",
        "code": "140882",
        "py": "Hejin Shi",
        "jp": "hjs",
        "qp": "HejinShi"
}, {
    "cName": "临猗县",
        "code": "140821",
        "py": "Linyi Xian",
        "jp": "lyx",
        "qp": "LinyiXian"
}, {
    "cName": "万荣县",
        "code": "140822",
        "py": "Wanrong Xian",
        "jp": "wrx",
        "qp": "WanrongXian"
}, {
    "cName": "闻喜县",
        "code": "140823",
        "py": "Wenxi Xian",
        "jp": "wxx",
        "qp": "WenxiXian"
}, {
    "cName": "稷山县",
        "code": "140824",
        "py": "Jishan Xian",
        "jp": "jsx",
        "qp": "JishanXian"
}, {
    "cName": "新绛县",
        "code": "140825",
        "py": "Xinjiang Xian",
        "jp": "xjx",
        "qp": "XinjiangXian"
}, {
    "cName": "绛县",
        "code": "140826",
        "py": "Jiang Xian",
        "jp": "jx",
        "qp": "JiangXian"
}, {
    "cName": "垣曲县",
        "code": "140827",
        "py": "Yuanqu Xian",
        "jp": "yqx",
        "qp": "YuanquXian"
}, {
    "cName": "夏县",
        "code": "140828",
        "py": "Xia Xian",
        "jp": "xx",
        "qp": "XiaXian"
}, {
    "cName": "平陆县",
        "code": "140829",
        "py": "Pinglu Xian",
        "jp": "plx",
        "qp": "PingluXian"
}, {
    "cName": "芮城县",
        "code": "140830",
        "py": "Ruicheng Xian",
        "jp": "rcx",
        "qp": "RuichengXian"
}, {
    "cName": "忻州市",
        "code": "140900",
        "py": "Xinzhou Shi",
        "jp": "xzs",
        "qp": "XinzhouShi"
}, {
    "cName": "忻府区",
        "code": "140902",
        "py": "Xinfu Qu",
        "jp": "xfq",
        "qp": "XinfuQu"
}, {
    "cName": "原平市",
        "code": "140981",
        "py": "Yuanping Shi",
        "jp": "yps",
        "qp": "YuanpingShi"
}, {
    "cName": "定襄县",
        "code": "140921",
        "py": "Dingxiang Xian",
        "jp": "dxx",
        "qp": "DingxiangXian"
}, {
    "cName": "五台县",
        "code": "140922",
        "py": "Wutai Xian",
        "jp": "wtx",
        "qp": "WutaiXian"
}, {
    "cName": "代县",
        "code": "140923",
        "py": "Dai Xian",
        "jp": "dx",
        "qp": "DaiXian"
}, {
    "cName": "繁峙县",
        "code": "140924",
        "py": "Fanshi Xian",
        "jp": "fsx",
        "qp": "FanshiXian"
}, {
    "cName": "宁武县",
        "code": "140925",
        "py": "Ningwu Xian",
        "jp": "nwx",
        "qp": "NingwuXian"
}, {
    "cName": "静乐县",
        "code": "140926",
        "py": "Jingle Xian",
        "jp": "jlx",
        "qp": "JingleXian"
}, {
    "cName": "神池县",
        "code": "140927",
        "py": "Shenchi Xian",
        "jp": "scx",
        "qp": "ShenchiXian"
}, {
    "cName": "五寨县",
        "code": "140928",
        "py": "Wuzhai Xian",
        "jp": "wzx",
        "qp": "WuzhaiXian"
}, {
    "cName": "岢岚县",
        "code": "140929",
        "py": "Kelan Xian",
        "jp": "klx",
        "qp": "KelanXian"
}, {
    "cName": "河曲县",
        "code": "140930",
        "py": "Hequ Xian",
        "jp": "hqx",
        "qp": "HequXian"
}, {
    "cName": "保德县",
        "code": "140931",
        "py": "Baode Xian",
        "jp": "bdx",
        "qp": "BaodeXian"
}, {
    "cName": "偏关县",
        "code": "140932",
        "py": "Pianguan Xian",
        "jp": "pgx",
        "qp": "PianguanXian"
}, {
    "cName": "临汾市",
        "code": "141000",
        "py": "Linfen Shi",
        "jp": "lfs",
        "qp": "LinfenShi"
}, {
    "cName": "尧都区",
        "code": "141002",
        "py": "Yaodu Qu",
        "jp": "ydq",
        "qp": "YaoduQu"
}, {
    "cName": "侯马市",
        "code": "141081",
        "py": "Houma Shi",
        "jp": "hms",
        "qp": "HoumaShi"
}, {
    "cName": "霍州市",
        "code": "141082",
        "py": "Huozhou Shi",
        "jp": "hzs",
        "qp": "HuozhouShi"
}, {
    "cName": "曲沃县",
        "code": "141021",
        "py": "Quwo Xian",
        "jp": "qwx",
        "qp": "QuwoXian"
}, {
    "cName": "翼城县",
        "code": "141022",
        "py": "Yicheng Xian",
        "jp": "ycx",
        "qp": "YichengXian"
}, {
    "cName": "襄汾县",
        "code": "141023",
        "py": "Xiangfen Xian",
        "jp": "xfx",
        "qp": "XiangfenXian"
}, {
    "cName": "洪洞县",
        "code": "141024",
        "py": "Hongtong Xian",
        "jp": "htx",
        "qp": "HongtongXian"
}, {
    "cName": "古县",
        "code": "141025",
        "py": "Gu Xian",
        "jp": "gx",
        "qp": "GuXian"
}, {
    "cName": "安泽县",
        "code": "141026",
        "py": "Anze Xian",
        "jp": "azx",
        "qp": "AnzeXian"
}, {
    "cName": "浮山县",
        "code": "141027",
        "py": "Fushan Xian",
        "jp": "fsx",
        "qp": "FushanXian"
}, {
    "cName": "吉县",
        "code": "141028",
        "py": "Ji Xian",
        "jp": "jx",
        "qp": "JiXian"
}, {
    "cName": "乡宁县",
        "code": "141029",
        "py": "Xiangning Xian",
        "jp": "xnx",
        "qp": "XiangningXian"
}, {
    "cName": "大宁县",
        "code": "141030",
        "py": "Daning Xian",
        "jp": "dnx",
        "qp": "DaningXian"
}, {
    "cName": "隰县",
        "code": "141031",
        "py": "Xi Xian",
        "jp": "xx",
        "qp": "XiXian"
}, {
    "cName": "永和县",
        "code": "141032",
        "py": "Yonghe Xian",
        "jp": "yhx",
        "qp": "YongheXian"
}, {
    "cName": "蒲县",
        "code": "141033",
        "py": "Pu Xian",
        "jp": "px",
        "qp": "PuXian"
}, {
    "cName": "汾西县",
        "code": "141034",
        "py": "Fenxi Xian",
        "jp": "fxx",
        "qp": "FenxiXian"
}, {
    "cName": "吕梁市",
        "code": "141100",
        "py": "L眉liang Shi",
        "jp": "lls",
        "qp": "L眉liangShi"
}, {
    "cName": "离石区",
        "code": "141102",
        "py": "Lishi Qu",
        "jp": "lsq",
        "qp": "LishiQu"
}, {
    "cName": "孝义市",
        "code": "141181",
        "py": "Xiaoyi Shi",
        "jp": "xys",
        "qp": "XiaoyiShi"
}, {
    "cName": "汾阳市",
        "code": "141182",
        "py": "Fenyang Shi",
        "jp": "fys",
        "qp": "FenyangShi"
}, {
    "cName": "文水县",
        "code": "141121",
        "py": "Wenshui Xian",
        "jp": "wsx",
        "qp": "WenshuiXian"
}, {
    "cName": "交城县",
        "code": "141122",
        "py": "Jiaocheng Xian",
        "jp": "jcx",
        "qp": "JiaochengXian"
}, {
    "cName": "兴县",
        "code": "141123",
        "py": "Xing Xian",
        "jp": "xx",
        "qp": "XingXian"
}, {
    "cName": "临县",
        "code": "141124",
        "py": "Lin Xian",
        "jp": "lx",
        "qp": "LinXian"
}, {
    "cName": "柳林县",
        "code": "141125",
        "py": "Liulin Xian",
        "jp": "llx",
        "qp": "LiulinXian"
}, {
    "cName": "石楼县",
        "code": "141126",
        "py": "Shilou Xian",
        "jp": "slx",
        "qp": "ShilouXian"
}, {
    "cName": "岚县",
        "code": "141127",
        "py": "Lan Xian",
        "jp": "lx",
        "qp": "LanXian"
}, {
    "cName": "方山县",
        "code": "141128",
        "py": "Fangshan Xian",
        "jp": "fsx",
        "qp": "FangshanXian"
}, {
    "cName": "中阳县",
        "code": "141129",
        "py": "Zhongyang Xian",
        "jp": "zyx",
        "qp": "ZhongyangXian"
}, {
    "cName": "交口县",
        "code": "141130",
        "py": "Jiaokou Xian",
        "jp": "jkx",
        "qp": "JiaokouXian"
}, {
    "cName": "内蒙古自治区",
        "code": "150000",
        "py": "Neimenggu Zizhiqu",
        "jp": "nmgzzq",
        "qp": "NeimengguZizhiqu"
}, {
    "cName": "呼和浩特市",
        "code": "150100",
        "py": "Huhehaote Shi",
        "jp": "hhhts",
        "qp": "HuhehaoteShi"
}, {
    "cName": "新城区",
        "code": "150102",
        "py": "Xincheng Qu",
        "jp": "xcq",
        "qp": "XinchengQu"
}, {
    "cName": "回民区",
        "code": "150103",
        "py": "Huimin Qu",
        "jp": "hmq",
        "qp": "HuiminQu"
}, {
    "cName": "玉泉区",
        "code": "150104",
        "py": "Yuquan Qu",
        "jp": "yqq",
        "qp": "YuquanQu"
}, {
    "cName": "赛罕区",
        "code": "150105",
        "py": "Saihan Qu",
        "jp": "shq",
        "qp": "SaihanQu"
}, {
    "cName": "托克托县",
        "code": "150122",
        "py": "Tuoketuo Xian",
        "jp": "tktx",
        "qp": "TuoketuoXian"
}, {
    "cName": "和林格尔县",
        "code": "150123",
        "py": "Helinge&#39;er Xian",
        "jp": "hlgex",
        "qp": "HelingeerXian"
}, {
    "cName": "清水河县",
        "code": "150124",
        "py": "Qingshuihe Xian",
        "jp": "qshx",
        "qp": "QingshuiheXian"
}, {
    "cName": "武川县",
        "code": "150125",
        "py": "Wuchuan Xian",
        "jp": "wcx",
        "qp": "WuchuanXian"
}, {
    "cName": "土默特左旗",
        "code": "150121",
        "py": "Tumote Zuoqi",
        "jp": "tmtzq",
        "qp": "TumotezuoQi"
}, {
    "cName": "包头市",
        "code": "150200",
        "py": "Baotou Shi",
        "jp": "bts",
        "qp": "BaotouShi"
}, {
    "cName": "昆都仑区",
        "code": "150203",
        "py": "Kundulun Qu",
        "jp": "kdlq",
        "qp": "KundulunQu"
}, {
    "cName": "东河区",
        "code": "150202",
        "py": "Donghe Qu",
        "jp": "dhq",
        "qp": "DongheQu"
}, {
    "cName": "青山区",
        "code": "150204",
        "py": "Qingshan Qu",
        "jp": "qsq",
        "qp": "QingshanQu"
}, {
    "cName": "石拐区",
        "code": "150205",
        "py": "Shiguai Qu",
        "jp": "sgq",
        "qp": "ShiguaiQu"
}, {
    "cName": "白云鄂博矿区",
        "code": "150206",
        "py": "Baiyun&#39;ebo Kuangqu",
        "jp": "byebkq",
        "qp": "BaiyuneboKuangqu"
}, {
    "cName": "九原区",
        "code": "150207",
        "py": "Jiuyuan Qu",
        "jp": "jyq",
        "qp": "JiuyuanQu"
}, {
    "cName": "固阳县",
        "code": "150222",
        "py": "Guyang Xian",
        "jp": "gyx",
        "qp": "GuyangXian"
}, {
    "cName": "土默特右旗",
        "code": "150221",
        "py": "Tumote Youqi",
        "jp": "tmtyq",
        "qp": "TumoteyouQi"
}, {
    "cName": "达尔罕茂明安联合旗",
        "code": "150223",
        "py": "Da&#39;erhan Maoming &#39;an Lianheqi",
        "jp": "dehmmalhq",
        "qp": "DaerhanMaominganLianheqi"
}, {
    "cName": "乌海市",
        "code": "150300",
        "py": "Wuhai Shi",
        "jp": "whs",
        "qp": "WuhaiShi"
}, {
    "cName": "海勃湾区",
        "code": "150302",
        "py": "Haibowan Qu",
        "jp": "hbwq",
        "qp": "HaibowanQu"
}, {
    "cName": "海南区",
        "code": "150303",
        "py": "Hainan Qu",
        "jp": "hnq",
        "qp": "HainanQu"
}, {
    "cName": "乌达区",
        "code": "150304",
        "py": "Wuda Qu",
        "jp": "wdq",
        "qp": "WudaQu"
}, {
    "cName": "赤峰市",
        "code": "150400",
        "py": "Chifeng Shi",
        "jp": "cfs",
        "qp": "ChifengShi"
}, {
    "cName": "红山区",
        "code": "150402",
        "py": "Hongshan Qu",
        "jp": "hsq",
        "qp": "HongshanQu"
}, {
    "cName": "元宝山区",
        "code": "150403",
        "py": "Yuanbaoshan Qu",
        "jp": "ybsq",
        "qp": "YuanbaoshanQu"
}, {
    "cName": "松山区",
        "code": "150404",
        "py": "Songshan Qu",
        "jp": "ssq",
        "qp": "SongshanQu"
}, {
    "cName": "林西县",
        "code": "150424",
        "py": "Linxi Xian",
        "jp": "lxx",
        "qp": "LinxiXian"
}, {
    "cName": "宁城县",
        "code": "150429",
        "py": "Ningcheng Xian",
        "jp": "ncx",
        "qp": "NingchengXian"
}, {
    "cName": "阿鲁科尔沁旗",
        "code": "150421",
        "py": "Alu Ke&#39;erqin Qi",
        "jp": "alkeqq",
        "qp": "AlukeerqinQi"
}, {
    "cName": "巴林左旗",
        "code": "150422",
        "py": "Balin Zuoqi",
        "jp": "blzq",
        "qp": "BalinzuoQi"
}, {
    "cName": "巴林右旗",
        "code": "150423",
        "py": "Balin Youqi",
        "jp": "blyq",
        "qp": "BalinyouQi"
}, {
    "cName": "克什克腾旗",
        "code": "150425",
        "py": "Keshiketeng Qi",
        "jp": "ksktq",
        "qp": "KeshiketengQi"
}, {
    "cName": "翁牛特旗",
        "code": "150426",
        "py": "Wengniute Qi",
        "jp": "wntq",
        "qp": "WengniuteQi"
}, {
    "cName": "喀喇沁旗",
        "code": "150428",
        "py": "Kalaqin Qi",
        "jp": "klqq",
        "qp": "KalaqinQi"
}, {
    "cName": "敖汉旗",
        "code": "150430",
        "py": "Aohan Qi",
        "jp": "ahq",
        "qp": "AohanQi"
}, {
    "cName": "通辽市",
        "code": "150500",
        "py": "Tongliao Shi",
        "jp": "tls",
        "qp": "TongliaoShi"
}, {
    "cName": "科尔沁区",
        "code": "150502",
        "py": "Ke&#39;erqin Qu",
        "jp": "keqq",
        "qp": "KeerqinQu"
}, {
    "cName": "霍林郭勒市",
        "code": "150581",
        "py": "Huolinguole Shi",
        "jp": "hlgls",
        "qp": "HuolinguoleShi"
}, {
    "cName": "开鲁县",
        "code": "150523",
        "py": "Kailu Xian",
        "jp": "klx",
        "qp": "KailuXian"
}, {
    "cName": "库伦旗",
        "code": "150524",
        "py": "Kulun Qi",
        "jp": "klq",
        "qp": "KulunQi"
}, {
    "cName": "奈曼旗",
        "code": "150525",
        "py": "Naiman Qi",
        "jp": "nmq",
        "qp": "NaimanQi"
}, {
    "cName": "扎鲁特旗",
        "code": "150526",
        "py": "Zhalute Qi",
        "jp": "zltq",
        "qp": "ZhaluteQi"
}, {
    "cName": "科尔沁左翼中旗",
        "code": "150521",
        "py": "Ke&#39;erqin Zuoyi Zhongqi",
        "jp": "keqzyzq",
        "qp": "KeerqinzuoyizhongQi"
}, {
    "cName": "科尔沁左翼后旗",
        "code": "150522",
        "py": "Ke&#39;erqin Zuoyi Houqi",
        "jp": "keqzyhq",
        "qp": "KeerqinzuoyihouQi"
}, {
    "cName": "鄂尔多斯市",
        "code": "150600",
        "py": "E&#39;erduosi Shi",
        "jp": "eedss",
        "qp": "EerduosiShi"
}, {
    "cName": "东胜区",
        "code": "150602",
        "py": "Dongsheng Qu",
        "jp": "dsq",
        "qp": "DongshengQu"
}, {
    "cName": "康巴什区",
        "code": "150603",
        "py": "Kangbashi Qu",
        "jp": "kbsq",
        "qp": "KangbashiQu"
}, {
    "cName": "达拉特旗",
        "code": "150621",
        "py": "Dalate Qi",
        "jp": "dltq",
        "qp": "DalateQi"
}, {
    "cName": "准格尔旗",
        "code": "150622",
        "py": "Zhunge&#39;er Qi",
        "jp": "zgeq",
        "qp": "ZhungeerQi"
}, {
    "cName": "鄂托克前旗",
        "code": "150623",
        "py": "Etuoke Qianqi",
        "jp": "etkqq",
        "qp": "EtuokeqianQi"
}, {
    "cName": "鄂托克旗",
        "code": "150624",
        "py": "Etuoke Qi",
        "jp": "etkq",
        "qp": "EtuokeQi"
}, {
    "cName": "杭锦旗",
        "code": "150625",
        "py": "Hangjin Qi",
        "jp": "hjq",
        "qp": "HangjinQi"
}, {
    "cName": "乌审旗",
        "code": "150626",
        "py": "Wushen Qi",
        "jp": "wsq",
        "qp": "WushenQi"
}, {
    "cName": "伊金霍洛旗",
        "code": "150627",
        "py": "Yijin Huoluo Qi",
        "jp": "yjhlq",
        "qp": "YijinhuoluoQi"
}, {
    "cName": "呼伦贝尔市",
        "code": "150700",
        "py": "Hulunbei&#39;er Shi",
        "jp": "hlbes",
        "qp": "HulunbeierShi"
}, {
    "cName": "海拉尔区",
        "code": "150702",
        "py": "Haila&#39;er Qu",
        "jp": "hleq",
        "qp": "HailaerQu"
}, {
    "cName": "扎赉诺尔区",
        "code": "150703",
        "py": "Zhelainuo&#39;er Qu",
        "jp": "zlneq",
        "qp": "ZhelainuoerQu"
}, {
    "cName": "满洲里市",
        "code": "150781",
        "py": "Manzhouli Shi",
        "jp": "mzls",
        "qp": "ManzhouliShi"
}, {
    "cName": "牙克石市",
        "code": "150782",
        "py": "Yakeshi Shi",
        "jp": "ykss",
        "qp": "YakeshiShi"
}, {
    "cName": "扎兰屯市",
        "code": "150783",
        "py": "Zhalantun Shi",
        "jp": "zlts",
        "qp": "ZhalantunShi"
}, {
    "cName": "额尔古纳市",
        "code": "150784",
        "py": "E&#39;erguna Shi",
        "jp": "eegns",
        "qp": "EergunaShi"
}, {
    "cName": "根河市",
        "code": "150785",
        "py": "Genhe Shi",
        "jp": "ghs",
        "qp": "GenheShi"
}, {
    "cName": "阿荣旗",
        "code": "150721",
        "py": "Arong Qi",
        "jp": "arq",
        "qp": "ArongQi"
}, {
    "cName": "陈巴尔虎旗",
        "code": "150725",
        "py": "Chen Ba&#39;erhu Qi",
        "jp": "cbehq",
        "qp": "ChenbaerhuQi"
}, {
    "cName": "新巴尔虎左旗",
        "code": "150726",
        "py": "Xin Ba&#39;erhu Zuoqi",
        "jp": "xbehzq",
        "qp": "XinbaerhuzuoQi"
}, {
    "cName": "新巴尔虎右旗",
        "code": "150727",
        "py": "Xin Ba&#39;erhu Youqi",
        "jp": "xbehyq",
        "qp": "XinbaerhuyouQi"
}, {
    "cName": "莫力达瓦达斡尔族自治旗",
        "code": "150722",
        "py": "Molidawa Dawo&#39;erzu Zizhiqi",
        "jp": "mldwdwezzzq",
        "qp": "MolidawaDawoerzuZizhiqi"
}, {
    "cName": "鄂伦春自治旗",
        "code": "150723",
        "py": "Elunchun Zizhiqi",
        "jp": "elczzq",
        "qp": "ElunchunZizhiqi"
}, {
    "cName": "鄂温克族自治旗",
        "code": "150724",
        "py": "Ewenkezu Zizhiqi",
        "jp": "ewkzzzq",
        "qp": "EwenkezuZizhiqi"
}, {
    "cName": "巴彦淖尔市",
        "code": "150800",
        "py": "Bayannao&#39;er Shi",
        "jp": "bynes",
        "qp": "BayannaoerShi"
}, {
    "cName": "临河区",
        "code": "150802",
        "py": "Linhe Qu",
        "jp": "lhq",
        "qp": "LinheQu"
}, {
    "cName": "五原县",
        "code": "150821",
        "py": "Wuyuan Xian",
        "jp": "wyx",
        "qp": "WuyuanXian"
}, {
    "cName": "磴口县",
        "code": "150822",
        "py": "Dengkou Xian",
        "jp": "dkx",
        "qp": "DengkouXian"
}, {
    "cName": "乌拉特前旗",
        "code": "150823",
        "py": "Wulate Qianqi",
        "jp": "wltqq",
        "qp": "WulateqianQi"
}, {
    "cName": "乌拉特中旗",
        "code": "150824",
        "py": "Wulate Zhongqi",
        "jp": "wltzq",
        "qp": "WulatezhongQi"
}, {
    "cName": "乌拉特后旗",
        "code": "150825",
        "py": "Wulate Houqi",
        "jp": "wlthq",
        "qp": "WulatehouQi"
}, {
    "cName": "杭锦后旗",
        "code": "150826",
        "py": "Hangjin Houqi",
        "jp": "hjhq",
        "qp": "HangjinhouQi"
}, {
    "cName": "乌兰察布市",
        "code": "150900",
        "py": "Wulanchabu Shi",
        "jp": "wlcbs",
        "qp": "WulanchabuShi"
}, {
    "cName": "集宁区",
        "code": "150902",
        "py": "Jining Qu",
        "jp": "jnq",
        "qp": "JiningQu"
}, {
    "cName": "丰镇市",
        "code": "150981",
        "py": "Fengzhen Shi",
        "jp": "fzs",
        "qp": "FengzhenShi"
}, {
    "cName": "卓资县",
        "code": "150921",
        "py": "Zhuozi Xian",
        "jp": "zzx",
        "qp": "ZhuoziXian"
}, {
    "cName": "化德县",
        "code": "150922",
        "py": "Huade Xian",
        "jp": "hdx",
        "qp": "HuadeXian"
}, {
    "cName": "商都县",
        "code": "150923",
        "py": "Shangdu Xian",
        "jp": "sdx",
        "qp": "ShangduXian"
}, {
    "cName": "兴和县",
        "code": "150924",
        "py": "Xinghe Xian",
        "jp": "xhx",
        "qp": "XingheXian"
}, {
    "cName": "凉城县",
        "code": "150925",
        "py": "Liangcheng Xian",
        "jp": "lcx",
        "qp": "LiangchengXian"
}, {
    "cName": "察哈尔右翼前旗",
        "code": "150926",
        "py": "Chaha&#39;er Youyi Qianqi",
        "jp": "cheyyqq",
        "qp": "ChahaeryouyiqianQi"
}, {
    "cName": "察哈尔右翼中旗",
        "code": "150927",
        "py": "Chaha&#39;er Youyi Zhongqi",
        "jp": "cheyyzq",
        "qp": "ChahaeryouyizhongQi"
}, {
    "cName": "察哈尔右翼后旗",
        "code": "150928",
        "py": "Chaha&#39;er Youyi Houqi",
        "jp": "cheyyhq",
        "qp": "ChahaeryouyihouQi"
}, {
    "cName": "四子王旗",
        "code": "150929",
        "py": "Siziwang Qi",
        "jp": "szwq",
        "qp": "SiziwangQi"
}, {
    "cName": "兴安盟",
        "code": "152200",
        "py": "Xing&#39;an Meng",
        "jp": "xam",
        "qp": "XinganMeng"
}, {
    "cName": "乌兰浩特市",
        "code": "152201",
        "py": "Wulanhaote Shi",
        "jp": "wlhts",
        "qp": "WulanhaoteShi"
}, {
    "cName": "阿尔山市",
        "code": "152202",
        "py": "A&#39;ershan Shi",
        "jp": "aess",
        "qp": "AershanShi"
}, {
    "cName": "突泉县",
        "code": "152224",
        "py": "Tuquan Xian",
        "jp": "tqx",
        "qp": "TuquanXian"
}, {
    "cName": "科尔沁右翼前旗",
        "code": "152221",
        "py": "Ke&#39;erqin Youyi Qianqi",
        "jp": "keqyyqq",
        "qp": "KeerqinyouyiqianQi"
}, {
    "cName": "科尔沁右翼中旗",
        "code": "152222",
        "py": "Ke&#39;erqin Youyi Zhongqi",
        "jp": "keqyyzq",
        "qp": "KeerqinyouyizhongQi"
}, {
    "cName": "扎赉特旗",
        "code": "152223",
        "py": "Zhalaite Qi",
        "jp": "zltq",
        "qp": "ZhalaiteQi"
}, {
    "cName": "锡林郭勒盟",
        "code": "152500",
        "py": "Xilinguole Meng",
        "jp": "xlglm",
        "qp": "XilinguoleMeng"
}, {
    "cName": "锡林浩特市",
        "code": "152502",
        "py": "Xilinhaote Shi",
        "jp": "xlhts",
        "qp": "XilinhaoteShi"
}, {
    "cName": "二连浩特市",
        "code": "152501",
        "py": "Erlianhaote Shi",
        "jp": "elhts",
        "qp": "ErlianhaoteShi"
}, {
    "cName": "多伦县",
        "code": "152531",
        "py": "Duolun Xian",
        "jp": "dlx",
        "qp": "DuolunXian"
}, {
    "cName": "阿巴嘎旗",
        "code": "152522",
        "py": "Abaga Qi",
        "jp": "abgq",
        "qp": "AbagaQi"
}, {
    "cName": "苏尼特左旗",
        "code": "152523",
        "py": "Sunite Zuoqi",
        "jp": "sntzq",
        "qp": "SunitezuoQi"
}, {
    "cName": "苏尼特右旗",
        "code": "152524",
        "py": "Sunite Youqi",
        "jp": "sntyq",
        "qp": "SuniteyouQi"
}, {
    "cName": "东乌珠穆沁旗",
        "code": "152525",
        "py": "Dong Wuzhumuqin Qi",
        "jp": "dwzmqq",
        "qp": "DongwuzhumuqinQi"
}, {
    "cName": "西乌珠穆沁旗",
        "code": "152526",
        "py": "Xi Wuzhumuqin Qi",
        "jp": "xwzmqq",
        "qp": "XiwuzhumuqinQi"
}, {
    "cName": "太仆寺旗",
        "code": "152527",
        "py": "Taipusi Qi",
        "jp": "tpsq",
        "qp": "TaipusiQi"
}, {
    "cName": "镶黄旗",
        "code": "152528",
        "py": "Xianghuang Qi",
        "jp": "xhq",
        "qp": "XianghuangQi"
}, {
    "cName": "正镶白旗",
        "code": "152529",
        "py": "Zhengxiangbai Qi",
        "jp": "zxbq",
        "qp": "ZhengxiangbaiQi"
}, {
    "cName": "正蓝旗",
        "code": "152530",
        "py": "Zhenglan Qi",
        "jp": "zlq",
        "qp": "ZhenglanQi"
}, {
    "cName": "阿拉善盟",
        "code": "152900",
        "py": "Alashan Meng",
        "jp": "alsm",
        "qp": "AlashanMeng"
}, {
    "cName": "阿拉善左旗",
        "code": "152921",
        "py": "Alashan Zuoqi",
        "jp": "alszq",
        "qp": "AlashanzuoQi"
}, {
    "cName": "阿拉善右旗",
        "code": "152922",
        "py": "Alashan Youqi",
        "jp": "alsyq",
        "qp": "AlashanyouQi"
}, {
    "cName": "额济纳旗",
        "code": "152923",
        "py": "Ejina Qi",
        "jp": "ejnq",
        "qp": "EjinaQi"
}, {
    "cName": "辽宁省",
        "code": "210000",
        "py": "Liaoning Sheng",
        "jp": "lns",
        "qp": "LiaoningSheng"
}, {
    "cName": "沈阳市",
        "code": "210100",
        "py": "Shenyang Shi",
        "jp": "sys",
        "qp": "ShenyangShi"
}, {
    "cName": "沈河区",
        "code": "210103",
        "py": "Shenhe Qu",
        "jp": "shq",
        "qp": "ShenheQu"
}, {
    "cName": "和平区",
        "code": "210102",
        "py": "Heping Qu",
        "jp": "hpq",
        "qp": "HepingQu"
}, {
    "cName": "大东区",
        "code": "210104",
        "py": "Dadong Qu",
        "jp": "ddq",
        "qp": "DadongQu"
}, {
    "cName": "皇姑区",
        "code": "210105",
        "py": "Huanggu Qu",
        "jp": "hgq",
        "qp": "HuangguQu"
}, {
    "cName": "铁西区",
        "code": "210106",
        "py": "Tiexi Qu",
        "jp": "txq",
        "qp": "TiexiQu"
}, {
    "cName": "苏家屯区",
        "code": "210111",
        "py": "Sujiatun Qu",
        "jp": "sjtq",
        "qp": "SujiatunQu"
}, {
    "cName": "浑南区",
        "code": "210112",
        "py": "Hunnan Qu",
        "jp": "hnq",
        "qp": "HunnanQu"
}, {
    "cName": "沈北新区",
        "code": "210113",
        "py": "Shenbei Xinqu",
        "jp": "sbxq",
        "qp": "ShenbeiXinQu"
}, {
    "cName": "于洪区",
        "code": "210114",
        "py": "Yuhong Qu",
        "jp": "yhq",
        "qp": "YuhongQu"
}, {
    "cName": "辽中区",
        "code": "210115",
        "py": "Liaozhong Qu",
        "jp": "lzq",
        "qp": "LiaozhongQu"
}, {
    "cName": "新民市",
        "code": "210181",
        "py": "Xinmin Shi",
        "jp": "xms",
        "qp": "XinminShi"
}, {
    "cName": "康平县",
        "code": "210123",
        "py": "Kangping Xian",
        "jp": "kpx",
        "qp": "KangpingXian"
}, {
    "cName": "法库县",
        "code": "210124",
        "py": "Faku Xian",
        "jp": "fkx",
        "qp": "FakuXian"
}, {
    "cName": "大连市",
        "code": "210200",
        "py": "Dalian Shi",
        "jp": "dls",
        "qp": "DalianShi"
}, {
    "cName": "西岗区",
        "code": "210203",
        "py": "Xigang Qu",
        "jp": "xgq",
        "qp": "XigangQu"
}, {
    "cName": "中山区",
        "code": "210202",
        "py": "Zhongshan Qu",
        "jp": "zsq",
        "qp": "ZhongshanQu"
}, {
    "cName": "沙河口区",
        "code": "210204",
        "py": "Shahekou Qu",
        "jp": "shkq",
        "qp": "ShahekouQu"
}, {
    "cName": "甘井子区",
        "code": "210211",
        "py": "Ganjingzi Qu",
        "jp": "gjzq",
        "qp": "GanjingziQu"
}, {
    "cName": "旅顺口区",
        "code": "210212",
        "py": "L眉shunkou Qu",
        "jp": "lskq",
        "qp": "L眉shunkouQu"
}, {
    "cName": "金州区",
        "code": "210213",
        "py": "Jinzhou Qu",
        "jp": "jzq",
        "qp": "JinzhouQu"
}, {
    "cName": "瓦房店市",
        "code": "210281",
        "py": "Wafangdian Shi",
        "jp": "wfds",
        "qp": "WafangdianShi"
}, {
    "cName": "普兰店区",
        "code": "210214",
        "py": "Pulandian Qu",
        "jp": "pldq",
        "qp": "PulandianQu"
}, {
    "cName": "庄河市",
        "code": "210283",
        "py": "Zhuanghe Shi",
        "jp": "zhs",
        "qp": "ZhuangheShi"
}, {
    "cName": "长海县",
        "code": "210224",
        "py": "Changhai Xian",
        "jp": "chx",
        "qp": "ChanghaiXian"
}, {
    "cName": "鞍山市",
        "code": "210300",
        "py": "Anshan Shi",
        "jp": "ass",
        "qp": "AnshanShi"
}, {
    "cName": "铁东区",
        "code": "210302",
        "py": "Tiedong Qu",
        "jp": "tdq",
        "qp": "TiedongQu"
}, {
    "cName": "铁西区",
        "code": "210303",
        "py": "Tiexi Qu",
        "jp": "txq",
        "qp": "TiexiQu"
}, {
    "cName": "立山区",
        "code": "210304",
        "py": "Lishan Qu",
        "jp": "lsq",
        "qp": "LishanQu"
}, {
    "cName": "千山区",
        "code": "210311",
        "py": "Qianshan Qu",
        "jp": "qsq",
        "qp": "QianshanQu"
}, {
    "cName": "海城市",
        "code": "210381",
        "py": "Haicheng Shi",
        "jp": "hcs",
        "qp": "HaichengShi"
}, {
    "cName": "台安县",
        "code": "210321",
        "py": "Tai&#39;an Xian",
        "jp": "tax",
        "qp": "TaianXian"
}, {
    "cName": "岫岩满族自治县",
        "code": "210323",
        "py": "Xiuyan Manzu Zizhixian",
        "jp": "xymzzzx",
        "qp": "XiuyanManzuZizhixian"
}, {
    "cName": "抚顺市",
        "code": "210400",
        "py": "Fushun Shi",
        "jp": "fss",
        "qp": "FushunShi"
}, {
    "cName": "顺城区",
        "code": "210411",
        "py": "Shuncheng Qu",
        "jp": "scq",
        "qp": "ShunchengQu"
}, {
    "cName": "新抚区",
        "code": "210402",
        "py": "Xinfu Qu",
        "jp": "xfq",
        "qp": "XinfuQu"
}, {
    "cName": "东洲区",
        "code": "210403",
        "py": "Dongzhou Qu",
        "jp": "dzq",
        "qp": "DongzhouQu"
}, {
    "cName": "望花区",
        "code": "210404",
        "py": "Wanghua Qu",
        "jp": "whq",
        "qp": "WanghuaQu"
}, {
    "cName": "抚顺县",
        "code": "210421",
        "py": "Fushun Xian",
        "jp": "fsx",
        "qp": "FushunXian"
}, {
    "cName": "新宾满族自治县",
        "code": "210422",
        "py": "Xinbin Manzu Zizhixian",
        "jp": "xbmzzzx",
        "qp": "XinbinManzuZizhixian"
}, {
    "cName": "清原满族自治县",
        "code": "210423",
        "py": "Qingyuan Manzu Zizhixian",
        "jp": "qymzzzx",
        "qp": "QingyuanManzuZizhixian"
}, {
    "cName": "本溪市",
        "code": "210500",
        "py": "Benxi Shi",
        "jp": "bxs",
        "qp": "BenxiShi"
}, {
    "cName": "平山区",
        "code": "210502",
        "py": "Pingshan Qu",
        "jp": "psq",
        "qp": "PingshanQu"
}, {
    "cName": "溪湖区",
        "code": "210503",
        "py": "Xihu Qu",
        "jp": "xhq",
        "qp": "XihuQu"
}, {
    "cName": "明山区",
        "code": "210504",
        "py": "Mingshan Qu",
        "jp": "msq",
        "qp": "MingshanQu"
}, {
    "cName": "南芬区",
        "code": "210505",
        "py": "Nanfen Qu",
        "jp": "nfq",
        "qp": "NanfenQu"
}, {
    "cName": "本溪满族自治县",
        "code": "210521",
        "py": "Benxi Manzu Zizhixian",
        "jp": "bxmzzzx",
        "qp": "BenxiManzuZizhixian"
}, {
    "cName": "桓仁满族自治县",
        "code": "210522",
        "py": "Huanren Manzu Zizhixian",
        "jp": "hrmzzzx",
        "qp": "HuanrenManzuZizhixian"
}, {
    "cName": "丹东市",
        "code": "210600",
        "py": "Dandong Shi",
        "jp": "dds",
        "qp": "DandongShi"
}, {
    "cName": "振兴区",
        "code": "210603",
        "py": "Zhenxing Qu",
        "jp": "zxq",
        "qp": "ZhenxingQu"
}, {
    "cName": "元宝区",
        "code": "210602",
        "py": "Yuanbao Qu",
        "jp": "ybq",
        "qp": "YuanbaoQu"
}, {
    "cName": "振安区",
        "code": "210604",
        "py": "Zhen&#39;an Qu",
        "jp": "zaq",
        "qp": "ZhenanQu"
}, {
    "cName": "东港市",
        "code": "210681",
        "py": "Donggang Shi",
        "jp": "dgs",
        "qp": "DonggangShi"
}, {
    "cName": "凤城市",
        "code": "210682",
        "py": "Fengcheng Shi",
        "jp": "fcs",
        "qp": "FengchengShi"
}, {
    "cName": "宽甸满族自治县",
        "code": "210624",
        "py": "Kuandian Manzu Zizhixian",
        "jp": "kdmzzzx",
        "qp": "KuandianManzuZizhixian"
}, {
    "cName": "锦州市",
        "code": "210700",
        "py": "Jinzhou Shi",
        "jp": "jzs",
        "qp": "JinzhouShi"
}, {
    "cName": "太和区",
        "code": "210711",
        "py": "Taihe Qu",
        "jp": "thq",
        "qp": "TaiheQu"
}, {
    "cName": "古塔区",
        "code": "210702",
        "py": "Guta Qu",
        "jp": "gtq",
        "qp": "GutaQu"
}, {
    "cName": "凌河区",
        "code": "210703",
        "py": "Linghe Qu",
        "jp": "lhq",
        "qp": "LingheQu"
}, {
    "cName": "凌海市",
        "code": "210781",
        "py": "Linghai Shi",
        "jp": "lhs",
        "qp": "LinghaiShi"
}, {
    "cName": "北镇市",
        "code": "210782",
        "py": "Beizhen Shi",
        "jp": "bzs",
        "qp": "BeizhenShi"
}, {
    "cName": "黑山县",
        "code": "210726",
        "py": "Heishan Xian",
        "jp": "hsx",
        "qp": "HeishanXian"
}, {
    "cName": "义县",
        "code": "210727",
        "py": "Yi Xian",
        "jp": "yx",
        "qp": "YiXian"
}, {
    "cName": "营口市",
        "code": "210800",
        "py": "Yingkou Shi",
        "jp": "yks",
        "qp": "YingkouShi"
}, {
    "cName": "站前区",
        "code": "210802",
        "py": "Zhanqian Qu",
        "jp": "zqq",
        "qp": "ZhanqianQu"
}, {
    "cName": "西市区",
        "code": "210803",
        "py": "Xishi Qu",
        "jp": "xsq",
        "qp": "XishiQu"
}, {
    "cName": "鲅鱼圈区",
        "code": "210804",
        "py": "Bayuquan Qu",
        "jp": "byqq",
        "qp": "BayuquanQu"
}, {
    "cName": "老边区",
        "code": "210811",
        "py": "Laobian Qu",
        "jp": "lbq",
        "qp": "LaobianQu"
}, {
    "cName": "盖州市",
        "code": "210881",
        "py": "Gaizhou Shi",
        "jp": "gzs",
        "qp": "GaizhouShi"
}, {
    "cName": "大石桥市",
        "code": "210882",
        "py": "Dashiqiao Shi",
        "jp": "dsqs",
        "qp": "DashiqiaoShi"
}, {
    "cName": "阜新市",
        "code": "210900",
        "py": "Fuxin Shi",
        "jp": "fxs",
        "qp": "FuxinShi"
}, {
    "cName": "细河区",
        "code": "210911",
        "py": "Xihe Qu",
        "jp": "xhq",
        "qp": "XiheQu"
}, {
    "cName": "海州区",
        "code": "210902",
        "py": "Haizhou Qu",
        "jp": "hzq",
        "qp": "HaizhouQu"
}, {
    "cName": "新邱区",
        "code": "210903",
        "py": "Xinqiu Qu",
        "jp": "xqq",
        "qp": "XinqiuQu"
}, {
    "cName": "太平区",
        "code": "210904",
        "py": "Taiping Qu",
        "jp": "tpq",
        "qp": "TaipingQu"
}, {
    "cName": "清河门区",
        "code": "210905",
        "py": "Qinghemen Qu",
        "jp": "qhmq",
        "qp": "QinghemenQu"
}, {
    "cName": "彰武县",
        "code": "210922",
        "py": "Zhangwu Xian",
        "jp": "zwx",
        "qp": "ZhangwuXian"
}, {
    "cName": "阜新蒙古族自治县",
        "code": "210921",
        "py": "Fuxin Mengguzu Zizhixian",
        "jp": "fxmgzzzx",
        "qp": "FuxinMengguzuZizhixian"
}, {
    "cName": "辽阳市",
        "code": "211000",
        "py": "Liaoyang Shi",
        "jp": "lys",
        "qp": "LiaoyangShi"
}, {
    "cName": "白塔区",
        "code": "211002",
        "py": "Baita Qu",
        "jp": "btq",
        "qp": "BaitaQu"
}, {
    "cName": "文圣区",
        "code": "211003",
        "py": "Wensheng Qu",
        "jp": "wsq",
        "qp": "WenshengQu"
}, {
    "cName": "宏伟区",
        "code": "211004",
        "py": "Hongwei Qu",
        "jp": "hwq",
        "qp": "HongweiQu"
}, {
    "cName": "弓长岭区",
        "code": "211005",
        "py": "Gongchangling Qu",
        "jp": "gclq",
        "qp": "GongchanglingQu"
}, {
    "cName": "太子河区",
        "code": "211011",
        "py": "Taizihe Qu",
        "jp": "tzhq",
        "qp": "TaiziheQu"
}, {
    "cName": "灯塔市",
        "code": "211081",
        "py": "Dengta Shi",
        "jp": "dts",
        "qp": "DengtaShi"
}, {
    "cName": "辽阳县",
        "code": "211021",
        "py": "Liaoyang Xian",
        "jp": "lyx",
        "qp": "LiaoyangXian"
}, {
    "cName": "盘锦市",
        "code": "211100",
        "py": "Panjin Shi",
        "jp": "pjs",
        "qp": "PanjinShi"
}, {
    "cName": "兴隆台区",
        "code": "211103",
        "py": "Xinglongtai Qu",
        "jp": "xltq",
        "qp": "XinglongtaiQu"
}, {
    "cName": "双台子区",
        "code": "211102",
        "py": "Shuangtaizi Qu",
        "jp": "stzq",
        "qp": "ShuangtaiziQu"
}, {
    "cName": "大洼区",
        "code": "211104",
        "py": "Dawa Qu",
        "jp": "dwq",
        "qp": "DawaQu"
}, {
    "cName": "盘山县",
        "code": "211122",
        "py": "Panshan Xian",
        "jp": "psx",
        "qp": "PanshanXian"
}, {
    "cName": "铁岭市",
        "code": "211200",
        "py": "Tieling Shi",
        "jp": "tls",
        "qp": "TielingShi"
}, {
    "cName": "银州区",
        "code": "211202",
        "py": "Yinzhou Qu",
        "jp": "yzq",
        "qp": "YinzhouQu"
}, {
    "cName": "清河区",
        "code": "211204",
        "py": "Qinghe Qu",
        "jp": "qhq",
        "qp": "QingheQu"
}, {
    "cName": "调兵山市",
        "code": "211281",
        "py": "Diaobingshan Shi",
        "jp": "dbss",
        "qp": "DiaobingshanShi"
}, {
    "cName": "开原市",
        "code": "211282",
        "py": "Kaiyuan Shi",
        "jp": "kys",
        "qp": "KaiyuanShi"
}, {
    "cName": "铁岭县",
        "code": "211221",
        "py": "Tieling Xian",
        "jp": "tlx",
        "qp": "TielingXian"
}, {
    "cName": "西丰县",
        "code": "211223",
        "py": "Xifeng Xian",
        "jp": "xfx",
        "qp": "XifengXian"
}, {
    "cName": "昌图县",
        "code": "211224",
        "py": "Changtu Xian",
        "jp": "ctx",
        "qp": "ChangtuXian"
}, {
    "cName": "朝阳市",
        "code": "211300",
        "py": "Chaoyang Shi",
        "jp": "cys",
        "qp": "ChaoyangShi"
}, {
    "cName": "双塔区",
        "code": "211302",
        "py": "Shuangta Qu",
        "jp": "stq",
        "qp": "ShuangtaQu"
}, {
    "cName": "龙城区",
        "code": "211303",
        "py": "Longcheng Qu",
        "jp": "lcq",
        "qp": "LongchengQu"
}, {
    "cName": "北票市",
        "code": "211381",
        "py": "Beipiao Shi",
        "jp": "bps",
        "qp": "BeipiaoShi"
}, {
    "cName": "凌源市",
        "code": "211382",
        "py": "Lingyuan Shi",
        "jp": "lys",
        "qp": "LingyuanShi"
}, {
    "cName": "朝阳县",
        "code": "211321",
        "py": "Chaoyang Xian",
        "jp": "cyx",
        "qp": "ChaoyangXian"
}, {
    "cName": "建平县",
        "code": "211322",
        "py": "Jianping Xian",
        "jp": "jpx",
        "qp": "JianpingXian"
}, {
    "cName": "喀喇沁左翼蒙古族自治县",
        "code": "211324",
        "py": "Kalaqin Zuoyi Mengguzu Zizhixian",
        "jp": "klqzymgzzzx",
        "qp": "KalaqinzuoyiMengguzuZizhixian"
}, {
    "cName": "葫芦岛市",
        "code": "211400",
        "py": "Huludao Shi",
        "jp": "hlds",
        "qp": "HuludaoShi"
}, {
    "cName": "龙港区",
        "code": "211403",
        "py": "Longgang Qu",
        "jp": "lgq",
        "qp": "LonggangQu"
}, {
    "cName": "连山区",
        "code": "211402",
        "py": "Lianshan Qu",
        "jp": "lsq",
        "qp": "LianshanQu"
}, {
    "cName": "南票区",
        "code": "211404",
        "py": "Nanpiao Qu",
        "jp": "npq",
        "qp": "NanpiaoQu"
}, {
    "cName": "兴城市",
        "code": "211481",
        "py": "Xingcheng Shi",
        "jp": "xcs",
        "qp": "XingchengShi"
}, {
    "cName": "绥中县",
        "code": "211421",
        "py": "Suizhong Xian",
        "jp": "szx",
        "qp": "SuizhongXian"
}, {
    "cName": "建昌县",
        "code": "211422",
        "py": "Jianchang Xian",
        "jp": "jcx",
        "qp": "JianchangXian"
}, {
    "cName": "吉林省",
        "code": "220000",
        "py": "Jilin Sheng",
        "jp": "jls",
        "qp": "JilinSheng"
}, {
    "cName": "长春市",
        "code": "220100",
        "py": "Changchun Shi",
        "jp": "ccs",
        "qp": "ChangchunShi"
}, {
    "cName": "南关区",
        "code": "220102",
        "py": "Nanguan Qu",
        "jp": "ngq",
        "qp": "NanguanQu"
}, {
    "cName": "宽城区",
        "code": "220103",
        "py": "Kuancheng Qu",
        "jp": "kcq",
        "qp": "KuanchengQu"
}, {
    "cName": "朝阳区",
        "code": "220104",
        "py": "Chaoyang Qu",
        "jp": "cyq",
        "qp": "ChaoyangQu"
}, {
    "cName": "二道区",
        "code": "220105",
        "py": "Erdao Qu",
        "jp": "edq",
        "qp": "ErdaoQu"
}, {
    "cName": "绿园区",
        "code": "220106",
        "py": "L眉yuan Qu",
        "jp": "lyq",
        "qp": "L眉yuanQu"
}, {
    "cName": "双阳区",
        "code": "220112",
        "py": "Shuangyang Qu",
        "jp": "syq",
        "qp": "ShuangyangQu"
}, {
    "cName": "九台区",
        "code": "220113",
        "py": "Jiutai Qu",
        "jp": "jtq",
        "qp": "JiutaiQu"
}, {
    "cName": "榆树市",
        "code": "220182",
        "py": "Yushu Shi",
        "jp": "yss",
        "qp": "YushuShi"
}, {
    "cName": "德惠市",
        "code": "220183",
        "py": "Dehui Shi",
        "jp": "dhs",
        "qp": "DehuiShi"
}, {
    "cName": "农安县",
        "code": "220122",
        "py": "Nong&#39;an Xian",
        "jp": "nax",
        "qp": "NonganXian"
}, {
    "cName": "吉林市",
        "code": "220200",
        "py": "Jilin Shi",
        "jp": "jls",
        "qp": "JilinShi"
}, {
    "cName": "船营区",
        "code": "220204",
        "py": "Chuanying Qu",
        "jp": "cyq",
        "qp": "ChuanyingQu"
}, {
    "cName": "昌邑区",
        "code": "220202",
        "py": "Changyi Qu",
        "jp": "cyq",
        "qp": "ChangyiQu"
}, {
    "cName": "龙潭区",
        "code": "220203",
        "py": "Longtan Qu",
        "jp": "ltq",
        "qp": "LongtanQu"
}, {
    "cName": "丰满区",
        "code": "220211",
        "py": "Fengman Qu",
        "jp": "fmq",
        "qp": "FengmanQu"
}, {
    "cName": "蛟河市",
        "code": "220281",
        "py": "Jiaohe Shi",
        "jp": "jhs",
        "qp": "JiaoheShi"
}, {
    "cName": "桦甸市",
        "code": "220282",
        "py": "Huadian Shi",
        "jp": "hds",
        "qp": "HuadianShi"
}, {
    "cName": "舒兰市",
        "code": "220283",
        "py": "Shulan Shi",
        "jp": "sls",
        "qp": "ShulanShi"
}, {
    "cName": "磐石市",
        "code": "220284",
        "py": "Panshi Shi",
        "jp": "pss",
        "qp": "PanshiShi"
}, {
    "cName": "永吉县",
        "code": "220221",
        "py": "Yongji Xian",
        "jp": "yjx",
        "qp": "YongjiXian"
}, {
    "cName": "四平市",
        "code": "220300",
        "py": "Siping Shi",
        "jp": "sps",
        "qp": "SipingShi"
}, {
    "cName": "铁西区",
        "code": "220302",
        "py": "Tiexi Qu",
        "jp": "txq",
        "qp": "TiexiQu"
}, {
    "cName": "铁东区",
        "code": "220303",
        "py": "Tiedong Qu",
        "jp": "tdq",
        "qp": "TiedongQu"
}, {
    "cName": "公主岭市",
        "code": "220381",
        "py": "Gongzhuling Shi",
        "jp": "gzls",
        "qp": "GongzhulingShi"
}, {
    "cName": "双辽市",
        "code": "220382",
        "py": "Shuangliao Shi",
        "jp": "sls",
        "qp": "ShuangliaoShi"
}, {
    "cName": "梨树县",
        "code": "220322",
        "py": "Lishu Xian",
        "jp": "lsx",
        "qp": "LishuXian"
}, {
    "cName": "伊通满族自治县",
        "code": "220323",
        "py": "Yitong Manzu Zizhixian",
        "jp": "ytmzzzx",
        "qp": "YitongManzuZizhixian"
}, {
    "cName": "辽源市",
        "code": "220400",
        "py": "Liaoyuan Shi",
        "jp": "lys",
        "qp": "LiaoyuanShi"
}, {
    "cName": "龙山区",
        "code": "220402",
        "py": "Longshan Qu",
        "jp": "lsq",
        "qp": "LongshanQu"
}, {
    "cName": "西安区",
        "code": "220403",
        "py": "Xi&#39;an Qu",
        "jp": "xaq",
        "qp": "XianQu"
}, {
    "cName": "东丰县",
        "code": "220421",
        "py": "Dongfeng Xian",
        "jp": "dfx",
        "qp": "DongfengXian"
}, {
    "cName": "东辽县",
        "code": "220422",
        "py": "Dongliao Xian",
        "jp": "dlx",
        "qp": "DongliaoXian"
}, {
    "cName": "通化市",
        "code": "220500",
        "py": "Tonghua Shi",
        "jp": "ths",
        "qp": "TonghuaShi"
}, {
    "cName": "东昌区",
        "code": "220502",
        "py": "Dongchang Qu",
        "jp": "dcq",
        "qp": "DongchangQu"
}, {
    "cName": "二道江区",
        "code": "220503",
        "py": "Erdaojiang Qu",
        "jp": "edjq",
        "qp": "ErdaojiangQu"
}, {
    "cName": "梅河口市",
        "code": "220581",
        "py": "Meihekou Shi",
        "jp": "mhks",
        "qp": "MeihekouShi"
}, {
    "cName": "集安市",
        "code": "220582",
        "py": "Ji&#39;an Shi",
        "jp": "jas",
        "qp": "JianShi"
}, {
    "cName": "通化县",
        "code": "220521",
        "py": "Tonghua Xian",
        "jp": "thx",
        "qp": "TonghuaXian"
}, {
    "cName": "辉南县",
        "code": "220523",
        "py": "Huinan Xian",
        "jp": "hnx",
        "qp": "HuinanXian"
}, {
    "cName": "柳河县",
        "code": "220524",
        "py": "Liuhe Xian",
        "jp": "lhx",
        "qp": "LiuheXian"
}, {
    "cName": "白山市",
        "code": "220600",
        "py": "Baishan Shi",
        "jp": "bss",
        "qp": "BaishanShi"
}, {
    "cName": "浑江区",
        "code": "220602",
        "py": "Hunjiang Qu",
        "jp": "hjq",
        "qp": "HunjiangQu"
}, {
    "cName": "江源区",
        "code": "220605",
        "py": "Jiangyuan Qu",
        "jp": "jyq",
        "qp": "JiangyuanQu"
}, {
    "cName": "临江市",
        "code": "220681",
        "py": "Linjiang Shi",
        "jp": "ljs",
        "qp": "LinjiangShi"
}, {
    "cName": "抚松县",
        "code": "220621",
        "py": "Fusong Xian",
        "jp": "fsx",
        "qp": "FusongXian"
}, {
    "cName": "靖宇县",
        "code": "220622",
        "py": "Jingyu Xian",
        "jp": "jyx",
        "qp": "JingyuXian"
}, {
    "cName": "长白朝鲜族自治县",
        "code": "220623",
        "py": "Changbai Chaoxianzu Zizhixian",
        "jp": "cbcxzzzx",
        "qp": "ChangbaiChaoxianzuZizhixian"
}, {
    "cName": "松原市",
        "code": "220700",
        "py": "Songyuan Shi",
        "jp": "sys",
        "qp": "SongyuanShi"
}, {
    "cName": "宁江区",
        "code": "220702",
        "py": "Ningjiang Qu",
        "jp": "njq",
        "qp": "NingjiangQu"
}, {
    "cName": "扶余市",
        "code": "220781",
        "py": "Fuyu Shi",
        "jp": "fys",
        "qp": "FuyuShi"
}, {
    "cName": "长岭县",
        "code": "220722",
        "py": "Changling Xian",
        "jp": "clx",
        "qp": "ChanglingXian"
}, {
    "cName": "乾安县",
        "code": "220723",
        "py": "Qian&#39;an Xian",
        "jp": "qax",
        "qp": "QiananXian"
}, {
    "cName": "前郭尔罗斯蒙古族自治县",
        "code": "220721",
        "py": "Qian Guo&#39;erluosi Mengguzu Zizhixian",
        "jp": "qgelsmgzzzx",
        "qp": "QianguoerluosiMengguzuZizhixian"
}, {
    "cName": "白城市",
        "code": "220800",
        "py": "Baicheng Shi",
        "jp": "bcs",
        "qp": "BaichengShi"
}, {
    "cName": "洮北区",
        "code": "220802",
        "py": "Taobei Qu",
        "jp": "tbq",
        "qp": "TaobeiQu"
}, {
    "cName": "洮南市",
        "code": "220881",
        "py": "Taonan Shi",
        "jp": "tns",
        "qp": "TaonanShi"
}, {
    "cName": "大安市",
        "code": "220882",
        "py": "Da&#39;an Shi",
        "jp": "das",
        "qp": "DaanShi"
}, {
    "cName": "镇赉县",
        "code": "220821",
        "py": "Zhenlai Xian",
        "jp": "zlx",
        "qp": "ZhenlaiXian"
}, {
    "cName": "通榆县",
        "code": "220822",
        "py": "Tongyu Xian",
        "jp": "tyx",
        "qp": "TongyuXian"
}, {
    "cName": "延边朝鲜族自治州",
        "code": "222400",
        "py": "Yanbian Chaoxianzu Zizhizhou",
        "jp": "ybcxzzzz",
        "qp": "YanbianChaoxianzuZizhizhou"
}, {
    "cName": "延吉市",
        "code": "222401",
        "py": "Yanji Shi",
        "jp": "yjs",
        "qp": "YanjiShi"
}, {
    "cName": "图们市",
        "code": "222402",
        "py": "Tumen Shi",
        "jp": "tms",
        "qp": "TumenShi"
}, {
    "cName": "敦化市",
        "code": "222403",
        "py": "Dunhua Shi",
        "jp": "dhs",
        "qp": "DunhuaShi"
}, {
    "cName": "珲春市",
        "code": "222404",
        "py": "Hunchun Shi",
        "jp": "hcs",
        "qp": "HunchunShi"
}, {
    "cName": "龙井市",
        "code": "222405",
        "py": "Longjing Shi",
        "jp": "ljs",
        "qp": "LongjingShi"
}, {
    "cName": "和龙市",
        "code": "222406",
        "py": "Helong Shi",
        "jp": "hls",
        "qp": "HelongShi"
}, {
    "cName": "汪清县",
        "code": "222424",
        "py": "Wangqing Xian",
        "jp": "wqx",
        "qp": "WangqingXian"
}, {
    "cName": "安图县",
        "code": "222426",
        "py": "Antu Xian",
        "jp": "atx",
        "qp": "AntuXian"
}, {
    "cName": "黑龙江省",
        "code": "230000",
        "py": "Heilongjiang Sheng",
        "jp": "hljs",
        "qp": "HeilongjiangSheng"
}, {
    "cName": "哈尔滨市",
        "code": "230100",
        "py": "Ha&#39;erbin Shi",
        "jp": "hebs",
        "qp": "HaerbinShi"
}, {
    "cName": "松北区",
        "code": "230109",
        "py": "Songbei Qu",
        "jp": "sbq",
        "qp": "SongbeiQu"
}, {
    "cName": "道里区",
        "code": "230102",
        "py": "Daoli Qu",
        "jp": "dlq",
        "qp": "DaoliQu"
}, {
    "cName": "南岗区",
        "code": "230103",
        "py": "Nangang Qu",
        "jp": "ngq",
        "qp": "NangangQu"
}, {
    "cName": "道外区",
        "code": "230104",
        "py": "Daowai Qu",
        "jp": "dwq",
        "qp": "DaowaiQu"
}, {
    "cName": "平房区",
        "code": "230108",
        "py": "Pingfang Qu",
        "jp": "pfq",
        "qp": "PingfangQu"
}, {
    "cName": "香坊区",
        "code": "230110",
        "py": "Xiangfang Qu",
        "jp": "xfq",
        "qp": "XiangfangQu"
}, {
    "cName": "呼兰区",
        "code": "230111",
        "py": "Hulan Qu",
        "jp": "hlq",
        "qp": "HulanQu"
}, {
    "cName": "阿城区",
        "code": "230112",
        "py": "Acheng Qu",
        "jp": "acq",
        "qp": "AchengQu"
}, {
    "cName": "双城区",
        "code": "230113",
        "py": "Shuangcheng Qu",
        "jp": "scq",
        "qp": "ShuangchengQu"
}, {
    "cName": "尚志市",
        "code": "230183",
        "py": "Shangzhi Shi",
        "jp": "szs",
        "qp": "ShangzhiShi"
}, {
    "cName": "五常市",
        "code": "230184",
        "py": "Wuchang Shi",
        "jp": "wcs",
        "qp": "WuchangShi"
}, {
    "cName": "依兰县",
        "code": "230123",
        "py": "Yilan Xian",
        "jp": "ylx",
        "qp": "YilanXian"
}, {
    "cName": "方正县",
        "code": "230124",
        "py": "Fangzheng Xian",
        "jp": "fzx",
        "qp": "FangzhengXian"
}, {
    "cName": "宾县",
        "code": "230125",
        "py": "Bin Xian",
        "jp": "bx",
        "qp": "BinXian"
}, {
    "cName": "巴彦县",
        "code": "230126",
        "py": "Bayan Xian",
        "jp": "byx",
        "qp": "BayanXian"
}, {
    "cName": "木兰县",
        "code": "230127",
        "py": "Mulan Xian",
        "jp": "mlx",
        "qp": "MulanXian"
}, {
    "cName": "通河县",
        "code": "230128",
        "py": "Tonghe Xian",
        "jp": "thx",
        "qp": "TongheXian"
}, {
    "cName": "延寿县",
        "code": "230129",
        "py": "Yanshou Xian",
        "jp": "ysx",
        "qp": "YanshouXian"
}, {
    "cName": "齐齐哈尔市",
        "code": "230200",
        "py": "Qiqiha&#39;er Shi",
        "jp": "qqhes",
        "qp": "QiqihaerShi"
}, {
    "cName": "建华区",
        "code": "230203",
        "py": "Jianhua Qu",
        "jp": "jhq",
        "qp": "JianhuaQu"
}, {
    "cName": "龙沙区",
        "code": "230202",
        "py": "Longsha Qu",
        "jp": "lsq",
        "qp": "LongshaQu"
}, {
    "cName": "铁锋区",
        "code": "230204",
        "py": "Tiefeng Qu",
        "jp": "tfq",
        "qp": "TiefengQu"
}, {
    "cName": "昂昂溪区",
        "code": "230205",
        "py": "Ang&#39;angxi Qu",
        "jp": "aaxq",
        "qp": "AngangxiQu"
}, {
    "cName": "富拉尔基区",
        "code": "230206",
        "py": "Fula&#39;erji Qu",
        "jp": "flejq",
        "qp": "FulaerjiQu"
}, {
    "cName": "碾子山区",
        "code": "230207",
        "py": "Nianzishan Qu",
        "jp": "nzsq",
        "qp": "NianzishanQu"
}, {
    "cName": "梅里斯达斡尔族区",
        "code": "230208",
        "py": "Meilisi Dawo&#39;erzu Qu",
        "jp": "mlsdwezq",
        "qp": "MeilisiDawoerzuQu"
}, {
    "cName": "讷河市",
        "code": "230281",
        "py": "Nehe Shi",
        "jp": "nhs",
        "qp": "NeheShi"
}, {
    "cName": "龙江县",
        "code": "230221",
        "py": "Longjiang Xian",
        "jp": "ljx",
        "qp": "LongjiangXian"
}, {
    "cName": "依安县",
        "code": "230223",
        "py": "Yi&#39;an Xian",
        "jp": "yax",
        "qp": "YianXian"
}, {
    "cName": "泰来县",
        "code": "230224",
        "py": "Tailai Xian",
        "jp": "tlx",
        "qp": "TailaiXian"
}, {
    "cName": "甘南县",
        "code": "230225",
        "py": "Gannan Xian",
        "jp": "gnx",
        "qp": "GannanXian"
}, {
    "cName": "富裕县",
        "code": "230227",
        "py": "Fuyu Xian",
        "jp": "fyx",
        "qp": "FuyuXian"
}, {
    "cName": "克山县",
        "code": "230229",
        "py": "Keshan Xian",
        "jp": "ksx",
        "qp": "KeshanXian"
}, {
    "cName": "克东县",
        "code": "230230",
        "py": "Kedong Xian",
        "jp": "kdx",
        "qp": "KedongXian"
}, {
    "cName": "拜泉县",
        "code": "230231",
        "py": "Baiquan Xian",
        "jp": "bqx",
        "qp": "BaiquanXian"
}, {
    "cName": "鸡西市",
        "code": "230300",
        "py": "Jixi Shi",
        "jp": "jxs",
        "qp": "JixiShi"
}, {
    "cName": "鸡冠区",
        "code": "230302",
        "py": "Jiguan Qu",
        "jp": "jgq",
        "qp": "JiguanQu"
}, {
    "cName": "恒山区",
        "code": "230303",
        "py": "Hengshan Qu",
        "jp": "hsq",
        "qp": "HengshanQu"
}, {
    "cName": "滴道区",
        "code": "230304",
        "py": "Didao Qu",
        "jp": "ddq",
        "qp": "DidaoQu"
}, {
    "cName": "梨树区",
        "code": "230305",
        "py": "Lishu Qu",
        "jp": "lsq",
        "qp": "LishuQu"
}, {
    "cName": "城子河区",
        "code": "230306",
        "py": "Chengzihe Qu",
        "jp": "czhq",
        "qp": "ChengziheQu"
}, {
    "cName": "麻山区",
        "code": "230307",
        "py": "Mashan Qu",
        "jp": "msq",
        "qp": "MashanQu"
}, {
    "cName": "虎林市",
        "code": "230381",
        "py": "Hulin Shi",
        "jp": "hls",
        "qp": "HulinShi"
}, {
    "cName": "密山市",
        "code": "230382",
        "py": "Mishan Shi",
        "jp": "mss",
        "qp": "MishanShi"
}, {
    "cName": "鸡东县",
        "code": "230321",
        "py": "Jidong Xian",
        "jp": "jdx",
        "qp": "JidongXian"
}, {
    "cName": "鹤岗市",
        "code": "230400",
        "py": "Hegang Shi",
        "jp": "hgs",
        "qp": "HegangShi"
}, {
    "cName": "向阳区",
        "code": "230402",
        "py": "Xiangyang Qu",
        "jp": "xyq",
        "qp": "XiangyangQu"
}, {
    "cName": "工农区",
        "code": "230403",
        "py": "Gongnong Qu",
        "jp": "gnq",
        "qp": "GongnongQu"
}, {
    "cName": "南山区",
        "code": "230404",
        "py": "Nanshan Qu",
        "jp": "nsq",
        "qp": "NanshanQu"
}, {
    "cName": "兴安区",
        "code": "230405",
        "py": "Xing&#39;an Qu",
        "jp": "xaq",
        "qp": "XinganQu"
}, {
    "cName": "东山区",
        "code": "230406",
        "py": "Dongshan Qu",
        "jp": "dsq",
        "qp": "DongshanQu"
}, {
    "cName": "兴山区",
        "code": "230407",
        "py": "Xingshan Qu",
        "jp": "xsq",
        "qp": "XingshanQu"
}, {
    "cName": "萝北县",
        "code": "230421",
        "py": "Luobei Xian",
        "jp": "lbx",
        "qp": "LuobeiXian"
}, {
    "cName": "绥滨县",
        "code": "230422",
        "py": "Suibin Xian",
        "jp": "sbx",
        "qp": "SuibinXian"
}, {
    "cName": "双鸭山市",
        "code": "230500",
        "py": "Shuangyashan Shi",
        "jp": "syss",
        "qp": "ShuangyashanShi"
}, {
    "cName": "尖山区",
        "code": "230502",
        "py": "Jianshan Qu",
        "jp": "jsq",
        "qp": "JianshanQu"
}, {
    "cName": "岭东区",
        "code": "230503",
        "py": "Lingdong Qu",
        "jp": "ldq",
        "qp": "LingdongQu"
}, {
    "cName": "四方台区",
        "code": "230505",
        "py": "Sifangtai Qu",
        "jp": "sftq",
        "qp": "SifangtaiQu"
}, {
    "cName": "宝山区",
        "code": "230506",
        "py": "Baoshan Qu",
        "jp": "bsq",
        "qp": "BaoshanQu"
}, {
    "cName": "集贤县",
        "code": "230521",
        "py": "Jixian Xian",
        "jp": "jxx",
        "qp": "JixianXian"
}, {
    "cName": "友谊县",
        "code": "230522",
        "py": "Youyi Xian",
        "jp": "yyx",
        "qp": "YouyiXian"
}, {
    "cName": "宝清县",
        "code": "230523",
        "py": "Baoqing Xian",
        "jp": "bqx",
        "qp": "BaoqingXian"
}, {
    "cName": "饶河县",
        "code": "230524",
        "py": "Raohe Xian",
        "jp": "rhx",
        "qp": "RaoheXian"
}, {
    "cName": "大庆市",
        "code": "230600",
        "py": "Daqing Shi",
        "jp": "dqs",
        "qp": "DaqingShi"
}, {
    "cName": "萨尔图区",
        "code": "230602",
        "py": "Sa&#39;ertu Qu",
        "jp": "setq",
        "qp": "SaertuQu"
}, {
    "cName": "龙凤区",
        "code": "230603",
        "py": "Longfeng Qu",
        "jp": "lfq",
        "qp": "LongfengQu"
}, {
    "cName": "让胡路区",
        "code": "230604",
        "py": "Ranghulu Qu",
        "jp": "rhlq",
        "qp": "RanghuluQu"
}, {
    "cName": "红岗区",
        "code": "230605",
        "py": "Honggang Qu",
        "jp": "hgq",
        "qp": "HonggangQu"
}, {
    "cName": "大同区",
        "code": "230606",
        "py": "Datong Qu",
        "jp": "dtq",
        "qp": "DatongQu"
}, {
    "cName": "肇州县",
        "code": "230621",
        "py": "Zhaozhou Xian",
        "jp": "zzx",
        "qp": "ZhaozhouXian"
}, {
    "cName": "肇源县",
        "code": "230622",
        "py": "Zhaoyuan Xian",
        "jp": "zyx",
        "qp": "ZhaoyuanXian"
}, {
    "cName": "林甸县",
        "code": "230623",
        "py": "Lindian Xian",
        "jp": "ldx",
        "qp": "LindianXian"
}, {
    "cName": "杜尔伯特蒙古族自治县",
        "code": "230624",
        "py": "Du&#39;erbete Mengguzu Zizhixian",
        "jp": "debtmgzzzx",
        "qp": "DuerbeteMengguzuZizhixian"
}, {
    "cName": "伊春市",
        "code": "230700",
        "py": "Yichun Shi",
        "jp": "ycs",
        "qp": "YichunShi"
}, {
    "cName": "伊春区",
        "code": "230702",
        "py": "Yichun Qu",
        "jp": "ycq",
        "qp": "YichunQu"
}, {
    "cName": "南岔区",
        "code": "230703",
        "py": "Nancha Qu",
        "jp": "ncq",
        "qp": "NanchaQu"
}, {
    "cName": "友好区",
        "code": "230704",
        "py": "Youhao Qu",
        "jp": "yhq",
        "qp": "YouhaoQu"
}, {
    "cName": "西林区",
        "code": "230705",
        "py": "Xilin Qu",
        "jp": "xlq",
        "qp": "XilinQu"
}, {
    "cName": "翠峦区",
        "code": "230706",
        "py": "Cuiluan Qu",
        "jp": "clq",
        "qp": "CuiluanQu"
}, {
    "cName": "新青区",
        "code": "230707",
        "py": "Xinqing Qu",
        "jp": "xqq",
        "qp": "XinqingQu"
}, {
    "cName": "美溪区",
        "code": "230708",
        "py": "Meixi Qu",
        "jp": "mxq",
        "qp": "MeixiQu"
}, {
    "cName": "金山屯区",
        "code": "230709",
        "py": "Jinshantun Qu",
        "jp": "jstq",
        "qp": "JinshantunQu"
}, {
    "cName": "五营区",
        "code": "230710",
        "py": "Wuying Qu",
        "jp": "wyq",
        "qp": "WuyingQu"
}, {
    "cName": "乌马河区",
        "code": "230711",
        "py": "Wumahe Qu",
        "jp": "wmhq",
        "qp": "WumaheQu"
}, {
    "cName": "汤旺河区",
        "code": "230712",
        "py": "Tangwanghe Qu",
        "jp": "twhq",
        "qp": "TangwangheQu"
}, {
    "cName": "带岭区",
        "code": "230713",
        "py": "Dailing Qu",
        "jp": "dlq",
        "qp": "DailingQu"
}, {
    "cName": "乌伊岭区",
        "code": "230714",
        "py": "Wuyiling Qu",
        "jp": "wylq",
        "qp": "WuyilingQu"
}, {
    "cName": "红星区",
        "code": "230715",
        "py": "Hongxing Qu",
        "jp": "hxq",
        "qp": "HongxingQu"
}, {
    "cName": "上甘岭区",
        "code": "230716",
        "py": "Shangganling Qu",
        "jp": "sglq",
        "qp": "ShangganlingQu"
}, {
    "cName": "铁力市",
        "code": "230781",
        "py": "Tieli Shi",
        "jp": "tls",
        "qp": "TieliShi"
}, {
    "cName": "嘉荫县",
        "code": "230722",
        "py": "Jiayin Xian",
        "jp": "jyx",
        "qp": "JiayinXian"
}, {
    "cName": "佳木斯市",
        "code": "230800",
        "py": "Jiamusi Shi",
        "jp": "jmss",
        "qp": "JiamusiShi"
}, {
    "cName": "前进区",
        "code": "230804",
        "py": "Qianjin Qu",
        "jp": "qjq",
        "qp": "QianjinQu"
}, {
    "cName": "向阳区",
        "code": "230803",
        "py": "Xiangyang Qu",
        "jp": "xyq",
        "qp": "XiangyangQu"
}, {
    "cName": "东风区",
        "code": "230805",
        "py": "Dongfeng Qu",
        "jp": "dfq",
        "qp": "DongfengQu"
}, {
    "cName": "郊区",
        "code": "230811",
        "py": "Jiao Qu",
        "jp": "jq",
        "qp": "JiaoQu"
}, {
    "cName": "同江市",
        "code": "230881",
        "py": "Tongjiang Shi",
        "jp": "tjs",
        "qp": "TongjiangShi"
}, {
    "cName": "富锦市",
        "code": "230882",
        "py": "Fujin Shi",
        "jp": "fjs",
        "qp": "FujinShi"
}, {
    "cName": "抚远市",
        "code": "230883",
        "py": "Wuyuan Shi",
        "jp": "wys",
        "qp": "WuyuanShi"
}, {
    "cName": "桦南县",
        "code": "230822",
        "py": "Huanan Xian",
        "jp": "hnx",
        "qp": "HuananXian"
}, {
    "cName": "桦川县",
        "code": "230826",
        "py": "Huachuan Xian",
        "jp": "hcx",
        "qp": "HuachuanXian"
}, {
    "cName": "汤原县",
        "code": "230828",
        "py": "Tangyuan Xian",
        "jp": "tyx",
        "qp": "TangyuanXian"
}, {
    "cName": "七台河市",
        "code": "230900",
        "py": "Qitaihe Shi",
        "jp": "qths",
        "qp": "QitaiheShi"
}, {
    "cName": "桃山区",
        "code": "230903",
        "py": "Taoshan Qu",
        "jp": "tsq",
        "qp": "TaoshanQu"
}, {
    "cName": "新兴区",
        "code": "230902",
        "py": "Xinxing Qu",
        "jp": "xxq",
        "qp": "XinxingQu"
}, {
    "cName": "茄子河区",
        "code": "230904",
        "py": "Qiezihe Qu",
        "jp": "qzhq",
        "qp": "QieziheQu"
}, {
    "cName": "勃利县",
        "code": "230921",
        "py": "Boli Xian",
        "jp": "blx",
        "qp": "BoliXian"
}, {
    "cName": "牡丹江市",
        "code": "231000",
        "py": "Mudanjiang Shi",
        "jp": "mdjs",
        "qp": "MudanjiangShi"
}, {
    "cName": "东安区",
        "code": "231002",
        "py": "Dong&#39;an Qu",
        "jp": "daq",
        "qp": "DonganQu"
}, {
    "cName": "阳明区",
        "code": "231003",
        "py": "Yangming Qu",
        "jp": "ymq",
        "qp": "YangmingQu"
}, {
    "cName": "爱民区",
        "code": "231004",
        "py": "Aimin Qu",
        "jp": "amq",
        "qp": "AiminQu"
}, {
    "cName": "西安区",
        "code": "231005",
        "py": "Xi&#39;an Qu",
        "jp": "xaq",
        "qp": "XianQu"
}, {
    "cName": "绥芬河市",
        "code": "231081",
        "py": "Suifenhe Shi",
        "jp": "sfhs",
        "qp": "SuifenheShi"
}, {
    "cName": "海林市",
        "code": "231083",
        "py": "Hailin Shi",
        "jp": "hls",
        "qp": "HailinShi"
}, {
    "cName": "宁安市",
        "code": "231084",
        "py": "Ning&#39;an Shi",
        "jp": "nas",
        "qp": "NinganShi"
}, {
    "cName": "穆棱市",
        "code": "231085",
        "py": "Muling Shi",
        "jp": "mls",
        "qp": "MulingShi"
}, {
    "cName": "东宁市",
        "code": "231086",
        "py": "Dongning Shi",
        "jp": "dns",
        "qp": "DongningShi"
}, {
    "cName": "林口县",
        "code": "231025",
        "py": "Linkou Xian",
        "jp": "lkx",
        "qp": "LinkouXian"
}, {
    "cName": "黑河市",
        "code": "231100",
        "py": "Heihe Shi",
        "jp": "hhs",
        "qp": "HeiheShi"
}, {
    "cName": "爱辉区",
        "code": "231102",
        "py": "Aihui Qu",
        "jp": "ahq",
        "qp": "AihuiQu"
}, {
    "cName": "北安市",
        "code": "231181",
        "py": "Bei&#39;an Shi",
        "jp": "bas",
        "qp": "BeianShi"
}, {
    "cName": "五大连池市",
        "code": "231182",
        "py": "Wudalianchi Shi",
        "jp": "wdlcs",
        "qp": "WudalianchiShi"
}, {
    "cName": "嫩江县",
        "code": "231121",
        "py": "Nenjiang Xian",
        "jp": "njx",
        "qp": "NenjiangXian"
}, {
    "cName": "逊克县",
        "code": "231123",
        "py": "Xunke Xian",
        "jp": "xkx",
        "qp": "XunkeXian"
}, {
    "cName": "孙吴县",
        "code": "231124",
        "py": "Sunwu Xian",
        "jp": "swx",
        "qp": "SunwuXian"
}, {
    "cName": "绥化市",
        "code": "231200",
        "py": "Suihua Shi",
        "jp": "shs",
        "qp": "SuihuaShi"
}, {
    "cName": "北林区",
        "code": "231202",
        "py": "Beilin Qu",
        "jp": "blq",
        "qp": "BeilinQu"
}, {
    "cName": "安达市",
        "code": "231281",
        "py": "Anda Shi",
        "jp": "ads",
        "qp": "AndaShi"
}, {
    "cName": "肇东市",
        "code": "231282",
        "py": "Zhaodong Shi",
        "jp": "zds",
        "qp": "ZhaodongShi"
}, {
    "cName": "海伦市",
        "code": "231283",
        "py": "Hailun Shi",
        "jp": "hls",
        "qp": "HailunShi"
}, {
    "cName": "望奎县",
        "code": "231221",
        "py": "Wangkui Xian",
        "jp": "wkx",
        "qp": "WangkuiXian"
}, {
    "cName": "兰西县",
        "code": "231222",
        "py": "Lanxi Xian",
        "jp": "lxx",
        "qp": "LanxiXian"
}, {
    "cName": "青冈县",
        "code": "231223",
        "py": "Qinggang Xian",
        "jp": "qgx",
        "qp": "QinggangXian"
}, {
    "cName": "庆安县",
        "code": "231224",
        "py": "Qing&#39;an Xian",
        "jp": "qax",
        "qp": "QinganXian"
}, {
    "cName": "明水县",
        "code": "231225",
        "py": "Mingshui Xian",
        "jp": "msx",
        "qp": "MingshuiXian"
}, {
    "cName": "绥棱县",
        "code": "231226",
        "py": "Suiling Xian",
        "jp": "slx",
        "qp": "SuilingXian"
}, {
    "cName": "大兴安岭地区",
        "code": "232700",
        "py": "Daxing&#39;anling Diqu",
        "jp": "dxaldq",
        "qp": "DaxinganlingDiqu"
}, {
    "cName": "呼玛县",
        "code": "232721",
        "py": "Huma Xian",
        "jp": "hmx",
        "qp": "HumaXian"
}, {
    "cName": "塔河县",
        "code": "232722",
        "py": "Tahe Xian",
        "jp": "thx",
        "qp": "TaheXian"
}, {
    "cName": "漠河县",
        "code": "232723",
        "py": "Mohe Xian",
        "jp": "mhx",
        "qp": "MoheXian"
}, {
    "cName": "上海市",
        "code": "310000",
        "py": "Shanghai Shi",
        "jp": "shs",
        "qp": "ShanghaiShi"
}, {
    "cName": "黄浦区",
        "code": "310101",
        "py": "Huangpu Qu",
        "jp": "hpq",
        "qp": "HuangpuQu"
}, {
    "cName": "徐汇区",
        "code": "310104",
        "py": "Xuhui Qu",
        "jp": "xhq",
        "qp": "XuhuiQu"
}, {
    "cName": "长宁区",
        "code": "310105",
        "py": "Changning Qu",
        "jp": "cnq",
        "qp": "ChangningQu"
}, {
    "cName": "静安区",
        "code": "310106",
        "py": "Jing&#39;an Qu",
        "jp": "jaq",
        "qp": "JinganQu"
}, {
    "cName": "普陀区",
        "code": "310107",
        "py": "Putuo Qu",
        "jp": "ptq",
        "qp": "PutuoQu"
}, {
    "cName": "虹口区",
        "code": "310109",
        "py": "Hongkou Qu",
        "jp": "hkq",
        "qp": "HongkouQu"
}, {
    "cName": "杨浦区",
        "code": "310110",
        "py": "Yangpu Qu",
        "jp": "ypq",
        "qp": "YangpuQu"
}, {
    "cName": "闵行区",
        "code": "310112",
        "py": "Minhang Qu",
        "jp": "mhq",
        "qp": "MinhangQu"
}, {
    "cName": "宝山区",
        "code": "310113",
        "py": "Baoshan Qu",
        "jp": "bsq",
        "qp": "BaoshanQu"
}, {
    "cName": "嘉定区",
        "code": "310114",
        "py": "Jiading Qu",
        "jp": "jdq",
        "qp": "JiadingQu"
}, {
    "cName": "浦东新区",
        "code": "310115",
        "py": "Pudong Xinqu",
        "jp": "pdxq",
        "qp": "PudongXinqu"
}, {
    "cName": "金山区",
        "code": "310116",
        "py": "Jinshan Qu",
        "jp": "jsq",
        "qp": "JinshanQu"
}, {
    "cName": "松江区",
        "code": "310117",
        "py": "Songjiang Qu",
        "jp": "sjq",
        "qp": "SongjiangQu"
}, {
    "cName": "青浦区",
        "code": "310118",
        "py": "Qingpu Qu",
        "jp": "qpq",
        "qp": "QingpuQu"
}, {
    "cName": "奉贤区",
        "code": "310120",
        "py": "Fengxian Qu",
        "jp": "fxq",
        "qp": "FengxianQu"
}, {
    "cName": "崇明区",
        "code": "310151",
        "py": "Chongming Qu",
        "jp": "cmq",
        "qp": "ChongmingQu"
}, {
    "cName": "江苏省",
        "code": "320000",
        "py": "Jiangsu Sheng",
        "jp": "jss",
        "qp": "JiangsuSheng"
}, {
    "cName": "南京市",
        "code": "320100",
        "py": "Nanjing Shi",
        "jp": "njs",
        "qp": "NanjingShi"
}, {
    "cName": "玄武区",
        "code": "320102",
        "py": "Xuanwu Qu",
        "jp": "xwq",
        "qp": "XuanwuQu"
}, {
    "cName": "秦淮区",
        "code": "320104",
        "py": "Qinhuai Qu",
        "jp": "qhq",
        "qp": "QinhuaiQu"
}, {
    "cName": "建邺区",
        "code": "320105",
        "py": "Jianye Qu",
        "jp": "jyq",
        "qp": "JianyeQu"
}, {
    "cName": "鼓楼区",
        "code": "320106",
        "py": "Gulou Qu",
        "jp": "glq",
        "qp": "GulouQu"
}, {
    "cName": "浦口区",
        "code": "320111",
        "py": "Pukou Qu",
        "jp": "pkq",
        "qp": "PukouQu"
}, {
    "cName": "栖霞区",
        "code": "320113",
        "py": "Qixia Qu",
        "jp": "qxq",
        "qp": "QixiaQu"
}, {
    "cName": "雨花台区",
        "code": "320114",
        "py": "Yuhuatai Qu",
        "jp": "yhtq",
        "qp": "YuhuataiQu"
}, {
    "cName": "江宁区",
        "code": "320115",
        "py": "Jiangning Qu",
        "jp": "jnq",
        "qp": "JiangningQu"
}, {
    "cName": "六合区",
        "code": "320116",
        "py": "Liuhe Qu",
        "jp": "lhq",
        "qp": "LiuheQu"
}, {
    "cName": "溧水区",
        "code": "320117",
        "py": "Lishui Qu",
        "jp": "lsq",
        "qp": "LishuiQu"
}, {
    "cName": "高淳区",
        "code": "320118",
        "py": "Gaochun Qu",
        "jp": "gcq",
        "qp": "GaochunQu"
}, {
    "cName": "无锡市",
        "code": "320200",
        "py": "Wuxi Shi",
        "jp": "wxs",
        "qp": "WuxiShi"
}, {
    "cName": "梁溪区",
        "code": "320213",
        "py": "Liangxi Qu",
        "jp": "lxq",
        "qp": "LiangxiQu"
}, {
    "cName": "锡山区",
        "code": "320205",
        "py": "Xishan Qu",
        "jp": "xsq",
        "qp": "XishanQu"
}, {
    "cName": "惠山区",
        "code": "320206",
        "py": "Huishan Qu",
        "jp": "hsq",
        "qp": "HuishanQu"
}, {
    "cName": "滨湖区",
        "code": "320211",
        "py": "Binhu Qu",
        "jp": "bhq",
        "qp": "BinhuQu"
}, {
    "cName": "新吴区",
        "code": "320214",
        "py": "Xinwu Qu",
        "jp": "xwq",
        "qp": "XinwuQu"
}, {
    "cName": "江阴市",
        "code": "320281",
        "py": "Jiangyin Shi",
        "jp": "jys",
        "qp": "JiangyinShi"
}, {
    "cName": "宜兴市",
        "code": "320282",
        "py": "Yixing Shi",
        "jp": "yxs",
        "qp": "YixingShi"
}, {
    "cName": "徐州市",
        "code": "320300",
        "py": "Xuzhou Shi",
        "jp": "xzs",
        "qp": "XuzhouShi"
}, {
    "cName": "云龙区",
        "code": "320303",
        "py": "Yunlong Qu",
        "jp": "ylq",
        "qp": "YunlongQu"
}, {
    "cName": "鼓楼区",
        "code": "320302",
        "py": "Gulou Qu",
        "jp": "glq",
        "qp": "GulouQu"
}, {
    "cName": "贾汪区",
        "code": "320305",
        "py": "Jiawang Qu",
        "jp": "jwq",
        "qp": "JiawangQu"
}, {
    "cName": "泉山区",
        "code": "320311",
        "py": "Quanshan Qu",
        "jp": "qsq",
        "qp": "QuanshanQu"
}, {
    "cName": "铜山区",
        "code": "320312",
        "py": "Tongshan Qu",
        "jp": "tsq",
        "qp": "TongshanQu"
}, {
    "cName": "新沂市",
        "code": "320381",
        "py": "Xinyi Shi",
        "jp": "xys",
        "qp": "XinyiShi"
}, {
    "cName": "邳州市",
        "code": "320382",
        "py": "Pizhou Shi",
        "jp": "pzs",
        "qp": "PizhouShi"
}, {
    "cName": "丰县",
        "code": "320321",
        "py": "Feng Xian",
        "jp": "fx",
        "qp": "FengXian"
}, {
    "cName": "沛县",
        "code": "320322",
        "py": "Pei Xian",
        "jp": "px",
        "qp": "PeiXian"
}, {
    "cName": "睢宁县",
        "code": "320324",
        "py": "Suining Xian",
        "jp": "snx",
        "qp": "SuiningXian"
}, {
    "cName": "常州市",
        "code": "320400",
        "py": "Changzhou Shi",
        "jp": "czs",
        "qp": "ChangzhouShi"
}, {
    "cName": "新北区",
        "code": "320411",
        "py": "Xinbei Qu",
        "jp": "xbq",
        "qp": "XinbeiQu"
}, {
    "cName": "天宁区",
        "code": "320402",
        "py": "Tianning Qu",
        "jp": "tnq",
        "qp": "TianningQu"
}, {
    "cName": "钟楼区",
        "code": "320404",
        "py": "Zhonglou Qu",
        "jp": "zlq",
        "qp": "ZhonglouQu"
}, {
    "cName": "武进区",
        "code": "320412",
        "py": "Wujin Qu",
        "jp": "wjq",
        "qp": "WujinQu"
}, {
    "cName": "金坛区",
        "code": "320413",
        "py": "Jintan Qu",
        "jp": "jtq",
        "qp": "JintanQu"
}, {
    "cName": "溧阳市",
        "code": "320481",
        "py": "Liyang Shi",
        "jp": "lys",
        "qp": "LiyangShi"
}, {
    "cName": "苏州市",
        "code": "320500",
        "py": "Suzhou Shi",
        "jp": "szs",
        "qp": "SuzhouShi"
}, {
    "cName": "姑苏区",
        "code": "320508",
        "py": "Gusu Qu",
        "jp": "gsq",
        "qp": "GusuQu"
}, {
    "cName": "虎丘区",
        "code": "320505",
        "py": "Huqiu Qu",
        "jp": "hqq",
        "qp": "HuqiuQu"
}, {
    "cName": "吴中区",
        "code": "320506",
        "py": "Wuzhong Qu",
        "jp": "wzq",
        "qp": "WuzhongQu"
}, {
    "cName": "相城区",
        "code": "320507",
        "py": "Xiangcheng Qu",
        "jp": "xcq",
        "qp": "XiangchengQu"
}, {
    "cName": "吴江区",
        "code": "320509",
        "py": "Wujiang Qu",
        "jp": "wjq",
        "qp": "WujiangQu"
}, {
    "cName": "常熟市",
        "code": "320581",
        "py": "Changshu Shi",
        "jp": "css",
        "qp": "ChangshuShi"
}, {
    "cName": "张家港市",
        "code": "320582",
        "py": "Zhangjiagang Shi",
        "jp": "zjgs",
        "qp": "ZhangjiagangShi"
}, {
    "cName": "昆山市",
        "code": "320583",
        "py": "Kunshan Shi",
        "jp": "kss",
        "qp": "KunshanShi"
}, {
    "cName": "太仓市",
        "code": "320585",
        "py": "Taicang Shi",
        "jp": "tcs",
        "qp": "TaicangShi"
}, {
    "cName": "南通市",
        "code": "320600",
        "py": "Nantong Shi",
        "jp": "nts",
        "qp": "NantongShi"
}, {
    "cName": "崇川区",
        "code": "320602",
        "py": "Chongchuan Qu",
        "jp": "ccq",
        "qp": "ChongchuanQu"
}, {
    "cName": "港闸区",
        "code": "320611",
        "py": "Gangzha Qu",
        "jp": "gzq",
        "qp": "GangzhaQu"
}, {
    "cName": "通州区",
        "code": "320612",
        "py": "Tongzhou Qu",
        "jp": "tzq",
        "qp": "TongzhouQu"
}, {
    "cName": "启东市",
        "code": "320681",
        "py": "Qidong Shi",
        "jp": "qds",
        "qp": "QidongShi"
}, {
    "cName": "如皋市",
        "code": "320682",
        "py": "Rugao Shi",
        "jp": "rgs",
        "qp": "RugaoShi"
}, {
    "cName": "海门市",
        "code": "320684",
        "py": "Haimen Shi",
        "jp": "hms",
        "qp": "HaimenShi"
}, {
    "cName": "海安县",
        "code": "320621",
        "py": "Hai&#39;an Xian",
        "jp": "hax",
        "qp": "HaianXian"
}, {
    "cName": "如东县",
        "code": "320623",
        "py": "Rudong Xian",
        "jp": "rdx",
        "qp": "RudongXian"
}, {
    "cName": "连云港市",
        "code": "320700",
        "py": "Lianyungang Shi",
        "jp": "lygs",
        "qp": "LianyungangShi"
}, {
    "cName": "海州区",
        "code": "320706",
        "py": "Haizhou Qu",
        "jp": "hzq",
        "qp": "HaizhouQu"
}, {
    "cName": "连云区",
        "code": "320703",
        "py": "Lianyun Qu",
        "jp": "lyq",
        "qp": "LianyunQu"
}, {
    "cName": "赣榆区",
        "code": "320707",
        "py": "Ganyu Qu",
        "jp": "gyq",
        "qp": "GanyuQu"
}, {
    "cName": "东海县",
        "code": "320722",
        "py": "Donghai Xian",
        "jp": "dhx",
        "qp": "DonghaiXian"
}, {
    "cName": "灌云县",
        "code": "320723",
        "py": "Guanyun Xian",
        "jp": "gyx",
        "qp": "GuanyunXian"
}, {
    "cName": "灌南县",
        "code": "320724",
        "py": "Guannan Xian",
        "jp": "gnx",
        "qp": "GuannanXian"
}, {
    "cName": "淮安市",
        "code": "320800",
        "py": "Huai&#39;an Shi",
        "jp": "has",
        "qp": "HuaianShi"
}, {
    "cName": "淮安区",
        "code": "320803",
        "py": "Huai&#39;an Qu",
        "jp": "haq",
        "qp": "HuaianQu"
}, {
    "cName": "淮阴区",
        "code": "320804",
        "py": "Huaiyin Qu",
        "jp": "hyq",
        "qp": "HuaiyinQu"
}, {
    "cName": "清江浦区",
        "code": "320812",
        "py": "Qingjianpu Qu",
        "jp": "qjpq",
        "qp": "QingjianpuQu"
}, {
    "cName": "洪泽区",
        "code": "320813",
        "py": "Hongze Qu",
        "jp": "hzq",
        "qp": "HongzeQu"
}, {
    "cName": "涟水县",
        "code": "320826",
        "py": "Lianshui Xian",
        "jp": "lsx",
        "qp": "LianshuiXian"
}, {
    "cName": "盱眙县",
        "code": "320830",
        "py": "Xuyi Xian",
        "jp": "xyx",
        "qp": "XuyiXian"
}, {
    "cName": "金湖县",
        "code": "320831",
        "py": "Jinhu Xian",
        "jp": "jhx",
        "qp": "JinhuXian"
}, {
    "cName": "盐城市",
        "code": "320900",
        "py": "Yancheng Shi",
        "jp": "ycs",
        "qp": "YanchengShi"
}, {
    "cName": "亭湖区",
        "code": "320902",
        "py": "Tinghu Qu",
        "jp": "thq",
        "qp": "TinghuQu"
}, {
    "cName": "盐都区",
        "code": "320903",
        "py": "Yandu Qu",
        "jp": "ydq",
        "qp": "YanduQu"
}, {
    "cName": "大丰区",
        "code": "320904",
        "py": "Dafeng Qu",
        "jp": "dfq",
        "qp": "DafengQu"
}, {
    "cName": "东台市",
        "code": "320981",
        "py": "Dongtai Shi",
        "jp": "dts",
        "qp": "DongtaiShi"
}, {
    "cName": "响水县",
        "code": "320921",
        "py": "Xiangshui Xian",
        "jp": "xsx",
        "qp": "XiangshuiXian"
}, {
    "cName": "滨海县",
        "code": "320922",
        "py": "Binhai Xian",
        "jp": "bhx",
        "qp": "BinhaiXian"
}, {
    "cName": "阜宁县",
        "code": "320923",
        "py": "Funing Xian",
        "jp": "fnx",
        "qp": "FuningXian"
}, {
    "cName": "射阳县",
        "code": "320924",
        "py": "Sheyang Xian",
        "jp": "syx",
        "qp": "SheyangXian"
}, {
    "cName": "建湖县",
        "code": "320925",
        "py": "Jianhu Xian",
        "jp": "jhx",
        "qp": "JianhuXian"
}, {
    "cName": "扬州市",
        "code": "321000",
        "py": "Yangzhou Shi",
        "jp": "yzs",
        "qp": "YangzhouShi"
}, {
    "cName": "邗江区",
        "code": "321003",
        "py": "Hanjiang Qu",
        "jp": "hjq",
        "qp": "HanjiangQu"
}, {
    "cName": "广陵区",
        "code": "321002",
        "py": "Guangling Qu",
        "jp": "glq",
        "qp": "GuanglingQu"
}, {
    "cName": "江都区",
        "code": "321012",
        "py": "Jiangdu Qu",
        "jp": "jdq",
        "qp": "JiangduQu"
}, {
    "cName": "仪征市",
        "code": "321081",
        "py": "Yizheng Shi",
        "jp": "yzs",
        "qp": "YizhengShi"
}, {
    "cName": "高邮市",
        "code": "321084",
        "py": "Gaoyou Shi",
        "jp": "gys",
        "qp": "GaoyouShi"
}, {
    "cName": "宝应县",
        "code": "321023",
        "py": "Baoying Xian",
        "jp": "byx",
        "qp": "BaoyingXian"
}, {
    "cName": "镇江市",
        "code": "321100",
        "py": "Zhenjiang Shi",
        "jp": "zjs",
        "qp": "ZhenjiangShi"
}, {
    "cName": "京口区",
        "code": "321102",
        "py": "Jingkou Qu",
        "jp": "jkq",
        "qp": "JingkouQu"
}, {
    "cName": "润州区",
        "code": "321111",
        "py": "Runzhou Qu",
        "jp": "rzq",
        "qp": "RunzhouQu"
}, {
    "cName": "丹徒区",
        "code": "321112",
        "py": "Dantu Qu",
        "jp": "dtq",
        "qp": "DantuQu"
}, {
    "cName": "丹阳市",
        "code": "321181",
        "py": "Danyang Shi",
        "jp": "dys",
        "qp": "DanyangShi"
}, {
    "cName": "扬中市",
        "code": "321182",
        "py": "Yangzhong Shi",
        "jp": "yzs",
        "qp": "YangzhongShi"
}, {
    "cName": "句容市",
        "code": "321183",
        "py": "Jurong Shi",
        "jp": "jrs",
        "qp": "JurongShi"
}, {
    "cName": "泰州市",
        "code": "321200",
        "py": "Taizhou Shi",
        "jp": "tzs",
        "qp": "TaizhouShi"
}, {
    "cName": "海陵区",
        "code": "321202",
        "py": "Hailing Qu",
        "jp": "hlq",
        "qp": "HailingQu"
}, {
    "cName": "高港区",
        "code": "321203",
        "py": "Gaogang Qu",
        "jp": "ggq",
        "qp": "GaogangQu"
}, {
    "cName": "姜堰区",
        "code": "321204",
        "py": "Jiangyan Shi",
        "jp": "jys",
        "qp": "JiangyanShi"
}, {
    "cName": "兴化市",
        "code": "321281",
        "py": "Xinghua Shi",
        "jp": "xhs",
        "qp": "XinghuaShi"
}, {
    "cName": "靖江市",
        "code": "321282",
        "py": "Jingjiang Shi",
        "jp": "jjs",
        "qp": "JingjiangShi"
}, {
    "cName": "泰兴市",
        "code": "321283",
        "py": "Taixing Shi",
        "jp": "txs",
        "qp": "TaixingShi"
}, {
    "cName": "宿迁市",
        "code": "321300",
        "py": "Suqian Shi",
        "jp": "sqs",
        "qp": "SuqianShi"
}, {
    "cName": "宿城区",
        "code": "321302",
        "py": "Sucheng Qu",
        "jp": "scq",
        "qp": "SuchengQu"
}, {
    "cName": "宿豫区",
        "code": "321311",
        "py": "Suyu Qu",
        "jp": "syq",
        "qp": "SuyuQu"
}, {
    "cName": "沭阳县",
        "code": "321322",
        "py": "Shuyang Xian",
        "jp": "syx",
        "qp": "ShuyangXian"
}, {
    "cName": "泗阳县",
        "code": "321323",
        "py": "Siyang Xian",
        "jp": "syx",
        "qp": "SiyangXian"
}, {
    "cName": "泗洪县",
        "code": "321324",
        "py": "Sihong Xian",
        "jp": "shx",
        "qp": "SihongXian"
}, {
    "cName": "浙江省",
        "code": "330000",
        "py": "Zhejiang Sheng",
        "jp": "zjs",
        "qp": "ZhejiangSheng"
}, {
    "cName": "杭州市",
        "code": "330100",
        "py": "Hangzhou Shi",
        "jp": "hzs",
        "qp": "HangzhouShi"
}, {
    "cName": "拱墅区",
        "code": "330105",
        "py": "Gongshu Qu",
        "jp": "gsq",
        "qp": "GongshuQu"
}, {
    "cName": "上城区",
        "code": "330102",
        "py": "Shangcheng Qu",
        "jp": "scq",
        "qp": "ShangchengQu"
}, {
    "cName": "下城区",
        "code": "330103",
        "py": "Xiacheng Qu",
        "jp": "xcq",
        "qp": "XiachengQu"
}, {
    "cName": "江干区",
        "code": "330104",
        "py": "Jianggan Qu",
        "jp": "jgq",
        "qp": "JiangganQu"
}, {
    "cName": "西湖区",
        "code": "330106",
        "py": "Xihu Qu",
        "jp": "xhq",
        "qp": "XihuQu"
}, {
    "cName": "滨江区",
        "code": "330108",
        "py": "Binjiang Qu",
        "jp": "bjq",
        "qp": "BinjiangQu"
}, {
    "cName": "萧山区",
        "code": "330109",
        "py": "Xiaoshan Qu",
        "jp": "xsq",
        "qp": "XiaoshanQu"
}, {
    "cName": "余杭区",
        "code": "330110",
        "py": "Yuhang Qu",
        "jp": "yhq",
        "qp": "YuhangQu"
}, {
    "cName": "富阳区",
        "code": "330111",
        "py": "Fuyang Qu",
        "jp": "fyq",
        "qp": "FuyangQu"
}, {
    "cName": "临安区",
        "code": "330112",
        "py": "Lin&#39;an Qu",
        "jp": "laq",
        "qp": "LinanQu"
}, {
    "cName": "建德市",
        "code": "330182",
        "py": "Jiande Shi",
        "jp": "jds",
        "qp": "JiandeShi"
}, {
    "cName": "桐庐县",
        "code": "330122",
        "py": "Tonglu Xian",
        "jp": "tlx",
        "qp": "TongluXian"
}, {
    "cName": "淳安县",
        "code": "330127",
        "py": "Chun&#39;an Xian",
        "jp": "cax",
        "qp": "ChunanXian"
}, {
    "cName": "宁波市",
        "code": "330200",
        "py": "Ningbo Shi",
        "jp": "nbs",
        "qp": "NingboShi"
}, {
    "cName": "海曙区",
        "code": "330203",
        "py": "Haishu Qu",
        "jp": "hsq",
        "qp": "HaishuQu"
}, {
    "cName": "江北区",
        "code": "330205",
        "py": "Jiangbei Qu",
        "jp": "jbq",
        "qp": "JiangbeiQu"
}, {
    "cName": "北仑区",
        "code": "330206",
        "py": "Beilun Qu",
        "jp": "blq",
        "qp": "BeilunQu"
}, {
    "cName": "镇海区",
        "code": "330211",
        "py": "Zhenhai Qu",
        "jp": "zhq",
        "qp": "ZhenhaiQu"
}, {
    "cName": "鄞州区",
        "code": "330212",
        "py": "Yinzhou Qu",
        "jp": "yzq",
        "qp": "YinzhouQu"
}, {
    "cName": "奉化区",
        "code": "330213",
        "py": "Fenghua Qu",
        "jp": "fhq",
        "qp": "FenghuaQu"
}, {
    "cName": "余姚市",
        "code": "330281",
        "py": "Yuyao Shi",
        "jp": "yys",
        "qp": "YuyaoShi"
}, {
    "cName": "慈溪市",
        "code": "330282",
        "py": "Cixi Shi",
        "jp": "cxs",
        "qp": "CixiShi"
}, {
    "cName": "象山县",
        "code": "330225",
        "py": "Xiangshan Xian",
        "jp": "xsx",
        "qp": "XiangshanXian"
}, {
    "cName": "宁海县",
        "code": "330226",
        "py": "Ninghai Xian",
        "jp": "nhx",
        "qp": "NinghaiXian"
}, {
    "cName": "温州市",
        "code": "330300",
        "py": "Wenzhou Shi",
        "jp": "wzs",
        "qp": "WenzhouShi"
}, {
    "cName": "鹿城区",
        "code": "330302",
        "py": "Lucheng Qu",
        "jp": "lcq",
        "qp": "LuchengQu"
}, {
    "cName": "龙湾区",
        "code": "330303",
        "py": "Longwan Qu",
        "jp": "lwq",
        "qp": "LongwanQu"
}, {
    "cName": "瓯海区",
        "code": "330304",
        "py": "Ouhai Qu",
        "jp": "ohq",
        "qp": "OuhaiQu"
}, {
    "cName": "洞头区",
        "code": "330305",
        "py": "Dongtou Qu",
        "jp": "dtq",
        "qp": "DongtouQu"
}, {
    "cName": "瑞安市",
        "code": "330381",
        "py": "Rui&#39;an Shi",
        "jp": "ras",
        "qp": "RuianShi"
}, {
    "cName": "乐清市",
        "code": "330382",
        "py": "Yueqing Shi",
        "jp": "yqs",
        "qp": "YueqingShi"
}, {
    "cName": "永嘉县",
        "code": "330324",
        "py": "Yongjia Xian",
        "jp": "yjx",
        "qp": "YongjiaXian"
}, {
    "cName": "平阳县",
        "code": "330326",
        "py": "Pingyang Xian",
        "jp": "pyx",
        "qp": "PingyangXian"
}, {
    "cName": "苍南县",
        "code": "330327",
        "py": "Cangnan Xian",
        "jp": "cnx",
        "qp": "CangnanXian"
}, {
    "cName": "文成县",
        "code": "330328",
        "py": "Wencheng Xian",
        "jp": "wcx",
        "qp": "WenchengXian"
}, {
    "cName": "泰顺县",
        "code": "330329",
        "py": "Taishun Xian",
        "jp": "tsx",
        "qp": "TaishunXian"
}, {
    "cName": "嘉兴市",
        "code": "330400",
        "py": "Jiaxing Shi",
        "jp": "jxs",
        "qp": "JiaxingShi"
}, {
    "cName": "南湖区",
        "code": "330402",
        "py": "Nahu Qu",
        "jp": "nhq",
        "qp": "NahuQu"
}, {
    "cName": "秀洲区",
        "code": "330411",
        "py": "Xiuzhou Qu",
        "jp": "xzq",
        "qp": "XiuzhouQu"
}, {
    "cName": "海宁市",
        "code": "330481",
        "py": "Haining Shi",
        "jp": "hns",
        "qp": "HainingShi"
}, {
    "cName": "平湖市",
        "code": "330482",
        "py": "Pinghu Shi",
        "jp": "phs",
        "qp": "PinghuShi"
}, {
    "cName": "桐乡市",
        "code": "330483",
        "py": "Tongxiang Shi",
        "jp": "txs",
        "qp": "TongxiangShi"
}, {
    "cName": "嘉善县",
        "code": "330421",
        "py": "Jiashan Xian",
        "jp": "jsx",
        "qp": "JiashanXian"
}, {
    "cName": "海盐县",
        "code": "330424",
        "py": "Haiyan Xian",
        "jp": "hyx",
        "qp": "HaiyanXian"
}, {
    "cName": "湖州市",
        "code": "330500",
        "py": "Huzhou Shi",
        "jp": "hzs",
        "qp": "HuzhouShi"
}, {
    "cName": "吴兴区",
        "code": "330502",
        "py": "Wuxing Qu",
        "jp": "wxq",
        "qp": "WuxingQu"
}, {
    "cName": "南浔区",
        "code": "330503",
        "py": "Nanxun Qu",
        "jp": "nxq",
        "qp": "NanxunQu"
}, {
    "cName": "德清县",
        "code": "330521",
        "py": "Deqing Xian",
        "jp": "dqx",
        "qp": "DeqingXian"
}, {
    "cName": "长兴县",
        "code": "330522",
        "py": "Changxing Xian",
        "jp": "cxx",
        "qp": "ChangxingXian"
}, {
    "cName": "安吉县",
        "code": "330523",
        "py": "Anji Xian",
        "jp": "ajx",
        "qp": "AnjiXian"
}, {
    "cName": "绍兴市",
        "code": "330600",
        "py": "Shaoxing Shi",
        "jp": "sxs",
        "qp": "ShaoxingShi"
}, {
    "cName": "越城区",
        "code": "330602",
        "py": "Yuecheng Qu",
        "jp": "ycq",
        "qp": "YuechengQu"
}, {
    "cName": "柯桥区",
        "code": "330603",
        "py": "Keqiao Qu",
        "jp": "kqq",
        "qp": "KeqiaoQu"
}, {
    "cName": "上虞区",
        "code": "330604",
        "py": "Shangyu Qu",
        "jp": "syq",
        "qp": "ShangyuQu"
}, {
    "cName": "诸暨市",
        "code": "330681",
        "py": "Zhuji Shi",
        "jp": "zjs",
        "qp": "ZhujiShi"
}, {
    "cName": "嵊州市",
        "code": "330683",
        "py": "Shengzhou Shi",
        "jp": "szs",
        "qp": "ShengzhouShi"
}, {
    "cName": "新昌县",
        "code": "330624",
        "py": "Xinchang Xian",
        "jp": "xcx",
        "qp": "XinchangXian"
}, {
    "cName": "金华市",
        "code": "330700",
        "py": "Jinhua Shi",
        "jp": "jhs",
        "qp": "JinhuaShi"
}, {
    "cName": "婺城区",
        "code": "330702",
        "py": "Wucheng Qu",
        "jp": "wcq",
        "qp": "WuchengQu"
}, {
    "cName": "金东区",
        "code": "330703",
        "py": "Jindong Qu",
        "jp": "jdq",
        "qp": "JindongQu"
}, {
    "cName": "兰溪市",
        "code": "330781",
        "py": "Lanxi Shi",
        "jp": "lxs",
        "qp": "LanxiShi"
}, {
    "cName": "义乌市",
        "code": "330782",
        "py": "Yiwu Shi",
        "jp": "yws",
        "qp": "YiwuShi"
}, {
    "cName": "东阳市",
        "code": "330783",
        "py": "Dongyang Shi",
        "jp": "dys",
        "qp": "DongyangShi"
}, {
    "cName": "永康市",
        "code": "330784",
        "py": "Yongkang Shi",
        "jp": "yks",
        "qp": "YongkangShi"
}, {
    "cName": "武义县",
        "code": "330723",
        "py": "Wuyi Xian",
        "jp": "wyx",
        "qp": "WuyiXian"
}, {
    "cName": "浦江县",
        "code": "330726",
        "py": "Pujiang Xian",
        "jp": "pjx",
        "qp": "PujiangXian"
}, {
    "cName": "磐安县",
        "code": "330727",
        "py": "Pan&#39;an Xian",
        "jp": "pax",
        "qp": "PananXian"
}, {
    "cName": "衢州市",
        "code": "330800",
        "py": "Quzhou Shi",
        "jp": "qzs",
        "qp": "QuzhouShi"
}, {
    "cName": "柯城区",
        "code": "330802",
        "py": "Kecheng Qu",
        "jp": "kcq",
        "qp": "KechengQu"
}, {
    "cName": "衢江区",
        "code": "330803",
        "py": "Qujiang Qu",
        "jp": "qjq",
        "qp": "QujiangQu"
}, {
    "cName": "江山市",
        "code": "330881",
        "py": "Jiangshan Shi",
        "jp": "jss",
        "qp": "JiangshanShi"
}, {
    "cName": "常山县",
        "code": "330822",
        "py": "Changshan Xian",
        "jp": "csx",
        "qp": "ChangshanXian"
}, {
    "cName": "开化县",
        "code": "330824",
        "py": "Kaihua Xian",
        "jp": "khx",
        "qp": "KaihuaXian"
}, {
    "cName": "龙游县",
        "code": "330825",
        "py": "Longyou Xian",
        "jp": "lyx",
        "qp": "LongyouXian"
}, {
    "cName": "舟山市",
        "code": "330900",
        "py": "Zhoushan Shi",
        "jp": "zss",
        "qp": "ZhoushanShi"
}, {
    "cName": "定海区",
        "code": "330902",
        "py": "Dinghai Qu",
        "jp": "dhq",
        "qp": "DinghaiQu"
}, {
    "cName": "普陀区",
        "code": "330903",
        "py": "Putuo Qu",
        "jp": "ptq",
        "qp": "PutuoQu"
}, {
    "cName": "岱山县",
        "code": "330921",
        "py": "Daishan Xian",
        "jp": "dsx",
        "qp": "DaishanXian"
}, {
    "cName": "嵊泗县",
        "code": "330922",
        "py": "Shengsi Xian",
        "jp": "ssx",
        "qp": "ShengsiXian"
}, {
    "cName": "台州市",
        "code": "331000",
        "py": "Taizhou Shi",
        "jp": "tzs",
        "qp": "TaizhouShi"
}, {
    "cName": "椒江区",
        "code": "331002",
        "py": "Jiaojiang Qu",
        "jp": "jjq",
        "qp": "JiaojiangQu"
}, {
    "cName": "黄岩区",
        "code": "331003",
        "py": "Huangyan Qu",
        "jp": "hyq",
        "qp": "HuangyanQu"
}, {
    "cName": "路桥区",
        "code": "331004",
        "py": "Luqiao Qu",
        "jp": "lqq",
        "qp": "LuqiaoQu"
}, {
    "cName": "温岭市",
        "code": "331081",
        "py": "Wenling Shi",
        "jp": "wls",
        "qp": "WenlingShi"
}, {
    "cName": "临海市",
        "code": "331082",
        "py": "Linhai Shi",
        "jp": "lhs",
        "qp": "LinhaiShi"
}, {
    "cName": "玉环市",
        "code": "331083",
        "py": "Yuhuan Shi",
        "jp": "yhs",
        "qp": "YuhuanShi"
}, {
    "cName": "三门县",
        "code": "331022",
        "py": "Sanmen Xian",
        "jp": "smx",
        "qp": "SanmenXian"
}, {
    "cName": "天台县",
        "code": "331023",
        "py": "Tiantai Xian",
        "jp": "ttx",
        "qp": "TiantaiXian"
}, {
    "cName": "仙居县",
        "code": "331024",
        "py": "Xianju Xian",
        "jp": "xjx",
        "qp": "XianjuXian"
}, {
    "cName": "丽水市",
        "code": "331100",
        "py": "Lishui Shi",
        "jp": "lss",
        "qp": "LishuiShi"
}, {
    "cName": "莲都区",
        "code": "331102",
        "py": "Liandu Qu",
        "jp": "ldq",
        "qp": "LianduQu"
}, {
    "cName": "龙泉市",
        "code": "331181",
        "py": "Longquan Shi",
        "jp": "lqs",
        "qp": "LongquanShi"
}, {
    "cName": "青田县",
        "code": "331121",
        "py": "Qingtian Xian",
        "jp": "qtx",
        "qp": "QingtianXian"
}, {
    "cName": "缙云县",
        "code": "331122",
        "py": "Jinyun Xian",
        "jp": "jyx",
        "qp": "JinyunXian"
}, {
    "cName": "遂昌县",
        "code": "331123",
        "py": "Suichang Xian",
        "jp": "scx",
        "qp": "SuichangXian"
}, {
    "cName": "松阳县",
        "code": "331124",
        "py": "Songyang Xian",
        "jp": "syx",
        "qp": "SongyangXian"
}, {
    "cName": "云和县",
        "code": "331125",
        "py": "Yunhe Xian",
        "jp": "yhx",
        "qp": "YunheXian"
}, {
    "cName": "庆元县",
        "code": "331126",
        "py": "Qingyuan Xian",
        "jp": "qyx",
        "qp": "QingyuanXian"
}, {
    "cName": "景宁畲族自治县",
        "code": "331127",
        "py": "Jingning Shezu Zizhixian",
        "jp": "jnszzzx",
        "qp": "JingningShezuZizhixian"
}, {
    "cName": "安徽省",
        "code": "340000",
        "py": "Anhui Sheng",
        "jp": "ahs",
        "qp": "AnhuiSheng"
}, {
    "cName": "合肥市",
        "code": "340100",
        "py": "Hefei Shi",
        "jp": "hfs",
        "qp": "HefeiShi"
}, {
    "cName": "蜀山区",
        "code": "340104",
        "py": "Shushan Qu",
        "jp": "ssq",
        "qp": "ShushanQu"
}, {
    "cName": "瑶海区",
        "code": "340102",
        "py": "Yaohai Qu",
        "jp": "yhq",
        "qp": "YaohaiQu"
}, {
    "cName": "庐阳区",
        "code": "340103",
        "py": "Luyang Qu",
        "jp": "lyq",
        "qp": "LuyangQu"
}, {
    "cName": "包河区",
        "code": "340111",
        "py": "Baohe Qu",
        "jp": "bhq",
        "qp": "BaoheQu"
}, {
    "cName": "巢湖市",
        "code": "340181",
        "py": "Chaohu Shi",
        "jp": "chs",
        "qp": "ChaohuShi"
}, {
    "cName": "长丰县",
        "code": "340121",
        "py": "Changfeng Xian",
        "jp": "cfx",
        "qp": "ChangfengXian"
}, {
    "cName": "肥东县",
        "code": "340122",
        "py": "Feidong Xian",
        "jp": "fdx",
        "qp": "FeidongXian"
}, {
    "cName": "肥西县",
        "code": "340123",
        "py": "Feixi Xian",
        "jp": "fxx",
        "qp": "FeixiXian"
}, {
    "cName": "庐江县",
        "code": "340124",
        "py": "Lujiang Xian",
        "jp": "ljx",
        "qp": "LujiangXian"
}, {
    "cName": "芜湖市",
        "code": "340200",
        "py": "Wuhu Shi",
        "jp": "whs",
        "qp": "WuhuShi"
}, {
    "cName": "鸠江区",
        "code": "340207",
        "py": "Jiujiang Qu",
        "jp": "jjq",
        "qp": "JiujiangQu"
}, {
    "cName": "镜湖区",
        "code": "340202",
        "py": "Jinghu Qu",
        "jp": "jhq",
        "qp": "JinghuQu"
}, {
    "cName": "弋江区",
        "code": "340203",
        "py": "Yijiang Qu",
        "jp": "yjq",
        "qp": "YijiangQu"
}, {
    "cName": "三山区",
        "code": "340208",
        "py": "SanShan Qu",
        "jp": "ssq",
        "qp": "SanShanQu"
}, {
    "cName": "芜湖县",
        "code": "340221",
        "py": "Wuhu Xian",
        "jp": "whx",
        "qp": "WuhuXian"
}, {
    "cName": "繁昌县",
        "code": "340222",
        "py": "Fanchang Xian",
        "jp": "fcx",
        "qp": "FanchangXian"
}, {
    "cName": "南陵县",
        "code": "340223",
        "py": "Nanling Xian",
        "jp": "nlx",
        "qp": "NanlingXian"
}, {
    "cName": "无为县",
        "code": "340225",
        "py": "Wuwei Xian",
        "jp": "wwx",
        "qp": "WuweiXian"
}, {
    "cName": "蚌埠市",
        "code": "340300",
        "py": "Bengbu Shi",
        "jp": "bbs",
        "qp": "BengbuShi"
}, {
    "cName": "蚌山区",
        "code": "340303",
        "py": "Bengshan Qu",
        "jp": "bsq",
        "qp": "BengshanQu"
}, {
    "cName": "龙子湖区",
        "code": "340302",
        "py": "Longzihu Qu",
        "jp": "lzhq",
        "qp": "LongzihuQu"
}, {
    "cName": "禹会区",
        "code": "340304",
        "py": "Yuhui Qu",
        "jp": "yhq",
        "qp": "YuhuiQu"
}, {
    "cName": "淮上区",
        "code": "340311",
        "py": "Huaishang Qu",
        "jp": "hsq",
        "qp": "HuaishangQu"
}, {
    "cName": "怀远县",
        "code": "340321",
        "py": "Huaiyuan Xian",
        "jp": "hyx",
        "qp": "HuaiyuanXian"
}, {
    "cName": "五河县",
        "code": "340322",
        "py": "Wuhe Xian",
        "jp": "whx",
        "qp": "WuheXian"
}, {
    "cName": "固镇县",
        "code": "340323",
        "py": "Guzhen Xian",
        "jp": "gzx",
        "qp": "GuzhenXian"
}, {
    "cName": "淮南市",
        "code": "340400",
        "py": "Huainan Shi",
        "jp": "hns",
        "qp": "HuainanShi"
}, {
    "cName": "田家庵区",
        "code": "340403",
        "py": "Tianjia&#39;an Qu",
        "jp": "tjaq",
        "qp": "TianjiaanQu"
}, {
    "cName": "大通区",
        "code": "340402",
        "py": "Datong Qu",
        "jp": "dtq",
        "qp": "DatongQu"
}, {
    "cName": "谢家集区",
        "code": "340404",
        "py": "Xiejiaji Qu",
        "jp": "xjjq",
        "qp": "XiejiajiQu"
}, {
    "cName": "八公山区",
        "code": "340405",
        "py": "Bagongshan Qu",
        "jp": "bgsq",
        "qp": "BagongshanQu"
}, {
    "cName": "潘集区",
        "code": "340406",
        "py": "Panji Qu",
        "jp": "pjq",
        "qp": "PanjiQu"
}, {
    "cName": "凤台县",
        "code": "340421",
        "py": "Fengtai Xian",
        "jp": "ftx",
        "qp": "FengtaiXian"
}, {
    "cName": "寿县",
        "code": "340422",
        "py": "Shou Xian",
        "jp": "sx",
        "qp": "ShouXian"
}, {
    "cName": "马鞍山市",
        "code": "340500",
        "py": "Ma&#39;anshan Shi",
        "jp": "mass",
        "qp": "MaanshanShi"
}, {
    "cName": "雨山区",
        "code": "340504",
        "py": "Yushan Qu",
        "jp": "ysq",
        "qp": "YushanQu"
}, {
    "cName": "花山区",
        "code": "340503",
        "py": "Huashan Qu",
        "jp": "hsq",
        "qp": "HuashanQu"
}, {
    "cName": "博望区",
        "code": "340506",
        "py": "Bowang Qu",
        "jp": "bwq",
        "qp": "BowangQu"
}, {
    "cName": "当涂县",
        "code": "340521",
        "py": "Dangtu Xian",
        "jp": "dtx",
        "qp": "DangtuXian"
}, {
    "cName": "含山县",
        "code": "340522",
        "py": "Hanshan Xian",
        "jp": "hsx",
        "qp": "HanshanXian"
}, {
    "cName": "和县",
        "code": "340523",
        "py": "He Xian",
        "jp": "hx",
        "qp": "HeXian"
}, {
    "cName": "淮北市",
        "code": "340600",
        "py": "Huaibei Shi",
        "jp": "hbs",
        "qp": "HuaibeiShi"
}, {
    "cName": "相山区",
        "code": "340603",
        "py": "Xiangshan Qu",
        "jp": "xsq",
        "qp": "XiangshanQu"
}, {
    "cName": "杜集区",
        "code": "340602",
        "py": "Duji Qu",
        "jp": "djq",
        "qp": "DujiQu"
}, {
    "cName": "烈山区",
        "code": "340604",
        "py": "Lieshan Qu",
        "jp": "lsq",
        "qp": "LieshanQu"
}, {
    "cName": "濉溪县",
        "code": "340621",
        "py": "Suixi Xian",
        "jp": "sxx",
        "qp": "SuixiXian"
}, {
    "cName": "铜陵市",
        "code": "340700",
        "py": "Tongling Shi",
        "jp": "tls",
        "qp": "TonglingShi"
}, {
    "cName": "铜官区",
        "code": "340705",
        "py": "Tongguan Shi",
        "jp": "tgs",
        "qp": "TongguanShi"
}, {
    "cName": "义安区",
        "code": "340706",
        "py": "Yian Qu",
        "jp": "yaq",
        "qp": "YianQu"
}, {
    "cName": "郊区",
        "code": "340711",
        "py": "Jiao Qu",
        "jp": "jq",
        "qp": "JiaoQu"
}, {
    "cName": "枞阳县",
        "code": "340722",
        "py": "Zongyang Xian",
        "jp": "zyx",
        "qp": "ZongyangXian"
}, {
    "cName": "安庆市",
        "code": "340800",
        "py": "Anqing Shi",
        "jp": "aqs",
        "qp": "AnqingShi"
}, {
    "cName": "大观区",
        "code": "340803",
        "py": "Daguan Qu",
        "jp": "dgq",
        "qp": "DaguanQu"
}, {
    "cName": "迎江区",
        "code": "340802",
        "py": "Yingjiang Qu",
        "jp": "yjq",
        "qp": "YingjiangQu"
}, {
    "cName": "宜秀区",
        "code": "340811",
        "py": "Yixiu Qu",
        "jp": "yxq",
        "qp": "YixiuQu"
}, {
    "cName": "桐城市",
        "code": "340881",
        "py": "Tongcheng Shi",
        "jp": "tcs",
        "qp": "TongchengShi"
}, {
    "cName": "怀宁县",
        "code": "340822",
        "py": "Huaining Xian",
        "jp": "hnx",
        "qp": "HuainingXian"
}, {
    "cName": "潜山县",
        "code": "340824",
        "py": "Qianshan Xian",
        "jp": "qsx",
        "qp": "QianshanXian"
}, {
    "cName": "太湖县",
        "code": "340825",
        "py": "Taihu Xian",
        "jp": "thx",
        "qp": "TaihuXian"
}, {
    "cName": "宿松县",
        "code": "340826",
        "py": "Susong Xian",
        "jp": "ssx",
        "qp": "SusongXian"
}, {
    "cName": "望江县",
        "code": "340827",
        "py": "Wangjiang Xian",
        "jp": "wjx",
        "qp": "WangjiangXian"
}, {
    "cName": "岳西县",
        "code": "340828",
        "py": "Yuexi Xian",
        "jp": "yxx",
        "qp": "YuexiXian"
}, {
    "cName": "黄山市",
        "code": "341000",
        "py": "Huangshan Shi",
        "jp": "hss",
        "qp": "HuangshanShi"
}, {
    "cName": "屯溪区",
        "code": "341002",
        "py": "Tunxi Qu",
        "jp": "txq",
        "qp": "TunxiQu"
}, {
    "cName": "黄山区",
        "code": "341003",
        "py": "Huangshan Qu",
        "jp": "hsq",
        "qp": "HuangshanQu"
}, {
    "cName": "徽州区",
        "code": "341004",
        "py": "Huizhou Qu",
        "jp": "hzq",
        "qp": "HuizhouQu"
}, {
    "cName": "歙县",
        "code": "341021",
        "py": "She Xian",
        "jp": "sx",
        "qp": "SheXian"
}, {
    "cName": "休宁县",
        "code": "341022",
        "py": "Xiuning Xian",
        "jp": "xnx",
        "qp": "XiuningXian"
}, {
    "cName": "黟县",
        "code": "341023",
        "py": "Yi Xian",
        "jp": "yx",
        "qp": "YiXian"
}, {
    "cName": "祁门县",
        "code": "341024",
        "py": "Qimen Xian",
        "jp": "qmx",
        "qp": "QimenXian"
}, {
    "cName": "滁州市",
        "code": "341100",
        "py": "Chuzhou Shi",
        "jp": "czs",
        "qp": "ChuzhouShi"
}, {
    "cName": "琅琊区",
        "code": "341102",
        "py": "Langya Qu",
        "jp": "lyq",
        "qp": "LangyaQu"
}, {
    "cName": "南谯区",
        "code": "341103",
        "py": "Nanqiao Qu",
        "jp": "nqq",
        "qp": "NanqiaoQu"
}, {
    "cName": "天长市",
        "code": "341181",
        "py": "Tianchang Shi",
        "jp": "tcs",
        "qp": "TianchangShi"
}, {
    "cName": "明光市",
        "code": "341182",
        "py": "Mingguang Shi",
        "jp": "mgs",
        "qp": "MingguangShi"
}, {
    "cName": "来安县",
        "code": "341122",
        "py": "Lai&#39;an Xian",
        "jp": "lax",
        "qp": "LaianXian"
}, {
    "cName": "全椒县",
        "code": "341124",
        "py": "Quanjiao Xian",
        "jp": "qjx",
        "qp": "QuanjiaoXian"
}, {
    "cName": "定远县",
        "code": "341125",
        "py": "Dingyuan Xian",
        "jp": "dyx",
        "qp": "DingyuanXian"
}, {
    "cName": "凤阳县",
        "code": "341126",
        "py": "Fengyang Xian",
        "jp": "fyx",
        "qp": "FengyangXian"
}, {
    "cName": "阜阳市",
        "code": "341200",
        "py": "Fuyang Shi",
        "jp": "fys",
        "qp": "FuyangShi"
}, {
    "cName": "颍州区",
        "code": "341202",
        "py": "Yingzhou Qu",
        "jp": "yzq",
        "qp": "YingzhouQu"
}, {
    "cName": "颍东区",
        "code": "341203",
        "py": "Yingdong Qu",
        "jp": "ydq",
        "qp": "YingdongQu"
}, {
    "cName": "颍泉区",
        "code": "341204",
        "py": "Yingquan Qu",
        "jp": "yqq",
        "qp": "YingquanQu"
}, {
    "cName": "界首市",
        "code": "341282",
        "py": "Jieshou Shi",
        "jp": "jss",
        "qp": "JieshouShi"
}, {
    "cName": "临泉县",
        "code": "341221",
        "py": "Linquan Xian",
        "jp": "lqx",
        "qp": "LinquanXian"
}, {
    "cName": "太和县",
        "code": "341222",
        "py": "Taihe Xian",
        "jp": "thx",
        "qp": "TaiheXian"
}, {
    "cName": "阜南县",
        "code": "341225",
        "py": "Funan Xian",
        "jp": "fnx",
        "qp": "FunanXian"
}, {
    "cName": "颍上县",
        "code": "341226",
        "py": "Yingshang Xian",
        "jp": "ysx",
        "qp": "YingshangXian"
}, {
    "cName": "宿州市",
        "code": "341300",
        "py": "Suzhou Shi",
        "jp": "szs",
        "qp": "SuzhouShi"
}, {
    "cName": "埇桥区",
        "code": "341302",
        "py": "Yongqiao Qu",
        "jp": "yqq",
        "qp": "YongqiaoQu"
}, {
    "cName": "砀山县",
        "code": "341321",
        "py": "Dangshan Xian",
        "jp": "dsx",
        "qp": "DangshanXian"
}, {
    "cName": "萧县",
        "code": "341322",
        "py": "Xiao Xian",
        "jp": "xx",
        "qp": "XiaoXian"
}, {
    "cName": "灵璧县",
        "code": "341323",
        "py": "Lingbi Xian",
        "jp": "lbx",
        "qp": "LingbiXian"
}, {
    "cName": "泗县",
        "code": "341324",
        "py": "Si Xian",
        "jp": "sx",
        "qp": "SiXian"
}, {
    "cName": "六安市",
        "code": "341500",
        "py": "Lu&#39;an Shi",
        "jp": "las",
        "qp": "LuanShi"
}, {
    "cName": "金安区",
        "code": "341502",
        "py": "Jin&#39;an Qu",
        "jp": "jaq",
        "qp": "JinanQu"
}, {
    "cName": "裕安区",
        "code": "341503",
        "py": "Yu&#39;an Qu",
        "jp": "yaq",
        "qp": "YuanQu"
}, {
    "cName": "叶集区",
        "code": "341504",
        "py": "Yeji Qu",
        "jp": "yjq",
        "qp": "YejiQu"
}, {
    "cName": "霍邱县",
        "code": "341522",
        "py": "Huoqiu Xian",
        "jp": "hqx",
        "qp": "HuoqiuXian"
}, {
    "cName": "舒城县",
        "code": "341523",
        "py": "Shucheng Xian",
        "jp": "scx",
        "qp": "ShuchengXian"
}, {
    "cName": "金寨县",
        "code": "341524",
        "py": "Jinzhai Xian",
        "jp": "jzx",
        "qp": "JinzhaiXian"
}, {
    "cName": "霍山县",
        "code": "341525",
        "py": "Huoshan Xian",
        "jp": "hsx",
        "qp": "HuoshanXian"
}, {
    "cName": "亳州市",
        "code": "341600",
        "py": "Bozhou Shi",
        "jp": "bzs",
        "qp": "BozhouShi"
}, {
    "cName": "谯城区",
        "code": "341602",
        "py": "Qiaocheng Qu",
        "jp": "qcq",
        "qp": "QiaochengQu"
}, {
    "cName": "涡阳县",
        "code": "341621",
        "py": "Guoyang Xian",
        "jp": "gyx",
        "qp": "GuoyangXian"
}, {
    "cName": "蒙城县",
        "code": "341622",
        "py": "Mengcheng Xian",
        "jp": "mcx",
        "qp": "MengchengXian"
}, {
    "cName": "利辛县",
        "code": "341623",
        "py": "Lixin Xian",
        "jp": "lxx",
        "qp": "LixinXian"
}, {
    "cName": "池州市",
        "code": "341700",
        "py": "Chizhou Shi",
        "jp": "czs",
        "qp": "ChizhouShi"
}, {
    "cName": "贵池区",
        "code": "341702",
        "py": "Guichi Qu",
        "jp": "gcq",
        "qp": "GuichiQu"
}, {
    "cName": "东至县",
        "code": "341721",
        "py": "Dongzhi Xian",
        "jp": "dzx",
        "qp": "DongzhiXian"
}, {
    "cName": "石台县",
        "code": "341722",
        "py": "Shitai Xian",
        "jp": "stx",
        "qp": "ShitaiXian"
}, {
    "cName": "青阳县",
        "code": "341723",
        "py": "Qingyang Xian",
        "jp": "qyx",
        "qp": "QingyangXian"
}, {
    "cName": "宣城市",
        "code": "341800",
        "py": "Xuancheng Shi",
        "jp": "xcs",
        "qp": "XuanchengShi"
}, {
    "cName": "宣州区",
        "code": "341802",
        "py": "Xuanzhou Qu",
        "jp": "xzq",
        "qp": "XuanzhouQu"
}, {
    "cName": "宁国市",
        "code": "341881",
        "py": "Ningguo Shi",
        "jp": "ngs",
        "qp": "NingguoShi"
}, {
    "cName": "郎溪县",
        "code": "341821",
        "py": "Langxi Xian",
        "jp": "lxx",
        "qp": "LangxiXian"
}, {
    "cName": "广德县",
        "code": "341822",
        "py": "Guangde Xian",
        "jp": "gdx",
        "qp": "GuangdeXian"
}, {
    "cName": "泾县",
        "code": "341823",
        "py": "Jing Xian",
        "jp": "jx",
        "qp": "JingXian"
}, {
    "cName": "绩溪县",
        "code": "341824",
        "py": "Jixi Xian",
        "jp": "jxx",
        "qp": "JixiXian"
}, {
    "cName": "旌德县",
        "code": "341825",
        "py": "Jingde Xian",
        "jp": "jdx",
        "qp": "JingdeXian"
}, {
    "cName": "福建省",
        "code": "350000",
        "py": "Fujian Sheng",
        "jp": "fjs",
        "qp": "FujianSheng"
}, {
    "cName": "福州市",
        "code": "350100",
        "py": "Fuzhou Shi",
        "jp": "fzs",
        "qp": "FuzhouShi"
}, {
    "cName": "鼓楼区",
        "code": "350102",
        "py": "Gulou Qu",
        "jp": "glq",
        "qp": "GulouQu"
}, {
    "cName": "台江区",
        "code": "350103",
        "py": "Taijiang Qu",
        "jp": "tjq",
        "qp": "TaijiangQu"
}, {
    "cName": "仓山区",
        "code": "350104",
        "py": "Cangshan Qu",
        "jp": "csq",
        "qp": "CangshanQu"
}, {
    "cName": "马尾区",
        "code": "350105",
        "py": "Mawei Qu",
        "jp": "mwq",
        "qp": "MaweiQu"
}, {
    "cName": "晋安区",
        "code": "350111",
        "py": "Jin&#39;an Qu",
        "jp": "jaq",
        "qp": "JinanQu"
}, {
    "cName": "长乐区",
        "code": "350112",
        "py": "Changle Qu",
        "jp": "clq",
        "qp": "ChangleQu"
}, {
    "cName": "福清市",
        "code": "350181",
        "py": "Fuqing Shi",
        "jp": "fqs",
        "qp": "FuqingShi"
}, {
    "cName": "闽侯县",
        "code": "350121",
        "py": "Minhou Xian",
        "jp": "mhx",
        "qp": "MinhouXian"
}, {
    "cName": "连江县",
        "code": "350122",
        "py": "Lianjiang Xian",
        "jp": "ljx",
        "qp": "LianjiangXian"
}, {
    "cName": "罗源县",
        "code": "350123",
        "py": "Luoyuan Xian",
        "jp": "lyx",
        "qp": "LuoyuanXian"
}, {
    "cName": "闽清县",
        "code": "350124",
        "py": "Minqing Xian",
        "jp": "mqx",
        "qp": "MinqingXian"
}, {
    "cName": "永泰县",
        "code": "350125",
        "py": "Yongtai Xian",
        "jp": "ytx",
        "qp": "YongtaiXian"
}, {
    "cName": "平潭县",
        "code": "350128",
        "py": "Pingtan Xian",
        "jp": "ptx",
        "qp": "PingtanXian"
}, {
    "cName": "厦门市",
        "code": "350200",
        "py": "Xiamen Shi",
        "jp": "xms",
        "qp": "XiamenShi"
}, {
    "cName": "思明区",
        "code": "350203",
        "py": "Siming Qu",
        "jp": "smq",
        "qp": "SimingQu"
}, {
    "cName": "海沧区",
        "code": "350205",
        "py": "Haicang Qu",
        "jp": "hcq",
        "qp": "HaicangQu"
}, {
    "cName": "湖里区",
        "code": "350206",
        "py": "Huli Qu",
        "jp": "hlq",
        "qp": "HuliQu"
}, {
    "cName": "集美区",
        "code": "350211",
        "py": "Jimei Qu",
        "jp": "jmq",
        "qp": "JimeiQu"
}, {
    "cName": "同安区",
        "code": "350212",
        "py": "Tong&#39;an Qu",
        "jp": "taq",
        "qp": "TonganQu"
}, {
    "cName": "翔安区",
        "code": "350213",
        "py": "Xiang&#39;an Qu",
        "jp": "xaq",
        "qp": "XianganQu"
}, {
    "cName": "莆田市",
        "code": "350300",
        "py": "Putian Shi",
        "jp": "pts",
        "qp": "PutianShi"
}, {
    "cName": "城厢区",
        "code": "350302",
        "py": "Chengxiang Qu",
        "jp": "cxq",
        "qp": "ChengxiangQu"
}, {
    "cName": "涵江区",
        "code": "350303",
        "py": "Hanjiang Qu",
        "jp": "hjq",
        "qp": "HanjiangQu"
}, {
    "cName": "荔城区",
        "code": "350304",
        "py": "Licheng Qu",
        "jp": "lcq",
        "qp": "LichengQu"
}, {
    "cName": "秀屿区",
        "code": "350305",
        "py": "Xiuyu Qu",
        "jp": "xyq",
        "qp": "XiuyuQu"
}, {
    "cName": "仙游县",
        "code": "350322",
        "py": "Xianyou Xian",
        "jp": "xyx",
        "qp": "XianyouXian"
}, {
    "cName": "三明市",
        "code": "350400",
        "py": "Sanming Shi",
        "jp": "sms",
        "qp": "SanmingShi"
}, {
    "cName": "梅列区",
        "code": "350402",
        "py": "Meilie Qu",
        "jp": "mlq",
        "qp": "MeilieQu"
}, {
    "cName": "三元区",
        "code": "350403",
        "py": "Sanyuan Qu",
        "jp": "syq",
        "qp": "SanyuanQu"
}, {
    "cName": "永安市",
        "code": "350481",
        "py": "Yong&#39;an Shi",
        "jp": "yas",
        "qp": "YonganShi"
}, {
    "cName": "明溪县",
        "code": "350421",
        "py": "Mingxi Xian",
        "jp": "mxx",
        "qp": "MingxiXian"
}, {
    "cName": "清流县",
        "code": "350423",
        "py": "Qingliu Xian",
        "jp": "qlx",
        "qp": "QingliuXian"
}, {
    "cName": "宁化县",
        "code": "350424",
        "py": "Ninghua Xian",
        "jp": "nhx",
        "qp": "NinghuaXian"
}, {
    "cName": "大田县",
        "code": "350425",
        "py": "Datian Xian",
        "jp": "dtx",
        "qp": "DatianXian"
}, {
    "cName": "尤溪县",
        "code": "350426",
        "py": "Youxi Xian",
        "jp": "yxx",
        "qp": "YouxiXian"
}, {
    "cName": "沙县",
        "code": "350427",
        "py": "Sha Xian",
        "jp": "sx",
        "qp": "ShaXian"
}, {
    "cName": "将乐县",
        "code": "350428",
        "py": "Jiangle Xian",
        "jp": "jlx",
        "qp": "JiangleXian"
}, {
    "cName": "泰宁县",
        "code": "350429",
        "py": "Taining Xian",
        "jp": "tnx",
        "qp": "TainingXian"
}, {
    "cName": "建宁县",
        "code": "350430",
        "py": "Jianning Xian",
        "jp": "jnx",
        "qp": "JianningXian"
}, {
    "cName": "泉州市",
        "code": "350500",
        "py": "Quanzhou Shi",
        "jp": "qzs",
        "qp": "QuanzhouShi"
}, {
    "cName": "丰泽区",
        "code": "350503",
        "py": "Fengze Qu",
        "jp": "fzq",
        "qp": "FengzeQu"
}, {
    "cName": "鲤城区",
        "code": "350502",
        "py": "Licheng Qu",
        "jp": "lcq",
        "qp": "LichengQu"
}, {
    "cName": "洛江区",
        "code": "350504",
        "py": "Luojiang Qu",
        "jp": "ljq",
        "qp": "LuojiangQu"
}, {
    "cName": "泉港区",
        "code": "350505",
        "py": "Quangang Qu",
        "jp": "qgq",
        "qp": "QuangangQu"
}, {
    "cName": "石狮市",
        "code": "350581",
        "py": "Shishi Shi",
        "jp": "sss",
        "qp": "ShishiShi"
}, {
    "cName": "晋江市",
        "code": "350582",
        "py": "Jinjiang Shi",
        "jp": "jjs",
        "qp": "JinjiangShi"
}, {
    "cName": "南安市",
        "code": "350583",
        "py": "Nan&#39;an Shi",
        "jp": "nas",
        "qp": "NananShi"
}, {
    "cName": "惠安县",
        "code": "350521",
        "py": "Hui&#39;an Xian",
        "jp": "hax",
        "qp": "HuianXian"
}, {
    "cName": "安溪县",
        "code": "350524",
        "py": "Anxi Xian",
        "jp": "axx",
        "qp": "AnxiXian"
}, {
    "cName": "永春县",
        "code": "350525",
        "py": "Yongchun Xian",
        "jp": "ycx",
        "qp": "YongchunXian"
}, {
    "cName": "德化县",
        "code": "350526",
        "py": "Dehua Xian",
        "jp": "dhx",
        "qp": "DehuaXian"
}, {
    "cName": "金门县☆",
        "code": "350527",
        "py": "Jinmen Xian",
        "jp": "jmx",
        "qp": "JinmenXian"
}, {
    "cName": "漳州市",
        "code": "350600",
        "py": "Zhangzhou Shi",
        "jp": "zzs",
        "qp": "ZhangzhouShi"
}, {
    "cName": "龙文区",
        "code": "350603",
        "py": "Longwen Qu",
        "jp": "lwq",
        "qp": "LongwenQu"
}, {
    "cName": "芗城区",
        "code": "350602",
        "py": "Xiangcheng Qu",
        "jp": "xcq",
        "qp": "XiangchengQu"
}, {
    "cName": "龙海市",
        "code": "350681",
        "py": "Longhai Shi",
        "jp": "lhs",
        "qp": "LonghaiShi"
}, {
    "cName": "云霄县",
        "code": "350622",
        "py": "Yunxiao Xian",
        "jp": "yxx",
        "qp": "YunxiaoXian"
}, {
    "cName": "漳浦县",
        "code": "350623",
        "py": "Zhangpu Xian",
        "jp": "zpx",
        "qp": "ZhangpuXian"
}, {
    "cName": "诏安县",
        "code": "350624",
        "py": "Zhao&#39;an Xian",
        "jp": "zax",
        "qp": "ZhaoanXian"
}, {
    "cName": "长泰县",
        "code": "350625",
        "py": "Changtai Xian",
        "jp": "ctx",
        "qp": "ChangtaiXian"
}, {
    "cName": "东山县",
        "code": "350626",
        "py": "Dongshan Xian",
        "jp": "dsx",
        "qp": "DongshanXian"
}, {
    "cName": "南靖县",
        "code": "350627",
        "py": "Nanjing Xian",
        "jp": "njx",
        "qp": "NanjingXian"
}, {
    "cName": "平和县",
        "code": "350628",
        "py": "Pinghe Xian",
        "jp": "phx",
        "qp": "PingheXian"
}, {
    "cName": "华安县",
        "code": "350629",
        "py": "Hua&#39;an Xian",
        "jp": "hax",
        "qp": "HuaanXian"
}, {
    "cName": "南平市",
        "code": "350700",
        "py": "Nanping Shi",
        "jp": "nps",
        "qp": "NanpingShi"
}, {
    "cName": "建阳区",
        "code": "350703",
        "py": "Jianyang Qu",
        "jp": "jyq",
        "qp": "JianyangQu"
}, {
    "cName": "延平区",
        "code": "350702",
        "py": "Yanping Qu",
        "jp": "ypq",
        "qp": "YanpingQu"
}, {
    "cName": "邵武市",
        "code": "350781",
        "py": "Shaowu Shi",
        "jp": "sws",
        "qp": "ShaowuShi"
}, {
    "cName": "武夷山市",
        "code": "350782",
        "py": "Wuyishan Shi",
        "jp": "wyss",
        "qp": "WuyishanShi"
}, {
    "cName": "建瓯市",
        "code": "350783",
        "py": "Jian&#39;ou Shi",
        "jp": "jos",
        "qp": "JianouShi"
}, {
    "cName": "顺昌县",
        "code": "350721",
        "py": "Shunchang Xian",
        "jp": "scx",
        "qp": "ShunchangXian"
}, {
    "cName": "浦城县",
        "code": "350722",
        "py": "Pucheng Xian",
        "jp": "pcx",
        "qp": "PuchengXian"
}, {
    "cName": "光泽县",
        "code": "350723",
        "py": "Guangze Xian",
        "jp": "gzx",
        "qp": "GuangzeXian"
}, {
    "cName": "松溪县",
        "code": "350724",
        "py": "Songxi Xian",
        "jp": "sxx",
        "qp": "SongxiXian"
}, {
    "cName": "政和县",
        "code": "350725",
        "py": "Zhenghe Xian",
        "jp": "zhx",
        "qp": "ZhengheXian"
}, {
    "cName": "龙岩市",
        "code": "350800",
        "py": "Longyan Shi",
        "jp": "lys",
        "qp": "LongyanShi"
}, {
    "cName": "新罗区",
        "code": "350802",
        "py": "Xinluo Qu",
        "jp": "xlq",
        "qp": "XinluoQu"
}, {
    "cName": "永定区",
        "code": "350803",
        "py": "Yongding Qu",
        "jp": "ydq",
        "qp": "YongdingQu"
}, {
    "cName": "漳平市",
        "code": "350881",
        "py": "Zhangping Shi",
        "jp": "zps",
        "qp": "ZhangpingShi"
}, {
    "cName": "长汀县",
        "code": "350821",
        "py": "Changting Xian",
        "jp": "ctx",
        "qp": "ChangtingXian"
}, {
    "cName": "上杭县",
        "code": "350823",
        "py": "Shanghang Xian",
        "jp": "shx",
        "qp": "ShanghangXian"
}, {
    "cName": "武平县",
        "code": "350824",
        "py": "Wuping Xian",
        "jp": "wpx",
        "qp": "WupingXian"
}, {
    "cName": "连城县",
        "code": "350825",
        "py": "Liancheng Xian",
        "jp": "lcx",
        "qp": "LianchengXian"
}, {
    "cName": "宁德市",
        "code": "350900",
        "py": "Ningde Shi",
        "jp": "nds",
        "qp": "NingdeShi"
}, {
    "cName": "蕉城区",
        "code": "350902",
        "py": "Jiaocheng Qu",
        "jp": "jcq",
        "qp": "JiaochengQu"
}, {
    "cName": "福安市",
        "code": "350981",
        "py": "Fu&#39;an Shi",
        "jp": "fas",
        "qp": "FuanShi"
}, {
    "cName": "福鼎市",
        "code": "350982",
        "py": "Fuding Shi",
        "jp": "fds",
        "qp": "FudingShi"
}, {
    "cName": "霞浦县",
        "code": "350921",
        "py": "Xiapu Xian",
        "jp": "xpx",
        "qp": "XiapuXian"
}, {
    "cName": "古田县",
        "code": "350922",
        "py": "Gutian Xian",
        "jp": "gtx",
        "qp": "GutianXian"
}, {
    "cName": "屏南县",
        "code": "350923",
        "py": "Pingnan Xian",
        "jp": "pnx",
        "qp": "PingnanXian"
}, {
    "cName": "寿宁县",
        "code": "350924",
        "py": "Shouning Xian",
        "jp": "snx",
        "qp": "ShouningXian"
}, {
    "cName": "周宁县",
        "code": "350925",
        "py": "Zhouning Xian",
        "jp": "znx",
        "qp": "ZhouningXian"
}, {
    "cName": "柘荣县",
        "code": "350926",
        "py": "Zherong Xian",
        "jp": "zrx",
        "qp": "ZherongXian"
}, {
    "cName": "江西省",
        "code": "360000",
        "py": "Jiangxi Sheng",
        "jp": "jxs",
        "qp": "JiangxiSheng"
}, {
    "cName": "南昌市",
        "code": "360100",
        "py": "Nanchang Shi",
        "jp": "ncs",
        "qp": "NanchangShi"
}, {
    "cName": "东湖区",
        "code": "360102",
        "py": "Donghu Qu",
        "jp": "dhq",
        "qp": "DonghuQu"
}, {
    "cName": "西湖区",
        "code": "360103",
        "py": "Xihu Qu",
        "jp": "xhq",
        "qp": "XihuQu"
}, {
    "cName": "青云谱区",
        "code": "360104",
        "py": "Qingyunpu Qu",
        "jp": "qypq",
        "qp": "QingyunpuQu"
}, {
    "cName": "湾里区",
        "code": "360105",
        "py": "Wanli Qu",
        "jp": "wlq",
        "qp": "WanliQu"
}, {
    "cName": "青山湖区",
        "code": "360111",
        "py": "Qingshanhu Qu",
        "jp": "qshq",
        "qp": "QingshanhuQu"
}, {
    "cName": "新建区",
        "code": "360112",
        "py": "Xinjian Qu",
        "jp": "xjq",
        "qp": "XinjianQu"
}, {
    "cName": "南昌县",
        "code": "360121",
        "py": "Nanchang Xian",
        "jp": "ncx",
        "qp": "NanchangXian"
}, {
    "cName": "安义县",
        "code": "360123",
        "py": "Anyi Xian",
        "jp": "ayx",
        "qp": "AnyiXian"
}, {
    "cName": "进贤县",
        "code": "360124",
        "py": "Jinxian Xian",
        "jp": "jxx",
        "qp": "JinxianXian"
}, {
    "cName": "景德镇市",
        "code": "360200",
        "py": "Jingdezhen Shi",
        "jp": "jdzs",
        "qp": "JingdezhenShi"
}, {
    "cName": "昌江区",
        "code": "360202",
        "py": "Changjiang Qu",
        "jp": "cjq",
        "qp": "ChangjiangQu"
}, {
    "cName": "珠山区",
        "code": "360203",
        "py": "Zhushan Qu",
        "jp": "zsq",
        "qp": "ZhushanQu"
}, {
    "cName": "乐平市",
        "code": "360281",
        "py": "Leping Shi",
        "jp": "lps",
        "qp": "LepingShi"
}, {
    "cName": "浮梁县",
        "code": "360222",
        "py": "Fuliang Xian",
        "jp": "flx",
        "qp": "FuliangXian"
}, {
    "cName": "萍乡市",
        "code": "360300",
        "py": "Pingxiang Shi",
        "jp": "pxs",
        "qp": "PingxiangShi"
}, {
    "cName": "安源区",
        "code": "360302",
        "py": "Anyuan Qu",
        "jp": "ayq",
        "qp": "AnyuanQu"
}, {
    "cName": "湘东区",
        "code": "360313",
        "py": "Xiangdong Qu",
        "jp": "xdq",
        "qp": "XiangdongQu"
}, {
    "cName": "莲花县",
        "code": "360321",
        "py": "Lianhua Xian",
        "jp": "lhx",
        "qp": "LianhuaXian"
}, {
    "cName": "上栗县",
        "code": "360322",
        "py": "Shangli Xian",
        "jp": "slx",
        "qp": "ShangliXian"
}, {
    "cName": "芦溪县",
        "code": "360323",
        "py": "Luxi Xian",
        "jp": "lxx",
        "qp": "LuxiXian"
}, {
    "cName": "九江市",
        "code": "360400",
        "py": "Jiujiang Shi",
        "jp": "jjs",
        "qp": "JiujiangShi"
}, {
    "cName": "浔阳区",
        "code": "360403",
        "py": "Xunyang Qu",
        "jp": "xyq",
        "qp": "XunyangQu"
}, {
    "cName": "濂溪区",
        "code": "360402",
        "py": "Lianxi Qu",
        "jp": "lxq",
        "qp": "LianxiQu"
}, {
    "cName": "柴桑区",
        "code": "360404",
        "py": "Chaisang Qu",
        "jp": "csq",
        "qp": "ChaisangQu"
}, {
    "cName": "瑞昌市",
        "code": "360481",
        "py": "Ruichang Shi",
        "jp": "rcs",
        "qp": "RuichangShi"
}, {
    "cName": "共青城市",
        "code": "360482",
        "py": "Gongqingcheng Shi",
        "jp": "gqcs",
        "qp": "GongqingchengShi"
}, {
    "cName": "庐山市",
        "code": "360483",
        "py": "Lushan Shi",
        "jp": "lss",
        "qp": "LushanShi"
}, {
    "cName": "武宁县",
        "code": "360423",
        "py": "Wuning Xian",
        "jp": "wnx",
        "qp": "WuningXian"
}, {
    "cName": "修水县",
        "code": "360424",
        "py": "Xiushui Xian",
        "jp": "xsx",
        "qp": "XiushuiXian"
}, {
    "cName": "永修县",
        "code": "360425",
        "py": "Yongxiu Xian",
        "jp": "yxx",
        "qp": "YongxiuXian"
}, {
    "cName": "德安县",
        "code": "360426",
        "py": "De&#39;an Xian",
        "jp": "dax",
        "qp": "DeanXian"
}, {
    "cName": "都昌县",
        "code": "360428",
        "py": "Duchang Xian",
        "jp": "dcx",
        "qp": "DuchangXian"
}, {
    "cName": "湖口县",
        "code": "360429",
        "py": "Hukou Xian",
        "jp": "hkx",
        "qp": "HukouXian"
}, {
    "cName": "彭泽县",
        "code": "360430",
        "py": "Pengze Xian",
        "jp": "pzx",
        "qp": "PengzeXian"
}, {
    "cName": "新余市",
        "code": "360500",
        "py": "Xinyu Shi",
        "jp": "xys",
        "qp": "XinyuShi"
}, {
    "cName": "渝水区",
        "code": "360502",
        "py": "Yushui Qu",
        "jp": "ysq",
        "qp": "YushuiQu"
}, {
    "cName": "分宜县",
        "code": "360521",
        "py": "Fenyi Xian",
        "jp": "fyx",
        "qp": "FenyiXian"
}, {
    "cName": "鹰潭市",
        "code": "360600",
        "py": "Yingtan Shi",
        "jp": "yts",
        "qp": "YingtanShi"
}, {
    "cName": "月湖区",
        "code": "360602",
        "py": "Yuehu Qu",
        "jp": "yhq",
        "qp": "YuehuQu"
}, {
    "cName": "贵溪市",
        "code": "360681",
        "py": "Guixi Shi",
        "jp": "gxs",
        "qp": "GuixiShi"
}, {
    "cName": "余江县",
        "code": "360622",
        "py": "Yujiang Xian",
        "jp": "yjx",
        "qp": "YujiangXian"
}, {
    "cName": "赣州市",
        "code": "360700",
        "py": "Ganzhou Shi",
        "jp": "gzs",
        "qp": "GanzhouShi"
}, {
    "cName": "章贡区",
        "code": "360702",
        "py": "Zhanggong Qu",
        "jp": "zgq",
        "qp": "ZhanggongQu"
}, {
    "cName": "南康区",
        "code": "360703",
        "py": "Nankang Qu",
        "jp": "nkq",
        "qp": "NankangQu"
}, {
    "cName": "赣县区",
        "code": "360704",
        "py": "Ganxian Qu",
        "jp": "gxq",
        "qp": "GanxianQu"
}, {
    "cName": "瑞金市",
        "code": "360781",
        "py": "Ruijin Shi",
        "jp": "rjs",
        "qp": "RuijinShi"
}, {
    "cName": "信丰县",
        "code": "360722",
        "py": "Xinfeng Xian",
        "jp": "xfx",
        "qp": "XinfengXian"
}, {
    "cName": "大余县",
        "code": "360723",
        "py": "Dayu Xian",
        "jp": "dyx",
        "qp": "DayuXian"
}, {
    "cName": "上犹县",
        "code": "360724",
        "py": "Shangyou Xian",
        "jp": "syx",
        "qp": "ShangyouXian"
}, {
    "cName": "崇义县",
        "code": "360725",
        "py": "Chongyi Xian",
        "jp": "cyx",
        "qp": "ChongyiXian"
}, {
    "cName": "安远县",
        "code": "360726",
        "py": "Anyuan Xian",
        "jp": "ayx",
        "qp": "AnyuanXian"
}, {
    "cName": "龙南县",
        "code": "360727",
        "py": "Longnan Xian",
        "jp": "lnx",
        "qp": "LongnanXian"
}, {
    "cName": "定南县",
        "code": "360728",
        "py": "Dingnan Xian",
        "jp": "dnx",
        "qp": "DingnanXian"
}, {
    "cName": "全南县",
        "code": "360729",
        "py": "Quannan Xian",
        "jp": "qnx",
        "qp": "QuannanXian"
}, {
    "cName": "宁都县",
        "code": "360730",
        "py": "Ningdu Xian",
        "jp": "ndx",
        "qp": "NingduXian"
}, {
    "cName": "于都县",
        "code": "360731",
        "py": "Yudu Xian",
        "jp": "ydx",
        "qp": "YuduXian"
}, {
    "cName": "兴国县",
        "code": "360732",
        "py": "Xingguo Xian",
        "jp": "xgx",
        "qp": "XingguoXian"
}, {
    "cName": "会昌县",
        "code": "360733",
        "py": "Huichang Xian",
        "jp": "hcx",
        "qp": "HuichangXian"
}, {
    "cName": "寻乌县",
        "code": "360734",
        "py": "Xunwu Xian",
        "jp": "xwx",
        "qp": "XunwuXian"
}, {
    "cName": "石城县",
        "code": "360735",
        "py": "Shicheng Xian",
        "jp": "scx",
        "qp": "ShichengXian"
}, {
    "cName": "吉安市",
        "code": "360800",
        "py": "Ji&#39;an Shi",
        "jp": "jas",
        "qp": "JianShi"
}, {
    "cName": "吉州区",
        "code": "360802",
        "py": "Jizhou Qu",
        "jp": "jzq",
        "qp": "JizhouQu"
}, {
    "cName": "青原区",
        "code": "360803",
        "py": "Qingyuan Qu",
        "jp": "qyq",
        "qp": "QingyuanQu"
}, {
    "cName": "井冈山市",
        "code": "360881",
        "py": "Jinggangshan Shi",
        "jp": "jgss",
        "qp": "JinggangshanShi"
}, {
    "cName": "吉安县",
        "code": "360821",
        "py": "Ji&#39;an Xian",
        "jp": "jax",
        "qp": "JianXian"
}, {
    "cName": "吉水县",
        "code": "360822",
        "py": "Jishui Xian",
        "jp": "jsx",
        "qp": "JishuiXian"
}, {
    "cName": "峡江县",
        "code": "360823",
        "py": "Xiajiang Xian",
        "jp": "xjx",
        "qp": "XiajiangXian"
}, {
    "cName": "新干县",
        "code": "360824",
        "py": "Xingan Xian",
        "jp": "xgx",
        "qp": "XinganXian"
}, {
    "cName": "永丰县",
        "code": "360825",
        "py": "Yongfeng Xian",
        "jp": "yfx",
        "qp": "YongfengXian"
}, {
    "cName": "泰和县",
        "code": "360826",
        "py": "Taihe Xian",
        "jp": "thx",
        "qp": "TaiheXian"
}, {
    "cName": "遂川县",
        "code": "360827",
        "py": "Suichuan Xian",
        "jp": "scx",
        "qp": "SuichuanXian"
}, {
    "cName": "万安县",
        "code": "360828",
        "py": "Wan&#39;an Xian",
        "jp": "wax",
        "qp": "WananXian"
}, {
    "cName": "安福县",
        "code": "360829",
        "py": "Anfu Xian",
        "jp": "afx",
        "qp": "AnfuXian"
}, {
    "cName": "永新县",
        "code": "360830",
        "py": "Yongxin Xian",
        "jp": "yxx",
        "qp": "YongxinXian"
}, {
    "cName": "宜春市",
        "code": "360900",
        "py": "Yichun Shi",
        "jp": "ycs",
        "qp": "YichunShi"
}, {
    "cName": "袁州区",
        "code": "360902",
        "py": "Yuanzhou Qu",
        "jp": "yzq",
        "qp": "YuanzhouQu"
}, {
    "cName": "丰城市",
        "code": "360981",
        "py": "Fengcheng Shi",
        "jp": "fcs",
        "qp": "FengchengShi"
}, {
    "cName": "樟树市",
        "code": "360982",
        "py": "Zhangshu Shi",
        "jp": "zss",
        "qp": "ZhangshuShi"
}, {
    "cName": "高安市",
        "code": "360983",
        "py": "Gao&#39;an Shi",
        "jp": "gas",
        "qp": "GaoanShi"
}, {
    "cName": "奉新县",
        "code": "360921",
        "py": "Fengxin Xian",
        "jp": "fxx",
        "qp": "FengxinXian"
}, {
    "cName": "万载县",
        "code": "360922",
        "py": "Wanzai Xian",
        "jp": "wzx",
        "qp": "WanzaiXian"
}, {
    "cName": "上高县",
        "code": "360923",
        "py": "Shanggao Xian",
        "jp": "sgx",
        "qp": "ShanggaoXian"
}, {
    "cName": "宜丰县",
        "code": "360924",
        "py": "Yifeng Xian",
        "jp": "yfx",
        "qp": "YifengXian"
}, {
    "cName": "靖安县",
        "code": "360925",
        "py": "Jing&#39;an Xian",
        "jp": "jax",
        "qp": "JinganXian"
}, {
    "cName": "铜鼓县",
        "code": "360926",
        "py": "Tonggu Xian",
        "jp": "tgx",
        "qp": "TongguXian"
}, {
    "cName": "抚州市",
        "code": "361000",
        "py": "Fuzhou Shi",
        "jp": "fzs",
        "qp": "FuzhouShi"
}, {
    "cName": "临川区",
        "code": "361002",
        "py": "Linchuan Qu",
        "jp": "lcq",
        "qp": "LinchuanQu"
}, {
    "cName": "东乡区",
        "code": "361003",
        "py": "Dongxiang Qu",
        "jp": "dxq",
        "qp": "DongxiangQu"
}, {
    "cName": "南城县",
        "code": "361021",
        "py": "Nancheng Xian",
        "jp": "ncx",
        "qp": "NanchengXian"
}, {
    "cName": "黎川县",
        "code": "361022",
        "py": "Lichuan Xian",
        "jp": "lcx",
        "qp": "LichuanXian"
}, {
    "cName": "南丰县",
        "code": "361023",
        "py": "Nanfeng Xian",
        "jp": "nfx",
        "qp": "NanfengXian"
}, {
    "cName": "崇仁县",
        "code": "361024",
        "py": "Chongren Xian",
        "jp": "crx",
        "qp": "ChongrenXian"
}, {
    "cName": "乐安县",
        "code": "361025",
        "py": "Le&#39;an Xian",
        "jp": "lax",
        "qp": "LeanXian"
}, {
    "cName": "宜黄县",
        "code": "361026",
        "py": "Yihuang Xian",
        "jp": "yhx",
        "qp": "YihuangXian"
}, {
    "cName": "金溪县",
        "code": "361027",
        "py": "Jinxi Xian",
        "jp": "jxx",
        "qp": "JinxiXian"
}, {
    "cName": "资溪县",
        "code": "361028",
        "py": "Zixi Xian",
        "jp": "zxx",
        "qp": "ZixiXian"
}, {
    "cName": "广昌县",
        "code": "361030",
        "py": "Guangchang Xian",
        "jp": "gcx",
        "qp": "GuangchangXian"
}, {
    "cName": "上饶市",
        "code": "361100",
        "py": "Shangrao Shi",
        "jp": "srs",
        "qp": "ShangraoShi"
}, {
    "cName": "信州区",
        "code": "361102",
        "py": "Xinzhou Qu",
        "jp": "xzq",
        "qp": "XinzhouQu"
}, {
    "cName": "广丰区",
        "code": "361103",
        "py": "Guangfeng Qu",
        "jp": "gfq",
        "qp": "GuangfengQu"
}, {
    "cName": "德兴市",
        "code": "361181",
        "py": "Dexing Shi",
        "jp": "dxs",
        "qp": "DexingShi"
}, {
    "cName": "上饶县",
        "code": "361121",
        "py": "Shangrao Xian",
        "jp": "srx",
        "qp": "ShangraoXian"
}, {
    "cName": "玉山县",
        "code": "361123",
        "py": "Yushan Xian",
        "jp": "ysx",
        "qp": "YushanXian"
}, {
    "cName": "铅山县",
        "code": "361124",
        "py": "Yanshan Xian",
        "jp": "ysx",
        "qp": "YanshanXian"
}, {
    "cName": "横峰县",
        "code": "361125",
        "py": "Hengfeng Xian",
        "jp": "hfx",
        "qp": "HengfengXian"
}, {
    "cName": "弋阳县",
        "code": "361126",
        "py": "Yiyang Xian",
        "jp": "yyx",
        "qp": "YiyangXian"
}, {
    "cName": "余干县",
        "code": "361127",
        "py": "Yugan Xian",
        "jp": "ygx",
        "qp": "YuganXian"
}, {
    "cName": "鄱阳县",
        "code": "361128",
        "py": "Poyang Xian",
        "jp": "pyx",
        "qp": "PoyangXian"
}, {
    "cName": "万年县",
        "code": "361129",
        "py": "Wannian Xian",
        "jp": "wnx",
        "qp": "WannianXian"
}, {
    "cName": "婺源县",
        "code": "361130",
        "py": "Wuyuan Xian",
        "jp": "wyx",
        "qp": "WuyuanXian"
}, {
    "cName": "山东省",
        "code": "370000",
        "py": "Shandong Sheng",
        "jp": "sds",
        "qp": "ShandongSheng"
}, {
    "cName": "济南市",
        "code": "370100",
        "py": "Jinan Shi",
        "jp": "jns",
        "qp": "JinanShi"
}, {
    "cName": "市中区",
        "code": "370103",
        "py": "Shizhong Qu",
        "jp": "szq",
        "qp": "ShizhongQu"
}, {
    "cName": "历下区",
        "code": "370102",
        "py": "Lixia Qu",
        "jp": "lxq",
        "qp": "LixiaQu"
}, {
    "cName": "槐荫区",
        "code": "370104",
        "py": "Huaiyin Qu",
        "jp": "hyq",
        "qp": "HuaiyinQu"
}, {
    "cName": "天桥区",
        "code": "370105",
        "py": "Tianqiao Qu",
        "jp": "tqq",
        "qp": "TianqiaoQu"
}, {
    "cName": "历城区",
        "code": "370112",
        "py": "Licheng Qu",
        "jp": "lcq",
        "qp": "LichengQu"
}, {
    "cName": "长清区",
        "code": "370113",
        "py": "Changqing Qu",
        "jp": "cqq",
        "qp": "ChangqingQu"
}, {
    "cName": "章丘区",
        "code": "370114",
        "py": "Zhangqiu Qu",
        "jp": "zqq",
        "qp": "ZhangqiuQu"
}, {
    "cName": "平阴县",
        "code": "370124",
        "py": "Pingyin Xian",
        "jp": "pyx",
        "qp": "PingyinXian"
}, {
    "cName": "济阳县",
        "code": "370125",
        "py": "Jiyang Xian",
        "jp": "jyx",
        "qp": "JiyangXian"
}, {
    "cName": "商河县",
        "code": "370126",
        "py": "Shanghe Xian",
        "jp": "shx",
        "qp": "ShangheXian"
}, {
    "cName": "青岛市",
        "code": "370200",
        "py": "Qingdao Shi",
        "jp": "qds",
        "qp": "QingdaoShi"
}, {
    "cName": "市南区",
        "code": "370202",
        "py": "Shinan Qu",
        "jp": "snq",
        "qp": "ShinanQu"
}, {
    "cName": "市北区",
        "code": "370203",
        "py": "Shibei Qu",
        "jp": "sbq",
        "qp": "ShibeiQu"
}, {
    "cName": "黄岛区",
        "code": "370211",
        "py": "Huangdao Qu",
        "jp": "hdq",
        "qp": "HuangdaoQu"
}, {
    "cName": "崂山区",
        "code": "370212",
        "py": "Laoshan Qu",
        "jp": "lsq",
        "qp": "LaoshanQu"
}, {
    "cName": "李沧区",
        "code": "370213",
        "py": "Licang Qu",
        "jp": "lcq",
        "qp": "LicangQu"
}, {
    "cName": "城阳区",
        "code": "370214",
        "py": "Chengyang Qu",
        "jp": "cyq",
        "qp": "ChengyangQu"
}, {
    "cName": "即墨区",
        "code": "370215",
        "py": "Jimo Qu",
        "jp": "jmq",
        "qp": "JimoQu"
}, {
    "cName": "胶州市",
        "code": "370281",
        "py": "Jiaozhou Shi",
        "jp": "jzs",
        "qp": "JiaozhouShi"
}, {
    "cName": "平度市",
        "code": "370283",
        "py": "Pingdu Shi",
        "jp": "pds",
        "qp": "PingduShi"
}, {
    "cName": "莱西市",
        "code": "370285",
        "py": "Laixi Shi",
        "jp": "lxs",
        "qp": "LaixiShi"
}, {
    "cName": "淄博市",
        "code": "370300",
        "py": "Zibo Shi",
        "jp": "zbs",
        "qp": "ZiboShi"
}, {
    "cName": "张店区",
        "code": "370303",
        "py": "Zhangdian Qu",
        "jp": "zdq",
        "qp": "ZhangdianQu"
}, {
    "cName": "淄川区",
        "code": "370302",
        "py": "Zichuan Qu",
        "jp": "zcq",
        "qp": "ZichuanQu"
}, {
    "cName": "博山区",
        "code": "370304",
        "py": "Boshan Qu",
        "jp": "bsq",
        "qp": "BoshanQu"
}, {
    "cName": "临淄区",
        "code": "370305",
        "py": "Linzi Qu",
        "jp": "lzq",
        "qp": "LinziQu"
}, {
    "cName": "周村区",
        "code": "370306",
        "py": "Zhoucun Qu",
        "jp": "zcq",
        "qp": "ZhoucunQu"
}, {
    "cName": "桓台县",
        "code": "370321",
        "py": "Huantai Xian",
        "jp": "htx",
        "qp": "HuantaiXian"
}, {
    "cName": "高青县",
        "code": "370322",
        "py": "Gaoqing Xian",
        "jp": "gqx",
        "qp": "GaoqingXian"
}, {
    "cName": "沂源县",
        "code": "370323",
        "py": "Yiyuan Xian",
        "jp": "yyx",
        "qp": "YiyuanXian"
}, {
    "cName": "枣庄市",
        "code": "370400",
        "py": "Zaozhuang Shi",
        "jp": "zzs",
        "qp": "ZaozhuangShi"
}, {
    "cName": "薛城区",
        "code": "370403",
        "py": "Xuecheng Qu",
        "jp": "xcq",
        "qp": "XuechengQu"
}, {
    "cName": "市中区",
        "code": "370402",
        "py": "Shizhong Qu",
        "jp": "szq",
        "qp": "ShizhongQu"
}, {
    "cName": "峄城区",
        "code": "370404",
        "py": "Yicheng Qu",
        "jp": "ycq",
        "qp": "YichengQu"
}, {
    "cName": "台儿庄区",
        "code": "370405",
        "py": "Tai&#39;erzhuang Qu",
        "jp": "tezq",
        "qp": "TaierzhuangQu"
}, {
    "cName": "山亭区",
        "code": "370406",
        "py": "Shanting Qu",
        "jp": "stq",
        "qp": "ShantingQu"
}, {
    "cName": "滕州市",
        "code": "370481",
        "py": "Tengzhou Shi",
        "jp": "tzs",
        "qp": "TengzhouShi"
}, {
    "cName": "东营市",
        "code": "370500",
        "py": "Dongying Shi",
        "jp": "dys",
        "qp": "DongyingShi"
}, {
    "cName": "东营区",
        "code": "370502",
        "py": "Dongying Qu",
        "jp": "dyq",
        "qp": "DongyingQu"
}, {
    "cName": "河口区",
        "code": "370503",
        "py": "Hekou Qu",
        "jp": "hkq",
        "qp": "HekouQu"
}, {
    "cName": "垦利区",
        "code": "370505",
        "py": "Kenli Qu",
        "jp": "klq",
        "qp": "KenliQu"
}, {
    "cName": "利津县",
        "code": "370522",
        "py": "Lijin Xian",
        "jp": "ljx",
        "qp": "LijinXian"
}, {
    "cName": "广饶县",
        "code": "370523",
        "py": "Guangrao Xian",
        "jp": "grx",
        "qp": "GuangraoXian"
}, {
    "cName": "烟台市",
        "code": "370600",
        "py": "Yantai Shi",
        "jp": "yts",
        "qp": "YantaiShi"
}, {
    "cName": "莱山区",
        "code": "370613",
        "py": "Laishan Qu",
        "jp": "lsq",
        "qp": "LaishanQu"
}, {
    "cName": "芝罘区",
        "code": "370602",
        "py": "Zhifu Qu",
        "jp": "zfq",
        "qp": "ZhifuQu"
}, {
    "cName": "福山区",
        "code": "370611",
        "py": "Fushan Qu",
        "jp": "fsq",
        "qp": "FushanQu"
}, {
    "cName": "牟平区",
        "code": "370612",
        "py": "Muping Qu",
        "jp": "mpq",
        "qp": "MupingQu"
}, {
    "cName": "龙口市",
        "code": "370681",
        "py": "Longkou Shi",
        "jp": "lks",
        "qp": "LongkouShi"
}, {
    "cName": "莱阳市",
        "code": "370682",
        "py": "Laiyang Shi",
        "jp": "lys",
        "qp": "LaiyangShi"
}, {
    "cName": "莱州市",
        "code": "370683",
        "py": "Laizhou Shi",
        "jp": "lzs",
        "qp": "LaizhouShi"
}, {
    "cName": "蓬莱市",
        "code": "370684",
        "py": "Penglai Shi",
        "jp": "pls",
        "qp": "PenglaiShi"
}, {
    "cName": "招远市",
        "code": "370685",
        "py": "Zhaoyuan Shi",
        "jp": "zys",
        "qp": "ZhaoyuanShi"
}, {
    "cName": "栖霞市",
        "code": "370686",
        "py": "Qixia Shi",
        "jp": "qxs",
        "qp": "QixiaShi"
}, {
    "cName": "海阳市",
        "code": "370687",
        "py": "Haiyang Shi",
        "jp": "hys",
        "qp": "HaiyangShi"
}, {
    "cName": "长岛县",
        "code": "370634",
        "py": "Changdao Xian",
        "jp": "cdx",
        "qp": "ChangdaoXian"
}, {
    "cName": "潍坊市",
        "code": "370700",
        "py": "Weifang Shi",
        "jp": "wfs",
        "qp": "WeifangShi"
}, {
    "cName": "奎文区",
        "code": "370705",
        "py": "Kuiwen Qu",
        "jp": "kwq",
        "qp": "KuiwenQu"
}, {
    "cName": "潍城区",
        "code": "370702",
        "py": "Weicheng Qu",
        "jp": "wcq",
        "qp": "WeichengQu"
}, {
    "cName": "寒亭区",
        "code": "370703",
        "py": "Hanting Qu",
        "jp": "htq",
        "qp": "HantingQu"
}, {
    "cName": "坊子区",
        "code": "370704",
        "py": "Fangzi Qu",
        "jp": "fzq",
        "qp": "FangziQu"
}, {
    "cName": "青州市",
        "code": "370781",
        "py": "Qingzhou Shi",
        "jp": "qzs",
        "qp": "QingzhouShi"
}, {
    "cName": "诸城市",
        "code": "370782",
        "py": "Zhucheng Shi",
        "jp": "zcs",
        "qp": "ZhuchengShi"
}, {
    "cName": "寿光市",
        "code": "370783",
        "py": "Shouguang Shi",
        "jp": "sgs",
        "qp": "ShouguangShi"
}, {
    "cName": "安丘市",
        "code": "370784",
        "py": "Anqiu Shi",
        "jp": "aqs",
        "qp": "AnqiuShi"
}, {
    "cName": "高密市",
        "code": "370785",
        "py": "Gaomi Shi",
        "jp": "gms",
        "qp": "GaomiShi"
}, {
    "cName": "昌邑市",
        "code": "370786",
        "py": "Changyi Shi",
        "jp": "cys",
        "qp": "ChangyiShi"
}, {
    "cName": "临朐县",
        "code": "370724",
        "py": "Linqu Xian",
        "jp": "lqx",
        "qp": "LinquXian"
}, {
    "cName": "昌乐县",
        "code": "370725",
        "py": "Changle Xian",
        "jp": "clx",
        "qp": "ChangleXian"
}, {
    "cName": "济宁市",
        "code": "370800",
        "py": "Jining Shi",
        "jp": "jns",
        "qp": "JiningShi"
}, {
    "cName": "任城区",
        "code": "370811",
        "py": "Rencheng Qu",
        "jp": "rcq",
        "qp": "RenchengQu"
}, {
    "cName": "兖州区",
        "code": "370812",
        "py": "Yanzhou Qu",
        "jp": "yzq",
        "qp": "YanzhouQu"
}, {
    "cName": "曲阜市",
        "code": "370881",
        "py": "Qufu Shi",
        "jp": "qfs",
        "qp": "QufuShi"
}, {
    "cName": "邹城市",
        "code": "370883",
        "py": "Zoucheng Shi",
        "jp": "zcs",
        "qp": "ZouchengShi"
}, {
    "cName": "微山县",
        "code": "370826",
        "py": "Weishan Xian",
        "jp": "wsx",
        "qp": "WeishanXian"
}, {
    "cName": "鱼台县",
        "code": "370827",
        "py": "Yutai Xian",
        "jp": "ytx",
        "qp": "YutaiXian"
}, {
    "cName": "金乡县",
        "code": "370828",
        "py": "Jinxiang Xian",
        "jp": "jxx",
        "qp": "JinxiangXian"
}, {
    "cName": "嘉祥县",
        "code": "370829",
        "py": "Jiaxiang Xian",
        "jp": "jxx",
        "qp": "JiaxiangXian"
}, {
    "cName": "汶上县",
        "code": "370830",
        "py": "Wenshang Xian",
        "jp": "wsx",
        "qp": "WenshangXian"
}, {
    "cName": "泗水县",
        "code": "370831",
        "py": "Sishui Xian",
        "jp": "ssx",
        "qp": "SishuiXian"
}, {
    "cName": "梁山县",
        "code": "370832",
        "py": "Liangshan Xian",
        "jp": "lsx",
        "qp": "LiangshanXian"
}, {
    "cName": "泰安市",
        "code": "370900",
        "py": "Tai&#39;an Shi",
        "jp": "tas",
        "qp": "TaianShi"
}, {
    "cName": "泰山区",
        "code": "370902",
        "py": "Taishan Qu",
        "jp": "tsq",
        "qp": "TaishanQu"
}, {
    "cName": "岱岳区",
        "code": "370911",
        "py": "Daiyue Qu",
        "jp": "dyq",
        "qp": "DaiyueQu"
}, {
    "cName": "新泰市",
        "code": "370982",
        "py": "Xintai Shi",
        "jp": "xts",
        "qp": "XintaiShi"
}, {
    "cName": "肥城市",
        "code": "370983",
        "py": "Feicheng Shi",
        "jp": "fcs",
        "qp": "FeichengShi"
}, {
    "cName": "宁阳县",
        "code": "370921",
        "py": "Ningyang Xian",
        "jp": "nyx",
        "qp": "NingyangXian"
}, {
    "cName": "东平县",
        "code": "370923",
        "py": "Dongping Xian",
        "jp": "dpx",
        "qp": "DongpingXian"
}, {
    "cName": "威海市",
        "code": "371000",
        "py": "Weihai Shi",
        "jp": "whs",
        "qp": "WeihaiShi"
}, {
    "cName": "环翠区",
        "code": "371002",
        "py": "Huancui Qu",
        "jp": "hcq",
        "qp": "HuancuiQu"
}, {
    "cName": "文登区",
        "code": "371003",
        "py": "Wendeng Qu",
        "jp": "wdq",
        "qp": "WendengQu"
}, {
    "cName": "荣成市",
        "code": "371082",
        "py": "Rongcheng Shi",
        "jp": "rcs",
        "qp": "RongchengShi"
}, {
    "cName": "乳山市",
        "code": "371083",
        "py": "Rushan Shi",
        "jp": "rss",
        "qp": "RushanShi"
}, {
    "cName": "日照市",
        "code": "371100",
        "py": "Rizhao Shi",
        "jp": "rzs",
        "qp": "RizhaoShi"
}, {
    "cName": "东港区",
        "code": "371102",
        "py": "Donggang Qu",
        "jp": "dgq",
        "qp": "DonggangQu"
}, {
    "cName": "岚山区",
        "code": "371103",
        "py": "Lanshan Qu",
        "jp": "lsq",
        "qp": "LanshanQu"
}, {
    "cName": "五莲县",
        "code": "371121",
        "py": "Wulian Xian",
        "jp": "wlx",
        "qp": "WulianXian"
}, {
    "cName": "莒县",
        "code": "371122",
        "py": "Ju Xian",
        "jp": "jx",
        "qp": "JuXian"
}, {
    "cName": "莱芜市",
        "code": "371200",
        "py": "Laiwu Shi",
        "jp": "lws",
        "qp": "LaiwuShi"
}, {
    "cName": "莱城区",
        "code": "371202",
        "py": "Laicheng Qu",
        "jp": "lcq",
        "qp": "LaichengQu"
}, {
    "cName": "钢城区",
        "code": "371203",
        "py": "Gangcheng Qu",
        "jp": "gcq",
        "qp": "GangchengQu"
}, {
    "cName": "临沂市",
        "code": "371300",
        "py": "Linyi Shi",
        "jp": "lys",
        "qp": "LinyiShi"
}, {
    "cName": "兰山区",
        "code": "371302",
        "py": "Lanshan Qu",
        "jp": "lsq",
        "qp": "LanshanQu"
}, {
    "cName": "罗庄区",
        "code": "371311",
        "py": "Luozhuang Qu",
        "jp": "lzq",
        "qp": "LuozhuangQu"
}, {
    "cName": "河东区",
        "code": "371312",
        "py": "Hedong Qu",
        "jp": "hdq",
        "qp": "HedongQu"
}, {
    "cName": "沂南县",
        "code": "371321",
        "py": "Yinan Xian",
        "jp": "ynx",
        "qp": "YinanXian"
}, {
    "cName": "郯城县",
        "code": "371322",
        "py": "Tancheng Xian",
        "jp": "tcx",
        "qp": "TanchengXian"
}, {
    "cName": "沂水县",
        "code": "371323",
        "py": "Yishui Xian",
        "jp": "ysx",
        "qp": "YishuiXian"
}, {
    "cName": "兰陵县",
        "code": "371324",
        "py": "Lanling Xian",
        "jp": "llx",
        "qp": "LanlingXian"
}, {
    "cName": "费县",
        "code": "371325",
        "py": "Fei Xian",
        "jp": "fx",
        "qp": "FeiXian"
}, {
    "cName": "平邑县",
        "code": "371326",
        "py": "Pingyi Xian",
        "jp": "pyx",
        "qp": "PingyiXian"
}, {
    "cName": "莒南县",
        "code": "371327",
        "py": "Junan Xian",
        "jp": "jnx",
        "qp": "JunanXian"
}, {
    "cName": "蒙阴县",
        "code": "371328",
        "py": "Mengyin Xian",
        "jp": "myx",
        "qp": "MengyinXian"
}, {
    "cName": "临沭县",
        "code": "371329",
        "py": "Linshu Xian",
        "jp": "lsx",
        "qp": "LinshuXian"
}, {
    "cName": "德州市",
        "code": "371400",
        "py": "Dezhou Shi",
        "jp": "dzs",
        "qp": "DezhouShi"
}, {
    "cName": "德城区",
        "code": "371402",
        "py": "Decheng Qu",
        "jp": "dcq",
        "qp": "DechengQu"
}, {
    "cName": "陵城区",
        "code": "371403",
        "py": "Lingcheng Qu",
        "jp": "lcq",
        "qp": "LingchengQu"
}, {
    "cName": "乐陵市",
        "code": "371481",
        "py": "Leling Shi",
        "jp": "lls",
        "qp": "LelingShi"
}, {
    "cName": "禹城市",
        "code": "371482",
        "py": "Yucheng Shi",
        "jp": "ycs",
        "qp": "YuchengShi"
}, {
    "cName": "宁津县",
        "code": "371422",
        "py": "Ningjin Xian",
        "jp": "njx",
        "qp": "NingjinXian"
}, {
    "cName": "庆云县",
        "code": "371423",
        "py": "Qingyun Xian",
        "jp": "qyx",
        "qp": "QingyunXian"
}, {
    "cName": "临邑县",
        "code": "371424",
        "py": "Linyi Xian",
        "jp": "lyx",
        "qp": "LinyiXian"
}, {
    "cName": "齐河县",
        "code": "371425",
        "py": "Qihe Xian",
        "jp": "qhx",
        "qp": "QiheXian"
}, {
    "cName": "平原县",
        "code": "371426",
        "py": "Pingyuan Xian",
        "jp": "pyx",
        "qp": "PingyuanXian"
}, {
    "cName": "夏津县",
        "code": "371427",
        "py": "Xiajin Xian",
        "jp": "xjx",
        "qp": "XiajinXian"
}, {
    "cName": "武城县",
        "code": "371428",
        "py": "Wucheng Xian",
        "jp": "wcx",
        "qp": "WuchengXian"
}, {
    "cName": "聊城市",
        "code": "371500",
        "py": "Liaocheng Shi",
        "jp": "lcs",
        "qp": "LiaochengShi"
}, {
    "cName": "东昌府区",
        "code": "371502",
        "py": "Dongchangfu Qu",
        "jp": "dcfq",
        "qp": "DongchangfuQu"
}, {
    "cName": "临清市",
        "code": "371581",
        "py": "Linqing Shi",
        "jp": "lqs",
        "qp": "LinqingShi"
}, {
    "cName": "阳谷县",
        "code": "371521",
        "py": "Yanggu Xian",
        "jp": "ygx",
        "qp": "YangguXian"
}, {
    "cName": "莘县",
        "code": "371522",
        "py": "Shen Xian",
        "jp": "sx",
        "qp": "ShenXian"
}, {
    "cName": "茌平县",
        "code": "371523",
        "py": "Chiping Xian",
        "jp": "cpx",
        "qp": "ChipingXian"
}, {
    "cName": "东阿县",
        "code": "371524",
        "py": "Dong&#39;e Xian",
        "jp": "dex",
        "qp": "DongeXian"
}, {
    "cName": "冠县",
        "code": "371525",
        "py": "Guan Xian",
        "jp": "gx",
        "qp": "GuanXian"
}, {
    "cName": "高唐县",
        "code": "371526",
        "py": "Gaotang Xian",
        "jp": "gtx",
        "qp": "GaotangXian"
}, {
    "cName": "滨州市",
        "code": "371600",
        "py": "Binzhou Shi",
        "jp": "bzs",
        "qp": "BinzhouShi"
}, {
    "cName": "滨城区",
        "code": "371602",
        "py": "Bincheng Qu",
        "jp": "bcq",
        "qp": "BinchengQu"
}, {
    "cName": "沾化区",
        "code": "371603",
        "py": "Zhanhua Qu",
        "jp": "zhq",
        "qp": "ZhanhuaQu"
}, {
    "cName": "惠民县",
        "code": "371621",
        "py": "Huimin Xian",
        "jp": "hmx",
        "qp": "HuiminXian"
}, {
    "cName": "阳信县",
        "code": "371622",
        "py": "Yangxin Xian",
        "jp": "yxx",
        "qp": "YangxinXian"
}, {
    "cName": "无棣县",
        "code": "371623",
        "py": "Wudi Xian",
        "jp": "wdx",
        "qp": "WudiXian"
}, {
    "cName": "博兴县",
        "code": "371625",
        "py": "Boxing Xian",
        "jp": "bxx",
        "qp": "BoxingXian"
}, {
    "cName": "邹平县",
        "code": "371626",
        "py": "Zouping Xian",
        "jp": "zpx",
        "qp": "ZoupingXian"
}, {
    "cName": "菏泽市",
        "code": "371700",
        "py": "Heze Shi",
        "jp": "hzs",
        "qp": "HezeShi"
}, {
    "cName": "牡丹区",
        "code": "371702",
        "py": "Mudan Qu",
        "jp": "mdq",
        "qp": "MudanQu"
}, {
    "cName": "定陶区",
        "code": "371703",
        "py": "Dingtao Qu",
        "jp": "dtq",
        "qp": "DingtaoQu"
}, {
    "cName": "曹县",
        "code": "371721",
        "py": "Cao Xian",
        "jp": "cx",
        "qp": "CaoXian"
}, {
    "cName": "单县",
        "code": "371722",
        "py": "Shan Xian",
        "jp": "sx",
        "qp": "ShanXian"
}, {
    "cName": "成武县",
        "code": "371723",
        "py": "Chengwu Xian",
        "jp": "cwx",
        "qp": "ChengwuXian"
}, {
    "cName": "巨野县",
        "code": "371724",
        "py": "Juye Xian",
        "jp": "jyx",
        "qp": "JuyeXian"
}, {
    "cName": "郓城县",
        "code": "371725",
        "py": "Yuncheng Xian",
        "jp": "ycx",
        "qp": "YunchengXian"
}, {
    "cName": "鄄城县",
        "code": "371726",
        "py": "Juancheng Xian",
        "jp": "jcx",
        "qp": "JuanchengXian"
}, {
    "cName": "东明县",
        "code": "371728",
        "py": "Dongming Xian",
        "jp": "dmx",
        "qp": "DongmingXian"
}, {
    "cName": "河南省",
        "code": "410000",
        "py": "Henan Sheng",
        "jp": "hns",
        "qp": "HenanSheng"
}, {
    "cName": "郑州市",
        "code": "410100",
        "py": "Zhengzhou Shi",
        "jp": "zzs",
        "qp": "ZhengzhouShi"
}, {
    "cName": "中原区",
        "code": "410102",
        "py": "Zhongyuan Qu",
        "jp": "zyq",
        "qp": "ZhongyuanQu"
}, {
    "cName": "二七区",
        "code": "410103",
        "py": "Erqi Qu",
        "jp": "eqq",
        "qp": "ErqiQu"
}, {
    "cName": "管城回族区",
        "code": "410104",
        "py": "Guancheng Huizu Qu",
        "jp": "gchzq",
        "qp": "GuanchengHuizuQu"
}, {
    "cName": "金水区",
        "code": "410105",
        "py": "Jinshui Qu",
        "jp": "jsq",
        "qp": "JinshuiQu"
}, {
    "cName": "上街区",
        "code": "410106",
        "py": "Shangjie Qu",
        "jp": "sjq",
        "qp": "ShangjieQu"
}, {
    "cName": "惠济区",
        "code": "410108",
        "py": "Huiji Qu",
        "jp": "hjq",
        "qp": "HuijiQu"
}, {
    "cName": "巩义市",
        "code": "410181",
        "py": "Gongyi Shi",
        "jp": "gys",
        "qp": "GongyiShi"
}, {
    "cName": "荥阳市",
        "code": "410182",
        "py": "Xingyang Shi",
        "jp": "xys",
        "qp": "XingyangShi"
}, {
    "cName": "新密市",
        "code": "410183",
        "py": "Xinmi Shi",
        "jp": "xms",
        "qp": "XinmiShi"
}, {
    "cName": "新郑市",
        "code": "410184",
        "py": "Xinzheng Shi",
        "jp": "xzs",
        "qp": "XinzhengShi"
}, {
    "cName": "登封市",
        "code": "410185",
        "py": "Dengfeng Shi",
        "jp": "dfs",
        "qp": "DengfengShi"
}, {
    "cName": "中牟县",
        "code": "410122",
        "py": "Zhongmou Xian",
        "jp": "zmx",
        "qp": "ZhongmouXian"
}, {
    "cName": "开封市",
        "code": "410200",
        "py": "Kaifeng Shi",
        "jp": "kfs",
        "qp": "KaifengShi"
}, {
    "cName": "鼓楼区",
        "code": "410204",
        "py": "Gulou Qu",
        "jp": "glq",
        "qp": "GulouQu"
}, {
    "cName": "龙亭区",
        "code": "410202",
        "py": "Longting Qu",
        "jp": "ltq",
        "qp": "LongtingQu"
}, {
    "cName": "顺河回族区",
        "code": "410203",
        "py": "Shunhe Huizu Qu",
        "jp": "shhzq",
        "qp": "ShunheHuizuQu"
}, {
    "cName": "禹王台区",
        "code": "410205",
        "py": "Yuwangtai Qu",
        "jp": "ywtq",
        "qp": "YuwangtaiQu"
}, {
    "cName": "祥符区",
        "code": "410212",
        "py": "Xiangfu Qu",
        "jp": "xfq",
        "qp": "XiangfuQu"
}, {
    "cName": "杞县",
        "code": "410221",
        "py": "Qi Xian",
        "jp": "qx",
        "qp": "QiXian"
}, {
    "cName": "通许县",
        "code": "410222",
        "py": "Tongxu Xian",
        "jp": "txx",
        "qp": "TongxuXian"
}, {
    "cName": "尉氏县",
        "code": "410223",
        "py": "Weishi Xian",
        "jp": "wsx",
        "qp": "WeishiXian"
}, {
    "cName": "兰考县",
        "code": "410225",
        "py": "Lankao Xian",
        "jp": "lkx",
        "qp": "LankaoXian"
}, {
    "cName": "洛阳市",
        "code": "410300",
        "py": "Luoyang Shi",
        "jp": "lys",
        "qp": "LuoyangShi"
}, {
    "cName": "西工区",
        "code": "410303",
        "py": "Xigong Qu",
        "jp": "xgq",
        "qp": "XigongQu"
}, {
    "cName": "老城区",
        "code": "410302",
        "py": "Laocheng Qu",
        "jp": "lcq",
        "qp": "LaochengQu"
}, {
    "cName": "瀍河回族区",
        "code": "410304",
        "py": "Chanhe Huizu Qu",
        "jp": "chhzq",
        "qp": "ChanheHuizuQu"
}, {
    "cName": "涧西区",
        "code": "410305",
        "py": "Jianxi Qu",
        "jp": "jxq",
        "qp": "JianxiQu"
}, {
    "cName": "吉利区",
        "code": "410306",
        "py": "Jili Qu",
        "jp": "jlq",
        "qp": "JiliQu"
}, {
    "cName": "洛龙区",
        "code": "410311",
        "py": "Luolong Qu",
        "jp": "llq",
        "qp": "LuolongQu"
}, {
    "cName": "偃师市",
        "code": "410381",
        "py": "Yanshi Shi",
        "jp": "yss",
        "qp": "YanshiShi"
}, {
    "cName": "孟津县",
        "code": "410322",
        "py": "Mengjin Xian",
        "jp": "mjx",
        "qp": "MengjinXian"
}, {
    "cName": "新安县",
        "code": "410323",
        "py": "Xin&#39;an Xian",
        "jp": "xax",
        "qp": "XinanXian"
}, {
    "cName": "栾川县",
        "code": "410324",
        "py": "Luanchuan Xian",
        "jp": "lcx",
        "qp": "LuanchuanXian"
}, {
    "cName": "嵩县",
        "code": "410325",
        "py": "Song Xian",
        "jp": "sx",
        "qp": "SongXian"
}, {
    "cName": "汝阳县",
        "code": "410326",
        "py": "Ruyang Xian",
        "jp": "ryx",
        "qp": "RuyangXian"
}, {
    "cName": "宜阳县",
        "code": "410327",
        "py": "Yiyang Xian",
        "jp": "yyx",
        "qp": "YiyangXian"
}, {
    "cName": "洛宁县",
        "code": "410328",
        "py": "Luoning Xian",
        "jp": "lnx",
        "qp": "LuoningXian"
}, {
    "cName": "伊川县",
        "code": "410329",
        "py": "Yichuan Xian",
        "jp": "ycx",
        "qp": "YichuanXian"
}, {
    "cName": "平顶山市",
        "code": "410400",
        "py": "Pingdingshan Shi",
        "jp": "pdss",
        "qp": "PingdingshanShi"
}, {
    "cName": "新华区",
        "code": "410402",
        "py": "Xinhua Qu",
        "jp": "xhq",
        "qp": "XinhuaQu"
}, {
    "cName": "卫东区",
        "code": "410403",
        "py": "Weidong Qu",
        "jp": "wdq",
        "qp": "WeidongQu"
}, {
    "cName": "石龙区",
        "code": "410404",
        "py": "Shilong Qu",
        "jp": "slq",
        "qp": "ShilongQu"
}, {
    "cName": "湛河区",
        "code": "410411",
        "py": "Zhanhe Qu",
        "jp": "zhq",
        "qp": "ZhanheQu"
}, {
    "cName": "舞钢市",
        "code": "410481",
        "py": "Wugang Shi",
        "jp": "wgs",
        "qp": "WugangShi"
}, {
    "cName": "汝州市",
        "code": "410482",
        "py": "Ruzhou Shi",
        "jp": "rzs",
        "qp": "RuzhouShi"
}, {
    "cName": "宝丰县",
        "code": "410421",
        "py": "Baofeng Xian",
        "jp": "bfx",
        "qp": "BaofengXian"
}, {
    "cName": "叶县",
        "code": "410422",
        "py": "Ye Xian",
        "jp": "yx",
        "qp": "YeXian"
}, {
    "cName": "鲁山县",
        "code": "410423",
        "py": "Lushan Xian",
        "jp": "lsx",
        "qp": "LushanXian"
}, {
    "cName": "郏县",
        "code": "410425",
        "py": "Jia Xian",
        "jp": "jx",
        "qp": "JiaXian"
}, {
    "cName": "安阳市",
        "code": "410500",
        "py": "Anyang Shi",
        "jp": "ays",
        "qp": "AnyangShi"
}, {
    "cName": "北关区",
        "code": "410503",
        "py": "Beiguan Qu",
        "jp": "bgq",
        "qp": "BeiguanQu"
}, {
    "cName": "文峰区",
        "code": "410502",
        "py": "Wenfeng Qu",
        "jp": "wfq",
        "qp": "WenfengQu"
}, {
    "cName": "殷都区",
        "code": "410505",
        "py": "Yindu Qu",
        "jp": "ydq",
        "qp": "YinduQu"
}, {
    "cName": "龙安区",
        "code": "410506",
        "py": "Long&#39;an Qu",
        "jp": "laq",
        "qp": "LonganQu"
}, {
    "cName": "林州市",
        "code": "410581",
        "py": "Linzhou Shi",
        "jp": "lzs",
        "qp": "LinzhouShi"
}, {
    "cName": "安阳县",
        "code": "410522",
        "py": "Anyang Xian",
        "jp": "ayx",
        "qp": "AnyangXian"
}, {
    "cName": "汤阴县",
        "code": "410523",
        "py": "Tangyin Xian",
        "jp": "tyx",
        "qp": "TangyinXian"
}, {
    "cName": "滑县",
        "code": "410526",
        "py": "Hua Xian",
        "jp": "hx",
        "qp": "HuaXian"
}, {
    "cName": "内黄县",
        "code": "410527",
        "py": "Neihuang Xian",
        "jp": "nhx",
        "qp": "NeihuangXian"
}, {
    "cName": "鹤壁市",
        "code": "410600",
        "py": "Hebi Shi",
        "jp": "hbs",
        "qp": "HebiShi"
}, {
    "cName": "淇滨区",
        "code": "410611",
        "py": "Qibin Qu",
        "jp": "qbq",
        "qp": "QibinQu"
}, {
    "cName": "鹤山区",
        "code": "410602",
        "py": "Heshan Qu",
        "jp": "hsq",
        "qp": "HeshanQu"
}, {
    "cName": "山城区",
        "code": "410603",
        "py": "Shancheng Qu",
        "jp": "scq",
        "qp": "ShanchengQu"
}, {
    "cName": "浚县",
        "code": "410621",
        "py": "Xun Xian",
        "jp": "xx",
        "qp": "XunXian"
}, {
    "cName": "淇县",
        "code": "410622",
        "py": "Qi Xian",
        "jp": "qx",
        "qp": "QiXian"
}, {
    "cName": "新乡市",
        "code": "410700",
        "py": "Xinxiang Shi",
        "jp": "xxs",
        "qp": "XinxiangShi"
}, {
    "cName": "卫滨区",
        "code": "410703",
        "py": "Weibin Qu",
        "jp": "wbq",
        "qp": "WeibinQu"
}, {
    "cName": "红旗区",
        "code": "410702",
        "py": "Hongqi Qu",
        "jp": "hqq",
        "qp": "HongqiQu"
}, {
    "cName": "凤泉区",
        "code": "410704",
        "py": "Fengquan Qu",
        "jp": "fqq",
        "qp": "FengquanQu"
}, {
    "cName": "牧野区",
        "code": "410711",
        "py": "Muye Qu",
        "jp": "myq",
        "qp": "MuyeQu"
}, {
    "cName": "卫辉市",
        "code": "410781",
        "py": "Weihui Shi",
        "jp": "whs",
        "qp": "WeihuiShi"
}, {
    "cName": "辉县市",
        "code": "410782",
        "py": "Huixian Shi",
        "jp": "hxs",
        "qp": "HuixianShi"
}, {
    "cName": "新乡县",
        "code": "410721",
        "py": "Xinxiang Xian",
        "jp": "xxx",
        "qp": "XinxiangXian"
}, {
    "cName": "获嘉县",
        "code": "410724",
        "py": "Huojia Xian",
        "jp": "hjx",
        "qp": "HuojiaXian"
}, {
    "cName": "原阳县",
        "code": "410725",
        "py": "Yuanyang Xian",
        "jp": "yyx",
        "qp": "YuanyangXian"
}, {
    "cName": "延津县",
        "code": "410726",
        "py": "Yanjin Xian",
        "jp": "yjx",
        "qp": "YanjinXian"
}, {
    "cName": "封丘县",
        "code": "410727",
        "py": "Fengqiu Xian",
        "jp": "fqx",
        "qp": "FengqiuXian"
}, {
    "cName": "长垣县",
        "code": "410728",
        "py": "Changyuan Xian",
        "jp": "cyx",
        "qp": "ChangyuanXian"
}, {
    "cName": "焦作市",
        "code": "410800",
        "py": "Jiaozuo Shi",
        "jp": "jzs",
        "qp": "JiaozuoShi"
}, {
    "cName": "解放区",
        "code": "410802",
        "py": "Jiefang Qu",
        "jp": "jfq",
        "qp": "JiefangQu"
}, {
    "cName": "中站区",
        "code": "410803",
        "py": "Zhongzhan Qu",
        "jp": "zzq",
        "qp": "ZhongzhanQu"
}, {
    "cName": "马村区",
        "code": "410804",
        "py": "Macun Qu",
        "jp": "mcq",
        "qp": "MacunQu"
}, {
    "cName": "山阳区",
        "code": "410811",
        "py": "Shanyang Qu",
        "jp": "syq",
        "qp": "ShanyangQu"
}, {
    "cName": "沁阳市",
        "code": "410882",
        "py": "Qinyang Shi",
        "jp": "qys",
        "qp": "QinyangShi"
}, {
    "cName": "孟州市",
        "code": "410883",
        "py": "Mengzhou Shi",
        "jp": "mzs",
        "qp": "MengzhouShi"
}, {
    "cName": "修武县",
        "code": "410821",
        "py": "Xiuwu Xian",
        "jp": "xwx",
        "qp": "XiuwuXian"
}, {
    "cName": "博爱县",
        "code": "410822",
        "py": "Bo&#39;ai Xian",
        "jp": "bax",
        "qp": "BoaiXian"
}, {
    "cName": "武陟县",
        "code": "410823",
        "py": "Wuzhi Xian",
        "jp": "wzx",
        "qp": "WuzhiXian"
}, {
    "cName": "温县",
        "code": "410825",
        "py": "Wen Xian",
        "jp": "wx",
        "qp": "WenXian"
}, {
    "cName": "濮阳市",
        "code": "410900",
        "py": "Puyang Shi",
        "jp": "pys",
        "qp": "PuyangShi"
}, {
    "cName": "华龙区",
        "code": "410902",
        "py": "Hualong Qu",
        "jp": "hlq",
        "qp": "HualongQu"
}, {
    "cName": "清丰县",
        "code": "410922",
        "py": "Qingfeng Xian",
        "jp": "qfx",
        "qp": "QingfengXian"
}, {
    "cName": "南乐县",
        "code": "410923",
        "py": "Nanle Xian",
        "jp": "nlx",
        "qp": "NanleXian"
}, {
    "cName": "范县",
        "code": "410926",
        "py": "Fan Xian",
        "jp": "fx",
        "qp": "FanXian"
}, {
    "cName": "台前县",
        "code": "410927",
        "py": "Taiqian Xian",
        "jp": "tqx",
        "qp": "TaiqianXian"
}, {
    "cName": "濮阳县",
        "code": "410928",
        "py": "Puyang Xian",
        "jp": "pyx",
        "qp": "PuyangXian"
}, {
    "cName": "许昌市",
        "code": "411000",
        "py": "Xuchang Shi",
        "jp": "xcs",
        "qp": "XuchangShi"
}, {
    "cName": "魏都区",
        "code": "411002",
        "py": "Weidu Qu",
        "jp": "wdq",
        "qp": "WeiduQu"
}, {
    "cName": "建安区",
        "code": "411003",
        "py": "Jian&#39;an Qu",
        "jp": "jaq",
        "qp": "JiananQu"
}, {
    "cName": "禹州市",
        "code": "411081",
        "py": "Yuzhou Shi",
        "jp": "yzs",
        "qp": "YuzhouShi"
}, {
    "cName": "长葛市",
        "code": "411082",
        "py": "Changge Shi",
        "jp": "cgs",
        "qp": "ChanggeShi"
}, {
    "cName": "鄢陵县",
        "code": "411024",
        "py": "Yanling Xian",
        "jp": "ylx",
        "qp": "YanlingXian"
}, {
    "cName": "襄城县",
        "code": "411025",
        "py": "Xiangcheng Xian",
        "jp": "xcx",
        "qp": "XiangchengXian"
}, {
    "cName": "漯河市",
        "code": "411100",
        "py": "Luohe Shi",
        "jp": "lhs",
        "qp": "LuoheShi"
}, {
    "cName": "郾城区",
        "code": "411103",
        "py": "Yancheng Qu",
        "jp": "ycq",
        "qp": "YanchengQu"
}, {
    "cName": "源汇区",
        "code": "411102",
        "py": "Yuanhui Qu",
        "jp": "yhq",
        "qp": "YuanhuiQu"
}, {
    "cName": "召陵区",
        "code": "411104",
        "py": "Zhaoling Qu",
        "jp": "zlq",
        "qp": "ZhaolingQu"
}, {
    "cName": "舞阳县",
        "code": "411121",
        "py": "Wuyang Xian",
        "jp": "wyx",
        "qp": "WuyangXian"
}, {
    "cName": "临颍县",
        "code": "411122",
        "py": "Linying Xian",
        "jp": "lyx",
        "qp": "LinyingXian"
}, {
    "cName": "三门峡市",
        "code": "411200",
        "py": "Sanmenxia Shi",
        "jp": "smxs",
        "qp": "SanmenxiaShi"
}, {
    "cName": "湖滨区",
        "code": "411202",
        "py": "Hubin Qu",
        "jp": "hbq",
        "qp": "HubinQu"
}, {
    "cName": "陕州区",
        "code": "411203",
        "py": "Shanzhou Qu",
        "jp": "szq",
        "qp": "ShanzhouQu"
}, {
    "cName": "义马市",
        "code": "411281",
        "py": "Yima Shi",
        "jp": "yms",
        "qp": "YimaShi"
}, {
    "cName": "灵宝市",
        "code": "411282",
        "py": "Lingbao Shi",
        "jp": "lbs",
        "qp": "LingbaoShi"
}, {
    "cName": "渑池县",
        "code": "411221",
        "py": "Mianchi Xian",
        "jp": "mcx",
        "qp": "MianchiXian"
}, {
    "cName": "卢氏县",
        "code": "411224",
        "py": "Lushi Xian",
        "jp": "lsx",
        "qp": "LushiXian"
}, {
    "cName": "南阳市",
        "code": "411300",
        "py": "Nanyang Shi",
        "jp": "nys",
        "qp": "NanyangShi"
}, {
    "cName": "卧龙区",
        "code": "411303",
        "py": "Wolong Qu",
        "jp": "wlq",
        "qp": "WolongQu"
}, {
    "cName": "宛城区",
        "code": "411302",
        "py": "Wancheng Qu",
        "jp": "wcq",
        "qp": "WanchengQu"
}, {
    "cName": "邓州市",
        "code": "411381",
        "py": "Dengzhou Shi",
        "jp": "dzs",
        "qp": "DengzhouShi"
}, {
    "cName": "南召县",
        "code": "411321",
        "py": "Nanzhao Xian",
        "jp": "nzx",
        "qp": "NanzhaoXian"
}, {
    "cName": "方城县",
        "code": "411322",
        "py": "Fangcheng Xian",
        "jp": "fcx",
        "qp": "FangchengXian"
}, {
    "cName": "西峡县",
        "code": "411323",
        "py": "Xixia Xian",
        "jp": "xxx",
        "qp": "XixiaXian"
}, {
    "cName": "镇平县",
        "code": "411324",
        "py": "Zhenping Xian",
        "jp": "zpx",
        "qp": "ZhenpingXian"
}, {
    "cName": "内乡县",
        "code": "411325",
        "py": "Neixiang Xian",
        "jp": "nxx",
        "qp": "NeixiangXian"
}, {
    "cName": "淅川县",
        "code": "411326",
        "py": "Xichuan Xian",
        "jp": "xcx",
        "qp": "XichuanXian"
}, {
    "cName": "社旗县",
        "code": "411327",
        "py": "Sheqi Xian",
        "jp": "sqx",
        "qp": "SheqiXian"
}, {
    "cName": "唐河县",
        "code": "411328",
        "py": "Tanghe Xian",
        "jp": "thx",
        "qp": "TangheXian"
}, {
    "cName": "新野县",
        "code": "411329",
        "py": "Xinye Xian",
        "jp": "xyx",
        "qp": "XinyeXian"
}, {
    "cName": "桐柏县",
        "code": "411330",
        "py": "Tongbai Xian",
        "jp": "tbx",
        "qp": "TongbaiXian"
}, {
    "cName": "商丘市",
        "code": "411400",
        "py": "Shangqiu Shi",
        "jp": "sqs",
        "qp": "ShangqiuShi"
}, {
    "cName": "梁园区",
        "code": "411402",
        "py": "Liangyuan Qu",
        "jp": "lyq",
        "qp": "LiangyuanQu"
}, {
    "cName": "睢阳区",
        "code": "411403",
        "py": "Suiyang Qu",
        "jp": "syq",
        "qp": "SuiyangQu"
}, {
    "cName": "永城市",
        "code": "411481",
        "py": "Yongcheng Shi",
        "jp": "ycs",
        "qp": "YongchengShi"
}, {
    "cName": "民权县",
        "code": "411421",
        "py": "Minquan Xian",
        "jp": "mqx",
        "qp": "MinquanXian"
}, {
    "cName": "睢县",
        "code": "411422",
        "py": "Sui Xian",
        "jp": "sx",
        "qp": "SuiXian"
}, {
    "cName": "宁陵县",
        "code": "411423",
        "py": "Ningling Xian",
        "jp": "nlx",
        "qp": "NinglingXian"
}, {
    "cName": "柘城县",
        "code": "411424",
        "py": "Zhecheng Xian",
        "jp": "zcx",
        "qp": "ZhechengXian"
}, {
    "cName": "虞城县",
        "code": "411425",
        "py": "Yucheng Xian",
        "jp": "ycx",
        "qp": "YuchengXian"
}, {
    "cName": "夏邑县",
        "code": "411426",
        "py": "Xiayi Xian",
        "jp": "xyx",
        "qp": "XiayiXian"
}, {
    "cName": "信阳市",
        "code": "411500",
        "py": "Xinyang Shi",
        "jp": "xys",
        "qp": "XinyangShi"
}, {
    "cName": "浉河区",
        "code": "411502",
        "py": "Shihe Qu",
        "jp": "shq",
        "qp": "ShiheQu"
}, {
    "cName": "平桥区",
        "code": "411503",
        "py": "Pingqiao Qu",
        "jp": "pqq",
        "qp": "PingqiaoQu"
}, {
    "cName": "罗山县",
        "code": "411521",
        "py": "Luoshan Xian",
        "jp": "lsx",
        "qp": "LuoshanXian"
}, {
    "cName": "光山县",
        "code": "411522",
        "py": "Guangshan Xian",
        "jp": "gsx",
        "qp": "GuangshanXian"
}, {
    "cName": "新县",
        "code": "411523",
        "py": "Xin Xian",
        "jp": "xx",
        "qp": "XinXian"
}, {
    "cName": "商城县",
        "code": "411524",
        "py": "Shangcheng Xian",
        "jp": "scx",
        "qp": "ShangchengXian"
}, {
    "cName": "固始县",
        "code": "411525",
        "py": "Gushi Xian",
        "jp": "gsx",
        "qp": "GushiXian"
}, {
    "cName": "潢川县",
        "code": "411526",
        "py": "Huangchuan Xian",
        "jp": "hcx",
        "qp": "HuangchuanXian"
}, {
    "cName": "淮滨县",
        "code": "411527",
        "py": "Huaibin Xian",
        "jp": "hbx",
        "qp": "HuaibinXian"
}, {
    "cName": "息县",
        "code": "411528",
        "py": "Xi Xian",
        "jp": "xx",
        "qp": "XiXian"
}, {
    "cName": "周口市",
        "code": "411600",
        "py": "Zhoukou Shi",
        "jp": "zks",
        "qp": "ZhoukouShi"
}, {
    "cName": "川汇区",
        "code": "411602",
        "py": "Chuanhui Qu",
        "jp": "chq",
        "qp": "ChuanhuiQu"
}, {
    "cName": "项城市",
        "code": "411681",
        "py": "Xiangcheng Shi",
        "jp": "xcs",
        "qp": "XiangchengShi"
}, {
    "cName": "扶沟县",
        "code": "411621",
        "py": "Fugou Xian",
        "jp": "fgx",
        "qp": "FugouXian"
}, {
    "cName": "西华县",
        "code": "411622",
        "py": "Xihua Xian",
        "jp": "xhx",
        "qp": "XihuaXian"
}, {
    "cName": "商水县",
        "code": "411623",
        "py": "Shangshui Xian",
        "jp": "ssx",
        "qp": "ShangshuiXian"
}, {
    "cName": "沈丘县",
        "code": "411624",
        "py": "Shenqiu Xian",
        "jp": "sqx",
        "qp": "ShenqiuXian"
}, {
    "cName": "郸城县",
        "code": "411625",
        "py": "Dancheng Xian",
        "jp": "dcx",
        "qp": "DanchengXian"
}, {
    "cName": "淮阳县",
        "code": "411626",
        "py": "Huaiyang Xian",
        "jp": "hyx",
        "qp": "HuaiyangXian"
}, {
    "cName": "太康县",
        "code": "411627",
        "py": "Taikang Xian",
        "jp": "tkx",
        "qp": "TaikangXian"
}, {
    "cName": "鹿邑县",
        "code": "411628",
        "py": "Luyi Xian",
        "jp": "lyx",
        "qp": "LuyiXian"
}, {
    "cName": "驻马店市",
        "code": "411700",
        "py": "Zhumadian Shi",
        "jp": "zmds",
        "qp": "ZhumadianShi"
}, {
    "cName": "驿城区",
        "code": "411702",
        "py": "Yicheng Qu",
        "jp": "ycq",
        "qp": "YichengQu"
}, {
    "cName": "西平县",
        "code": "411721",
        "py": "Xiping Xian",
        "jp": "xpx",
        "qp": "XipingXian"
}, {
    "cName": "上蔡县",
        "code": "411722",
        "py": "Shangcai Xian",
        "jp": "scx",
        "qp": "ShangcaiXian"
}, {
    "cName": "平舆县",
        "code": "411723",
        "py": "Pingyu Xian",
        "jp": "pyx",
        "qp": "PingyuXian"
}, {
    "cName": "正阳县",
        "code": "411724",
        "py": "Zhengyang Xian",
        "jp": "zyx",
        "qp": "ZhengyangXian"
}, {
    "cName": "确山县",
        "code": "411725",
        "py": "Queshan Xian",
        "jp": "qsx",
        "qp": "QueshanXian"
}, {
    "cName": "泌阳县",
        "code": "411726",
        "py": "Biyang Xian",
        "jp": "byx",
        "qp": "BiyangXian"
}, {
    "cName": "汝南县",
        "code": "411727",
        "py": "Runan Xian",
        "jp": "rnx",
        "qp": "RunanXian"
}, {
    "cName": "遂平县",
        "code": "411728",
        "py": "Suiping Xian",
        "jp": "spx",
        "qp": "SuipingXian"
}, {
    "cName": "新蔡县",
        "code": "411729",
        "py": "Xincai Xian",
        "jp": "xcx",
        "qp": "XincaiXian"
}, {
    "cName": "济源市",
        "code": "419001",
        "py": "Jiyuan Shi",
        "jp": "jys",
        "qp": "JiyuanShi"
}, {
    "cName": "湖北省",
        "code": "420000",
        "py": "Hubei Sheng",
        "jp": "hbs",
        "qp": "HubeiSheng"
}, {
    "cName": "武汉市",
        "code": "420100",
        "py": "Wuhan Shi",
        "jp": "whs",
        "qp": "WuhanShi"
}, {
    "cName": "江岸区",
        "code": "420102",
        "py": "Jiang&#39;an Qu",
        "jp": "jaq",
        "qp": "JianganQu"
}, {
    "cName": "江汉区",
        "code": "420103",
        "py": "Jianghan Qu",
        "jp": "jhq",
        "qp": "JianghanQu"
}, {
    "cName": "硚口区",
        "code": "420104",
        "py": "Qiaokou Qu",
        "jp": "qkq",
        "qp": "QiaokouQu"
}, {
    "cName": "汉阳区",
        "code": "420105",
        "py": "Hanyang Qu",
        "jp": "hyq",
        "qp": "HanyangQu"
}, {
    "cName": "武昌区",
        "code": "420106",
        "py": "Wuchang Qu",
        "jp": "wcq",
        "qp": "WuchangQu"
}, {
    "cName": "青山区",
        "code": "420107",
        "py": "Qingshan Qu",
        "jp": "qsq",
        "qp": "QingshanQu"
}, {
    "cName": "洪山区",
        "code": "420111",
        "py": "Hongshan Qu",
        "jp": "hsq",
        "qp": "HongshanQu"
}, {
    "cName": "东西湖区",
        "code": "420112",
        "py": "Dongxihu Qu",
        "jp": "dxhq",
        "qp": "DongxihuQu"
}, {
    "cName": "汉南区",
        "code": "420113",
        "py": "Hannan Qu",
        "jp": "hnq",
        "qp": "HannanQu"
}, {
    "cName": "蔡甸区",
        "code": "420114",
        "py": "Caidian Qu",
        "jp": "cdq",
        "qp": "CaidianQu"
}, {
    "cName": "江夏区",
        "code": "420115",
        "py": "Jiangxia Qu",
        "jp": "jxq",
        "qp": "JiangxiaQu"
}, {
    "cName": "黄陂区",
        "code": "420116",
        "py": "Huangpi Qu",
        "jp": "hpq",
        "qp": "HuangpiQu"
}, {
    "cName": "新洲区",
        "code": "420117",
        "py": "Xinzhou Qu",
        "jp": "xzq",
        "qp": "XinzhouQu"
}, {
    "cName": "黄石市",
        "code": "420200",
        "py": "Huangshi Shi",
        "jp": "hss",
        "qp": "HuangshiShi"
}, {
    "cName": "下陆区",
        "code": "420204",
        "py": "Xialu Qu",
        "jp": "xlq",
        "qp": "XialuQu"
}, {
    "cName": "黄石港区",
        "code": "420202",
        "py": "Huangshigang Qu",
        "jp": "hsgq",
        "qp": "HuangshigangQu"
}, {
    "cName": "西塞山区",
        "code": "420203",
        "py": "Xisaishan Qu",
        "jp": "xssq",
        "qp": "XisaishanQu"
}, {
    "cName": "铁山区",
        "code": "420205",
        "py": "Tieshan Qu",
        "jp": "tsq",
        "qp": "TieshanQu"
}, {
    "cName": "大冶市",
        "code": "420281",
        "py": "Daye Shi",
        "jp": "dys",
        "qp": "DayeShi"
}, {
    "cName": "阳新县",
        "code": "420222",
        "py": "Yangxin Xian",
        "jp": "yxx",
        "qp": "YangxinXian"
}, {
    "cName": "十堰市",
        "code": "420300",
        "py": "Shiyan Shi",
        "jp": "sys",
        "qp": "ShiyanShi"
}, {
    "cName": "茅箭区",
        "code": "420302",
        "py": "Maojian Qu",
        "jp": "mjq",
        "qp": "MaojianQu"
}, {
    "cName": "张湾区",
        "code": "420303",
        "py": "Zhangwan Qu",
        "jp": "zwq",
        "qp": "ZhangwanQu"
}, {
    "cName": "郧阳区",
        "code": "420304",
        "py": "Yunyang Qu",
        "jp": "yyq",
        "qp": "YunyangQu"
}, {
    "cName": "丹江口市",
        "code": "420381",
        "py": "Danjiangkou Shi",
        "jp": "djks",
        "qp": "DanjiangkouShi"
}, {
    "cName": "郧西县",
        "code": "420322",
        "py": "Yunxi Xian",
        "jp": "yxx",
        "qp": "YunxiXian"
}, {
    "cName": "竹山县",
        "code": "420323",
        "py": "Zhushan Xian",
        "jp": "zsx",
        "qp": "ZhushanXian"
}, {
    "cName": "竹溪县",
        "code": "420324",
        "py": "Zhuxi Xian",
        "jp": "zxx",
        "qp": "ZhuxiXian"
}, {
    "cName": "房县",
        "code": "420325",
        "py": "Fang Xian",
        "jp": "fx",
        "qp": "FangXian"
}, {
    "cName": "宜昌市",
        "code": "420500",
        "py": "Yichang Shi",
        "jp": "ycs",
        "qp": "YichangShi"
}, {
    "cName": "西陵区",
        "code": "420502",
        "py": "Xiling Qu",
        "jp": "xlq",
        "qp": "XilingQu"
}, {
    "cName": "伍家岗区",
        "code": "420503",
        "py": "Wujiagang Qu",
        "jp": "wjgq",
        "qp": "WujiagangQu"
}, {
    "cName": "点军区",
        "code": "420504",
        "py": "Dianjun Qu",
        "jp": "djq",
        "qp": "DianjunQu"
}, {
    "cName": "猇亭区",
        "code": "420505",
        "py": "Xiaoting Qu",
        "jp": "xtq",
        "qp": "XiaotingQu"
}, {
    "cName": "夷陵区",
        "code": "420506",
        "py": "Yiling Qu",
        "jp": "ylq",
        "qp": "YilingQu"
}, {
    "cName": "宜都市",
        "code": "420581",
        "py": "Yidu Shi",
        "jp": "yds",
        "qp": "YiduShi"
}, {
    "cName": "当阳市",
        "code": "420582",
        "py": "Dangyang Shi",
        "jp": "dys",
        "qp": "DangyangShi"
}, {
    "cName": "枝江市",
        "code": "420583",
        "py": "Zhijiang Shi",
        "jp": "zjs",
        "qp": "ZhijiangShi"
}, {
    "cName": "远安县",
        "code": "420525",
        "py": "Yuan&#39;an Xian",
        "jp": "yax",
        "qp": "YuananXian"
}, {
    "cName": "兴山县",
        "code": "420526",
        "py": "Xingshan Xian",
        "jp": "xsx",
        "qp": "XingshanXian"
}, {
    "cName": "秭归县",
        "code": "420527",
        "py": "Zigui Xian",
        "jp": "zgx",
        "qp": "ZiguiXian"
}, {
    "cName": "长阳土家族自治县",
        "code": "420528",
        "py": "Changyang Tujiazu Zizhixian",
        "jp": "cytjzzzx",
        "qp": "ChangyangTujiazuZizhixian"
}, {
    "cName": "五峰土家族自治县",
        "code": "420529",
        "py": "Wufeng Tujiazu Zizhixian",
        "jp": "wftjzzzx",
        "qp": "WufengTujiazuZizhixian"
}, {
    "cName": "襄阳市",
        "code": "420600",
        "py": "Xiangyang Shi",
        "jp": "xys",
        "qp": "XiangyangShi"
}, {
    "cName": "襄城区",
        "code": "420602",
        "py": "Xiangcheng Qu",
        "jp": "xcq",
        "qp": "XiangchengQu"
}, {
    "cName": "樊城区",
        "code": "420606",
        "py": "Fancheng Qu",
        "jp": "fcq",
        "qp": "FanchengQu"
}, {
    "cName": "襄州区",
        "code": "420607",
        "py": "Xiangzhou Qu",
        "jp": "xzq",
        "qp": "XiangzhouQu"
}, {
    "cName": "老河口市",
        "code": "420682",
        "py": "Laohekou Shi",
        "jp": "lhks",
        "qp": "LaohekouShi"
}, {
    "cName": "枣阳市",
        "code": "420683",
        "py": "Zaoyang Shi",
        "jp": "zys",
        "qp": "ZaoyangShi"
}, {
    "cName": "宜城市",
        "code": "420684",
        "py": "Yicheng Shi",
        "jp": "ycs",
        "qp": "YichengShi"
}, {
    "cName": "南漳县",
        "code": "420624",
        "py": "Nanzhang Xian",
        "jp": "nzx",
        "qp": "NanzhangXian"
}, {
    "cName": "谷城县",
        "code": "420625",
        "py": "Gucheng Xian",
        "jp": "gcx",
        "qp": "GuchengXian"
}, {
    "cName": "保康县",
        "code": "420626",
        "py": "Baokang Xian",
        "jp": "bkx",
        "qp": "BaokangXian"
}, {
    "cName": "鄂州市",
        "code": "420700",
        "py": "Ezhou Shi",
        "jp": "ezs",
        "qp": "EzhouShi"
}, {
    "cName": "鄂城区",
        "code": "420704",
        "py": "Echeng Qu",
        "jp": "ecq",
        "qp": "EchengQu"
}, {
    "cName": "梁子湖区",
        "code": "420702",
        "py": "Liangzihu Qu",
        "jp": "lzhq",
        "qp": "LiangzihuQu"
}, {
    "cName": "华容区",
        "code": "420703",
        "py": "Huarong Qu",
        "jp": "hrq",
        "qp": "HuarongQu"
}, {
    "cName": "荆门市",
        "code": "420800",
        "py": "Jingmen Shi",
        "jp": "jms",
        "qp": "JingmenShi"
}, {
    "cName": "东宝区",
        "code": "420802",
        "py": "Dongbao Qu",
        "jp": "dbq",
        "qp": "DongbaoQu"
}, {
    "cName": "掇刀区",
        "code": "420804",
        "py": "Duodao Qu",
        "jp": "ddq",
        "qp": "DuodaoQu"
}, {
    "cName": "钟祥市",
        "code": "420881",
        "py": "Zhongxiang Shi",
        "jp": "zxs",
        "qp": "ZhongxiangShi"
}, {
    "cName": "京山县",
        "code": "420821",
        "py": "Jingshan Xian",
        "jp": "jsx",
        "qp": "JingshanXian"
}, {
    "cName": "沙洋县",
        "code": "420822",
        "py": "Shayang Xian",
        "jp": "syx",
        "qp": "ShayangXian"
}, {
    "cName": "孝感市",
        "code": "420900",
        "py": "Xiaogan Shi",
        "jp": "xgs",
        "qp": "XiaoganShi"
}, {
    "cName": "孝南区",
        "code": "420902",
        "py": "Xiaonan Qu",
        "jp": "xnq",
        "qp": "XiaonanQu"
}, {
    "cName": "应城市",
        "code": "420981",
        "py": "Yingcheng Shi",
        "jp": "ycs",
        "qp": "YingchengShi"
}, {
    "cName": "安陆市",
        "code": "420982",
        "py": "Anlu Shi",
        "jp": "als",
        "qp": "AnluShi"
}, {
    "cName": "汉川市",
        "code": "420984",
        "py": "Hanchuan Shi",
        "jp": "hcs",
        "qp": "HanchuanShi"
}, {
    "cName": "孝昌县",
        "code": "420921",
        "py": "Xiaochang Xian",
        "jp": "xcx",
        "qp": "XiaochangXian"
}, {
    "cName": "大悟县",
        "code": "420922",
        "py": "Dawu Xian",
        "jp": "dwx",
        "qp": "DawuXian"
}, {
    "cName": "云梦县",
        "code": "420923",
        "py": "Yunmeng Xian",
        "jp": "ymx",
        "qp": "YunmengXian"
}, {
    "cName": "荆州市",
        "code": "421000",
        "py": "Jingzhou Shi",
        "jp": "jzs",
        "qp": "JingzhouShi"
}, {
    "cName": "沙市区",
        "code": "421002",
        "py": "Shashi Qu",
        "jp": "ssq",
        "qp": "ShashiQu"
}, {
    "cName": "荆州区",
        "code": "421003",
        "py": "Jingzhou Qu",
        "jp": "jzq",
        "qp": "JingzhouQu"
}, {
    "cName": "石首市",
        "code": "421081",
        "py": "Shishou Shi",
        "jp": "sss",
        "qp": "ShishouShi"
}, {
    "cName": "洪湖市",
        "code": "421083",
        "py": "Honghu Shi",
        "jp": "hhs",
        "qp": "HonghuShi"
}, {
    "cName": "松滋市",
        "code": "421087",
        "py": "Songzi Shi",
        "jp": "szs",
        "qp": "SongziShi"
}, {
    "cName": "公安县",
        "code": "421022",
        "py": "Gong&#39;an Xian",
        "jp": "gax",
        "qp": "GonganXian"
}, {
    "cName": "监利县",
        "code": "421023",
        "py": "Jianli Xian",
        "jp": "jlx",
        "qp": "JianliXian"
}, {
    "cName": "江陵县",
        "code": "421024",
        "py": "Jiangling Xian",
        "jp": "jlx",
        "qp": "JianglingXian"
}, {
    "cName": "黄冈市",
        "code": "421100",
        "py": "Huanggang Shi",
        "jp": "hgs",
        "qp": "HuanggangShi"
}, {
    "cName": "黄州区",
        "code": "421102",
        "py": "Huangzhou Qu",
        "jp": "hzq",
        "qp": "HuangzhouQu"
}, {
    "cName": "麻城市",
        "code": "421181",
        "py": "Macheng Shi",
        "jp": "mcs",
        "qp": "MachengShi"
}, {
    "cName": "武穴市",
        "code": "421182",
        "py": "Wuxue Shi",
        "jp": "wxs",
        "qp": "WuxueShi"
}, {
    "cName": "团风县",
        "code": "421121",
        "py": "Tuanfeng Xian",
        "jp": "tfx",
        "qp": "TuanfengXian"
}, {
    "cName": "红安县",
        "code": "421122",
        "py": "Hong&#39;an Xian",
        "jp": "hax",
        "qp": "HonganXian"
}, {
    "cName": "罗田县",
        "code": "421123",
        "py": "Luotian Xian",
        "jp": "ltx",
        "qp": "LuotianXian"
}, {
    "cName": "英山县",
        "code": "421124",
        "py": "Yingshan Xian",
        "jp": "ysx",
        "qp": "YingshanXian"
}, {
    "cName": "浠水县",
        "code": "421125",
        "py": "Xishui Xian",
        "jp": "xsx",
        "qp": "XishuiXian"
}, {
    "cName": "蕲春县",
        "code": "421126",
        "py": "Qichun Xian",
        "jp": "qcx",
        "qp": "QichunXian"
}, {
    "cName": "黄梅县",
        "code": "421127",
        "py": "Huangmei Xian",
        "jp": "hmx",
        "qp": "HuangmeiXian"
}, {
    "cName": "咸宁市",
        "code": "421200",
        "py": "Xianning Shi",
        "jp": "xns",
        "qp": "XianningShi"
}, {
    "cName": "咸安区",
        "code": "421202",
        "py": "Xian&#39;an Qu",
        "jp": "xaq",
        "qp": "XiananQu"
}, {
    "cName": "赤壁市",
        "code": "421281",
        "py": "Chibi Shi",
        "jp": "cbs",
        "qp": "ChibiShi"
}, {
    "cName": "嘉鱼县",
        "code": "421221",
        "py": "Jiayu Xian",
        "jp": "jyx",
        "qp": "JiayuXian"
}, {
    "cName": "通城县",
        "code": "421222",
        "py": "Tongcheng Xian",
        "jp": "tcx",
        "qp": "TongchengXian"
}, {
    "cName": "崇阳县",
        "code": "421223",
        "py": "Chongyang Xian",
        "jp": "cyx",
        "qp": "ChongyangXian"
}, {
    "cName": "通山县",
        "code": "421224",
        "py": "Tongshan Xian",
        "jp": "tsx",
        "qp": "TongshanXian"
}, {
    "cName": "随州市",
        "code": "421300",
        "py": "Suizhou Shi",
        "jp": "szs",
        "qp": "SuizhouShi"
}, {
    "cName": "曾都区",
        "code": "421303",
        "py": "Zengdu Qu",
        "jp": "zdq",
        "qp": "ZengduQu"
}, {
    "cName": "广水市",
        "code": "421381",
        "py": "Guangshui Shi",
        "jp": "gss",
        "qp": "GuangshuiShi"
}, {
    "cName": "随县",
        "code": "421321",
        "py": "Sui Xian",
        "jp": "sx",
        "qp": "SuiXian"
}, {
    "cName": "恩施土家族苗族自治州",
        "code": "422800",
        "py": "Enshi Tujiazu Miaozu Zizhizhou",
        "jp": "estjzmzzzz",
        "qp": "EnshiTujiazuMiaozuZizhizhou"
}, {
    "cName": "恩施市",
        "code": "422801",
        "py": "Enshi Shi",
        "jp": "ess",
        "qp": "EnshiShi"
}, {
    "cName": "利川市",
        "code": "422802",
        "py": "Lichuan Shi",
        "jp": "lcs",
        "qp": "LichuanShi"
}, {
    "cName": "建始县",
        "code": "422822",
        "py": "Jianshi Xian",
        "jp": "jsx",
        "qp": "JianshiXian"
}, {
    "cName": "巴东县",
        "code": "422823",
        "py": "Badong Xian",
        "jp": "bdx",
        "qp": "BadongXian"
}, {
    "cName": "宣恩县",
        "code": "422825",
        "py": "Xuan&#39;en Xian",
        "jp": "xex",
        "qp": "XuanenXian"
}, {
    "cName": "咸丰县",
        "code": "422826",
        "py": "Xianfeng Xian",
        "jp": "xfx",
        "qp": "XianfengXian"
}, {
    "cName": "来凤县",
        "code": "422827",
        "py": "Laifeng Xian",
        "jp": "lfx",
        "qp": "LaifengXian"
}, {
    "cName": "鹤峰县",
        "code": "422828",
        "py": "Hefeng Xian",
        "jp": "hfx",
        "qp": "HefengXian"
}, {
    "cName": "仙桃市",
        "code": "429004",
        "py": "Xiantao Shi",
        "jp": "xts",
        "qp": "XiantaoShi"
}, {
    "cName": "潜江市",
        "code": "429005",
        "py": "Qianjiang Shi",
        "jp": "qjs",
        "qp": "QianjiangShi"
}, {
    "cName": "天门市",
        "code": "429006",
        "py": "Tianmen Shi",
        "jp": "tms",
        "qp": "TianmenShi"
}, {
    "cName": "神农架林区",
        "code": "429021",
        "py": "Shennongjia Linqu",
        "jp": "snjlq",
        "qp": "ShennongjiaLinqu"
}, {
    "cName": "湖南省",
        "code": "430000",
        "py": "Hunan Sheng",
        "jp": "hns",
        "qp": "HunanSheng"
}, {
    "cName": "长沙市",
        "code": "430100",
        "py": "Changsha Shi",
        "jp": "css",
        "qp": "ChangshaShi"
}, {
    "cName": "岳麓区",
        "code": "430104",
        "py": "Yuelu Qu",
        "jp": "ylq",
        "qp": "YueluQu"
}, {
    "cName": "芙蓉区",
        "code": "430102",
        "py": "Furong Qu",
        "jp": "frq",
        "qp": "FurongQu"
}, {
    "cName": "天心区",
        "code": "430103",
        "py": "Tianxin Qu",
        "jp": "txq",
        "qp": "TianxinQu"
}, {
    "cName": "开福区",
        "code": "430105",
        "py": "Kaifu Qu",
        "jp": "kfq",
        "qp": "KaifuQu"
}, {
    "cName": "雨花区",
        "code": "430111",
        "py": "Yuhua Qu",
        "jp": "yhq",
        "qp": "YuhuaQu"
}, {
    "cName": "望城区",
        "code": "430112",
        "py": "Wangcheng Qu",
        "jp": "wcq",
        "qp": "WangchengQu"
}, {
    "cName": "浏阳市",
        "code": "430181",
        "py": "Liuyang Shi",
        "jp": "lys",
        "qp": "LiuyangShi"
}, {
    "cName": "宁乡市",
        "code": "430182",
        "py": "Ningxiang Shi",
        "jp": "nxs",
        "qp": "NingxiangShi"
}, {
    "cName": "长沙县",
        "code": "430121",
        "py": "Changsha Xian",
        "jp": "csx",
        "qp": "ChangshaXian"
}, {
    "cName": "株洲市",
        "code": "430200",
        "py": "Zhuzhou Shi",
        "jp": "zzs",
        "qp": "ZhuzhouShi"
}, {
    "cName": "天元区",
        "code": "430211",
        "py": "Tianyuan Qu",
        "jp": "tyq",
        "qp": "TianyuanQu"
}, {
    "cName": "荷塘区",
        "code": "430202",
        "py": "Hetang Qu",
        "jp": "htq",
        "qp": "HetangQu"
}, {
    "cName": "芦淞区",
        "code": "430203",
        "py": "Lusong Qu",
        "jp": "lsq",
        "qp": "LusongQu"
}, {
    "cName": "石峰区",
        "code": "430204",
        "py": "Shifeng Qu",
        "jp": "sfq",
        "qp": "ShifengQu"
}, {
    "cName": "醴陵市",
        "code": "430281",
        "py": "Liling Shi",
        "jp": "lls",
        "qp": "LilingShi"
}, {
    "cName": "株洲县",
        "code": "430221",
        "py": "Zhuzhou Xian",
        "jp": "zzx",
        "qp": "ZhuzhouXian"
}, {
    "cName": "攸县",
        "code": "430223",
        "py": "You Xian",
        "jp": "yx",
        "qp": "YouXian"
}, {
    "cName": "茶陵县",
        "code": "430224",
        "py": "Chaling Xian",
        "jp": "clx",
        "qp": "ChalingXian"
}, {
    "cName": "炎陵县",
        "code": "430225",
        "py": "Yanling Xian",
        "jp": "ylx",
        "qp": "YanlingXian"
}, {
    "cName": "湘潭市",
        "code": "430300",
        "py": "Xiangtan Shi",
        "jp": "xts",
        "qp": "XiangtanShi"
}, {
    "cName": "岳塘区",
        "code": "430304",
        "py": "Yuetang Qu",
        "jp": "ytq",
        "qp": "YuetangQu"
}, {
    "cName": "雨湖区",
        "code": "430302",
        "py": "Yuhu Qu",
        "jp": "yhq",
        "qp": "YuhuQu"
}, {
    "cName": "湘乡市",
        "code": "430381",
        "py": "Xiangxiang Shi",
        "jp": "xxs",
        "qp": "XiangxiangShi"
}, {
    "cName": "韶山市",
        "code": "430382",
        "py": "Shaoshan Shi",
        "jp": "sss",
        "qp": "ShaoshanShi"
}, {
    "cName": "湘潭县",
        "code": "430321",
        "py": "Xiangtan Xian",
        "jp": "xtx",
        "qp": "XiangtanXian"
}, {
    "cName": "衡阳市",
        "code": "430400",
        "py": "Hengyang Shi",
        "jp": "hys",
        "qp": "HengyangShi"
}, {
    "cName": "蒸湘区",
        "code": "430408",
        "py": "Zhengxiang Qu",
        "jp": "zxq",
        "qp": "ZhengxiangQu"
}, {
    "cName": "珠晖区",
        "code": "430405",
        "py": "Zhuhui Qu",
        "jp": "zhq",
        "qp": "ZhuhuiQu"
}, {
    "cName": "雁峰区",
        "code": "430406",
        "py": "Yanfeng Qu",
        "jp": "yfq",
        "qp": "YanfengQu"
}, {
    "cName": "石鼓区",
        "code": "430407",
        "py": "Shigu Qu",
        "jp": "sgq",
        "qp": "ShiguQu"
}, {
    "cName": "南岳区",
        "code": "430412",
        "py": "Nanyue Qu",
        "jp": "nyq",
        "qp": "NanyueQu"
}, {
    "cName": "耒阳市",
        "code": "430481",
        "py": "Leiyang Shi",
        "jp": "lys",
        "qp": "LeiyangShi"
}, {
    "cName": "常宁市",
        "code": "430482",
        "py": "Changning Shi",
        "jp": "cns",
        "qp": "ChangningShi"
}, {
    "cName": "衡阳县",
        "code": "430421",
        "py": "Hengyang Xian",
        "jp": "hyx",
        "qp": "HengyangXian"
}, {
    "cName": "衡南县",
        "code": "430422",
        "py": "Hengnan Xian",
        "jp": "hnx",
        "qp": "HengnanXian"
}, {
    "cName": "衡山县",
        "code": "430423",
        "py": "Hengshan Xian",
        "jp": "hsx",
        "qp": "HengshanXian"
}, {
    "cName": "衡东县",
        "code": "430424",
        "py": "Hengdong Xian",
        "jp": "hdx",
        "qp": "HengdongXian"
}, {
    "cName": "祁东县",
        "code": "430426",
        "py": "Qidong Xian",
        "jp": "qdx",
        "qp": "QidongXian"
}, {
    "cName": "邵阳市",
        "code": "430500",
        "py": "Shaoyang Shi",
        "jp": "sys",
        "qp": "ShaoyangShi"
}, {
    "cName": "大祥区",
        "code": "430503",
        "py": "Daxiang Qu",
        "jp": "dxq",
        "qp": "DaxiangQu"
}, {
    "cName": "双清区",
        "code": "430502",
        "py": "Shuangqing Qu",
        "jp": "sqq",
        "qp": "ShuangqingQu"
}, {
    "cName": "北塔区",
        "code": "430511",
        "py": "Beita Qu",
        "jp": "btq",
        "qp": "BeitaQu"
}, {
    "cName": "武冈市",
        "code": "430581",
        "py": "Wugang Shi",
        "jp": "wgs",
        "qp": "WugangShi"
}, {
    "cName": "邵东县",
        "code": "430521",
        "py": "Shaodong Xian",
        "jp": "sdx",
        "qp": "ShaodongXian"
}, {
    "cName": "新邵县",
        "code": "430522",
        "py": "Xinshao Xian",
        "jp": "xsx",
        "qp": "XinshaoXian"
}, {
    "cName": "邵阳县",
        "code": "430523",
        "py": "Shaoyang Xian",
        "jp": "syx",
        "qp": "ShaoyangXian"
}, {
    "cName": "隆回县",
        "code": "430524",
        "py": "Longhui Xian",
        "jp": "lhx",
        "qp": "LonghuiXian"
}, {
    "cName": "洞口县",
        "code": "430525",
        "py": "Dongkou Xian",
        "jp": "dkx",
        "qp": "DongkouXian"
}, {
    "cName": "绥宁县",
        "code": "430527",
        "py": "Suining Xian",
        "jp": "snx",
        "qp": "SuiningXian"
}, {
    "cName": "新宁县",
        "code": "430528",
        "py": "Xinning Xian",
        "jp": "xnx",
        "qp": "XinningXian"
}, {
    "cName": "城步苗族自治县",
        "code": "430529",
        "py": "Chengbu Miaozu Zizhixian",
        "jp": "cbmzzzx",
        "qp": "ChengbuMiaozuZizhixian"
}, {
    "cName": "岳阳市",
        "code": "430600",
        "py": "Yueyang Shi",
        "jp": "yys",
        "qp": "YueyangShi"
}, {
    "cName": "岳阳楼区",
        "code": "430602",
        "py": "Yueyanglou Qu",
        "jp": "yylq",
        "qp": "YueyanglouQu"
}, {
    "cName": "云溪区",
        "code": "430603",
        "py": "Yunxi Qu",
        "jp": "yxq",
        "qp": "YunxiQu"
}, {
    "cName": "君山区",
        "code": "430611",
        "py": "Junshan Qu",
        "jp": "jsq",
        "qp": "JunshanQu"
}, {
    "cName": "汨罗市",
        "code": "430681",
        "py": "Miluo Shi",
        "jp": "mls",
        "qp": "MiluoShi"
}, {
    "cName": "临湘市",
        "code": "430682",
        "py": "Linxiang Shi",
        "jp": "lxs",
        "qp": "LinxiangShi"
}, {
    "cName": "岳阳县",
        "code": "430621",
        "py": "Yueyang Xian",
        "jp": "yyx",
        "qp": "YueyangXian"
}, {
    "cName": "华容县",
        "code": "430623",
        "py": "Huarong Xian",
        "jp": "hrx",
        "qp": "HuarongXian"
}, {
    "cName": "湘阴县",
        "code": "430624",
        "py": "Xiangyin Xian",
        "jp": "xyx",
        "qp": "XiangyinXian"
}, {
    "cName": "平江县",
        "code": "430626",
        "py": "Pingjiang Xian",
        "jp": "pjx",
        "qp": "PingjiangXian"
}, {
    "cName": "常德市",
        "code": "430700",
        "py": "Changde Shi",
        "jp": "cds",
        "qp": "ChangdeShi"
}, {
    "cName": "武陵区",
        "code": "430702",
        "py": "Wuling Qu",
        "jp": "wlq",
        "qp": "WulingQu"
}, {
    "cName": "鼎城区",
        "code": "430703",
        "py": "Dingcheng Qu",
        "jp": "dcq",
        "qp": "DingchengQu"
}, {
    "cName": "津市市",
        "code": "430781",
        "py": "Jinshi Shi",
        "jp": "jss",
        "qp": "JinshiShi"
}, {
    "cName": "安乡县",
        "code": "430721",
        "py": "Anxiang Xian",
        "jp": "axx",
        "qp": "AnxiangXian"
}, {
    "cName": "汉寿县",
        "code": "430722",
        "py": "Hanshou Xian",
        "jp": "hsx",
        "qp": "HanshouXian"
}, {
    "cName": "澧县",
        "code": "430723",
        "py": "Li Xian",
        "jp": "lx",
        "qp": "LiXian"
}, {
    "cName": "临澧县",
        "code": "430724",
        "py": "Linli Xian",
        "jp": "llx",
        "qp": "LinliXian"
}, {
    "cName": "桃源县",
        "code": "430725",
        "py": "Taoyuan Xian",
        "jp": "tyx",
        "qp": "TaoyuanXian"
}, {
    "cName": "石门县",
        "code": "430726",
        "py": "Shimen Xian",
        "jp": "smx",
        "qp": "ShimenXian"
}, {
    "cName": "张家界市",
        "code": "430800",
        "py": "Zhangjiajie Shi",
        "jp": "zjjs",
        "qp": "ZhangjiajieShi"
}, {
    "cName": "永定区",
        "code": "430802",
        "py": "Yongding Qu",
        "jp": "ydq",
        "qp": "YongdingQu"
}, {
    "cName": "武陵源区",
        "code": "430811",
        "py": "Wulingyuan Qu",
        "jp": "wlyq",
        "qp": "WulingyuanQu"
}, {
    "cName": "慈利县",
        "code": "430821",
        "py": "Cili Xian",
        "jp": "clx",
        "qp": "CiliXian"
}, {
    "cName": "桑植县",
        "code": "430822",
        "py": "Sangzhi Xian",
        "jp": "szx",
        "qp": "SangzhiXian"
}, {
    "cName": "益阳市",
        "code": "430900",
        "py": "Yiyang Shi",
        "jp": "yys",
        "qp": "YiyangShi"
}, {
    "cName": "赫山区",
        "code": "430903",
        "py": "Heshan Qu",
        "jp": "hsq",
        "qp": "HeshanQu"
}, {
    "cName": "资阳区",
        "code": "430902",
        "py": "Ziyang Qu",
        "jp": "zyq",
        "qp": "ZiyangQu"
}, {
    "cName": "沅江市",
        "code": "430981",
        "py": "Yuanjiang Shi",
        "jp": "yjs",
        "qp": "YuanjiangShi"
}, {
    "cName": "南县",
        "code": "430921",
        "py": "Nan Xian",
        "jp": "nx",
        "qp": "NanXian"
}, {
    "cName": "桃江县",
        "code": "430922",
        "py": "Taojiang Xian",
        "jp": "tjx",
        "qp": "TaojiangXian"
}, {
    "cName": "安化县",
        "code": "430923",
        "py": "Anhua Xian",
        "jp": "ahx",
        "qp": "AnhuaXian"
}, {
    "cName": "郴州市",
        "code": "431000",
        "py": "Chenzhou Shi",
        "jp": "czs",
        "qp": "ChenzhouShi"
}, {
    "cName": "北湖区",
        "code": "431002",
        "py": "Beihu Qu",
        "jp": "bhq",
        "qp": "BeihuQu"
}, {
    "cName": "苏仙区",
        "code": "431003",
        "py": "Suxian Qu",
        "jp": "sxq",
        "qp": "SuxianQu"
}, {
    "cName": "资兴市",
        "code": "431081",
        "py": "Zixing Shi",
        "jp": "zxs",
        "qp": "ZixingShi"
}, {
    "cName": "桂阳县",
        "code": "431021",
        "py": "Guiyang Xian",
        "jp": "gyx",
        "qp": "GuiyangXian"
}, {
    "cName": "宜章县",
        "code": "431022",
        "py": "Yizhang Xian",
        "jp": "yzx",
        "qp": "YizhangXian"
}, {
    "cName": "永兴县",
        "code": "431023",
        "py": "Yongxing Xian",
        "jp": "yxx",
        "qp": "YongxingXian"
}, {
    "cName": "嘉禾县",
        "code": "431024",
        "py": "Jiahe Xian",
        "jp": "jhx",
        "qp": "JiaheXian"
}, {
    "cName": "临武县",
        "code": "431025",
        "py": "Linwu Xian",
        "jp": "lwx",
        "qp": "LinwuXian"
}, {
    "cName": "汝城县",
        "code": "431026",
        "py": "Rucheng Xian",
        "jp": "rcx",
        "qp": "RuchengXian"
}, {
    "cName": "桂东县",
        "code": "431027",
        "py": "Guidong Xian",
        "jp": "gdx",
        "qp": "GuidongXian"
}, {
    "cName": "安仁县",
        "code": "431028",
        "py": "Anren Xian",
        "jp": "arx",
        "qp": "AnrenXian"
}, {
    "cName": "永州市",
        "code": "431100",
        "py": "Yongzhou Shi",
        "jp": "yzs",
        "qp": "YongzhouShi"
}, {
    "cName": "冷水滩区",
        "code": "431103",
        "py": "Lengshuitan Qu",
        "jp": "lstq",
        "qp": "LengshuitanQu"
}, {
    "cName": "零陵区",
        "code": "431102",
        "py": "Lingling Qu",
        "jp": "llq",
        "qp": "LinglingQu"
}, {
    "cName": "祁阳县",
        "code": "431121",
        "py": "Qiyang Xian",
        "jp": "qyx",
        "qp": "QiyangXian"
}, {
    "cName": "东安县",
        "code": "431122",
        "py": "Dong&#39;an Xian",
        "jp": "dax",
        "qp": "DonganXian"
}, {
    "cName": "双牌县",
        "code": "431123",
        "py": "Shuangpai Xian",
        "jp": "spx",
        "qp": "ShuangpaiXian"
}, {
    "cName": "道县",
        "code": "431124",
        "py": "Dao Xian",
        "jp": "dx",
        "qp": "DaoXian"
}, {
    "cName": "江永县",
        "code": "431125",
        "py": "Jiangyong Xian",
        "jp": "jyx",
        "qp": "JiangyongXian"
}, {
    "cName": "宁远县",
        "code": "431126",
        "py": "Ningyuan Xian",
        "jp": "nyx",
        "qp": "NingyuanXian"
}, {
    "cName": "蓝山县",
        "code": "431127",
        "py": "Lanshan Xian",
        "jp": "lsx",
        "qp": "LanshanXian"
}, {
    "cName": "新田县",
        "code": "431128",
        "py": "Xintian Xian",
        "jp": "xtx",
        "qp": "XintianXian"
}, {
    "cName": "江华瑶族自治县",
        "code": "431129",
        "py": "Jianghua Yaozu Zizhixian",
        "jp": "jhyzzzx",
        "qp": "JianghuaYaozuZizhixian"
}, {
    "cName": "怀化市",
        "code": "431200",
        "py": "Huaihua Shi",
        "jp": "hhs",
        "qp": "HuaihuaShi"
}, {
    "cName": "鹤城区",
        "code": "431202",
        "py": "Hecheng Qu",
        "jp": "hcq",
        "qp": "HechengQu"
}, {
    "cName": "洪江市",
        "code": "431281",
        "py": "Hongjiang Shi",
        "jp": "hjs",
        "qp": "HongjiangShi"
}, {
    "cName": "中方县",
        "code": "431221",
        "py": "Zhongfang Xian",
        "jp": "zfx",
        "qp": "ZhongfangXian"
}, {
    "cName": "沅陵县",
        "code": "431222",
        "py": "Yuanling Xian",
        "jp": "ylx",
        "qp": "YuanlingXian"
}, {
    "cName": "辰溪县",
        "code": "431223",
        "py": "Chenxi Xian",
        "jp": "cxx",
        "qp": "ChenxiXian"
}, {
    "cName": "溆浦县",
        "code": "431224",
        "py": "Xupu Xian",
        "jp": "xpx",
        "qp": "XupuXian"
}, {
    "cName": "会同县",
        "code": "431225",
        "py": "Huitong Xian",
        "jp": "htx",
        "qp": "HuitongXian"
}, {
    "cName": "麻阳苗族自治县",
        "code": "431226",
        "py": "Mayang Miaozu Zizhixian",
        "jp": "mymzzzx",
        "qp": "MayangMiaozuZizhixian"
}, {
    "cName": "新晃侗族自治县",
        "code": "431227",
        "py": "Xinhuang Dongzu Zizhixian",
        "jp": "xhdzzzx",
        "qp": "XinhuangDongzuZizhixian"
}, {
    "cName": "芷江侗族自治县",
        "code": "431228",
        "py": "Zhijiang Dongzu Zizhixian",
        "jp": "zjdzzzx",
        "qp": "ZhijiangDongzuZizhixian"
}, {
    "cName": "靖州苗族侗族自治县",
        "code": "431229",
        "py": "Jingzhou Miaozu Dongzu Zizhixian",
        "jp": "jzmzdzzzx",
        "qp": "JingzhouMiaozuDongzuZizhixian"
}, {
    "cName": "通道侗族自治县",
        "code": "431230",
        "py": "Tongdao Dongzu Zizhixian",
        "jp": "tddzzzx",
        "qp": "TongdaoDongzuZizhixian"
}, {
    "cName": "娄底市",
        "code": "431300",
        "py": "Loudi Shi",
        "jp": "lds",
        "qp": "LoudiShi"
}, {
    "cName": "娄星区",
        "code": "431302",
        "py": "Louxing Qu",
        "jp": "lxq",
        "qp": "LouxingQu"
}, {
    "cName": "冷水江市",
        "code": "431381",
        "py": "Lengshuijiang Shi",
        "jp": "lsjs",
        "qp": "LengshuijiangShi"
}, {
    "cName": "涟源市",
        "code": "431382",
        "py": "Lianyuan Shi",
        "jp": "lys",
        "qp": "LianyuanShi"
}, {
    "cName": "双峰县",
        "code": "431321",
        "py": "Shuangfeng Xian",
        "jp": "sfx",
        "qp": "ShuangfengXian"
}, {
    "cName": "新化县",
        "code": "431322",
        "py": "Xinhua Xian",
        "jp": "xhx",
        "qp": "XinhuaXian"
}, {
    "cName": "湘西土家族苗族自治州",
        "code": "433100",
        "py": "Xiangxi Tujiazu Miaozu Zizhizhou",
        "jp": "xxtjzmzzzz",
        "qp": "XiangxiTujiazuMiaozuZizhizhou"
}, {
    "cName": "吉首市",
        "code": "433101",
        "py": "Jishou Shi",
        "jp": "jss",
        "qp": "JishouShi"
}, {
    "cName": "泸溪县",
        "code": "433122",
        "py": "Luxi Xian",
        "jp": "lxx",
        "qp": "LuxiXian"
}, {
    "cName": "凤凰县",
        "code": "433123",
        "py": "Fenghuang Xian",
        "jp": "fhx",
        "qp": "FenghuangXian"
}, {
    "cName": "花垣县",
        "code": "433124",
        "py": "Huayuan Xian",
        "jp": "hyx",
        "qp": "HuayuanXian"
}, {
    "cName": "保靖县",
        "code": "433125",
        "py": "Baojing Xian",
        "jp": "bjx",
        "qp": "BaojingXian"
}, {
    "cName": "古丈县",
        "code": "433126",
        "py": "Guzhang Xian",
        "jp": "gzx",
        "qp": "GuzhangXian"
}, {
    "cName": "永顺县",
        "code": "433127",
        "py": "Yongshun Xian",
        "jp": "ysx",
        "qp": "YongshunXian"
}, {
    "cName": "龙山县",
        "code": "433130",
        "py": "Longshan Xian",
        "jp": "lsx",
        "qp": "LongshanXian"
}, {
    "cName": "广东省",
        "code": "440000",
        "py": "Guangdong Sheng",
        "jp": "gds",
        "qp": "GuangdongSheng"
}, {
    "cName": "广州市",
        "code": "440100",
        "py": "Guangzhou Shi",
        "jp": "gzs",
        "qp": "GuangzhouShi"
}, {
    "cName": "越秀区",
        "code": "440104",
        "py": "Yuexiu Qu",
        "jp": "yxq",
        "qp": "YuexiuQu"
}, {
    "cName": "荔湾区",
        "code": "440103",
        "py": "Liwan Qu",
        "jp": "lwq",
        "qp": "LiwanQu"
}, {
    "cName": "海珠区",
        "code": "440105",
        "py": "Haizhu Qu",
        "jp": "hzq",
        "qp": "HaizhuQu"
}, {
    "cName": "天河区",
        "code": "440106",
        "py": "Tianhe Qu",
        "jp": "thq",
        "qp": "TianheQu"
}, {
    "cName": "白云区",
        "code": "440111",
        "py": "Baiyun Qu",
        "jp": "byq",
        "qp": "BaiyunQu"
}, {
    "cName": "黄埔区",
        "code": "440112",
        "py": "Huangpu Qu",
        "jp": "hpq",
        "qp": "HuangpuQu"
}, {
    "cName": "番禺区",
        "code": "440113",
        "py": "Panyu Qu",
        "jp": "pyq",
        "qp": "PanyuQu"
}, {
    "cName": "花都区",
        "code": "440114",
        "py": "Huadu Qu",
        "jp": "hdq",
        "qp": "HuaduQu"
}, {
    "cName": "南沙区",
        "code": "440115",
        "py": "Nansha Qu",
        "jp": "nsq",
        "qp": "NanshaQu"
}, {
    "cName": "增城区",
        "code": "440118",
        "py": "Zengcheng Qu",
        "jp": "zcq",
        "qp": "ZengchengQu"
}, {
    "cName": "从化区",
        "code": "440117",
        "py": "Conghua Qu",
        "jp": "chq",
        "qp": "ConghuaQu"
}, {
    "cName": "韶关市",
        "code": "440200",
        "py": "Shaoguan Shi",
        "jp": "sgs",
        "qp": "ShaoguanShi"
}, {
    "cName": "浈江区",
        "code": "440204",
        "py": "Zhenjiang Qu",
        "jp": "zjq",
        "qp": "ZhenjiangQu"
}, {
    "cName": "武江区",
        "code": "440203",
        "py": "Wujiang Qu",
        "jp": "wjq",
        "qp": "WujiangQu"
}, {
    "cName": "曲江区",
        "code": "440205",
        "py": "Qujiang Qu",
        "jp": "qjq",
        "qp": "QujiangQu"
}, {
    "cName": "乐昌市",
        "code": "440281",
        "py": "Lechang Shi",
        "jp": "lcs",
        "qp": "LechangShi"
}, {
    "cName": "南雄市",
        "code": "440282",
        "py": "Nanxiong Shi",
        "jp": "nxs",
        "qp": "NanxiongShi"
}, {
    "cName": "始兴县",
        "code": "440222",
        "py": "Shixing Xian",
        "jp": "sxx",
        "qp": "ShixingXian"
}, {
    "cName": "仁化县",
        "code": "440224",
        "py": "Renhua Xian",
        "jp": "rhx",
        "qp": "RenhuaXian"
}, {
    "cName": "翁源县",
        "code": "440229",
        "py": "Wengyuan Xian",
        "jp": "wyx",
        "qp": "WengyuanXian"
}, {
    "cName": "新丰县",
        "code": "440233",
        "py": "Xinfeng Xian",
        "jp": "xfx",
        "qp": "XinfengXian"
}, {
    "cName": "乳源瑶族自治县",
        "code": "440232",
        "py": "Ruyuan Yaozu Zizhixian",
        "jp": "ryyzzzx",
        "qp": "RuyuanYaozuZizhixian"
}, {
    "cName": "深圳市",
        "code": "440300",
        "py": "Shenzhen Shi",
        "jp": "szs",
        "qp": "ShenzhenShi"
}, {
    "cName": "福田区",
        "code": "440304",
        "py": "Futian Qu",
        "jp": "ftq",
        "qp": "FutianQu"
}, {
    "cName": "罗湖区",
        "code": "440303",
        "py": "Luohu Qu",
        "jp": "lhq",
        "qp": "LuohuQu"
}, {
    "cName": "南山区",
        "code": "440305",
        "py": "Nanshan Qu",
        "jp": "nsq",
        "qp": "NanshanQu"
}, {
    "cName": "宝安区",
        "code": "440306",
        "py": "Bao&#39;an Qu",
        "jp": "baq",
        "qp": "BaoanQu"
}, {
    "cName": "龙岗区",
        "code": "440307",
        "py": "Longgang Qu",
        "jp": "lgq",
        "qp": "LonggangQu"
}, {
    "cName": "盐田区",
        "code": "440308",
        "py": "Yantian Qu",
        "jp": "ytq",
        "qp": "YantianQu"
}, {
    "cName": "龙华区",
        "code": "440309",
        "py": "Longhua Qu",
        "jp": "lhq",
        "qp": "LonghuaQu"
}, {
    "cName": "坪山区",
        "code": "440310",
        "py": "Pingshan Qu",
        "jp": "psq",
        "qp": "PingshanQu"
}, {
    "cName": "珠海市",
        "code": "440400",
        "py": "Zhuhai Shi",
        "jp": "zhs",
        "qp": "ZhuhaiShi"
}, {
    "cName": "香洲区",
        "code": "440402",
        "py": "Xiangzhou Qu",
        "jp": "xzq",
        "qp": "XiangzhouQu"
}, {
    "cName": "斗门区",
        "code": "440403",
        "py": "Doumen Qu",
        "jp": "dmq",
        "qp": "DoumenQu"
}, {
    "cName": "金湾区",
        "code": "440404",
        "py": "Jinwan Qu",
        "jp": "jwq",
        "qp": "JinwanQu"
}, {
    "cName": "汕头市",
        "code": "440500",
        "py": "Shantou Shi",
        "jp": "sts",
        "qp": "ShantouShi"
}, {
    "cName": "金平区",
        "code": "440511",
        "py": "Jinping Qu",
        "jp": "jpq",
        "qp": "JinpingQu"
}, {
    "cName": "龙湖区",
        "code": "440507",
        "py": "Longhu Qu",
        "jp": "lhq",
        "qp": "LonghuQu"
}, {
    "cName": "濠江区",
        "code": "440512",
        "py": "Haojiang Qu",
        "jp": "hjq",
        "qp": "HaojiangQu"
}, {
    "cName": "潮阳区",
        "code": "440513",
        "py": "Chaoyang Qu",
        "jp": "cyq",
        "qp": "ChaoyangQu"
}, {
    "cName": "潮南区",
        "code": "440514",
        "py": "Chaonan Qu",
        "jp": "cnq",
        "qp": "ChaonanQu"
}, {
    "cName": "澄海区",
        "code": "440515",
        "py": "Chenghai Qu",
        "jp": "chq",
        "qp": "ChenghaiQu"
}, {
    "cName": "南澳县",
        "code": "440523",
        "py": "Nan&#39;ao Xian",
        "jp": "nax",
        "qp": "NanaoXian"
}, {
    "cName": "佛山市",
        "code": "440600",
        "py": "Foshan Shi",
        "jp": "fss",
        "qp": "FoshanShi"
}, {
    "cName": "禅城区",
        "code": "440604",
        "py": "Chancheng Qu",
        "jp": "ccq",
        "qp": "ChanchengQu"
}, {
    "cName": "南海区",
        "code": "440605",
        "py": "Nanhai Qu",
        "jp": "nhq",
        "qp": "NanhaiQu"
}, {
    "cName": "顺德区",
        "code": "440606",
        "py": "Shunde Qu",
        "jp": "sdq",
        "qp": "ShundeQu"
}, {
    "cName": "三水区",
        "code": "440607",
        "py": "Sanshui Qu",
        "jp": "ssq",
        "qp": "SanshuiQu"
}, {
    "cName": "高明区",
        "code": "440608",
        "py": "Gaoming Qu",
        "jp": "gmq",
        "qp": "GaomingQu"
}, {
    "cName": "江门市",
        "code": "440700",
        "py": "Jiangmen Shi",
        "jp": "jms",
        "qp": "JiangmenShi"
}, {
    "cName": "蓬江区",
        "code": "440703",
        "py": "Pengjiang Qu",
        "jp": "pjq",
        "qp": "PengjiangQu"
}, {
    "cName": "江海区",
        "code": "440704",
        "py": "Jianghai Qu",
        "jp": "jhq",
        "qp": "JianghaiQu"
}, {
    "cName": "新会区",
        "code": "440705",
        "py": "Xinhui Qu",
        "jp": "xhq",
        "qp": "XinhuiQu"
}, {
    "cName": "台山市",
        "code": "440781",
        "py": "Taishan Shi",
        "jp": "tss",
        "qp": "TaishanShi"
}, {
    "cName": "开平市",
        "code": "440783",
        "py": "Kaiping Shi",
        "jp": "kps",
        "qp": "KaipingShi"
}, {
    "cName": "鹤山市",
        "code": "440784",
        "py": "Heshan Shi",
        "jp": "hss",
        "qp": "HeshanShi"
}, {
    "cName": "恩平市",
        "code": "440785",
        "py": "Enping Shi",
        "jp": "eps",
        "qp": "EnpingShi"
}, {
    "cName": "湛江市",
        "code": "440800",
        "py": "Zhanjiang Shi",
        "jp": "zjs",
        "qp": "ZhanjiangShi"
}, {
    "cName": "赤坎区",
        "code": "440802",
        "py": "Chikan Qu",
        "jp": "ckq",
        "qp": "ChikanQu"
}, {
    "cName": "霞山区",
        "code": "440803",
        "py": "Xiashan Qu",
        "jp": "xsq",
        "qp": "XiashanQu"
}, {
    "cName": "坡头区",
        "code": "440804",
        "py": "Potou Qu",
        "jp": "ptq",
        "qp": "PotouQu"
}, {
    "cName": "麻章区",
        "code": "440811",
        "py": "Mazhang Qu",
        "jp": "mzq",
        "qp": "MazhangQu"
}, {
    "cName": "廉江市",
        "code": "440881",
        "py": "Lianjiang Shi",
        "jp": "ljs",
        "qp": "LianjiangShi"
}, {
    "cName": "雷州市",
        "code": "440882",
        "py": "Leizhou Shi",
        "jp": "lzs",
        "qp": "LeizhouShi"
}, {
    "cName": "吴川市",
        "code": "440883",
        "py": "Wuchuan Shi",
        "jp": "wcs",
        "qp": "WuchuanShi"
}, {
    "cName": "遂溪县",
        "code": "440823",
        "py": "Suixi Xian",
        "jp": "sxx",
        "qp": "SuixiXian"
}, {
    "cName": "徐闻县",
        "code": "440825",
        "py": "Xuwen Xian",
        "jp": "xwx",
        "qp": "XuwenXian"
}, {
    "cName": "茂名市",
        "code": "440900",
        "py": "Maoming Shi",
        "jp": "mms",
        "qp": "MaomingShi"
}, {
    "cName": "茂南区",
        "code": "440902",
        "py": "Maonan Qu",
        "jp": "mnq",
        "qp": "MaonanQu"
}, {
    "cName": "电白区",
        "code": "440904",
        "py": "Dianbai Qu",
        "jp": "dbq",
        "qp": "DianbaiQu"
}, {
    "cName": "高州市",
        "code": "440981",
        "py": "Gaozhou Shi",
        "jp": "gzs",
        "qp": "GaozhouShi"
}, {
    "cName": "化州市",
        "code": "440982",
        "py": "Huazhou Shi",
        "jp": "hzs",
        "qp": "HuazhouShi"
}, {
    "cName": "信宜市",
        "code": "440983",
        "py": "Xinyi Shi",
        "jp": "xys",
        "qp": "XinyiShi"
}, {
    "cName": "肇庆市",
        "code": "441200",
        "py": "Zhaoqing Shi",
        "jp": "zqs",
        "qp": "ZhaoqingShi"
}, {
    "cName": "端州区",
        "code": "441202",
        "py": "Duanzhou Qu",
        "jp": "dzq",
        "qp": "DuanzhouQu"
}, {
    "cName": "鼎湖区",
        "code": "441203",
        "py": "Dinghu Qu",
        "jp": "dhq",
        "qp": "DinghuQu"
}, {
    "cName": "高要区",
        "code": "441204",
        "py": "Gaoyao Qu",
        "jp": "gyq",
        "qp": "GaoyaoQu"
}, {
    "cName": "四会市",
        "code": "441284",
        "py": "Sihui Shi",
        "jp": "shs",
        "qp": "SihuiShi"
}, {
    "cName": "广宁县",
        "code": "441223",
        "py": "Guangning Xian",
        "jp": "gnx",
        "qp": "GuangningXian"
}, {
    "cName": "怀集县",
        "code": "441224",
        "py": "Huaiji Xian",
        "jp": "hjx",
        "qp": "HuaijiXian"
}, {
    "cName": "封开县",
        "code": "441225",
        "py": "Fengkai Xian",
        "jp": "fkx",
        "qp": "FengkaiXian"
}, {
    "cName": "德庆县",
        "code": "441226",
        "py": "Deqing Xian",
        "jp": "dqx",
        "qp": "DeqingXian"
}, {
    "cName": "惠州市",
        "code": "441300",
        "py": "Huizhou Shi",
        "jp": "hzs",
        "qp": "HuizhouShi"
}, {
    "cName": "惠城区",
        "code": "441302",
        "py": "Huicheng Qu",
        "jp": "hcq",
        "qp": "HuichengQu"
}, {
    "cName": "惠阳区",
        "code": "441303",
        "py": "Huiyang Qu",
        "jp": "hyq",
        "qp": "HuiyangQu"
}, {
    "cName": "博罗县",
        "code": "441322",
        "py": "Boluo Xian",
        "jp": "blx",
        "qp": "BoluoXian"
}, {
    "cName": "惠东县",
        "code": "441323",
        "py": "Huidong Xian",
        "jp": "hdx",
        "qp": "HuidongXian"
}, {
    "cName": "龙门县",
        "code": "441324",
        "py": "Longmen Xian",
        "jp": "lmx",
        "qp": "LongmenXian"
}, {
    "cName": "梅州市",
        "code": "441400",
        "py": "Meizhou Shi",
        "jp": "mzs",
        "qp": "MeizhouShi"
}, {
    "cName": "梅江区",
        "code": "441402",
        "py": "Meijiang Qu",
        "jp": "mjq",
        "qp": "MeijiangQu"
}, {
    "cName": "梅县区",
        "code": "441403",
        "py": "Meixian Qu",
        "jp": "mxq",
        "qp": "MeixianQu"
}, {
    "cName": "兴宁市",
        "code": "441481",
        "py": "Xingning Shi",
        "jp": "xns",
        "qp": "XingningShi"
}, {
    "cName": "大埔县",
        "code": "441422",
        "py": "Dapu Xian",
        "jp": "dpx",
        "qp": "DapuXian"
}, {
    "cName": "丰顺县",
        "code": "441423",
        "py": "Fengshun Xian",
        "jp": "fsx",
        "qp": "FengshunXian"
}, {
    "cName": "五华县",
        "code": "441424",
        "py": "Wuhua Xian",
        "jp": "whx",
        "qp": "WuhuaXian"
}, {
    "cName": "平远县",
        "code": "441426",
        "py": "Pingyuan Xian",
        "jp": "pyx",
        "qp": "PingyuanXian"
}, {
    "cName": "蕉岭县",
        "code": "441427",
        "py": "Jiaoling Xian",
        "jp": "jlx",
        "qp": "JiaolingXian"
}, {
    "cName": "汕尾市",
        "code": "441500",
        "py": "Shanwei Shi",
        "jp": "sws",
        "qp": "ShanweiShi"
}, {
    "cName": "城区",
        "code": "441502",
        "py": "Cheng Qu",
        "jp": "cq",
        "qp": "ChengQu"
}, {
    "cName": "陆丰市",
        "code": "441581",
        "py": "Lufeng Shi",
        "jp": "lfs",
        "qp": "LufengShi"
}, {
    "cName": "海丰县",
        "code": "441521",
        "py": "Haifeng Xian",
        "jp": "hfx",
        "qp": "HaifengXian"
}, {
    "cName": "陆河县",
        "code": "441523",
        "py": "Luhe Xian",
        "jp": "lhx",
        "qp": "LuheXian"
}, {
    "cName": "河源市",
        "code": "441600",
        "py": "Heyuan Shi",
        "jp": "hys",
        "qp": "HeyuanShi"
}, {
    "cName": "源城区",
        "code": "441602",
        "py": "Yuancheng Qu",
        "jp": "ycq",
        "qp": "YuanchengQu"
}, {
    "cName": "紫金县",
        "code": "441621",
        "py": "Zijin Xian",
        "jp": "zjx",
        "qp": "ZijinXian"
}, {
    "cName": "龙川县",
        "code": "441622",
        "py": "Longchuan Xian",
        "jp": "lcx",
        "qp": "LongchuanXian"
}, {
    "cName": "连平县",
        "code": "441623",
        "py": "Lianping Xian",
        "jp": "lpx",
        "qp": "LianpingXian"
}, {
    "cName": "和平县",
        "code": "441624",
        "py": "Heping Xian",
        "jp": "hpx",
        "qp": "HepingXian"
}, {
    "cName": "东源县",
        "code": "441625",
        "py": "Dongyuan Xian",
        "jp": "dyx",
        "qp": "DongyuanXian"
}, {
    "cName": "阳江市",
        "code": "441700",
        "py": "Yangjian Shi",
        "jp": "yjs",
        "qp": "YangjiangShi"
}, {
    "cName": "江城区",
        "code": "441702",
        "py": "Jiangcheng Qu",
        "jp": "jcq",
        "qp": "JiangchengQu"
}, {
    "cName": "阳东区",
        "code": "441704",
        "py": "Yangdong Qu",
        "jp": "ydq",
        "qp": "YangdongQu"
}, {
    "cName": "阳春市",
        "code": "441781",
        "py": "Yangchun Shi",
        "jp": "ycs",
        "qp": "YangchunShi"
}, {
    "cName": "阳西县",
        "code": "441721",
        "py": "Yangxi Xian",
        "jp": "yxx",
        "qp": "YangxiXian"
}, {
    "cName": "清远市",
        "code": "441800",
        "py": "Qingyuan Shi",
        "jp": "qys",
        "qp": "QingyuanShi"
}, {
    "cName": "清城区",
        "code": "441802",
        "py": "Qingcheng Qu",
        "jp": "qcq",
        "qp": "QingchengQu"
}, {
    "cName": "清新区",
        "code": "441803",
        "py": "Qingxin Qu",
        "jp": "qxq",
        "qp": "QingxinQu"
}, {
    "cName": "英德市",
        "code": "441881",
        "py": "Yingde Shi",
        "jp": "yds",
        "qp": "YingdeShi"
}, {
    "cName": "连州市",
        "code": "441882",
        "py": "Lianzhou Shi",
        "jp": "lzs",
        "qp": "LianzhouShi"
}, {
    "cName": "佛冈县",
        "code": "441821",
        "py": "Fogang Xian",
        "jp": "fgx",
        "qp": "FogangXian"
}, {
    "cName": "阳山县",
        "code": "441823",
        "py": "Yangshan Xian",
        "jp": "ysx",
        "qp": "YangshanXian"
}, {
    "cName": "连山壮族瑶族自治县",
        "code": "441825",
        "py": "Lianshan Zhuangzu Yaozu Zizhixian",
        "jp": "lszzyzzzx",
        "qp": "LianshanZhuangzuYaozuZizhixian"
}, {
    "cName": "连南瑶族自治县",
        "code": "441826",
        "py": "Liannan Yaozu Zizhixian",
        "jp": "lnyzzzx",
        "qp": "LiannanYaozuZizhixian"
}, {
    "cName": "东莞市",
        "code": "441900",
        "py": "Dongguan Shi",
        "jp": "dgs",
        "qp": "DongguanShi"
}, {
    "cName": "中山市",
        "code": "442000",
        "py": "Zhongshan Shi",
        "jp": "zss",
        "qp": "ZhongshanShi"
}, {
    "cName": "潮州市",
        "code": "445100",
        "py": "Chaozhou Shi",
        "jp": "czs",
        "qp": "ChaozhouShi"
}, {
    "cName": "湘桥区",
        "code": "445102",
        "py": "Xiangqiao Qu",
        "jp": "xqq",
        "qp": "XiangqiaoQu"
}, {
    "cName": "潮安区",
        "code": "445103",
        "py": "Chaoan Qu",
        "jp": "caq",
        "qp": "ChaoanQu"
}, {
    "cName": "饶平县",
        "code": "445122",
        "py": "Raoping Xian",
        "jp": "rpx",
        "qp": "RaopingXian"
}, {
    "cName": "揭阳市",
        "code": "445200",
        "py": "Jieyang Shi",
        "jp": "jys",
        "qp": "JieyangShi"
}, {
    "cName": "榕城区",
        "code": "445202",
        "py": "Rongcheng Qu",
        "jp": "rcq",
        "qp": "RongchengQu"
}, {
    "cName": "揭东区",
        "code": "445203",
        "py": "Jiedong Qu",
        "jp": "jdq",
        "qp": "JiedongQu"
}, {
    "cName": "普宁市",
        "code": "445281",
        "py": "Puning Shi",
        "jp": "pns",
        "qp": "PuningShi"
}, {
    "cName": "揭西县",
        "code": "445222",
        "py": "Jiexi Xian",
        "jp": "jxx",
        "qp": "JiexiXian"
}, {
    "cName": "惠来县",
        "code": "445224",
        "py": "Huilai Xian",
        "jp": "hlx",
        "qp": "HuilaiXian"
}, {
    "cName": "云浮市",
        "code": "445300",
        "py": "Yunfu Shi",
        "jp": "yfs",
        "qp": "YunfuShi"
}, {
    "cName": "云城区",
        "code": "445302",
        "py": "Yuncheng Qu",
        "jp": "ycq",
        "qp": "YunchengQu"
}, {
    "cName": "云安区",
        "code": "445303",
        "py": "Yun&#39;an Qu",
        "jp": "yaq",
        "qp": "YunanQu"
}, {
    "cName": "罗定市",
        "code": "445381",
        "py": "Luoding Shi",
        "jp": "lds",
        "qp": "LuodingShi"
}, {
    "cName": "新兴县",
        "code": "445321",
        "py": "Xinxing Xian",
        "jp": "xxx",
        "qp": "XinxingXian"
}, {
    "cName": "郁南县",
        "code": "445322",
        "py": "Yunan Xian",
        "jp": "ynx",
        "qp": "YunanXian"
}, {
    "cName": "广西壮族自治区",
        "code": "450000",
        "py": "Guangxi Zhuangzu Zizhiqu",
        "jp": "gxzzzzq",
        "qp": "GuangxiZhuangzuZizhiqu"
}, {
    "cName": "南宁市",
        "code": "450100",
        "py": "Nanning Shi",
        "jp": "nns",
        "qp": "NanningShi"
}, {
    "cName": "青秀区",
        "code": "450103",
        "py": "Qingxiu Qu",
        "jp": "qxq",
        "qp": "QingxiuQu"
}, {
    "cName": "兴宁区",
        "code": "450102",
        "py": "Xingning Qu",
        "jp": "xnq",
        "qp": "XingningQu"
}, {
    "cName": "江南区",
        "code": "450105",
        "py": "Jiangnan Qu",
        "jp": "jnq",
        "qp": "JiangnanQu"
}, {
    "cName": "西乡塘区",
        "code": "450107",
        "py": "Xixiangtang Qu",
        "jp": "xxtq",
        "qp": "XixiangtangQu"
}, {
    "cName": "良庆区",
        "code": "450108",
        "py": "Liangqing Qu",
        "jp": "lqq",
        "qp": "LiangqingQu"
}, {
    "cName": "邕宁区",
        "code": "450109",
        "py": "Yongning Qu",
        "jp": "ynq",
        "qp": "YongningQu"
}, {
    "cName": "武鸣区",
        "code": "450110",
        "py": "Wuming Qu",
        "jp": "wmq",
        "qp": "WumingQu"
}, {
    "cName": "隆安县",
        "code": "450123",
        "py": "Long&#39;an Xian",
        "jp": "lax",
        "qp": "LonganXian"
}, {
    "cName": "马山县",
        "code": "450124",
        "py": "Mashan Xian",
        "jp": "msx",
        "qp": "MashanXian"
}, {
    "cName": "上林县",
        "code": "450125",
        "py": "Shanglin Xian",
        "jp": "slx",
        "qp": "ShanglinXian"
}, {
    "cName": "宾阳县",
        "code": "450126",
        "py": "Binyang Xiang",
        "jp": "byx",
        "qp": "BinyangXiang"
}, {
    "cName": "横县",
        "code": "450127",
        "py": "Heng Xian",
        "jp": "hx",
        "qp": "HengXian"
}, {
    "cName": "柳州市",
        "code": "450200",
        "py": "Liuzhou Shi",
        "jp": "lzs",
        "qp": "LiuzhouShi"
}, {
    "cName": "柳北区",
        "code": "450205",
        "py": "Liubei Qu",
        "jp": "lbq",
        "qp": "LiubeiQu"
}, {
    "cName": "城中区",
        "code": "450202",
        "py": "Chengzhong Qu",
        "jp": "czq",
        "qp": "ChengzhongQu"
}, {
    "cName": "鱼峰区",
        "code": "450203",
        "py": "Yufeng Qu",
        "jp": "yfq",
        "qp": "YufengQu"
}, {
    "cName": "柳南区",
        "code": "450204",
        "py": "Liunan Qu",
        "jp": "lnq",
        "qp": "LiunanQu"
}, {
    "cName": "柳江区",
        "code": "450206",
        "py": "Liujiang Qu",
        "jp": "ljq",
        "qp": "LiujiangQu"
}, {
    "cName": "柳城县",
        "code": "450222",
        "py": "Liucheng Xian",
        "jp": "lcx",
        "qp": "LiuchengXian"
}, {
    "cName": "鹿寨县",
        "code": "450223",
        "py": "Luzhai Xian",
        "jp": "lzx",
        "qp": "LuzhaiXian"
}, {
    "cName": "融安县",
        "code": "450224",
        "py": "Rong&#39;an Xian",
        "jp": "rax",
        "qp": "RonganXian"
}, {
    "cName": "融水苗族自治县",
        "code": "450225",
        "py": "Rongshui Miaozu Zizhixian",
        "jp": "rsmzzzx",
        "qp": "RongshuiMiaozuZizhixian"
}, {
    "cName": "三江侗族自治县",
        "code": "450226",
        "py": "Sanjiang Dongzu Zizhixian",
        "jp": "sjdzzzx",
        "qp": "SanjiangDongzuZizhixian"
}, {
    "cName": "桂林市",
        "code": "450300",
        "py": "Guilin Shi",
        "jp": "gls",
        "qp": "GuilinShi"
}, {
    "cName": "临桂区",
        "code": "450312",
        "py": "Lingui Qu",
        "jp": "lgq",
        "qp": "LinguiQu"
}, {
    "cName": "秀峰区",
        "code": "450302",
        "py": "Xiufeng Qu",
        "jp": "xfq",
        "qp": "XiufengQu"
}, {
    "cName": "叠彩区",
        "code": "450303",
        "py": "Diecai Qu",
        "jp": "dcq",
        "qp": "DiecaiQu"
}, {
    "cName": "象山区",
        "code": "450304",
        "py": "Xiangshan Qu",
        "jp": "xsq",
        "qp": "XiangshanQu"
}, {
    "cName": "七星区",
        "code": "450305",
        "py": "Qixing Qu",
        "jp": "qxq",
        "qp": "QixingQu"
}, {
    "cName": "雁山区",
        "code": "450311",
        "py": "Yanshan Qu",
        "jp": "ysq",
        "qp": "YanshanQu"
}, {
    "cName": "阳朔县",
        "code": "450321",
        "py": "Yangshuo Xian",
        "jp": "ysx",
        "qp": "YangshuoXian"
}, {
    "cName": "灵川县",
        "code": "450323",
        "py": "Lingchuan Xian",
        "jp": "lcx",
        "qp": "LingchuanXian"
}, {
    "cName": "全州县",
        "code": "450324",
        "py": "Quanzhou Xian",
        "jp": "qzx",
        "qp": "QuanzhouXian"
}, {
    "cName": "兴安县",
        "code": "450325",
        "py": "Xing&#39;an Xian",
        "jp": "xax",
        "qp": "XinganXian"
}, {
    "cName": "永福县",
        "code": "450326",
        "py": "Yongfu Xian",
        "jp": "yfx",
        "qp": "YongfuXian"
}, {
    "cName": "灌阳县",
        "code": "450327",
        "py": "Guanyang Xian",
        "jp": "gyx",
        "qp": "GuanyangXian"
}, {
    "cName": "资源县",
        "code": "450329",
        "py": "Ziyuan Xian",
        "jp": "zyx",
        "qp": "ZiyuanXian"
}, {
    "cName": "平乐县",
        "code": "450330",
        "py": "Pingle Xian",
        "jp": "plx",
        "qp": "PingleXian"
}, {
    "cName": "荔浦县",
        "code": "450331",
        "py": "Lipu Xian",
        "jp": "lpx",
        "qp": "LipuXian"
}, {
    "cName": "龙胜各族自治县",
        "code": "450328",
        "py": "Longsheng Gezu Zizhixian",
        "jp": "lsgzzzx",
        "qp": "LongshengGezuZizhixian"
}, {
    "cName": "恭城瑶族自治县",
        "code": "450332",
        "py": "Gongcheng Yaozu Zizhixian",
        "jp": "gcyzzzx",
        "qp": "GongchengYaozuZizhixian"
}, {
    "cName": "梧州市",
        "code": "450400",
        "py": "Wuzhou Shi",
        "jp": "wzs",
        "qp": "WuzhouShi"
}, {
    "cName": "长洲区",
        "code": "450405",
        "py": "Changzhou Qu",
        "jp": "czq",
        "qp": "ChangzhouQu"
}, {
    "cName": "万秀区",
        "code": "450403",
        "py": "Wanxiu Qu",
        "jp": "wxq",
        "qp": "WanxiuQu"
}, {
    "cName": "龙圩区",
        "code": "450406",
        "py": "Longwei Qu",
        "jp": "lwq",
        "qp": "LongweiQu"
}, {
    "cName": "岑溪市",
        "code": "450481",
        "py": "Cenxi Shi",
        "jp": "cxs",
        "qp": "CenxiShi"
}, {
    "cName": "苍梧县",
        "code": "450421",
        "py": "Cangwu Xian",
        "jp": "cwx",
        "qp": "CangwuXian"
}, {
    "cName": "藤县",
        "code": "450422",
        "py": "Teng Xian",
        "jp": "tx",
        "qp": "TengXian"
}, {
    "cName": "蒙山县",
        "code": "450423",
        "py": "Mengshan Xian",
        "jp": "msx",
        "qp": "MengshanXian"
}, {
    "cName": "北海市",
        "code": "450500",
        "py": "Beihai Shi",
        "jp": "bhs",
        "qp": "BeihaiShi"
}, {
    "cName": "海城区",
        "code": "450502",
        "py": "Haicheng Qu",
        "jp": "hcq",
        "qp": "HaichengQu"
}, {
    "cName": "银海区",
        "code": "450503",
        "py": "Yinhai Qu",
        "jp": "yhq",
        "qp": "YinhaiQu"
}, {
    "cName": "铁山港区",
        "code": "450512",
        "py": "Tieshangang Qu",
        "jp": "tsgq",
        "qp": "TieshangangQu"
}, {
    "cName": "合浦县",
        "code": "450521",
        "py": "Hepu Xian",
        "jp": "hpx",
        "qp": "HepuXian"
}, {
    "cName": "防城港市",
        "code": "450600",
        "py": "Fangchenggang Shi",
        "jp": "fcgs",
        "qp": "FangchenggangShi"
}, {
    "cName": "港口区",
        "code": "450602",
        "py": "Gangkou Qu",
        "jp": "gkq",
        "qp": "GangkouQu"
}, {
    "cName": "防城区",
        "code": "450603",
        "py": "Fangcheng Qu",
        "jp": "fcq",
        "qp": "FangchengQu"
}, {
    "cName": "东兴市",
        "code": "450681",
        "py": "Dongxing Shi",
        "jp": "dxs",
        "qp": "DongxingShi"
}, {
    "cName": "上思县",
        "code": "450621",
        "py": "Shangsi Xian",
        "jp": "ssx",
        "qp": "ShangsiXian"
}, {
    "cName": "钦州市",
        "code": "450700",
        "py": "Qinzhou Shi",
        "jp": "qzs",
        "qp": "QinzhouShi"
}, {
    "cName": "钦南区",
        "code": "450702",
        "py": "Qinnan Qu",
        "jp": "qnq",
        "qp": "QinnanQu"
}, {
    "cName": "钦北区",
        "code": "450703",
        "py": "Qinbei Qu",
        "jp": "qbq",
        "qp": "QinbeiQu"
}, {
    "cName": "灵山县",
        "code": "450721",
        "py": "Lingshan Xian",
        "jp": "lsx",
        "qp": "LingshanXian"
}, {
    "cName": "浦北县",
        "code": "450722",
        "py": "Pubei Xian",
        "jp": "pbx",
        "qp": "PubeiXian"
}, {
    "cName": "贵港市",
        "code": "450800",
        "py": "Guigang Shi",
        "jp": "ggs",
        "qp": "GuigangShi"
}, {
    "cName": "港北区",
        "code": "450802",
        "py": "Gangbei Qu",
        "jp": "gbq",
        "qp": "GangbeiQu"
}, {
    "cName": "港南区",
        "code": "450803",
        "py": "Gangnan Qu",
        "jp": "gnq",
        "qp": "GangnanQu"
}, {
    "cName": "覃塘区",
        "code": "450804",
        "py": "Qintang Qu",
        "jp": "qtq",
        "qp": "QintangQu"
}, {
    "cName": "桂平市",
        "code": "450881",
        "py": "Guiping Shi",
        "jp": "gps",
        "qp": "GuipingShi"
}, {
    "cName": "平南县",
        "code": "450821",
        "py": "Pingnan Xian",
        "jp": "pnx",
        "qp": "PingnanXian"
}, {
    "cName": "玉林市",
        "code": "450900",
        "py": "Yulin Shi",
        "jp": "yls",
        "qp": "YulinShi"
}, {
    "cName": "玉州区",
        "code": "450902",
        "py": "Yuzhou Qu",
        "jp": "yzq",
        "qp": "YuzhouQu"
}, {
    "cName": "福绵区",
        "code": "450903",
        "py": "Fumian Qu",
        "jp": "fmq",
        "qp": "FumianQu"
}, {
    "cName": "北流市",
        "code": "450981",
        "py": "Beiliu Shi",
        "jp": "bls",
        "qp": "BeiliuShi"
}, {
    "cName": "容县",
        "code": "450921",
        "py": "Rong Xian",
        "jp": "rx",
        "qp": "RongXian"
}, {
    "cName": "陆川县",
        "code": "450922",
        "py": "Luchuan Xian",
        "jp": "lcx",
        "qp": "LuchuanXian"
}, {
    "cName": "博白县",
        "code": "450923",
        "py": "Bobai Xian",
        "jp": "bbx",
        "qp": "BobaiXian"
}, {
    "cName": "兴业县",
        "code": "450924",
        "py": "Xingye Xian",
        "jp": "xyx",
        "qp": "XingyeXian"
}, {
    "cName": "百色市",
        "code": "451000",
        "py": "Baise Shi",
        "jp": "bss",
        "qp": "BaiseShi"
}, {
    "cName": "右江区",
        "code": "451002",
        "py": "Youjiang Qu",
        "jp": "yjq",
        "qp": "YoujiangQu"
}, {
    "cName": "靖西市",
        "code": "451081",
        "py": "Jingxi Shi",
        "jp": "jxs",
        "qp": "JingxiShi"
}, {
    "cName": "田阳县",
        "code": "451021",
        "py": "Tianyang Xian",
        "jp": "tyx",
        "qp": "TianyangXian"
}, {
    "cName": "田东县",
        "code": "451022",
        "py": "Tiandong Xian",
        "jp": "tdx",
        "qp": "TiandongXian"
}, {
    "cName": "平果县",
        "code": "451023",
        "py": "Pingguo Xian",
        "jp": "pgx",
        "qp": "PingguoXian"
}, {
    "cName": "德保县",
        "code": "451024",
        "py": "Debao Xian",
        "jp": "dbx",
        "qp": "DebaoXian"
}, {
    "cName": "那坡县",
        "code": "451026",
        "py": "Napo Xian",
        "jp": "npx",
        "qp": "NapoXian"
}, {
    "cName": "凌云县",
        "code": "451027",
        "py": "Lingyun Xian",
        "jp": "lyx",
        "qp": "LingyunXian"
}, {
    "cName": "乐业县",
        "code": "451028",
        "py": "Leye Xian",
        "jp": "lyx",
        "qp": "LeyeXian"
}, {
    "cName": "田林县",
        "code": "451029",
        "py": "Tianlin Xian",
        "jp": "tlx",
        "qp": "TianlinXian"
}, {
    "cName": "西林县",
        "code": "451030",
        "py": "Xilin Xian",
        "jp": "xlx",
        "qp": "XilinXian"
}, {
    "cName": "隆林各族自治县",
        "code": "451031",
        "py": "Longlin Gezu Zizhixian",
        "jp": "llgzzzx",
        "qp": "LonglinGezuZizhixian"
}, {
    "cName": "贺州市",
        "code": "451100",
        "py": "Hezhou Shi",
        "jp": "hzs",
        "qp": "HezhouShi"
}, {
    "cName": "八步区",
        "code": "451102",
        "py": "Babu Qu",
        "jp": "bbq",
        "qp": "BabuQu"
}, {
    "cName": "平桂区",
        "code": "451103",
        "py": "Pinggui Qu",
        "jp": "pgq",
        "qp": "PingguiQu"
}, {
    "cName": "昭平县",
        "code": "451121",
        "py": "Zhaoping Xian",
        "jp": "zpx",
        "qp": "ZhaopingXian"
}, {
    "cName": "钟山县",
        "code": "451122",
        "py": "Zhongshan Xian",
        "jp": "zsx",
        "qp": "ZhongshanXian"
}, {
    "cName": "富川瑶族自治县",
        "code": "451123",
        "py": "Fuchuan Yaozu Zizhixian",
        "jp": "fcyzzzx",
        "qp": "FuchuanYaozuZizhixian"
}, {
    "cName": "河池市",
        "code": "451200",
        "py": "Hechi Shi",
        "jp": "hcs",
        "qp": "HechiShi"
}, {
    "cName": "金城江区",
        "code": "451202",
        "py": "Jinchengjiang Qu",
        "jp": "jcjq",
        "qp": "JinchengjiangQu"
}, {
    "cName": "宜州区",
        "code": "451203",
        "py": "Yizhou Qu",
        "jp": "yzq",
        "qp": "YizhouQu"
}, {
    "cName": "南丹县",
        "code": "451221",
        "py": "Nandan Xian",
        "jp": "ndx",
        "qp": "NandanXian"
}, {
    "cName": "天峨县",
        "code": "451222",
        "py": "Tian&#39;e Xian",
        "jp": "tex",
        "qp": "TianeXian"
}, {
    "cName": "凤山县",
        "code": "451223",
        "py": "Fengshan Xian",
        "jp": "fsx",
        "qp": "FengshanXian"
}, {
    "cName": "东兰县",
        "code": "451224",
        "py": "Donglan Xian",
        "jp": "dlx",
        "qp": "DonglanXian"
}, {
    "cName": "罗城仫佬族自治县",
        "code": "451225",
        "py": "Luocheng Mulaozu Zizhixian",
        "jp": "lcmlzzzx",
        "qp": "LuochengMulaozuZizhixian"
}, {
    "cName": "环江毛南族自治县",
        "code": "451226",
        "py": "Huanjiang Maonanzu Zizhixian",
        "jp": "hjmnzzzx",
        "qp": "HuanjiangMaonanzuZizhixian"
}, {
    "cName": "巴马瑶族自治县",
        "code": "451227",
        "py": "Bama Yaozu Zizhixian",
        "jp": "bmyzzzx",
        "qp": "BamaYaozuZizhixian"
}, {
    "cName": "都安瑶族自治县",
        "code": "451228",
        "py": "Du&#39;an Yaozu Zizhixian",
        "jp": "dayzzzx",
        "qp": "DuanYaozuZizhixian"
}, {
    "cName": "大化瑶族自治县",
        "code": "451229",
        "py": "Dahua Yaozu Zizhixian",
        "jp": "dhyzzzx",
        "qp": "DahuaYaozuZizhixian"
}, {
    "cName": "来宾市",
        "code": "451300",
        "py": "Laibin Shi",
        "jp": "lbs",
        "qp": "LaibinShi"
}, {
    "cName": "兴宾区",
        "code": "451302",
        "py": "Xingbin Qu",
        "jp": "xbq",
        "qp": "XingbinQu"
}, {
    "cName": "合山市",
        "code": "451381",
        "py": "Heshan Shi",
        "jp": "hss",
        "qp": "HeshanShi"
}, {
    "cName": "忻城县",
        "code": "451321",
        "py": "Xincheng Xian",
        "jp": "xcx",
        "qp": "XinchengXian"
}, {
    "cName": "象州县",
        "code": "451322",
        "py": "Xiangzhou Xian",
        "jp": "xzx",
        "qp": "XiangzhouXian"
}, {
    "cName": "武宣县",
        "code": "451323",
        "py": "Wuxuan Xian",
        "jp": "wxx",
        "qp": "WuxuanXian"
}, {
    "cName": "金秀瑶族自治县",
        "code": "451324",
        "py": "Jinxiu Yaozu Zizhixian",
        "jp": "jxyzzzx",
        "qp": "JinxiuYaozuZizhixian"
}, {
    "cName": "崇左市",
        "code": "451400",
        "py": "Chongzuo Shi",
        "jp": "czs",
        "qp": "ChongzuoShi"
}, {
    "cName": "江州区",
        "code": "451402",
        "py": "Jiangzhou Qu",
        "jp": "jzq",
        "qp": "JiangzhouQu"
}, {
    "cName": "凭祥市",
        "code": "451481",
        "py": "Pingxiang Shi",
        "jp": "pxs",
        "qp": "PingxiangShi"
}, {
    "cName": "扶绥县",
        "code": "451421",
        "py": "Fusui Xian",
        "jp": "fsx",
        "qp": "FusuiXian"
}, {
    "cName": "宁明县",
        "code": "451422",
        "py": "Ningming Xian",
        "jp": "nmx",
        "qp": "NingmingXian"
}, {
    "cName": "龙州县",
        "code": "451423",
        "py": "Longzhou Xian",
        "jp": "lzx",
        "qp": "LongzhouXian"
}, {
    "cName": "大新县",
        "code": "451424",
        "py": "Daxin Xian",
        "jp": "dxx",
        "qp": "DaxinXian"
}, {
    "cName": "天等县",
        "code": "451425",
        "py": "Tiandeng Xian",
        "jp": "tdx",
        "qp": "TiandengXian"
}, {
    "cName": "海南省",
        "code": "460000",
        "py": "Hainan Sheng",
        "jp": "hns",
        "qp": "HainanSheng"
}, {
    "cName": "海口市",
        "code": "460100",
        "py": "Haikou Shi",
        "jp": "hks",
        "qp": "HaikouShi"
}, {
    "cName": "龙华区",
        "code": "460106",
        "py": "Longhua Qu",
        "jp": "lhq",
        "qp": "LonghuaQu"
}, {
    "cName": "秀英区",
        "code": "460105",
        "py": "Xiuying Qu",
        "jp": "xyq",
        "qp": "XiuyingQu"
}, {
    "cName": "琼山区",
        "code": "460107",
        "py": "Qiongshan Qu",
        "jp": "qsq",
        "qp": "QiongshanQu"
}, {
    "cName": "美兰区",
        "code": "460108",
        "py": "Meilan Qu",
        "jp": "mlq",
        "qp": "MeilanQu"
}, {
    "cName": "三亚市",
        "code": "460200",
        "py": "Sanya Shi",
        "jp": "sys",
        "qp": "SanyaShi"
}, {
    "cName": "吉阳区",
        "code": "460203",
        "py": "Jiyang Qu",
        "jp": "jyq",
        "qp": "JiyangQu"
}, {
    "cName": "海棠区",
        "code": "460202",
        "py": "Haitang Qu",
        "jp": "htq",
        "qp": "HaitangQu"
}, {
    "cName": "天涯区",
        "code": "460204",
        "py": "Tianya Qu",
        "jp": "tyq",
        "qp": "TianyaQu"
}, {
    "cName": "崖州区",
        "code": "460205",
        "py": "Yazhou Qu",
        "jp": "yzq",
        "qp": "YazhouQu"
}, {
    "cName": "三沙市☆",
        "code": "460300",
        "py": "Sansha Shi",
        "jp": "sss",
        "qp": "SanshaShi"
}, {
    "cName": "儋州市",
        "code": "460400",
        "py": "Danzhou Shi",
        "jp": "dzs",
        "qp": "DanzhouShi"
}, {
    "cName": "五指山市",
        "code": "469001",
        "py": "Wuzhishan Shi",
        "jp": "wzss",
        "qp": "WuzhishanShi"
}, {
    "cName": "琼海市",
        "code": "469002",
        "py": "Qionghai Shi",
        "jp": "qhs",
        "qp": "QionghaiShi"
}, {
    "cName": "文昌市",
        "code": "469005",
        "py": "Wenchang Shi",
        "jp": "wcs",
        "qp": "WenchangShi"
}, {
    "cName": "万宁市",
        "code": "469006",
        "py": "Wanning Shi",
        "jp": "wns",
        "qp": "WanningShi"
}, {
    "cName": "东方市",
        "code": "469007",
        "py": "Dongfang Shi",
        "jp": "dfs",
        "qp": "DongfangShi"
}, {
    "cName": "定安县",
        "code": "469021",
        "py": "Ding&#39;an Xian",
        "jp": "dax",
        "qp": "DinganXian"
}, {
    "cName": "屯昌县",
        "code": "469022",
        "py": "Tunchang Xian",
        "jp": "tcx",
        "qp": "TunchangXian"
}, {
    "cName": "澄迈县",
        "code": "469023",
        "py": "Chengmai Xian",
        "jp": "cmx",
        "qp": "ChengmaiXian"
}, {
    "cName": "临高县",
        "code": "469024",
        "py": "Lingao Xian",
        "jp": "lgx",
        "qp": "LingaoXian"
}, {
    "cName": "白沙黎族自治县",
        "code": "469025",
        "py": "Baisha Lizu Zizhixian",
        "jp": "bslzzzx",
        "qp": "BaishaLizuZizhixian"
}, {
    "cName": "昌江黎族自治县",
        "code": "469026",
        "py": "Changjiang Lizu Zizhixian",
        "jp": "cjlzzzx",
        "qp": "ChangjiangLizuZizhixian"
}, {
    "cName": "乐东黎族自治县",
        "code": "469027",
        "py": "Ledonglizu Zizhixian",
        "jp": "ldlzzzx",
        "qp": "LedonglizuZizhixian"
}, {
    "cName": "陵水黎族自治县",
        "code": "469028",
        "py": "Lingshui Lizu Zizhixian",
        "jp": "lslzzzx",
        "qp": "LingshuiLizuZizhixian"
}, {
    "cName": "保亭黎族苗族自治县",
        "code": "469029",
        "py": "Baoting Lizu Miaozu Zizhixian",
        "jp": "btlzmzzzx",
        "qp": "BaotingLizuMiaozuZizhixian"
}, {
    "cName": "琼中黎族苗族自治县",
        "code": "469030",
        "py": "Qiongzhong Lizu Miaozu Zizhixian",
        "jp": "qzlzmzzzx",
        "qp": "QiongzhongLizuMiaozuZizhixian"
}, {
    "cName": "重庆市",
        "code": "500000",
        "py": "Chongqing Shi",
        "jp": "cqs",
        "qp": "ChongqingShi"
}, {
    "cName": "渝中区",
        "code": "500103",
        "py": "Yuzhong Qu",
        "jp": "yzq",
        "qp": "YuzhongQu"
}, {
    "cName": "万州区",
        "code": "500101",
        "py": "Wanzhou Qu",
        "jp": "wzq",
        "qp": "WanzhouQu"
}, {
    "cName": "涪陵区",
        "code": "500102",
        "py": "Fuling Qu",
        "jp": "flq",
        "qp": "FulingQu"
}, {
    "cName": "大渡口区",
        "code": "500104",
        "py": "Dadukou Qu",
        "jp": "ddkq",
        "qp": "DadukouQu"
}, {
    "cName": "江北区",
        "code": "500105",
        "py": "Jiangbei Qu",
        "jp": "jbq",
        "qp": "JiangbeiQu"
}, {
    "cName": "沙坪坝区",
        "code": "500106",
        "py": "Shapingba Qu",
        "jp": "spbq",
        "qp": "ShapingbaQu"
}, {
    "cName": "九龙坡区",
        "code": "500107",
        "py": "Jiulongpo Qu",
        "jp": "jlpq",
        "qp": "JiulongpoQu"
}, {
    "cName": "南岸区",
        "code": "500108",
        "py": "Nan&#39;an Qu",
        "jp": "naq",
        "qp": "NananQu"
}, {
    "cName": "北碚区",
        "code": "500109",
        "py": "Beibei Qu",
        "jp": "bbq",
        "qp": "BeibeiQu"
}, {
    "cName": "綦江区",
        "code": "500110",
        "py": "Qijiang Qu",
        "jp": "qjq",
        "qp": "QijiangQu"
}, {
    "cName": "大足区",
        "code": "500111",
        "py": "Dazu Qu",
        "jp": "dzq",
        "qp": "DazuQu"
}, {
    "cName": "渝北区",
        "code": "500112",
        "py": "Yubei Qu",
        "jp": "ybq",
        "qp": "YubeiQu"
}, {
    "cName": "巴南区",
        "code": "500113",
        "py": "Banan Qu",
        "jp": "bnq",
        "qp": "BananQu"
}, {
    "cName": "黔江区",
        "code": "500114",
        "py": "Qianjiang Qu",
        "jp": "qjq",
        "qp": "QianjiangQu"
}, {
    "cName": "长寿区",
        "code": "500115",
        "py": "Changshou Qu",
        "jp": "csq",
        "qp": "ChangshouQu"
}, {
    "cName": "江津区",
        "code": "500116",
        "py": "Jiangjin Qu",
        "jp": "jjq",
        "qp": "JiangjinQu"
}, {
    "cName": "合川区",
        "code": "500117",
        "py": "Hechuan Qu",
        "jp": "hcq",
        "qp": "HechuanQu"
}, {
    "cName": "永川区",
        "code": "500118",
        "py": "Yongchuan Qu",
        "jp": "ycq",
        "qp": "YongchuanQu"
}, {
    "cName": "南川区",
        "code": "500119",
        "py": "Nanchuan Qu",
        "jp": "ncq",
        "qp": "NanchuanQu"
}, {
    "cName": "璧山区",
        "code": "500120",
        "py": "Bishan Qu",
        "jp": "bsq",
        "qp": "BishanQu"
}, {
    "cName": "铜梁区",
        "code": "500151",
        "py": "Tongliang Qu",
        "jp": "tlq",
        "qp": "TongliangQu"
}, {
    "cName": "潼南区",
        "code": "500152",
        "py": "Tongnan Qu",
        "jp": "tnq",
        "qp": "TongnanQu"
}, {
    "cName": "荣昌区",
        "code": "500153",
        "py": "Rongchang Qu",
        "jp": "rcq",
        "qp": "RongchangQu"
}, {
    "cName": "开州区",
        "code": "500154",
        "py": "Kaizhou Qu",
        "jp": "kzq",
        "qp": "KaizhouQu"
}, {
    "cName": "梁平区",
        "code": "500155",
        "py": "Liangping Qu",
        "jp": "lpq",
        "qp": "LiangpingQu"
}, {
    "cName": "武隆区",
        "code": "500156",
        "py": "Wulong Qu",
        "jp": "wlq",
        "qp": "WulongQu"
}, {
    "cName": "城口县",
        "code": "500229",
        "py": "Chengkou Xian",
        "jp": "ckx",
        "qp": "ChengkouXian"
}, {
    "cName": "丰都县",
        "code": "500230",
        "py": "Fengdu Xian",
        "jp": "fdx",
        "qp": "FengduXian"
}, {
    "cName": "垫江县",
        "code": "500231",
        "py": "Dianjiang Xian",
        "jp": "djx",
        "qp": "DianjiangXian"
}, {
    "cName": "忠县",
        "code": "500233",
        "py": "Zhong Xian",
        "jp": "zx",
        "qp": "ZhongXian"
}, {
    "cName": "云阳县",
        "code": "500235",
        "py": "Yunyang Xian",
        "jp": "yyx",
        "qp": "YunyangXian"
}, {
    "cName": "奉节县",
        "code": "500236",
        "py": "Fengjie Xian",
        "jp": "fjx",
        "qp": "FengjieXian"
}, {
    "cName": "巫山县",
        "code": "500237",
        "py": "Wushan Xian",
        "jp": "wsx",
        "qp": "WushanXian"
}, {
    "cName": "巫溪县",
        "code": "500238",
        "py": "Wuxi Xian",
        "jp": "wxx",
        "qp": "WuxiXian"
}, {
    "cName": "石柱土家族自治县",
        "code": "500240",
        "py": "Shizhu Tujiazu Zizhixian",
        "jp": "sztjzzzx",
        "qp": "ShizhuTujiazuZizhixian"
}, {
    "cName": "秀山土家族苗族自治县",
        "code": "500241",
        "py": "Xiushan Tujiazu Miaozu Zizhixian",
        "jp": "xstjzmzzzx",
        "qp": "XiushanTujiazuMiaozuZizhixian"
}, {
    "cName": "酉阳土家族苗族自治县",
        "code": "500242",
        "py": "Youyang Tujiazu Miaozu Zizhixian",
        "jp": "yytjzmzzzx",
        "qp": "YouyangTujiazuMiaozuZizhixian"
}, {
    "cName": "彭水苗族土家族自治县",
        "code": "500243",
        "py": "Pengshui Miaozu Tujiazu Zizhixian",
        "jp": "psmztjzzzx",
        "qp": "PengshuiMiaozuTujiazuZizhixian"
}, {
    "cName": "四川省",
        "code": "510000",
        "py": "Sichuan Sheng",
        "jp": "scs",
        "qp": "SichuanSheng"
}, {
    "cName": "成都市",
        "code": "510100",
        "py": "Chengdu Shi",
        "jp": "cds",
        "qp": "ChengduShi"
}, {
    "cName": "武侯区",
        "code": "510107",
        "py": "Wuhou Qu",
        "jp": "whq",
        "qp": "WuhouQu"
}, {
    "cName": "锦江区",
        "code": "510104",
        "py": "Jinjiang Qu",
        "jp": "jjq",
        "qp": "JinjiangQu"
}, {
    "cName": "青羊区",
        "code": "510105",
        "py": "Qingyang Qu",
        "jp": "qyq",
        "qp": "QingyangQu"
}, {
    "cName": "金牛区",
        "code": "510106",
        "py": "Jinniu Qu",
        "jp": "jnq",
        "qp": "JinniuQu"
}, {
    "cName": "成华区",
        "code": "510108",
        "py": "Chenghua Qu",
        "jp": "chq",
        "qp": "ChenghuaQu"
}, {
    "cName": "龙泉驿区",
        "code": "510112",
        "py": "Longquanyi Qu",
        "jp": "lqyq",
        "qp": "LongquanyiQu"
}, {
    "cName": "青白江区",
        "code": "510113",
        "py": "Qingbaijiang Qu",
        "jp": "qbjq",
        "qp": "QingbaijiangQu"
}, {
    "cName": "新都区",
        "code": "510114",
        "py": "Xindu Qu",
        "jp": "xdq",
        "qp": "XinduQu"
}, {
    "cName": "温江区",
        "code": "510115",
        "py": "Wenjiang Qu",
        "jp": "wjq",
        "qp": "WenjiangQu"
}, {
    "cName": "双流区",
        "code": "510116",
        "py": "Shuangliu Qu",
        "jp": "slq",
        "qp": "ShuangliuQu"
}, {
    "cName": "郫都区",
        "code": "510117",
        "py": "Pidu Qu",
        "jp": "pdq",
        "qp": "PiduQu"
}, {
    "cName": "都江堰市",
        "code": "510181",
        "py": "Dujiangyan Shi",
        "jp": "djys",
        "qp": "DujiangyanShi"
}, {
    "cName": "彭州市",
        "code": "510182",
        "py": "Pengzhou Shi",
        "jp": "pzs",
        "qp": "PengzhouShi"
}, {
    "cName": "邛崃市",
        "code": "510183",
        "py": "Qionglai Shi",
        "jp": "qls",
        "qp": "QionglaiShi"
}, {
    "cName": "崇州市",
        "code": "510184",
        "py": "Chongzhou Shi",
        "jp": "czs",
        "qp": "ChongzhouShi"
}, {
    "cName": "简阳市",
        "code": "510185",
        "py": "Jianyang Shi",
        "jp": "jys",
        "qp": "JianyangShi"
}, {
    "cName": "金堂县",
        "code": "510121",
        "py": "Jintang Xian",
        "jp": "jtx",
        "qp": "JintangXian"
}, {
    "cName": "大邑县",
        "code": "510129",
        "py": "Dayi Xian",
        "jp": "dyx",
        "qp": "DayiXian"
}, {
    "cName": "蒲江县",
        "code": "510131",
        "py": "Pujiang Xian",
        "jp": "pjx",
        "qp": "PujiangXian"
}, {
    "cName": "新津县",
        "code": "510132",
        "py": "Xinjin Xian",
        "jp": "xjx",
        "qp": "XinjinXian"
}, {
    "cName": "自贡市",
        "code": "510300",
        "py": "Zigong Shi",
        "jp": "zgs",
        "qp": "ZigongShi"
}, {
    "cName": "自流井区",
        "code": "510302",
        "py": "Ziliujing Qu",
        "jp": "zljq",
        "qp": "ZiliujingQu"
}, {
    "cName": "贡井区",
        "code": "510303",
        "py": "Gongjing Qu",
        "jp": "gjq",
        "qp": "GongjingQu"
}, {
    "cName": "大安区",
        "code": "510304",
        "py": "Da&#39;an Qu",
        "jp": "daq",
        "qp": "DaanQu"
}, {
    "cName": "沿滩区",
        "code": "510311",
        "py": "Yantan Qu",
        "jp": "ytq",
        "qp": "YantanQu"
}, {
    "cName": "荣县",
        "code": "510321",
        "py": "Rong Xian",
        "jp": "rx",
        "qp": "RongXian"
}, {
    "cName": "富顺县",
        "code": "510322",
        "py": "Fushun Xian",
        "jp": "fsx",
        "qp": "FushunXian"
}, {
    "cName": "攀枝花市",
        "code": "510400",
        "py": "Panzhihua Shi",
        "jp": "pzhs",
        "qp": "PanzhihuaShi"
}, {
    "cName": "东区",
        "code": "510402",
        "py": "Dong Qu",
        "jp": "dq",
        "qp": "DongQu"
}, {
    "cName": "西区",
        "code": "510403",
        "py": "Xi Qu",
        "jp": "xq",
        "qp": "XiQu"
}, {
    "cName": "仁和区",
        "code": "510411",
        "py": "Renhe Qu",
        "jp": "rhq",
        "qp": "RenheQu"
}, {
    "cName": "米易县",
        "code": "510421",
        "py": "Miyi Xian",
        "jp": "myx",
        "qp": "MiyiXian"
}, {
    "cName": "盐边县",
        "code": "510422",
        "py": "Yanbian Xian",
        "jp": "ybx",
        "qp": "YanbianXian"
}, {
    "cName": "泸州市",
        "code": "510500",
        "py": "Luzhou Shi",
        "jp": "lzs",
        "qp": "LuzhouShi"
}, {
    "cName": "江阳区",
        "code": "510502",
        "py": "Jiangyang Qu",
        "jp": "jyq",
        "qp": "JiangyangQu"
}, {
    "cName": "纳溪区",
        "code": "510503",
        "py": "Naxi Qu",
        "jp": "nxq",
        "qp": "NaxiQu"
}, {
    "cName": "龙马潭区",
        "code": "510504",
        "py": "Longmatan Qu",
        "jp": "lmtq",
        "qp": "LongmatanQu"
}, {
    "cName": "泸县",
        "code": "510521",
        "py": "Lu Xian",
        "jp": "lx",
        "qp": "LuXian"
}, {
    "cName": "合江县",
        "code": "510522",
        "py": "Hejiang Xian",
        "jp": "hjx",
        "qp": "HejiangXian"
}, {
    "cName": "叙永县",
        "code": "510524",
        "py": "Xuyong Xian",
        "jp": "xyx",
        "qp": "XuyongXian"
}, {
    "cName": "古蔺县",
        "code": "510525",
        "py": "Gulin Xian",
        "jp": "glx",
        "qp": "GulinXian"
}, {
    "cName": "德阳市",
        "code": "510600",
        "py": "Deyang Shi",
        "jp": "dys",
        "qp": "DeyangShi"
}, {
    "cName": "旌阳区",
        "code": "510603",
        "py": "Jingyang Qu",
        "jp": "jyq",
        "qp": "JingyangQu"
}, {
    "cName": "罗江区",
        "code": "510604",
        "py": "Luojiang Qu",
        "jp": "ljq",
        "qp": "LuojiangQu"
}, {
    "cName": "广汉市",
        "code": "510681",
        "py": "Guanghan Shi",
        "jp": "ghs",
        "qp": "GuanghanShi"
}, {
    "cName": "什邡市",
        "code": "510682",
        "py": "Shifang Shi",
        "jp": "sfs",
        "qp": "ShifangShi"
}, {
    "cName": "绵竹市",
        "code": "510683",
        "py": "Mianzhu Shi",
        "jp": "mzs",
        "qp": "MianzhuShi"
}, {
    "cName": "中江县",
        "code": "510623",
        "py": "Zhongjiang Xian",
        "jp": "zjx",
        "qp": "ZhongjiangXian"
}, {
    "cName": "绵阳市",
        "code": "510700",
        "py": "Mianyang Shi",
        "jp": "mys",
        "qp": "MianyangShi"
}, {
    "cName": "涪城区",
        "code": "510703",
        "py": "Fucheng Qu",
        "jp": "fcq",
        "qp": "FuchengQu"
}, {
    "cName": "游仙区",
        "code": "510704",
        "py": "Youxian Qu",
        "jp": "yxq",
        "qp": "YouxianQu"
}, {
    "cName": "安州区",
        "code": "510705",
        "py": "Anzhou Qu",
        "jp": "azq",
        "qp": "AnzhouQu"
}, {
    "cName": "江油市",
        "code": "510781",
        "py": "Jiangyou Shi",
        "jp": "jys",
        "qp": "JiangyouShi"
}, {
    "cName": "三台县",
        "code": "510722",
        "py": "Santai Xian",
        "jp": "stx",
        "qp": "SantaiXian"
}, {
    "cName": "盐亭县",
        "code": "510723",
        "py": "Yanting Xian",
        "jp": "ytx",
        "qp": "YantingXian"
}, {
    "cName": "梓潼县",
        "code": "510725",
        "py": "Zitong Xian",
        "jp": "ztx",
        "qp": "ZitongXian"
}, {
    "cName": "平武县",
        "code": "510727",
        "py": "Pingwu Xian",
        "jp": "pwx",
        "qp": "PingwuXian"
}, {
    "cName": "北川羌族自治县",
        "code": "510726",
        "py": "Beichuan Qiangzu Zizhixian",
        "jp": "bcqzzzx",
        "qp": "BeichuanQiangzuZizhixian"
}, {
    "cName": "广元市",
        "code": "510800",
        "py": "Guangyuan Shi",
        "jp": "gys",
        "qp": "GuangyuanShi"
}, {
    "cName": "利州区",
        "code": "510802",
        "py": "Lizhou Qu",
        "jp": "lzq",
        "qp": "LizhouQu"
}, {
    "cName": "昭化区",
        "code": "510811",
        "py": "Zhaohua Qu",
        "jp": "zhq",
        "qp": "ZhaohuaQu"
}, {
    "cName": "朝天区",
        "code": "510812",
        "py": "Chaotian Qu",
        "jp": "ctq",
        "qp": "ChaotianQu"
}, {
    "cName": "旺苍县",
        "code": "510821",
        "py": "Wangcang Xian",
        "jp": "wcx",
        "qp": "WangcangXian"
}, {
    "cName": "青川县",
        "code": "510822",
        "py": "Qingchuan Xian",
        "jp": "qcx",
        "qp": "QingchuanXian"
}, {
    "cName": "剑阁县",
        "code": "510823",
        "py": "Jiange Xian",
        "jp": "jgx",
        "qp": "JiangeXian"
}, {
    "cName": "苍溪县",
        "code": "510824",
        "py": "Cangxi Xian",
        "jp": "cxx",
        "qp": "CangxiXian"
}, {
    "cName": "遂宁市",
        "code": "510900",
        "py": "Suining Shi",
        "jp": "sns",
        "qp": "SuiningShi"
}, {
    "cName": "船山区",
        "code": "510903",
        "py": "Chuanshan Qu",
        "jp": "csq",
        "qp": "ChuanshanQu"
}, {
    "cName": "安居区",
        "code": "510904",
        "py": "Anju Qu",
        "jp": "ajq",
        "qp": "AnjuQu"
}, {
    "cName": "蓬溪县",
        "code": "510921",
        "py": "Pengxi Xian",
        "jp": "pxx",
        "qp": "PengxiXian"
}, {
    "cName": "射洪县",
        "code": "510922",
        "py": "Shehong Xian",
        "jp": "shx",
        "qp": "ShehongXian"
}, {
    "cName": "大英县",
        "code": "510923",
        "py": "Daying Xian",
        "jp": "dyx",
        "qp": "DayingXian"
}, {
    "cName": "内江市",
        "code": "511000",
        "py": "Neijiang Shi",
        "jp": "njs",
        "qp": "NeijiangShi"
}, {
    "cName": "市中区",
        "code": "511002",
        "py": "Shizhong Qu",
        "jp": "szq",
        "qp": "ShizhongQu"
}, {
    "cName": "东兴区",
        "code": "511011",
        "py": "Dongxing Qu",
        "jp": "dxq",
        "qp": "DongxingQu"
}, {
    "cName": "隆昌市",
        "code": "511083",
        "py": "Longchang Shi",
        "jp": "lcs",
        "qp": "LongchangShi"
}, {
    "cName": "威远县",
        "code": "511024",
        "py": "Weiyuan Xian",
        "jp": "wyx",
        "qp": "WeiyuanXian"
}, {
    "cName": "资中县",
        "code": "511025",
        "py": "Zizhong Xian",
        "jp": "zzx",
        "qp": "ZizhongXian"
}, {
    "cName": "乐山市",
        "code": "511100",
        "py": "Leshan Shi",
        "jp": "lss",
        "qp": "LeshanShi"
}, {
    "cName": "市中区",
        "code": "511102",
        "py": "Shizhong Qu",
        "jp": "szq",
        "qp": "ShizhongQu"
}, {
    "cName": "沙湾区",
        "code": "511111",
        "py": "Shawan Qu",
        "jp": "swq",
        "qp": "ShawanQu"
}, {
    "cName": "五通桥区",
        "code": "511112",
        "py": "Wutongqiao Qu",
        "jp": "wtqq",
        "qp": "WutongqiaoQu"
}, {
    "cName": "金口河区",
        "code": "511113",
        "py": "Jinkouhe Qu",
        "jp": "jkhq",
        "qp": "JinkouheQu"
}, {
    "cName": "峨眉山市",
        "code": "511181",
        "py": "Emeishan Shi",
        "jp": "emss",
        "qp": "EmeishanShi"
}, {
    "cName": "犍为县",
        "code": "511123",
        "py": "Qianwei Xian",
        "jp": "qwx",
        "qp": "QianweiXian"
}, {
    "cName": "井研县",
        "code": "511124",
        "py": "Jingyan Xian",
        "jp": "jyx",
        "qp": "JingyanXian"
}, {
    "cName": "夹江县",
        "code": "511126",
        "py": "Jiajiang Xian",
        "jp": "jjx",
        "qp": "JiajiangXian"
}, {
    "cName": "沐川县",
        "code": "511129",
        "py": "Muchuan Xian",
        "jp": "mcx",
        "qp": "MuchuanXian"
}, {
    "cName": "峨边彝族自治县",
        "code": "511132",
        "py": "Ebian Yizu Zizhixian",
        "jp": "ebyzzzx",
        "qp": "EbianYizuZizhixian"
}, {
    "cName": "马边彝族自治县",
        "code": "511133",
        "py": "Mabian Yizu Zizhixian",
        "jp": "mbyzzzx",
        "qp": "MabianYizuZizhixian"
}, {
    "cName": "南充市",
        "code": "511300",
        "py": "Nanchong Shi",
        "jp": "ncs",
        "qp": "NanchongShi"
}, {
    "cName": "顺庆区",
        "code": "511302",
        "py": "Shunqing Qu",
        "jp": "sqq",
        "qp": "ShunqingQu"
}, {
    "cName": "高坪区",
        "code": "511303",
        "py": "Gaoping Qu",
        "jp": "gpq",
        "qp": "GaopingQu"
}, {
    "cName": "嘉陵区",
        "code": "511304",
        "py": "Jialing Qu",
        "jp": "jlq",
        "qp": "JialingQu"
}, {
    "cName": "阆中市",
        "code": "511381",
        "py": "Langzhong Shi",
        "jp": "lzs",
        "qp": "LangzhongShi"
}, {
    "cName": "南部县",
        "code": "511321",
        "py": "Nanbu Xian",
        "jp": "nbx",
        "qp": "NanbuXian"
}, {
    "cName": "营山县",
        "code": "511322",
        "py": "Yingshan Xian",
        "jp": "ysx",
        "qp": "YingshanXian"
}, {
    "cName": "蓬安县",
        "code": "511323",
        "py": "Peng&#39;an Xian",
        "jp": "pax",
        "qp": "PenganXian"
}, {
    "cName": "仪陇县",
        "code": "511324",
        "py": "Yilong Xian",
        "jp": "ylx",
        "qp": "YilongXian"
}, {
    "cName": "西充县",
        "code": "511325",
        "py": "Xichong Xian",
        "jp": "xcx",
        "qp": "XichongXian"
}, {
    "cName": "眉山市",
        "code": "511400",
        "py": "Meishan Shi",
        "jp": "mss",
        "qp": "MeishanShi"
}, {
    "cName": "东坡区",
        "code": "511402",
        "py": "Dongpo Qu",
        "jp": "dpq",
        "qp": "DongpoQu"
}, {
    "cName": "彭山区",
        "code": "511403",
        "py": "Pengshan Qu",
        "jp": "psq",
        "qp": "PengshanQu"
}, {
    "cName": "仁寿县",
        "code": "511421",
        "py": "Renshou Xian",
        "jp": "rsx",
        "qp": "RenshouXian"
}, {
    "cName": "洪雅县",
        "code": "511423",
        "py": "Hongya Xian",
        "jp": "hyx",
        "qp": "HongyaXian"
}, {
    "cName": "丹棱县",
        "code": "511424",
        "py": "Danling Xian",
        "jp": "dlx",
        "qp": "DanlingXian"
}, {
    "cName": "青神县",
        "code": "511425",
        "py": "Qingshen Xian",
        "jp": "qsx",
        "qp": "QingshenXian"
}, {
    "cName": "宜宾市",
        "code": "511500",
        "py": "Yibin Shi",
        "jp": "ybs",
        "qp": "YibinShi"
}, {
    "cName": "翠屏区",
        "code": "511502",
        "py": "Cuiping Qu",
        "jp": "cpq",
        "qp": "CuipingQu"
}, {
    "cName": "南溪区",
        "code": "511503",
        "py": "Nanxi Qu",
        "jp": "nxq",
        "qp": "NanxiQu"
}, {
    "cName": "宜宾县",
        "code": "511521",
        "py": "Yibin Xian",
        "jp": "ybx",
        "qp": "YibinXian"
}, {
    "cName": "江安县",
        "code": "511523",
        "py": "Jiang&#39;an Xian",
        "jp": "jax",
        "qp": "JianganXian"
}, {
    "cName": "长宁县",
        "code": "511524",
        "py": "Changning Xian",
        "jp": "cnx",
        "qp": "ChangningXian"
}, {
    "cName": "高县",
        "code": "511525",
        "py": "Gao Xian",
        "jp": "gx",
        "qp": "GaoXian"
}, {
    "cName": "珙县",
        "code": "511526",
        "py": "Gong Xian",
        "jp": "gx",
        "qp": "GongXian"
}, {
    "cName": "筠连县",
        "code": "511527",
        "py": "Junlian Xian",
        "jp": "jlx",
        "qp": "JunlianXian"
}, {
    "cName": "兴文县",
        "code": "511528",
        "py": "Xingwen Xian",
        "jp": "xwx",
        "qp": "XingwenXian"
}, {
    "cName": "屏山县",
        "code": "511529",
        "py": "Pingshan Xian",
        "jp": "psx",
        "qp": "PingshanXian"
}, {
    "cName": "广安市",
        "code": "511600",
        "py": "Guang&#39;an Shi",
        "jp": "gas",
        "qp": "GuanganShi"
}, {
    "cName": "广安区",
        "code": "511602",
        "py": "Guang&#39;an Qu",
        "jp": "gaq",
        "qp": "GuanganQu"
}, {
    "cName": "前锋区",
        "code": "511603",
        "py": "Qianfeng Qu",
        "jp": "qfq",
        "qp": "QianfengQu"
}, {
    "cName": "华蓥市",
        "code": "511681",
        "py": "Huaying Shi",
        "jp": "hys",
        "qp": "HuayingShi"
}, {
    "cName": "岳池县",
        "code": "511621",
        "py": "Yuechi Xian",
        "jp": "ycx",
        "qp": "YuechiXian"
}, {
    "cName": "武胜县",
        "code": "511622",
        "py": "Wusheng Xian",
        "jp": "wsx",
        "qp": "WushengXian"
}, {
    "cName": "邻水县",
        "code": "511623",
        "py": "Linshui Xian",
        "jp": "lsx",
        "qp": "LinshuiXian"
}, {
    "cName": "达州市",
        "code": "511700",
        "py": "Dazhou Shi",
        "jp": "dzs",
        "qp": "DazhouShi"
}, {
    "cName": "通川区",
        "code": "511702",
        "py": "Tongchuan Qu",
        "jp": "tcq",
        "qp": "TongchuanQu"
}, {
    "cName": "达川区",
        "code": "511703",
        "py": "Dachuan Qu",
        "jp": "dcq",
        "qp": "DachuanQu"
}, {
    "cName": "万源市",
        "code": "511781",
        "py": "Wanyuan Shi",
        "jp": "wys",
        "qp": "WanyuanShi"
}, {
    "cName": "宣汉县",
        "code": "511722",
        "py": "Xuanhan Xian",
        "jp": "xhx",
        "qp": "XuanhanXian"
}, {
    "cName": "开江县",
        "code": "511723",
        "py": "Kaijiang Xian",
        "jp": "kjx",
        "qp": "KaijiangXian"
}, {
    "cName": "大竹县",
        "code": "511724",
        "py": "Dazhu Xian",
        "jp": "dzx",
        "qp": "DazhuXian"
}, {
    "cName": "渠县",
        "code": "511725",
        "py": "Qu Xian",
        "jp": "qx",
        "qp": "QuXian"
}, {
    "cName": "雅安市",
        "code": "511800",
        "py": "Ya&#39;an Shi",
        "jp": "yas",
        "qp": "YaanShi"
}, {
    "cName": "雨城区",
        "code": "511802",
        "py": "Yucheng Qu",
        "jp": "ycq",
        "qp": "YuchengQu"
}, {
    "cName": "名山区",
        "code": "511803",
        "py": "Mingshan Qu",
        "jp": "msq",
        "qp": "MingshanQu"
}, {
    "cName": "荥经县",
        "code": "511822",
        "py": "Yingjing Xian",
        "jp": "yjx",
        "qp": "YingjingXian"
}, {
    "cName": "汉源县",
        "code": "511823",
        "py": "Hanyuan Xian",
        "jp": "hyx",
        "qp": "HanyuanXian"
}, {
    "cName": "石棉县",
        "code": "511824",
        "py": "Shimian Xian",
        "jp": "smx",
        "qp": "ShimianXian"
}, {
    "cName": "天全县",
        "code": "511825",
        "py": "Tianquan Xian",
        "jp": "tqx",
        "qp": "TianquanXian"
}, {
    "cName": "芦山县",
        "code": "511826",
        "py": "Lushan Xian",
        "jp": "lsx",
        "qp": "LushanXian"
}, {
    "cName": "宝兴县",
        "code": "511827",
        "py": "Baoxing Xian",
        "jp": "bxx",
        "qp": "BaoxingXian"
}, {
    "cName": "巴中市",
        "code": "511900",
        "py": "Bazhong Shi",
        "jp": "bzs",
        "qp": "BazhongShi"
}, {
    "cName": "巴州区",
        "code": "511902",
        "py": "Bazhou Qu",
        "jp": "bzq",
        "qp": "BazhouQu"
}, {
    "cName": "恩阳区",
        "code": "511903",
        "py": "Enyang Qu",
        "jp": "eyq",
        "qp": "EnyangQu"
}, {
    "cName": "通江县",
        "code": "511921",
        "py": "Tongjiang Xian",
        "jp": "tjx",
        "qp": "TongjiangXian"
}, {
    "cName": "南江县",
        "code": "511922",
        "py": "Nanjiang Xian",
        "jp": "njx",
        "qp": "NanjiangXian"
}, {
    "cName": "平昌县",
        "code": "511923",
        "py": "Pingchang Xian",
        "jp": "pcx",
        "qp": "PingchangXian"
}, {
    "cName": "资阳市",
        "code": "512000",
        "py": "Ziyang Shi",
        "jp": "zys",
        "qp": "ZiyangShi"
}, {
    "cName": "雁江区",
        "code": "512002",
        "py": "Yanjiang Qu",
        "jp": "yjq",
        "qp": "YanjiangQu"
}, {
    "cName": "乐至县",
        "code": "512022",
        "py": "Lezhi Xian",
        "jp": "lzx",
        "qp": "LezhiXian"
}, {
    "cName": "安岳县",
        "code": "512021",
        "py": "Anyue Xian",
        "jp": "ayx",
        "qp": "AnyueXian"
}, {
    "cName": "阿坝藏族羌族自治州",
        "code": "513200",
        "py": "Aba Zangzu Qiangzu Zizhizhou",
        "jp": "abzzqzzzz",
        "qp": "AbaZangzuQiangzuZizhizhou"
}, {
    "cName": "马尔康市",
        "code": "513201",
        "py": "Maerkang Shi",
        "jp": "meks",
        "qp": "MaerkangShi"
}, {
    "cName": "汶川县",
        "code": "513221",
        "py": "Wenchuan Xian",
        "jp": "wcx",
        "qp": "WenchuanXian"
}, {
    "cName": "理县",
        "code": "513222",
        "py": "Li Xian",
        "jp": "lx",
        "qp": "LiXian"
}, {
    "cName": "茂县",
        "code": "513223",
        "py": "Mao Xian",
        "jp": "mx",
        "qp": "MaoXian"
}, {
    "cName": "松潘县",
        "code": "513224",
        "py": "Songpan Xian",
        "jp": "spx",
        "qp": "SongpanXian"
}, {
    "cName": "九寨沟县",
        "code": "513225",
        "py": "Jiuzhaigou Xian",
        "jp": "jzgx",
        "qp": "JiuzhaigouXian"
}, {
    "cName": "金川县",
        "code": "513226",
        "py": "Jinchuan Xian",
        "jp": "jcx",
        "qp": "JinchuanXian"
}, {
    "cName": "小金县",
        "code": "513227",
        "py": "Xiaojin Xian",
        "jp": "xjx",
        "qp": "XiaojinXian"
}, {
    "cName": "黑水县",
        "code": "513228",
        "py": "Heishui Xian",
        "jp": "hsx",
        "qp": "HeishuiXian"
}, {
    "cName": "壤塘县",
        "code": "513230",
        "py": "Rangtang Xian",
        "jp": "rtx",
        "qp": "RangtangXian"
}, {
    "cName": "阿坝县",
        "code": "513231",
        "py": "Aba Xian",
        "jp": "abx",
        "qp": "AbaXian"
}, {
    "cName": "若尔盖县",
        "code": "513232",
        "py": "Ruo&#39;ergai Xian",
        "jp": "regx",
        "qp": "RuoergaiXian"
}, {
    "cName": "红原县",
        "code": "513233",
        "py": "Hongyuan Xian",
        "jp": "hyx",
        "qp": "HongyuanXian"
}, {
    "cName": "甘孜藏族自治州",
        "code": "513300",
        "py": "Ganzi Zangzu Zizhizhou",
        "jp": "gzzzzzz",
        "qp": "GanziZangzuZizhizhou"
}, {
    "cName": "康定市",
        "code": "513301",
        "py": "Kangding Shi",
        "jp": "kds",
        "qp": "KangdingShi"
}, {
    "cName": "泸定县",
        "code": "513322",
        "py": "Luding Xian",
        "jp": "ldx",
        "qp": "LudingXian"
}, {
    "cName": "丹巴县",
        "code": "513323",
        "py": "Danba Xian",
        "jp": "dbx",
        "qp": "DanbaXian"
}, {
    "cName": "九龙县",
        "code": "513324",
        "py": "Jiulong Xian",
        "jp": "jlx",
        "qp": "JiulongXian"
}, {
    "cName": "雅江县",
        "code": "513325",
        "py": "Yajiang Xian",
        "jp": "yjx",
        "qp": "YajiangXian"
}, {
    "cName": "道孚县",
        "code": "513326",
        "py": "Daofu Xian",
        "jp": "dfx",
        "qp": "DaofuXian"
}, {
    "cName": "炉霍县",
        "code": "513327",
        "py": "Luhuo Xian",
        "jp": "lhx",
        "qp": "LuhuoXian"
}, {
    "cName": "甘孜县",
        "code": "513328",
        "py": "Ganzi Xian",
        "jp": "gzx",
        "qp": "GanziXian"
}, {
    "cName": "新龙县",
        "code": "513329",
        "py": "Xinlong Xian",
        "jp": "xlx",
        "qp": "XinlongXian"
}, {
    "cName": "德格县",
        "code": "513330",
        "py": "Dege Xian",
        "jp": "dgx",
        "qp": "DegeXian"
}, {
    "cName": "白玉县",
        "code": "513331",
        "py": "Baiyu Xian",
        "jp": "byx",
        "qp": "BaiyuXian"
}, {
    "cName": "石渠县",
        "code": "513332",
        "py": "Shiqu Xian",
        "jp": "sqx",
        "qp": "ShiquXian"
}, {
    "cName": "色达县",
        "code": "513333",
        "py": "Seda Xian",
        "jp": "sdx",
        "qp": "SedaXian"
}, {
    "cName": "理塘县",
        "code": "513334",
        "py": "Litang Xian",
        "jp": "ltx",
        "qp": "LitangXian"
}, {
    "cName": "巴塘县",
        "code": "513335",
        "py": "Batang Xian",
        "jp": "btx",
        "qp": "BatangXian"
}, {
    "cName": "乡城县",
        "code": "513336",
        "py": "Xiangcheng Xian",
        "jp": "xcx",
        "qp": "XiangchengXian"
}, {
    "cName": "稻城县",
        "code": "513337",
        "py": "Daocheng Xian",
        "jp": "dcx",
        "qp": "DaochengXian"
}, {
    "cName": "得荣县",
        "code": "513338",
        "py": "Derong Xian",
        "jp": "drx",
        "qp": "DerongXian"
}, {
    "cName": "凉山彝族自治州",
        "code": "513400",
        "py": "Liangshan Yizu Zizhizhou",
        "jp": "lsyzzzz",
        "qp": "LiangshanYizuZizhizhou"
}, {
    "cName": "西昌市",
        "code": "513401",
        "py": "Xichang Shi",
        "jp": "xcs",
        "qp": "XichangShi"
}, {
    "cName": "盐源县",
        "code": "513423",
        "py": "Yanyuan Xian",
        "jp": "yyx",
        "qp": "YanyuanXian"
}, {
    "cName": "德昌县",
        "code": "513424",
        "py": "Dechang Xian",
        "jp": "dcx",
        "qp": "DechangXian"
}, {
    "cName": "会理县",
        "code": "513425",
        "py": "Huili Xian",
        "jp": "hlx",
        "qp": "HuiliXian"
}, {
    "cName": "会东县",
        "code": "513426",
        "py": "Huidong Xian",
        "jp": "hdx",
        "qp": "HuidongXian"
}, {
    "cName": "宁南县",
        "code": "513427",
        "py": "Ningnan Xian",
        "jp": "nnx",
        "qp": "NingnanXian"
}, {
    "cName": "普格县",
        "code": "513428",
        "py": "Puge Xian",
        "jp": "pgx",
        "qp": "PugeXian"
}, {
    "cName": "布拖县",
        "code": "513429",
        "py": "Butuo Xian",
        "jp": "btx",
        "qp": "ButuoXian"
}, {
    "cName": "金阳县",
        "code": "513430",
        "py": "Jinyang Xian",
        "jp": "jyx",
        "qp": "JinyangXian"
}, {
    "cName": "昭觉县",
        "code": "513431",
        "py": "Zhaojue Xian",
        "jp": "zjx",
        "qp": "ZhaojueXian"
}, {
    "cName": "喜德县",
        "code": "513432",
        "py": "Xide Xian",
        "jp": "xdx",
        "qp": "XideXian"
}, {
    "cName": "冕宁县",
        "code": "513433",
        "py": "Mianning Xian",
        "jp": "mnx",
        "qp": "MianningXian"
}, {
    "cName": "越西县",
        "code": "513434",
        "py": "Yuexi Xian",
        "jp": "yxx",
        "qp": "YuexiXian"
}, {
    "cName": "甘洛县",
        "code": "513435",
        "py": "Ganluo Xian",
        "jp": "glx",
        "qp": "GanluoXian"
}, {
    "cName": "美姑县",
        "code": "513436",
        "py": "Meigu Xian",
        "jp": "mgx",
        "qp": "MeiguXian"
}, {
    "cName": "雷波县",
        "code": "513437",
        "py": "Leibo Xian",
        "jp": "lbx",
        "qp": "LeiboXian"
}, {
    "cName": "木里藏族自治县",
        "code": "513422",
        "py": "Muli Zangzu Zizhixian",
        "jp": "mlzzzzx",
        "qp": "MuliZangzuZizhixian"
}, {
    "cName": "贵州省",
        "code": "520000",
        "py": "Guizhou Sheng",
        "jp": "gzs",
        "qp": "GuizhouSheng"
}, {
    "cName": "贵阳市",
        "code": "520100",
        "py": "Guiyang Shi",
        "jp": "gys",
        "qp": "GuiyangShi"
}, {
    "cName": "观山湖区",
        "code": "520115",
        "py": "Guanshanhu Qu",
        "jp": "gshq",
        "qp": "GuanshanhuQu"
}, {
    "cName": "南明区",
        "code": "520102",
        "py": "Nanming Qu",
        "jp": "nmq",
        "qp": "NanmingQu"
}, {
    "cName": "云岩区",
        "code": "520103",
        "py": "Yunyan Qu",
        "jp": "yyq",
        "qp": "YunyanQu"
}, {
    "cName": "花溪区",
        "code": "520111",
        "py": "Huaxi Qu",
        "jp": "hxq",
        "qp": "HuaxiQu"
}, {
    "cName": "乌当区",
        "code": "520112",
        "py": "Wudang Qu",
        "jp": "wdq",
        "qp": "WudangQu"
}, {
    "cName": "白云区",
        "code": "520113",
        "py": "Baiyun Qu",
        "jp": "byq",
        "qp": "BaiyunQu"
}, {
    "cName": "清镇市",
        "code": "520181",
        "py": "Qingzhen Shi",
        "jp": "qzs",
        "qp": "QingzhenShi"
}, {
    "cName": "开阳县",
        "code": "520121",
        "py": "Kaiyang Xian",
        "jp": "kyx",
        "qp": "KaiyangXian"
}, {
    "cName": "息烽县",
        "code": "520122",
        "py": "Xifeng Xian",
        "jp": "xfx",
        "qp": "XifengXian"
}, {
    "cName": "修文县",
        "code": "520123",
        "py": "Xiuwen Xian",
        "jp": "xwx",
        "qp": "XiuwenXian"
}, {
    "cName": "六盘水市",
        "code": "520200",
        "py": "Liupanshui Shi",
        "jp": "lpss",
        "qp": "LiupanshuiShi"
}, {
    "cName": "钟山区",
        "code": "520201",
        "py": "Zhongshan Qu",
        "jp": "zsq",
        "qp": "ZhongshanQu"
}, {
    "cName": "盘州市",
        "code": "520281",
        "py": "Panzhou Shi",
        "jp": "pzs",
        "qp": "PanzhouShi"
}, {
    "cName": "水城县",
        "code": "520221",
        "py": "Shuicheng Xian",
        "jp": "scx",
        "qp": "ShuichengXian"
}, {
    "cName": "六枝特区",
        "code": "520203",
        "py": "Liuzhi Tequ",
        "jp": "lztq",
        "qp": "LiuzhiTequ"
}, {
    "cName": "遵义市",
        "code": "520300",
        "py": "Zunyi Shi",
        "jp": "zys",
        "qp": "ZunyiShi"
}, {
    "cName": "汇川区",
        "code": "520303",
        "py": "Huichuan Qu",
        "jp": "hcq",
        "qp": "HuichuanQu"
}, {
    "cName": "红花岗区",
        "code": "520302",
        "py": "Honghuagang Qu",
        "jp": "hhgq",
        "qp": "HonghuagangQu"
}, {
    "cName": "播州区",
        "code": "520304",
        "py": "Bozhou Qu",
        "jp": "bzq",
        "qp": "BozhouQu"
}, {
    "cName": "赤水市",
        "code": "520381",
        "py": "Chishui Shi",
        "jp": "css",
        "qp": "ChishuiShi"
}, {
    "cName": "仁怀市",
        "code": "520382",
        "py": "Renhuai Shi",
        "jp": "rhs",
        "qp": "RenhuaiShi"
}, {
    "cName": "桐梓县",
        "code": "520322",
        "py": "Tongzhi Xian",
        "jp": "tzx",
        "qp": "TongzhiXian"
}, {
    "cName": "绥阳县",
        "code": "520323",
        "py": "Suiyang Xian",
        "jp": "syx",
        "qp": "SuiyangXian"
}, {
    "cName": "正安县",
        "code": "520324",
        "py": "Zheng&#39;an Xian",
        "jp": "zax",
        "qp": "ZhenganXian"
}, {
    "cName": "凤冈县",
        "code": "520327",
        "py": "Fenggang Xian",
        "jp": "fgx",
        "qp": "FenggangXian"
}, {
    "cName": "湄潭县",
        "code": "520328",
        "py": "Meitan Xian",
        "jp": "mtx",
        "qp": "MeitanXian"
}, {
    "cName": "余庆县",
        "code": "520329",
        "py": "Yuqing Xian",
        "jp": "yqx",
        "qp": "YuqingXian"
}, {
    "cName": "习水县",
        "code": "520330",
        "py": "Xishui Xian",
        "jp": "xsx",
        "qp": "XishuiXian"
}, {
    "cName": "道真仡佬族苗族自治县",
        "code": "520325",
        "py": "Daozhen Gelaozu Miaozu Zizhixian",
        "jp": "dzglzmzzzx",
        "qp": "DaozhenGelaozuMiaozuZizhixian"
}, {
    "cName": "务川仡佬族苗族自治县",
        "code": "520326",
        "py": "Wuchuan Gelaozu Miaozu Zizhixian",
        "jp": "wcglzmzzzx",
        "qp": "WuchuanGelaozuMiaozuZizhixian"
}, {
    "cName": "安顺市",
        "code": "520400",
        "py": "Anshun Shi",
        "jp": "ass",
        "qp": "AnshunShi"
}, {
    "cName": "西秀区",
        "code": "520402",
        "py": "Xixiu Qu",
        "jp": "xxq",
        "qp": "XixiuQu"
}, {
    "cName": "平坝区",
        "code": "520403",
        "py": "Pingba Qu",
        "jp": "pbq",
        "qp": "PingbaQu"
}, {
    "cName": "普定县",
        "code": "520422",
        "py": "Puding Xian",
        "jp": "pdx",
        "qp": "PudingXian"
}, {
    "cName": "镇宁布依族苗族自治县",
        "code": "520423",
        "py": "Zhenning Buyizu Miaozu Zizhixian",
        "jp": "znbyzmzzzx",
        "qp": "ZhenningBuyizuMiaozuZizhixian"
}, {
    "cName": "关岭布依族苗族自治县",
        "code": "520424",
        "py": "Guanling Buyizu Miaozu Zizhixian",
        "jp": "glbyzmzzzx",
        "qp": "GuanlingBuyizuMiaozuZizhixian"
}, {
    "cName": "紫云苗族布依族自治县",
        "code": "520425",
        "py": "Ziyun Miaozu Buyizu Zizhixian",
        "jp": "zymzbyzzzx",
        "qp": "ZiyunMiaozuBuyizuZizhixian"
}, {
    "cName": "毕节市",
        "code": "520500",
        "py": "Bijie Shi",
        "jp": "bjs",
        "qp": "BijieShi"
}, {
    "cName": "七星关区",
        "code": "520502",
        "py": "Qixingguan Qu",
        "jp": "qxgq",
        "qp": "QixingguanQu"
}, {
    "cName": "大方县",
        "code": "520521",
        "py": "Dafang Xian",
        "jp": "dfx",
        "qp": "DafangXian"
}, {
    "cName": "黔西县",
        "code": "520522",
        "py": "Qianxi Xian",
        "jp": "qxx",
        "qp": "QianxiXian"
}, {
    "cName": "金沙县",
        "code": "520523",
        "py": "Jinsha Xian",
        "jp": "jsx",
        "qp": "JinshaXian"
}, {
    "cName": "织金县",
        "code": "520524",
        "py": "Zhijin Xian",
        "jp": "zjx",
        "qp": "ZhijinXian"
}, {
    "cName": "纳雍县",
        "code": "520525",
        "py": "Nayong Xian",
        "jp": "nyx",
        "qp": "NayongXian"
}, {
    "cName": "赫章县",
        "code": "520527",
        "py": "Hezhang Xian",
        "jp": "hzx",
        "qp": "HezhangXian"
}, {
    "cName": "威宁彝族回族苗族自治县",
        "code": "520526",
        "py": "Weining Yizu Huizu Miaozu Zizhixian",
        "jp": "wnyzhzmzzzx",
        "qp": "WeiningYizuHuizuMiaozuZizhixian"
}, {
    "cName": "铜仁市",
        "code": "520600",
        "py": "Tongren Shi",
        "jp": "trs",
        "qp": "TongrenShi"
}, {
    "cName": "碧江区",
        "code": "520602",
        "py": "Bijiang Qu",
        "jp": "bjq",
        "qp": "BijiangQu"
}, {
    "cName": "万山区",
        "code": "520603",
        "py": "Wanshan Qu",
        "jp": "wsq",
        "qp": "WanshanQu"
}, {
    "cName": "江口县",
        "code": "520621",
        "py": "Jiangkou Xian",
        "jp": "jkx",
        "qp": "JiangkouXian"
}, {
    "cName": "石阡县",
        "code": "520623",
        "py": "Shiqian Xian",
        "jp": "sqx",
        "qp": "ShiqianXian"
}, {
    "cName": "思南县",
        "code": "520624",
        "py": "Sinan Xian",
        "jp": "snx",
        "qp": "SinanXian"
}, {
    "cName": "德江县",
        "code": "520626",
        "py": "Dejiang Xian",
        "jp": "djx",
        "qp": "DejiangXian"
}, {
    "cName": "玉屏侗族自治县",
        "code": "520622",
        "py": "Yuping Dongzu Zizhixian",
        "jp": "ypdzzzx",
        "qp": "YupingDongzuZizhixian"
}, {
    "cName": "印江土家族苗族自治县",
        "code": "520625",
        "py": "Yinjiang Tujiazu Miaozu Zizhixian",
        "jp": "yjtjzmzzzx",
        "qp": "YinjiangTujiazuMiaozuZizhixian"
}, {
    "cName": "沿河土家族自治县",
        "code": "520627",
        "py": "Yanhe Tujiazu Zizhixian",
        "jp": "yhtjzzzx",
        "qp": "YanheTujiazuZizhixian"
}, {
    "cName": "松桃苗族自治县",
        "code": "520628",
        "py": "Songtao Miaozu Zizhixian",
        "jp": "stmzzzx",
        "qp": "SongtaoMiaozuZizhixian"
}, {
    "cName": "黔西南布依族苗族自治州",
        "code": "522300",
        "py": "Qianxinan Buyizu Miaozu Zizhizhou",
        "jp": "qxnbyzmzzzz",
        "qp": "QianxinanBuyizuMiaozuZizhizhou"
}, {
    "cName": "兴义市",
        "code": "522301",
        "py": "Xingyi Shi",
        "jp": "xys",
        "qp": "XingyiShi"
}, {
    "cName": "兴仁县",
        "code": "522322",
        "py": "Xingren Xian",
        "jp": "xrx",
        "qp": "XingrenXian"
}, {
    "cName": "普安县",
        "code": "522323",
        "py": "Pu&#39;an Xian",
        "jp": "pax",
        "qp": "PuanXian"
}, {
    "cName": "晴隆县",
        "code": "522324",
        "py": "Qinglong Xian",
        "jp": "qlx",
        "qp": "QinglongXian"
}, {
    "cName": "贞丰县",
        "code": "522325",
        "py": "Zhenfeng Xian",
        "jp": "zfx",
        "qp": "ZhenfengXian"
}, {
    "cName": "望谟县",
        "code": "522326",
        "py": "Wangmo Xian",
        "jp": "wmx",
        "qp": "WangmoXian"
}, {
    "cName": "册亨县",
        "code": "522327",
        "py": "Ceheng Xian",
        "jp": "chx",
        "qp": "CehengXian"
}, {
    "cName": "安龙县",
        "code": "522328",
        "py": "Anlong Xian",
        "jp": "alx",
        "qp": "AnlongXian"
}, {
    "cName": "黔东南苗族侗族自治州",
        "code": "522600",
        "py": "Qiandongnan Miaozu Dongzu Zizhizhou",
        "jp": "qdnmzdzzzz",
        "qp": "QiandongnanMiaozuDongzuZizhizhou"
}, {
    "cName": "凯里市",
        "code": "522601",
        "py": "Kaili Shi",
        "jp": "kls",
        "qp": "KailiShi"
}, {
    "cName": "黄平县",
        "code": "522622",
        "py": "Huangping Xian",
        "jp": "hpx",
        "qp": "HuangpingXian"
}, {
    "cName": "施秉县",
        "code": "522623",
        "py": "Shibing Xian",
        "jp": "sbx",
        "qp": "ShibingXian"
}, {
    "cName": "三穗县",
        "code": "522624",
        "py": "Sansui Xian",
        "jp": "ssx",
        "qp": "SansuiXian"
}, {
    "cName": "镇远县",
        "code": "522625",
        "py": "Zhenyuan Xian",
        "jp": "zyx",
        "qp": "ZhenyuanXian"
}, {
    "cName": "岑巩县",
        "code": "522626",
        "py": "Cengong Xian",
        "jp": "cgx",
        "qp": "CengongXian"
}, {
    "cName": "天柱县",
        "code": "522627",
        "py": "Tianzhu Xian",
        "jp": "tzx",
        "qp": "TianzhuXian"
}, {
    "cName": "锦屏县",
        "code": "522628",
        "py": "Jinping Xian",
        "jp": "jpx",
        "qp": "JinpingXian"
}, {
    "cName": "剑河县",
        "code": "522629",
        "py": "Jianhe Xian",
        "jp": "jhx",
        "qp": "JianheXian"
}, {
    "cName": "台江县",
        "code": "522630",
        "py": "Taijiang Xian",
        "jp": "tjx",
        "qp": "TaijiangXian"
}, {
    "cName": "黎平县",
        "code": "522631",
        "py": "Liping Xian",
        "jp": "lpx",
        "qp": "LipingXian"
}, {
    "cName": "榕江县",
        "code": "522632",
        "py": "Rongjiang Xian",
        "jp": "rjx",
        "qp": "RongjiangXian"
}, {
    "cName": "从江县",
        "code": "522633",
        "py": "Congjiang Xian",
        "jp": "cjx",
        "qp": "CongjiangXian"
}, {
    "cName": "雷山县",
        "code": "522634",
        "py": "Leishan Xian",
        "jp": "lsx",
        "qp": "LeishanXian"
}, {
    "cName": "麻江县",
        "code": "522635",
        "py": "Majiang Xian",
        "jp": "mjx",
        "qp": "MajiangXian"
}, {
    "cName": "丹寨县",
        "code": "522636",
        "py": "Danzhai Xian",
        "jp": "dzx",
        "qp": "DanzhaiXian"
}, {
    "cName": "黔南布依族苗族自治州",
        "code": "522700",
        "py": "Qiannan Buyizu Miaozu Zizhizhou",
        "jp": "qnbyzmzzzz",
        "qp": "QiannanBuyizuMiaozuZizhizhou"
}, {
    "cName": "都匀市",
        "code": "522701",
        "py": "Duyun Shi",
        "jp": "dys",
        "qp": "DuyunShi"
}, {
    "cName": "福泉市",
        "code": "522702",
        "py": "Fuquan Shi",
        "jp": "fqs",
        "qp": "FuquanShi"
}, {
    "cName": "荔波县",
        "code": "522722",
        "py": "Libo Xian",
        "jp": "lbx",
        "qp": "LiboXian"
}, {
    "cName": "贵定县",
        "code": "522723",
        "py": "Guiding Xian",
        "jp": "gdx",
        "qp": "GuidingXian"
}, {
    "cName": "瓮安县",
        "code": "522725",
        "py": "Weng&#39;an Xian",
        "jp": "wax",
        "qp": "WenganXian"
}, {
    "cName": "独山县",
        "code": "522726",
        "py": "Dushan Xian",
        "jp": "dsx",
        "qp": "DushanXian"
}, {
    "cName": "平塘县",
        "code": "522727",
        "py": "Pingtang Xian",
        "jp": "ptx",
        "qp": "PingtangXian"
}, {
    "cName": "罗甸县",
        "code": "522728",
        "py": "Luodian Xian",
        "jp": "ldx",
        "qp": "LuodianXian"
}, {
    "cName": "长顺县",
        "code": "522729",
        "py": "Changshun Xian",
        "jp": "csx",
        "qp": "ChangshunXian"
}, {
    "cName": "龙里县",
        "code": "522730",
        "py": "Longli Xian",
        "jp": "llx",
        "qp": "LongliXian"
}, {
    "cName": "惠水县",
        "code": "522731",
        "py": "Huishui Xian",
        "jp": "hsx",
        "qp": "HuishuiXian"
}, {
    "cName": "三都水族自治县",
        "code": "522732",
        "py": "Sandu Shuizu Zizhixian",
        "jp": "sdszzzx",
        "qp": "SanduShuizuZizhixian"
}, {
    "cName": "云南省",
        "code": "530000",
        "py": "Yunnan Sheng",
        "jp": "yns",
        "qp": "YunnanSheng"
}, {
    "cName": "昆明市",
        "code": "530100",
        "py": "Kunming Shi",
        "jp": "kms",
        "qp": "KunmingShi"
}, {
    "cName": "呈贡区",
        "code": "530114",
        "py": "Chenggong Qu",
        "jp": "cgq",
        "qp": "ChenggongQu"
}, {
    "cName": "五华区",
        "code": "530102",
        "py": "Wuhua Qu",
        "jp": "whq",
        "qp": "WuhuaQu"
}, {
    "cName": "盘龙区",
        "code": "530103",
        "py": "Panlong Qu",
        "jp": "plq",
        "qp": "PanlongQu"
}, {
    "cName": "官渡区",
        "code": "530111",
        "py": "Guandu Qu",
        "jp": "gdq",
        "qp": "GuanduQu"
}, {
    "cName": "西山区",
        "code": "530112",
        "py": "Xishan Qu",
        "jp": "xsq",
        "qp": "XishanQu"
}, {
    "cName": "东川区",
        "code": "530113",
        "py": "Dongchuan Qu",
        "jp": "dcq",
        "qp": "DongchuanQu"
}, {
    "cName": "晋宁区",
        "code": "530115",
        "py": "Jinning Qu",
        "jp": "jnq",
        "qp": "JinningQu"
}, {
    "cName": "安宁市",
        "code": "530181",
        "py": "Anning Shi",
        "jp": "ans",
        "qp": "AnningShi"
}, {
    "cName": "富民县",
        "code": "530124",
        "py": "Fumin Xian",
        "jp": "fmx",
        "qp": "FuminXian"
}, {
    "cName": "宜良县",
        "code": "530125",
        "py": "Yiliang Xian",
        "jp": "ylx",
        "qp": "YiliangXian"
}, {
    "cName": "嵩明县",
        "code": "530127",
        "py": "Songming Xian",
        "jp": "smx",
        "qp": "SongmingXian"
}, {
    "cName": "石林彝族自治县",
        "code": "530126",
        "py": "Shilin Yizu Zizhixian",
        "jp": "slyzzzx",
        "qp": "ShilinYizuZizhixian"
}, {
    "cName": "禄劝彝族苗族自治县",
        "code": "530128",
        "py": "Luquan Yizu Miaozu Zizhixian",
        "jp": "lqyzmzzzx",
        "qp": "LuquanYizuMiaozuZizhixian"
}, {
    "cName": "寻甸回族彝族自治县",
        "code": "530129",
        "py": "Xundian Huizu Yizu Zizhixian",
        "jp": "xdhzyzzzx",
        "qp": "XundianHuizuYizuZizhixian"
}, {
    "cName": "曲靖市",
        "code": "530300",
        "py": "Qujing Shi",
        "jp": "qjs",
        "qp": "QujingShi"
}, {
    "cName": "麒麟区",
        "code": "530302",
        "py": "Qilin Qu",
        "jp": "qlq",
        "qp": "QilinQu"
}, {
    "cName": "沾益区",
        "code": "530303",
        "py": "Zhanyi Qu",
        "jp": "zyq",
        "qp": "ZhanyiQu"
}, {
    "cName": "宣威市",
        "code": "530381",
        "py": "Xuanwei Shi",
        "jp": "xws",
        "qp": "XuanweiShi"
}, {
    "cName": "马龙县",
        "code": "530321",
        "py": "Malong Xian",
        "jp": "mlx",
        "qp": "MalongXian"
}, {
    "cName": "陆良县",
        "code": "530322",
        "py": "Luliang Xian",
        "jp": "llx",
        "qp": "LuliangXian"
}, {
    "cName": "师宗县",
        "code": "530323",
        "py": "Shizong Xian",
        "jp": "szx",
        "qp": "ShizongXian"
}, {
    "cName": "罗平县",
        "code": "530324",
        "py": "Luoping Xian",
        "jp": "lpx",
        "qp": "LuopingXian"
}, {
    "cName": "富源县",
        "code": "530325",
        "py": "Fuyuan Xian",
        "jp": "fyx",
        "qp": "FuyuanXian"
}, {
    "cName": "会泽县",
        "code": "530326",
        "py": "Huize Xian",
        "jp": "hzx",
        "qp": "HuizeXian"
}, {
    "cName": "玉溪市",
        "code": "530400",
        "py": "Yuxi Shi",
        "jp": "yxs",
        "qp": "YuxiShi"
}, {
    "cName": "红塔区",
        "code": "530402",
        "py": "Hongta Qu",
        "jp": "htq",
        "qp": "HongtaQu"
}, {
    "cName": "江川区",
        "code": "530403",
        "py": "Jiangchuan Qu",
        "jp": "jcq",
        "qp": "JiangchuanQu"
}, {
    "cName": "澄江县",
        "code": "530422",
        "py": "Chengjiang Xian",
        "jp": "cjx",
        "qp": "ChengjiangXian"
}, {
    "cName": "通海县",
        "code": "530423",
        "py": "Tonghai Xian",
        "jp": "thx",
        "qp": "TonghaiXian"
}, {
    "cName": "华宁县",
        "code": "530424",
        "py": "Huaning Xian",
        "jp": "hnx",
        "qp": "HuaningXian"
}, {
    "cName": "易门县",
        "code": "530425",
        "py": "Yimen Xian",
        "jp": "ymx",
        "qp": "YimenXian"
}, {
    "cName": "峨山彝族自治县",
        "code": "530426",
        "py": "Eshan Yizu Zizhixian",
        "jp": "esyzzzx",
        "qp": "EshanYizuZizhixian"
}, {
    "cName": "新平彝族傣族自治县",
        "code": "530427",
        "py": "Xinping Yizu Daizu Zizhixian",
        "jp": "xpyzdzzzx",
        "qp": "XinpingYizuDaizuZizhixian"
}, {
    "cName": "元江哈尼族彝族傣族自治县",
        "code": "530428",
        "py": "Yuanjiang Hanizu Yizu Daizu Zizhixian",
        "jp": "yjhnzyzdzzzx",
        "qp": "YuanjiangHanizuYizuDaizuZizhixian"
}, {
    "cName": "保山市",
        "code": "530500",
        "py": "Baoshan Shi",
        "jp": "bss",
        "qp": "BaoshanShi"
}, {
    "cName": "隆阳区",
        "code": "530502",
        "py": "Longyang Qu",
        "jp": "lyq",
        "qp": "LongyangQu"
}, {
    "cName": "腾冲市",
        "code": "530581",
        "py": "Tengchong Shi",
        "jp": "tcs",
        "qp": "TengchongShi"
}, {
    "cName": "施甸县",
        "code": "530521",
        "py": "Shidian Xian",
        "jp": "sdx",
        "qp": "ShidianXian"
}, {
    "cName": "龙陵县",
        "code": "530523",
        "py": "Longling Xian",
        "jp": "llx",
        "qp": "LonglingXian"
}, {
    "cName": "昌宁县",
        "code": "530524",
        "py": "Changning Xian",
        "jp": "cnx",
        "qp": "ChangningXian"
}, {
    "cName": "昭通市",
        "code": "530600",
        "py": "Zhaotong Shi",
        "jp": "zts",
        "qp": "ZhaotongShi"
}, {
    "cName": "昭阳区",
        "code": "530602",
        "py": "Zhaoyang Qu",
        "jp": "zyq",
        "qp": "ZhaoyangQu"
}, {
    "cName": "鲁甸县",
        "code": "530621",
        "py": "Ludian Xian",
        "jp": "ldx",
        "qp": "LudianXian"
}, {
    "cName": "巧家县",
        "code": "530622",
        "py": "Qiaojia Xian",
        "jp": "qjx",
        "qp": "QiaojiaXian"
}, {
    "cName": "盐津县",
        "code": "530623",
        "py": "Yanjin Xian",
        "jp": "yjx",
        "qp": "YanjinXian"
}, {
    "cName": "大关县",
        "code": "530624",
        "py": "Daguan Xian",
        "jp": "dgx",
        "qp": "DaguanXian"
}, {
    "cName": "永善县",
        "code": "530625",
        "py": "Yongshan Xian",
        "jp": "ysx",
        "qp": "YongshanXian"
}, {
    "cName": "绥江县",
        "code": "530626",
        "py": "Suijiang Xian",
        "jp": "sjx",
        "qp": "SuijiangXian"
}, {
    "cName": "镇雄县",
        "code": "530627",
        "py": "Zhenxiong Xian",
        "jp": "zxx",
        "qp": "ZhenxiongXian"
}, {
    "cName": "彝良县",
        "code": "530628",
        "py": "Yiliang Xian",
        "jp": "ylx",
        "qp": "YiliangXian"
}, {
    "cName": "威信县",
        "code": "530629",
        "py": "Weixin Xian",
        "jp": "wxx",
        "qp": "WeixinXian"
}, {
    "cName": "水富县",
        "code": "530630",
        "py": "Shuifu Xian",
        "jp": "sfx",
        "qp": "ShuifuXian"
}, {
    "cName": "丽江市",
        "code": "530700",
        "py": "Lijiang Shi",
        "jp": "ljs",
        "qp": "LijiangShi"
}, {
    "cName": "古城区",
        "code": "530702",
        "py": "Gucheng Qu",
        "jp": "gcq",
        "qp": "GuchengQu"
}, {
    "cName": "永胜县",
        "code": "530722",
        "py": "Yongsheng Xian",
        "jp": "ysx",
        "qp": "YongshengXian"
}, {
    "cName": "华坪县",
        "code": "530723",
        "py": "Huaping Xian",
        "jp": "hpx",
        "qp": "HuapingXian"
}, {
    "cName": "玉龙纳西族自治县",
        "code": "530721",
        "py": "Yulong Naxizu Zizhixian",
        "jp": "ylnxzzzx",
        "qp": "YulongNaxizuZizhixian"
}, {
    "cName": "宁蒗彝族自治县",
        "code": "530724",
        "py": "Ninglang Yizu Zizhixian",
        "jp": "nlyzzzx",
        "qp": "NinglangYizuZizhixian"
}, {
    "cName": "普洱市",
        "code": "530800",
        "py": "Pu&#39;er Shi",
        "jp": "pes",
        "qp": "PuerShi"
}, {
    "cName": "思茅区",
        "code": "530802",
        "py": "Simao Qu",
        "jp": "smq",
        "qp": "SimaoQu"
}, {
    "cName": "宁洱哈尼族彝族自治县",
        "code": "530821",
        "py": "Ning&#39;er Hanizu Yizu Zizhixian",
        "jp": "nehnzyzzzx",
        "qp": "NingerHanizuYizuZizhixian"
}, {
    "cName": "墨江哈尼族自治县",
        "code": "530822",
        "py": "Mojiang Hanizu Zizhixian",
        "jp": "mjhnzzzx",
        "qp": "MojiangHanizuZizhixian"
}, {
    "cName": "景东彝族自治县",
        "code": "530823",
        "py": "Jingdong Yizu Zizhixian",
        "jp": "jdyzzzx",
        "qp": "JingdongYizuZizhixian"
}, {
    "cName": "景谷傣族彝族自治县",
        "code": "530824",
        "py": "Jinggu Daizu Yizu Zizhixian",
        "jp": "jgdzyzzzx",
        "qp": "JingguDaizuYizuZizhixian"
}, {
    "cName": "镇沅彝族哈尼族拉祜族自治县",
        "code": "530825",
        "py": "Zhenyuan Yizu Hanizu Lahuzu Zizhixian",
        "jp": "zyyzhnzlhzzzx",
        "qp": "ZhenyuanYizuHanizuLahuzuZizhixian"
}, {
    "cName": "江城哈尼族彝族自治县",
        "code": "530826",
        "py": "Jiangcheng Hanizu Yizu Zizhixian",
        "jp": "jchnzyzzzx",
        "qp": "JiangchengHanizuYizuZizhixian"
}, {
    "cName": "孟连傣族拉祜族佤族自治县",
        "code": "530827",
        "py": "Menglian Daizu Lahuzu Wazu Zizhixian",
        "jp": "mldzlhzwzzzx",
        "qp": "MenglianDaizuLahuzuWazuZizhixian"
}, {
    "cName": "澜沧拉祜族自治县",
        "code": "530828",
        "py": "Lancang Lahuzu Zizhixian",
        "jp": "lclhzzzx",
        "qp": "LancangLahuzuZizhixian"
}, {
    "cName": "西盟佤族自治县",
        "code": "530829",
        "py": "Ximeng Wazu Zizhixian",
        "jp": "xmwzzzx",
        "qp": "XimengWazuZizhixian"
}, {
    "cName": "临沧市",
        "code": "530900",
        "py": "Lincang Shi",
        "jp": "lcs",
        "qp": "LincangShi"
}, {
    "cName": "临翔区",
        "code": "530902",
        "py": "Linxiang Qu",
        "jp": "lxq",
        "qp": "LinxiangQu"
}, {
    "cName": "凤庆县",
        "code": "530921",
        "py": "Fengqing Xian",
        "jp": "fqx",
        "qp": "FengqingXian"
}, {
    "cName": "云县",
        "code": "530922",
        "py": "Yun Xian",
        "jp": "yx",
        "qp": "YunXian"
}, {
    "cName": "永德县",
        "code": "530923",
        "py": "Yongde Xian",
        "jp": "ydx",
        "qp": "YongdeXian"
}, {
    "cName": "镇康县",
        "code": "530924",
        "py": "Zhenkang Xian",
        "jp": "zkx",
        "qp": "ZhenkangXian"
}, {
    "cName": "双江拉祜族佤族布朗族傣族自治县",
        "code": "530925",
        "py": "Shuangjiang Lahuzu Wazu Bulangzu Daizu Zizhixian",
        "jp": "sjlhzwzblzdzzzx",
        "qp": "ShuangjiangLahuzuWazuBulangzuDaizuZizhixian"
}, {
    "cName": "耿马傣族佤族自治县",
        "code": "530926",
        "py": "Gengma Daizu Wazu Zizhixian",
        "jp": "gmdzwzzzx",
        "qp": "GengmaDaizuWazuZizhixian"
}, {
    "cName": "沧源佤族自治县",
        "code": "530927",
        "py": "Cangyuan Wazu Zizhixian",
        "jp": "cywzzzx",
        "qp": "CangyuanWazuZizhixian"
}, {
    "cName": "楚雄彝族自治州",
        "code": "532300",
        "py": "Chuxiong Yizu Zizhizhou",
        "jp": "cxyzzzz",
        "qp": "ChuxiongYizuZizhizhou"
}, {
    "cName": "楚雄市",
        "code": "532301",
        "py": "Chuxiong Shi",
        "jp": "cxs",
        "qp": "ChuxiongShi"
}, {
    "cName": "双柏县",
        "code": "532322",
        "py": "Shuangbai Xian",
        "jp": "sbx",
        "qp": "ShuangbaiXian"
}, {
    "cName": "牟定县",
        "code": "532323",
        "py": "Mouding Xian",
        "jp": "mdx",
        "qp": "MoudingXian"
}, {
    "cName": "南华县",
        "code": "532324",
        "py": "Nanhua Xian",
        "jp": "nhx",
        "qp": "NanhuaXian"
}, {
    "cName": "姚安县",
        "code": "532325",
        "py": "Yao&#39;an Xian",
        "jp": "yax",
        "qp": "YaoanXian"
}, {
    "cName": "大姚县",
        "code": "532326",
        "py": "Dayao Xian",
        "jp": "dyx",
        "qp": "DayaoXian"
}, {
    "cName": "永仁县",
        "code": "532327",
        "py": "Yongren Xian",
        "jp": "yrx",
        "qp": "YongrenXian"
}, {
    "cName": "元谋县",
        "code": "532328",
        "py": "Yuanmou Xian",
        "jp": "ymx",
        "qp": "YuanmouXian"
}, {
    "cName": "武定县",
        "code": "532329",
        "py": "Wuding Xian",
        "jp": "wdx",
        "qp": "WudingXian"
}, {
    "cName": "禄丰县",
        "code": "532331",
        "py": "Lufeng Xian",
        "jp": "lfx",
        "qp": "LufengXian"
}, {
    "cName": "红河哈尼族彝族自治州",
        "code": "532500",
        "py": "Honghe Hanizu Yizu Zizhizhou",
        "jp": "hhhnzyzzzz",
        "qp": "HongheHanizuYizuZizhizhou"
}, {
    "cName": "蒙自市",
        "code": "532503",
        "py": "Mengzi Shi",
        "jp": "mzs",
        "qp": "MengziShi"
}, {
    "cName": "个旧市",
        "code": "532501",
        "py": "Gejiu Shi",
        "jp": "gjs",
        "qp": "GejiuShi"
}, {
    "cName": "开远市",
        "code": "532502",
        "py": "Kaiyuan Shi",
        "jp": "kys",
        "qp": "KaiyuanShi"
}, {
    "cName": "弥勒市",
        "code": "532504",
        "py": "Mile Shi",
        "jp": "mls",
        "qp": "MileShi"
}, {
    "cName": "建水县",
        "code": "532524",
        "py": "Jianshui Xian",
        "jp": "jsx",
        "qp": "JianshuiXian"
}, {
    "cName": "石屏县",
        "code": "532525",
        "py": "Shiping Xian",
        "jp": "spx",
        "qp": "ShipingXian"
}, {
    "cName": "泸西县",
        "code": "532527",
        "py": "Luxi Xian",
        "jp": "lxx",
        "qp": "LuxiXian"
}, {
    "cName": "元阳县",
        "code": "532528",
        "py": "Yuanyang Xian",
        "jp": "yyx",
        "qp": "YuanyangXian"
}, {
    "cName": "红河县",
        "code": "532529",
        "py": "Honghe Xian",
        "jp": "hhx",
        "qp": "HongheXian"
}, {
    "cName": "绿春县",
        "code": "532531",
        "py": "L眉chun Xian",
        "jp": "lcx",
        "qp": "L眉chunXian"
}, {
    "cName": "屏边苗族自治县",
        "code": "532523",
        "py": "Pingbian Miaozu Zizhixian",
        "jp": "pbmzzzx",
        "qp": "PingbianMiaozuZizhixian"
}, {
    "cName": "金平苗族瑶族傣族自治县",
        "code": "532530",
        "py": "Jinping Miaozu Yaozu Daizu Zizhixian",
        "jp": "jpmzyzdzzzx",
        "qp": "JinpingMiaozuYaozuDaizuZizhixian"
}, {
    "cName": "河口瑶族自治县",
        "code": "532532",
        "py": "Hekou Yaozu Zizhixian",
        "jp": "hkyzzzx",
        "qp": "HekouYaozuZizhixian"
}, {
    "cName": "文山壮族苗族自治州",
        "code": "532600",
        "py": "Wenshan Zhuangzu Miaozu Zizhizhou",
        "jp": "wszzmzzzz",
        "qp": "WenshanZhuangzuMiaozuZizhizhou"
}, {
    "cName": "文山市",
        "code": "532601",
        "py": "Wenshan Shi",
        "jp": "wss",
        "qp": "WenshanShi"
}, {
    "cName": "砚山县",
        "code": "532622",
        "py": "Yanshan Qu",
        "jp": "ysq",
        "qp": "YanshanQu"
}, {
    "cName": "西畴县",
        "code": "532623",
        "py": "Xichou Xian",
        "jp": "xcx",
        "qp": "XichouXian"
}, {
    "cName": "麻栗坡县",
        "code": "532624",
        "py": "Malipo Xian",
        "jp": "mlpx",
        "qp": "MalipoXian"
}, {
    "cName": "马关县",
        "code": "532625",
        "py": "Maguan Xian",
        "jp": "mgx",
        "qp": "MaguanXian"
}, {
    "cName": "丘北县",
        "code": "532626",
        "py": "Qiubei Xian",
        "jp": "qbx",
        "qp": "QiubeiXian"
}, {
    "cName": "广南县",
        "code": "532627",
        "py": "Guangnan Xian",
        "jp": "gnx",
        "qp": "GuangnanXian"
}, {
    "cName": "富宁县",
        "code": "532628",
        "py": "Funing Xian",
        "jp": "fnx",
        "qp": "FuningXian"
}, {
    "cName": "西双版纳傣族自治州",
        "code": "532800",
        "py": "Xishuangbanna Daizu Zizhizhou",
        "jp": "xsbndzzzz",
        "qp": "XishuangbannaDaizuZizhizhou"
}, {
    "cName": "景洪市",
        "code": "532801",
        "py": "Jinghong Shi",
        "jp": "jhs",
        "qp": "JinghongShi"
}, {
    "cName": "勐海县",
        "code": "532822",
        "py": "Menghai Xian",
        "jp": "mhx",
        "qp": "MenghaiXian"
}, {
    "cName": "勐腊县",
        "code": "532823",
        "py": "Mengla Xian",
        "jp": "mlx",
        "qp": "MenglaXian"
}, {
    "cName": "大理白族自治州",
        "code": "532900",
        "py": "Dali Baizu Zizhizhou",
        "jp": "dlbzzzz",
        "qp": "DaliBaizuZizhizhou"
}, {
    "cName": "大理市",
        "code": "532901",
        "py": "Dali Shi",
        "jp": "dls",
        "qp": "DaliShi"
}, {
    "cName": "祥云县",
        "code": "532923",
        "py": "Xiangyun Xian",
        "jp": "xyx",
        "qp": "XiangyunXian"
}, {
    "cName": "宾川县",
        "code": "532924",
        "py": "Binchuan Xian",
        "jp": "bcx",
        "qp": "BinchuanXian"
}, {
    "cName": "弥渡县",
        "code": "532925",
        "py": "Midu Xian",
        "jp": "mdx",
        "qp": "MiduXian"
}, {
    "cName": "永平县",
        "code": "532928",
        "py": "Yongping Xian",
        "jp": "ypx",
        "qp": "YongpingXian"
}, {
    "cName": "云龙县",
        "code": "532929",
        "py": "Yunlong Xian",
        "jp": "ylx",
        "qp": "YunlongXian"
}, {
    "cName": "洱源县",
        "code": "532930",
        "py": "Eryuan Xian",
        "jp": "eyx",
        "qp": "EryuanXian"
}, {
    "cName": "剑川县",
        "code": "532931",
        "py": "Jianchuan Xian",
        "jp": "jcx",
        "qp": "JianchuanXian"
}, {
    "cName": "鹤庆县",
        "code": "532932",
        "py": "Heqing Xian",
        "jp": "hqx",
        "qp": "HeqingXian"
}, {
    "cName": "漾濞彝族自治县",
        "code": "532922",
        "py": "Yangbi Yizu Zizhixian",
        "jp": "ybyzzzx",
        "qp": "YangbiYizuZizhixian"
}, {
    "cName": "南涧彝族自治县",
        "code": "532926",
        "py": "Nanjian Yizu Zizhixian",
        "jp": "njyzzzx",
        "qp": "NanjianYizuZizhixian"
}, {
    "cName": "巍山彝族回族自治县",
        "code": "532927",
        "py": "Weishan Yizu Huizu Zizhixian",
        "jp": "wsyzhzzzx",
        "qp": "WeishanYizuHuizuZizhixian"
}, {
    "cName": "德宏傣族景颇族自治州",
        "code": "533100",
        "py": "Dehong Daizu Jingpozu Zizhizhou",
        "jp": "dhdzjpzzzz",
        "qp": "DehongDaizuJingpozuZizhizhou"
}, {
    "cName": "芒市",
        "code": "533103",
        "py": "Mang Shi",
        "jp": "ms",
        "qp": "MangShi"
}, {
    "cName": "瑞丽市",
        "code": "533102",
        "py": "Ruili Shi",
        "jp": "rls",
        "qp": "RuiliShi"
}, {
    "cName": "梁河县",
        "code": "533122",
        "py": "Lianghe Xian",
        "jp": "lhx",
        "qp": "LiangheXian"
}, {
    "cName": "盈江县",
        "code": "533123",
        "py": "Yingjiang Xian",
        "jp": "yjx",
        "qp": "YingjiangXian"
}, {
    "cName": "陇川县",
        "code": "533124",
        "py": "Longchuan Xian",
        "jp": "lcx",
        "qp": "LongchuanXian"
}, {
    "cName": "怒江傈僳族自治州",
        "code": "533300",
        "py": "Nujiang Lisuzu Zizhizhou",
        "jp": "njlszzzz",
        "qp": "NujiangLisuzuZizhizhou"
}, {
    "cName": "泸水市",
        "code": "533301",
        "py": "Lushui Xian",
        "jp": "lsx",
        "qp": "LushuiXian"
}, {
    "cName": "福贡县",
        "code": "533323",
        "py": "Fugong Xian",
        "jp": "fgx",
        "qp": "FugongXian"
}, {
    "cName": "贡山独龙族怒族自治县",
        "code": "533324",
        "py": "Gongshan Dulongzu Nuzu Zizhixian",
        "jp": "gsdlznzzzx",
        "qp": "GongshanDulongzuNuzuZizhixian"
}, {
    "cName": "兰坪白族普米族自治县",
        "code": "533325",
        "py": "Lanping Baizu Pumizu Zizhixian",
        "jp": "lpbzpmzzzx",
        "qp": "LanpingBaizuPumizuZizhixian"
}, {
    "cName": "迪庆藏族自治州",
        "code": "533400",
        "py": "Diqing Zangzu Zizhizhou",
        "jp": "dqzzzzz",
        "qp": "DiqingZangzuZizhizhou"
}, {
    "cName": "香格里拉市",
        "code": "533401",
        "py": "Xianggelila Shi",
        "jp": "xglls",
        "qp": "XianggelilaShi"
}, {
    "cName": "德钦县",
        "code": "533422",
        "py": "Deqin Xian",
        "jp": "dqx",
        "qp": "DeqinXian"
}, {
    "cName": "维西傈僳族自治县",
        "code": "533423",
        "py": "Weixi Lisuzu Zizhixian",
        "jp": "wxlszzzx",
        "qp": "WeixiLisuzuZizhixian"
}, {
    "cName": "西藏自治区",
        "code": "540000",
        "py": "Xizang Zizhiqu",
        "jp": "xzzzq",
        "qp": "XizangZizhiqu"
}, {
    "cName": "拉萨市",
        "code": "540100",
        "py": "Lasa Shi",
        "jp": "lss",
        "qp": "LasaShi"
}, {
    "cName": "城关区",
        "code": "540102",
        "py": "Chengguan Qu",
        "jp": "cgq",
        "qp": "ChengguanQu"
}, {
    "cName": "堆龙德庆区",
        "code": "540103",
        "py": "Duilongdeqing Qu",
        "jp": "dldqq",
        "qp": "DuilongdeqingQu"
}, {
    "cName": "达孜区",
        "code": "540104",
        "py": "Dazi Qu",
        "jp": "dzq",
        "qp": "DaziQu"
}, {
    "cName": "林周县",
        "code": "540121",
        "py": "Linzhou Xian",
        "jp": "lzx",
        "qp": "LinzhouXian"
}, {
    "cName": "当雄县",
        "code": "540122",
        "py": "Dangxiong Xian",
        "jp": "dxx",
        "qp": "DangxiongXian"
}, {
    "cName": "尼木县",
        "code": "540123",
        "py": "Nimu Xian",
        "jp": "nmx",
        "qp": "NimuXian"
}, {
    "cName": "曲水县",
        "code": "540124",
        "py": "Qushui Xian",
        "jp": "qsx",
        "qp": "QushuiXian"
}, {
    "cName": "墨竹工卡县",
        "code": "540127",
        "py": "Mozhugongka Xian",
        "jp": "mzgkx",
        "qp": "MozhugongkaXian"
}, {
    "cName": "日喀则市",
        "code": "540200",
        "py": "Rikaze Shi",
        "jp": "rkzs",
        "qp": "RikazeShi"
}, {
    "cName": "桑珠孜区",
        "code": "540202",
        "py": "Sangzhuzi Qu",
        "jp": "szzq",
        "qp": "SangzhuziQu"
}, {
    "cName": "南木林县",
        "code": "540221",
        "py": "Nanmulin Xian",
        "jp": "nmlx",
        "qp": "NanmulinXian"
}, {
    "cName": "江孜县",
        "code": "540222",
        "py": "Jiangzi Xian",
        "jp": "jzx",
        "qp": "JiangziXian"
}, {
    "cName": "定日县",
        "code": "540223",
        "py": "Dingri Xian",
        "jp": "drx",
        "qp": "DingriXian"
}, {
    "cName": "萨迦县",
        "code": "540224",
        "py": "Sajia Xian",
        "jp": "sjx",
        "qp": "SajiaXian"
}, {
    "cName": "拉孜县",
        "code": "540225",
        "py": "Lazi Xian",
        "jp": "lzx",
        "qp": "LaziXian"
}, {
    "cName": "昂仁县",
        "code": "540226",
        "py": "Angren Xian",
        "jp": "arx",
        "qp": "AngrenXian"
}, {
    "cName": "谢通门县",
        "code": "540227",
        "py": "Xietongmen Xian",
        "jp": "xtmx",
        "qp": "XietongmenXian"
}, {
    "cName": "白朗县",
        "code": "540228",
        "py": "Bailang Xian",
        "jp": "blx",
        "qp": "BailangXian"
}, {
    "cName": "仁布县",
        "code": "540229",
        "py": "Renbu Xian",
        "jp": "rbx",
        "qp": "RenbuXian"
}, {
    "cName": "康马县",
        "code": "540230",
        "py": "Kangma Xian",
        "jp": "kmx",
        "qp": "KangmaXian"
}, {
    "cName": "定结县",
        "code": "540231",
        "py": "Dingjie Xian",
        "jp": "djx",
        "qp": "DingjieXian"
}, {
    "cName": "仲巴县",
        "code": "540232",
        "py": "Zhongba Xian",
        "jp": "zbx",
        "qp": "ZhongbaXian"
}, {
    "cName": "亚东县",
        "code": "540233",
        "py": "Yadong Xian",
        "jp": "ydx",
        "qp": "YadongXian"
}, {
    "cName": "吉隆县",
        "code": "540234",
        "py": "Jilong Xian",
        "jp": "jlx",
        "qp": "JilongXian"
}, {
    "cName": "聂拉木县",
        "code": "540235",
        "py": "Nielamu Xian",
        "jp": "nlmx",
        "qp": "NielamuXian"
}, {
    "cName": "萨嘎县",
        "code": "540236",
        "py": "Saga Xian",
        "jp": "sgx",
        "qp": "SagaXian"
}, {
    "cName": "岗巴县",
        "code": "540237",
        "py": "Gangba Xian",
        "jp": "gbx",
        "qp": "GangbaXian"
}, {
    "cName": "昌都市",
        "code": "540300",
        "py": "Changdu Shi",
        "jp": "cds",
        "qp": "ChangduShi"
}, {
    "cName": "卡若区",
        "code": "540302",
        "py": "Karuo Qu",
        "jp": "krq",
        "qp": "KaruoQu"
}, {
    "cName": "江达县",
        "code": "540321",
        "py": "Jiangda Xian",
        "jp": "jdx",
        "qp": "JiangdaXian"
}, {
    "cName": "贡觉县",
        "code": "540322",
        "py": "Gongjue Xian",
        "jp": "gjx",
        "qp": "GongjueXian"
}, {
    "cName": "类乌齐县",
        "code": "540323",
        "py": "Leiwuqi Xian",
        "jp": "lwqx",
        "qp": "LeiwuqiXian"
}, {
    "cName": "丁青县",
        "code": "540324",
        "py": "Dingqing Xian",
        "jp": "dqx",
        "qp": "DingqingXian"
}, {
    "cName": "察雅县",
        "code": "540325",
        "py": "Chaya Xian",
        "jp": "cyx",
        "qp": "ChayaXian"
}, {
    "cName": "八宿县",
        "code": "540326",
        "py": "Basu Xian",
        "jp": "bsx",
        "qp": "BasuXian"
}, {
    "cName": "左贡县",
        "code": "540327",
        "py": "Zuogong Xian",
        "jp": "zgx",
        "qp": "ZuogongXian"
}, {
    "cName": "芒康县",
        "code": "540328",
        "py": "Mangkang Xian",
        "jp": "mkx",
        "qp": "MangkangXian"
}, {
    "cName": "洛隆县",
        "code": "540329",
        "py": "Luolong Xian",
        "jp": "llx",
        "qp": "LuolongXian"
}, {
    "cName": "边坝县",
        "code": "540330",
        "py": "Bianba Xian",
        "jp": "bbx",
        "qp": "BianbaXian"
}, {
    "cName": "林芝市",
        "code": "540400",
        "py": "Linzhi Shi",
        "jp": "lzs",
        "qp": "LinzhiShi"
}, {
    "cName": "巴宜区",
        "code": "540402",
        "py": "Bayi Qu",
        "jp": "byq",
        "qp": "BayiQu"
}, {
    "cName": "工布江达县",
        "code": "540421",
        "py": "Gongbujiangda Xian",
        "jp": "gbjdx",
        "qp": "GongbujiangdaXian"
}, {
    "cName": "米林县",
        "code": "540422",
        "py": "Milin Xian",
        "jp": "mlx",
        "qp": "MilinXian"
}, {
    "cName": "墨脱县",
        "code": "540423",
        "py": "Motuo Xian",
        "jp": "mtx",
        "qp": "MotuoXian"
}, {
    "cName": "波密县",
        "code": "540424",
        "py": "Bomi Xian",
        "jp": "bmx",
        "qp": "BomiXian"
}, {
    "cName": "察隅县",
        "code": "540425",
        "py": "Chayu Xian",
        "jp": "cyx",
        "qp": "ChayuXian"
}, {
    "cName": "朗县",
        "code": "540426",
        "py": "Lang Xian",
        "jp": "lx",
        "qp": "LangXian"
}, {
    "cName": "山南市",
        "code": "540500",
        "py": "Shannan Shi",
        "jp": "sns",
        "qp": "ShannanShi"
}, {
    "cName": "乃东区",
        "code": "540502",
        "py": "Naidong Xian",
        "jp": "ndx",
        "qp": "NaidongXian"
}, {
    "cName": "扎囊县",
        "code": "540521",
        "py": "Zhanang Xian",
        "jp": "znx",
        "qp": "ZhanangXian"
}, {
    "cName": "贡嘎县",
        "code": "540522",
        "py": "Gongga Xian",
        "jp": "ggx",
        "qp": "GonggaXian"
}, {
    "cName": "桑日县",
        "code": "540523",
        "py": "Sangri Xian",
        "jp": "srx",
        "qp": "SangriXian"
}, {
    "cName": "琼结县",
        "code": "540524",
        "py": "Qiongjie Xian",
        "jp": "qjx",
        "qp": "QiongjieXian"
}, {
    "cName": "曲松县",
        "code": "540525",
        "py": "Qusong Xian",
        "jp": "qsx",
        "qp": "QusongXian"
}, {
    "cName": "措美县",
        "code": "540526",
        "py": "Cuomei Xian",
        "jp": "cmx",
        "qp": "CuomeiXian"
}, {
    "cName": "洛扎县",
        "code": "540527",
        "py": "Luozha Xian",
        "jp": "lzx",
        "qp": "LuozhaXian"
}, {
    "cName": "加查县",
        "code": "540528",
        "py": "Jiacha Xian",
        "jp": "jcx",
        "qp": "JiachaXian"
}, {
    "cName": "隆子县",
        "code": "540529",
        "py": "Longzi Xian",
        "jp": "lzx",
        "qp": "LongziXian"
}, {
    "cName": "错那县",
        "code": "540530",
        "py": "Cuona Xian",
        "jp": "cnx",
        "qp": "CuonaXian"
}, {
    "cName": "浪卡子县",
        "code": "540531",
        "py": "Langkazi Xian",
        "jp": "lkzx",
        "qp": "LangkaziXian"
}, {
    "cName": "那曲市",
        "code": "540600",
        "py": "Naqu Shi",
        "jp": "nqs",
        "qp": "NaquShi"
}, {
    "cName": "色尼区",
        "code": "540602",
        "py": "Seni Qu",
        "jp": "snq",
        "qp": "SeniQu"
}, {
    "cName": "嘉黎县",
        "code": "540621",
        "py": "Jiali Xian",
        "jp": "jlx",
        "qp": "JialiXian"
}, {
    "cName": "比如县",
        "code": "540622",
        "py": "Biru Xian",
        "jp": "brx",
        "qp": "BiruXian"
}, {
    "cName": "聂荣县",
        "code": "540623",
        "py": "Nierong Xian",
        "jp": "nrx",
        "qp": "NierongXian"
}, {
    "cName": "安多县",
        "code": "540624",
        "py": "Anduo Xian",
        "jp": "adx",
        "qp": "AnduoXian"
}, {
    "cName": "申扎县",
        "code": "540625",
        "py": "Shenzha Xian",
        "jp": "szx",
        "qp": "ShenzhaXian"
}, {
    "cName": "索县",
        "code": "540626",
        "py": "Suo Xian",
        "jp": "sx",
        "qp": "SuoXian"
}, {
    "cName": "班戈县",
        "code": "540627",
        "py": "Bange Xian",
        "jp": "bgx",
        "qp": "BangeXian"
}, {
    "cName": "巴青县",
        "code": "540628",
        "py": "Baqing Xian",
        "jp": "bqx",
        "qp": "BaqingXian"
}, {
    "cName": "尼玛县",
        "code": "540629",
        "py": "Nima Xian",
        "jp": "nmx",
        "qp": "NimaXian"
}, {
    "cName": "双湖县",
        "code": "540630",
        "py": "Shuanghu Xian",
        "jp": "shx",
        "qp": "ShuanghuXian"
}, {
    "cName": "阿里地区",
        "code": "542500",
        "py": "Ali Diqu",
        "jp": "aldq",
        "qp": "AliDiqu"
}, {
    "cName": "噶尔县",
        "code": "542523",
        "py": "Ga&#39;er Xian",
        "jp": "gex",
        "qp": "GaerXian"
}, {
    "cName": "普兰县",
        "code": "542521",
        "py": "Pulan Xian",
        "jp": "plx",
        "qp": "PulanXian"
}, {
    "cName": "札达县",
        "code": "542522",
        "py": "Zhada Xian",
        "jp": "zdx",
        "qp": "ZhadaXian"
}, {
    "cName": "日土县",
        "code": "542524",
        "py": "Ritu Xian",
        "jp": "rtx",
        "qp": "RituXian"
}, {
    "cName": "革吉县",
        "code": "542525",
        "py": "Geji Xian",
        "jp": "gjx",
        "qp": "GejiXian"
}, {
    "cName": "改则县",
        "code": "542526",
        "py": "Gaize Xian",
        "jp": "gzx",
        "qp": "GaizeXian"
}, {
    "cName": "措勤县",
        "code": "542527",
        "py": "Cuoqin Xian",
        "jp": "cqx",
        "qp": "CuoqinXian"
}, {
    "cName": "陕西省",
        "code": "610000",
        "py": "Shanxi Sheng",
        "jp": "sxs",
        "qp": "ShanxiSheng"
}, {
    "cName": "西安市",
        "code": "610100",
        "py": "Xi&#39;an Shi",
        "jp": "xas",
        "qp": "XianShi"
}, {
    "cName": "未央区",
        "code": "610112",
        "py": "Weiyang Qu",
        "jp": "wyq",
        "qp": "WeiyangQu"
}, {
    "cName": "新城区",
        "code": "610102",
        "py": "Xincheng Qu",
        "jp": "xcq",
        "qp": "XinchengQu"
}, {
    "cName": "碑林区",
        "code": "610103",
        "py": "Beilin Qu",
        "jp": "blq",
        "qp": "BeilinQu"
}, {
    "cName": "莲湖区",
        "code": "610104",
        "py": "Lianhu Qu",
        "jp": "lhq",
        "qp": "LianhuQu"
}, {
    "cName": "灞桥区",
        "code": "610111",
        "py": "Baqiao Qu",
        "jp": "bqq",
        "qp": "BaqiaoQu"
}, {
    "cName": "雁塔区",
        "code": "610113",
        "py": "Yanta Qu",
        "jp": "ytq",
        "qp": "YantaQu"
}, {
    "cName": "阎良区",
        "code": "610114",
        "py": "Yanliang Qu",
        "jp": "ylq",
        "qp": "YanliangQu"
}, {
    "cName": "临潼区",
        "code": "610115",
        "py": "Lintong Qu",
        "jp": "ltq",
        "qp": "LintongQu"
}, {
    "cName": "长安区",
        "code": "610116",
        "py": "Chang&#39;an Qu",
        "jp": "caq",
        "qp": "ChanganQu"
}, {
    "cName": "高陵区",
        "code": "610117",
        "py": "Gaoling Qu",
        "jp": "glq",
        "qp": "GaolingQu"
}, {
    "cName": "鄠邑区",
        "code": "610118",
        "py": "Huyi Qu",
        "jp": "hyq",
        "qp": "HuyiQu"
}, {
    "cName": "蓝田县",
        "code": "610122",
        "py": "Lantian Xian",
        "jp": "ltx",
        "qp": "LantianXian"
}, {
    "cName": "周至县",
        "code": "610124",
        "py": "Zhouzhi Xian",
        "jp": "zzx",
        "qp": "ZhouzhiXian"
}, {
    "cName": "铜川市",
        "code": "610200",
        "py": "Tongchuan Shi",
        "jp": "tcs",
        "qp": "TongchuanShi"
}, {
    "cName": "耀州区",
        "code": "610204",
        "py": "Yaozhou Qu",
        "jp": "yzq",
        "qp": "YaozhouQu"
}, {
    "cName": "王益区",
        "code": "610202",
        "py": "Wangyi Qu",
        "jp": "wyq",
        "qp": "WangyiQu"
}, {
    "cName": "印台区",
        "code": "610203",
        "py": "Yintai Qu",
        "jp": "ytq",
        "qp": "YintaiQu"
}, {
    "cName": "宜君县",
        "code": "610222",
        "py": "Yijun Xian",
        "jp": "yjx",
        "qp": "YijunXian"
}, {
    "cName": "宝鸡市",
        "code": "610300",
        "py": "Baoji Shi",
        "jp": "bjs",
        "qp": "BaojiShi"
}, {
    "cName": "金台区",
        "code": "610303",
        "py": "Jintai Qu",
        "jp": "jtq",
        "qp": "JintaiQu"
}, {
    "cName": "渭滨区",
        "code": "610302",
        "py": "Weibin Qu",
        "jp": "wbq",
        "qp": "WeibinQu"
}, {
    "cName": "陈仓区",
        "code": "610304",
        "py": "Chencang Qu",
        "jp": "ccq",
        "qp": "ChencangQu"
}, {
    "cName": "凤翔县",
        "code": "610322",
        "py": "Fengxiang Xian",
        "jp": "fxx",
        "qp": "FengxiangXian"
}, {
    "cName": "岐山县",
        "code": "610323",
        "py": "Qishan Xian",
        "jp": "qsx",
        "qp": "QishanXian"
}, {
    "cName": "扶风县",
        "code": "610324",
        "py": "Fufeng Xian",
        "jp": "ffx",
        "qp": "FufengXian"
}, {
    "cName": "眉县",
        "code": "610326",
        "py": "Mei Xian",
        "jp": "mx",
        "qp": "MeiXian"
}, {
    "cName": "陇县",
        "code": "610327",
        "py": "Long Xian",
        "jp": "lx",
        "qp": "LongXian"
}, {
    "cName": "千阳县",
        "code": "610328",
        "py": "Qianyang Xian",
        "jp": "qyx",
        "qp": "QianyangXian"
}, {
    "cName": "麟游县",
        "code": "610329",
        "py": "Linyou Xian",
        "jp": "lyx",
        "qp": "LinyouXian"
}, {
    "cName": "凤县",
        "code": "610330",
        "py": "Feng Xian",
        "jp": "fx",
        "qp": "FengXian"
}, {
    "cName": "太白县",
        "code": "610331",
        "py": "Taibai Xian",
        "jp": "tbx",
        "qp": "TaibaiXian"
}, {
    "cName": "咸阳市",
        "code": "610400",
        "py": "Xianyang Shi",
        "jp": "xys",
        "qp": "XianyangShi"
}, {
    "cName": "秦都区",
        "code": "610402",
        "py": "Qindu Qu",
        "jp": "qdq",
        "qp": "QinduQu"
}, {
    "cName": "杨陵区",
        "code": "610403",
        "py": "Yangling Qu",
        "jp": "ylq",
        "qp": "YanglingQu"
}, {
    "cName": "渭城区",
        "code": "610404",
        "py": "Weicheng Qu",
        "jp": "wcq",
        "qp": "WeichengQu"
}, {
    "cName": "兴平市",
        "code": "610481",
        "py": "Xingping Shi",
        "jp": "xps",
        "qp": "XingpingShi"
}, {
    "cName": "三原县",
        "code": "610422",
        "py": "Sanyuan Xian",
        "jp": "syx",
        "qp": "SanyuanXian"
}, {
    "cName": "泾阳县",
        "code": "610423",
        "py": "Jingyang Xian",
        "jp": "jyx",
        "qp": "JingyangXian"
}, {
    "cName": "乾县",
        "code": "610424",
        "py": "Qian Xian",
        "jp": "qx",
        "qp": "QianXian"
}, {
    "cName": "礼泉县",
        "code": "610425",
        "py": "Liquan Xian",
        "jp": "lqx",
        "qp": "LiquanXian"
}, {
    "cName": "永寿县",
        "code": "610426",
        "py": "Yongshou Xian",
        "jp": "ysx",
        "qp": "YongshouXian"
}, {
    "cName": "彬县",
        "code": "610427",
        "py": "Bin Xian",
        "jp": "bx",
        "qp": "BinXian"
}, {
    "cName": "长武县",
        "code": "610428",
        "py": "Changwu Xian",
        "jp": "cwx",
        "qp": "ChangwuXian"
}, {
    "cName": "旬邑县",
        "code": "610429",
        "py": "Xunyi Xian",
        "jp": "xyx",
        "qp": "XunyiXian"
}, {
    "cName": "淳化县",
        "code": "610430",
        "py": "Chunhua Xian",
        "jp": "chx",
        "qp": "ChunhuaXian"
}, {
    "cName": "武功县",
        "code": "610431",
        "py": "Wugong Xian",
        "jp": "wgx",
        "qp": "WugongXian"
}, {
    "cName": "渭南市",
        "code": "610500",
        "py": "Weinan Shi",
        "jp": "wns",
        "qp": "WeinanShi"
}, {
    "cName": "临渭区",
        "code": "610502",
        "py": "Linwei Qu",
        "jp": "lwq",
        "qp": "LinweiQu"
}, {
    "cName": "韩城市",
        "code": "610581",
        "py": "Hancheng Shi",
        "jp": "hcs",
        "qp": "HanchengShi"
}, {
    "cName": "华阴市",
        "code": "610582",
        "py": "Huayin Shi",
        "jp": "hys",
        "qp": "HuayinShi"
}, {
    "cName": "华州区",
        "code": "610503",
        "py": "Huazhou Qu",
        "jp": "hzq",
        "qp": "HuazhouQu"
}, {
    "cName": "潼关县",
        "code": "610522",
        "py": "Tongguan Xian",
        "jp": "tgx",
        "qp": "TongguanXian"
}, {
    "cName": "大荔县",
        "code": "610523",
        "py": "Dali Xian",
        "jp": "dlx",
        "qp": "DaliXian"
}, {
    "cName": "合阳县",
        "code": "610524",
        "py": "Heyang Xian",
        "jp": "hyx",
        "qp": "HeyangXian"
}, {
    "cName": "澄城县",
        "code": "610525",
        "py": "Chengcheng Xian",
        "jp": "ccx",
        "qp": "ChengchengXian"
}, {
    "cName": "蒲城县",
        "code": "610526",
        "py": "Pucheng Xian",
        "jp": "pcx",
        "qp": "PuchengXian"
}, {
    "cName": "白水县",
        "code": "610527",
        "py": "Baishui Xian",
        "jp": "bsx",
        "qp": "BaishuiXian"
}, {
    "cName": "富平县",
        "code": "610528",
        "py": "Fuping Xian",
        "jp": "fpx",
        "qp": "FupingXian"
}, {
    "cName": "延安市",
        "code": "610600",
        "py": "Yan&#39;an Shi",
        "jp": "yas",
        "qp": "YananShi"
}, {
    "cName": "宝塔区",
        "code": "610602",
        "py": "Baota Qu",
        "jp": "btq",
        "qp": "BaotaQu"
}, {
    "cName": "安塞区",
        "code": "610603",
        "py": "Ansai Qu",
        "jp": "asq",
        "qp": "AnsaiQu"
}, {
    "cName": "延长县",
        "code": "610621",
        "py": "Yanchang Xian",
        "jp": "ycx",
        "qp": "YanchangXian"
}, {
    "cName": "延川县",
        "code": "610622",
        "py": "Yanchuan Xian",
        "jp": "ycx",
        "qp": "YanchuanXian"
}, {
    "cName": "子长县",
        "code": "610623",
        "py": "Zichang Xian",
        "jp": "zcx",
        "qp": "ZichangXian"
}, {
    "cName": "志丹县",
        "code": "610625",
        "py": "Zhidan Xian",
        "jp": "zdx",
        "qp": "ZhidanXian"
}, {
    "cName": "吴起县",
        "code": "610626",
        "py": "Wuqi Xian",
        "jp": "wqx",
        "qp": "WuqiXian"
}, {
    "cName": "甘泉县",
        "code": "610627",
        "py": "Ganquan Xian",
        "jp": "gqx",
        "qp": "GanquanXian"
}, {
    "cName": "富县",
        "code": "610628",
        "py": "Fu Xian",
        "jp": "fx",
        "qp": "FuXian"
}, {
    "cName": "洛川县",
        "code": "610629",
        "py": "Luochuan Xian",
        "jp": "lcx",
        "qp": "LuochuanXian"
}, {
    "cName": "宜川县",
        "code": "610630",
        "py": "Yichuan Xian",
        "jp": "ycx",
        "qp": "YichuanXian"
}, {
    "cName": "黄龙县",
        "code": "610631",
        "py": "Huanglong Xian",
        "jp": "hlx",
        "qp": "HuanglongXian"
}, {
    "cName": "黄陵县",
        "code": "610632",
        "py": "Huangling Xian",
        "jp": "hlx",
        "qp": "HuanglingXian"
}, {
    "cName": "汉中市",
        "code": "610700",
        "py": "Hanzhong Shi",
        "jp": "hzs",
        "qp": "HanzhongShi"
}, {
    "cName": "汉台区",
        "code": "610702",
        "py": "Hantai Qu",
        "jp": "htq",
        "qp": "HantaiQu"
}, {
    "cName": "南郑区",
        "code": "610703",
        "py": "Nanzheng Qu",
        "jp": "nzq",
        "qp": "NanzhengQu"
}, {
    "cName": "城固县",
        "code": "610722",
        "py": "Chenggu Xian",
        "jp": "cgx",
        "qp": "ChengguXian"
}, {
    "cName": "洋县",
        "code": "610723",
        "py": "Yang Xian",
        "jp": "yx",
        "qp": "YangXian"
}, {
    "cName": "西乡县",
        "code": "610724",
        "py": "Xixiang Xian",
        "jp": "xxx",
        "qp": "XixiangXian"
}, {
    "cName": "勉县",
        "code": "610725",
        "py": "Mian Xian",
        "jp": "mx",
        "qp": "MianXian"
}, {
    "cName": "宁强县",
        "code": "610726",
        "py": "Ningqiang Xian",
        "jp": "nqx",
        "qp": "NingqiangXian"
}, {
    "cName": "略阳县",
        "code": "610727",
        "py": "Lueyang Xian",
        "jp": "lyx",
        "qp": "LueyangXian"
}, {
    "cName": "镇巴县",
        "code": "610728",
        "py": "Zhenba Xian",
        "jp": "zbx",
        "qp": "ZhenbaXian"
}, {
    "cName": "留坝县",
        "code": "610729",
        "py": "Liuba Xian",
        "jp": "lbx",
        "qp": "LiubaXian"
}, {
    "cName": "佛坪县",
        "code": "610730",
        "py": "Foping Xian",
        "jp": "fpx",
        "qp": "FopingXian"
}, {
    "cName": "榆林市",
        "code": "610800",
        "py": "Yulin Shi",
        "jp": "yls",
        "qp": "YulinShi"
}, {
    "cName": "榆阳区",
        "code": "610802",
        "py": "Yuyang Qu",
        "jp": "yyq",
        "qp": "YuyangQu"
}, {
    "cName": "神木市",
        "code": "610881",
        "py": "Shenmu Shi",
        "jp": "sms",
        "qp": "ShenmuShi"
}, {
    "cName": "府谷县",
        "code": "610822",
        "py": "Fugu Xian",
        "jp": "fgx",
        "qp": "FuguXian"
}, {
    "cName": "横山区",
        "code": "610803",
        "py": "Hengshan Qu",
        "jp": "hsq",
        "qp": "HengshanQu"
}, {
    "cName": "靖边县",
        "code": "610824",
        "py": "Jingbian Xian",
        "jp": "jbx",
        "qp": "JingbianXian"
}, {
    "cName": "定边县",
        "code": "610825",
        "py": "Dingbian Xian",
        "jp": "dbx",
        "qp": "DingbianXian"
}, {
    "cName": "绥德县",
        "code": "610826",
        "py": "Suide Xian",
        "jp": "sdx",
        "qp": "SuideXian"
}, {
    "cName": "米脂县",
        "code": "610827",
        "py": "Mizhi Xian",
        "jp": "mzx",
        "qp": "MizhiXian"
}, {
    "cName": "佳县",
        "code": "610828",
        "py": "Jia Xian",
        "jp": "jx",
        "qp": "JiaXian"
}, {
    "cName": "吴堡县",
        "code": "610829",
        "py": "Wubu Xian",
        "jp": "wbx",
        "qp": "WubuXian"
}, {
    "cName": "清涧县",
        "code": "610830",
        "py": "Qingjian Xian",
        "jp": "qjx",
        "qp": "QingjianXian"
}, {
    "cName": "子洲县",
        "code": "610831",
        "py": "Zizhou Xian",
        "jp": "zzx",
        "qp": "ZizhouXian"
}, {
    "cName": "安康市",
        "code": "610900",
        "py": "Ankang Shi",
        "jp": "aks",
        "qp": "AnkangShi"
}, {
    "cName": "汉滨区",
        "code": "610902",
        "py": "Hanbin Qu",
        "jp": "hbq",
        "qp": "HanbinQu"
}, {
    "cName": "汉阴县",
        "code": "610921",
        "py": "Hanyin Xian",
        "jp": "hyx",
        "qp": "HanyinXian"
}, {
    "cName": "石泉县",
        "code": "610922",
        "py": "Shiquan Xian",
        "jp": "sqx",
        "qp": "ShiquanXian"
}, {
    "cName": "宁陕县",
        "code": "610923",
        "py": "Ningshan Xian",
        "jp": "nsx",
        "qp": "NingshanXian"
}, {
    "cName": "紫阳县",
        "code": "610924",
        "py": "Ziyang Xian",
        "jp": "zyx",
        "qp": "ZiyangXian"
}, {
    "cName": "岚皋县",
        "code": "610925",
        "py": "Langao Xian",
        "jp": "lgx",
        "qp": "LangaoXian"
}, {
    "cName": "平利县",
        "code": "610926",
        "py": "Pingli Xian",
        "jp": "plx",
        "qp": "PingliXian"
}, {
    "cName": "镇坪县",
        "code": "610927",
        "py": "Zhenping Xian",
        "jp": "zpx",
        "qp": "ZhenpingXian"
}, {
    "cName": "旬阳县",
        "code": "610928",
        "py": "Xunyang Xian",
        "jp": "xyx",
        "qp": "XunyangXian"
}, {
    "cName": "白河县",
        "code": "610929",
        "py": "Baihe Xian",
        "jp": "bhx",
        "qp": "BaiheXian"
}, {
    "cName": "商洛市",
        "code": "611000",
        "py": "Shangluo Shi",
        "jp": "sls",
        "qp": "ShangluoShi"
}, {
    "cName": "商州区",
        "code": "611002",
        "py": "Shangzhou Qu",
        "jp": "szq",
        "qp": "ShangzhouQu"
}, {
    "cName": "洛南县",
        "code": "611021",
        "py": "Luonan Xian",
        "jp": "lnx",
        "qp": "LuonanXian"
}, {
    "cName": "丹凤县",
        "code": "611022",
        "py": "Danfeng Xian",
        "jp": "dfx",
        "qp": "DanfengXian"
}, {
    "cName": "商南县",
        "code": "611023",
        "py": "Shangnan Xian",
        "jp": "snx",
        "qp": "ShangnanXian"
}, {
    "cName": "山阳县",
        "code": "611024",
        "py": "Shanyang Xian",
        "jp": "syx",
        "qp": "ShanyangXian"
}, {
    "cName": "镇安县",
        "code": "611025",
        "py": "Zhen&#39;an Xian",
        "jp": "zax",
        "qp": "ZhenanXian"
}, {
    "cName": "柞水县",
        "code": "611026",
        "py": "Zhashui Xian",
        "jp": "zsx",
        "qp": "ZhashuiXian"
}, {
    "cName": "甘肃省",
        "code": "620000",
        "py": "Gansu Sheng",
        "jp": "gss",
        "qp": "GansuSheng"
}, {
    "cName": "兰州市",
        "code": "620100",
        "py": "Lanzhou Shi",
        "jp": "lzs",
        "qp": "LanzhouShi"
}, {
    "cName": "城关区",
        "code": "620102",
        "py": "Chengguan Qu",
        "jp": "cgq",
        "qp": "ChengguanQu"
}, {
    "cName": "七里河区",
        "code": "620103",
        "py": "Qilihe Qu",
        "jp": "qlhq",
        "qp": "QiliheQu"
}, {
    "cName": "西固区",
        "code": "620104",
        "py": "Xigu Qu",
        "jp": "xgq",
        "qp": "XiguQu"
}, {
    "cName": "安宁区",
        "code": "620105",
        "py": "Anning Qu",
        "jp": "anq",
        "qp": "AnningQu"
}, {
    "cName": "红古区",
        "code": "620111",
        "py": "Honggu Qu",
        "jp": "hgq",
        "qp": "HongguQu"
}, {
    "cName": "永登县",
        "code": "620121",
        "py": "Yongdeng Xian",
        "jp": "ydx",
        "qp": "YongdengXian"
}, {
    "cName": "皋兰县",
        "code": "620122",
        "py": "Gaolan Xian",
        "jp": "glx",
        "qp": "GaolanXian"
}, {
    "cName": "榆中县",
        "code": "620123",
        "py": "Yuzhong Xian",
        "jp": "yzx",
        "qp": "YuzhongXian"
}, {
    "cName": "嘉峪关市",
        "code": "620200",
        "py": "Jiayuguan Shi",
        "jp": "jygs",
        "qp": "JiayuguanShi"
}, {
    "cName": "金昌市",
        "code": "620300",
        "py": "Jinchang Shi",
        "jp": "jcs",
        "qp": "JinchangShi"
}, {
    "cName": "金川区",
        "code": "620302",
        "py": "Jinchuan Qu",
        "jp": "jcq",
        "qp": "JinchuanQu"
}, {
    "cName": "永昌县",
        "code": "620321",
        "py": "Yongchang Xian",
        "jp": "ycx",
        "qp": "YongchangXian"
}, {
    "cName": "白银市",
        "code": "620400",
        "py": "Baiyin Shi",
        "jp": "bys",
        "qp": "BaiyinShi"
}, {
    "cName": "白银区",
        "code": "620402",
        "py": "Baiyin Qu",
        "jp": "byq",
        "qp": "BaiyinQu"
}, {
    "cName": "平川区",
        "code": "620403",
        "py": "Pingchuan Qu",
        "jp": "pcq",
        "qp": "PingchuanQu"
}, {
    "cName": "靖远县",
        "code": "620421",
        "py": "Jingyuan Xian",
        "jp": "jyx",
        "qp": "JingyuanXian"
}, {
    "cName": "会宁县",
        "code": "620422",
        "py": "Huining Xian",
        "jp": "hnx",
        "qp": "HuiningXian"
}, {
    "cName": "景泰县",
        "code": "620423",
        "py": "Jingtai Xian",
        "jp": "jtx",
        "qp": "JingtaiXian"
}, {
    "cName": "天水市",
        "code": "620500",
        "py": "Tianshui Shi",
        "jp": "tss",
        "qp": "TianshuiShi"
}, {
    "cName": "秦州区",
        "code": "620502",
        "py": "Qinzhou Qu",
        "jp": "qzq",
        "qp": "QinzhouQu"
}, {
    "cName": "麦积区",
        "code": "620503",
        "py": "Maiji Qu",
        "jp": "mjq",
        "qp": "MaijiQu"
}, {
    "cName": "清水县",
        "code": "620521",
        "py": "Qingshui Xian",
        "jp": "qsx",
        "qp": "QingshuiXian"
}, {
    "cName": "秦安县",
        "code": "620522",
        "py": "Qin&#39;an Xian",
        "jp": "qax",
        "qp": "QinanXian"
}, {
    "cName": "甘谷县",
        "code": "620523",
        "py": "Gangu Xian",
        "jp": "ggx",
        "qp": "GanguXian"
}, {
    "cName": "武山县",
        "code": "620524",
        "py": "Wushan Xian",
        "jp": "wsx",
        "qp": "WushanXian"
}, {
    "cName": "张家川回族自治县",
        "code": "620525",
        "py": "Zhangjiachuan Huizu Zizhixian",
        "jp": "zjchzzzx",
        "qp": "ZhangjiachuanHuizuZizhixian"
}, {
    "cName": "武威市",
        "code": "620600",
        "py": "Wuwei Shi",
        "jp": "wws",
        "qp": "WuweiShi"
}, {
    "cName": "凉州区",
        "code": "620602",
        "py": "Liangzhou Qu",
        "jp": "lzq",
        "qp": "LiangzhouQu"
}, {
    "cName": "民勤县",
        "code": "620621",
        "py": "Minqin Xian",
        "jp": "mqx",
        "qp": "MinqinXian"
}, {
    "cName": "古浪县",
        "code": "620622",
        "py": "Gulang Xian",
        "jp": "glx",
        "qp": "GulangXian"
}, {
    "cName": "天祝藏族自治县",
        "code": "620623",
        "py": "Tianzhu Zangzu Zizhixian",
        "jp": "tzzzzzx",
        "qp": "TianzhuZangzuZizhixian"
}, {
    "cName": "张掖市",
        "code": "620700",
        "py": "Zhangye Shi",
        "jp": "zys",
        "qp": "ZhangyeShi"
}, {
    "cName": "甘州区",
        "code": "620702",
        "py": "Ganzhou Qu",
        "jp": "gzq",
        "qp": "GanzhouQu"
}, {
    "cName": "民乐县",
        "code": "620722",
        "py": "Minle Xian",
        "jp": "mlx",
        "qp": "MinleXian"
}, {
    "cName": "临泽县",
        "code": "620723",
        "py": "Linze Xian",
        "jp": "lzx",
        "qp": "LinzeXian"
}, {
    "cName": "高台县",
        "code": "620724",
        "py": "Gaotai Xian",
        "jp": "gtx",
        "qp": "GaotaiXian"
}, {
    "cName": "山丹县",
        "code": "620725",
        "py": "Shandan Xian",
        "jp": "sdx",
        "qp": "ShandanXian"
}, {
    "cName": "肃南裕固族自治县",
        "code": "620721",
        "py": "Sunan Yuguzu Zizhixian",
        "jp": "snygzzzx",
        "qp": "SunanYuguzuZizhixian"
}, {
    "cName": "平凉市",
        "code": "620800",
        "py": "Pingliang Shi",
        "jp": "pls",
        "qp": "PingliangShi"
}, {
    "cName": "崆峒区",
        "code": "620802",
        "py": "Kongtong Qu",
        "jp": "ktq",
        "qp": "KongtongQu"
}, {
    "cName": "泾川县",
        "code": "620821",
        "py": "Jingchuan Xian",
        "jp": "jcx",
        "qp": "JingchuanXian"
}, {
    "cName": "灵台县",
        "code": "620822",
        "py": "Lingtai Xian",
        "jp": "ltx",
        "qp": "LingtaiXian"
}, {
    "cName": "崇信县",
        "code": "620823",
        "py": "Chongxin Xian",
        "jp": "cxx",
        "qp": "ChongxinXian"
}, {
    "cName": "华亭县",
        "code": "620824",
        "py": "Huating Xian",
        "jp": "htx",
        "qp": "HuatingXian"
}, {
    "cName": "庄浪县",
        "code": "620825",
        "py": "Zhuanglang Xian",
        "jp": "zlx",
        "qp": "ZhuanglangXian"
}, {
    "cName": "静宁县",
        "code": "620826",
        "py": "Jingning Xian",
        "jp": "jnx",
        "qp": "JingningXian"
}, {
    "cName": "酒泉市",
        "code": "620900",
        "py": "Jiuquan Shi",
        "jp": "jqs",
        "qp": "JiuquanShi"
}, {
    "cName": "肃州区",
        "code": "620902",
        "py": "Suzhou Qu",
        "jp": "szq",
        "qp": "SuzhouQu"
}, {
    "cName": "玉门市",
        "code": "620981",
        "py": "Yumen Shi",
        "jp": "yms",
        "qp": "YumenShi"
}, {
    "cName": "敦煌市",
        "code": "620982",
        "py": "Dunhuang Shi",
        "jp": "dhs",
        "qp": "DunhuangShi"
}, {
    "cName": "金塔县",
        "code": "620921",
        "py": "Jinta Xian",
        "jp": "jtx",
        "qp": "JintaXian"
}, {
    "cName": "瓜州县",
        "code": "620922",
        "py": "Guazhou Xian",
        "jp": "gzx",
        "qp": "GuazhouXian"
}, {
    "cName": "肃北蒙古族自治县",
        "code": "620923",
        "py": "Subei Mengguzu Zizhixian",
        "jp": "sbmgzzzx",
        "qp": "SubeiMengguzuZizhixian"
}, {
    "cName": "阿克塞哈萨克族自治县",
        "code": "620924",
        "py": "Akesai Hasakezu Zizhixian",
        "jp": "akshskzzzx",
        "qp": "AkesaiHasakezuZizhixian"
}, {
    "cName": "庆阳市",
        "code": "621000",
        "py": "Qingyang Shi",
        "jp": "qys",
        "qp": "QingyangShi"
}, {
    "cName": "西峰区",
        "code": "621002",
        "py": "Xifeng Qu",
        "jp": "xfq",
        "qp": "XifengQu"
}, {
    "cName": "庆城县",
        "code": "621021",
        "py": "Qingcheng Xian",
        "jp": "qcx",
        "qp": "QingchengXian"
}, {
    "cName": "环县",
        "code": "621022",
        "py": "Huan Xian",
        "jp": "hx",
        "qp": "HuanXian"
}, {
    "cName": "华池县",
        "code": "621023",
        "py": "Huachi Xian",
        "jp": "hcx",
        "qp": "HuachiXian"
}, {
    "cName": "合水县",
        "code": "621024",
        "py": "Heshui Xian",
        "jp": "hsx",
        "qp": "HeshuiXian"
}, {
    "cName": "正宁县",
        "code": "621025",
        "py": "Zhengning Xian",
        "jp": "znx",
        "qp": "ZhengningXian"
}, {
    "cName": "宁县",
        "code": "621026",
        "py": "Ning Xian",
        "jp": "nx",
        "qp": "NingXian"
}, {
    "cName": "镇原县",
        "code": "621027",
        "py": "Zhenyuan Xian",
        "jp": "zyx",
        "qp": "ZhenyuanXian"
}, {
    "cName": "定西市",
        "code": "621100",
        "py": "Dingxi Shi",
        "jp": "dxs",
        "qp": "DingxiShi"
}, {
    "cName": "安定区",
        "code": "621102",
        "py": "Anding Qu",
        "jp": "adq",
        "qp": "AndingQu"
}, {
    "cName": "通渭县",
        "code": "621121",
        "py": "Tongwei Xian",
        "jp": "twx",
        "qp": "TongweiXian"
}, {
    "cName": "陇西县",
        "code": "621122",
        "py": "Longxi Xian",
        "jp": "lxx",
        "qp": "LongxiXian"
}, {
    "cName": "渭源县",
        "code": "621123",
        "py": "Weiyuan Xian",
        "jp": "wyx",
        "qp": "WeiyuanXian"
}, {
    "cName": "临洮县",
        "code": "621124",
        "py": "Lintao Xian",
        "jp": "ltx",
        "qp": "LintaoXian"
}, {
    "cName": "漳县",
        "code": "621125",
        "py": "Zhang Xian",
        "jp": "zx",
        "qp": "ZhangXian"
}, {
    "cName": "岷县",
        "code": "621126",
        "py": "Min Xian",
        "jp": "mx",
        "qp": "MinXian"
}, {
    "cName": "陇南市",
        "code": "621200",
        "py": "Longnan Shi",
        "jp": "lns",
        "qp": "LongnanShi"
}, {
    "cName": "武都区",
        "code": "621202",
        "py": "Wudu Qu",
        "jp": "wdq",
        "qp": "WuduQu"
}, {
    "cName": "成县",
        "code": "621221",
        "py": "Cheng Xian",
        "jp": "cx",
        "qp": "ChengXian"
}, {
    "cName": "文县",
        "code": "621222",
        "py": "Wen Xian",
        "jp": "wx",
        "qp": "WenXian"
}, {
    "cName": "宕昌县",
        "code": "621223",
        "py": "Dangchang Xian",
        "jp": "dcx",
        "qp": "DangchangXian"
}, {
    "cName": "康县",
        "code": "621224",
        "py": "Kang Xian",
        "jp": "kx",
        "qp": "KangXian"
}, {
    "cName": "西和县",
        "code": "621225",
        "py": "Xihe Xian",
        "jp": "xhx",
        "qp": "XiheXian"
}, {
    "cName": "礼县",
        "code": "621226",
        "py": "Li Xian",
        "jp": "lx",
        "qp": "LiXian"
}, {
    "cName": "徽县",
        "code": "621227",
        "py": "Hui Xian",
        "jp": "hx",
        "qp": "HuiXian"
}, {
    "cName": "两当县",
        "code": "621228",
        "py": "Liangdang Xian",
        "jp": "ldx",
        "qp": "LiangdangXian"
}, {
    "cName": "临夏回族自治州",
        "code": "622900",
        "py": "Linxia Huizu Zizhizhou",
        "jp": "lxhzzzz",
        "qp": "LinxiaHuizuZizhizhou"
}, {
    "cName": "临夏市",
        "code": "622901",
        "py": "Linxia Shi",
        "jp": "lxs",
        "qp": "LinxiaShi"
}, {
    "cName": "临夏县",
        "code": "622921",
        "py": "Linxia Xian",
        "jp": "lxx",
        "qp": "LinxiaXian"
}, {
    "cName": "康乐县",
        "code": "622922",
        "py": "Kangle Xian",
        "jp": "klx",
        "qp": "KangleXian"
}, {
    "cName": "永靖县",
        "code": "622923",
        "py": "Yongjing Xian",
        "jp": "yjx",
        "qp": "YongjingXian"
}, {
    "cName": "广河县",
        "code": "622924",
        "py": "Guanghe Xian",
        "jp": "ghx",
        "qp": "GuangheXian"
}, {
    "cName": "和政县",
        "code": "622925",
        "py": "Hezheng Xian",
        "jp": "hzx",
        "qp": "HezhengXian"
}, {
    "cName": "东乡族自治县",
        "code": "622926",
        "py": "Dongxiangzu Zizhixian",
        "jp": "dxzzzx",
        "qp": "DongxiangzuZizhixian"
}, {
    "cName": "积石山保安族东乡族撒拉族自治县",
        "code": "622927",
        "py": "Jishishan Bao&#39;anzu Dongxiangzu Salazu Zizhixian",
        "jp": "jssbazdxzslzzzx",
        "qp": "JishishanBaoanzuDongxiangzuSalazuZizhixian"
}, {
    "cName": "甘南藏族自治州",
        "code": "623000",
        "py": "Gannan Zangzu Zizhizhou",
        "jp": "gnzzzzz",
        "qp": "GannanZangzuZizhizhou"
}, {
    "cName": "合作市",
        "code": "623001",
        "py": "Hezuo Shi",
        "jp": "hzs",
        "qp": "HezuoShi"
}, {
    "cName": "临潭县",
        "code": "623021",
        "py": "Lintan Xian",
        "jp": "ltx",
        "qp": "LintanXian"
}, {
    "cName": "卓尼县",
        "code": "623022",
        "py": "Zhuoni Xian",
        "jp": "znx",
        "qp": "ZhuoniXian"
}, {
    "cName": "舟曲县",
        "code": "623023",
        "py": "Zhouqu Xian",
        "jp": "zqx",
        "qp": "ZhouquXian"
}, {
    "cName": "迭部县",
        "code": "623024",
        "py": "Diebu Xian",
        "jp": "dbx",
        "qp": "DiebuXian"
}, {
    "cName": "玛曲县",
        "code": "623025",
        "py": "Maqu Xian",
        "jp": "mqx",
        "qp": "MaquXian"
}, {
    "cName": "碌曲县",
        "code": "623026",
        "py": "Luqu Xian",
        "jp": "lqx",
        "qp": "LuquXian"
}, {
    "cName": "夏河县",
        "code": "623027",
        "py": "Xiahe Xian",
        "jp": "xhx",
        "qp": "XiaheXian"
}, {
    "cName": "青海省",
        "code": "630000",
        "py": "Qinghai Sheng",
        "jp": "qhs",
        "qp": "QinghaiSheng"
}, {
    "cName": "西宁市",
        "code": "630100",
        "py": "Xining Shi",
        "jp": "xns",
        "qp": "XiningShi"
}, {
    "cName": "城中区",
        "code": "630103",
        "py": "Chengzhong Qu",
        "jp": "czq",
        "qp": "ChengzhongQu"
}, {
    "cName": "城东区",
        "code": "630102",
        "py": "Chengdong Qu",
        "jp": "cdq",
        "qp": "ChengdongQu"
}, {
    "cName": "城西区",
        "code": "630104",
        "py": "Chengxi Qu",
        "jp": "cxq",
        "qp": "ChengxiQu"
}, {
    "cName": "城北区",
        "code": "630105",
        "py": "Chengbei Qu",
        "jp": "cbq",
        "qp": "ChengbeiQu"
}, {
    "cName": "湟中县",
        "code": "630122",
        "py": "Huangzhong Xian",
        "jp": "hzx",
        "qp": "HuangzhongXian"
}, {
    "cName": "湟源县",
        "code": "630123",
        "py": "Huangyuan Xian",
        "jp": "hyx",
        "qp": "HuangyuanXian"
}, {
    "cName": "大通回族土族自治县",
        "code": "630121",
        "py": "Datong Huizu Tuzu Zizhixian",
        "jp": "dthztzzzx",
        "qp": "DatongHuizuTuzuZizhixian"
}, {
    "cName": "海东市",
        "code": "630200",
        "py": "Haidong Shi",
        "jp": "hds",
        "qp": "HaidongShi"
}, {
    "cName": "乐都区",
        "code": "630202",
        "py": "Ledu Qu",
        "jp": "ldq",
        "qp": "LeduQu"
}, {
    "cName": "平安区",
        "code": "630203",
        "py": "Ping&#39;an Qu",
        "jp": "paq",
        "qp": "PinganQu"
}, {
    "cName": "民和回族土族自治县",
        "code": "630222",
        "py": "Minhe Huizu Tuzu Zizhixian",
        "jp": "mhhztzzzx",
        "qp": "MinheHuizuTuzuZizhixian"
}, {
    "cName": "互助土族自治县",
        "code": "630223",
        "py": "Huzhu Tuzu Zizhixian",
        "jp": "hztzzzx",
        "qp": "HuzhuTuzuZizhixian"
}, {
    "cName": "化隆回族自治县",
        "code": "630224",
        "py": "Hualong Huizu Zizhixian",
        "jp": "hlhzzzx",
        "qp": "HualongHuizuZizhixian"
}, {
    "cName": "循化撒拉族自治县",
        "code": "630225",
        "py": "Xunhua Salazu Zizhixian",
        "jp": "xhslzzzx",
        "qp": "XunhuaSalazuZizhixian"
}, {
    "cName": "海北藏族自治州",
        "code": "632200",
        "py": "Haibei Zangzu Zizhizhou",
        "jp": "hbzzzzz",
        "qp": "HaibeiZangzuZizhizhou"
}, {
    "cName": "海晏县",
        "code": "632223",
        "py": "Haiyan Xian",
        "jp": "hyx",
        "qp": "HaiyanXian"
}, {
    "cName": "祁连县",
        "code": "632222",
        "py": "Qilian Xian",
        "jp": "qlx",
        "qp": "QilianXian"
}, {
    "cName": "刚察县",
        "code": "632224",
        "py": "Gangcha Xian",
        "jp": "gcx",
        "qp": "GangchaXian"
}, {
    "cName": "门源回族自治县",
        "code": "632221",
        "py": "Menyuan Huizu Zizhixian",
        "jp": "myhzzzx",
        "qp": "MenyuanHuizuZizhixian"
}, {
    "cName": "黄南藏族自治州",
        "code": "632300",
        "py": "Huangnan Zangzu Zizhizhou",
        "jp": "hnzzzzz",
        "qp": "HuangnanZangzuZizhizhou"
}, {
    "cName": "同仁县",
        "code": "632321",
        "py": "Tongren Xian",
        "jp": "trx",
        "qp": "TongrenXian"
}, {
    "cName": "尖扎县",
        "code": "632322",
        "py": "Jianzha Xian",
        "jp": "jzx",
        "qp": "JianzhaXian"
}, {
    "cName": "泽库县",
        "code": "632323",
        "py": "Zeku Xian",
        "jp": "zkx",
        "qp": "ZekuXian"
}, {
    "cName": "河南蒙古族自治县",
        "code": "632324",
        "py": "Henan Mengguzu Zizhixian",
        "jp": "hnmgzzzx",
        "qp": "HenanMengguzuZizhixian"
}, {
    "cName": "海南藏族自治州",
        "code": "632500",
        "py": "Hainan Zangzu Zizhizhou",
        "jp": "hnzzzzz",
        "qp": "HainanZangzuZizhizhou"
}, {
    "cName": "共和县",
        "code": "632521",
        "py": "Gonghe Xian",
        "jp": "ghx",
        "qp": "GongheXian"
}, {
    "cName": "同德县",
        "code": "632522",
        "py": "Tongde Xian",
        "jp": "tdx",
        "qp": "TongdeXian"
}, {
    "cName": "贵德县",
        "code": "632523",
        "py": "Guide Xian",
        "jp": "gdx",
        "qp": "GuideXian"
}, {
    "cName": "兴海县",
        "code": "632524",
        "py": "Xinghai Xian",
        "jp": "xhx",
        "qp": "XinghaiXian"
}, {
    "cName": "贵南县",
        "code": "632525",
        "py": "Guinan Xian",
        "jp": "gnx",
        "qp": "GuinanXian"
}, {
    "cName": "果洛藏族自治州",
        "code": "632600",
        "py": "Guoluo Zangzu Zizhizhou",
        "jp": "glzzzzz",
        "qp": "GuoluoZangzuZizhizhou"
}, {
    "cName": "玛沁县",
        "code": "632621",
        "py": "Maqin Xian",
        "jp": "mqx",
        "qp": "MaqinXian"
}, {
    "cName": "班玛县",
        "code": "632622",
        "py": "Banma Xian",
        "jp": "bmx",
        "qp": "BanmaXian"
}, {
    "cName": "甘德县",
        "code": "632623",
        "py": "Gande Xian",
        "jp": "gdx",
        "qp": "GandeXian"
}, {
    "cName": "达日县",
        "code": "632624",
        "py": "Dari Xian",
        "jp": "drx",
        "qp": "DariXian"
}, {
    "cName": "久治县",
        "code": "632625",
        "py": "Jiuzhi Xian",
        "jp": "jzx",
        "qp": "JiuzhiXian"
}, {
    "cName": "玛多县",
        "code": "632626",
        "py": "Maduo Xian",
        "jp": "mdx",
        "qp": "MaduoXian"
}, {
    "cName": "玉树藏族自治州",
        "code": "632700",
        "py": "Yushu Zangzu Zizhizhou",
        "jp": "yszzzzz",
        "qp": "YushuZangzuZizhizhou"
}, {
    "cName": "玉树市",
        "code": "632701",
        "py": "Yushu Shi",
        "jp": "yss",
        "qp": "YushuShi"
}, {
    "cName": "杂多县",
        "code": "632722",
        "py": "Zaduo Xian",
        "jp": "zdx",
        "qp": "ZaduoXian"
}, {
    "cName": "称多县",
        "code": "632723",
        "py": "Chengduo Xian",
        "jp": "cdx",
        "qp": "ChengduoXian"
}, {
    "cName": "治多县",
        "code": "632724",
        "py": "Zhiduo Xian",
        "jp": "zdx",
        "qp": "ZhiduoXian"
}, {
    "cName": "囊谦县",
        "code": "632725",
        "py": "Nangqian Xian",
        "jp": "nqx",
        "qp": "NangqianXian"
}, {
    "cName": "曲麻莱县",
        "code": "632726",
        "py": "Qumalai Xian",
        "jp": "qmlx",
        "qp": "QumalaiXian"
}, {
    "cName": "海西蒙古族藏族自治州",
        "code": "632800",
        "py": "Haixi Mengguzu Zangzu Zizhizhou",
        "jp": "hxmgzzzzzz",
        "qp": "HaixiMengguzuZangzuZizhizhou"
}, {
    "cName": "德令哈市",
        "code": "632802",
        "py": "Delingha Shi",
        "jp": "dlhs",
        "qp": "DelinghaShi"
}, {
    "cName": "格尔木市",
        "code": "632801",
        "py": "Ge&#39;ermu Shi",
        "jp": "gems",
        "qp": "GeermuShi"
}, {
    "cName": "乌兰县",
        "code": "632821",
        "py": "Wulan Xian",
        "jp": "wlx",
        "qp": "WulanXian"
}, {
    "cName": "都兰县",
        "code": "632822",
        "py": "Dulan Xian",
        "jp": "dlx",
        "qp": "DulanXian"
}, {
    "cName": "天峻县",
        "code": "632823",
        "py": "Tianjun Xian",
        "jp": "tjx",
        "qp": "TianjunXian"
}, {
    "cName": "宁夏回族自治区",
        "code": "640000",
        "py": "Ningxia Huizu Zizhiqu",
        "jp": "nxhzzzq",
        "qp": "NingxiaHuizuZizhiqu"
}, {
    "cName": "银川市",
        "code": "640100",
        "py": "Yinchuan Shi",
        "jp": "ycs",
        "qp": "YinchuanShi"
}, {
    "cName": "金凤区",
        "code": "640106",
        "py": "Jinfeng Qu",
        "jp": "jfq",
        "qp": "JinfengQu"
}, {
    "cName": "兴庆区",
        "code": "640104",
        "py": "Xingqing Qu",
        "jp": "xqq",
        "qp": "XingqingQu"
}, {
    "cName": "西夏区",
        "code": "640105",
        "py": "Xixia Qu",
        "jp": "xxq",
        "qp": "XixiaQu"
}, {
    "cName": "灵武市",
        "code": "640181",
        "py": "Lingwu Shi",
        "jp": "lws",
        "qp": "LingwuShi"
}, {
    "cName": "永宁县",
        "code": "640121",
        "py": "Yongning Xian",
        "jp": "ynx",
        "qp": "YongningXian"
}, {
    "cName": "贺兰县",
        "code": "640122",
        "py": "Helan Xian",
        "jp": "hlx",
        "qp": "HelanXian"
}, {
    "cName": "石嘴山市",
        "code": "640200",
        "py": "Shizuishan Shi",
        "jp": "szss",
        "qp": "ShizuishanShi"
}, {
    "cName": "大武口区",
        "code": "640202",
        "py": "Dawukou Qu",
        "jp": "dwkq",
        "qp": "DawukouQu"
}, {
    "cName": "惠农区",
        "code": "640205",
        "py": "Huinong Qu",
        "jp": "hnq",
        "qp": "HuinongQu"
}, {
    "cName": "平罗县",
        "code": "640221",
        "py": "Pingluo Xian",
        "jp": "plx",
        "qp": "PingluoXian"
}, {
    "cName": "吴忠市",
        "code": "640300",
        "py": "Wuzhong Shi",
        "jp": "wzs",
        "qp": "WuzhongShi"
}, {
    "cName": "利通区",
        "code": "640302",
        "py": "Litong Qu",
        "jp": "ltq",
        "qp": "LitongQu"
}, {
    "cName": "红寺堡区",
        "code": "640303",
        "py": "Hongsipu Qu",
        "jp": "hspq",
        "qp": "HongsipuQu"
}, {
    "cName": "青铜峡市",
        "code": "640381",
        "py": "Qingtongxia Shi",
        "jp": "qtxs",
        "qp": "QingtongxiaShi"
}, {
    "cName": "盐池县",
        "code": "640323",
        "py": "Yanchi Xian",
        "jp": "ycx",
        "qp": "YanchiXian"
}, {
    "cName": "同心县",
        "code": "640324",
        "py": "Tongxin Xian",
        "jp": "txx",
        "qp": "TongxinXian"
}, {
    "cName": "固原市",
        "code": "640400",
        "py": "Guyuan Shi",
        "jp": "gys",
        "qp": "GuyuanShi"
}, {
    "cName": "原州区",
        "code": "640402",
        "py": "Yuanzhou Qu",
        "jp": "yzq",
        "qp": "YuanzhouQu"
}, {
    "cName": "西吉县",
        "code": "640422",
        "py": "Xiji Xian",
        "jp": "xjx",
        "qp": "XijiXian"
}, {
    "cName": "隆德县",
        "code": "640423",
        "py": "Longde Xian",
        "jp": "ldx",
        "qp": "LongdeXian"
}, {
    "cName": "泾源县",
        "code": "640424",
        "py": "Jingyuan Xian",
        "jp": "jyx",
        "qp": "JingyuanXian"
}, {
    "cName": "彭阳县",
        "code": "640425",
        "py": "Pengyang Xian",
        "jp": "pyx",
        "qp": "PengyangXian"
}, {
    "cName": "中卫市",
        "code": "640500",
        "py": "Zhongwei Shi",
        "jp": "zws",
        "qp": "ZhongweiShi"
}, {
    "cName": "沙坡头区",
        "code": "640502",
        "py": "Shapotou Qu",
        "jp": "sptq",
        "qp": "ShapotouQu"
}, {
    "cName": "中宁县",
        "code": "640521",
        "py": "Zhongning Xian",
        "jp": "znx",
        "qp": "ZhongningXian"
}, {
    "cName": "海原县",
        "code": "640522",
        "py": "Haiyuan Xian",
        "jp": "hyx",
        "qp": "HaiyuanXian"
}, {
    "cName": "新疆维吾尔自治区",
        "code": "650000",
        "py": "Xinjiang Weiwu&#39;er Zizhiqu",
        "jp": "xjwwezzq",
        "qp": "XinjiangweiwuerZizhiqu"
}, {
    "cName": "乌鲁木齐市",
        "code": "650100",
        "py": "Wulumuqi Shi",
        "jp": "wlmqs",
        "qp": "WulumuqiShi"
}, {
    "cName": "天山区",
        "code": "650102",
        "py": "Tianshan Qu",
        "jp": "tsq",
        "qp": "TianshanQu"
}, {
    "cName": "沙依巴克区",
        "code": "650103",
        "py": "Shayibake Qu",
        "jp": "sybkq",
        "qp": "ShayibakeQu"
}, {
    "cName": "新市区",
        "code": "650104",
        "py": "Xinshi Qu",
        "jp": "xsq",
        "qp": "XinshiQu"
}, {
    "cName": "水磨沟区",
        "code": "650105",
        "py": "Shuimogou Qu",
        "jp": "smgq",
        "qp": "ShuimogouQu"
}, {
    "cName": "头屯河区",
        "code": "650106",
        "py": "Toutunhe Qu",
        "jp": "tthq",
        "qp": "ToutunheQu"
}, {
    "cName": "达坂城区",
        "code": "650107",
        "py": "Dabancheng Qu",
        "jp": "dbcq",
        "qp": "DabanchengQu"
}, {
    "cName": "米东区",
        "code": "650109",
        "py": "Midong Qu",
        "jp": "mdq",
        "qp": "MidongQu"
}, {
    "cName": "乌鲁木齐县",
        "code": "650121",
        "py": "Wulumuqi Xian",
        "jp": "wlmqx",
        "qp": "WulumuqiXian"
}, {
    "cName": "克拉玛依市",
        "code": "650200",
        "py": "Kelamayi Shi",
        "jp": "klmys",
        "qp": "KelamayiShi"
}, {
    "cName": "克拉玛依区",
        "code": "650203",
        "py": "Kelamayi Qu",
        "jp": "klmyq",
        "qp": "KelamayiQu"
}, {
    "cName": "独山子区",
        "code": "650202",
        "py": "Dushanzi Qu",
        "jp": "dszq",
        "qp": "DushanziQu"
}, {
    "cName": "白碱滩区",
        "code": "650204",
        "py": "Baijiantan Qu",
        "jp": "bjtq",
        "qp": "BaijiantanQu"
}, {
    "cName": "乌尔禾区",
        "code": "650205",
        "py": "Wu&#39;erhe Qu",
        "jp": "wehq",
        "qp": "WuerheQu"
}, {
    "cName": "吐鲁番市",
        "code": "650400",
        "py": "Tulufan Shi",
        "jp": "tlfs",
        "qp": "TulufanShi"
}, {
    "cName": "高昌区",
        "code": "650402",
        "py": "Gaochang Qu",
        "jp": "gcq",
        "qp": "GaochangQu"
}, {
    "cName": "鄯善县",
        "code": "650421",
        "py": "Shanshan Xian",
        "jp": "ssx",
        "qp": "ShanshanXian"
}, {
    "cName": "托克逊县",
        "code": "650422",
        "py": "Tuokexun Xian",
        "jp": "tkxx",
        "qp": "TuokexunXian"
}, {
    "cName": "哈密市",
        "code": "650500",
        "py": "Hami Shi",
        "jp": "hms",
        "qp": "HamiShi"
}, {
    "cName": "伊州区",
        "code": "650502",
        "py": "Yizhou Qu",
        "jp": "yzq",
        "qp": "YizhouQu"
}, {
    "cName": "伊吾县",
        "code": "650522",
        "py": "Yiwu Xian",
        "jp": "ywx",
        "qp": "YiwuXian"
}, {
    "cName": "巴里坤哈萨克自治县",
        "code": "650521",
        "py": "Balikun Hasake Zizhixian",
        "jp": "blkhskzzx",
        "qp": "BalikunhasakeZizhixian"
}, {
    "cName": "阿克苏地区",
        "code": "652900",
        "py": "Akesu Diqu",
        "jp": "aksdq",
        "qp": "AkesuDiqu"
}, {
    "cName": "阿克苏市",
        "code": "652901",
        "py": "Akesu Shi",
        "jp": "akss",
        "qp": "AkesuShi"
}, {
    "cName": "温宿县",
        "code": "652922",
        "py": "Wensu Xian",
        "jp": "wsx",
        "qp": "WensuXian"
}, {
    "cName": "库车县",
        "code": "652923",
        "py": "Kuche Xian",
        "jp": "kcx",
        "qp": "KucheXian"
}, {
    "cName": "沙雅县",
        "code": "652924",
        "py": "Shaya Xian",
        "jp": "syx",
        "qp": "ShayaXian"
}, {
    "cName": "新和县",
        "code": "652925",
        "py": "Xinhe Xian",
        "jp": "xhx",
        "qp": "XinheXian"
}, {
    "cName": "拜城县",
        "code": "652926",
        "py": "Baicheng Xian",
        "jp": "bcx",
        "qp": "BaichengXian"
}, {
    "cName": "乌什县",
        "code": "652927",
        "py": "Wushi Xian",
        "jp": "wsx",
        "qp": "WushiXian"
}, {
    "cName": "阿瓦提县",
        "code": "652928",
        "py": "Awati Xian",
        "jp": "awtx",
        "qp": "AwatiXian"
}, {
    "cName": "柯坪县",
        "code": "652929",
        "py": "Keping Xian",
        "jp": "kpx",
        "qp": "KepingXian"
}, {
    "cName": "喀什地区",
        "code": "653100",
        "py": "Kashi Diqu",
        "jp": "ksdq",
        "qp": "KashiDiqu"
}, {
    "cName": "喀什市",
        "code": "653101",
        "py": "Kashi Shi",
        "jp": "kss",
        "qp": "KashiShi"
}, {
    "cName": "疏附县",
        "code": "653121",
        "py": "Shufu Xian",
        "jp": "sfx",
        "qp": "ShufuXian"
}, {
    "cName": "疏勒县",
        "code": "653122",
        "py": "Shule Xian",
        "jp": "slx",
        "qp": "ShuleXian"
}, {
    "cName": "英吉沙县",
        "code": "653123",
        "py": "Yingjisha Xian",
        "jp": "yjsx",
        "qp": "YingjishaXian"
}, {
    "cName": "泽普县",
        "code": "653124",
        "py": "Zepu Xian",
        "jp": "zpx",
        "qp": "ZepuXian"
}, {
    "cName": "莎车县",
        "code": "653125",
        "py": "Shache Xian",
        "jp": "scx",
        "qp": "ShacheXian"
}, {
    "cName": "叶城县",
        "code": "653126",
        "py": "Yecheng Xian",
        "jp": "ycx",
        "qp": "YechengXian"
}, {
    "cName": "麦盖提县",
        "code": "653127",
        "py": "Maigaiti Xian",
        "jp": "mgtx",
        "qp": "MaigaitiXian"
}, {
    "cName": "岳普湖县",
        "code": "653128",
        "py": "Yuepuhu Xian",
        "jp": "yphx",
        "qp": "YuepuhuXian"
}, {
    "cName": "伽师县",
        "code": "653129",
        "py": "Jiashi Xian",
        "jp": "jsx",
        "qp": "JiashiXian"
}, {
    "cName": "巴楚县",
        "code": "653130",
        "py": "Bachu Xian",
        "jp": "bcx",
        "qp": "BachuXian"
}, {
    "cName": "塔什库尔干塔吉克自治县",
        "code": "653131",
        "py": "Tashiku&#39;ergan Tajike Zizhixian",
        "jp": "tskegtjkzzx",
        "qp": "TashikuerganTajikeZizhixian"
}, {
    "cName": "和田地区",
        "code": "653200",
        "py": "Hetian Diqu",
        "jp": "htdq",
        "qp": "HetianDiqu"
}, {
    "cName": "和田市",
        "code": "653201",
        "py": "Hetian Shi",
        "jp": "hts",
        "qp": "HetianShi"
}, {
    "cName": "和田县",
        "code": "653221",
        "py": "Hetian Xian",
        "jp": "htx",
        "qp": "HetianXian"
}, {
    "cName": "墨玉县",
        "code": "653222",
        "py": "Moyu Xian",
        "jp": "myx",
        "qp": "MoyuXian"
}, {
    "cName": "皮山县",
        "code": "653223",
        "py": "Pishan Xian",
        "jp": "psx",
        "qp": "PishanXian"
}, {
    "cName": "洛浦县",
        "code": "653224",
        "py": "Luopu Xian",
        "jp": "lpx",
        "qp": "LuopuXian"
}, {
    "cName": "策勒县",
        "code": "653225",
        "py": "Cele Xian",
        "jp": "clx",
        "qp": "CeleXian"
}, {
    "cName": "于田县",
        "code": "653226",
        "py": "Yutian Xian",
        "jp": "ytx",
        "qp": "YutianXian"
}, {
    "cName": "民丰县",
        "code": "653227",
        "py": "Minfeng Xian",
        "jp": "mfx",
        "qp": "MinfengXian"
}, {
    "cName": "昌吉回族自治州",
        "code": "652300",
        "py": "Changji Huizu Zizhizhou",
        "jp": "cjhzzzz",
        "qp": "ChangjiHuizuZizhizhou"
}, {
    "cName": "昌吉市",
        "code": "652301",
        "py": "Changji Shi",
        "jp": "cjs",
        "qp": "ChangjiShi"
}, {
    "cName": "阜康市",
        "code": "652302",
        "py": "Fukang Shi",
        "jp": "fks",
        "qp": "FukangShi"
}, {
    "cName": "呼图壁县",
        "code": "652323",
        "py": "Hutubi Xian",
        "jp": "htbx",
        "qp": "HutubiXian"
}, {
    "cName": "玛纳斯县",
        "code": "652324",
        "py": "Ma&#39;nasi Xian",
        "jp": "mnsx",
        "qp": "ManasiXian"
}, {
    "cName": "奇台县",
        "code": "652325",
        "py": "Qitai Xian",
        "jp": "qtx",
        "qp": "QitaiXian"
}, {
    "cName": "吉木萨尔县",
        "code": "652327",
        "py": "Jimusa&#39;er Xian",
        "jp": "jmsex",
        "qp": "JimusaerXian"
}, {
    "cName": "木垒哈萨克自治县",
        "code": "652328",
        "py": "Mulei Hasake Zizhixian",
        "jp": "mlhskzzx",
        "qp": "MuleiHasakeZizhixian"
}, {
    "cName": "博尔塔拉蒙古自治州",
        "code": "652700",
        "py": "Bo&#39;ertala Menggu Zizhizhou",
        "jp": "betlmgzzz",
        "qp": "BoertalaMengguZizhizhou"
}, {
    "cName": "博乐市",
        "code": "652701",
        "py": "Bole Shi",
        "jp": "bls",
        "qp": "BoleShi"
}, {
    "cName": "阿拉山口市",
        "code": "652702",
        "py": "Alashankou Shi",
        "jp": "alsks",
        "qp": "AlashankouShi"
}, {
    "cName": "精河县",
        "code": "652722",
        "py": "Jinghe Xian",
        "jp": "jhx",
        "qp": "JingheXian"
}, {
    "cName": "温泉县",
        "code": "652723",
        "py": "Wenquan Xian",
        "jp": "wqx",
        "qp": "WenquanXian"
}, {
    "cName": "巴音郭楞蒙古自治州",
        "code": "652800",
        "py": "Bayinguoleng Menggu Zizhizhou",
        "jp": "byglmgzzz",
        "qp": "BayinguolengMengguZizhizhou"
}, {
    "cName": "库尔勒市",
        "code": "652801",
        "py": "Ku&#39;erle Shi",
        "jp": "kels",
        "qp": "KuerleShi"
}, {
    "cName": "轮台县",
        "code": "652822",
        "py": "Luntai Xian",
        "jp": "ltx",
        "qp": "LuntaiXian"
}, {
    "cName": "尉犁县",
        "code": "652823",
        "py": "Yuli Xian",
        "jp": "ylx",
        "qp": "YuliXian"
}, {
    "cName": "若羌县",
        "code": "652824",
        "py": "Ruoqiang Xian",
        "jp": "rqx",
        "qp": "RuoqiangXian"
}, {
    "cName": "且末县",
        "code": "652825",
        "py": "Qiemo Xian",
        "jp": "qmx",
        "qp": "QiemoXian"
}, {
    "cName": "和静县",
        "code": "652827",
        "py": "Hejing Xian",
        "jp": "hjx",
        "qp": "HejingXian"
}, {
    "cName": "和硕县",
        "code": "652828",
        "py": "Heshuo Xian",
        "jp": "hsx",
        "qp": "HeshuoXian"
}, {
    "cName": "博湖县",
        "code": "652829",
        "py": "Bohu Xian",
        "jp": "bhx",
        "qp": "BohuXian"
}, {
    "cName": "焉耆回族自治县",
        "code": "652826",
        "py": "Yanqi Huizu Zizhixian",
        "jp": "yqhzzzx",
        "qp": "YanqiHuizuZizhixian"
}, {
    "cName": "克孜勒苏柯尔克孜自治州",
        "code": "653000",
        "py": "Kezilesu Ke&#39;erkezi Zizhizhou",
        "jp": "kzlskekzzzz",
        "qp": "KezilesuKeerkeziZizhizhou"
}, {
    "cName": "阿图什市",
        "code": "653001",
        "py": "Atushi Shi",
        "jp": "atss",
        "qp": "AtushiShi"
}, {
    "cName": "阿克陶县",
        "code": "653022",
        "py": "Aketao Xian",
        "jp": "aktx",
        "qp": "AketaoXian"
}, {
    "cName": "阿合奇县",
        "code": "653023",
        "py": "Aheqi Xian",
        "jp": "ahqx",
        "qp": "AheqiXian"
}, {
    "cName": "乌恰县",
        "code": "653024",
        "py": "Wuqia Xian",
        "jp": "wqx",
        "qp": "WuqiaXian"
}, {
    "cName": "伊犁哈萨克自治州☆",
        "code": "654000",
        "py": "Yili Hasake Zizhizhou",
        "jp": "ylhskzzz",
        "qp": "YilihasakeZizhizhou"
}, {
    "cName": "伊宁市",
        "code": "654002",
        "py": "Yining Shi",
        "jp": "yns",
        "qp": "YiningShi"
}, {
    "cName": "奎屯市",
        "code": "654003",
        "py": "Kuitun Shi",
        "jp": "kts",
        "qp": "KuitunShi"
}, {
    "cName": "霍尔果斯市",
        "code": "654004",
        "py": "Huo&#39;erguosi Shi",
        "jp": "hegss",
        "qp": "HuoerguosiShi"
}, {
    "cName": "伊宁县",
        "code": "654021",
        "py": "Yining Xian",
        "jp": "ynx",
        "qp": "YiningXian"
}, {
    "cName": "霍城县",
        "code": "654023",
        "py": "Huocheng Xian",
        "jp": "hcx",
        "qp": "HuochengXian"
}, {
    "cName": "巩留县",
        "code": "654024",
        "py": "Gongliu Xian",
        "jp": "glx",
        "qp": "GongliuXian"
}, {
    "cName": "新源县",
        "code": "654025",
        "py": "Xinyuan Xian",
        "jp": "xyx",
        "qp": "XinyuanXian"
}, {
    "cName": "昭苏县",
        "code": "654026",
        "py": "Zhaosu Xian",
        "jp": "zsx",
        "qp": "ZhaosuXian"
}, {
    "cName": "特克斯县",
        "code": "654027",
        "py": "Tekesi Xian",
        "jp": "tksx",
        "qp": "TekesiXian"
}, {
    "cName": "尼勒克县",
        "code": "654028",
        "py": "Nileke Xian",
        "jp": "nlkx",
        "qp": "NilekeXian"
}, {
    "cName": "察布查尔锡伯自治县",
        "code": "654022",
        "py": "Chabucha&#39;er Xibo Zizhixian",
        "jp": "cbcexbzzx",
        "qp": "ChabuchaerXiboZizhixian"
}, {
    "cName": "塔城地区",
        "code": "654200",
        "py": "Tacheng Diqu",
        "jp": "tcdq",
        "qp": "TachengDiqu"
}, {
    "cName": "塔城市",
        "code": "654201",
        "py": "Tacheng Shi",
        "jp": "tcs",
        "qp": "TachengShi"
}, {
    "cName": "乌苏市",
        "code": "654202",
        "py": "Wusu Shi",
        "jp": "wss",
        "qp": "WusuShi"
}, {
    "cName": "额敏县",
        "code": "654221",
        "py": "Emin Xian",
        "jp": "emx",
        "qp": "EminXian"
}, {
    "cName": "沙湾县",
        "code": "654223",
        "py": "Shawan Xian",
        "jp": "swx",
        "qp": "ShawanXian"
}, {
    "cName": "托里县",
        "code": "654224",
        "py": "Tuoli Xian",
        "jp": "tlx",
        "qp": "TuoliXian"
}, {
    "cName": "裕民县",
        "code": "654225",
        "py": "Yumin Xian",
        "jp": "ymx",
        "qp": "YuminXian"
}, {
    "cName": "和布克赛尔蒙古自治县",
        "code": "654226",
        "py": "Hebukesai&#39;er Menggu Zizhixian",
        "jp": "hbksemgzzx",
        "qp": "HebukesaierMengguZizhixian"
}, {
    "cName": "阿勒泰地区",
        "code": "654300",
        "py": "Aletai Diqu",
        "jp": "altdq",
        "qp": "AletaiDiqu"
}, {
    "cName": "阿勒泰市",
        "code": "654301",
        "py": "Aletai Shi",
        "jp": "alts",
        "qp": "AletaiShi"
}, {
    "cName": "布尔津县",
        "code": "654321",
        "py": "Bu&#39;erjin Xian",
        "jp": "bejx",
        "qp": "BuerjinXian"
}, {
    "cName": "富蕴县",
        "code": "654322",
        "py": "Fuyun Xian",
        "jp": "fyx",
        "qp": "FuyunXian"
}, {
    "cName": "福海县",
        "code": "654323",
        "py": "Fuhai Xian",
        "jp": "fhx",
        "qp": "FuhaiXian"
}, {
    "cName": "哈巴河县",
        "code": "654324",
        "py": "Habahe Xian",
        "jp": "hbhx",
        "qp": "HabaheXian"
}, {
    "cName": "青河县",
        "code": "654325",
        "py": "Qinghe Xian",
        "jp": "qhx",
        "qp": "QingheXian"
}, {
    "cName": "吉木乃县",
        "code": "654326",
        "py": "Jimunai Xian",
        "jp": "jmnx",
        "qp": "JimunaiXian"
}, {
    "cName": "石河子市",
        "code": "659001",
        "py": "Shihezi Shi",
        "jp": "shzs",
        "qp": "ShiheziShi"
}, {
    "cName": "阿拉尔市",
        "code": "659002",
        "py": "Ala&#39;er Shi",
        "jp": "ales",
        "qp": "AlaerShi"
}, {
    "cName": "图木舒克市",
        "code": "659003",
        "py": "Tumushuke Shi",
        "jp": "tmsks",
        "qp": "TumushukeShi"
}, {
    "cName": "五家渠市",
        "code": "659004",
        "py": "Wujiaqu Shi",
        "jp": "wjqs",
        "qp": "WujiaquShi"
}, {
    "cName": "北屯市",
        "code": "659005",
        "py": "Beitun Shi",
        "jp": "bts",
        "qp": "BeitunShi"
}, {
    "cName": "铁门关市",
        "code": "659006",
        "py": "Tiemenguan Shi",
        "jp": "tmgs",
        "qp": "TiemenguanShi"
}, {
    "cName": "双河市",
        "code": "659007",
        "py": "Shuanghe Shi",
        "jp": "shs",
        "qp": "ShuangheShi"
}, {
    "cName": "可克达拉市",
        "code": "659008",
        "py": "Kekedala Shi",
        "jp": "kkdls",
        "qp": "KekedalaShi"
}, {
    "cName": "昆玉市",
        "code": "659009",
        "py": "Kunyu Shi",
        "jp": "kys",
        "qp": "KunyuShi"
}];

let getProvince = ()=>{
    let p = [];
    for (let i = 0;i<regions.length;i++){
        if (regions[i].code.substring(2) === '0000'){
            p.push(regions[i].cName)
        }
    }
    console.log(p)
};

// getProvince();

let province = [ '北京市',
    '天津市',
    '河北省',
    '山西省',
    '内蒙古自治区',
    '辽宁省',
    '吉林省',
    '黑龙江省',
    '上海市',
    '江苏省',
    '浙江省',
    '安徽省',
    '福建省',
    '江西省',
    '山东省',
    '河南省',
    '湖北省',
    '湖南省',
    '广东省',
    '广西壮族自治区',
    '海南省',
    '重庆市',
    '四川省',
    '贵州省',
    '云南省',
    '西藏自治区',
    '陕西省',
    '甘肃省',
    '青海省',
    '宁夏回族自治区',
    '新疆维吾尔自治区' ];

let getCities = ()=>{
    let p = [];
    let sign = '';
    for (let i = 0;i<province.length;i++){
        let c = [];
        if (province[i][province[i].length-1] === '市'){
            c.push(province[i]);
        }else {
            for (let m = 0;m<regions.length;m++){
                if (regions[m].cName === province[i]){
                    sign = regions[m].code.substring(0,2);
                    break;
                }
            }
            for (let m = 0;m<regions.length;m++){
                if (regions[m].code.substring(0,2) === sign && regions[m].code.substring(2,4) !== '00' && regions[m].code.substring(4,6) === '00'){
                    c.push(regions[m].cName)
                }
            }
        }
        p.push({
            province:province[i],
            list:c
        })
    }
    console.log(p)
};

// getCities();

let cities = [ { province: '北京市', list: [ '北京市' ] },
    { province: '天津市', list: [ '天津市' ] },
    { province: '河北省',
        list:
            [ '石家庄市',
                '唐山市',
                '秦皇岛市',
                '邯郸市',
                '邢台市',
                '保定市',
                '张家口市',
                '承德市',
                '沧州市',
                '廊坊市',
                '衡水市' ] },
    { province: '山西省',
        list:
            [ '太原市',
                '大同市',
                '阳泉市',
                '长治市',
                '晋城市',
                '朔州市',
                '晋中市',
                '运城市',
                '忻州市',
                '临汾市',
                '吕梁市' ] },
    { province: '内蒙古自治区',
        list:
            [ '呼和浩特市',
                '包头市',
                '乌海市',
                '赤峰市',
                '通辽市',
                '鄂尔多斯市',
                '呼伦贝尔市',
                '巴彦淖尔市',
                '乌兰察布市',
                '兴安盟',
                '锡林郭勒盟',
                '阿拉善盟' ] },
    { province: '辽宁省',
        list:
            [ '沈阳市',
                '大连市',
                '鞍山市',
                '抚顺市',
                '本溪市',
                '丹东市',
                '锦州市',
                '营口市',
                '阜新市',
                '辽阳市',
                '盘锦市',
                '铁岭市',
                '朝阳市',
                '葫芦岛市' ] },
    { province: '吉林省',
        list: [ '长春市', '吉林市', '四平市', '辽源市', '通化市', '白山市', '松原市', '白城市', '延边朝鲜族自治州' ] },
    { province: '黑龙江省',
        list:
            [ '哈尔滨市',
                '齐齐哈尔市',
                '鸡西市',
                '鹤岗市',
                '双鸭山市',
                '大庆市',
                '伊春市',
                '佳木斯市',
                '七台河市',
                '牡丹江市',
                '黑河市',
                '绥化市',
                '大兴安岭地区' ] },
    { province: '上海市', list: [ '上海市' ] },
    { province: '江苏省',
        list:
            [ '南京市',
                '无锡市',
                '徐州市',
                '常州市',
                '苏州市',
                '南通市',
                '连云港市',
                '淮安市',
                '盐城市',
                '扬州市',
                '镇江市',
                '泰州市',
                '宿迁市' ] },
    { province: '浙江省',
        list:
            [ '杭州市',
                '宁波市',
                '温州市',
                '嘉兴市',
                '湖州市',
                '绍兴市',
                '金华市',
                '衢州市',
                '舟山市',
                '台州市',
                '丽水市' ] },
    { province: '安徽省',
        list:
            [ '合肥市',
                '芜湖市',
                '蚌埠市',
                '淮南市',
                '马鞍山市',
                '淮北市',
                '铜陵市',
                '安庆市',
                '黄山市',
                '滁州市',
                '阜阳市',
                '宿州市',
                '六安市',
                '亳州市',
                '池州市',
                '宣城市' ] },
    { province: '福建省',
        list: [ '福州市', '厦门市', '莆田市', '三明市', '泉州市', '漳州市', '南平市', '龙岩市', '宁德市' ] },
    { province: '江西省',
        list:
            [ '南昌市',
                '景德镇市',
                '萍乡市',
                '九江市',
                '新余市',
                '鹰潭市',
                '赣州市',
                '吉安市',
                '宜春市',
                '抚州市',
                '上饶市' ] },
    { province: '山东省',
        list:
            [ '济南市',
                '青岛市',
                '淄博市',
                '枣庄市',
                '东营市',
                '烟台市',
                '潍坊市',
                '济宁市',
                '泰安市',
                '威海市',
                '日照市',
                '莱芜市',
                '临沂市',
                '德州市',
                '聊城市',
                '滨州市',
                '菏泽市' ] },
    { province: '河南省',
        list:
            [ '郑州市',
                '开封市',
                '洛阳市',
                '平顶山市',
                '安阳市',
                '鹤壁市',
                '新乡市',
                '焦作市',
                '濮阳市',
                '许昌市',
                '漯河市',
                '三门峡市',
                '南阳市',
                '商丘市',
                '信阳市',
                '周口市',
                '驻马店市' ] },
    { province: '湖北省',
        list:
            [ '武汉市',
                '黄石市',
                '十堰市',
                '宜昌市',
                '襄阳市',
                '鄂州市',
                '荆门市',
                '孝感市',
                '荆州市',
                '黄冈市',
                '咸宁市',
                '随州市',
                '恩施土家族苗族自治州' ] },
    { province: '湖南省',
        list:
            [ '长沙市',
                '株洲市',
                '湘潭市',
                '衡阳市',
                '邵阳市',
                '岳阳市',
                '常德市',
                '张家界市',
                '益阳市',
                '郴州市',
                '永州市',
                '怀化市',
                '娄底市',
                '湘西土家族苗族自治州' ] },
    { province: '广东省',
        list:
            [ '广州市',
                '韶关市',
                '深圳市',
                '珠海市',
                '汕头市',
                '佛山市',
                '江门市',
                '湛江市',
                '茂名市',
                '肇庆市',
                '惠州市',
                '梅州市',
                '汕尾市',
                '河源市',
                '阳江市',
                '清远市',
                '东莞市',
                '中山市',
                '潮州市',
                '揭阳市',
                '云浮市' ] },
    { province: '广西壮族自治区',
        list:
            [ '南宁市',
                '柳州市',
                '桂林市',
                '梧州市',
                '北海市',
                '防城港市',
                '钦州市',
                '贵港市',
                '玉林市',
                '百色市',
                '贺州市',
                '河池市',
                '来宾市',
                '崇左市' ] },
    { province: '海南省', list: [ '海口市', '三亚市', '三沙市☆', '儋州市' ] },
    { province: '重庆市', list: [ '重庆市' ] },
    { province: '四川省',
        list:
            [ '成都市',
                '自贡市',
                '攀枝花市',
                '泸州市',
                '德阳市',
                '绵阳市',
                '广元市',
                '遂宁市',
                '内江市',
                '乐山市',
                '南充市',
                '眉山市',
                '宜宾市',
                '广安市',
                '达州市',
                '雅安市',
                '巴中市',
                '资阳市',
                '阿坝藏族羌族自治州',
                '甘孜藏族自治州',
                '凉山彝族自治州' ] },
    { province: '贵州省',
        list:
            [ '贵阳市',
                '六盘水市',
                '遵义市',
                '安顺市',
                '毕节市',
                '铜仁市',
                '黔西南布依族苗族自治州',
                '黔东南苗族侗族自治州',
                '黔南布依族苗族自治州' ] },
    { province: '云南省',
        list:
            [ '昆明市',
                '曲靖市',
                '玉溪市',
                '保山市',
                '昭通市',
                '丽江市',
                '普洱市',
                '临沧市',
                '楚雄彝族自治州',
                '红河哈尼族彝族自治州',
                '文山壮族苗族自治州',
                '西双版纳傣族自治州',
                '大理白族自治州',
                '德宏傣族景颇族自治州',
                '怒江傈僳族自治州',
                '迪庆藏族自治州' ] },
    { province: '西藏自治区',
        list: [ '拉萨市', '日喀则市', '昌都市', '林芝市', '山南市', '那曲市', '阿里地区' ] },
    { province: '陕西省',
        list: [ '西安市', '铜川市', '宝鸡市', '咸阳市', '渭南市', '延安市', '汉中市', '榆林市', '安康市', '商洛市' ] },
    { province: '甘肃省',
        list:
            [ '兰州市',
                '嘉峪关市',
                '金昌市',
                '白银市',
                '天水市',
                '武威市',
                '张掖市',
                '平凉市',
                '酒泉市',
                '庆阳市',
                '定西市',
                '陇南市',
                '临夏回族自治州',
                '甘南藏族自治州' ] },
    { province: '青海省',
        list:
            [ '西宁市',
                '海东市',
                '海北藏族自治州',
                '黄南藏族自治州',
                '海南藏族自治州',
                '果洛藏族自治州',
                '玉树藏族自治州',
                '海西蒙古族藏族自治州' ] },
    { province: '宁夏回族自治区',
        list: [ '银川市', '石嘴山市', '吴忠市', '固原市', '中卫市' ] },
    { province: '新疆维吾尔自治区',
        list:
            [ '乌鲁木齐市',
                '克拉玛依市',
                '吐鲁番市',
                '哈密市',
                '阿克苏地区',
                '喀什地区',
                '和田地区',
                '昌吉回族自治州',
                '博尔塔拉蒙古自治州',
                '巴音郭楞蒙古自治州',
                '克孜勒苏柯尔克孜自治州',
                '伊犁哈萨克自治州☆',
                '塔城地区',
                '阿勒泰地区' ] } ];

let city2county = '';

let getCounties = ()=>{
    let p = [];
    let sign = '';
    for (let i = 0;i<province.length;i++){
        let cityss = '';
        for (let m = 0;m<cities.length;m++){
            if (cities[m].province === province[i]){
                cityss = cities[m].list;
                break;
            }
        }
        for (let n = 0;n<cityss.length;n++){
            let c = [];
            if(cityss.length === 1){
                for (let m = 0;m<regions.length;m++){
                    if (regions[m].cName === cityss[0]){
                        sign = regions[m].code.substring(0,4);
                        sign = parseInt(sign);
                        sign++;
                        sign = String(sign);
                        break;
                    }
                }
            }else {
                for (let m = 0;m<regions.length;m++){
                    if (regions[m].cName === cityss[n]){
                        sign = regions[m].code.substring(0,4);
                        break;
                    }
                }
            }
            for (let m = 0;m<regions.length;m++){
                if (regions[m].code.substring(0,4) === sign && regions[m].code.substring(4,6) !== '00'){
                    c.push(regions[m].cName)
                }
            }
            p.push({
                city:cityss[n],
                list:c
            })
        }
    }
    city2county = p;
    // return p;
    // console.log(p)
};

getCounties();

module.exports = {
    province:()=>{
      return province;
    },
    province2city:()=>{
      return cities;
    },
    city2county:()=>{
        return city2county
    }
};