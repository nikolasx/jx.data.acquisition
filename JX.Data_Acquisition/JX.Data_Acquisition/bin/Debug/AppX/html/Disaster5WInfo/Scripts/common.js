/// <reference path="huapo.js" />
/// <reference path="../../Scripts/jquery-1.7.1.min.js" />

/*
*页面初始化函数
*/
function eventInitialize() {
    //初始化控件
    initialisePlug();
    //注册页面切换事件
    registerNavigator();
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
    $(".naviChlid").click(function () {
        var clickObj = $(this);
        var index = $(".naviChlid").index(clickObj);
        if (clickObj.hasClass("naviChildSelected")) { return; }
        var selectedIndex = $(".naviChlid").index($(".naviChildSelected"));
        $(".naviChlid").removeClass("naviChildSelected");
        clickObj.addClass("naviChildSelected");
        var backPixControlArr=[1100,1550,1500,700]
        $("#infoPageChart" + (selectedIndex + 1)).fadeOut("fast", function () {
            $(".mainWindow").height(backPixControlArr[index]);
            //alert(backPixControlArr[index]);
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
            code: $("#tybhcounty").val(),
            name: $("#disasterType").html()
        };

        $.post(_pOSTurl, conditionObj, function (cbData) {
            //alert(cbData);
            $("#tybhresult").val(cbData);
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
    var tempArr = values.split(',');
    for (var i = 0; i < tempArr.length; i++) {
        resultArr.push([chkName, tempArr[i]]);
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

