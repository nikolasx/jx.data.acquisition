/*
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
    "市县编号": "100000",
    "滑坡年代": "古滑坡",
    "滑坡时间": "2014-12-31 12:11:11",//数据库中分为年、月、日、时、分、秒6个字段存储，请传递给前台时按yyyy-MM-dd HH:mm:ss处理好
    "地理位置省": "湖北省",
    "地理位置市县": "某县",
    "地理位置乡镇": "某乡",
    "地理位置村": "某村",
    "地理位置组": "某组",
    "地理位置其它": "蒋公中正家门口",//数据库'地点'字段
    "经度": "111-11-11",//如果数据库中是其它格式，请传递给前台时统一处理
    "纬度": "11-11-11",
    "标高坡顶": "1101",//数据库字段名-冠
    "标高坡脚": "911",//数据库字段名-趾
    "滑坡类型": "推移式滑坡",
    "滑坡性质": "碎块石",
    "地层岩性岩性": "黄土",
    "地层岩性时代": "Q",
    "地质构造产状1": "30",//数据库字段-地层倾角
    "地质构造产状2": "45",//数据库字段-地层倾向
    "地质构造构造部位": "未知",
    "地质构造地震烈度": "Ⅱ",
    "微地貌": "陡崖,陡坡,缓坡,平台,",
    "地下水类型": "孔隙水,裂隙水,承压水,",
    "降雨量年均": "100",
    "降雨量日最大": "10",
    "降雨量时最大": "5",
    "洪水位": "10",
    "枯水位": "1",
    "斜坡与河流位置": "左岸,凹岸",
    "原始斜坡坡高": "50",
    "原始斜坡坡度": "30",
    "原始斜坡坡形": "凹形",
    "原始斜坡斜坡结构类型": "土质斜坡,顺向斜坡",
    "原始斜坡控滑面结构1类型": "层理面",//对应数据库字段：控滑结构面类型1
    "原始斜坡控滑面结构1产状1": "30",//对应数据库字段：控滑结构面倾向1
    "原始斜坡控滑面结构1产状2": "45",//对应数据库字段：控滑结构面倾角1
    "原始斜坡控滑面结构2类型": "断层",
    "原始斜坡控滑面结构2产状1": "10",
    "原始斜坡控滑面结构2产状2": "40",
    "原始斜坡控滑面结构3类型": "老滑面",
    "原始斜坡控滑面结构3产状1": "30",
    "原始斜坡控滑面结构3产状2": "35",
    "原始斜坡控滑面结构4类型": "构造错动带",
    "原始斜坡控滑面结构4产状1": "30",
    "原始斜坡控滑面结构4产状2": "50",
    "外形特征长度": "50",
    "外形特征宽度": "45",
    "外形特征厚度": "2.5",
    "外形特征面积": "2200",
    "外形特征体积": "5000",
    "外形特征规模等级": "小型",
    "外形特征坡度": "38",//数据库字段-滑坡坡度
    "外形特征坡向": "295",//数据库字段-滑坡坡向
    "外形特征平面形态": "舌形",
    "外形特征剖面形态": "凹形",
    "结构特征滑体岩性": "黄土",
    "结构特征滑体结构": "零乱",
    "结构特征滑体碎石含量": "40",
    "结构特征滑体块度": "≥50",//取值固定有几个：≤5；5-10；10-50；≥50；字符串，传给前台时请检查是否符合，不然无法显示
    "结构特征滑床岩性": "黄土",
    "结构特征滑床时代": "Q",
    "结构特征滑床产状1": "45",//数据库字段-滑床倾向
    "结构特征滑床产状2": "50",//数据库字段-滑床倾角
    "结构特征滑面及滑带特征形态": "弧形",//数据库字段-滑面形态
    "结构特征滑面及滑带特征埋深": "3",//数据库字段-滑面埋深
    "结构特征滑面及滑带特征倾向": "220",//数据库字段-滑面倾向
    "结构特征滑面及滑带特征倾角": "38",//数据库字段-滑面倾角
    "结构特征滑面及滑带特征厚度": "4",//数据库字段-滑面厚度
    "结构特征滑面及滑带特征滑带土名称": "粘土",//数据库字段-滑带土名称
    "结构特征滑面及滑带特征滑带土性状": "未知",//数据库字段-滑带土性状
    "地下水埋深": "1",
    "地下水露头": "上升泉,下降泉,",
    "地下水补给类型": "降雨,人工,融雪,地表水,",
    "土地使用": "旱地,水田,森林,",
    "现今变形迹象1名称": "拉张裂缝",//数据库字段-变形迹象类
    "现今变形迹象1部位": "上部",
    "现今变形迹象1特征": "有裂缝",
    "现今变形迹象1初现时间": "2014-12-11",//数据库字段中按年、月、日三个字段存储，请自行拆分，传递给前台的数据请进行处理，统一格式：yyyy-MM-dd
    "现今变形迹象2名称": "剪切裂缝",
    "现今变形迹象2部位": "上部",
    "现今变形迹象2特征": "有裂缝",
    "现今变形迹象2初现时间": "2014-11-11",
    "现今变形迹象3名称": "树木歪斜",
    "现今变形迹象3部位": "上部",
    "现今变形迹象3特征": "有陡坎",
    "现今变形迹象3初现时间": "2014-10-11",
    "现今变形迹象4名称": "建筑变形",
    "现今变形迹象4部位": "上部",
    "现今变形迹象4特征": "有裂缝",
    "现今变形迹象4初现时间": "2014-01-22",
    "现今变形迹象5名称": "渗冒浑水",
    "现今变形迹象5部位": "上部",
    "现今变形迹象5特征": "有裂缝",
    "现今变形迹象5初现时间": "2014-01-22",
    "现今变形迹象6名称": "剥、坠落",
    "现今变形迹象6部位": "上部",
    "现今变形迹象6特征": "有裂缝",
    "现今变形迹象6初现时间": "2014-01-22",
    "现今变形迹象7名称": "地面隆起",
    "现今变形迹象7部位": "上部",
    "现今变形迹象7特征": "有裂缝",
    "现今变形迹象7初现时间": "2014-01-22",
    "现今变形迹象8名称": "地面沉降",
    "现今变形迹象8部位": "上部",
    "现今变形迹象8特征": "有裂缝",
    "现今变形迹象8初现时间": "2014-01-22",
    "变形活动阶段": "破坏阶段",
    "滑坡成因主导因素": "自然因素,综合因素,人为因素,",
    "滑坡成因自然诱因": "降雨,地震,洪水,",
    "滑坡成因地质因素": "透水层下伏隔水层,破碎风化岩/基岩接触,结构面走向与坡面平行,土体/基岩接触,",
    "滑坡成因地貌因素": "斜坡陡峭,坡脚遭侵蚀,超载堆积,",
    "滑坡成因物理因素": "风化,累进性破坏造成的抗剪强度降低,融冻,洪水冲蚀,",
    "滑坡成因人为因素": "削坡过陡,坡脚开挖,坡后加载,",
    "稳定性分析复活诱发因素": "降雨,卸荷,坡脚冲刷,坡体切割,",
    "稳定性分析目前稳定状况": "较稳定",//五万录入工具界面中提供了限定值：稳定，较稳定，不稳定；数据库字段如果不符，将展示不出来
    "稳定性分析发展趋势分析": "不稳定",
    "滑坡危害已造成危害死亡人数": "0",
    "滑坡危害已造成危害损坏房屋户": "1",
    "滑坡危害已造成危害损坏房屋间": "2",
    "滑坡危害已造成危害毁路": "111",
    "滑坡危害已造成危害毁渠": "111",
    "滑坡危害已造成危害其它危害": "未知",
    "滑坡危害已造成危害直接损失": "11",
    "滑坡危害已造成危害间接损失": "11",
    "滑坡危害已造成危害灾情等级": "小型",
    "滑坡危害已造成危害危害对象": "县城,学校,其它：,草场",
    "诱发灾害灾害类型": "地面塌陷",
    "诱发灾害波及范围": "小",
    "诱发灾害造成损失": "1",
    "潜在危害威胁房屋": "1",
    "潜在危害威胁人数": "2",
    "潜在危害威胁财产": "1",
    "潜在危害险情等级": "小型",
    "潜在危害威胁对象": "县城,学校,其它：,草场",
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
        "市县编号": $("#shixianbianhao").val(),
        "滑坡年代": $("input[name='huaposhijianradio']:checked").val(),
        "滑坡时间": $("#huaposhijian").val(),
        "地理位置省": $("#sheng").val(),
        "地理位置市县": $("#shixian").val(),
        "地理位置乡镇": $("#xiang").val(),
        "地理位置村": $("#cun").val(),
        "地理位置组": $("#zu").val(),
        "地理位置其它": $("#qita").val(),
        "经度": $("#jingdu").val(),
        "纬度": $("#weidu").val(),
        "标高坡顶": $("#poding").val(),
        "标高坡脚": $("#pojiao").val(),
        "滑坡类型": $("input[name='huapoleixing']:checked").val(),
        "滑坡性质": $("input[name='huapoxingzhi']:checked").val(),
        "地层岩性岩性": $("#yanxing").val(),
        "地层岩性时代": $("#shidai").val(),
        "地质构造产状1": $("#chanzhuang1").val(),
        "地质构造产状2": $("#chanzhuang2").val(),
        "地质构造构造部位": $("#gouzaobuwei").val(),
        "地质构造地震烈度": $("#dizhenliedu").val(),
        "微地貌": utilGetCheckboxVal("weidimao"),
        "地下水类型": utilGetCheckboxVal("dixiashuileixing"),
        "降雨量年均": $("#nianjunjiangyuliang").val(),
        "降雨量日最大": $("#rizuidajiangyuliang").val(),
        "降雨量时最大": $("#shizuidajiangyuliang").val(),
        "洪水位": $("#hongshuiwei").val(),
        "枯水位": $("#kushuiwei").val(),
        "斜坡与河流位置": $("input[name='xiepoyuheliuweizhi1']:checked").val() + "," + $("input[name='xiepoyuheliuweizhi2']:checked").val(),
        "原始斜坡坡高": $("#pogao").val(),
        "原始斜坡坡度": $("#podu").val(),
        "原始斜坡坡形": $("input[name='poxing']:checked").val(),
        "原始斜坡斜坡结构类型": $("input[name='xipojiegouleixing1']:checked").val() + "," + $("input[name='xipojiegouleixing2']:checked").val(),
        "原始斜坡控滑面结构1类型": $("#konghuamianjiegouleixing1").val(),
        "原始斜坡控滑面结构1产状1": $("#konghuamianjiegouchanzhuang11").val(),
        "原始斜坡控滑面结构1产状2": $("#konghuamianjiegouchanzhuang12").val(),
        "原始斜坡控滑面结构2类型": $("#konghuamianjiegouleixing2").val(),
        "原始斜坡控滑面结构2产状1": $("#konghuamianjiegouchanzhuang21").val(),
        "原始斜坡控滑面结构2产状2": $("#konghuamianjiegouchanzhuang22").val(),
        "原始斜坡控滑面结构3类型": $("#konghuamianjiegouleixing3").val(),
        "原始斜坡控滑面结构3产状1": $("#konghuamianjiegouchanzhuang31").val(),
        "原始斜坡控滑面结构3产状2": $("#konghuamianjiegouchanzhuang32").val(),
        "原始斜坡控滑面结构4类型": $("#konghuamianjiegouleixing4").val(),
        "原始斜坡控滑面结构4产状1": $("#konghuamianjiegouchanzhuang41").val(),
        "原始斜坡控滑面结构4产状2": $("#konghuamianjiegouchanzhuang42").val(),
        "外形特征长度": $("#waixingchangdu").val(),
        "外形特征宽度": $("#waixingkuandu").val(),
        "外形特征厚度": $("#waixinghoudu").val(),
        "外形特征面积": $("#waixingmianji").val(),
        "外形特征体积": $("#waixingtiji").val(),
        "外形特征规模等级": $("#waixingguimodengji").val(),
        "外形特征坡度": $("#waixingpodu").val(),
        "外形特征坡向": $("#waixingpoxiang").val(),
        "外形特征平面形态": $("input[name='pingmianxingtai']:checked").val(),
        "外形特征剖面形态": $("input[name='poumianxingtai']:checked").val(),
        "结构特征滑体岩性": $("#jiegoutezhengyanxing1").val(),
        "结构特征滑体结构": $("input[name='jiegoutezhengjiegou']:checked").val(),
        "结构特征滑体碎石含量": $("#jiegoutezhengsuishihanliang").val(),
        "结构特征滑体块度": $("input[name='jiegoutezhengkuaidu']:checked").val(),
        "结构特征滑床岩性": $("#jiegoutezhengyanxing2").val(),
        "结构特征滑床时代": $("#jiegoutezhengshidai").val(),
        "结构特征滑床产状1": $("#jiegoutezhengchanzhuang1").val(),
        "结构特征滑床产状2": $("#jiegoutezhengchanzhuang2").val(),
        "结构特征滑面及滑带特征形态": $("input[name='humianjihuadaixingtai']:checked").val(),
        "结构特征滑面及滑带特征埋深": $("#huamianjihuadaimaishen").val(),
        "结构特征滑面及滑带特征倾向": $("#huamianjihuadaiqingxiang").val(),
        "结构特征滑面及滑带特征倾角": $("#huamianjihuadaiqingjiao").val(),
        "结构特征滑面及滑带特征厚度": $("#huamianjihuadaihoudu").val(),
        "结构特征滑面及滑带特征滑带土名称": $("input[name='humianjihuadaihuadaitumingcheng']:checked").val(),
        "结构特征滑面及滑带特征滑带土性状": $("#huamianjihuadaihuadaituxingzhuang").val(),
        "地下水埋深": $("#dixiashuimaishen").val(),
        "地下水露头": utilGetCheckboxVal("dixiashuiloutou"),
        "地下水补给类型": utilGetCheckboxVal("dixiashuibujileixing"),
        "土地使用": utilGetCheckboxVal("tudishiyong"),
        "现今变形迹象1名称": $("#xianjinbianxingjixiangmingcheng1").val(),
        "现今变形迹象1部位": $("#xianjinbianxingjixiangbuwei1").val(),
        "现今变形迹象1特征": $("#xianjinbianxingjixiangtezheng1").val(),
        "现今变形迹象1初现时间": $("#xianjinbianxingjixiangchuxianshijian1").val(),
        "现今变形迹象2名称": $("#xianjinbianxingjixiangmingcheng2").val(),
        "现今变形迹象2部位": $("#xianjinbianxingjixiangbuwei2").val(),
        "现今变形迹象2特征": $("#xianjinbianxingjixiangtezheng2").val(),
        "现今变形迹象2初现时间": $("#xianjinbianxingjixiangchuxianshijian2").val(),
        "现今变形迹象3名称": $("#xianjinbianxingjixiangmingcheng3").val(),
        "现今变形迹象3部位": $("#xianjinbianxingjixiangbuwei3").val(),
        "现今变形迹象3特征": $("#xianjinbianxingjixiangtezheng3").val(),
        "现今变形迹象3初现时间": $("#xianjinbianxingjixiangchuxianshijian3").val(),
        "现今变形迹象4名称": $("#xianjinbianxingjixiangmingcheng4").val(),
        "现今变形迹象4部位": $("#xianjinbianxingjixiangbuwei4").val(),
        "现今变形迹象4特征": $("#xianjinbianxingjixiangtezheng4").val(),
        "现今变形迹象4初现时间": $("#xianjinbianxingjixiangchuxianshijian4").val(),
        "现今变形迹象5名称": $("#xianjinbianxingjixiangmingcheng5").val(),
        "现今变形迹象5部位": $("#xianjinbianxingjixiangbuwei5").val(),
        "现今变形迹象5特征": $("#xianjinbianxingjixiangtezheng5").val(),
        "现今变形迹象5初现时间": $("#xianjinbianxingjixiangchuxianshijian5").val(),
        "现今变形迹象6名称": $("#xianjinbianxingjixiangmingcheng6").val(),
        "现今变形迹象6部位": $("#xianjinbianxingjixiangbuwei6").val(),
        "现今变形迹象6特征": $("#xianjinbianxingjixiangtezheng6").val(),
        "现今变形迹象6初现时间": $("#xianjinbianxingjixiangchuxianshijian6").val(),
        "现今变形迹象7名称": $("#xianjinbianxingjixiangmingcheng7").val(),
        "现今变形迹象7部位": $("#xianjinbianxingjixiangbuwei7").val(),
        "现今变形迹象7特征": $("#xianjinbianxingjixiangtezheng7").val(),
        "现今变形迹象7初现时间": $("#xianjinbianxingjixiangchuxianshijian7").val(),
        "现今变形迹象8名称": $("#xianjinbianxingjixiangmingcheng8").val(),
        "现今变形迹象8部位": $("#xianjinbianxingjixiangbuwei8").val(),
        "现今变形迹象8特征": $("#xianjinbianxingjixiangtezheng8").val(),
        "现今变形迹象8初现时间": $("#xianjinbianxingjixiangchuxianshijian8").val(),
        "变形活动阶段": $("input[name='bianxinghuodongjieduan']:checked").val(),
        "滑坡成因主导因素": utilGetCheckboxVal("huapochengyinzhudaoyinsu"),
        "滑坡成因自然诱因": utilGetCheckboxVal("ziranyouyin"),
        "滑坡成因地质因素": utilGetCheckboxVal("dizhiyinsu"),
        "滑坡成因地貌因素": utilGetCheckboxVal("dimaoyinsu"),
        "滑坡成因物理因素": utilGetCheckboxVal("wuliyinsu"),
        "滑坡成因人为因素": utilGetCheckboxVal("renweiyinsu"),
        "稳定性分析复活诱发因素": utilGetCheckboxVal("fuhuoyoufayinsu"),
        "稳定性分析目前稳定状况": $("input[name='muqianwendingzhuangkuang']:checked").val(),
        "稳定性分析发展趋势分析": $("input[name='fazhanqushifenxi']:checked").val(),
        "滑坡危害已造成危害死亡人数": $("#siwangrenshu").val(),
        "滑坡危害已造成危害损坏房屋户": $("#sunhuaifangwuhu").val(),
        "滑坡危害已造成危害损坏房屋间": $("#sunhuaifangwujian").val(),
        "滑坡危害已造成危害毁路": $("#huilu").val(),
        "滑坡危害已造成危害毁渠": $("#huiqu").val(),
        "滑坡危害已造成危害其它危害": $("#qitaweihai").val(),
        "滑坡危害已造成危害直接损失": $("#zhijiesunshi").val(),
        "滑坡危害已造成危害间接损失": $("#jianjiesunshi").val(),
        "滑坡危害已造成危害灾情等级": $("#zaiqingdengji").val(),
        "滑坡危害已造成危害危害对象": utilGetCheckboxVal("weihaiduixiang") + handleWeiHaiDuiXiangQiTa("weihaiduixiang", "weihaiduixiangqita"),
        "诱发灾害灾害类型": $("#zaihaileixing").val(),
        "诱发灾害波及范围": $("#bojifanwei").val(),
        "诱发灾害造成损失": $("#zaochengsunshi").val(),
        "潜在危害威胁房屋": $("#weixiefangwu").val(),
        "潜在危害威胁人数": $("#weixierenshu").val(),
        "潜在危害威胁财产": $("#weixiecaichan").val(),
        "潜在危害险情等级": $("#xianqingdengji").val(),
        "潜在危害威胁对象": utilGetCheckboxVal("weixieduixiang") + handleWeiHaiDuiXiangQiTa("weixieduixiang", "weixieduixiangqita"),
        "监测建议": utilGetCheckboxVal("jiancejianyi"),
        "防治建议": handleFangZhiJianYi(),
        "群测群防": utilGetCheckboxVal("quncequnfangvalue"),
        "专业监测": utilGetCheckboxVal("zhuanyejiancevalue"),
        "搬迁避让": utilGetCheckboxVal("banqianbirangvalue"),
        "工程治理": utilGetCheckboxVal("gongchengzhilivalue"),
        "遥感解译点": $("#yaoganjieyidian").val(),
        "勘察点": $("#kanchadian").val(),
        "测绘点": $("#cehuidian").val(),
        "防灾预案群测群防点": $("#fangzaiyuandian").val(),
        "隐患点": $("#yinhuandian").val(),
        "野外记录信息": $("#yewaijiluxinxi").val(),
        "调查负责人": $("#diaochafuzeren").val(),
        "填表人": $("#tianbiaoren").val(),
        "审核人": $("#shenheren").val(),
        "填表日期": $("#shenheriqi").val(),
        "调查单位": $("#diaochadanwei").val(),
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
        ["shixianbianhao", infoObj.市县编号],
        ["huaposhijian", infoObj.滑坡时间],
        ["sheng", infoObj.地理位置省],
        ["shixian", infoObj.地理位置市县],
        ["xiangzhen", infoObj.地理位置乡镇],
        ["cun", infoObj.地理位置村],
        ["zu", infoObj.地理位置组],
        ["qita", infoObj.地理位置其它],
        ["jingdu", infoObj.经度],
        ["weidu", infoObj.纬度],
        ["poding", infoObj.标高坡顶],
        ["pojiao", infoObj.标高坡脚],
        ["yanxing", infoObj.地层岩性岩性],
        ["shidai", infoObj.地层岩性时代],
        ["chanzhuang1", infoObj.地质构造产状1],
        ["chanzhuang2", infoObj.地质构造产状2],
        ["gouzaobuwei", infoObj.地质构造构造部位],
        ["dizhenliedu", infoObj.地质构造地震烈度],
        ["nianjunjiangyuliang", infoObj.降雨量年均],
        ["rizuidajiangyuliang", infoObj.降雨量日最大],
        ["shizuidajiangyuliang", infoObj.降雨量时最大],
        ["hongshuiwei", infoObj.洪水位],
        ["kushuiwei", infoObj.枯水位],
        ["pogao", infoObj.原始斜坡坡高],
        ["podu", infoObj.原始斜坡坡度],
        ["konghuamianjiegouleixing1", infoObj.原始斜坡控滑面结构1类型],
        ["konghuamianjiegouchanzhuang11", infoObj.原始斜坡控滑面结构1产状1],
        ["konghuamianjiegouchanzhuang12", infoObj.原始斜坡控滑面结构1产状2],
        ["konghuamianjiegouleixing2", infoObj.原始斜坡控滑面结构2类型],
        ["konghuamianjiegouchanzhuang21", infoObj.原始斜坡控滑面结构2产状1],
        ["konghuamianjiegouchanzhuang22", infoObj.原始斜坡控滑面结构2产状2],
        ["konghuamianjiegouleixing3", infoObj.原始斜坡控滑面结构3类型],
        ["konghuamianjiegouchanzhuang31", infoObj.原始斜坡控滑面结构3产状1],
        ["konghuamianjiegouchanzhuang32", infoObj.原始斜坡控滑面结构3产状2],
        ["konghuamianjiegouleixing4", infoObj.原始斜坡控滑面结构4类型],
        ["konghuamianjiegouchanzhuang41", infoObj.原始斜坡控滑面结构4产状1],
        ["konghuamianjiegouchanzhuang42", infoObj.原始斜坡控滑面结构4产状2],
        ["waixingchangdu", infoObj.外形特征长度],
        ["waixingkuandu", infoObj.外形特征宽度],
        ["waixinghoudu", infoObj.外形特征厚度],
        ["waixingmianji", infoObj.外形特征面积],
        ["waixingtiji", infoObj.外形特征体积],
        ["waixingguimodengji", infoObj.外形特征规模等级],
        ["waixingpodu", infoObj.外形特征坡度],
        ["waixingpoxiang", infoObj.外形特征坡向],
        ["jiegoutezhengyanxing1", infoObj.结构特征滑体岩性],
        ["jiegoutezhengsuishihanliang", infoObj.结构特征滑体碎石含量],
        ["jiegoutezhengyanxing2", infoObj.结构特征滑床岩性],
        ["jiegoutezhengshidai", infoObj.结构特征滑床时代],
        ["jiegoutezhengchanzhuang1", infoObj.结构特征滑床产状1],
        ["jiegoutezhengchanzhuang2", infoObj.结构特征滑床产状2],
        ["huamianjihuadaimaishen", infoObj.结构特征滑面及滑带特征埋深],
        ["huamianjihuadaiqingxiang", infoObj.结构特征滑面及滑带特征倾向],
        ["huamianjihuadaiqingjiao", infoObj.结构特征滑面及滑带特征倾角],
        ["huamianjihuadaihoudu", infoObj.结构特征滑面及滑带特征厚度],
        ["huamianjihuadaihuadaituxingzhuang", infoObj.结构特征滑面及滑带特征滑带土性状],
        ["dixiashuimaishen", infoObj.地下水埋深],
        ["xianjinbianxingjixiangmingcheng1", infoObj.现今变形迹象1名称],
        ["xianjinbianxingjixiangbuwei1", infoObj.现今变形迹象1部位],
        ["xianjinbianxingjixiangtezheng1", infoObj.现今变形迹象1特征],
        ["xianjinbianxingjixiangchuxianshijian1", infoObj.现今变形迹象1初现时间],
        ["xianjinbianxingjixiangmingcheng2", infoObj.现今变形迹象2名称],
        ["xianjinbianxingjixiangbuwei2", infoObj.现今变形迹象2部位],
        ["xianjinbianxingjixiangtezheng2", infoObj.现今变形迹象2特征],
        ["xianjinbianxingjixiangchuxianshijian2", infoObj.现今变形迹象2初现时间],
        ["xianjinbianxingjixiangmingcheng3", infoObj.现今变形迹象3名称],
        ["xianjinbianxingjixiangbuwei3", infoObj.现今变形迹象3部位],
        ["xianjinbianxingjixiangtezheng3", infoObj.现今变形迹象3特征],
        ["xianjinbianxingjixiangchuxianshijian3", infoObj.现今变形迹象3初现时间],
        ["xianjinbianxingjixiangmingcheng4", infoObj.现今变形迹象4名称],
        ["xianjinbianxingjixiangbuwei4", infoObj.现今变形迹象4部位],
        ["xianjinbianxingjixiangtezheng4", infoObj.现今变形迹象4特征],
        ["xianjinbianxingjixiangchuxianshijian4", infoObj.现今变形迹象4初现时间],
        ["xianjinbianxingjixiangmingcheng5", infoObj.现今变形迹象5名称],
        ["xianjinbianxingjixiangbuwei5", infoObj.现今变形迹象5部位],
        ["xianjinbianxingjixiangtezheng5", infoObj.现今变形迹象5特征],
        ["xianjinbianxingjixiangchuxianshijian5", infoObj.现今变形迹象5初现时间],
        ["xianjinbianxingjixiangmingcheng6", infoObj.现今变形迹象6名称],
        ["xianjinbianxingjixiangbuwei6", infoObj.现今变形迹象6部位],
        ["xianjinbianxingjixiangtezheng6", infoObj.现今变形迹象6特征],
        ["xianjinbianxingjixiangchuxianshijian6", infoObj.现今变形迹象6初现时间],
        ["xianjinbianxingjixiangmingcheng7", infoObj.现今变形迹象7名称],
        ["xianjinbianxingjixiangbuwei7", infoObj.现今变形迹象7部位],
        ["xianjinbianxingjixiangtezheng7", infoObj.现今变形迹象7特征],
        ["xianjinbianxingjixiangchuxianshijian7", infoObj.现今变形迹象7初现时间],
        ["xianjinbianxingjixiangmingcheng8", infoObj.现今变形迹象8名称],
        ["xianjinbianxingjixiangbuwei8", infoObj.现今变形迹象8部位],
        ["xianjinbianxingjixiangtezheng8", infoObj.现今变形迹象8特征],
        ["xianjinbianxingjixiangchuxianshijian8", infoObj.现今变形迹象8初现时间],
        ["siwangrenshu", infoObj.滑坡危害已造成危害死亡人数],
        ["sunhuaifangwuhu", infoObj.滑坡危害已造成危害损坏房屋户],
        ["sunhuaifangwujian", infoObj.滑坡危害已造成危害损坏房屋间],
        ["huilu", infoObj.滑坡危害已造成危害毁路],
        ["huiqu", infoObj.滑坡危害已造成危害毁渠],
        ["qitaweihai", infoObj.滑坡危害已造成危害其它危害],
        ["zhijiesunshi", infoObj.滑坡危害已造成危害直接损失],
        ["jianjiesunshi", infoObj.滑坡危害已造成危害间接损失],
        ["zaiqingdengji", infoObj.滑坡危害已造成危害灾情等级],
        ["zaihaileixing", infoObj.诱发灾害灾害类型],
        ["bojifanwei", infoObj.诱发灾害波及范围],
        ["zaochengsunshi", infoObj.诱发灾害造成损失],
        ["weixiefangwu", infoObj.潜在危害威胁房屋],
        ["weixierenshu", infoObj.潜在危害威胁人数],
        ["weixiecaichan", infoObj.潜在危害威胁财产],
        ["xianqingdengji", infoObj.潜在危害险情等级],
        ["yaoganjieyidian", infoObj.遥感解译点],
        ["kanchadian", infoObj.勘察点],
        ["cehuidian", infoObj.测绘点],
        ["fangzaiyuandian", infoObj.防灾预案群测群防点],
        ["yinhuandian", infoObj.隐患点],
        ["yewaijiluxinxi", infoObj.野外记录信息],
        ["diaochafuzeren", infoObj.调查负责人],
        ["tianbiaoren", infoObj.填表人],
        ["shenheren", infoObj.审核人],
        ["shenheriqi", infoObj.填表日期],
        ["diaochadanwei", infoObj.调查单位]
    ];
    utilWriteInputTypeOfTEXT(textRes);

    //勾选RADIO
    var radioRes = [
        ["huaposhijianradio", infoObj.滑坡年代],
        ["huapoleixing", infoObj.滑坡类型],
        ["huapoxingzhi", infoObj.滑坡性质],
        ["xiepoyuheliuweizhi1", infoObj.斜坡与河流位置.split(',')[0]],
        ["xiepoyuheliuweizhi2", infoObj.斜坡与河流位置.split(',')[1]],
        ["poxing", infoObj.原始斜坡坡形],
        ["xipojiegouleixing1", infoObj.原始斜坡斜坡结构类型.split(',')[0]],
        ["xipojiegouleixing2", infoObj.原始斜坡斜坡结构类型.split(',')[1]],
        ["pingmianxingtai", infoObj.外形特征平面形态],
        ["poumianxingtai", infoObj.外形特征剖面形态],
        ["jiegoutezhengjiegou", infoObj.结构特征滑体结构],
        ["jiegoutezhengkuaidu", infoObj.结构特征滑体块度],
        ["humianjihuadaixingtai", infoObj.结构特征滑面及滑带特征形态],
        ["humianjihuadaihuadaitumingcheng", infoObj.结构特征滑面及滑带特征滑带土名称],
        ["bianxinghuodongjieduan", infoObj.变形活动阶段],
        ["muqianwendingzhuangkuang", infoObj.稳定性分析目前稳定状况],
        ["fazhanqushifenxi", infoObj.稳定性分析发展趋势分析]
    ];
    utilSelectRADIOorCHECKBOX(radioRes, 'radio');

    //勾选CHECKBOX
    var chkRes = [
        ["weidimao", infoObj.微地貌],
        ["dixiashuileixing", infoObj.地下水类型],
        ["dixiashuiloutou", infoObj.地下水露头],
        ["dixiashuibujileixing", infoObj.地下水补给类型],
        ["tudishiyong", infoObj.土地使用],
        ["huapochengyinzhudaoyinsu", infoObj.滑坡成因主导因素],
        ["ziranyouyin", infoObj.滑坡成因自然诱因],
        ["dizhiyinsu", infoObj.滑坡成因地质因素],
        ["dimaoyinsu", infoObj.滑坡成因地貌因素],
        ["wuliyinsu", infoObj.滑坡成因物理因素],
        ["renweiyinsu", infoObj.滑坡成因人为因素],
        ["fuhuoyoufayinsu", infoObj.稳定性分析复活诱发因素],
        ["jiancejianyi", infoObj.监测建议],
        ["quncequnfangvalue", infoObj.群测群防],
        ["zhuanyejiancevalue", infoObj.专业监测],
        ["banqianbirangvalue", infoObj.搬迁避让],
        ["gongchengzhilivalue", infoObj.工程治理]
    ];
    var handleChkResArr = [];
    for (var i = 0; i < chkRes.length; i++) {
        utilHandleCheckboxData(chkRes[i][0], chkRes[i][1], handleChkResArr);
    }
    utilSelectRADIOorCHECKBOX(handleChkResArr, 'checkbox');
    //特殊处理防治建议
    selectFangZhiJianYi(infoObj.防治建议);
    //特殊处理危害对象
    selectWeiHaiOrWeiXieDuiXiang([["weihaiduixiang", "weihaiduixiangqita", infoObj.滑坡危害已造成危害危害对象], ["weixieduixiang", "weixieduixiangqita", infoObj.潜在危害威胁对象]]);
}


/*
*Title:
*     处理危害对象、威胁对象内容回收
*Description:
*     因危害对象和威胁对象checkbox涉及其它自定义内容的填写，故添加特定函数处理
*Domain:
*     Private
*/
function handleWeiHaiDuiXiangQiTa(chkname, textname) {
    var resultStr = "";
    $('input[name="' + chkname + '"]:checked').each(function () {
        if ($(this).val() == "其它") {
            resultStr = resultStr + "：," + $('#' + textname + '').val();
        }
    });
    return resultStr;
}

/*
*Title:
*     处理防治建议对象内容回收
*Description:
*     防治建议不是特定字段，分化到了多个区域，使用此函数处理
*Domain:
*     Private
*/
function handleFangZhiJianYi() {
    var nameArr = ["quncequnfang", "zhuanyejiance", "banqianbirang", "gongchengzhili", "yingjipaiweichuxian", "lijingshipai"];
    var resultStr = "";
    for (var i = 0; i < nameArr.length; i++) {
        $('input[name="' + nameArr[i] + '"]:checked').each(function () {
            resultStr = resultStr + $(this).val() + ",";
        });
    }
    resultStr = resultStr.substring(0, resultStr.length - 1);
    return resultStr;
}

/*
*Title:
*     根据防治建议勾选值选中对应checkbox
*Description:
*     防治建议不是特定字段，分化到了多个区域，使用此函数处理
*Domain:
*     Private
*/
function selectFangZhiJianYi(values) {
    var valueArr = values.split(',');
    var nameArr = ["quncequnfang", "zhuanyejiance", "banqianbirang", "gongchengzhili", "yingjipaiweichuxian", "lijingshipai"];
    for (var i = 0; i < valueArr.length; i++) {
        for (var j = 0; j < nameArr.length; j++) {
            $('[name=' + nameArr[j] + ']:checkbox').each(function () {
                if ($(this).val() == valueArr[i]) {
                    this.checked = true;
                }
            });
        }
    }
}

/*
*Title:
*     危害对象和威胁对象涉及checkbox和其它text框的填写，此函数处理
*Description:
*     null
*Domain:
*     Private
*/
function selectWeiHaiOrWeiXieDuiXiang(values) {
    for (var i = 0; i < values.length; i++) {
        //checkbox组name，其它内容文本框id，数据库传回来的串值
        var tempObj = values[i];
        var valueArr = tempObj[2].split('：');

        var chkResTemp = [];
        var childValueArr = valueArr[0].split(',');
        for (var j = 0; j < childValueArr.length; j++) {
            chkResTemp.push([tempObj[0], childValueArr[j]]);
        }
        utilSelectRADIOorCHECKBOX(chkResTemp, 'checkbox');

        //其它勾选时，文本框内容填充
        if (valueArr.length > 1) {
            $("#" + tempObj[1]).val(valueArr[1].substring(1, valueArr[1].length));
        }

    }
}