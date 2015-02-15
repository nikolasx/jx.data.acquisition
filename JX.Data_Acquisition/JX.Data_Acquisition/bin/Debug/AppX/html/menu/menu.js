

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


            //平面手绘
            $("#menuPaint").click(function () {
                nav.navigate("/html/paint/paint.html");
            });


            //查询显示
            $("#menuDisasterQuery").click(function () {
                nav.navigate("/html/disasterquery/query.html");
            });

        }


    });



})();