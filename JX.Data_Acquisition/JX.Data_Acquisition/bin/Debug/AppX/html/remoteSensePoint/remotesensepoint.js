

(function () {

    "use strict";

    WinJS.UI.Pages.define("/html/remoteSensePoint/remotesensepoint.html", {

        ready: function () {

            remoteSensePoint.initialize();

        },

        unload: function () { }

    });


    WinJS.Namespace.define("remoteSensePoint", {


        //初始化方法
        initialize: function () {

            this.attachEvents();
        },


        //事件
        attachEvents: function () {

            //返回
            $("#remoteTitleIcon,#remoteTitle").click(function () {
                $("#secondPageContainer").css("height", "0");
                $("#firstPageContainer").css("height", "100%");
            });
        }
    });
})();