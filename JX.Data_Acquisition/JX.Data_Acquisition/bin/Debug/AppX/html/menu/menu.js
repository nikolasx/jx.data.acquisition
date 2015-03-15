

(function () {

    "use strict";

    var nav = WinJS.Navigation;

    var page = WinJS.UI.Pages.define("/html/menu/menu.html", {

        ready: function (element, options) {

            menuPage.initialize();

        },

        unload: function () {
        }



    });



    WinJS.Namespace.define("menuPage", {



        //初始化函数
        initialize: function () {


            this.attachEvents();
        },


        attachEvents: function () {


            //基础数据
            $("#menuBaseData").click(function () {
                nav.navigate("/html/disaster/disaster.html");
            });

            //速报
            $("#menuPaint").click(function () {
                nav.navigate("/html/quicklyReports/report.html");
            });

            //查询显示
            $("#menuDisasterQuery").click(function () {
                nav.navigate("/html/disasterquery/query.html");
            });

            //数据统计
            $("#menuStatistic").click(function () {
                nav.navigate("/html/disasterStatistic/statistic.html");
            });

            //群测群防
            $("#menuQCQF").click(function () {
                nav.navigate("/html/QCQF/qcqf/qcqf.html");
            });

            //遥感解译点
            $("#remoteSensePoint").click(function () {
                nav.navigate("/html/remoteSensePoint/remotesensepoint.html");
            });

        }


    });



})();