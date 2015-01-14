

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
            
        }
    };

})();