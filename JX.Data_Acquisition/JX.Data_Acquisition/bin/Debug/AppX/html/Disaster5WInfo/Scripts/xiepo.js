/*
*Title:
*     斜坡类信息对象结构
*Tips:
*     1、数据提取，对象结构使用此结构，特殊字段与数据库字段对应关系在相应注释有说明
*     2、数据展示，后台传递进来的数据结构使用此结构，在数据库中读取的原始数据需要特殊格式处理的在相应注释有说明
*     3、该结构仅在测试阶段时应用，主要作用是对接此表的业务人员提供说明
*/
var SlopeDemo = {
    "项目名称": "测试调查项目",
    "图幅名": "测试图幅名",
    "图幅编号": "TL-ES100",
    "名称": "测试灾害点",
    "野外编号": "ZD-0001",
    "统一编号": "100000010001",
    "室内编号": "100000",
    "县市编号": "",
    "省": "湖北省",
    "市": "",
    "县": "某县",
    "乡": "某乡",
    "村": "某村",
    "组": "某组",
    "地点": "蒋公中正家门口",
    "X坐标": "",
    "Y坐标": "",
    "经度": "111-11-11",
    "纬度": "11-11-11",
    "坡顶标高": "1101",//数据库字段名-冠
    "坡脚标高": "911",//数据库字段名-趾
    "斜坡类型": "自然土质",
    "斜坡变形趋势": "滑坡",
    "地层岩性": "黄土",
    "地层时代": "Q",
    "地层倾向": "30",//地层倾向
    "地层倾角": "45",//地层倾角
    "构造部位": "中上部",
    "地震烈度": "Ⅰ",
    "微地貌": "陡崖,陡坡,缓坡,平台,",
    "地下水类型": "孔隙水,潜水,裂隙水,承压水,",
    "年均降雨量": "600",
    "日最大降雨": "0",
    "时最大降雨": "0",
    "洪水位": "0",
    "枯水位": "0",
    "相对河流位置": "左岸,凹岸",
    "土地利用": "耕地,森林,草地,建筑,",
    "最大坡高": "60",
    "最大坡长": "120",
    "最大坡宽": "20",
    "最大厚度": "1",
    "预测体积": "13000",
    "预测规模等级": "小型",
    "平均坡度": "30",//平均坡度
    "总体坡向": "290",//总体坡向
    "坡面形态": "凸形",
    "岩体结构类型": "整体块状结构",
    "岩体厚度": "1",
    "岩体裂隙组数": "3",
    "岩体块度": "2×3×3",
    "斜坡结构类型": "土质斜坡,变质岩斜坡",
    "控制面结构类型1": "层理面",
    "控制面结构倾向1": "30",//控滑面结构倾向
    "控制面结构倾角1": "45",//控滑面结构倾角
    "控制面结构长度1": "10",
    "控制面结构间距1": "10",
    "控制面结构类型2": "片理或劈理面",
    "控制面结构倾向2": "30",
    "控制面结构倾角2": "40",
    "控制面结构长度2": "10",
    "控制面结构间距2": "10",
    "控制面结构类型3": "层内错动带",
    "控制面结构倾向3": "20",
    "控制面结构倾角3": "40",
    "控制面结构长度3": "10",
    "控制面结构间距3": "10",
    "全风化带深度": "20",
    "卸荷裂缝深度": "20",
    "土体名称": "黄土",
    "土体密实度": "中",
    "土体稠度": "未知",
    "下伏基岩岩性": "黄土",
    "下伏基岩时代": "R",
    "下伏基岩倾向": "30",
    "下伏基岩倾角": "45",
    "下伏基岩埋深": "10",
    "地下水埋深": "10",
    "地下水露头": "上升泉,湿地,下降泉,",
    "地下水补给类型": "降雨,地表水,融雪,人工,",
    "变形迹象名称1": "拉张裂缝",
    "变形迹象部位1": "上部",
    "变形迹象特征1": "有小裂缝",
    "变形迹象初现时间年1": "2012",
    "变形迹象初现时间月1": "11",
    "变形迹象初现时间日1": "11",
    "变形迹象名称2": "剪切裂缝",
    "变形迹象部位2": "上部",
    "变形迹象特征2": "有裂缝群",
    "变形迹象初现时间年2": "2012",
    "变形迹象初现时间月2": "11",
    "变形迹象初现时间日2": "11",
    "变形迹象名称3": "地面隆起",
    "变形迹象部位3": "上部",
    "变形迹象特征3": "未知",
    "变形迹象初现时间年3": "2012",
    "变形迹象初现时间月3": "11",
    "变形迹象初现时间日3": "11",
    "变形迹象名称4": "地面沉降",
    "变形迹象部位4": "上部",
    "变形迹象特征4": "未知",
    "变形迹象初现时间年4": "2012",
    "变形迹象初现时间月4": "11",
    "变形迹象初现时间日4": "11",
    "变形迹象名称5": "剥、坠落",
    "变形迹象部位5": "上部",
    "变形迹象特征5": "未知",
    "变形迹象初现时间年5": "2012",
    "变形迹象初现时间月5": "11",
    "变形迹象初现时间日5": "11",
    "变形迹象名称6": "树木歪斜",
    "变形迹象部位6": "上部",
    "变形迹象特征6": "未知",
    "变形迹象初现时间年6": "2012",
    "变形迹象初现时间月6": "11",
    "变形迹象初现时间日6": "11",
    "变形迹象名称7": "建筑变形",
    "变形迹象部位7": "上部",
    "变形迹象特征7": "未知",
    "变形迹象初现时间年7": "2012",
    "变形迹象初现时间月7": "11",
    "变形迹象初现时间日7": "11",
    "变形迹象名称8": "渗冒浑水",
    "变形迹象部位8": "上部",
    "变形迹象特征8": "未知",
    "变形迹象初现时间年8": "2012",
    "变形迹象初现时间月8": "11",
    "变形迹象初现时间日8": "11",
    "可能失稳因素": "降雨,地震,人工加载,开挖坡脚,坡脚冲刷,坡体切割,风化,卸荷,动水压力,爆破振动,坡脚浸润,",
    "目前稳定状态": "较稳定",
    "今后变化趋势": "不稳定",
    "毁坏房屋户": "1",
    "毁坏房屋间": "1",
    "毁路": "11",
    "毁渠": "11",
    "其它危害": "无",
    "直接损失": "1",
    "灾情等级": "小型",
    "威胁房屋户": "1",
    "威胁人口": "1",
    "威胁财产": "1",
    "险情等级": "小型",
    "威胁对象": "县城,学校,其它：,草场",
    "监测建议": "定期目视检查,地面位移监测,",
    "防治建议": "群测群防,防治监测,搬迁避让,防治治理,应急排危除险,立警示牌,",
    "群测群防": "村级监测预警,",
    "防治监测": "县级监测预警,",
    "搬迁避让": "部分搬迁避让,",
    "防治治理": "生物工程,",
    "群测人员": "",
    "遥感解译点": "true",
    "勘查点": "true",
    "测绘点": "true",
    "村长": "",
    "电话": "",
    "防灾预案": "true",
    "隐患点": "true",
    "野外记录信息": "该点附近有学校，请定期巡视",
    "调查负责人": "艾瑞克·李",
    "填表人": "斯皮尔伯格",
    "审核人": "张艺谋",
    "填表日期年": "",
    "填表日期月": "",
    "填表日期日": "",
    "调查单位": "中国国家调查局",
    "平面示意图": "true",
    "剖面示意图": "true",
    "矢量平面图": "true",
    "矢量剖面图": "true",
    "多媒体": "true",
    "录像": "true"
}

/*
*Title:
*     从不稳定斜坡表格中提取内容封装为结构对象
*Tips:
*     1、参数为回调函数体，接收封装好的数据体
*Domain:
*     Public
*/
var getSlopeInfo = function (callback) {
    var tempObj = {
        "项目名称": $("#xiangmumingcheng").val(),
        "图幅名": $("#tufuming").val(),
        "图幅编号": $("#tufubianhao").val(),
        "名称": $("#mingcheng").val(),
        "野外编号": $("#yewaibianhao").val(),
        "统一编号": $("#tongyibianhao").val(),
        "室内编号": $("#shixianbianhao").val(),
        "省": $("#sheng").val(),
        "市": "",
        "县": $("#shixian").val(),
        "乡": $("#xiang").val(),
        "村": $("#cun").val(),
        "组": $("#zu").val(),
        "地点": $("#qita").val(),
        "X坐标": "",
        "Y坐标": "",
        "经度": $("#jingdu").val(),
        "纬度": $("#weidu").val(),
        "坡顶标高": $("#poding").val(),
        "坡脚标高": $("#pojiao").val(),
        "斜坡类型": $("input[name='xiepoleixing']:checked").val(),
        "斜坡变形趋势": $("input[name='xipobianxingqushi']:checked").val(),
        "地层岩性": $("#yanxing").val(),
        "地层时代": $("#shidai").val(),
        "地层倾向": $("#chanzhuang1").val(),
        "地层倾角": $("#chanzhuang2").val(),
        "构造部位": $("#gouzaobuwei").val(),
        "地震烈度": $("#dizhenliedu").val(),
        "微地貌": utilGetCheckboxVal("weidimao"),
        "地下水类型": utilGetCheckboxVal("dixiashuileixing"),
        "年均降雨量": $("#nianjunjiangyuliang").val(),
        "日最大降雨": $("#rizuidajiangyuliang").val(),
        "时最大降雨": $("#shizuidajiangyuliang").val(),
        "洪水位": $("#hongshuiwei").val(),
        "枯水位": $("#kushuiwei").val(),
        "相对河流位置": $("input[name='xiepoyuheliuweizhi1']:checked").val() + "," + $("input[name='xiepoyuheliuweizhi2']:checked").val(),
        "土地利用": utilGetCheckboxVal("tudiliyong"),
        "最大坡高": $("#waixingpogao").val(),
        "最大坡长": $("#waixingpochang").val(),
        "最大坡宽": $("#waixingpokuan").val(),
        "最大厚度": $("#waixinghoudu").val(),
        "预测体积": $("#waixingyucetiji").val(),
        "预测规模等级": $("#waixingyuceguimodengji").val(),
        "平均坡度": $("#waixingpodu").val(),
        "总体坡向": $("#waixingpoxiang").val(),
        "坡面形态": $("input[name='pomianxingtai']:checked").val(),
        "岩体结构类型": $("#yantijiegouleixing").val(),
        "岩体厚度": $("#yantihoudu").val(),
        "岩体裂隙组数": $("#yantiliexizushu").val(),
        "岩体块度": $("#yantikuaiduchang").val() + "×" + $("#yantikuaidukuan").val() + "×" + $("#yantikuaidugao").val(),
        "斜坡结构类型": $("input[name='xipojiegouleixing1']:checked").val() + "," + $("input[name='xipojiegouleixing2']:checked").val(),
        "控制面结构类型1": $("#konghuamianjiegouleixing1").val(),
        "控制面结构倾向1": $("#konghuamianjiegouchanzhuang11").val(),
        "控制面结构倾角1": $("#konghuamianjiegouchanzhuang12").val(),
        "控制面结构长度1": $("#kongzhimianjiegouchangdu1").val(),
        "控制面结构间距1": $("#kongzhimianjiegoujianju1").val(),
        "控制面结构类型2": $("#konghuamianjiegouleixing2").val(),
        "控制面结构倾向2": $("#konghuamianjiegouchanzhuang21").val(),
        "控制面结构倾角2": $("#konghuamianjiegouchanzhuang22").val(),
        "控制面结构长度2": $("#kongzhimianjiegouchangdu2").val(),
        "控制面结构间距2": $("#kongzhimianjiegoujianju2").val(),
        "控制面结构类型3": $("#konghuamianjiegouleixing3").val(),
        "控制面结构倾向3": $("#konghuamianjiegouchanzhuang31").val(),
        "控制面结构倾角3": $("#konghuamianjiegouchanzhuang32").val(),
        "控制面结构长度3": $("#kongzhimianjiegouchangdu3").val(),
        "控制面结构间距3": $("#kongzhimianjiegoujianju3").val(),
        "全风化带深度": $("#quanfenghuadaishendu").val(),
        "卸荷裂缝深度": $("#xieheliefengchangdu").val(),
        "土体名称": $("#tudimingcheng").val(),
        "土体密实度": $("input[name='tudimishidu']:checked").val(),
        "土体稠度": $("#tudichoudu").val(),
        "下伏基岩岩性": $("#xiafujiyanyanxing").val(),
        "下伏基岩时代": $("#xiafujiyanshidai").val(),
        "下伏基岩倾向": $("#xiafujiyanchanzhuang1").val(),
        "下伏基岩倾角": $("#xiafujiyanchanzhuang2").val(),
        "下伏基岩埋深": $("#xiafujiyanmaishen").val(),
        "地下水埋深": $("#dixiashuimaishen").val(),
        "地下水露头": utilGetCheckboxVal("dixiashuiloutou"),
        "地下水补给类型": utilGetCheckboxVal("dixiashuibujileixing"),
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
        "可能失稳因素": utilGetCheckboxVal("kenengshiwenyinsu"),
        "目前稳定状态": $("input[name='muqianwendingzhuangkuang']:checked").val(),
        "今后变化趋势": $("input[name='fazhanqushifenxi']:checked").val(),
        "毁坏房屋户": $("#sunhuaifangwuhu").val(),
        "毁坏房屋间": $("#sunhuaifangwujian").val(),
        "毁路": $("#huilu").val(),
        "毁渠": $("#huiqu").val(),
        "其它危害": $("#qitaweihai").val(),
        "直接损失": $("#zhijiesunshi").val(),
        "灾情等级": $("#zaiqingdengji").val(),
        "威胁房屋户": $("#weixiefangwu").val(),
        "威胁人口": $("#weixierenshu").val(),
        "威胁财产": $("#weixiecaichan").val(),
        "险情等级": $("#xianqingdengji").val(),
        "威胁对象": utilGetCheckboxVal("weixieduixiang") + handleWeiHaiDuiXiangQiTa("weixieduixiang", "weixieduixiangqita"),
        "监测建议": utilGetCheckboxVal("jiancejianyi"),
        "防治建议": handleFangZhiJianYi(),
        "群测群防": utilGetCheckboxVal("quncequnfangvalue"),
        "防治监测": utilGetCheckboxVal("zhuanyejiancevalue"),
        "搬迁避让": utilGetCheckboxVal("banqianbirangvalue"),
        "防治治理": utilGetCheckboxVal("gongchengzhilivalue"),
        "群测人员": "",
        "遥感解译点": $("#yaoganjieyidian").val(),
        "勘查点": $("#kanchadian").val(),
        "测绘点": $("#cehuidian").val(),
        "防灾预案": $("#fangzaiyuandian").val(),
        "村长": "",
        "电话": "",
        "隐患点": $("#yinhuandian").val(),
        "野外记录信息": $("#yewaijiluxinxi").val(),
        "调查负责人": $("#diaochafuzeren").val(),
        "填表人": $("#tianbiaoren").val(),
        "审核人": $("#shenheren").val(),
        "填表日期年": utilGetDateElement($("#shenheriqi").val(), 0),
        "填表日期月": utilGetDateElement($("#shenheriqi").val(), 1),
        "填表日期日": utilGetDateElement($("#shenheriqi").val(), 2),
        "调查单位": $("#diaochadanwei").val(),
        "平面示意图": "true",
        "剖面示意图": "true",
        "矢量平面图": "true",
        "矢量剖面图": "true",
        "多媒体": "true",
        "录像": "true"
    }
    //alert(tempObj.野外记录信息);
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
function showSlopeInfo(infoObj) {
    //infoObj = SlopeDemo;
    //写入TEXT内容
    var textRes = [
        ["xiangmumingcheng", infoObj.项目名称],
        ["tufuming", infoObj.图幅名],
        ["tufubianhao", infoObj.图幅编号],
        ["mingcheng", infoObj.名称],
        ["yewaibianhao", infoObj.野外编号],
        ["tongyibianhao", infoObj.统一编号],
        ["shixianbianhao", infoObj.室内编号],
        ["sheng", infoObj.省],
        ["shixian", infoObj.县],
        ["xiangzhen", infoObj.乡],
        ["cun", infoObj.村],
        ["zu", infoObj.组],
        ["qita", infoObj.地点],
        ["jingdu", infoObj.经度],
        ["weidu", infoObj.纬度],
        ["poding", infoObj.坡顶标高],
        ["pojiao", infoObj.坡脚标高],
        ["yanxing", infoObj.地层岩性],
        ["shidai", infoObj.地层时代],
        ["chanzhuang1", infoObj.地层倾向],
        ["chanzhuang2", infoObj.地层倾角],
        ["gouzaobuwei", infoObj.构造部位],
        ["dizhenliedu", infoObj.地震烈度],
        ["nianjunjiangyuliang", infoObj.年均降雨量],
        ["rizuidajiangyuliang", infoObj.日最大降雨],
        ["shizuidajiangyuliang", infoObj.时最大降雨],
        ["hongshuiwei", infoObj.洪水位],
        ["kushuiwei", infoObj.枯水位],
        ["waixingpogao", infoObj.最大坡高],
        ["waixingpochang", infoObj.最大坡长],
        ["waixingpokuan", infoObj.最大坡宽],
        ["waixinghoudu", infoObj.最大厚度],
        ["waixingyucetiji", infoObj.预测体积],
        ["waixingyuceguimodengji", infoObj.预测规模等级],
        ["waixingpodu", infoObj.平均坡度],
        ["waixingpoxiang", infoObj.总体坡向],
        ["yantijiegouleixing", infoObj.岩体结构类型],
        ["yantihoudu", infoObj.岩体厚度],
        ["yantiliexizushu", infoObj.岩体裂隙组数],
        ["yantikuaiduchang", privateUtilHandleYTKD(infoObj.岩体块度, 0)],
        ["yantikuaidukuan", privateUtilHandleYTKD(infoObj.岩体块度, 1)],
        ["yantikuaidugao", privateUtilHandleYTKD(infoObj.岩体块度, 2)],
        ["kongzhimianjiegouleixing1", infoObj.控制面结构类型1],
        ["kongzhimianjiegouchanzhuang11", infoObj.控制面结构倾向1],
        ["kongzhimianjiegouchanzhuang12", infoObj.控制面结构倾角1],
        ["kongzhimianjiegouchangdu1", infoObj.控制面结构长度1],
        ["kongzhimianjiegoujianju1", infoObj.控制面结构间距1],
        ["kongzhimianjiegouleixing2", infoObj.控制面结构类型2],
        ["kongzhimianjiegouchanzhuang21", infoObj.控制面结构倾向2],
        ["kongzhimianjiegouchanzhuang22", infoObj.控制面结构倾角2],
        ["kongzhimianjiegouchangdu2", infoObj.控制面结构长度2],
        ["kongzhimianjiegoujianju2", infoObj.控制面结构间距2],
        ["kongzhimianjiegouleixing3", infoObj.控制面结构类型3],
        ["kongzhimianjiegouchanzhuang31", infoObj.控制面结构倾向3],
        ["kongzhimianjiegouchanzhuang32", infoObj.控制面结构倾角3],
        ["kongzhimianjiegouchangdu3", infoObj.控制面结构长度3],
        ["kongzhimianjiegoujianju3", infoObj.控制面结构间距3],
        ["quanfenghuadaishendu", infoObj.全风化带深度],
        ["xieheliefengchangdu", infoObj.卸荷裂缝深度],
        ["tudimingcheng", infoObj.土体名称],
        ["tudichoudu", infoObj.土体稠度],
        ["xiafujiyanyanxing", infoObj.下伏基岩岩性],
        ["xiafujiyanshidai", infoObj.下伏基岩时代],
        ["xiafujiyanchanzhuang1", infoObj.下伏基岩倾向],
        ["xiafujiyanchanzhuang2", infoObj.下伏基岩倾角],
        ["xiafujiyanmaishen", infoObj.下伏基岩埋深],
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
        ["sunhuaifangwuhu", infoObj.毁坏房屋户],
        ["sunhuaifangwujian", infoObj.毁坏房屋间],
        ["huilu", infoObj.毁路],
        ["huiqu", infoObj.毁渠],
        ["qitaweihai", infoObj.其它危害],
        ["zhijiesunshi", infoObj.直接损失],
        ["zaiqingdengji", infoObj.灾情等级],
        ["weixiefangwu", infoObj.威胁房屋户],
        ["weixierenshu", infoObj.威胁人口],
        ["weixiecaichan", infoObj.威胁财产],
        ["xianqingdengji", infoObj.险情等级],
        ["yaoganjieyidian", infoObj.遥感解译点],
        ["kanchadian", infoObj.勘查点],
        ["cehuidian", infoObj.测绘点],
        ["fangzaiyuandian", infoObj.防灾预案],
        ["yinhuandian", infoObj.隐患点],
        ["yewaijiluxinxi", infoObj.野外记录信息],
        ["diaochafuzeren", infoObj.调查负责人],
        ["tianbiaoren", infoObj.填表人],
        ["shenheren", infoObj.审核人],
        ["shenheriqi", infoObj.填表日期年 + "-" + infoObj.填表日期月 + "-" + infoObj.填表日期日],
        ["diaochadanwei", infoObj.调查单位]
    ];
    utilWriteInputTypeOfTEXT(textRes);

    //勾选RADIO
    var radioRes = [
        ["xiepoleixing", infoObj.斜坡类型],
        ["xipobianxingqushi", infoObj.斜坡变形趋势],
        ["xiepoyuheliuweizhi1", ((infoObj.相对河流位置 == undefined || infoObj.相对河流位置 == null) ? "" : infoObj.相对河流位置.split(',')[0])],
        ["xiepoyuheliuweizhi2", ((infoObj.相对河流位置 == undefined || infoObj.相对河流位置 == null) ? "" : infoObj.相对河流位置.split(',')[1])],
        ["pomianxingtai", infoObj.坡面形态],
        ["xiepojiegouleixing1", ((infoObj.斜坡结构类型 == undefined || infoObj.斜坡结构类型 == null) ? "" : infoObj.斜坡结构类型.split(',')[0])],
        ["xiepojiegouleixing2", ((infoObj.斜坡结构类型 == undefined || infoObj.斜坡结构类型 == null) ? "" : infoObj.斜坡结构类型.split(',')[1])],
        ["tudimishidu", infoObj.土体密实度],
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
        ["tudiliyong", infoObj.土地利用],
        ["kenengshiwenyinsu", infoObj.可能失稳因素],
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
    selectWeiHaiOrWeiXieDuiXiang([["weixieduixiang", "weixieduixiangqita", infoObj.威胁对象]]);
}


//处理岩体块度，私用
var privateUtilHandleYTKD = function (val, index) {
    if (val == "") return "";
    var _1r = val.split("×");
    if (_1r.length < index + 1) return "";
    return _1r[index];
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
    $("#zhaopianDel").click(function () {
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


}

function showPaintImage(id, img) {
    switch (id) {
        case "shangepingmiantuIn":
            $("#shangepingmiantushow").attr("src", img);
            break;
        case "shangepoumiantuIn":
            $("#shangepoumiantushow").attr("src", img);
            break;
        case "shiliangpingmiantuIn":
            $("#shiliangpingmiantushow").attr("src", img);
            break;
        case "shiliangpoumiantuIn":
            $("#shiliangpoumiantushow").attr("src", img);
            break;
        default:
    }

}
