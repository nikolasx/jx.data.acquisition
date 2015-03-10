﻿/*
*Title:
*     崩塌类信息对象结构
*Tips:
*     1、数据提取，对象结构使用此结构，特殊字段与数据库字段对应关系在相应注释有说明
*     2、数据展示，后台传递进来的数据结构使用此结构，在数据库中读取的原始数据需要特殊格式处理的在相应注释有说明
*     3、该结构仅在测试阶段时应用，主要作用是对接此表的业务人员提供说明
*/

var collapseDemo = {
    "项目名称": "新疆伊犁地区地质灾害详细调查",
    "图幅名": "苏勒阿尔玛堤",
    "图幅编号": "L44E023014",
    "统一编号": "654002020024",
    "名称": "巴彦岱镇崩塌",
    "野外编号": "23-24",
    "市县编号": "654002",
    "斜坡类型": "自然土质",
    "崩塌类型": "倾倒式",
    "地理位置省": "新疆维吾尔自治区",
    "地理位置市": "伊犁哈萨克自治州",
    "地理位置县": "伊宁市",
    "地理位置镇": "巴彦岱镇",
    "地理位置村": "某村",
    "地理位置其它": "21组",//数据库‘组’字段
    "经度": "81-16-54",
    "纬度": "44-11-46",
    "坡顶": "1106",
    "坡脚": "1102",
    "地层岩性": "黄土",
    "地层时代": "Q",
    "地层产状1": "30",//数据库字段：地层倾向
    "地层产状2": "45",//数据库字段：地层倾角
    "地层构造部位": "中上部",
    "地层地震烈度": "Ⅶ",
    "微地貌": "陡崖,陡坡,缓坡,平台,",
    "地下水类型": "孔隙水,裂隙水,岩溶水,潜水,承压水,上层滞水,",
    "降雨量年均": "500",
    "降雨量日最大": "20",
    "降雨量时最大": "5",
    "洪水位": "10",
    "枯水位": "1",
    "斜坡与河流位置": "左岸,凹岸",
    "土地利用": "草地,森林,建筑,",
    "分布高程": "745",
    "坡高": "5",
    "坡长": "8",
    "坡宽": "300",
    "厚度": "3",
    "体积": "7000",
    "规模等级": "小型",
    "坡度": "85",
    "坡向": "310",
    "岩体结构类型": "块裂,",
    "岩体厚度": "10",
    "岩体裂隙组数": "3",
    "岩体块度长": "3",//在数据库中，块度长宽高为一个字段‘岩体块度’存储，请自行处理
    "岩体块度宽": "3",
    "岩体块度高": "3",
    "斜坡结构类型": "土质斜坡,平缓层状斜坡,",
    "控制面结构1类型": "层理面",
    "控制面结构1产状1": "30",
    "控制面结构1产状2": "45",
    "控制面结构1长度": "12",
    "控制面结构1间距": "10",
    "控制面结构2类型": "层内错动带",
    "控制面结构2产状1": "30",
    "控制面结构2产状2": "45",
    "控制面结构2长度": "12",
    "控制面结构2间距": "10",
    "控制面结构3类型": "断层",
    "控制面结构3产状1": "30",
    "控制面结构3产状2": "45",
    "控制面结构3长度": "12",
    "控制面结构3间距": "10",
    "全风化带深度": "1",
    "卸荷裂缝深度": "1",
    "土地名称": "黄土",
    "土地密实度": "中",
    "土地稠度": "1",
    "下伏基岩岩性": "未知",
    "下伏基岩时代": "Q",
    "下伏基岩倾向": "30",
    "下伏基岩倾角": "40",
    "下伏基岩埋深": "3",
    "地下水埋深": "3",
    "地下水露头": "上升泉,下降泉,湿地,",
    "地下水补给类型": "降雨,地下水,地表水,人工,",
    "形成时间": "2014-12-12",//在数据库中，该值分为‘年，月，日’三个字段存储，请自行处理
    "发生崩塌次数": "3",
    "变形发育史1序号": "1",
    "变形发育史1时间": "2010-12-12 11:11:11",//在数据库中，该值分为‘年，月，日，时，分，秒’6个字段存储，请自行处理
    "变形发育史1规模": "3000",
    "变形发育史1诱发因素": "降雨,开挖,",
    "变形发育史1死亡人数": "0",
    "变形发育史1直接损失": "3",
    "变形发育史2序号": "2",
    "变形发育史2时间": "2012-12-11 10:12:11",//在数据库中，该值分为‘年，月，日，时，分，秒’6个字段存储，请自行处理
    "变形发育史2规模": "4000",
    "变形发育史2诱发因素": "开挖,地震,",
    "变形发育史2死亡人数": "0",
    "变形发育史2直接损失": "3",
    "变形发育史3序号": "3",
    "变形发育史3时间": "2014-08-11 10:09:01",//在数据库中，该值分为‘年，月，日，时，分，秒’6个字段存储，请自行处理
    "变形发育史3规模": "2000",
    "变形发育史3诱发因素": "地震,河流冲刷,其它,",
    "变形发育史3死亡人数": "0",
    "变形发育史3直接损失": "3",
    "变形迹象1名称": "剥、坠落",
    "变形迹象1部位": "坡体",
    "变形迹象1特征": "位于岸边",
    "变形迹象1初现时间": "2011-11-12",
    "变形迹象2名称": "拉张裂缝",
    "变形迹象2部位": "坡体",
    "变形迹象2特征": "位于岸边",
    "变形迹象2初现时间": "2011-12-11",
    "变形迹象3名称": "剪切裂缝",
    "变形迹象3部位": "坡体",
    "变形迹象3特征": "位于岸边",
    "变形迹象3初现时间": "2012-11-11",
    "变形迹象4名称": "地面隆起",
    "变形迹象4部位": "坡体",
    "变形迹象4特征": "位于岸边",
    "变形迹象4初现时间": "2012-11-22",
    "变形迹象5名称": "地面沉降",
    "变形迹象5部位": "坡体",
    "变形迹象5特征": "位于岸边",
    "变形迹象5初现时间": "2013-11-11",
    "变形迹象6名称": "树木歪斜",
    "变形迹象6部位": "坡体",
    "变形迹象6特征": "位于岸边",
    "变形迹象6初现时间": "2013-12-12",
    "变形迹象7名称": "建筑变形",
    "变形迹象7部位": "坡体",
    "变形迹象7特征": "位于岸边",
    "变形迹象7初现时间": "2014-11-11",
    "变形迹象8名称": "渗冒浑水",
    "变形迹象8部位": "坡体",
    "变形迹象8特征": "位于岸边",
    "变形迹象8初现时间": "2014-12-11",
    "可能失稳因素": "降雨,地震,卸荷,坡脚浸润,",
    "目前稳定状况": "不稳定",
    "发展趋势分析": "较稳定",
    "堆积体长度": "1",
    "堆积体宽度": "1",
    "堆积体厚度": "1",
    "堆积体体积": "1",
    "堆积体坡度": "1",
    "堆积体坡向": "1",
    "堆积体坡面形态": "凹",
    "堆积体可能失稳因素": "降雨,风化,卸荷,动水压力,",
    "堆积体目前稳定状况": "不稳定",
    "堆积体发展趋势": "较稳定",
    "死亡人数": "0",
    "损坏房屋户": "1",
    "损坏房屋间": "1",
    "毁路": "1",
    "毁渠": "1",
    "其它危害": "毁坏草场",
    "直接损失": "1",
    "间接损失": "1",
    "灾情等级": "小型",
    "危害对象": "矿山,农田,居民点,其它：,草场",
    "诱发灾害灾害类型": "泥石流",
    "诱发灾害波及范围": "100",
    "诱发灾害造成损失": "1",
    "威胁房屋户": "",
    "威胁人口": "",
    "威胁财产": "",
    "险情等级": "",
    "威胁对象": "矿山,农田,居民点,其它：,草场",
    "监测建议": "定期目视检查,地面位移监测,",
    "监测建议": "定期目视检查,地面位移监测,",
    "防治建议": "群测群防,专业监测,搬迁避让,工程治理,应急排危除险,立警示牌,",
    "群测群防": "村级监测预警,",
    "专业监测": "县级监测预警,",//对应数据库字段-----防治监测
    "搬迁避让": "部分搬迁避让,",
    "工程治理": "生物工程,",//对应数据库字段-----防治治理
    "遥感解译点": "true",//以下几类点信息，数据库字段格式为布尔，请处理成字符串true或者false后传递给前台
    "勘察点": "false",
    "测绘点": "true",
    "防灾预案群测群防点": "true",
    "隐患点": "true",
    "野外记录信息": "该点位于学校后山，应提高警惕",
    "调查负责人": "张三",
    "填表人": "李四",
    "审核人": "王五",
    "填表日期": "2015-01-11",//数据库中使用年、月、日三个字段存储，上传OBJ时请自行分割，后台取数据传递给前台OBJ中处理成yyyy-MM-dd格式
    "调查单位": "某地市地质环境监测院",
    //数据库字段只存储有或没有，本表格没有提供上传控件，需要自己扩展，后面的字段同
    "栅格平面图": "true",
    "栅格剖面图": "true",
    "栅格素面图": "true",
    "矢量平面图": "true",
    "矢量剖面图": "true",
    "矢量素面图": "true",
    "照片": "true",
    "录像": "true"
}


/*
*Title:
*     从崩塌表格中提取内容封装为结构对象
*Tips:
*     1、参数为回调函数体，接收封装好的数据体
*Domain:
*     Public
*/

var getCollapseInfo = function (callback) {
    var tempObj = {
        "项目名称": $("#xiangmumingcheng").val(),
        "图幅名": $("#tufuming").val(),
        "图幅编号": $("#tufubianhao").val(),
        "统一编号": $("#tongyibianhao").val(),
        "名称": $("#mingcheng").val(),
        "野外编号": $("#yewaibianhao").val(),
        "市县编号": $("#").val(),
        "斜坡类型": "自然土质",
        "崩塌类型": "倾倒式",
        "地理位置省": $("#").val(),
        "地理位置市": $("#").val(),
        "地理位置县": $("#").val(),
        "地理位置镇": $("#").val(),
        "地理位置村": $("#").val(),
        "地理位置其它": $("#").val(),//数据库‘组’字段
        "经度": $("#").val(),
        "纬度": $("#").val(),
        "坡顶": $("#").val(),
        "坡脚": $("#").val(),
        "地层岩性": $("#").val(),
        "地层时代": $("#").val(),
        "地层产状1": $("#").val(),//数据库字段：地层倾向
        "地层产状2": $("#").val(),//数据库字段：地层倾角
        "地层构造部位": $("#").val(),
        "地层地震烈度": "Ⅶ",
        "微地貌": "陡崖,陡坡,缓坡,平台,",
        "地下水类型": "孔隙水,裂隙水,岩溶水,潜水,承压水,上层滞水,",
        "降雨量年均": $("#").val(),
        "降雨量日最大": $("#").val(),
        "降雨量时最大": $("#").val(),
        "洪水位": $("#").val(),
        "枯水位": $("#").val(),
        "斜坡与河流位置": "左岸,凹岸",
        "土地利用": "草地,森林,建筑,",
        "分布高程": $("#").val(),
        "坡高": $("#").val(),
        "坡长": $("#").val(),
        "坡宽": $("#").val(),
        "厚度": $("#").val(),
        "体积": $("#").val(),
        "规模等级": $("#").val(),
        "坡度": $("#").val(),
        "坡向": $("#").val(),
        "岩体结构类型": "块裂,",
        "岩体厚度": $("#").val(),
        "岩体裂隙组数": $("#").val(),
        "岩体块度长": $("#").val(),//在数据库中，块度长宽高为一个字段‘岩体块度’存储，请自行处理
        "岩体块度宽": $("#").val(),
        "岩体块度高": $("#").val(),
        "斜坡结构类型": "土质斜坡,平缓层状斜坡,",
        "控制面结构1类型": "层理面",
        "控制面结构1产状1": $("#").val(),
        "控制面结构1产状2": $("#").val(),
        "控制面结构1长度": $("#").val(),
        "控制面结构1间距": $("#").val(),
        "控制面结构2类型": "层内错动带",
        "控制面结构2产状1": $("#").val(),
        "控制面结构2产状2": $("#").val(),
        "控制面结构2长度": $("#").val(),
        "控制面结构2间距": $("#").val(),
        "控制面结构3类型": "断层",
        "控制面结构3产状1": $("#").val(),
        "控制面结构3产状2": $("#").val(),
        "控制面结构3长度": $("#").val(),
        "控制面结构3间距": $("#").val(),
        "全风化带深度": $("#").val(),
        "卸荷裂缝深度": $("#").val(),
        "土地名称": $("#").val(),
        "土地密实度": $("#").val(),
        "土地稠度": $("#").val(),
        "下伏基岩岩性": $("#").val(),
        "下伏基岩时代": $("#").val(),
        "下伏基岩倾向": $("#").val(),
        "下伏基岩倾角": $("#").val(),
        "下伏基岩埋深": $("#").val(),
        "地下水埋深": $("#").val(),
        "地下水露头": "上升泉,下降泉,湿地,",
        "地下水补给类型": "降雨,地下水,地表水,人工,",
        "形成时间": $("#").val(),//在数据库中，该值分为‘年，月，日’三个字段存储，请自行处理
        "发生崩塌次数": $("#").val(),
        "变形发育史1序号": $("#").val(),
        "变形发育史1时间": $("#").val(),//在数据库中，该值分为‘年，月，日，时，分，秒’6个字段存储，请自行处理
        "变形发育史1规模": $("#").val(),
        "变形发育史1诱发因素": "降雨,开挖,",
        "变形发育史1死亡人数": $("#").val(),
        "变形发育史1直接损失": $("#").val(),
        "变形发育史2序号": $("#").val(),
        "变形发育史2时间": $("#").val(),//在数据库中，该值分为‘年，月，日，时，分，秒’6个字段存储，请自行处理
        "变形发育史2规模": $("#").val(),
        "变形发育史2诱发因素": "开挖,地震,",
        "变形发育史2死亡人数": $("#").val(),
        "变形发育史2直接损失": $("#").val(),
        "变形发育史3序号": $("#").val(),
        "变形发育史3时间": $("#").val(),//在数据库中，该值分为‘年，月，日，时，分，秒’6个字段存储，请自行处理
        "变形发育史3规模": $("#").val(),
        "变形发育史3诱发因素": "地震,河流冲刷,其它,",
        "变形发育史3死亡人数": $("#").val(),
        "变形发育史3直接损失": $("#").val(),
        "变形迹象1名称": "剥、坠落",
        "变形迹象1部位": $("#").val(),
        "变形迹象1特征": $("#").val(),
        "变形迹象1初现时间": $("#").val(),
        "变形迹象2名称": "拉张裂缝",
        "变形迹象2部位": $("#").val(),
        "变形迹象2特征": $("#").val(),
        "变形迹象2初现时间": $("#").val(),
        "变形迹象3名称": "剪切裂缝",
        "变形迹象3部位": $("#").val(),
        "变形迹象3特征": $("#").val(),
        "变形迹象3初现时间": $("#").val(),
        "变形迹象4名称": "地面隆起",
        "变形迹象4部位": $("#").val(),
        "变形迹象4特征": $("#").val(),
        "变形迹象4初现时间": $("#").val(),
        "变形迹象5名称": "地面沉降",
        "变形迹象5部位": $("#").val(),
        "变形迹象5特征": $("#").val(),
        "变形迹象5初现时间": $("#").val(),
        "变形迹象6名称": "树木歪斜",
        "变形迹象6部位": $("#").val(),
        "变形迹象6特征": $("#").val(),
        "变形迹象6初现时间": $("#").val(),
        "变形迹象7名称": "建筑变形",
        "变形迹象7部位": $("#").val(),
        "变形迹象7特征": $("#").val(),
        "变形迹象7初现时间": $("#").val(),
        "变形迹象8名称": "渗冒浑水",
        "变形迹象8部位": $("#").val(),
        "变形迹象8特征": $("#").val(),
        "变形迹象8初现时间": $("#").val(),
        "可能失稳因素": "降雨,地震,卸荷,坡脚浸润,",
        "目前稳定状况": "不稳定",
        "发展趋势分析": "较稳定",
        "堆积体长度": $("#").val(),
        "堆积体宽度": $("#").val(),
        "堆积体厚度": $("#").val(),
        "堆积体体积": $("#").val(),
        "堆积体坡度": $("#").val(),
        "堆积体坡向": $("#").val(),
        "堆积体坡面形态": "凹",
        "堆积体可能失稳因素": "降雨,风化,卸荷,动水压力,",
        "堆积体目前稳定状况": "不稳定",
        "堆积体发展趋势": "较稳定",
        "死亡人数": $("#").val(),
        "损坏房屋户": $("#").val(),
        "损坏房屋间": $("#").val(),
        "毁路": $("#").val(),
        "毁渠": $("#").val(),
        "其它危害": $("#").val(),
        "直接损失": $("#").val(),
        "间接损失": $("#").val(),
        "灾情等级": $("#").val(),
        "危害对象": "矿山,农田,居民点,其它：,草场",
        "诱发灾害灾害类型": $("#").val(),
        "诱发灾害波及范围": $("#").val(),
        "诱发灾害造成损失": $("#").val(),
        "威胁房屋户": $("#").val(),
        "威胁人口": $("#").val(),
        "威胁财产": $("#").val(),
        "险情等级": $("#").val(),
        "威胁对象": "矿山,农田,居民点,其它：,草场",
        "监测建议": "定期目视检查,地面位移监测,",
        "监测建议": "定期目视检查,地面位移监测,",
        "防治建议": "群测群防,专业监测,搬迁避让,工程治理,应急排危除险,立警示牌,",
        "群测群防": "村级监测预警,",
        "专业监测": "县级监测预警,",//对应数据库字段-----防治监测
        "搬迁避让": "部分搬迁避让,",
        "工程治理": "生物工程,",//对应数据库字段-----防治治理
        "遥感解译点": "true",//以下几类点信息，数据库字段格式为布尔，请处理成字符串true或者false后传递给前台
        "勘察点": "false",
        "测绘点": "true",
        "防灾预案群测群防点": "true",
        "隐患点": "true",
        "野外记录信息": $("#").val(),
        "调查负责人": $("#").val(),
        "填表人": $("#").val(),
        "审核人": $("#").val(),
        "填表日期": $("#").val(),//数据库中使用年、月、日三个字段存储，上传OBJ时请自行分割，后台取数据传递给前台OBJ中处理成yyyy-MM-dd格式
        "调查单位": $("#").val(),
        //数据库字段只存储有或没有，本表格没有提供上传控件，需要自己扩展，后面的字段同
        "栅格平面图": "true",
        "栅格剖面图": "true",
        "栅格素面图": "true",
        "矢量平面图": "true",
        "矢量剖面图": "true",
        "矢量素面图": "true",
        "照片": "true",
        "录像": "true"
    };
}