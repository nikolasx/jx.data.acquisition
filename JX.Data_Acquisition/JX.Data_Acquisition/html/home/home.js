

(function () {

    var page = WinJS.UI.Pages.define("/html/home/home.html", {

        ready: function (element, options) {

            homePage.initialize();
        },

        unload: function () {
        }
    });


    var homePage = {

        map: null,

        initialize: function () {
            this.addMap();
            this.attachEvents();
        },

        //加载地图
        addMap: function () {
            var mouse = new OpenLayers.Control.MousePosition();
            var nav = new OpenLayers.Control.TouchNavigation({
                id: "myTouchNavigation"
            });
            this.map = new OpenLayers.Map("mainMap", {
                maxExtent: new OpenLayers.Bounds(12523442.7142433, 2504688.54284865, 13775786.9856676, 3757032.81427298),
                controls:[nav],
                numZoomLevels: 6,
                maxResolution: (13775786.9856676 - 12523442.7142433) / 256,
                theme: null
            });

            //R2TeamSolveMulitTouch.initialize(this.map, "myTouchNavigation");
            //R2TeamSolveMulitTouch.resetTouchNavigation();

            var titleLayerApp = new Zondy.Map.TileLayerForMetro("myAppDitu", "", {
                baseUrl: "/map/images/IMG"
            });

            var titleLayer = new Zondy.Map.TileLayer("ditu", "jxApp", {
                ip: '192.168.83.122',
                port: '6163',
                transitionEffect: 'resize'
            });

            this.map.addLayer(titleLayerApp);
            this.map.setCenter(new OpenLayers.LonLat(12997262.6, 3317403.8), 3);
        },

        //事件
        attachEvents: function () {


            $("#showAppBarForPC").click(function () {
                appBar.show();
            });

            var that = this;
            //appBar事件
            var lockBtn = document.getElementById("btnLockMap").winControl;
            lockBtn.addEventListener("click", lockMap, false);

            var resetMap = document.getElementById("btnReset").winControl;
            resetMap.addEventListener("click", function () {
                that.map.setCenter(new OpenLayers.LonLat(12997262.6, 3317403.8), 3);
            }, false);


            //锁屏
            var locked = false;
            function lockMap() {
                if (!locked) {
                    $("#mapLock").hide();
                    zoomedInView.zoomableView.beginZoom();
                    locked = true;
                } else {
                    $("#mapLock").show();
                    zoomedInView.zoomableView.endZoom();
                    locked = false;
                }
            }

        }

    };



})();