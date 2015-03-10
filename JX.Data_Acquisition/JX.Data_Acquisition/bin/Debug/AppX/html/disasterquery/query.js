

(function () {

    "use strict";

    WinJS.UI.Pages.define("/html/disasterquery/query.html", {

        ready: function (element, options) {

            WinJS.UI.processAll(element);
            disasterQuery.initialize();
        },

        unload: function () { }

    });



    WinJS.Namespace.define("disasterQuery", {

        showResult: false,
        map: null,

        initialize: function () {
            this.attachEvents();
            this.addMap();
            //this.addMarks();

            this.queryResultList = new WinJS.Binding.List(this.queryResult);
            this.queryResultListView = document.querySelector("#queryResultListView").winControl;
        },

        //添加右侧地图
        addMap: function () {

            this.map = new OpenLayers.Map("queryMap", {
                maxExtent: new OpenLayers.Bounds(12523442.7142433, 2504688.54284865, 13775786.9856676, 3757032.81427298),
                //controls:[nav],
                numZoomLevels: 6,
                maxResolution: (13775786.9856676 - 12523442.7142433) / 256,
                theme: null
            });

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

        typeListView: null,

        disTypeCheckbox: new WinJS.Binding.List([{ title: "全选", value: 0 }, { title: "斜坡", value: 64 },
                                                { title: "滑坡", value: 8 }, { title: "崩塌", value: 16 },
                                                { title: "泥石流", value: 1 }, { title: "地裂缝", value: 4 },
                                                { title: "地面塌陷", value: 2 }, { title: "地面沉降", value: 32 }]),

        attachEvents: function () {
            var self = this;
            //模拟导航
            $("#queryReturnIcon,#queryTitle").click(function () {
                if (self.showResult) {
                    $("#queryConditionsPanel").show().siblings().hide();
                    self.removeMarks();
                    self.showResult = false;
                } else {
                    $("#secondPageContainer").css("height", "0");
                    $("#firstPageContainer").css("height", "100%");
                }
            });

            var typeListview = document.querySelector("#disasterTypeListView").winControl;
            this.typeListView = typeListview;
            var allSelected = false;
            //全选按钮事件
            typeListview.addEventListener("selectionchanged", function (evt) {
                var selectionCount = typeListview.selection.count();
                typeListview.selection.getItems().done(function (items) {
                    var hasAll = items.some(function (item) {
                        return item.data.title == "全选";
                    });
                    if (hasAll && selectionCount < 8 && !allSelected) {
                        typeListview.selection.selectAll();
                        allSelected = true;
                    }
                    if (hasAll && selectionCount < 8 && allSelected) {
                        typeListview.selection.remove(0);
                        allSelected = false;
                    }
                    if (!hasAll && allSelected) {
                        allSelected = false;
                        typeListview.selection.clear();
                    }
                    if (!hasAll && !allSelected && selectionCount == 7) {
                        typeListview.selection.selectAll();
                        allSelected = true;
                    }
                });

            }, false);


            //查询数据
            $("#queryCommit").click(function () {
                self.showResult = true;
                self.queryResultCurrentList.splice(0, self.queryResultCurrentList.length);
                $("#queryConditionsPanel").hide().siblings().show();
                disasterDb.getAllData("investgation", $.proxy(self.getData, self));
            });

            //查询的结果列表的长滚动事件
            self.queryResultListView = document.querySelector("#queryResultListView").winControl;
            var template = self.queryResultListView.itemTemplate;
            self.queryResultListView.itemTemplate = self.loadMoreData(template);

        },

        queryResultListView: null,
        queryResultCurrentList: new WinJS.Binding.List([]),
        queryResultList: null,

        //获取查询结果数据
        getData: function (disasters) {
            var that = this;
            var selectTypes = this.typeListView.selection.getItems()
            .then(function (items) {

                var conditions = items.map(function (item) {
                    return item.data.value;
                });
                var result = disasters.filter(function (disaster) {
                    return AppUtil.isValueInArray(disaster.灾害类型, conditions);
                });
                result.forEach(function (item) {
                    item.灾害类型 = AppUtil.getTypeFromEnumToStr(item.灾害类型);
                });
                that.queryResultList = result;
                that.queryResultCurrentList = new WinJS.Binding.List([]);
                for (var i = 0; i < 20 && i < that.queryResultList.length; i++) {
                    that.queryResultCurrentList.push(that.queryResultList[i]);
                }
                that.queryResultListView.itemDataSource = that.queryResultCurrentList.dataSource;
                that.addMarks(result.slice(0, 20));
            });
        },

        //循环滚动数据加载
        loadMoreData: function (template) {
            var that = this;
            return function (itemPromise) {
                var fetching;
                return itemPromise.then(function (item) {
                    if (item.key === that.queryResultCurrentList.getItem(that.queryResultCurrentList.length - 1).key) {
                        if (!fetching) {
                            fetching = true;
                            WinJS.Promise.timeout(Math.random() * 1000 + 1000).then(function () {
                                var points = [];
                                for (var i = that.queryResultCurrentList.length, begin = i; i < begin + 8
                                && i < that.queryResultList.length; i++) {
                                    that.queryResultCurrentList.push(that.queryResultList[i]);
                                    points.push(that.queryResultList[i]);
                                }
                                that.addMarks(points);
                                fetching = false;
                            });
                        }
                    }
                    return template(itemPromise);
                });
            };
        },


        //在地图上添加mark点
        addMarks: function (data) {

            //随机在地图上添加200个mark图标，点击图标后显示各个标志地点的经纬度信息
            if (!this.markers || !this.markers.options) {
                this.markers = new OpenLayers.Layer.Markers("markers");
                this.map.addLayer(this.markers);
            }

            var marker = Array(data.length);
            var size = new OpenLayers.Size(20, 20);
            var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
            var icon = new OpenLayers.Icon('/images/img/marker-green.png', size, offset);
            for (var i = 0; i < marker.length; i++) {
                var NS = LatToMetersGCXZ(data[i].纬度);
                var WE = LonToMetersGCXZ(data[i].经度);
                marker[i] = new OpenLayers.Marker(new OpenLayers.LonLat(WE, NS), icon.clone());
                marker[i].id = i + "";
                this.markers.addMarker(marker[i]);

            }
        },

        //移除地图上的mark点
        removeMarks: function () {
            this.markers.destroy();
        }
    });


    //经纬度与墨卡托互相转换
    var originShiftGCXZ = 2 * Math.PI * 6378137 / 2.0;
    //将经纬度转换成墨卡托直角坐标
    function LonToMetersGCXZ(lon) {
        return lon * originShiftGCXZ / 180.0;
    }
    function LatToMetersGCXZ(lat) {
        var y = Math.log(Math.tan((90 + lat) * Math.PI / 360.0)) / (Math.PI / 180.0);
        return y * originShiftGCXZ / 180.0;
    }


})();