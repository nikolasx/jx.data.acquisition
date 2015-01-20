

(function () {


    "use strict";
    var page = WinJS.UI.Pages.define("/html/container/container.html", {

        ready: function (element,options) {

            initPage.addPages();
        },

        unload: function () {

        }

    });

    var initPage = {
        
        addPages: function () {

            //添加html到基本页面
            window.zoomedInView = document.getElementById("view-zoomedin").winControl;
            zoomedInView.addPage("/html/home/home.html", "home");
            zoomedInView.addPage("/html/menu/menu.html", "menu");
            //zoomedInView.addPage("/html/paint/paint.html", "paint");

            //添加预览页面
            window.zoomedOutView = document.getElementById("view-zoomedout").winControl;
            zoomedOutView.addPage("/html/home/homepreview.html", "preview-home");

            zoomedInView.registerViewChangeHandler(AppBarHandlers.ActivateAppBar);
            zoomedOutView.registerViewChangeHandler(AppBarHandlers.ActivateAppBar);

            window.appBarHost = document.getElementById("appbar");
            window.appBar = appBarHost.winControl;
            appBar.showOnlyCommands(appBarHost.querySelectorAll(".appbar-appedgy"));
        }
    };

})();