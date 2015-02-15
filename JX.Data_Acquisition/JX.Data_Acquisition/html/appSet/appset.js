

//系统设置页面脚本

(function () {

    "use strict";

    var page = WinJS.UI.Pages.define("/html/appSet/appset.html", {

        ready: function (element, options) {
            appSet.initialize();
        },

        unload: function () {

        }
    });

    var appSet = {

        initialize: function () {

            this.attachEvents();
        },

        attachEvents: function () {

            var that = this;
            //业务数据操作
            $("#appSetDownData").click(function () {

                var netSate = AppUtil.checkNetwork();
                if (netSate == -1) {
                    messageDialog.defaultMessage("您当前网络处于离线状态");
                } else {
                    messageDialog.customerMessage("业务数据下载", "下载数据将会清除当前数据，是否继续？",
                        "下载", "取消", $.proxy(that.downDisasterData, that));
                }
            });


            $("#appSetUploadData").click(function() {
                var netSate = AppUtil.checkNetwork();
                if (netSate == -1) {
                    messageDialog.defaultMessage("您当前网络处于离线状态");
                } else {
                    messageDialog.customerMessage("业务数据上传", "您将上传本系统中的业务数据",
                        "确定", "取消", $.proxy(that.upLoadDisasterData, that));
                }
            });

        },


        //下载业务数据
        downDisasterData: function () {
            loadDisaster.loadInvestgation();
        },

        //上传业务数据
        upLoadDisasterData: function() {
            disasterDb.getAllData("investgation", $.proxy(this.getData, this));
        },

        getData:function(data) {
           
        }


    };

})();





var loadDisaster = {

    loadInvestgation: function () {

        var url = "http://127.0.0.1/webapi/api/InvestigationFS/ComprehensiveFSS";
        WinJS.xhr({ url: url, responseType: "json" }).then(function (result) {

            if (result.status == 200) {
                //下载之前先清空数据库
                disasterDb.clearAllData("investgation", function() {
                    var disasters = JSON.parse(result.response);
                    for (var i = 0; i < disasters.length; i++) {
                        disasterDb.addDisaster(disasters[i], "investgation");
                    }
                    messageDialog.defaultMessage("数据下载成功");
                });

            } else {
                messageDialog.defaultMessage("数据下载失败");
            }

        });
    }


};