/// <reference path="../workingguidecard/workingguidecark.html" />
/// <reference path="../workingguidecard/workingguidecark.html" />


(function () {

    "use strict";

    WinJS.UI.Pages.define("/html/QCQF/qcqf/qcqf.html", {

        ready: function () {

            QCQF.initialize();
        },

        unload: function () {

        }
    });

    WinJS.Namespace.define("QCQF", {



        //初始化方法
        initialize: function () {
            $("#qcqfContainer").attr("src", "/html/QCQF/preplan/preplan.html");
            this.attachEvents();
        },


        //事件
        attachEvents: function () {


            //返回
            $("#qcqfTitleIcon,#qcqfTitle").click(function () {
                $("#secondPageContainer").css("height", "0");
                $("#firstPageContainer").css("height", "100%");
            });

            //表的选择
            $(".qcqfList>li").click(function () {
                var index = $(".qcqfList>li").index(this);
                $(".qcqfList>li").removeClass("qcqfSelected");
                $(this).addClass("qcqfSelected");
                switch (index) {
                    case 0:
                        $("#qcqfContainer").attr("src", "/html/QCQF/preplan/preplan.html");
                        break;
                    case 1:
                        $("#qcqfContainer").attr("src", "/html/QCQF/workingguidecard/workingguidecard.html");
                        break;
                    case 2:
                        $("#qcqfContainer").attr("src", "/html/QCQF/avoidriskcard/avoidriskcard.html");
                        break;
                    default:
                }
            });
        }
    });

})();