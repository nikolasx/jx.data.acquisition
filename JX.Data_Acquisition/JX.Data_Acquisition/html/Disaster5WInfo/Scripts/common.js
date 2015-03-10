/// <reference path="huapo.js" />
/// <reference path="../../Scripts/jquery-1.7.1.min.js" />

/*
*页面初始化函数
*/
function eventInitialize() {
    //样式控制
    //window.open形式 调用HTML展示数据时该函数起作用
    initEvents4WindowOpenStyle();
    //初始化控件
    initialisePlug();
    //注册页面切换事件
    registerNavigator();
}

function initChartStyle(isUrl) {
    var marginLeftPx = 50;
    if (isUrl) {
        var mainWindowWidth = $(".mainWindow").width();
        marginLeftPx = mainWindowWidth * 0.25;
    }
    $("#navigatorMenu").css("margin-left", marginLeftPx + "px");
    $(".infoPageChart").css("margin-left", marginLeftPx + "px");
}

function initEvents4WindowOpenStyle() {
    var url = location.search;
    if (url == "") { initChartStyle(false); return; }
    initChartStyle(true);
    var requestConditions = utilGetRequest();
    var _getDisasterDataUrl = requestConditions["controllerUrl"];
    var getDisasterDataUrl = unescape(_getDisasterDataUrl);
    $.post(getDisasterDataUrl, { disasterInfoTybh: requestConditions["tybh"] }, function (data) {
        switch (requestConditions["type"]) {
            case "huapo":
                showLandslideInfos(data);
                break;
            case "xiepo":
                showSlopeInfos(data);
                break;
        }
        controlElementsOfPages(true);
    })
}

/*
*初始化必备插件
*/
function initialisePlug() {
    //日期控件初始化
    $(".timecell").calendar();
    $(".timeCellAll").calendar({
        format: 'yyyy-MM-dd HH:mm:ss'
    });
}

/*
*页面内导航条切换方法
*/
function registerNavigator() {
    //样式控制
    var childHeightInit = $("#infoPageChart1").height();
    $(".mainWindow").height(childHeightInit + 150);

    //导航菜单切换事件注册
    $(".naviChlid").click(function () {
        var clickObj = $(this);
        var index = $(".naviChlid").index(clickObj);
        if (clickObj.hasClass("naviChildSelected")) { return; }
        var selectedIndex = $(".naviChlid").index($(".naviChildSelected"));
        $(".naviChlid").removeClass("naviChildSelected");
        clickObj.addClass("naviChildSelected");
        $("#infoPageChart" + (selectedIndex + 1)).fadeOut("fast", function () {
            //获取当前子窗口高度
            var childHeight = $("#infoPageChart" + (index + 1)).height();
            $(".mainWindow").height(childHeight + 150);
            $("#infoPageChart" + (index + 1)).show();
        })
    });
}


/*
*激活统一编号计算窗口
*/
function activeTybhPage(cityArray, postUrl) {
    //测试县市实例
    //分析县市数组形成select选项
    var cityCountyRes = utilAnalyseCityArray(cityArray);
    var cityOptionStr = '';
    //市级
    for (var j = 0; j < cityCountyRes.length; j++) {
        var cityInfo = cityCountyRes[j][0];
        cityOptionStr += '<option value="' + cityInfo[0] + '">' + cityInfo[1] + '</option>';
    }
    //县级初始加载第一个市所辖内容
    var countyInitOptionStr = '';
    if (cityCountyRes.length > 1) {
        var _1stCountysInfo = cityCountyRes[0][1];
        for (var m = 0; m < _1stCountysInfo.length; m++) {
            countyInitOptionStr += '<option value="' + _1stCountysInfo[m][0] + '">' + _1stCountysInfo[m][1] + '</option>'
        }
    }

    //拼接页面字符串
    var divStr = '' +
    '<div id="calculateTybh" style="position: absolute; width: 300px; height: 185px; border: 1px solid #7c4218; background-color: #DDEAFF; top: 15%; left: 30%; font-size:14px; display:none;">' +
        '<div style="width: 100%; height: 45px; margin-top: 6px;">' +
            '<div style="float: left; text-align: right; line-height: 45px; height: 45px; width: 114px; font-family: \'Microsoft YaHei UI\'; color: #0a045c;">设区市：</div>' +
            '<div style="float: left; line-height: 45px; height: 45px; width: 180px;">' +
                '<select id="tybhcity" style="width: 150px; height: 27px; margin-top: 12px; margin-left: 5px;">' + cityOptionStr + '</select>' +
            '</div>' +
        '</div>' +
        '<div style="width: 100%; height: 45px;">' +
            '<div style="float: left; text-align: right; line-height: 45px; height: 45px; width: 114px; font-family: \'Microsoft YaHei UI\'; color: #0a045c;">县：</div>' +
            '<div style="float: left; line-height: 45px; height: 45px; width: 180px;">' +
                '<select id="tybhcounty" style="width:150px ; height: 27px; margin-top: 12px; margin-left: 5px;">' + countyInitOptionStr + '</select>' +
            '</div>' +
        '</div>' +
        '<div style="width: 100%; height: 45px;">' +
            '<div style="float: left; text-align: right; line-height: 45px; height: 45px; width: 114px; font-family: \'Microsoft YaHei UI\'; color: #0a045c;">计算结果：</div>' +
            '<div style="float: left; line-height: 45px; height: 45px; width: 180px;">' +
                '<input id="tybhresult" type="text" style="width: 151px; height: 24px; margin-left:4px; margin-top:12px;" disabled="disabled"/>' +
            '</div>' +
        '</div>' +
        '<div style="width: 100%; height: 35px;font-family:\'Microsoft YaHei UI\';color:#ffffff;font-size:13px;">' +
            '<div id="calulateTybhClose" style="float:right;width:60px;height:25px;border:1px solid #2c295b;margin-top:3px;margin-right:32px;text-align:center;line-height:25px;background-color:#0a045c;cursor:pointer;">关闭</div>' +
            '<div id="calulateTybhOK" style="float:right;width:60px;height:25px;border:1px solid #2c295b;margin-top:3px;margin-right:10px;text-align:center;line-height:25px;background-color:#0a045c;cursor:pointer;">计算</div>' +
        '</div>' +
    '</div>';
    $(".mainWindow").append(divStr);
    $("#tybhcity").change(function () {
        var countyNewStr = '';
        var selectedIndex = $("#tybhcity option").index($("#tybhcity option:selected"));
        var thiscityInfo = cityCountyRes[selectedIndex][1];
        for (var n = 0; n < thiscityInfo.length; n++) {
            countyNewStr += '<option value="' + thiscityInfo[n][0] + '">' + thiscityInfo[n][1] + '</option>'
        }
        $("#tybhcounty").empty().append(countyNewStr);
    });

    //表内统一编号注册点击事件,由于INPUT本身不能编辑，给其父节点注册点击事件
    $("#tongyibianhao").parent().click(function () {
        $("#calculateTybh").show();
    });

    //计算统一编号
    $("#calulateTybhOK").click(function () {
        var _pOSTurl = postUrl;
        var conditionObj = {
            regioncode: $("#tybhcounty").val(),
            disatype: $("#disasterType").html()
        };

        $.post(_pOSTurl, conditionObj, function (cbData) {
            $("#tongyibianhao").val(cbData);
        })
    });

    //关闭小窗口
    $("#calulateTybhClose").click(function () {
        $("#calculateTybh").hide();
        $("#tybhresult").val("");
    })
}

/*
*页面内元素禁用和解禁方法
*/
function controlElementsOfPage(state) {
    //input类
    $('input').attr("readonly", state);
    $('textarea').attr("readonly", state);
    $('input[type=radio]').attr("disabled", state);
    $('input[type=checkbox]').attr("disabled", state);
    //select类
    $('select').attr("disabled", state);
}

/*
*内部工具函数，处理checkbox值获取
*/
function utilGetCheckboxVal(chkName) {
    var chk_value = "";
    $('input[name="' + chkName + '"]:checked').each(function () {
        chk_value = chk_value + $(this).val() + ",";
    });
    chk_value = chk_value.substring(0, chk_value.length - 1);
    return chk_value;
}

/*
*内部工具函数，数据批量写入文本框
*/
function utilWriteInputTypeOfTEXT(res) {
    //[[textid,textvalue],[],[]...]
    for (var i = 0; i < res.length; i++) {
        if ($("#" + res[i][0]).length == 0) {
            alert(res[i][0]);
        }
        $("#" + res[i][0]).val(res[i][1]);
    }
}

/*
*内部工具函数，处理select和checkbox选取
*/
function utilSelectRADIOorCHECKBOX(res, type) {
    //[[radioname,value],[]...]
    for (var i = 0; i < res.length; i++) {
        $('[name=' + res[i][0] + ']:' + type).each(function () {
            if ($(this).val() == res[i][1]) {
                this.checked = true;
            }
        });
    }
}

/*
*内部工具函数，处理checkbox组值为特定格式
*/
function utilHandleCheckboxData(chkName, values, resultArr) {
    if (values != undefined && values != null) {
        var tempArr = values.split(',');
        for (var i = 0; i < tempArr.length; i++) {
            resultArr.push([chkName, tempArr[i]]);
        }
    }
    return resultArr;
}

/*
*内部工具函数，处理市县数组
*/
function utilAnalyseCityArray(data) {
    var returnRes = [];
    var cityArr = [];
    var countyArr = [];
    //先按市、县分组
    for (var i = 0; i < data.length; i++) {
        if (/\d{3}[1-9]00/.test(data[i][0])) {
            //市级编码
            cityArr.push(data[i]);
        } else if (/\d{3}000/.test(data[i][0])) {
            //省级编码忽略
        } else {
            countyArr.push(data[i]);
        }
    }
    //把县区归属到各自设区市下
    for (var j = 0; j < cityArr.length; j++) {
        //取得该市的唯一码，3-4位
        var countyRes = [];
        var cityCode = cityArr[j][0].substring(2, 4);
        for (var m = 0; m < countyArr.length; m++) {
            var countyCode = countyArr[m][0].substring(2, 4);
            if (cityCode == countyCode) countyRes.push(countyArr[m]);
        }
        returnRes.push([cityArr[j], countyRes]);
    }
    return returnRes;
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
        var valueArr = (tempObj[2] != undefined && tempObj[2] != null ? tempObj[2].split('：') : ['', '']);

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

function utilGetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var strTemp = url.substr(1);
        strs = strTemp.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}


function utilGetDateElement(date, index) {
    if (date == "") return "";
    var tempRes = [];
    var _1r = date.split(" ");
    //截取年月日标志参数
    var splitMark = "-";
    var splitNum = 0;
    //截取时分秒标志参数
    if (index >= 3) { splitMark = ":"; splitNum = 1; index = index - 3; }
    if (_1r.length >= 1) {
        var _2r = _1r[splitNum].split(splitMark);
        for (var i = 0; i < _2r.length; i++) {
            tempRes.push(_2r[i]);
        }
    }
    return tempRes[index];
}

//处理岩体块度，私用
var privateUtilHandleYTKD = function (val, index) {
    if (val == "") return "";
    var _1r = val.split("×");
    if (_1r.length < index + 1) return "";
    return _1r[index];
}