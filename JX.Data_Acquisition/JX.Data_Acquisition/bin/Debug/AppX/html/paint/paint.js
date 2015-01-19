


/*手绘页面脚本*/

(function () {

    var page = WinJS.UI.Pages.define("/html/paint/paint.html", {

        ready: function (element, options) {

            $("#paintCanvas").paint();

        },

        unload: function () {
        }
    });





})();

//CANVAS 绘图
(function () {

    var CanvasPaint = function () {

    }


    $.fn.paint = function (option) {

        this.each(function () {

            if (this.nodeName.toLowerCase() != "canvas")
                return;
            var $this = $(this),
                data = $this.data("paint");

            if (!data) {
                $this.data("paint", data = new CanvasPaint());
            }
        });

    }

})();