﻿/*
*滑坡页面事件专用函数;包括页面字段提取和存放;外部调用只通过Object传递;   
*/


/*
*Title:
*     滑坡类信息对象结构
*Tips:
*     1、数据提取，对象结构使用此结构，特殊字段与数据库字段对应关系在相应注释有说明
*     2、数据展示，后台传递进来的数据结构使用此结构，在数据库中读取的原始数据需要特殊格式处理的在相应注释有说明
*     3、该结构仅在测试阶段时应用，主要作用是对接此表的业务人员提供说明
*/
var LandslideDemo = {
    "项目名称": "测试调查项目",
    "图幅名": "测试图幅名",
    "图幅编号": "TL-ES100",
    "名称": "测试灾害点",
    "野外编号": "ZD-0001",
    "统一编号": "100000010001",
    "室内编号": "100000",
    "滑坡年代": "古滑坡",
    "滑坡时间年": "2014",
    "滑坡时间月": "12",
    "滑坡时间日": "31",
    "滑坡时间时": "12",
    "滑坡时间分": "11",
    "滑坡时间秒": "11",
    "省": "湖北省",
    "市": "",
    "县": "某县",
    "乡": "某乡",
    "村": "某村",
    "组": "某组",
    "地点": "蒋公中正家门口",//数据库'地点'字段
    "经度": "111-11-11",//如果数据库中是其它格式，请传递给前台时统一处理
    "纬度": "11-11-11",
    "X坐标": "",
    "Y坐标": "",
    "冠": "1101",//数据库字段名-冠
    "趾": "911",//数据库字段名-趾
    "滑坡类型": "推移式滑坡",
    "滑坡性质": "碎块石",
    "地层岩性": "黄土",
    "地层时代": "Q",
    "地层倾向": "30",//数据库字段-地层倾角
    "地层倾角": "45",//数据库字段-地层倾向
    "构造部位": "未知",
    "地震烈度": "Ⅱ",
    "微地貌": "陡崖,陡坡,缓坡,平台,",
    "地下水类型": "孔隙水,裂隙水,承压水,",
    "年均降雨量": "100",
    "日最大降雨量": "10",
    "时最大降雨量": "5",
    "洪水位": "10",
    "枯水位": "1",
    "相对河流位置": "左岸,凹岸",
    "原始坡高": "50",
    "原始坡度": "30",
    "原始坡形": "凹形",
    "斜坡结构类型": "土质斜坡,顺向斜坡",
    "控滑结构面类型1": "层理面",//对应数据库字段：控滑结构面类型1
    "控滑结构面倾向1": "30",//对应数据库字段：控滑结构面倾向1
    "控滑结构面倾角1": "45",//对应数据库字段：控滑结构面倾角1
    "控滑结构面类型2": "断层",
    "控滑结构面倾向2": "10",
    "控滑结构面倾角2": "40",
    "控滑结构面类型3": "老滑面",
    "控滑结构面倾向3": "30",
    "控滑结构面倾角3": "35",
    "控滑结构面类型4": "构造错动带",
    "控滑结构面倾向4": "30",
    "控滑结构面倾角4": "50",
    "滑坡长度": "50",
    "滑坡宽度": "45",
    "滑坡厚度": "2.5",
    "滑坡面积": "2200",
    "滑坡体积": "5000",
    "规模等级": "小型",
    "滑坡坡度": "38",//数据库字段-滑坡坡度
    "滑坡坡向": "295",//数据库字段-滑坡坡向
    "滑坡平面形态": "舌形",
    "滑坡剖面形态": "凹形",
    "滑体岩性": "黄土",
    "滑体结构": "零乱",
    "滑体碎石含量": "40",
    "滑体块度": "≥50",//取值固定有几个：≤5；5-10；10-50；≥50；字符串，传给前台时请检查是否符合，不然无法显示
    "滑床岩性": "黄土",
    "滑床时代": "Q",
    "滑床倾向": "45",//数据库字段-滑床倾向
    "滑床倾角": "50",//数据库字段-滑床倾角
    "滑面形态": "弧形",//数据库字段-滑面形态
    "滑面埋深": "3",//数据库字段-滑面埋深
    "滑面倾向": "220",//数据库字段-滑面倾向
    "滑面倾角": "38",//数据库字段-滑面倾角
    "滑面厚度": "4",//数据库字段-滑面厚度
    "滑带土名称": "粘土",//数据库字段-滑带土名称
    "滑带土性状": "未知",//数据库字段-滑带土性状
    "地下水埋深": "1",
    "地下水露头": "上升泉,下降泉,",
    "地下水补给类型": "降雨,人工,融雪,地表水,",
    "土地利用": "旱地,水田,森林,",
    "变形迹象名称1": "拉张裂缝",//数据库字段-变形迹象类
    "变形迹象部位1": "上部",
    "变形迹象特征1": "有裂缝",
    "变形迹象初现时间年1": "2014",
    "变形迹象初现时间月1": "12",
    "变形迹象初现时间日1": "11",
    "变形迹象名称2": "剪切裂缝",
    "变形迹象部位2": "上部",
    "变形迹象特征2": "有裂缝",
    "变形迹象初现时间年2": "2014",
    "变形迹象初现时间月2": "11",
    "变形迹象初现时间日2": "11",
    "变形迹象名称3": "树木歪斜",
    "变形迹象部位3": "上部",
    "变形迹象特征3": "有陡坎",
    "变形迹象初现时间年3": "2014",
    "变形迹象初现时间月3": "11",
    "变形迹象初现时间日3": "11",
    "变形迹象名称4": "建筑变形",
    "变形迹象部位4": "上部",
    "变形迹象特征4": "有裂缝",
    "变形迹象初现时间年4": "2014",
    "变形迹象初现时间月4": "11",
    "变形迹象初现时间日4": "11",
    "变形迹象名称5": "渗冒浑水",
    "变形迹象部位5": "上部",
    "变形迹象特征5": "有裂缝",
    "变形迹象初现时间年5": "2014",
    "变形迹象初现时间月5": "01",
    "变形迹象初现时间日5": "22",
    "变形迹象名称6": "剥、坠落",
    "变形迹象部位6": "上部",
    "变形迹象特征6": "有裂缝",
    "变形迹象初现时间年6": "2014",
    "变形迹象初现时间月6": "11",
    "变形迹象初现时间日6": "22",
    "变形迹象名称7": "地面隆起",
    "变形迹象部位7": "上部",
    "变形迹象特征7": "有裂缝",
    "变形迹象初现时间年7": "2014",
    "变形迹象初现时间月7": "11",
    "变形迹象初现时间日7": "23",
    "变形迹象名称8": "地面沉降",
    "变形迹象部位8": "上部",
    "变形迹象特征8": "有裂缝",
    "变形迹象初现时间年8": "2014",
    "变形迹象初现时间月8": "12",
    "变形迹象初现时间日8": "12",
    "变形活动阶段": "破坏阶段",
    "主导因素": "自然因素,综合因素,人为因素,",
    "自然诱因": "降雨,地震,洪水,",
    "地质因素": "透水层下伏隔水层,破碎风化岩/基岩接触,结构面走向与坡面平行,土体/基岩接触,",
    "地貌因素": "斜坡陡峭,坡脚遭侵蚀,超载堆积,",
    "物理因素": "风化,累进性破坏造成的抗剪强度降低,融冻,洪水冲蚀,",
    "人为因素": "削坡过陡,坡脚开挖,坡后加载,",
    "复活诱发因素": "降雨,卸荷,坡脚冲刷,坡体切割,",
    "目前稳定状态": "较稳定",//五万录入工具界面中提供了限定值：稳定，较稳定，不稳定；数据库字段如果不符，将展示不出来
    "今后变化趋势": "不稳定",
    "死亡人数": "0",
    "毁坏房屋户": "1",
    "毁坏房屋间": "2",
    "毁路": "111",
    "毁渠": "111",
    "其它危害": "未知",
    "直接损失": "11",
    "间接损失": "11",
    "灾情等级": "小型",
    "危害对象": "县城,学校,其它：,草场",
    "诱发灾害类型": "地面塌陷",
    "诱发灾害波及范围": "小",
    "诱发灾害造成损失": "1",
    "威胁房屋户": "1",
    "威胁人数": "2",
    "威胁财产": "1",
    "险情等级": "小型",
    "威胁对象": "县城,学校,其它：,草场",
    "监测建议": "定期目视检查,地面位移监测,",
    "防治建议": "群测群防,防治监测,搬迁避让,防治治理,应急排危除险,立警示牌,",
    "群测群防": "村级监测预警,",
    "防治监测": "县级监测预警,",//对应数据库字段-----防治监测
    "搬迁避让": "部分搬迁避让,",
    "防治治理": "生物工程,",//对应数据库字段-----防治治理
    "遥感点": "true",//以下几类点信息，数据库字段格式为布尔，请处理成字符串true或者false后传递给前台
    "勘查点": "false",
    "测绘点": "true",
    "防灾预案": "true",
    "隐患点": "true",
    "野外调查记录": "该点位于学校后山，应提高警惕",
    "调查负责人": "张三",
    "填表人": "李四",
    "审核人": "王五",
    "调查单位": "某地市地质环境监测院",
    "填表日期年": "2015",
    "填表日期月": "11",
    "填表日期日": "11",
    //数据库字段只存储有或没有，本表格没有提供上传控件，需要自己扩展，后面的字段同
    "平面示意图": "true",
    "剖面示意图": "true",
    "栅格素描图": "true",
    "矢量平面图": "true",
    "矢量剖面图": "true",
    "矢量素描图": "true",
    "多媒体": "true",
    "录像": "true",
    "群测人员": "",
    "村长": "",
    "电话": "",
    "滑坡情况": ""
}


/*
*Title:
*     从滑坡表格中提取内容封装为结构对象
*Tips:
*     1、参数为回调函数体，接收封装好的数据体
*Domain:
*     Public
*/
var getLandslideInfo = function (callback) {
    var tempObj = {
        "项目名称": $("#xiangmumingcheng").val(),
        "图幅名": $("#tufuming").val(),
        "图幅编号": $("#tufubianhao").val(),
        "名称": $("#mingcheng").val(),
        "野外编号": $("#yewaibianhao").val(),
        "统一编号": $("#tongyibianhao").val(),
        "室内编号": $("#shixianbianhao").val(),
        "滑坡年代": $("input[name='huaposhijianradio']:checked").val(),
        "滑坡时间年": utilGetDateElement($("#huaposhijian").val(), 0),
        "滑坡时间月": utilGetDateElement($("#huaposhijian").val(), 1),
        "滑坡时间日": utilGetDateElement($("#huaposhijian").val(), 2),
        "滑坡时间时": utilGetDateElement($("#huaposhijian").val(), 3),
        "滑坡时间分": utilGetDateElement($("#huaposhijian").val(), 4),
        "滑坡时间秒": utilGetDateElement($("#huaposhijian").val(), 5),
        "省": $("#sheng").val(),
        "市": "",
        "县": $("#shixian").val(),
        "乡": $("#xiangzhen").val(),
        "村": $("#cun").val(),
        "组": $("#zu").val(),
        "地点": $("#qita").val(),
        "经度": $("#jingdu").val(),
        "纬度": $("#weidu").val(),
        "X坐标": "",
        "Y坐标": "",
        "冠": $("#poding").val(),
        "趾": $("#pojiao").val(),
        "滑坡类型": $("input[name='huapoleixing']:checked").val(),
        "滑坡性质": $("input[name='huapoxingzhi']:checked").val(),
        "地层岩性": $("#yanxing").val(),
        "地层时代": $("#shidai").val(),
        "地层倾角": $("#chanzhuang1").val(),
        "地层倾向": $("#chanzhuang2").val(),
        "构造部位": $("#gouzaobuwei").val(),
        "地震烈度": $("#dizhenliedu").val(),
        "微地貌": utilGetCheckboxVal("weidimao"),
        "地下水类型": utilGetCheckboxVal("dixiashuileixing"),
        "年均降雨量": $("#nianjunjiangyuliang").val(),
        "日最大降雨量": $("#rizuidajiangyuliang").val(),
        "时最大降雨量": $("#shizuidajiangyuliang").val(),
        "洪水位": $("#hongshuiwei").val(),
        "枯水位": $("#kushuiwei").val(),
        "相对河流位置": $("input[name='xiepoyuheliuweizhi1']:checked").val() + "," + $("input[name='xiepoyuheliuweizhi2']:checked").val(),
        "原始坡高": $("#pogao").val(),
        "原始坡度": $("#podu").val(),
        "原始坡形": $("input[name='poxing']:checked").val(),
        "斜坡结构类型": $("input[name='xipojiegouleixing1']:checked").val() + "," + $("input[name='xipojiegouleixing2']:checked").val(),
        "控滑结构面类型1": $("#konghuamianjiegouleixing1").val(),
        "控滑结构面倾向1": $("#konghuamianjiegouchanzhuang11").val(),
        "控滑结构面倾角1": $("#konghuamianjiegouchanzhuang12").val(),
        "控滑结构面类型2": $("#konghuamianjiegouleixing2").val(),
        "控滑结构面倾向2": $("#konghuamianjiegouchanzhuang21").val(),
        "控滑结构面倾角2": $("#konghuamianjiegouchanzhuang22").val(),
        "控滑结构面类型3": $("#konghuamianjiegouleixing3").val(),
        "控滑结构面倾向3": $("#konghuamianjiegouchanzhuang31").val(),
        "控滑结构面倾角3": $("#konghuamianjiegouchanzhuang32").val(),
        "控滑结构面类型4": $("#konghuamianjiegouleixing4").val(),
        "控滑结构面倾向4": $("#konghuamianjiegouchanzhuang41").val(),
        "控滑结构面倾角4": $("#konghuamianjiegouchanzhuang42").val(),
        "滑坡长度": $("#waixingchangdu").val(),
        "滑坡宽度": $("#waixingkuandu").val(),
        "滑坡厚度": $("#waixinghoudu").val(),
        "滑坡面积": $("#waixingmianji").val(),
        "滑坡体积": $("#waixingtiji").val(),
        "规模等级": $("#waixingguimodengji").val(),
        "滑坡坡度": $("#waixingpodu").val(),
        "滑坡坡向": $("#waixingpoxiang").val(),
        "滑坡平面形态": $("input[name='pingmianxingtai']:checked").val(),
        "滑坡剖面形态": $("input[name='poumianxingtai']:checked").val(),
        "滑体岩性": $("#jiegoutezhengyanxing1").val(),
        "滑体结构": $("input[name='jiegoutezhengjiegou']:checked").val(),
        "滑体碎石含量": $("#jiegoutezhengsuishihanliang").val(),
        "滑体块度": $("input[name='jiegoutezhengkuaidu']:checked").val(),
        "滑床岩性": $("#jiegoutezhengyanxing2").val(),
        "滑床时代": $("#jiegoutezhengshidai").val(),
        "滑床倾向": $("#jiegoutezhengchanzhuang1").val(),
        "滑床倾角": $("#jiegoutezhengchanzhuang2").val(),
        "滑面形态": $("input[name='humianjihuadaixingtai']:checked").val(),
        "滑面埋深": $("#huamianjihuadaimaishen").val(),
        "滑面倾向": $("#huamianjihuadaiqingxiang").val(),
        "滑面倾角": $("#huamianjihuadaiqingjiao").val(),
        "滑面厚度": $("#huamianjihuadaihoudu").val(),
        "滑带土名称": $("input[name='humianjihuadaihuadaitumingcheng']:checked").val(),
        "滑带土性状": $("#huamianjihuadaihuadaituxingzhuang").val(),
        "地下水埋深": $("#dixiashuimaishen").val(),
        "地下水露头": utilGetCheckboxVal("dixiashuiloutou"),
        "地下水补给类型": utilGetCheckboxVal("dixiashuibujileixing"),
        "土地利用": utilGetCheckboxVal("tudishiyong"),
        "变形迹象名称1": $("#xianjinbianxingjixiangmingcheng1").val(),
        "变形迹象部位1": $("#xianjinbianxingjixiangbuwei1").val(),
        "变形迹象特征1": $("#xianjinbianxingjixiangtezheng1").val(),
        "变形迹象初现时间年1": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian1").val(), 0),
        "变形迹象初现时间月1": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian1").val(), 1),
        "变形迹象初现时间日1": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian1").val(), 2),
        "变形迹象名称2": $("#xianjinbianxingjixiangmingcheng2").val(),
        "变形迹象部位2": $("#xianjinbianxingjixiangbuwei2").val(),
        "变形迹象特征2": $("#xianjinbianxingjixiangtezheng2").val(),
        "变形迹象初现时间年2": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian2").val(), 0),
        "变形迹象初现时间月2": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian2").val(), 1),
        "变形迹象初现时间日2": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian2").val(), 2),
        "变形迹象名称3": $("#xianjinbianxingjixiangmingcheng3").val(),
        "变形迹象部位3": $("#xianjinbianxingjixiangbuwei3").val(),
        "变形迹象特征3": $("#xianjinbianxingjixiangtezheng3").val(),
        "变形迹象初现时间年3": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian3").val(), 0),
        "变形迹象初现时间月3": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian3").val(), 1),
        "变形迹象初现时间日3": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian3").val(), 2),
        "变形迹象名称4": $("#xianjinbianxingjixiangmingcheng4").val(),
        "变形迹象部位4": $("#xianjinbianxingjixiangbuwei4").val(),
        "变形迹象特征4": $("#xianjinbianxingjixiangtezheng4").val(),
        "变形迹象初现时间年4": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian4").val(), 0),
        "变形迹象初现时间月4": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian4").val(), 1),
        "变形迹象初现时间日4": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian4").val(), 2),
        "变形迹象名称5": $("#xianjinbianxingjixiangmingcheng5").val(),
        "变形迹象部位5": $("#xianjinbianxingjixiangbuwei5").val(),
        "变形迹象特征5": $("#xianjinbianxingjixiangtezheng5").val(),
        "变形迹象初现时间年5": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian5").val(), 0),
        "变形迹象初现时间月5": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian5").val(), 1),
        "变形迹象初现时间日5": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian5").val(), 2),
        "变形迹象名称6": $("#xianjinbianxingjixiangmingcheng6").val(),
        "变形迹象部位6": $("#xianjinbianxingjixiangbuwei6").val(),
        "变形迹象特征6": $("#xianjinbianxingjixiangtezheng6").val(),
        "变形迹象初现时间年6": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian6").val(), 0),
        "变形迹象初现时间月6": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian6").val(), 1),
        "变形迹象初现时间日6": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian6").val(), 2),
        "变形迹象名称7": $("#xianjinbianxingjixiangmingcheng7").val(),
        "变形迹象部位7": $("#xianjinbianxingjixiangbuwei7").val(),
        "变形迹象特征7": $("#xianjinbianxingjixiangtezheng7").val(),
        "变形迹象初现时间年7": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian7").val(), 0),
        "变形迹象初现时间月7": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian7").val(), 1),
        "变形迹象初现时间日7": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian7").val(), 2),
        "变形迹象名称8": $("#xianjinbianxingjixiangmingcheng8").val(),
        "变形迹象部位8": $("#xianjinbianxingjixiangbuwei8").val(),
        "变形迹象特征8": $("#xianjinbianxingjixiangtezheng8").val(),
        "变形迹象初现时间年8": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian8").val(), 0),
        "变形迹象初现时间月8": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian8").val(), 1),
        "变形迹象初现时间日8": utilGetDateElement($("#xianjinbianxingjixiangchuxianshijian8").val(), 2),
        "变形活动阶段": $("input[name='bianxinghuodongjieduan']:checked").val(),
        "主导因素": utilGetCheckboxVal("huapochengyinzhudaoyinsu"),
        "自然诱因": utilGetCheckboxVal("ziranyouyin"),
        "地质因素": utilGetCheckboxVal("dizhiyinsu"),
        "地貌因素": utilGetCheckboxVal("dimaoyinsu"),
        "物理因素": utilGetCheckboxVal("wuliyinsu"),
        "人为因素": utilGetCheckboxVal("renweiyinsu"),
        "复活诱发因素": utilGetCheckboxVal("fuhuoyoufayinsu"),
        "目前稳定状态": $("input[name='muqianwendingzhuangkuang']:checked").val(),
        "今后变化趋势": $("input[name='fazhanqushifenxi']:checked").val(),
        "死亡人数": $("#siwangrenshu").val(),
        "毁坏房屋户": $("#sunhuaifangwuhu").val(),
        "毁坏房屋间": $("#sunhuaifangwujian").val(),
        "毁路": $("#huilu").val(),
        "毁渠": $("#huiqu").val(),
        "其它危害": $("#qitaweihai").val(),
        "直接损失": $("#zhijiesunshi").val(),
        "间接损失": $("#jianjiesunshi").val(),
        "灾情等级": $("#zaiqingdengji").val(),
        "危害对象": utilGetCheckboxVal("weihaiduixiang") + handleWeiHaiDuiXiangQiTa("weihaiduixiang", "weihaiduixiangqita"),
        "诱发灾害类型": $("#zaihaileixing").val(),
        "诱发灾害波及范围": $("#bojifanwei").val(),
        "诱发灾害造成损失": $("#zaochengsunshi").val(),
        "威胁房屋户": $("#weixiefangwu").val(),
        "威胁人数": $("#weixierenshu").val(),
        "威胁财产": $("#weixiecaichan").val(),
        "险情等级": $("#xianqingdengji").val(),
        "威胁对象": utilGetCheckboxVal("weixieduixiang") + handleWeiHaiDuiXiangQiTa("weixieduixiang", "weixieduixiangqita"),
        "监测建议": utilGetCheckboxVal("jiancejianyi"),
        "防治建议": handleFangZhiJianYi(),
        "群测群防": utilGetCheckboxVal("quncequnfangvalue"),
        "防治监测": utilGetCheckboxVal("zhuanyejiancevalue"),
        "搬迁避让": utilGetCheckboxVal("banqianbirangvalue"),
        "防治治理": utilGetCheckboxVal("gongchengzhilivalue"),
        "遥感点": $("#yaoganjieyidian").val(),
        "勘查点": $("#kanchadian").val(),
        "测绘点": $("#cehuidian").val(),
        "防灾预案": $("#fangzaiyuandian").val(),
        "隐患点": $("#yinhuandian").val(),
        "野外调查记录": $("#yewaijiluxinxi").val(),
        "调查负责人": $("#diaochafuzeren").val(),
        "填表人": $("#tianbiaoren").val(),
        "审核人": $("#shenheren").val(),
        "填表日期年": utilGetDateElement($("#shenheriqi").val(), 0),
        "填表日期月": utilGetDateElement($("#shenheriqi").val(), 1),
        "填表日期日": utilGetDateElement($("#shenheriqi").val(), 2),
        "调查单位": $("#diaochadanwei").val(),
        //数据库字段只存储有或没有，本表格没有提供上传控件，需要自己扩展，后面的字段同
        "平面示意图": "true",
        "剖面示意图": "true",
        "栅格素描图": "true",
        "矢量平面图": "true",
        "矢量剖面图": "true",
        "矢量素描图": "true",
        "多媒体": "",
        "录像": "true",
        "群测人员": "",
        "村长": "",
        "电话": "",
        "滑坡情况": ""
    }
    //alert(tempObj.野外调查记录);
    callback(tempObj);
}


/*
*Title:
*     信息填充展示
*Description:
*     将后台处理后返回的数据结构体填充在表格内
*Domain:
*     Public
*/
function showLandslideInfo(infoObj) {
    //infoObj = LandslideDemo;
    //写入TEXT内容
    var textRes = [
        ["xiangmumingcheng", infoObj.项目名称],
        ["tufuming", infoObj.图幅名],
        ["tufubianhao", infoObj.图幅编号],
        ["mingcheng", infoObj.名称],
        ["yewaibianhao", infoObj.野外编号],
        ["tongyibianhao", infoObj.统一编号],
        ["shixianbianhao", infoObj.室内编号],
        ["huaposhijian", infoObj.滑坡时间年 + "-" + infoObj.滑坡时间月 + "-" + infoObj.滑坡时间日 + " " + infoObj.滑坡时间时 + ":" + infoObj.滑坡时间分 + ":" + infoObj.滑坡时间秒],//2014-11-11 11:11:11
        ["sheng", infoObj.省],
        ["shixian", infoObj.县],
        ["xiangzhen", infoObj.乡],
        ["cun", infoObj.村],
        ["zu", infoObj.组],
        ["qita", infoObj.地点],
        ["jingdu", infoObj.经度],
        ["weidu", infoObj.纬度],
        ["poding", infoObj.冠],
        ["pojiao", infoObj.趾],
        ["yanxing", infoObj.地层岩性],
        ["shidai", infoObj.地层时代],
        ["chanzhuang1", infoObj.地层倾角],
        ["chanzhuang2", infoObj.地层倾向],
        ["gouzaobuwei", infoObj.构造部位],
        ["dizhenliedu", infoObj.地震烈度],
        ["nianjunjiangyuliang", infoObj.年均降雨量],
        ["rizuidajiangyuliang", infoObj.日最大降雨量],
        ["shizuidajiangyuliang", infoObj.时最大降雨量],
        ["hongshuiwei", infoObj.洪水位],
        ["kushuiwei", infoObj.枯水位],
        ["pogao", infoObj.原始坡高],
        ["podu", infoObj.原始坡度],
        ["konghuamianjiegouleixing1", infoObj.控滑结构面类型1],
        ["konghuamianjiegouchanzhuang11", infoObj.控滑结构面倾向1],
        ["konghuamianjiegouchanzhuang12", infoObj.控滑结构面倾角1],
        ["konghuamianjiegouleixing2", infoObj.控滑结构面类型2],
        ["konghuamianjiegouchanzhuang21", infoObj.控滑结构面倾向2],
        ["konghuamianjiegouchanzhuang22", infoObj.控滑结构面倾角2],
        ["konghuamianjiegouleixing3", infoObj.控滑结构面类型3],
        ["konghuamianjiegouchanzhuang31", infoObj.控滑结构面倾向3],
        ["konghuamianjiegouchanzhuang32", infoObj.控滑结构面倾角3],
        ["konghuamianjiegouleixing4", infoObj.控滑结构面类型4],
        ["konghuamianjiegouchanzhuang41", infoObj.控滑结构面倾向4],
        ["konghuamianjiegouchanzhuang42", infoObj.控滑结构面倾角4],
        ["waixingchangdu", infoObj.滑坡长度],
        ["waixingkuandu", infoObj.滑坡宽度],
        ["waixinghoudu", infoObj.滑坡厚度],
        ["waixingmianji", infoObj.滑坡面积],
        ["waixingtiji", infoObj.滑坡体积],
        ["waixingguimodengji", infoObj.规模等级],
        ["waixingpodu", infoObj.滑坡坡度],
        ["waixingpoxiang", infoObj.滑坡坡向],
        ["jiegoutezhengyanxing1", infoObj.滑体岩性],
        ["jiegoutezhengsuishihanliang", infoObj.滑体碎石含量],
        ["jiegoutezhengyanxing2", infoObj.滑床岩性],
        ["jiegoutezhengshidai", infoObj.滑床时代],
        ["jiegoutezhengchanzhuang1", infoObj.滑床倾向],
        ["jiegoutezhengchanzhuang2", infoObj.滑床倾角],
        ["huamianjihuadaimaishen", infoObj.滑面埋深],
        ["huamianjihuadaiqingxiang", infoObj.滑面倾向],
        ["huamianjihuadaiqingjiao", infoObj.滑面倾角],
        ["huamianjihuadaihoudu", infoObj.滑面厚度],
        ["huamianjihuadaihuadaituxingzhuang", infoObj.滑带土性状],
        ["dixiashuimaishen", infoObj.地下水埋深],
        ["xianjinbianxingjixiangmingcheng1", infoObj.变形迹象名称1],
        ["xianjinbianxingjixiangbuwei1", infoObj.变形迹象部位1],
        ["xianjinbianxingjixiangtezheng1", infoObj.变形迹象特征1],
        ["xianjinbianxingjixiangchuxianshijian1", infoObj.变形迹象初现时间年1 + "-" + infoObj.变形迹象初现时间月1 + "-" + infoObj.变形迹象初现时间日1],
        ["xianjinbianxingjixiangmingcheng2", infoObj.变形迹象名称2],
        ["xianjinbianxingjixiangbuwei2", infoObj.变形迹象部位2],
        ["xianjinbianxingjixiangtezheng2", infoObj.变形迹象特征2],
        ["xianjinbianxingjixiangchuxianshijian2", infoObj.变形迹象初现时间年2 + "-" + infoObj.变形迹象初现时间月2 + "-" + infoObj.变形迹象初现时间日2],
        ["xianjinbianxingjixiangmingcheng3", infoObj.变形迹象名称3],
        ["xianjinbianxingjixiangbuwei3", infoObj.变形迹象部位3],
        ["xianjinbianxingjixiangtezheng3", infoObj.变形迹象特征3],
        ["xianjinbianxingjixiangchuxianshijian3", infoObj.变形迹象初现时间年3 + "-" + infoObj.变形迹象初现时间月3 + "-" + infoObj.变形迹象初现时间日3],
        ["xianjinbianxingjixiangmingcheng4", infoObj.变形迹象名称4],
        ["xianjinbianxingjixiangbuwei4", infoObj.变形迹象部位4],
        ["xianjinbianxingjixiangtezheng4", infoObj.变形迹象特征4],
        ["xianjinbianxingjixiangchuxianshijian4", infoObj.变形迹象初现时间年4 + "-" + infoObj.变形迹象初现时间月4 + "-" + infoObj.变形迹象初现时间日4],
        ["xianjinbianxingjixiangmingcheng5", infoObj.变形迹象名称5],
        ["xianjinbianxingjixiangbuwei5", infoObj.变形迹象部位5],
        ["xianjinbianxingjixiangtezheng5", infoObj.变形迹象特征5],
        ["xianjinbianxingjixiangchuxianshijian5", infoObj.变形迹象初现时间年5 + "-" + infoObj.变形迹象初现时间月5 + "-" + infoObj.变形迹象初现时间日5],
        ["xianjinbianxingjixiangmingcheng6", infoObj.变形迹象名称6],
        ["xianjinbianxingjixiangbuwei6", infoObj.变形迹象部位6],
        ["xianjinbianxingjixiangtezheng6", infoObj.变形迹象特征6],
        ["xianjinbianxingjixiangchuxianshijian6", infoObj.变形迹象初现时间年6 + "-" + infoObj.变形迹象初现时间月6 + "-" + infoObj.变形迹象初现时间日6],
        ["xianjinbianxingjixiangmingcheng7", infoObj.变形迹象名称7],
        ["xianjinbianxingjixiangbuwei7", infoObj.变形迹象部位7],
        ["xianjinbianxingjixiangtezheng7", infoObj.变形迹象特征7],
        ["xianjinbianxingjixiangchuxianshijian7", infoObj.变形迹象初现时间年7 + "-" + infoObj.变形迹象初现时间月7 + "-" + infoObj.变形迹象初现时间日7],
        ["xianjinbianxingjixiangmingcheng8", infoObj.变形迹象名称8],
        ["xianjinbianxingjixiangbuwei8", infoObj.变形迹象部位8],
        ["xianjinbianxingjixiangtezheng8", infoObj.变形迹象特征8],
        ["xianjinbianxingjixiangchuxianshijian8", infoObj.变形迹象初现时间年8 + "-" + infoObj.变形迹象初现时间月8 + "-" + infoObj.变形迹象初现时间日8],
        ["siwangrenshu", infoObj.死亡人数],
        ["sunhuaifangwuhu", infoObj.毁坏房屋户],
        ["sunhuaifangwujian", infoObj.毁坏房屋间],
        ["huilu", infoObj.毁路],
        ["huiqu", infoObj.毁渠],
        ["qitaweihai", infoObj.其它危害],
        ["zhijiesunshi", infoObj.直接损失],
        ["jianjiesunshi", infoObj.间接损失],
        ["zaiqingdengji", infoObj.灾情等级],
        ["zaihaileixing", infoObj.诱发灾害类型],
        ["bojifanwei", infoObj.诱发灾害波及范围],
        ["zaochengsunshi", infoObj.诱发灾害造成损失],
        ["weixiefangwu", infoObj.威胁房屋户],
        ["weixierenshu", infoObj.威胁人数],
        ["weixiecaichan", infoObj.威胁财产],
        ["xianqingdengji", infoObj.险情等级],
        ["yaoganjieyidian", infoObj.遥感点],
        ["kanchadian", infoObj.勘查点],
        ["cehuidian", infoObj.测绘点],
        ["fangzaiyuandian", infoObj.防灾预案],
        ["yinhuandian", infoObj.隐患点],
        ["yewaijiluxinxi", infoObj.野外调查记录],
        ["diaochafuzeren", infoObj.调查负责人],
        ["tianbiaoren", infoObj.填表人],
        ["shenheren", infoObj.审核人],
        ["shenheriqi", infoObj.填表日期年 + "-" + infoObj.填表日期月 + "-" + infoObj.填表日期日],
        ["diaochadanwei", infoObj.调查单位]
    ];
    utilWriteInputTypeOfTEXT(textRes);

    //勾选RADIO
    var radioRes = [
        ["huaposhijianradio", infoObj.滑坡年代],
        ["huapoleixing", infoObj.滑坡类型],
        ["huapoxingzhi", infoObj.滑坡性质],
        ["xiepoyuheliuweizhi1", ((infoObj.相对河流位置 == undefined || infoObj.相对河流位置 == null) ? "" : infoObj.相对河流位置.split(',')[0])],
        ["xiepoyuheliuweizhi2", ((infoObj.相对河流位置 == undefined || infoObj.相对河流位置 == null) ? "" : infoObj.相对河流位置.split(',')[1])],
        ["poxing", infoObj.原始坡形],
        ["xipojiegouleixing1", ((infoObj.斜坡结构类型 == undefined || infoObj.斜坡结构类型 == null) ? "" : infoObj.斜坡结构类型.split(',')[0])],
        ["xipojiegouleixing2", ((infoObj.斜坡结构类型 == undefined || infoObj.斜坡结构类型 == null) ? "" : infoObj.斜坡结构类型.split(',')[1])],
        ["pingmianxingtai", infoObj.滑坡平面形态],
        ["poumianxingtai", infoObj.滑坡剖面形态],
        ["jiegoutezhengjiegou", infoObj.滑体结构],
        ["jiegoutezhengkuaidu", infoObj.滑体块度],
        ["humianjihuadaixingtai", infoObj.滑面形态],
        ["humianjihuadaihuadaitumingcheng", infoObj.滑带土名称],
        ["bianxinghuodongjieduan", infoObj.变形活动阶段],
        ["muqianwendingzhuangkuang", infoObj.目前稳定状态],
        ["fazhanqushifenxi", infoObj.今后变化趋势]
    ];
    utilSelectRADIOorCHECKBOX(radioRes, 'radio');

    //勾选CHECKBOX
    var chkRes = [
        ["weidimao", infoObj.微地貌],
        ["dixiashuileixing", infoObj.地下水类型],
        ["dixiashuiloutou", infoObj.地下水露头],
        ["dixiashuibujileixing", infoObj.地下水补给类型],
        ["tudishiyong", infoObj.土地利用],
        ["huapochengyinzhudaoyinsu", infoObj.主导因素],
        ["ziranyouyin", infoObj.自然诱因],
        ["dizhiyinsu", infoObj.地质因素],
        ["dimaoyinsu", infoObj.地貌因素],
        ["wuliyinsu", infoObj.物理因素],
        ["renweiyinsu", infoObj.人为因素],
        ["fuhuoyoufayinsu", infoObj.复活诱发因素],
        ["jiancejianyi", infoObj.监测建议],
        ["quncequnfangvalue", infoObj.群测群防],
        ["zhuanyejiancevalue", infoObj.防治监测],
        ["banqianbirangvalue", infoObj.搬迁避让],
        ["gongchengzhilivalue", infoObj.防治治理]
    ];
    var handleChkResArr = [];
    for (var i = 0; i < chkRes.length; i++) {
        utilHandleCheckboxData(chkRes[i][0], chkRes[i][1], handleChkResArr);
    }
    utilSelectRADIOorCHECKBOX(handleChkResArr, 'checkbox');
    //特殊处理防治建议
    selectFangZhiJianYi(infoObj.防治建议);
    //特殊处理危害对象
    selectWeiHaiOrWeiXieDuiXiang([["weihaiduixiang", "weihaiduixiangqita", infoObj.危害对象], ["weixieduixiang", "weixieduixiangqita", infoObj.威胁对象]]);
}



function attachEvents() {

    //拍照
    $("#zhaopianIn").click(function () {
        top.AppUtil.capturePhoto($.noop);
    });

    //选择文件
    $("#zhaopianOut").click(function () {
        top.AppUtil.pickSinglePhoto(function (url) {
            url && $("#zhaopianshow").attr("src", url);
        });
    });

    //删除图片
    $("#zhaopianDel").click(function() {
        $("#zhaopianshow").removeAttr("src");
    });

    //栅格平面图
    $("#shangepingmiantuIn").click(function () {
        top.disasterPage.btnId = "shangepingmiantuIn";
        top.disasterPage.showRightPanel("/html/paint/paint.html");
    });
    //栅格剖面图
    $("#shangepoumiantuIn").click(function () {
        top.disasterPage.btnId = "shangepoumiantuIn";
        top.disasterPage.showRightPanel("/html/paint/paint.html");
    });
    //栅格素描图
    $("#shangesumiaotuIn").click(function () {
        top.disasterPage.btnId = "shangesumiaotuIn";
        top.disasterPage.showRightPanel("/html/paint/paint.html");
    });
    //矢量平面图
    $("#shiliangpingmiantuIn").click(function () {
        top.disasterPage.btnId = "shiliangpingmiantuIn";
        top.disasterPage.showRightPanel("/html/paint/paint.html");
    });
    //矢量剖面图
    $("#shiliangpoumiantuIn").click(function () {
        top.disasterPage.btnId = "shiliangpoumiantuIn";
        top.disasterPage.showRightPanel("/html/paint/paint.html");
    });
    //矢量素描图
    $("#shiliangsumiaotuIn").click(function () {
        top.disasterPage.btnId = "shiliangsumiaotuIn";
        top.disasterPage.showRightPanel("/html/paint/paint.html");
    });

}

function showPaintImage(id, img) {
    switch (id) {
        case "shangepingmiantuIn":
            $("#shangepingmiantushow").attr("src", img);
            break;
        case "shangepoumiantuIn":
            $("#shangepoumiantushow").attr("src", img);
            break;
        case "shangesumiaotuIn":
            $("#shangesumiaotushow").attr("src", img);
            break;
        case "shiliangpingmiantuIn":
            $("#shiliangpingmiantushow").attr("src", img);
            break;
        case "shiliangpoumiantuIn":
            $("#shiliangpoumiantushow").attr("src", img);
            break;
        case "shiliangsumiaotuIn":
            $("#shiliangsumiaotushow").attr("src", img);
            break;
        default:
    }

}