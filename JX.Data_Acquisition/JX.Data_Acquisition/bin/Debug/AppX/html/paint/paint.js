


/*手绘页面脚本*/

(function () {

    var page = WinJS.UI.Pages.define("/html/paint/paint.html", {

        ready: function (element, options) {

            paintPage.initialize();

        },

        unload: function () {
        }

    });


    var paintPage = {

        initialize: function () {
            $("#paintCanvas").paint();
            this.attachEvents();
        },

        attachEvents: function () {

            //页面跳转
            $("#paintTitleIcon,#paintTitle").click(function () {
                //模拟导航
                $("#secondPageContainer").css("height", "0");
                $("#firstPageContainer").css("height", "100%");
            });

            var canvas = $("#paintCanvas");

            $("#paintLineWidthSelect").change(function () {
                var width = $(this).val();
                canvas.paint("setLineWidth", Number(width));
            });

            $("#paintLineColorSelect").change(function () {
                var color = $(this).val();
                canvas.paint("setLineColor", color);
            });

            var isEraser = false;
            $("#paintEraser").click(function () {
                if (!isEraser) {
                    $(this).css("background-color", "#0a63a7");
                    canvas.paint("setEraser", true);
                    isEraser = true;
                } else {
                    $(this).css("background-color", "#171c22");
                    canvas.paint("setEraser", false);
                    isEraser = false;
                }
            });

            $("#paintClear").click(function () {
                canvas.paint("clear");
            });
        }

    };
})();

//CANVAS 绘图
(function () {

    var CanvasPaint = function (element, options) {

        this.context = null,
        this.brushList = null,
        this.canvas = null,
        this.output = null,
        this.animationActive = false;
        this.isEraser = false;

        this.canvas = element;
        this.options = options;
        this.container = $(element);
        this.context = element.getContext("2d");
        this.canvas.width = this.container.width();
        this.canvas.height = this.container.height();

        this.canvas.addEventListener("pointerdown", $.proxy(this.canvasHandler, this), false);
        this.canvas.addEventListener("pointermove", $.proxy(this.canvasHandler, this), false);
        this.canvas.addEventListener("pointerup", $.proxy(this.canvasHandler, this), false);
        this.canvas.addEventListener("pointerover", $.proxy(this.canvasHandler, this), false);
        this.canvas.addEventListener("pointerout", $.proxy(this.canvasHandler, this), false);
        this.canvas.addEventListener("pointercancel", $.proxy(this.canvasHandler, this), false);


        this.context.lineWidth = this.options.lineWidth;
        this.context.strokeStyle = this.options.lineColor;
        this.context.lineCap = "round";
        this.context.lineJoin = "round";
        this.brushList = new Array();
    }

    var prototype = CanvasPaint.prototype;

    prototype.canvasHandler = function (evt) {
        var brush;
        var func;
        if (this.brushList[evt.pointerId] === null ||
            this.brushList[evt.pointerId] === undefined) {
            this.brushList[evt.pointerId] = new brushTool(this);
        }

        brush = this.brushList[evt.pointerId];

        func = brush[evt.type];
        func(evt);

        if (!brush.started && !brush.over) {
            // clean up when the brush is finished
            delete this.brushList[evt.pointerId];
        }
    }

    prototype.animationHandler = function () {
        this.animationActive = false;
        for (var idx in this.brushList) {
            var currentBrush = this.brushList[idx];
            if (currentBrush.started) {
                this.context.beginPath();
                this.context.lineWidth = currentBrush.lineWidth;
                this.context.moveTo(currentBrush.prevX, currentBrush.prevY);
                this.context.lineTo(currentBrush.currentX, currentBrush.currentY);
                this.context.stroke();
                currentBrush.prevX = currentBrush.currentX;
                currentBrush.prevY = currentBrush.currentY;
                this.animationActive = true;
            }
        }
        if (this.animationActive) {
            // Request for another callback until all pointers are gone.
            window.requestAnimationFrame($.proxy(this.animationHandler, this));
        }
    }

    prototype.animationEraserHandler = function () {
        this.animationActive = false;
        for (var idx in this.brushList) {
            var currentBrush = this.brushList[idx];
            if (currentBrush.started) {
                this.context.clearRect(currentBrush.currentX - 20, currentBrush.currentY - 20, 40, 40);
                currentBrush.prevX = currentBrush.currentX;
                currentBrush.prevY = currentBrush.currentY;
                this.animationActive = true;
            }
        }
        if (this.animationActive) {
            // Request for another callback until all pointers are gone.
            window.requestAnimationFrame($.proxy(this.animationEraserHandler, this));
        }
    }

    function brushTool(self) {
        var brush = this;
        brush.started = false;
        brush.over = false;
        brush.prevX = 0;
        brush.prevY = 0;
        brush.currentX = 0;
        brush.currentY = 0;
        brush.lineWidth = self.context.lineWidth;

        // Even though the choice of raw coordinates over predicted coordinates has performance
        // overhead we will use raw coordinates because predicted coordinates don't give
        // accurate results for our purpose.
        this.pointerdown = function (evt) {
            self.canvas.setPointerCapture(evt.pointerId);
            brush.currentX = evt.currentPoint.rawPosition.x;
            brush.currentY = evt.currentPoint.rawPosition.y;
            brush.prevX = brush.currentX;
            brush.prevY = brush.currentY;
            brush.started = true;
            brush.over = true;
            if (!self.animationActive) {
                if (!self.isEraser) {
                    window.requestAnimationFrame($.proxy(self.animationHandler, self));
                } else {
                    window.requestAnimationFrame($.proxy(self.animationEraserHandler, self));
                }
                self.animationActive = true;
            }
        };

        this.pointerover = function (evt) {
            brush.over = true;
            if (brush.started) {
                brush.currentX = evt.currentPoint.rawPosition.x;
                brush.currentY = evt.currentPoint.rawPosition.y;
            } else if (evt.currentPoint.isInContact) {
                // If the Down occurred outside of the canvas element but the pointer is in contact,
                // simulate the Down behavior when the pointer enters the canvas
                brush.pointerdown(evt);
            }
        };

        this.pointermove = function (evt) {
            if (brush.started) {
                brush.lineWidth = self.context.lineWidth;
                brush.currentX = evt.currentPoint.rawPosition.x;
                brush.currentY = evt.currentPoint.rawPosition.y;
            }
        };

        this.pointerup = function (evt) {
            self.canvas.releasePointerCapture(evt.pointerId);
            brush.started = false;
        };

        this.pointerout = function (evt) {
            brush.over = false;
        };

        this.pointercancel = function (evt) {
            brush.over = false;
            brush.started = false;
        };
    }

    //公开方法
    //设置画笔颜色
    prototype.setLineColor = function (colorStr) {
        this.context.strokeStyle = colorStr;
    }
    //设置画笔粗细
    //type:number
    prototype.setLineWidth = function (width) {
        this.context.lineWidth = width;
    }
    //设置橡皮擦
    //type:bool
    prototype.setEraser = function (open) {
        this.isEraser = open[0];
    }
    //清空画布
    prototype.clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.brushList.length = 0;
    }


    $.fn.paint = function (option) {

        var args = Array.prototype.slice.call(arguments, 1);
        var innerReturn;

        var defaultOptions = {
            lineWidth: 2,
            lineColor: "#000000"
        };

        this.each(function () {

            if (this.nodeName.toLowerCase() != "canvas")
                return;

            var $this = $(this),
                data = $this.data("paint"),
                options = typeof option == "object" ? option : null;

            if (!data) {
                $this.data("paint", data = new CanvasPaint(this, $.extend(defaultOptions, options || {})));
            }

            if (typeof option == "string" && typeof data[option] == "function") {
                innerReturn = data[option].call(data, args);
            }

        });
        if (innerReturn != undefined)
            return innerReturn;
        else
            return this;
    }

})();