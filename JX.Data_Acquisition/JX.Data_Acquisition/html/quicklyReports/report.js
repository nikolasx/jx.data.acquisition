

(function () {

    "use strict";

    WinJS.UI.Pages.define("/html/quicklyReports/report.html", {

        ready: function () {

            Report.initialize();
        },

        unload: function () { }
    });

    WinJS.Namespace.define("Report", {

        //初始化方法
        initialize: function () {

            this.attachEvents();
        },

        attachEvents: function () {
            //返回
            $("#reportTitleIcon,#reportTitle").click(function () {
                $("#secondPageContainer").css("height", "0");
                $("#firstPageContainer").css("height", "100%");
            });
        }
    });
})();