/// <reference path="../Disaster5WInfo/Huapo.html" />


(function () {

    "use strict";

    WinJS.UI.Pages.define("/html/disaster/disaster.html", {


        ready: function () {

            disasterPage.initialize();
        },


        unload: function () {

        }

    });

    WinJS.Namespace.define("disasterPage", {


        initialize: function () {
            this.attachEvents();

            $("#DisasterTableContainer").attr("src", "/html/Disaster5WInfo/Huapo.html");
        },


        attachEvents: function () {

            $("#disasterTitleIcon,#disasterTitle").click(function () {
                //模拟导航
                $("#secondPageContainer").css("height", "0");
                $("#firstPageContainer").css("height", "100%");
            });
        }
    });
})();