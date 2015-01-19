

(function () {

    var page = WinJS.UI.Pages.define("/html/home/home.html", {

        ready: function (element, options) {

            homePage.initialize();
        },

        unload: function () {
        }
    });


    var homePage = {


        initialize: function() {
            this.addMap();
        },


        addMap: function () {
            var map = new OpenLayers.Map("mainMap", {
                maxExtent: new OpenLayers.Bounds(12523442.7142433, 2504688.54284865, 13775786.9856676, 3757032.81427298),
                numZoomLevels: 5,
                maxResolution: (13775786.9856676 - 12523442.7142433) / 256,
                theme: null
            });

            var titleLayerApp = new Zondy.Map.TileLayerForMetro("myAppDitu", "", {
                baseUrl: "/map/images/IMG"
            });

            map.addLayer(titleLayerApp);
            map.setCenter(new OpenLayers.LonLat(13034849.6, 3565059.8), 3);
        }

    };

})();